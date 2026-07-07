import { useState, useMemo, useRef, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  categories as staticCategories,
  transactions as staticTransactions,
  type TransactionType,
  type ServiceCategory,
  type Verdict,
} from "@/data/services";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle,
  XCircle,
  AlertCircle,
  Shield,
  Sun,
  Moon,
  ExternalLink,
  AlertTriangle,
  Search,
  Loader2,
  BookOpen,
  Scale,
  Tag,
  ChevronDown,
  ChevronRight,
  Save,
  Pencil,
  Plus,
  FolderPlus,
  Trash2,
  RefreshCw,
} from "lucide-react";
import { apiRequest, queryClient, API_BASE } from "@/lib/queryClient";

// ── Theme ─────────────────────────────────────────────────────────────────────
function useTheme() {
  const [isDark, setIsDark] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);
  return { isDark, toggle: () => setIsDark((d) => !d) };
}

// ── Verdict config ─────────────────────────────────────────────────────────────
const verdictConfig: Record<
  Verdict,
  {
    label: string;
    color: string;
    bgColor: string;
    borderColor: string;
    Icon: typeof CheckCircle;
  }
> = {
  designated: {
    label: "DESIGNATED SERVICE",
    color: "text-teal-700 dark:text-teal-400",
    bgColor: "bg-teal-50 dark:bg-teal-950/40",
    borderColor: "border-teal-300 dark:border-teal-700",
    Icon: AlertTriangle,
  },
  "not-designated": {
    label: "NOT DESIGNATED",
    color: "text-emerald-700 dark:text-emerald-400",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/40",
    borderColor: "border-emerald-300 dark:border-emerald-700",
    Icon: CheckCircle,
  },
  depends: {
    label: "DEPENDS ON CIRCUMSTANCES",
    color: "text-amber-700 dark:text-amber-400",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
    borderColor: "border-amber-300 dark:border-amber-600",
    Icon: AlertCircle,
  },
};

const riskColors: Record<string, string> = {
  high: "text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800",
  medium:
    "text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800",
};

// ── Save-confirm modal ────────────────────────────────────────────────────────
interface SaveModalProps {
  transaction: TransactionType;
  categories: ServiceCategory[];
  onConfirm: (tx: TransactionType, cat: ServiceCategory) => void;
  onDismiss: () => void;
}

function SaveModal({ transaction, categories, onConfirm, onDismiss }: SaveModalProps) {
  // Editable name
  const [name, setName] = useState(transaction.label);
  const [editingName, setEditingName] = useState(false);

  // Category selection
  const suggestedCatId = transaction.recommendedCategoryId ?? "advisory";
  const [selectedCatId, setSelectedCatId] = useState(suggestedCatId);

  // New-category creation
  const [addingNewCat, setAddingNewCat] = useState(false);
  const [newCatLabel, setNewCatLabel] = useState("");
  const [newCatIcon, setNewCatIcon] = useState("📁");

  const filteredCats = categories.filter((c) => c.id !== "search-results");
  const selectedCat = filteredCats.find((c) => c.id === selectedCatId);

  const iconOptions = ["📁","⚖️","📋","🏠","🏢","💰","📊","🏗️","👤","📬","📉","👥","📜","🏦","🩺","💡","🤝","🌿","🯧","🔏","🌐","💼"];

  const handleConfirm = () => {
    let cat = selectedCat;
    if (!cat) return;
    if (addingNewCat && newCatLabel.trim()) {
      cat = {
        id: `custom-${Date.now()}`,
        label: newCatLabel.trim(),
        icon: newCatIcon,
      };
    }
    onConfirm({ ...transaction, label: name.trim() || transaction.label }, cat);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onDismiss(); }}
    >
      <div className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
        {/* Header */}
        <div className="bg-primary/5 border-b border-border px-6 py-4 flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
            <Save size={18} className="text-primary" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-foreground">Save to list?</h2>
            <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
              Review the AI-suggested name and category below. Edit either before saving.
            </p>
          </div>
        </div>

        <div className="px-6 py-5 space-y-5">
          {/* Name field */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
              <Tag size={11} />
              Service name
            </label>
            {editingName ? (
              <div className="flex gap-2">
                <input
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") setEditingName(false); if (e.key === "Escape") { setName(transaction.label); setEditingName(false); } }}
                  className="flex-1 text-sm bg-background border border-primary/40 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <button
                  onClick={() => setEditingName(false)}
                  className="shrink-0 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <button
                onClick={() => setEditingName(true)}
                className="w-full flex items-center justify-between gap-2 text-sm text-left bg-muted/60 hover:bg-muted border border-border rounded-lg px-3 py-2.5 transition-colors group"
              >
                <span className="font-medium text-foreground leading-snug">{name}</span>
                <Pencil size={13} className="text-muted-foreground group-hover:text-foreground shrink-0 transition-colors" />
              </button>
            )}
          </div>

          {/* Category picker */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
              <FolderPlus size={11} />
              Category
              {transaction.recommendedCategoryId && (
                <span className="ml-1 text-xs text-primary font-medium normal-case tracking-normal">
                  — AI suggestion: {filteredCats.find(c => c.id === transaction.recommendedCategoryId)?.label ?? transaction.recommendedCategoryId}
                </span>
              )}
            </label>

            {!addingNewCat ? (
              <>
                <div className="grid grid-cols-2 gap-1.5 max-h-48 overflow-y-auto pr-1">
                  {filteredCats.map((cat) => {
                    const isSuggested = cat.id === transaction.recommendedCategoryId;
                    const isSelected = cat.id === selectedCatId;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCatId(cat.id)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-left transition-colors border-2 ${
                          isSelected
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background hover:bg-muted border-border text-foreground"
                        }`}
                      >
                        <span className="shrink-0 text-base">{cat.icon}</span>
                        <span className="font-medium leading-tight text-xs truncate flex-1">{cat.label}</span>
                        {isSuggested && !isSelected && (
                          <span className="shrink-0 text-[10px] text-primary font-bold bg-primary/10 px-1 rounded">AI</span>
                        )}
                        {isSelected && <CheckCircle size={13} className="shrink-0 text-primary-foreground" />}
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={() => { setAddingNewCat(true); setSelectedCatId(""); }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm border-2 border-dashed border-border hover:border-primary/40 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-colors mt-1"
                >
                  <Plus size={14} />
                  Create new category
                </button>
              </>
            ) : (
              <div className="rounded-xl border-2 border-primary/30 bg-primary/5 p-4 space-y-3">
                <p className="text-xs font-semibold text-primary">New category</p>
                <div className="flex gap-2">
                  {/* Icon picker */}
                  <div className="relative group">
                    <button className="w-10 h-10 rounded-lg border border-border bg-background text-xl flex items-center justify-center hover:border-primary/40 transition-colors">
                      {newCatIcon}
                    </button>
                    <div className="absolute left-0 top-11 z-10 hidden group-focus-within:grid grid-cols-6 gap-1 bg-card border border-border rounded-xl p-2 shadow-xl w-44">
                      {iconOptions.map((ic) => (
                        <button
                          key={ic}
                          onClick={() => setNewCatIcon(ic)}
                          className={`text-lg rounded-lg p-1 hover:bg-muted transition-colors ${newCatIcon === ic ? "bg-primary/20" : ""}`}
                        >
                          {ic}
                        </button>
                      ))}
                    </div>
                  </div>
                  <input
                    autoFocus
                    placeholder="Category name…"
                    value={newCatLabel}
                    onChange={(e) => setNewCatLabel(e.target.value)}
                    className="flex-1 text-sm bg-background border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                {/* Icon row below for easy selection */}
                <div className="flex flex-wrap gap-1">
                  {iconOptions.map((ic) => (
                    <button
                      key={ic}
                      onClick={() => setNewCatIcon(ic)}
                      className={`text-lg rounded-lg px-1 py-0.5 hover:bg-muted transition-colors ${newCatIcon === ic ? "bg-primary/20 ring-1 ring-primary" : ""}`}
                    >
                      {ic}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => { setAddingNewCat(false); setSelectedCatId(suggestedCatId); }}
                    className="flex-1 text-sm rounded-lg border border-border py-2 hover:bg-muted transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    disabled={!newCatLabel.trim()}
                    onClick={() => { if (newCatLabel.trim()) setSelectedCatId("__new__"); }}
                    className="flex-1 text-sm rounded-lg bg-primary text-primary-foreground py-2 hover:bg-primary/90 transition-colors disabled:opacity-40"
                  >
                    Use this
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border px-6 py-4 flex gap-3">
          <button
            onClick={onDismiss}
            className="flex-1 rounded-xl border border-border text-sm py-2.5 hover:bg-muted transition-colors font-medium"
          >
            Discard
          </button>
          <button
            onClick={handleConfirm}
            disabled={!selectedCatId && !addingNewCat}
            className="flex-1 rounded-xl bg-primary text-primary-foreground text-sm py-2.5 hover:bg-primary/90 transition-colors font-semibold disabled:opacity-40 flex items-center justify-center gap-2"
          >
            <Save size={14} />
            Save to list
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function Checker() {
  const { isDark, toggle } = useTheme();

  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedTransaction, setSelectedTransaction] = useState<TransactionType | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [lastSearched, setLastSearched] = useState("");
  const [pendingSave, setPendingSave] = useState<TransactionType | null>(null);

  const rightPanelRef = useRef<HTMLDivElement>(null);

  // ── Load persisted saved results + custom categories from server ───────────
  const { data: savedData } = useQuery<{
    services: TransactionType[];
    categories: ServiceCategory[];
  }>({
    queryKey: ["/api/saved"],
    staleTime: Infinity,
  });

  const savedResults: TransactionType[] = savedData?.services ?? [];
  const extraCategories: ServiceCategory[] = savedData?.categories ?? [];

  // ── Persist save via API ───────────────────────────────────────────────────
  const saveMutation = useMutation({
    mutationFn: async ({
      service,
      category,
      isNew,
    }: {
      service: TransactionType;
      category: ServiceCategory;
      isNew: boolean;
    }) => {
      const res = await apiRequest("POST", "/api/saved", {
        service,
        category: { ...category, isNew },
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/saved"] });
    },
  });

  // ── Delete a saved service ─────────────────────────────────────────────────
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await apiRequest("DELETE", `/api/saved/${id}`);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/saved"] });
      setSelectedTransaction(null);
      setConfirmDeleteId(null);
    },
  });

  // ── Refresh (re-research) a saved service ─────────────────────────────────
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async (tx: TransactionType) => {
    if (isRefreshing) return;
    setIsRefreshing(true);
    try {
      const res = await apiRequest("POST", "/api/search", { query: tx.label });
      const data = await res.json() as TransactionType & {
        error?: string; unavailable?: boolean;
      };
      if (data.error || data.unavailable) {
        setIsRefreshing(false);
        return;
      }
      // Save updated data back to server under the same id + category
      const refreshed: TransactionType = {
        ...data,
        id: tx.id,
        categoryId: tx.categoryId,
        isSearchResult: true,
      };
      await apiRequest("POST", "/api/saved", {
        service: refreshed,
        category: {
          id: tx.categoryId,
          label: allCategories.find((c) => c.id === tx.categoryId)?.label ?? tx.categoryId,
          icon: allCategories.find((c) => c.id === tx.categoryId)?.icon ?? "📁",
          isNew: false,
        },
      });
      queryClient.invalidateQueries({ queryKey: ["/api/saved"] });
      setSelectedTransaction(refreshed);
    } catch {
      // silently ignore
    } finally {
      setIsRefreshing(false);
    }
  };

  // Live categories: static + persisted custom
  const allCategories = useMemo(
    () => [...staticCategories, ...extraCategories],
    [extraCategories]
  );

  // Combine static + persisted saved
  const allTransactions = useMemo(
    () => [...staticTransactions, ...savedResults],
    [savedResults]
  );

  // Scroll right panel to top on new selection
  useEffect(() => {
    if (selectedTransaction && rightPanelRef.current) {
      rightPanelRef.current.scrollTop = 0;
    }
  }, [selectedTransaction?.id]);

  // Live filter for search mode
  const filteredTransactions = useMemo(() => {
    if (!searchQuery.trim()) return allTransactions;
    const q = searchQuery.toLowerCase();
    return allTransactions.filter(
      (t) =>
        t.label.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.professions.some((p) => p.toLowerCase().includes(q))
    );
  }, [searchQuery, allTransactions]);

  const handleCategoryToggle = (catId: string) => {
    setExpandedCategory((prev) => (prev === catId ? null : catId));
    setSelectedTransaction(null);
    setSearchQuery("");
    setSearchError(null);
    setLastSearched("");
  };

  const handleTransactionSelect = (t: TransactionType) => {
    setSelectedTransaction((prev) => (prev?.id === t.id ? null : t));
  };

  // ── AI search ─────────────────────────────────────────────────────────────
  const handleAISearch = async () => {
    const q = searchQuery.trim();
    if (!q || q.length < 3 || q === lastSearched) return;
    setIsSearching(true);
    setSearchError(null);
    setLastSearched(q);

    try {
      const res = await fetch(
        `${API_BASE}/api/search`,
        { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ query: q }) }
      );
      const data = await res.json() as TransactionType & {
        error?: string;
        unavailable?: boolean;
        austracUrl?: string;
      };

      if (data.unavailable) {
        setSearchError(
          `__UNAVAILABLE__${data.austracUrl ?? "https://www.austrac.gov.au/new-austrac/designated-services-newly-regulated-entities/professional-designated-services"}`
        );
      } else if (data.error) {
        setSearchError(data.error);
      } else {
        const tx: TransactionType = {
          ...data,
          id: `search-${Date.now()}`,
          isSearchResult: true,
        };
        // Show result in right panel immediately
        setSelectedTransaction(tx);
        // Auto-open save dialog after short delay so user sees the result first
        setTimeout(() => setPendingSave(tx), 400);
      }
    } catch {
      setSearchError("Search failed. Please check your connection and try again.");
    } finally {
      setIsSearching(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const q = searchQuery.trim();
      if (!q) return;
      if (filteredTransactions.length === 0 && q.length >= 3) {
        handleAISearch();
      }
    }
  };

  // ── Confirm save — persist to server ────────────────────────────────────
  const handleSaveConfirm = (tx: TransactionType, cat: ServiceCategory) => {
    const isNew =
      !staticCategories.some((c) => c.id === cat.id) &&
      !extraCategories.some((c) => c.id === cat.id);

    const toSave: TransactionType = { ...tx, categoryId: cat.id, isSearchResult: true };

    // Optimistically update the selected transaction so the badge appears instantly
    setSelectedTransaction(toSave);

    // Persist to server (invalidates /api/saved query, re-fetches on settle)
    saveMutation.mutate({ service: toSave, category: cat, isNew });

    // Expand target category and clear search
    setExpandedCategory(cat.id);
    setSearchQuery("");
    setLastSearched("");
    setSearchError(null);
    setPendingSave(null);
  };

  const handleSaveDismiss = () => {
    setPendingSave(null);
  };

  const verdictConf = selectedTransaction ? verdictConfig[selectedTransaction.verdict] : null;
  const VerdictIcon = verdictConf?.Icon ?? null;

  const getCategoryCount = (catId: string) =>
    allTransactions.filter((t) => t.categoryId === catId).length;

  const visibleCategories = allCategories.filter(
    (c) => c.id !== "search-results" || getCategoryCount("search-results") > 0
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* ── Header ── */}
      <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur-sm shrink-0">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground shrink-0">
              <Scale size={16} />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold leading-tight text-foreground truncate">
                AML/CTF Designated Service Checker
              </div>
              <div className="text-xs text-muted-foreground leading-tight">
                Table 6 — Lawyers — Effective 1 July 2026
              </div>
            </div>
          </div>
          <button
            onClick={toggle}
            data-testid="button-theme-toggle"
            className="p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors shrink-0"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      {/* ── Banner ── */}
      <div className="max-w-7xl mx-auto px-4 pt-4 pb-2 w-full shrink-0">
        <div className="rounded-lg border border-border bg-card px-4 py-3 text-sm flex items-start gap-3">
          <AlertCircle size={16} className="text-primary mt-0.5 shrink-0" />
          <p className="text-foreground/80 leading-snug">
            Select a service type below to see whether it is a{" "}
            <strong>designated service</strong> under Table 6 of the{" "}
            <em>Anti-Money Laundering and Counter-Terrorism Financing Act 2006</em>{" "}
            (Cth) s 6(5B), as amended by the{" "}
            <em>Anti-Money Laundering and Counter-Terrorism Financing Amendment Act 2024</em>{" "}
            (Cth), for <strong>lawyers</strong>, effective{" "}
            <strong>1 July 2026</strong>. For guidance only — not legal advice.
          </p>
        </div>
      </div>

      {/* ── Body ── */}
      <main className="flex-1 overflow-hidden max-w-7xl mx-auto w-full px-4 py-4">
        <div className="flex gap-5 h-full" style={{ height: "calc(100vh - 148px)" }}>

          {/* ── Left panel ── */}
          <div className="w-80 xl:w-72 shrink-0 flex flex-col h-full overflow-hidden">
            {/* Search */}
            <div className="relative shrink-0 mb-3">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                placeholder="Search or describe a service…"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setExpandedCategory(null);
                  setSelectedTransaction(null);
                  setSearchError(null);
                  setLastSearched("");
                }}
                onKeyDown={handleKeyDown}
                className="w-full pl-9 pr-4 py-2 text-sm bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                data-testid="input-search"
              />
              {searchQuery && (
                <button
                  onClick={() => { setSearchQuery(""); setSearchError(null); setLastSearched(""); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <XCircle size={15} />
                </button>
              )}
            </div>

            {/* Scrollable list */}
            <div className="flex-1 overflow-y-auto min-h-0 pr-1 space-y-0">

              {/* SEARCH MODE */}
              {searchQuery && (
                <>
                  {filteredTransactions.length > 0 && (
                    <div className="space-y-0.5">
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-1 mb-2">
                        {filteredTransactions.length} result{filteredTransactions.length !== 1 ? "s" : ""}
                      </div>
                      {filteredTransactions.map((tx) => {
                        const vc = verdictConfig[tx.verdict];
                        const isActive = selectedTransaction?.id === tx.id;
                        return (
                          <button
                            key={tx.id}
                            onClick={() => handleTransactionSelect(tx)}
                            data-testid={`button-transaction-${tx.id}`}
                            className={`w-full flex items-start gap-2 px-3 py-2 rounded-lg text-sm text-left transition-colors border ${
                              isActive
                                ? "bg-accent border-primary/40 text-foreground"
                                : "hover:bg-muted border-transparent text-foreground"
                            }`}
                          >
                            <vc.Icon size={14} className={`mt-0.5 shrink-0 ${vc.color}`} />
                            <span className="leading-snug">{tx.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Not found prompt */}
                  {searchQuery.trim().length >= 3 && filteredTransactions.length === 0 && !isSearching && (
                    <div className="rounded-lg border border-dashed border-border bg-card p-4 space-y-3">
                      <div className="text-sm text-foreground/80">
                        <span className="font-medium">"{searchQuery}"</span> is not in the list.
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Press{" "}
                        <kbd className="px-1.5 py-0.5 rounded bg-muted text-xs font-mono border border-border">Enter</kbd>{" "}
                        or click below to research with AI and add to the list.
                      </p>
                      <button
                        onClick={handleAISearch}
                        data-testid="button-ai-search"
                        className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground text-sm py-2 hover:bg-primary/90 transition-colors"
                      >
                        <Search size={14} />
                        Research with AI
                      </button>
                    </div>
                  )}

                  {isSearching && (
                    <div className="flex items-center gap-2 px-3 py-3 text-sm text-muted-foreground">
                      <Loader2 size={15} className="animate-spin" />
                      Researching with AI…
                    </div>
                  )}

                  {searchError && !searchError.startsWith("__UNAVAILABLE__") && (
                    <div className="rounded-lg border border-destructive/40 bg-destructive/5 p-3 text-sm text-destructive">
                      {searchError}
                    </div>
                  )}
                  {searchError && searchError.startsWith("__UNAVAILABLE__") && (
                    <div className="rounded-lg border border-border bg-muted/50 p-4 space-y-2">
                      <p className="text-sm font-medium text-foreground">AI search not available in this version</p>
                      <a
                        href={searchError.replace("__UNAVAILABLE__", "")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-primary underline underline-offset-2 hover:no-underline"
                      >
                        <ExternalLink size={12} />
                        AUSTRAC — Professional Designated Services
                      </a>
                    </div>
                  )}
                </>
              )}

              {/* BROWSE MODE: accordion */}
              {!searchQuery && (
                <>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-1 mb-2">
                    Categories
                  </div>
                  {visibleCategories.map((cat) => {
                    const count = getCategoryCount(cat.id);
                    const isExpanded = expandedCategory === cat.id;
                    const catTransactions = allTransactions.filter((t) => t.categoryId === cat.id);

                    return (
                      <div key={cat.id} className="mb-0.5">
                        <button
                          onClick={() => handleCategoryToggle(cat.id)}
                          data-testid={`button-category-${cat.id}`}
                          className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg text-sm text-left transition-colors ${
                            isExpanded
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-muted text-foreground"
                          }`}
                        >
                          <span className="flex items-center gap-2 min-w-0">
                            <span className="shrink-0">{cat.icon}</span>
                            <span className="break-words text-left leading-snug font-medium">{cat.label}</span>
                          </span>
                          <span className="flex items-center gap-1.5 shrink-0">
                            <span className={`text-xs rounded-full px-1.5 py-0.5 font-medium ${isExpanded ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                              {count}
                            </span>
                            {isExpanded ? (
                              <ChevronDown size={14} className="text-primary-foreground/70" />
                            ) : (
                              <ChevronRight size={14} className="text-muted-foreground" />
                            )}
                          </span>
                        </button>

                        {isExpanded && (
                          <div className="mt-0.5 ml-2 border-l-2 border-primary/20 pl-2 space-y-0.5 pb-1">
                            {catTransactions.map((tx) => {
                              const vc = verdictConfig[tx.verdict];
                              const isActive = selectedTransaction?.id === tx.id;
                              const isSaved = tx.isSearchResult && savedResults.some((s) => s.id === tx.id);
                              return (
                                <button
                                  key={tx.id}
                                  onClick={() => handleTransactionSelect(tx)}
                                  data-testid={`button-transaction-${tx.id}`}
                                  className={`w-full flex items-start gap-2 px-3 py-2 rounded-lg text-sm text-left transition-colors border ${
                                    isActive
                                      ? "bg-accent border-primary/40 text-foreground"
                                      : "hover:bg-muted border-transparent text-foreground"
                                  }`}
                                >
                                  <vc.Icon size={13} className={`mt-0.5 shrink-0 ${vc.color}`} />
                                  <span className="leading-snug text-sm flex-1">{tx.label}</span>
                                  {isSaved && (
                                    <span title="AI-researched" className="shrink-0 text-[10px] text-primary font-bold">AI</span>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>

          {/* ── Right panel ── */}
          <div ref={rightPanelRef} className="flex-1 min-w-0 overflow-y-auto h-full">
            {!selectedTransaction ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 px-8 rounded-xl border border-dashed border-border">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield size={28} className="text-primary" />
                </div>
                <h2 className="text-lg font-semibold mb-2">Table 6 Designated Service Checker</h2>
                <p className="text-sm text-muted-foreground max-w-md mb-1">
                  Browse by category on the left, or search by transaction type, service, or keyword.
                </p>
                <p className="text-xs text-muted-foreground max-w-md mb-6">
                  If a service is not in the list, type it and press{" "}
                  <kbd className="px-1 py-0.5 rounded bg-muted text-xs font-mono border border-border">Enter</kbd>{" "}
                  to research it with AI — you'll be asked whether to save it to the list.
                </p>
                <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
                  {(["designated","not-designated","depends"] as Verdict[]).map((v) => {
                    const vc = verdictConfig[v];
                    const count = allTransactions.filter((t) => t.verdict === v).length;
                    return (
                      <div key={v} className={`rounded-xl border-2 p-3 text-center ${vc.bgColor} ${vc.borderColor}`}>
                        <div className={`text-xl font-bold ${vc.color}`}>{count}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{vc.label.split(" ")[0]}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="space-y-4 pb-6" data-testid="result-panel">
                {/* Verdict banner */}
                <div className={`rounded-xl border-2 p-5 ${verdictConf!.bgColor} ${verdictConf!.borderColor}`}>
                  <div className="flex items-start gap-3">
                    {VerdictIcon && <VerdictIcon size={24} className={`${verdictConf!.color} mt-0.5 shrink-0`} />}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-xs font-bold tracking-widest uppercase ${verdictConf!.color}`}>
                          {verdictConf!.label}
                        </span>
                        {selectedTransaction.tableItem && (
                          <Badge variant="outline" className="text-xs">{selectedTransaction.tableItem}</Badge>
                        )}
                        {selectedTransaction.isSearchResult && (
                          <Badge variant="secondary" className="text-xs gap-1">
                            <Search size={10} />
                            AI Result
                          </Badge>
                        )}
                        {selectedTransaction.isSearchResult && savedResults.some((s) => s.id === selectedTransaction.id) && (
                          <Badge variant="outline" className="text-xs gap-1 border-emerald-400 text-emerald-600 dark:text-emerald-400">
                            <CheckCircle size={10} />
                            Saved to {allCategories.find((c) => c.id === selectedTransaction.categoryId)?.label}
                          </Badge>
                        )}
                      </div>
                      <h1 className="text-base font-semibold mt-1 text-foreground">{selectedTransaction.label}</h1>
                      <p className="text-sm text-muted-foreground mt-0.5">{selectedTransaction.verdictSummary}</p>
                    </div>
                    {/* Action buttons for AI-saved results */}
                    <div className="shrink-0 flex flex-col gap-1.5 items-end">
                      {/* Not yet saved — show Save button */}
                      {selectedTransaction.isSearchResult && !savedResults.some((s) => s.id === selectedTransaction.id) && (
                        <button
                          onClick={() => setPendingSave(selectedTransaction)}
                          className="flex items-center gap-1.5 text-xs border border-primary/40 text-primary rounded-lg px-3 py-1.5 hover:bg-primary/10 transition-colors"
                        >
                          <Save size={13} />
                          Save to list
                        </button>
                      )}

                      {/* Saved — show Refresh + Delete */}
                      {selectedTransaction.isSearchResult && savedResults.some((s) => s.id === selectedTransaction.id) && (
                        <>
                          {/* Refresh button */}
                          <button
                            onClick={() => handleRefresh(selectedTransaction)}
                            disabled={isRefreshing}
                            title="Re-research with AI and update stored data"
                            className="flex items-center gap-1.5 text-xs border border-border text-muted-foreground rounded-lg px-3 py-1.5 hover:bg-muted hover:text-foreground transition-colors disabled:opacity-40"
                          >
                            <RefreshCw size={12} className={isRefreshing ? "animate-spin" : ""} />
                            {isRefreshing ? "Refreshing…" : "Refresh"}
                          </button>

                          {/* Delete — two-step confirm */}
                          {confirmDeleteId === selectedTransaction.id ? (
                            <div className="flex items-center gap-1">
                              <span className="text-xs text-destructive font-medium">Delete?</span>
                              <button
                                onClick={() => deleteMutation.mutate(selectedTransaction.id)}
                                disabled={deleteMutation.isPending}
                                className="flex items-center gap-1 text-xs bg-destructive text-destructive-foreground rounded-md px-2 py-1 hover:bg-destructive/80 transition-colors"
                              >
                                {deleteMutation.isPending ? <Loader2 size={11} className="animate-spin" /> : <Trash2 size={11} />}
                                Yes
                              </button>
                              <button
                                onClick={() => setConfirmDeleteId(null)}
                                className="text-xs border border-border rounded-md px-2 py-1 hover:bg-muted transition-colors"
                              >
                                No
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => setConfirmDeleteId(selectedTransaction.id)}
                              title="Remove from saved list"
                              className="flex items-center gap-1.5 text-xs border border-destructive/30 text-destructive rounded-lg px-3 py-1.5 hover:bg-destructive/10 transition-colors"
                            >
                              <Trash2 size={12} />
                              Delete
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <Card>
                  <CardHeader className="pb-2 pt-4 px-5">
                    <h2 className="text-sm font-semibold">Service Description</h2>
                  </CardHeader>
                  <CardContent className="px-5 pb-4">
                    <p className="text-sm text-foreground/80 leading-relaxed">{selectedTransaction.description}</p>
                  </CardContent>
                </Card>

                {/* Conditions */}
                {selectedTransaction.verdict === "depends" && selectedTransaction.conditions && (
                  <Card className="border-amber-300 dark:border-amber-700">
                    <CardHeader className="pb-2 pt-4 px-5">
                      <h2 className="text-sm font-semibold text-amber-700 dark:text-amber-400 flex items-center gap-2">
                        <AlertCircle size={15} /> Key Conditions
                      </h2>
                    </CardHeader>
                    <CardContent className="px-5 pb-4">
                      <ul className="space-y-2">
                        {selectedTransaction.conditions.map((c, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-amber-500 mt-0.5 shrink-0">•</span>
                            <span className="text-foreground/80">{c}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Why captured */}
                {selectedTransaction.whyCaptured && (
                  <Card className="border-teal-300 dark:border-teal-700">
                    <CardHeader className="pb-2 pt-4 px-5">
                      <h2 className="text-sm font-semibold text-teal-700 dark:text-teal-400">Why This Is Designated</h2>
                    </CardHeader>
                    <CardContent className="px-5 pb-4">
                      <p className="text-sm text-foreground/80 leading-relaxed">{selectedTransaction.whyCaptured}</p>
                    </CardContent>
                  </Card>
                )}

                {/* Why excluded */}
                {selectedTransaction.whyExcluded && (
                  <Card className="border-emerald-300 dark:border-emerald-700">
                    <CardHeader className="pb-2 pt-4 px-5">
                      <h2 className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">Why This Is Excluded</h2>
                    </CardHeader>
                    <CardContent className="px-5 pb-4">
                      <p className="text-sm text-foreground/80 leading-relaxed">{selectedTransaction.whyExcluded}</p>
                    </CardContent>
                  </Card>
                )}

                {/* CDD */}
                {selectedTransaction.customerForCDD && (
                  <Card>
                    <CardHeader className="pb-2 pt-4 px-5">
                      <h2 className="text-sm font-semibold flex items-center gap-2">
                        <Shield size={14} className="text-primary" /> CDD Customer Definition
                      </h2>
                    </CardHeader>
                    <CardContent className="px-5 pb-4">
                      <p className="text-sm text-foreground/80 leading-relaxed">{selectedTransaction.customerForCDD}</p>
                    </CardContent>
                  </Card>
                )}

                {/* ML/TF Risks */}
                {selectedTransaction.mlRisks.length > 0 && (
                  <Card>
                    <CardHeader className="pb-2 pt-4 px-5">
                      <h2 className="text-sm font-semibold flex items-center gap-2">
                        <AlertTriangle size={14} className="text-destructive" /> Primary ML/TF Risks
                      </h2>
                    </CardHeader>
                    <CardContent className="px-5 pb-4">
                      <div className="space-y-2">
                        {selectedTransaction.mlRisks.map((r, i) => (
                          <div key={i} className={`flex items-start gap-2 rounded-md border px-3 py-2 text-sm ${riskColors[r.level]}`}>
                            <span className="font-semibold shrink-0 text-xs uppercase tracking-wide mt-0.5">{r.level}</span>
                            <Separator orientation="vertical" className="h-auto self-stretch" />
                            <span>{r.risk}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Not-caught examples */}
                {selectedTransaction.notCaughtExamples && selectedTransaction.notCaughtExamples.length > 0 && (
                  <Card>
                    <CardHeader className="pb-2 pt-4 px-5">
                      <h2 className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">Related Activities That Are NOT Designated</h2>
                    </CardHeader>
                    <CardContent className="px-5 pb-4">
                      <ul className="space-y-1.5">
                        {selectedTransaction.notCaughtExamples.map((ex, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/75">
                            <CheckCircle size={14} className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Sources */}
                {selectedTransaction.sources && selectedTransaction.sources.length > 0 && (
                  <Card>
                    <CardHeader className="pb-2 pt-4 px-5">
                      <h2 className="text-sm font-semibold flex items-center gap-2">
                        <BookOpen size={14} className="text-primary" /> Sources &amp; References
                      </h2>
                    </CardHeader>
                    <CardContent className="px-5 pb-4">
                      <ul className="space-y-2">
                        {selectedTransaction.sources.map((src, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <ExternalLink size={13} className="text-primary mt-0.5 shrink-0" />
                            <a
                              href={src.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary underline underline-offset-2 hover:no-underline leading-snug break-words"
                            >
                              {src.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Statutory reference */}
                {selectedTransaction.tableReference && (
                  <div className="text-xs text-muted-foreground flex items-center gap-2 px-1">
                    <ExternalLink size={12} />
                    <span>
                      Statutory reference:{" "}
                      <a
                        href="https://www.legislation.gov.au/C2004A03062"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline underline-offset-2 hover:no-underline"
                      >
                        AML/CTF Act 2006 (as amended by the Amendment Act 2024) (Cth){" "}
                        {selectedTransaction.tableReference}
                      </a>
                      {selectedTransaction.tableItem && ` — ${selectedTransaction.tableItem}`}
                    </span>
                  </div>
                )}

                {/* Disclaimer */}
                <div className="text-xs text-muted-foreground bg-muted/50 rounded-lg p-3 leading-relaxed">
                  <strong>For guidance only.</strong> This tool is not legal advice. AI-generated results should be independently verified. Confirm all determinations against the current consolidated{" "}
                  <a href="https://www.legislation.gov.au/C2004A03062" target="_blank" rel="noopener noreferrer" className="text-primary underline">AML/CTF Act 2006 (as amended)</a>{" "}
                  and current{" "}
                  <a href="https://www.austrac.gov.au/new-austrac/designated-services-newly-regulated-entities/professional-designated-services" target="_blank" rel="noopener noreferrer" className="text-primary underline">AUSTRAC guidance</a>.
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* ── Save-confirm modal ── */}
      {pendingSave && (
        <SaveModal
          transaction={pendingSave}
          categories={allCategories}
          onConfirm={handleSaveConfirm}
          onDismiss={handleSaveDismiss}
        />
      )}
    </div>
  );
}
