import type { Express } from "express";
import type { Server } from "node:http";
import { spawn } from "node:child_process";
import { storage } from "./storage";

// ---------------------------------------------------------------------------
// Helper: run a CLI command, optionally pipe stdin, return stdout
// ---------------------------------------------------------------------------
function runCommand(
  cmd: string,
  args: string[],
  stdinData?: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    // Forward all pplx-sdk env vars so the CLI can authenticate
    const env: NodeJS.ProcessEnv = {
      ...process.env,
      // Explicit mapping in case dotenv loaded them under different names
      PPLX_SDK_API_KEY: process.env.PPLX_SDK_API_KEY ?? "",
      PPLX_LLM_API_KEY: process.env.PPLX_LLM_API_KEY ?? process.env.PPLX_SDK_API_KEY ?? "",
      PPLX_SDK_BASE_URL:
        process.env.PPLX_SDK_BASE_URL ??
        "https://agent-proxy.perplexity.ai/agent_pass_through",
      PPLX_LLM_API_ADDRESS:
        process.env.PPLX_LLM_API_ADDRESS ??
        "https://agent-proxy.perplexity.ai:50051",
    };

    const proc = spawn(cmd, args, { env });
    let stdout = "";
    let stderr = "";
    proc.stdout.on("data", (d: Buffer) => { stdout += d.toString(); });
    proc.stderr.on("data", (d: Buffer) => { stderr += d.toString(); });
    proc.on("error", (err: NodeJS.ErrnoException) => {
      // Binary not found in PATH (e.g. published sandbox without pplx CLI)
      if (err.code === "ENOENT") {
        reject(Object.assign(new Error(`CLI binary '${cmd}' not found`), { code: "ENOENT" }));
      } else {
        reject(err);
      }
    });
    proc.on("close", (code) => {
      if (code !== 0) reject(new Error(`${cmd} exited ${code}: ${stderr.slice(0, 500)}`));
      else resolve(stdout);
    });
    if (stdinData) {
      proc.stdin.write(stdinData);
    }
    proc.stdin.end();
  });
}

// ---------------------------------------------------------------------------
// Category mapping — must stay in sync with client/src/data/services.ts
// ---------------------------------------------------------------------------
const CATEGORY_IDS = [
  "real-estate",
  "business-transfer",
  "client-funds",
  "financing",
  "entity-formation",
  "nominee",
  "address",
  "advisory",
  "litigation",
] as const;

type CategoryId = typeof CATEGORY_IDS[number];

const CATEGORY_LABELS: Record<CategoryId, string> = {
  "real-estate":       "Real Estate",
  "business-transfer": "Business & Entity Transfers",
  "client-funds":      "Client Funds & Property",
  "financing":         "Financing",
  "entity-formation":  "Entity Formation & Restructuring",
  "nominee":           "Nominee & Officeholder Services",
  "address":           "Registered Address Services",
  "advisory":          "Advisory & Professional Services",
  "litigation":        "Litigation & Dispute Resolution",
};

// ---------------------------------------------------------------------------
// Extraction schema (shared instruction + schema for llm extract)
// ---------------------------------------------------------------------------
const INSTRUCTION = `AML/CTF Act 2006 (Cth) s 6(5B) Table 6 expert for LAWYERS. Items 1-9: (1) real estate transactions — not court-ordered, not leases ≤30yr, not pure advice; (2) transfer body corporate/trust — not advisory; (3) holding client money in designated transaction — not own fees, not court orders; (4) debt/equity financing body corporate; (5) shelf company sale; (6) create/restructure body corporate or trust — not testamentary trusts; (7) nominee director/trustee/secretary/POA; (8) nominee shareholder; (9) registered office address. "Assisting" = implementation only, not advice alone. Categories: real-estate, business-transfer, client-funds, financing, entity-formation, nominee, address, advisory, litigation. Analyse the query and extract a structured analysis.`;

const OUTPUT_SCHEMA = JSON.stringify({
  type: "object",
  properties: {
    label: { type: "string" },
    description: { type: "string" },
    verdict: { type: "string", enum: ["designated", "not-designated", "depends"] },
    tableItem: { type: ["string", "null"] },
    verdictSummary: { type: "string" },
    customerForCDD: { type: ["string", "null"] },
    whyCaptured: { type: ["string", "null"] },
    whyExcluded: { type: ["string", "null"] },
    conditions: { type: ["array", "null"], items: { type: "string" } },
    mlRisks: {
      type: "array",
      items: {
        type: "object",
        properties: {
          risk: { type: "string" },
          level: { type: "string", enum: ["high", "medium"] },
        },
        required: ["risk", "level"],
      },
    },
    notCaughtExamples: { type: ["array", "null"], items: { type: "string" } },
    recommendedCategoryId: {
      type: "string",
      enum: ["real-estate","business-transfer","client-funds","financing","entity-formation","nominee","address","advisory","litigation"],
    },
    sources: {
      type: "array",
      items: {
        type: "object",
        properties: { label: { type: "string" }, url: { type: "string" } },
        required: ["label", "url"],
      },
    },
  },
  required: ["label", "description", "verdict", "verdictSummary", "recommendedCategoryId", "mlRisks"],
});

// ---------------------------------------------------------------------------
// Routes
// ---------------------------------------------------------------------------
export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // POST /api/search
  app.post("/api/search", async (req, res) => {
    const { query } = req.body as { query?: string };
    if (!query || typeof query !== "string" || query.trim().length < 3) {
      return res.status(400).json({ error: "Query must be at least 3 characters" });
    }

    const apiKey = process.env.PPLX_SDK_API_KEY;
    if (!apiKey) {
      // Published environment — pplx CLI credentials not available.
      // Return a structured unavailable response so the frontend can display
      // a helpful message rather than a generic error.
      return res.status(503).json({
        unavailable: true,
        error:
          "AI-powered search is only available in the development preview. " +
          "To research this service, please consult AUSTRAC guidance directly at " +
          "austrac.gov.au/new-austrac/designated-services-newly-regulated-entities/professional-designated-services",
        austracUrl:
          "https://www.austrac.gov.au/new-austrac/designated-services-newly-regulated-entities/professional-designated-services",
      });
    }

    const q = query.trim();

    try {
      // ── Step 1: Web search for context ──────────────────────────────────
      let searchContext = "";
      try {
        const searchOut = await runCommand("pplx", [
          "search", "web",
          `AML CTF Act 2006 Table 6 designated service lawyer "${q}" AUSTRAC Australia`,
          "-n", "3",
          "--country", "AU",
        ]);

        interface Hit {
          url?: string;
          title?: string;
          summary?: string;
          snippet?: string;
        }
        interface SearchResult {
          hits?: Hit[];
        }

        const parsed = JSON.parse(searchOut) as SearchResult;
        if (parsed.hits && parsed.hits.length > 0) {
          searchContext = parsed.hits
            .slice(0, 3)
            .map((h) => `URL: ${h.url}\nTitle: ${h.title}\nContent: ${h.summary ?? h.snippet ?? ""}`)
            .join("\n\n---\n\n");
        }
      } catch (searchErr) {
        console.warn("Web search step failed, continuing without context:", searchErr);
      }

      // ── Step 2: LLM extract ─────────────────────────────────────────────
      // Truncate search context to keep total token usage manageable
      const truncatedContext = searchContext
        ? searchContext.slice(0, 600)
        : "No additional context";

      // Keep the stdin payload small — the instruction carries the main guidance
      const inputRecord = JSON.stringify({
        service: q,
        context: truncatedContext,
      });

      // NOTE: do NOT pass --model flag — the default model works; "sonar" is not allowed
      // NOTE: do NOT pass --max-tokens — removing this lets the model output the full JSON
      const llmOut = await runCommand(
        "pplx",
        [
          "llm", "extract",
          "--instruction", INSTRUCTION,
          "--output-schema", OUTPUT_SCHEMA,
        ],
        inputRecord + "\n"
      );

      // Parse JSONL output — each line is a result record
      const lines = llmOut.trim().split("\n").filter(Boolean);
      let extracted: Record<string, unknown> | null = null;

      for (const line of lines) {
        try {
          const parsed = JSON.parse(line) as {
            results?: Array<{ result?: Record<string, unknown>; error?: unknown }>;
            warnings?: string[];
          };
          if (parsed.results?.[0]?.result) {
            extracted = parsed.results[0].result;
            break;
          }
          if (parsed.results?.[0]?.error) {
            const e = parsed.results[0].error as { message?: string };
            console.error("LLM extract error:", e.message ?? e);
          }
        } catch {
          // skip non-JSON lines
        }
      }

      if (!extracted) {
        console.error("No extracted result. Raw LLM output:", llmOut.slice(0, 1000));
        return res.status(502).json({
          error: "Could not analyse this service. Please try rephrasing your query.",
        });
      }

      // ── Step 3: Enrich result ──────────────────────────────────────────
      extracted.id = `search-${Date.now()}`;
      extracted.categoryId = "search-results"; // temporary — will be updated on save
      extracted.isSearchResult = true;
      extracted.tableReference = extracted.tableItem ? "s 6(5B)" : null;
      if (!extracted.professions) extracted.professions = ["Lawyers"];
      if (!Array.isArray(extracted.mlRisks)) extracted.mlRisks = [];
      if (!Array.isArray(extracted.sources)) extracted.sources = [];

      // Resolve recommendedCategoryId label for UI display
      const recCatId = extracted.recommendedCategoryId as CategoryId | undefined;
      if (recCatId && CATEGORY_LABELS[recCatId]) {
        extracted.recommendedCategoryLabel = CATEGORY_LABELS[recCatId];
      }

      // Always inject canonical AUSTRAC + Act sources
      const sources = extracted.sources as Array<{ label: string; url: string }>;
      const canonicalSources = [
        {
          label: "AUSTRAC — Professional Designated Services",
          url: "https://www.austrac.gov.au/new-austrac/designated-services-newly-regulated-entities/professional-designated-services",
        },
        {
          label: "AML/CTF Act 2006 (Cth) — s 6(5B) Table 6",
          url: "https://www.legislation.gov.au/Details/C2024C00282",
        },
      ];
      for (const src of canonicalSources) {
        if (!sources.some((s) => s.url === src.url)) {
          sources.push(src);
        }
      }

      return res.json(extracted);
    } catch (err: unknown) {
      const errObj = err as NodeJS.ErrnoException;
      // CLI binary not found — treat same as missing credentials (graceful degradation)
      if (errObj?.code === "ENOENT") {
        return res.status(503).json({
          unavailable: true,
          error:
            "AI-powered search is not available in this environment. " +
            "To research this service, please consult AUSTRAC guidance directly.",
          austracUrl:
            "https://www.austrac.gov.au/new-austrac/designated-services-newly-regulated-entities/professional-designated-services",
        });
      }
      const msg = err instanceof Error ? err.message : String(err);
      console.error("Search route error:", msg);
      return res.status(500).json({
        error: "Search failed. Please try again.",
      });
    }
  });


  // ── GET /api/saved — load all persisted AI results + custom categories ────
  app.get("/api/saved", (_req, res) => {
    try {
      const services = storage.getAllSavedServices().map((row) => ({
        ...JSON.parse(row.data),
        id: row.id,
        categoryId: row.categoryId,
        label: row.label,
        isSearchResult: true,
      }));
      const categories = storage.getAllCustomCategories();
      return res.json({ services, categories });
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("GET /api/saved error:", msg);
      return res.status(500).json({ error: "Failed to load saved results." });
    }
  });

  // ── POST /api/saved — persist a new AI result + optional new category ─────
  app.post("/api/saved", (req, res) => {
    try {
      const { service, category } = req.body as {
        service: Record<string, unknown>;
        category: { id: string; label: string; icon: string; isNew?: boolean };
      };

      if (!service || !category) {
        return res.status(400).json({ error: "Missing service or category." });
      }

      // Upsert custom category if it is brand new
      if (category.isNew) {
        storage.upsertCustomCategory({
          id: category.id,
          label: category.label,
          icon: category.icon,
          createdAt: Date.now(),
        });
      }

      // Upsert the service (strip React-only fields from stored JSON)
      const { id, categoryId, label, ...rest } = service as {
        id: string; categoryId: string; label: string; [k: string]: unknown;
      };

      storage.upsertSavedService({
        id,
        categoryId,
        label,
        data: JSON.stringify({ ...rest, categoryId, label }),
        createdAt: Date.now(),
      });

      return res.json({ ok: true });
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("POST /api/saved error:", msg);
      return res.status(500).json({ error: "Failed to save result." });
    }
  });

  // ── DELETE /api/saved/:id — remove a saved result ─────────────────────────
  app.delete("/api/saved/:id", (req, res) => {
    try {
      storage.deleteSavedService(req.params.id);
      return res.json({ ok: true });
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("DELETE /api/saved error:", msg);
      return res.status(500).json({ error: "Failed to delete result." });
    }
  });

  return httpServer;
}
