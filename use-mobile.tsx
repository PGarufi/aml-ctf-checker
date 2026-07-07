export type Verdict = "designated" | "not-designated" | "depends";

export interface RiskFactor {
  risk: string;
  level: "high" | "medium";
}

export interface Source {
  label: string;
  url: string;
}

export interface ServiceCategory {
  id: string;
  label: string;
  icon: string;
}

export interface TransactionType {
  id: string;
  categoryId: string;
  label: string;
  description: string;
  verdict: Verdict;
  tableItem?: string;
  tableReference?: string;
  verdictSummary: string;
  customerForCDD?: string;
  conditions?: string[];
  whyCaptured?: string;
  whyExcluded?: string;
  professions: string[];
  mlRisks: RiskFactor[];
  notCaughtExamples?: string[];
  sources: Source[];
  isSearchResult?: boolean; // true for AI-generated results added at runtime
  recommendedCategoryId?: string; // AI-suggested category for saving
  recommendedCategoryLabel?: string; // Human-readable label for the suggested category
}

export const categories: ServiceCategory[] = [
  { id: "real-estate", label: "Real Estate", icon: "🏠" },
  { id: "business-transfer", label: "Business & Entity Transfers", icon: "🏢" },
  { id: "client-funds", label: "Client Funds & Property", icon: "💰" },
  { id: "financing", label: "Financing", icon: "📊" },
  { id: "entity-formation", label: "Entity Formation & Restructuring", icon: "🏗️" },
  { id: "nominee", label: "Nominee & Officeholder Services", icon: "👤" },
  { id: "address", label: "Registered Address Services", icon: "📬" },
  { id: "advisory", label: "Advisory & Professional Services", icon: "📋" },
  { id: "litigation", label: "Litigation & Dispute Resolution", icon: "🏛️" },
  { id: "insolvency", label: "Insolvency & Restructuring", icon: "📉" },
  { id: "family-law", label: "Family Law", icon: "⚖️" },
  { id: "estate-planning", label: "Estate Planning", icon: "📜" },
  { id: "smsf", label: "SMSF", icon: "🏦" },
  { id: "personal-injuries", label: "Personal Injuries", icon: "🩺" },
  { id: "intellectual-property", label: "Intellectual Property", icon: "💡" },
  { id: "employment-law", label: "Employment Law", icon: "👥" },
  { id: "commercial-contracts", label: "Commercial Contracts & JVs", icon: "🤝" },
  { id: "construction-law", label: "Construction Law", icon: "🏗️" },
  { id: "planning-environment", label: "Planning & Environment Law", icon: "🌿" },
  { id: "tax-law", label: "Tax Law", icon: "🯧" },
  { id: "search-results", label: "Search Results", icon: "🔍" },
];

// Sources used across multiple transactions
const AUSTRAC_TABLE6 = {
  label: "AUSTRAC — Professional Designated Services",
  url: "https://www.austrac.gov.au/new-austrac/designated-services-newly-regulated-entities/professional-designated-services",
};
const LEX_AML_TABLE6 = {
  label: "Lex AML — Table 6 Professional Services",
  url: "https://lex-aml.com.au/articles/table6-professional-services/",
};
const AUSTRAC_FACTSHEET = {
  label: "AUSTRAC — AML/CTF Obligations Factsheet (Tranche 2)",
  url: "https://www.austrac.gov.au/sites/default/files/2025-07/AMLCTF_obligations_factsheet_for_tranche_2_REs.pdf",
};
const HALL_WILCOX = {
  label: "Hall & Wilcox — Draft AML/CTF Transitional Rules",
  url: "https://hallandwilcox.com.au/news/draft-aml-ctf-transitional-rules-unveiled-for-existing-and-new-reporting-entities/",
};
const AML_CTF_ACT = {
  label: "Anti-Money Laundering and Counter-Terrorism Financing Act 2006 (Cth) — s 6(5B) Table 6",
  url: "https://www.legislation.gov.au/Details/C2024C00282",
};
const AUSTRAC_INSOLVENCY = {
  label: "AUSTRAC — How Designated Services Apply to Insolvency Practitioners",
  url: "https://www.austrac.gov.au/new-austrac/designated-services-newly-regulated-entities/how-designated-services-apply-insolvency-practitioners",
};
const FREEDMAN_GOPALAN = {
  label: "Freedman & Gopalan — Family Law and AML/CTF Legislation",
  url: "https://freedmangopalanlegal.com.au/family-law-and-anti-money-laundering-legislation/",
};
const LIV_MEMORANDA = {
  label: "Law Institute of Victoria — AML/CTF Memoranda for Lawyers",
  url: "https://www.liv.asn.au/download.aspx?DocumentVersionKey=0efe7204-e529-4432-a656-7a722d05d02b",
};
const EASYAML_COURT_ORDERS = {
  label: "easyAML — Are court-ordered transfers of real estate a designated service?",
  url: "https://knowledge.easyaml.com/are-court-ordered-transfers-of-real-estate-a-designated-service",
};
const LSJ_DESIGNATED = {
  label: "Law Society Journal — Understanding Designated Services",
  url: "https://lsj.com.au/articles/understanding-designated-services-when-legal-services-trigger-tranche-2-aml-ctf-obligations/",
};
const STEP_PAPER = {
  label: "STEP — Aspects of AML/CTF Compliance: Trusts and Estate Planning (2026)",
  url: "https://davidwmarks.com/wp-content/uploads/2026/03/STEP-SA-Paper-Aspects-of-AML-CTF-Compliance-20260306-2.pdf",
};
const AUSTRAC_EMPLOYMENT = {
  label: "AUSTRAC — Professional Designated Services (Employment & Restructuring)",
  url: "https://www.austrac.gov.au/new-austrac/designated-services-newly-regulated-entities/professional-designated-services",
};
const LSJ_TABLE6 = {
  label: "Law Society Journal — Understanding Designated Services (Table 6 Examples)",
  url: "https://lsj.com.au/articles/understanding-designated-services-when-legal-services-trigger-tranche-2-aml-ctf-obligations/",
};
const LAWSOCIETY_IMPL_GUIDE = {
  label: "NSW Law Society — AML/CTF Implementation Guide for Small Practices",
  url: "https://www.lawsociety.com.au/sites/default/files/2026-04/LS4839_PSU_AMLCTF_SmallGuide_2026-04-10a.pdf",
};
const EASYAML_PI = {
  label: "easyAML — AML/CTF Tranche 2 for Lawyers: Are you required to comply?",
  url: "https://easyaml.com/wp-content/uploads/2026/05/easyAML-AMLCTF-Tranche-2-for-Lawyers-Are-you-required-to-comply.pdf",
};
const LSJ_TRUSTS = {
  label: "Law Society Journal — AML/CTF and trust accounts: what lawyers need to know",
  url: "https://lsj.com.au/articles/aml-ctf-and-trust-accounts-what-lawyers-need-to-know/",
};
const AUSTRAC_REAL_ESTATE_RISK = {
  label: "AUSTRAC — Real estate sector risk assessment",
  url: "https://www.austrac.gov.au/business/how-comply-guidance-and-resources/risk-assessments/real-estate-sector-risk-assessment",
};
const LSJ_CONSTRUCTION = {
  label: "Law Society Journal — Designated Services: Construction & Development",
  url: "https://lsj.com.au/articles/understanding-designated-services-when-legal-services-trigger-tranche-2-aml-ctf-obligations/",
};

export const transactions: TransactionType[] = [
  // ── REAL ESTATE ──────────────────────────────────────────────────────────
  {
    id: "re-contract-prep",
    categoryId: "real-estate",
    label: "Preparing a contract for sale of property",
    description:
      "Drafting or preparing a contract for sale of residential or commercial real estate on behalf of a buyer or seller. This is one of the clearest examples of a designated service for lawyers — it crosses from advice into direct implementation of a real estate transaction.",
    verdict: "designated",
    tableItem: "Table 6, Item 1",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — directly assists in the planning or execution of a real estate transfer.",
    customerForCDD: "The buyer, seller or transferee being assisted",
    whyCaptured:
      "Preparing a contract for sale is a concrete step in the execution of a real estate transaction. It crosses from advice into implementation, satisfying the 'assisting in the planning or execution' test under Item 1.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Layering dirty funds through high-value property", level: "high" },
      { risk: "Third-party or anonymous payers at settlement", level: "high" },
      { risk: "Offshore/foreign buyer structures concealing beneficial owner", level: "high" },
      { risk: "Inflated or deflated purchase price to transfer value", level: "medium" },
      { risk: "Cash or cryptocurrency used in settlement", level: "high" },
    ],
    notCaughtExamples: [
      "Advising on stamp duty implications only",
      "Reviewing a draft contract without acting on instructions to execute the sale",
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LEX_AML_TABLE6, AUSTRAC_FACTSHEET],
  },
  {
    id: "re-conveyancing",
    categoryId: "real-estate",
    label: "Acting as settlement agent / conducting settlement",
    description:
      "Conducting title searches, preparing transfer documents, and attending settlement on behalf of a buyer or seller. For lawyers, this commonly arises in property transactions where the firm acts as the solicitor on the record through to settlement.",
    verdict: "designated",
    tableItem: "Table 6, Item 1",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — directly acts for a party in the execution of a real estate transfer.",
    customerForCDD: "The buyer, seller or transferee being assisted",
    whyCaptured:
      "Acting for a party at settlement is the clearest form of 'otherwise acting for or on behalf of a person in a transaction' under Item 1. AUSTRAC guidance confirms that lawyers attending settlement are providing a designated service.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Trust account used as conduit for laundering", level: "high" },
      { risk: "Third-party payments at settlement", level: "high" },
      { risk: "Anonymous or nominee buyers concealing beneficial owner", level: "high" },
      { risk: "'Smurfing' — multiple small transfers to fund settlement", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LEX_AML_TABLE6, AUSTRAC_FACTSHEET],
  },
  {
    id: "re-court-order",
    categoryId: "real-estate",
    label: "Implementing a court-ordered property transfer",
    description:
      "Acting on a court or tribunal order requiring a property to be transferred (e.g. Family Court property settlement order, executor sale pursuant to a court direction). The court-order exclusion is express and unconditional — it applies regardless of which party the lawyer acts for.",
    verdict: "not-designated",
    tableItem: "Table 6, Item 1 — court/tribunal order exclusion",
    tableReference: "s 6(5B)",
    verdictSummary: "Not designated — transfers pursuant to a court or tribunal order are expressly excluded from Item 1.",
    whyExcluded:
      "Item 1 requires that the sale, purchase or transfer is 'not pursuant to, or resulting from, an order of a court or tribunal'. Court-ordered transfers are carved out by s 6(5B) Table 6 Item 1.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AML_CTF_ACT, LEX_AML_TABLE6, AUSTRAC_TABLE6],
  },
  {
    id: "re-stamp-duty-advice",
    categoryId: "real-estate",
    label: "Advising on stamp duty / transfer duty only",
    description:
      "Providing advice on the stamp duty or transfer duty implications of a property transaction, without preparing contracts or attending settlement. Pure advice on tax consequences of a contemplated transaction does not advance its execution.",
    verdict: "not-designated",
    verdictSummary: "Not designated — purely advisory work that does not directly advance the execution of the transaction.",
    whyExcluded:
      "AUSTRAC guidance confirms that 'assisting' in a transaction means work that directly advances the relevant transaction outcome. Advising a client on stamp duty without acting on instructions to implement the sale does not cross the threshold.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, LEX_AML_TABLE6],
  },
  {
    id: "re-property-dispute",
    categoryId: "real-estate",
    label: "Litigation about a property dispute",
    description:
      "Representing a client in court proceedings about a property boundary dispute, easement, title defect or similar matter. AUSTRAC has confirmed that litigating a property dispute is not the same as implementing a property transaction.",
    verdict: "not-designated",
    verdictSummary: "Not designated — legal dispute resolution services are outside Table 6.",
    whyExcluded:
      "AUSTRAC has confirmed that litigation typically relates to determining legal questions on matters that have already occurred, not matters in progress or future transactions. Dispute resolution services do not directly advance a property transfer.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, LEX_AML_TABLE6],
  },
  {
    id: "re-lease-under-30",
    categoryId: "real-estate",
    label: "Preparing / acting on a lease of 30 years or less",
    description:
      "Acting for a landlord or tenant in negotiating or executing a lease of 30 years or less (including commercial and residential leases). Short-term leases are outside the scope of Item 1, which is confined to sales, purchases and other transfers of real property.",
    verdict: "not-designated",
    verdictSummary: "Not designated — leases of 30 years or less are excluded from Item 1.",
    whyExcluded:
      "The AML/CTF Rules and AUSTRAC guidance exclude leases of 30 years or less. A lease is not a 'sale, purchase or other transfer' for Item 1 purposes unless it is a long-term lease (> 30 years).",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AML_CTF_ACT, AUSTRAC_TABLE6, LEX_AML_TABLE6],
  },

  // ── BUSINESS & ENTITY TRANSFERS ──────────────────────────────────────────
  {
    id: "bt-share-sale",
    categoryId: "business-transfer",
    label: "Drafting or acting on a share sale agreement",
    description:
      "Preparing or acting on instructions to implement a share sale agreement for the acquisition or disposal of a company. This is one of the most common designated services encountered in a commercial law practice.",
    verdict: "designated",
    tableItem: "Table 6, Item 2",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — drafting a share sale agreement directly assists in the execution of a transaction to transfer a body corporate.",
    customerForCDD: "The buyer or seller being assisted",
    whyCaptured:
      "Preparing the agreement to implement the sale of shares (a body corporate) is squarely within 'assisting in the planning or execution of a transaction to sell, buy or otherwise transfer a body corporate'. AUSTRAC guidance confirms that lawyers acting in this capacity are reporting entities.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Business sales used to move illicit funds between parties", level: "high" },
      { risk: "Obscuring true ownership via complex multi-layer structures", level: "high" },
      { risk: "Nominee/straw buyers concealing beneficial ownership", level: "high" },
      { risk: "Over/under-valuation to facilitate value transfer", level: "high" },
      { risk: "Use of trusts to distance beneficial owner from assets", level: "medium" },
    ],
    notCaughtExamples: [
      "Advising on whether to proceed with the acquisition",
      "Due diligence report prepared without acting on instructions to implement",
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LEX_AML_TABLE6, AUSTRAC_FACTSHEET],
  },
  {
    id: "bt-trust-transfer",
    categoryId: "business-transfer",
    label: "Documenting a transfer of trust interests or change of trustee",
    description:
      "Preparing documents to transfer a beneficial interest in a trust, or to change the trustee of an existing express trust. This arises frequently in estate planning, business succession and unit trust transactions.",
    verdict: "designated",
    tableItem: "Table 6, Item 2",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — a trust is a 'legal arrangement' and transfer of interests falls within Item 2.",
    customerForCDD: "The buyer/transferee and seller/transferor being assisted",
    whyCaptured:
      "An express trust is a 'legal arrangement' for Item 2 purposes. Assisting in the transfer of trust interests directly advances the transaction. AUSTRAC's guidance on professional designated services confirms this.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Trusts used to conceal beneficial ownership during transfer", level: "high" },
      { risk: "Transfer of trust interests to move illicit assets", level: "high" },
      { risk: "Offshore trustee arrangements frustrating AML checks", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LEX_AML_TABLE6],
  },
  {
    id: "bt-due-diligence-only",
    categoryId: "business-transfer",
    label: "Due diligence / M&A advisory (advice only, no implementation)",
    description:
      "Providing due diligence reports or M&A advice without taking steps to implement the transaction. This is a common scenario in commercial law — the lawyer is retained only to advise and report, not to execute the deal.",
    verdict: "not-designated",
    verdictSummary: "Not designated — purely advisory work that does not directly advance execution of the transfer.",
    whyExcluded:
      "'Assisting' in a transaction means work that directly advances the relevant transaction outcome. Due diligence reports and advisory services that do not cross into implementation steps do not trigger Item 2. AUSTRAC guidance specifically distinguishes advisory from implementation.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, LEX_AML_TABLE6],
  },

  // ── CLIENT FUNDS ─────────────────────────────────────────────────────────
  {
    id: "cf-trust-account-settlement",
    categoryId: "client-funds",
    label: "Holding settlement funds in trust account",
    description:
      "Receiving, holding and disbursing settlement funds in a legal trust account as part of a property or business sale. This is a core risk area for law firms — trust accounts are frequently exploited for money laundering because they provide apparent legitimacy and a buffer between the launderer and the funds.",
    verdict: "designated",
    tableItem: "Table 6, Item 3",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — receiving, holding and disbursing client funds as part of assisting in a transaction is squarely within Item 3.",
    customerForCDD: "The person whose money is being held and managed",
    whyCaptured:
      "Item 3 captures receiving, holding, controlling or managing a person's money as part of assisting in a transaction. Settlement funds in trust are the paradigm case. AUSTRAC has identified lawyer trust accounts as a key vulnerability.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Trust accounts used as laundering conduit — rapid movement of funds", level: "high" },
      { risk: "Third-party cash deposits into client trust accounts", level: "high" },
      { risk: "Client requests unusual payment routing or third-party payees", level: "high" },
      { risk: "Virtual assets deposited or requested as settlement medium", level: "high" },
      { risk: "Multiple small transactions layering toward threshold", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LEX_AML_TABLE6, AUSTRAC_FACTSHEET],
  },
  {
    id: "cf-retainer-only",
    categoryId: "client-funds",
    label: "Client pays professional fees / retainer into trust account",
    description:
      "Client pays professional fees or a retainer into the firm's trust account — no other designated service is involved. This is a common scenario in legal practice: the client pays fees in advance and the firm holds the money until it is earned.",
    verdict: "not-designated",
    tableItem: "Table 6, Item 3 — s 6(5C) exclusion",
    verdictSummary: "Not designated — payment for your own services is expressly excluded from Item 3 by s 6(5C)(a).",
    whyExcluded:
      "Section 6(5C)(a) of the AML/CTF Act 2006 excludes money held that is a payment by the person for goods or services you provide (professional fees, retainer). Important caveat: if the firm also provides another designated service in the same matter, the exclusion may not apply to funds held beyond the fee amount.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AML_CTF_ACT, AUSTRAC_TABLE6, LEX_AML_TABLE6],
  },
  {
    id: "cf-court-payment",
    categoryId: "client-funds",
    label: "Receiving or disbursing court-ordered or insurer payments",
    description:
      "Receiving money paid pursuant to a court order, or receiving/disbursing payments to/from government bodies, courts, or licensed insurers. These payments are excluded regardless of the amount or jurisdiction involved.",
    verdict: "not-designated",
    tableItem: "Table 6, Item 3 — s 6(5C)/(5D) exclusion",
    verdictSummary: "Not designated — payments received or disbursed under court orders or involving government/court/insurer bodies are excluded.",
    whyExcluded:
      "Section 6(5C)(c)/(d) of the AML/CTF Act 2006 excludes money received or payable under a court or tribunal order, and payments to/from government bodies, courts, public international organisations or licensed insurers.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AML_CTF_ACT, AUSTRAC_TABLE6],
  },

  // ── FINANCING ─────────────────────────────────────────────────────────────
  {
    id: "fin-loan-docs",
    categoryId: "financing",
    label: "Preparing loan / debt facility documentation for a company",
    description:
      "Preparing or executing debt facility documentation (e.g. term loan, overdraft, mortgage, mezzanine debt) for a company borrower. This commonly arises where a lawyer is instructed by the lender, the borrower, or both parties to document a corporate finance transaction.",
    verdict: "designated",
    tableItem: "Table 6, Item 4",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — preparing documentation to implement a debt financing transaction for a body corporate falls within Item 4.",
    customerForCDD: "The person (company) being assisted with financing",
    whyCaptured:
      "Item 4 captures assisting in organising, planning or executing a transaction for debt financing relating to a body corporate. Preparing the loan documentation is a direct implementation step. AUSTRAC guidance confirms that lawyers acting in this capacity are reporting entities.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Loan-back schemes — illicit funds lent back to launderer as 'clean' finance", level: "high" },
      { risk: "Related-party loans at non-arm's length concealing fund origin", level: "high" },
      { risk: "Complex offshore finance structures masking beneficial ownership", level: "high" },
      { risk: "Inflated security valuations to justify loan amounts", level: "medium" },
    ],
    notCaughtExamples: [
      "Advising on financing options generally",
      "Reviewing loan terms without acting on instructions to implement",
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LEX_AML_TABLE6, AUSTRAC_FACTSHEET],
  },
  {
    id: "fin-capital-raising",
    categoryId: "financing",
    label: "Arranging or documenting a share issue / capital raising",
    description:
      "Acting on instructions to implement a capital raising — e.g. preparing a shareholders agreement amendment, share subscription agreement, or ASX placement documentation. Lawyers frequently act in equity raisings for private and listed companies.",
    verdict: "designated",
    tableItem: "Table 6, Item 4",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — arranging or documenting equity financing for a body corporate falls within Item 4.",
    customerForCDD: "The company or promoter being assisted",
    whyCaptured:
      "Item 4 expressly includes equity financing relating to a body corporate. Share issues and capital raisings are core equity financing transactions. AUSTRAC guidance confirms that lawyers implementing these transactions are reporting entities.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Fictitious equity raises used to introduce dirty funds as 'investment'", level: "high" },
      { risk: "Inflated valuations to absorb illicit funds through equity", level: "high" },
      { risk: "Anonymous offshore investor concealing beneficial owner", level: "high" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LEX_AML_TABLE6],
  },
  {
    id: "fin-advice-only",
    categoryId: "financing",
    label: "Advising on financing options (no implementation)",
    description:
      "Providing general advice on whether a company should use debt or equity financing, or reviewing term sheets, without taking steps to implement. This includes feasibility opinions, financing strategy advice, and reviewing (but not executing) proposed terms.",
    verdict: "not-designated",
    verdictSummary: "Not designated — purely advisory work does not trigger Item 4.",
    whyExcluded:
      "Item 4 requires 'assisting in organising, planning or executing' a transaction. General advisory work that does not cross into organising or executing the transaction is outside the item. AUSTRAC guidance draws a clear line between advice and implementation.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, LEX_AML_TABLE6],
  },

  // ── ENTITY FORMATION & RESTRUCTURING ─────────────────────────────────────
  {
    id: "ef-shelf-company",
    categoryId: "entity-formation",
    label: "Selling or transferring a shelf company",
    description:
      "Selling or transferring a pre-incorporated company ('shelf company') to a client. While this is most commonly done by TCSPs, lawyers who maintain and sell shelf companies are also captured. Item 5 is unique — it does not require 'assisting'; the act of transferring the shelf company is itself the designated service.",
    verdict: "designated",
    tableItem: "Table 6, Item 5",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — selling or transferring a shelf company is a standalone designated service under Item 5.",
    customerForCDD: "The buyer or transferee of the shelf company",
    whyCaptured:
      "Item 5 expressly states: selling or transferring a shelf company is a designated service. No 'assisting' threshold applies — the act of transfer is itself the service. AUSTRAC guidance confirms lawyers acting as formation agents are captured.",
    professions: ["Lawyers (formation agents)"],
    mlRisks: [
      { risk: "Instant corporate history acquired to appear legitimate", level: "high" },
      { risk: "Rapid multiple shelf company acquisitions to layer transactions", level: "high" },
      { risk: "Anonymous acquisition — true controller concealed behind nominee", level: "high" },
      { risk: "Shelf companies with trading history used to access finance", level: "medium" },
      { risk: "Bulk purchases by single client for use in structuring", level: "high" },
    ],
    notCaughtExamples: [
      "Providing ongoing company secretarial services to an existing company you don't hold shares in",
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LEX_AML_TABLE6],
  },
  {
    id: "ef-trust-creation",
    categoryId: "entity-formation",
    label: "Drafting a trust deed / establishing a discretionary, unit or hybrid trust",
    description:
      "Drafting a trust deed and assisting in the establishment of an express trust (discretionary, unit, hybrid, SMSF) for a client. This is a common service in both commercial and estate planning practices. Note that CDD obligations under Item 6 are more extensive than other items — the lawyer must verify the trustee, settlor AND all beneficiaries.",
    verdict: "designated",
    tableItem: "Table 6, Item 6",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — assisting in the creation of a legal arrangement (express trust) falls within Item 6. CDD applies to trustee, settlor AND beneficiaries.",
    customerForCDD: "The person being assisted PLUS: trustee, settlor, and ALL beneficiaries (for express trust creation)",
    whyCaptured:
      "Item 6 captures assisting in the creation of a 'legal arrangement', which expressly includes express trusts. Drafting a trust deed and implementing the trust structure are direct implementation steps. AUSTRAC guidance identifies this as a high-risk service due to the opacity of trust structures.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Trusts used to conceal beneficial ownership and control at arm's length", level: "high" },
      { risk: "Complex layered structures designed to obscure beneficial ownership", level: "high" },
      { risk: "Trusts as vehicles to hold illicit funds while appearing legitimate", level: "high" },
      { risk: "Phantom structures with nominees as trustees", level: "high" },
      { risk: "Offshore element added to frustrate law enforcement", level: "medium" },
      { risk: "SMSFs used in related-party property laundering schemes", level: "medium" },
    ],
    notCaughtExamples: [
      "Drafting a will that incidentally creates a testamentary trust (trust by operation of law — see separate entry)",
      "Advising on whether to use a trust vs company structure (without implementing)",
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LEX_AML_TABLE6, AUSTRAC_FACTSHEET],
  },
  {
    id: "ef-company-incorporation",
    categoryId: "entity-formation",
    label: "Registering / incorporating a new company with ASIC on client instructions",
    description:
      "Acting on client instructions to register a new proprietary limited company (or other company type) with ASIC. This is a routine service for many firms but attracts the full CDD obligations under Item 6, including verification of all beneficial owners and directors.",
    verdict: "designated",
    tableItem: "Table 6, Item 6",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — assisting in the creation of a body corporate (company incorporation) falls within Item 6.",
    customerForCDD: "The person being assisted PLUS: all beneficial owners and directors of the new company",
    whyCaptured:
      "Incorporating a company for a client is 'assisting in the planning or execution of the creation of a body corporate'. Acting on client instructions to register with ASIC is an implementation step. AUSTRAC guidance confirms lawyers are reporting entities for this service.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Shell companies created to hold or transfer illicit funds", level: "high" },
      { risk: "Nominee directors/shareholders concealing true controller", level: "high" },
      { risk: "Rapidly incorporated companies used in layering schemes", level: "high" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LEX_AML_TABLE6, AUSTRAC_FACTSHEET],
  },
  {
    id: "ef-restructure",
    categoryId: "entity-formation",
    label: "Restructuring a company or trust (changing trustee, share classes, beneficiaries)",
    description:
      "Implementing a restructure of an existing company or trust — e.g. changing trustee, amending trust deed to change beneficiaries, converting share classes, or implementing a corporate reorganisation. Item 6 expressly captures both creation AND restructuring.",
    verdict: "designated",
    tableItem: "Table 6, Item 6",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — assisting in the restructuring of a body corporate or legal arrangement falls within Item 6.",
    customerForCDD: "The person being assisted (and beneficial owners/directors/trustees as applicable)",
    whyCaptured:
      "Item 6 expressly covers both creation AND restructuring of bodies corporate and legal arrangements. AUSTRAC guidance identifies restructuring of corporate and trust structures as a key risk area.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Repeated restructuring to frustrate tracing of assets", level: "high" },
      { risk: "Restructuring to introduce new PEP-connected parties as beneficial owners", level: "high" },
      { risk: "Trust amendment used to redirect asset distribution to launderer", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LEX_AML_TABLE6],
  },
  {
    id: "ef-testamentary-will",
    categoryId: "entity-formation",
    label: "Drafting a will that creates a testamentary trust",
    description:
      "Preparing a will that, upon death, establishes a testamentary trust for the client's estate. Despite creating what functions as a trust, testamentary trusts are categorically excluded from Item 6 because they arise by operation of law, not as express trusts created during the client's lifetime.",
    verdict: "not-designated",
    verdictSummary: "Not designated — testamentary trusts created by will are trusts arising by operation of law, not express trusts, and are excluded from Item 6.",
    whyExcluded:
      "The 'legal arrangement' definition for Item 6 is confined to express trusts intentionally created in writing during the person's lifetime. Testamentary trusts arise by operation of law upon death and are not captured. AUSTRAC guidance and the lex-aml.com.au analysis both confirm this exclusion.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AML_CTF_ACT, AUSTRAC_TABLE6, LEX_AML_TABLE6],
  },
  {
    id: "ef-advice-structure",
    categoryId: "entity-formation",
    label: "Advising on whether to use a trust vs company structure",
    description:
      "Providing strategic or tax advice on the optimal business structure — without taking steps to implement the chosen structure. This commonly includes opinions on asset protection, tax effectiveness, or succession planning using different structures.",
    verdict: "not-designated",
    verdictSummary: "Not designated — purely advisory work does not trigger Item 6.",
    whyExcluded:
      "The 'assisting' threshold under Item 6 requires work that directly advances the creation or restructuring. General advice on structural options without acting on instructions to implement does not cross the threshold.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, LEX_AML_TABLE6],
  },

  // ── NOMINEE & OFFICEHOLDER ────────────────────────────────────────────────
  {
    id: "nom-nominee-director",
    categoryId: "nominee",
    label: "Providing a nominee director for a client's company",
    description:
      "Acting as, or arranging for another person to act as, a director of a company on behalf of a client (the nominator). Lawyers who provide nominee director services — whether personally or through their firm — provide a standalone designated service under Item 7.",
    verdict: "designated",
    tableItem: "Table 6, Item 7",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — providing a nominee director is a standalone designated service under Item 7.",
    customerForCDD: "The nominator (the person on whose behalf the director acts)",
    whyCaptured:
      "Item 7 expressly captures acting as, or arranging for another to act as, a director of a company on behalf of a nominator. AUSTRAC guidance identifies nominee director services as one of the most significant ML/TF risk areas.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Nominee directors used to conceal true controller from regulators", level: "high" },
      { risk: "Sham directorships in high-risk jurisdictions or PEP-connected entities", level: "high" },
      { risk: "Rotating nominee arrangements to obscure beneficial ownership trail", level: "high" },
      { risk: "Director unaware of laundering activity conducted through entity", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LEX_AML_TABLE6],
  },
  {
    id: "nom-professional-trustee",
    categoryId: "nominee",
    label: "Acting as professional trustee of a client's express trust",
    description:
      "A lawyer or their firm acts as trustee of a discretionary or unit trust on behalf of a client. This is a designated service under Item 7 and attracts the highest level of CDD scrutiny because of the opacity that trustee arrangements can create.",
    verdict: "designated",
    tableItem: "Table 6, Item 7",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — acting as trustee of an express trust on behalf of a nominator falls within Item 7.",
    customerForCDD: "The nominator (the person on whose behalf you act as trustee)",
    whyCaptured:
      "Item 7 expressly includes acting as a trustee of an express trust on behalf of a nominator. AUSTRAC guidance confirms this is among the highest-risk designated services.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Trustee unaware of illicit origin of trust assets", level: "high" },
      { risk: "Trust used to distribute proceeds of crime to beneficiaries", level: "high" },
      { risk: "Offshore nominator frustrating AML identification", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LEX_AML_TABLE6],
  },
  {
    id: "nom-nominee-shareholder",
    categoryId: "nominee",
    label: "Holding shares as nominee shareholder for a client",
    description:
      "Acting as, or arranging for another to act as, a nominee shareholder of a company on behalf of the true beneficial owner (the nominator). This is a standalone designated service under Item 8 regardless of whether a fee is charged for the nominee arrangement.",
    verdict: "designated",
    tableItem: "Table 6, Item 8",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — acting as a nominee shareholder is a standalone designated service under Item 8.",
    customerForCDD: "The nominator (the beneficial owner)",
    whyCaptured:
      "Item 8 expressly captures acting as, or arranging for another to act as, a nominee shareholder on behalf of a nominator. AUSTRAC guidance identifies this as a key vehicle for concealing beneficial ownership.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Beneficial ownership of companies hidden behind nominee facade", level: "high" },
      { risk: "Prevents identification of PEPs or sanctioned persons as true owners", level: "high" },
      { risk: "Combined with Item 7 nominee director to fully obscure control", level: "high" },
      { risk: "Nominee structures impede law enforcement tracing of illicit assets", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LEX_AML_TABLE6],
  },
  {
    id: "nom-company-secretarial",
    categoryId: "nominee",
    label: "Company secretarial services (no nominee/officeholder role)",
    description:
      "Providing ongoing company secretarial services — lodging ASIC forms, maintaining registers, updating officeholder details — without holding shares or acting as an officeholder in a nominee capacity. This is a common service in many law firms but does not attract AML/CTF obligations on its own.",
    verdict: "not-designated",
    verdictSummary: "Not designated — company secretarial services without acting as an officeholder in a nominee capacity do not engage Items 7 or 8.",
    whyExcluded:
      "Items 7 and 8 require acting 'on behalf of a nominator' in a nominee capacity. Providing administrative secretarial services without that nominee relationship does not trigger the items. AUSTRAC guidance confirms this distinction.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, LEX_AML_TABLE6],
  },

  // ── ADDRESS ────────────────────────────────────────────────────────────
  {
    id: "addr-registered-office",
    categoryId: "address",
    label: "Providing your office address as the registered office of a client's company",
    description:
      "Allowing a client to use your firm's address as the registered office address of their company or legal arrangement. This is a common, low-cost service offered by many law firms that becomes a designated service under Item 9 from 1 July 2026.",
    verdict: "designated",
    tableItem: "Table 6, Item 9",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — providing a registered office address for a body corporate or legal arrangement is a designated service under Item 9.",
    customerForCDD: "The person to whom the registered office service is provided",
    whyCaptured:
      "Item 9 expressly captures providing a registered office address or principal place of business address for a body corporate or legal arrangement. AUSTRAC has identified address services as a key risk area because they can facilitate the appearance of legitimacy for shell entities.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Shell companies registered at address provider with no real presence", level: "high" },
      { risk: "Facilitates access to finance using seemingly legitimate Australian address", level: "medium" },
      { risk: "Mass registration of companies at single address — structuring red flag", level: "high" },
      { risk: "Address provider unaware of illicit nature of client's activities", level: "medium" },
    ],
    notCaughtExamples: [
      "Providing your own firm's address for a company the firm wholly owns",
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LEX_AML_TABLE6, AUSTRAC_FACTSHEET],
  },

  // ── ADVISORY ─────────────────────────────────────────────────────────────
  {
    id: "adv-general-legal",
    categoryId: "advisory",
    label: "General legal advice (no implementation steps)",
    description:
      "Providing legal advice on any topic — commercial, employment, IP, regulatory, family law — without acting on instructions to implement a Table 6 transaction. Pure legal advice, even where it concerns subject matter that could lead to a Table 6 transaction, is not itself a designated service.",
    verdict: "not-designated",
    verdictSummary: "Not designated — purely advisory legal work without implementation steps does not engage Table 6.",
    whyExcluded:
      "Table 6 requires 'assisting', 'acting for or on behalf of' or 'otherwise acting' in a manner that directly advances a specific transaction outcome. Advice without implementation is outside the scope. AUSTRAC guidance draws a clear line between advisory and implementation work.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, LEX_AML_TABLE6],
  },
  {
    id: "adv-wills-estates",
    categoryId: "advisory",
    label: "Estate administration / probate (no express trust creation)",
    description:
      "Obtaining a grant of probate or letters of administration and administering a deceased estate, where no express trust is created in the process. Distribution of estate assets to beneficiaries under a will does not of itself create an express trust for Item 6 purposes.",
    verdict: "not-designated",
    verdictSummary: "Not designated — estate administration and probate are not designated services, provided no express trust is created.",
    whyExcluded:
      "Obtaining probate and distributing estate assets is not assisting in the creation of a body corporate or legal arrangement. The estate itself arises by operation of law. Provided no express trust is established (as distinct from a testamentary trust), Item 6 is not engaged. AUSTRAC guidance confirms this.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, LEX_AML_TABLE6, AML_CTF_ACT],
  },
  {
    id: "adv-lpp",
    categoryId: "advisory",
    label: "Advice protected by legal professional privilege",
    description:
      "Where all information forming the basis of a suspicious matter is subject to legal professional privilege (LPP), a lawyer may decline to file a Suspicious Matter Report (SMR). However, LPP does not exempt lawyers from enrolling or maintaining an AML/CTF program — it only provides a potential basis to decline filing an SMR in specific circumstances.",
    verdict: "not-designated",
    verdictSummary: "Not applicable — LPP is a potential basis to decline filing an SMR, not a basis to avoid AML/CTF obligations altogether.",
    whyExcluded:
      "Where ALL information forming the suspicion is privileged, the lawyer may decline to file an SMR and should submit an LPP Form to the AUSTRAC CEO. If only some information is privileged, file the SMR using the non-privileged information. LPP does not affect enrolment, program maintenance, CDD or record-keeping obligations.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, AUSTRAC_FACTSHEET, LEX_AML_TABLE6],
  },

  // ── INSOLVENCY & RESTRUCTURING ────────────────────────────────────────────────
  {
    id: "ins-advisory-only",
    categoryId: "insolvency",
    label: "Insolvency advisory work only (no implementation steps)",
    description:
      "Providing high-level or general advice in an insolvency or restructuring context — for example, advising a company on its options, advising directors on their duties, advising a secured creditor on its enforcement options, or providing a preliminary opinion on solvency — without taking any steps to implement a transaction, manage funds or execute a transfer.",
    verdict: "not-designated",
    verdictSummary: "Not designated — AUSTRAC expressly states that high-level or general advice alone will not usually be enough to constitute a designated service in the insolvency context.",
    whyExcluded:
      "AUSTRAC's insolvency guidance states clearly: 'High level or general advice, on its own, won't usually be enough to constitute a designated service.' Providing legal advice to a company, its directors or its creditors about restructuring options, insolvency regimes or director duties — without taking steps to implement a transaction, manage assets or execute a financial arrangement — does not engage any Table 6 item. AML/CTF obligations are 'triggered by providing a designated service, not by the appointment itself.'",
    professions: ["Lawyers"],
    mlRisks: [],
    notCaughtExamples: [
      "Advising a company board on the implications of insolvency and available options",
      "Advising directors on their duty to prevent insolvent trading",
      "Advising a secured creditor on enforcement options without taking implementation steps",
      "Providing a preliminary solvency opinion without executing any transaction",
    ],
    sources: [AUSTRAC_INSOLVENCY, AUSTRAC_TABLE6, LSJ_DESIGNATED],
  },
  {
    id: "ins-voluntary-administration",
    categoryId: "insolvency",
    label: "Acting for a company entering voluntary administration (VA)",
    description:
      "Representing a company, its directors, or an administrator in a voluntary administration under Part 5.3A of the Corporations Act 2001. Voluntary administration is a formal insolvency process under the Corporations Act. The AML/CTF position depends on the specific activities carried out — the appointment itself does not trigger obligations, but activities such as arranging funding to continue trading (Item 4) or implementing a share transfer under a DOCA (Item 6) do.",
    verdict: "depends",
    verdictSummary: "Depends — the administration appointment itself is not a designated service, but specific activities within the administration (arranging funding, DOCA implementation, asset sales, fund management) each engage separate Table 6 items.",
    conditions: [
      "High-level advisory work, providing an administration opinion, or advising on options → NOT DESIGNATED",
      "Arranging short-term funding / debtor-in-possession financing to continue trading → Item 4 (debt financing of a body corporate) — DESIGNATED",
      "Assisting the administrator to implement a DOCA including share transfers → Item 6 (restructuring of a body corporate or legal arrangement) — DESIGNATED",
      "Arranging sale of company real estate during administration → Item 1 (real estate transaction) — DESIGNATED",
      "Managing company funds / trading accounts during administration → Item 3 (managing a person's property in connection with a transaction) — may be DESIGNATED",
      "Implementing transfer of a subsidiary or body corporate → Item 2 (body corporate transfer) — DESIGNATED",
    ],
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Voluntary administration used to strip assets from company before creditors can enforce", level: "high" },
      { risk: "DOCA structured to advantage connected parties at expense of legitimate creditors", level: "high" },
      { risk: "Administrator funding arrangements used to introduce illicit funds as 'rescue finance'", level: "high" },
      { risk: "Related-party transaction approved during administration at undervalue", level: "high" },
      { risk: "Assets sold to connected buyers at below-market price during administration", level: "medium" },
    ],
    sources: [AUSTRAC_INSOLVENCY, AUSTRAC_TABLE6, AML_CTF_ACT],
  },
  {
    id: "ins-doca",
    categoryId: "insolvency",
    label: "Deed of Company Arrangement (DOCA) — implementing restructure or share transfer",
    description:
      "Assisting in the preparation and implementation of a Deed of Company Arrangement (DOCA) under Part 5.3A of the Corporations Act 2001, particularly where the DOCA involves the transfer of shares under s 444GA or the restructuring of the company's capital or ownership structure. AUSTRAC expressly identifies DOCA share transfer implementation as an Item 6 designated service.",
    verdict: "designated",
    tableItem: "Table 6, Item 6 (and potentially Items 2, 3 and/or 4)",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — AUSTRAC's own example is an administrator implementing a share transfer under a DOCA (s 444GA Corporations Act), which is an Item 6 designated service to the company.",
    customerForCDD: "The company being assisted through the DOCA implementation",
    whyCaptured:
      "AUSTRAC's insolvency guidance gives this precise example: 'An administrator becomes deed administrator under a DOCA and takes steps to implement a share transfer under section 444GA of the Corporations Act 2001. The administrator is providing an item 6 designated service to the company.' Item 6 captures assisting in the 'restructuring of a body corporate or legal arrangement'. Preparing and implementing the DOCA deed, executing share transfers and implementing the restructured ownership structure all fall within this. If the DOCA involves external funding, Item 4 may also be triggered. If the lawyer holds funds under the DOCA, Item 3 applies.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "DOCA engineered to transfer company control to criminal-connected party at minimal cost", level: "high" },
      { risk: "Creditor debt acquired by connected party at discount then used to control DOCA outcome", level: "high" },
      { risk: "DOCA fund contributions sourced from illicit proceeds", level: "high" },
      { risk: "Asset transfers to related parties at undervalue sanctioned under DOCA", level: "high" },
      { risk: "Restructured company used as clean vehicle for ongoing illicit activity", level: "medium" },
    ],
    sources: [AUSTRAC_INSOLVENCY, AUSTRAC_TABLE6, AML_CTF_ACT, LEX_AML_TABLE6],
  },
  {
    id: "ins-liquidation-asset-sale",
    categoryId: "insolvency",
    label: "Acting for a liquidator in realising company assets (real estate or business sale)",
    description:
      "Assisting a liquidator in the sale of company-owned real estate (Item 1) or the sale/transfer of a subsidiary, business or body corporate (Item 2) as part of a creditors' voluntary winding up or court-ordered liquidation. AUSTRAC confirms that a liquidator arranging a sale of company real estate provides an Item 1 designated service to the company.",
    verdict: "designated",
    tableItem: "Table 6, Items 1 and/or 2 (and Item 3 if funds held)",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — selling company real estate in liquidation engages Item 1; selling a subsidiary or body corporate engages Item 2; managing the liquidation account engages Item 3. The client is the company in liquidation.",
    customerForCDD: "The company in liquidation (the person being assisted through the transaction)",
    whyCaptured:
      "AUSTRAC's insolvency guidance gives these explicit examples: (1) 'A liquidator arranging the sale of company-owned real estate — the liquidator is providing an item 1 designated service to the company'; (2) 'A liquidator uses a liquidation account to distribute funds to creditors — the liquidator is providing an item 3 designated service to the company.' Importantly, the page states: 'the fact that your actions may benefit creditors, shareholders or other stakeholders doesn’t, on its own, make those persons your client' — the client is the company being assisted. Designated service obligations start when the lawyer 'begins managing or carrying out a sale of assets'.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Company assets sold at undervalue to a related or connected party", level: "high" },
      { risk: "Proceeds of asset sale diverted before distribution to legitimate creditors", level: "high" },
      { risk: "Manufactured insolvency to transfer clean assets out of reach of enforcement", level: "high" },
      { risk: "Fictitious creditor claims submitted to obtain distribution of proceeds of crime", level: "high" },
      { risk: "Real estate sold to money-laundering buyer concealed behind nominee purchaser", level: "medium" },
    ],
    sources: [AUSTRAC_INSOLVENCY, AUSTRAC_TABLE6, AML_CTF_ACT],
  },
  {
    id: "ins-liquidation-funds-management",
    categoryId: "insolvency",
    label: "Managing the liquidation account and distributing funds to creditors",
    description:
      "Receiving, controlling and disbursing funds held in the liquidation account — including collecting book debts, managing trading receipts, and distributing dividends to creditors in a creditors' voluntary winding up or court-ordered liquidation. AUSTRAC expressly identifies this as an Item 3 designated service provided to the company.",
    verdict: "designated",
    tableItem: "Table 6, Item 3",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — using a liquidation account to receive and distribute company funds is an Item 3 designated service. The client is the company in liquidation, not the individual creditors receiving distributions.",
    customerForCDD: "The company in liquidation",
    whyCaptured:
      "AUSTRAC's insolvency guidance states: 'A liquidator uses a liquidation account to distribute funds to creditors — the liquidator is providing an item 3 designated service to the company.' Item 3 captures 'receiving, holding and controlling (including disbursing) or managing a person’s money... as part of assisting the person in the planning or execution of a transaction'. The company's liquidation account is the company's money; managing and disbursing it in connection with the winding-up process is a paradigm Item 3 service. Distributions to creditors do not make each creditor a separate client.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Fictitious or inflated creditor proofs of debt used to extract funds", level: "high" },
      { risk: "Funds passing through liquidation account sourced from pre-insolvency fraud", level: "high" },
      { risk: "Priority payments manipulated to benefit connected parties", level: "medium" },
      { risk: "Trading receipts during liquidation commingled with illicit funds", level: "medium" },
    ],
    sources: [AUSTRAC_INSOLVENCY, AUSTRAC_TABLE6, AML_CTF_ACT],
  },
  {
    id: "ins-receivership",
    categoryId: "insolvency",
    label: "Acting for a receiver or controller (share sale, asset realisation)",
    description:
      "Assisting a receiver, receiver and manager, or controller appointed under a security document or by court order, including in the realisation of assets, sale of shares in a subsidiary, or enforcement of security. AUSTRAC identifies the receiver implementing a subsidiary share sale as an Item 2 designated service. The client may be the company, the appointing secured creditor, or both, depending on the nature of the appointment.",
    verdict: "designated",
    tableItem: "Table 6, Items 2 and/or 3 (and potentially Items 1 and 4)",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — a receiver implementing a subsidiary share sale provides an Item 2 designated service. Managing enforcement proceeds engages Item 3. Asset sales may trigger Item 1. Client may be the company, the secured creditor, or both.",
    customerForCDD: "The company, the appointing secured creditor, or both — depending on the nature and terms of the appointment",
    whyCaptured:
      "AUSTRAC's insolvency guidance states: 'A receiver implements the sale of shares in a subsidiary — the receiver is providing an item 2 designated service to the company.' It also states: 'In some controller or receivership appointments, the client may be the company, the appointing secured creditor, or both, depending on the method and terms of appointment.' This duality in client identity is unique to receivership. The designated service obligation starts when implementation steps are taken — not merely by the appointment.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Receivership engineered by a connected secured creditor to take control of company assets", level: "high" },
      { risk: "Security interest created or assigned to a criminal-connected party shortly before appointment", level: "high" },
      { risk: "Asset realisation at undervalue to benefit the appointing creditor", level: "high" },
      { risk: "Proceeds of realisation directed to offshore accounts of appointing creditor", level: "medium" },
    ],
    sources: [AUSTRAC_INSOLVENCY, AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_DESIGNATED],
  },
  {
    id: "ins-personal-bankruptcy",
    categoryId: "insolvency",
    label: "Personal bankruptcy — acting as trustee in bankruptcy or acting for the bankrupt",
    description:
      "Acting as trustee in bankruptcy of a sequestrated estate under the Bankruptcy Act 1966 (Cth), or acting as a lawyer for the bankrupt in relation to the administration of their estate. AUSTRAC provides important guidance: a trustee in bankruptcy selling vested property is acting in relation to the estate, not assisting a specific person — and accordingly Items 1–4 and 6 do not apply in that estate-only role. However, Item 5 may apply if a shelf company in the estate is sold.",
    verdict: "depends",
    verdictSummary: "Depends — a trustee in bankruptcy acting in relation to the estate only (not assisting a specific person) is NOT providing a designated service under Items 1–4 or 6. But where the lawyer acts for a debtor who is a 'person' being assisted in a transaction, Items 1–4 may apply.",
    conditions: [
      "Trustee in bankruptcy selling vested property as estate administrator only → NOT DESIGNATED under Items 1–4 and 6 (acting in relation to an estate, not assisting a specific person)",
      "Item 5 may apply if a shelf company vested in the estate is sold or transferred → may be DESIGNATED",
      "Lawyer acting for a debtor who voluntarily enters a personal insolvency agreement (PIA) and the lawyer assists in implementing a transaction (e.g. property transfer) as part of that agreement → Item 1 or 2 may apply if not court-ordered",
      "Item 7 does not apply where acting as trustee of a 'regulated debtor's estate' — this is an express statutory exclusion",
    ],
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Bankruptcy manufactured to frustrate creditor enforcement of judgment debts", level: "high" },
      { risk: "Assets concealed or transferred before bankruptcy to defeat creditors", level: "high" },
      { risk: "Fraudulent proofs of debt lodged by connected creditors to capture estate funds", level: "high" },
      { risk: "Income producing assets transferred out of estate before vesting", level: "medium" },
    ],
    sources: [AUSTRAC_INSOLVENCY, AUSTRAC_TABLE6, AML_CTF_ACT],
  },
  {
    id: "ins-scheme-of-arrangement",
    categoryId: "insolvency",
    label: "Scheme of arrangement (Part 5.1 Corporations Act)",
    description:
      "Assisting a company in preparing and implementing a scheme of arrangement under Part 5.1 of the Corporations Act 2001, including restructuring the company's share capital, debt restructuring, or a merger effected by scheme. A scheme requires court approval at two stages; however, the court-order exclusion applies only to activities the court order itself requires or gives effect to — not to all work done as part of the scheme process.",
    verdict: "designated",
    tableItem: "Table 6, Items 4, 6 and/or 2 (depending on scheme structure)",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — implementing a scheme of arrangement typically engages Item 6 (restructuring a body corporate), Item 4 (debt/equity financing), and/or Item 2 (transfer of a body corporate). Court approval does not remove the designated service status of the implementation work.",
    customerForCDD: "The company being assisted through the scheme implementation",
    whyCaptured:
      "AUSTRAC's insolvency guidance states that Item 6 applies 'where you take steps that assist a person to create or restructure a body corporate or legal arrangement, or carry it out on their behalf'. A scheme of arrangement that restructures the company's share capital or implements a merger is paradigmatically a restructure of a body corporate. The court-order exclusion does not apply merely because the scheme required court sanction — it only applies 'where the order itself specifically requires or gives effect to the activity'. The detailed implementation steps (deed of release, share transfers, creditor payment mechanics) are not themselves required by the court order.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Scheme used to merge a legitimate entity with a criminal-connected entity to clean illicit funds", level: "high" },
      { risk: "Creditor scheme used to coerce legitimate creditors into accepting cents on the dollar while connected party creditors are paid in full", level: "high" },
      { risk: "Scheme funding sourced from illicit proceeds introduced as 'scheme consideration'", level: "high" },
      { risk: "Complex cross-border scheme used to move assets to low-disclosure jurisdiction", level: "medium" },
    ],
    sources: [AUSTRAC_INSOLVENCY, AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_DESIGNATED],
  },
  {
    id: "ins-safe-harbour",
    categoryId: "insolvency",
    label: "Safe harbour restructuring (s 588GA Corporations Act)",
    description:
      "Advising a company and its directors on a safe harbour restructuring under s 588GA of the Corporations Act 2001, which temporarily suspends the insolvent trading duty while a genuine restructuring is developed. Safe harbour work ranges from high-level advice (not designated) to active implementation of a restructuring plan that may involve refinancing, asset disposals or entity restructuring (potentially designated).",
    verdict: "depends",
    verdictSummary: "Depends — high-level safe harbour advice is not designated; implementing specific transactions within the restructuring plan (financing arrangements, asset sales, entity restructuring) may engage Items 1, 2, 3, 4 or 6 depending on what is implemented.",
    conditions: [
      "Advising directors on whether the safe harbour applies and preparing the restructuring plan → NOT DESIGNATED (advisory only)",
      "Arranging new debt or equity financing as part of the restructuring plan → Item 4 (debt/equity financing of a body corporate) — DESIGNATED",
      "Implementing a restructure of the corporate group (e.g. amalgamation, asset hive-down) → Item 6 (restructuring of a body corporate) — DESIGNATED",
      "Assisting in the sale of a division or subsidiary as part of the restructuring → Item 2 (body corporate transfer) — DESIGNATED",
      "Assisting in the sale of real estate assets as part of the restructuring → Item 1 — DESIGNATED",
      "Managing funds held as part of implementing any of the above transactions → Item 3 — DESIGNATED",
    ],
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Safe harbour used to delay insolvency proceedings while assets are transferred to connected parties", level: "high" },
      { risk: "Restructuring plan designed to benefit directors/shareholders at expense of creditors", level: "high" },
      { risk: "New financing sourced from illicit funds introduced under guise of rescue capital", level: "high" },
      { risk: "Asset hive-down to clean subsidiary leaving creditor claims against shell", level: "high" },
    ],
    sources: [AUSTRAC_INSOLVENCY, AUSTRAC_TABLE6, AML_CTF_ACT],
  },
  {
    id: "ins-informal-workout",
    categoryId: "insolvency",
    label: "Informal workout / out-of-court debt restructuring",
    description:
      "Advising and implementing an informal debt restructuring or workout arrangement negotiated directly between a debtor company and its creditors, without formal insolvency proceedings. Informal workouts are not court-ordered processes, so the court-order exclusion never applies. Whether Table 6 is triggered depends on whether the lawyer takes implementation steps beyond pure advice.",
    verdict: "depends",
    verdictSummary: "Depends — advisory-only work is not designated; implementing the workout (refinancing, asset sales, entity restructuring, holding creditor funds) engages the relevant Table 6 items. No court-order exclusion is available as there is no court process.",
    conditions: [
      "Advising on workout options, drafting standstill letters, or negotiating heads of agreement without implementing transactions → NOT DESIGNATED",
      "Arranging debt refinancing or new money facilities as part of the workout → Item 4 (debt financing of a body corporate) — DESIGNATED",
      "Implementing a corporate restructure (e.g. share transfers, trust restructuring, subsidiary mergers) → Item 6 and/or Item 2 — DESIGNATED",
      "Selling real estate or business assets as part of the workout → Items 1 or 2 — DESIGNATED",
      "Holding or disbursing creditor settlement funds → Item 3 — DESIGNATED",
    ],
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Informal workout used to restructure company ownership to criminal-connected parties without court scrutiny", level: "high" },
      { risk: "Workout funding introduced from illicit sources as 'new money'", level: "high" },
      { risk: "Creditor debt purchased by criminal-connected party at discount to gain control of restructuring outcome", level: "high" },
      { risk: "No court oversight means fewer checks on asset transfers to related parties", level: "high" },
      { risk: "Standstill used to allow asset dissipation before formal enforcement", level: "medium" },
    ],
    sources: [AUSTRAC_INSOLVENCY, AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_DESIGNATED],
  },
  {
    id: "ins-rescue-financing",
    categoryId: "insolvency",
    label: "Arranging rescue or debtor-in-possession (DIP) financing",
    description:
      "Assisting a distressed company to arrange emergency or rescue financing — including debtor-in-possession (DIP) facilities during administration, bridge loans, or new money injections from existing or new lenders. AUSTRAC's insolvency guidance expressly identifies arranging short-term funding to continue trading during administration as an Item 4 designated service.",
    verdict: "designated",
    tableItem: "Table 6, Item 4",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — AUSTRAC's own example is an administrator arranging short-term funding to continue trading, which is an Item 4 designated service to the company.",
    customerForCDD: "The company being assisted with the financing arrangement",
    whyCaptured:
      "AUSTRAC's insolvency guidance states: 'An administrator arranges short-term funding to continue trading — the administrator is providing an item 4 designated service to the company.' Item 4 captures 'assisting a person in organising, planning or executing a transaction... for equity or debt financing relating to a body corporate or legal arrangement'. Arranging rescue, bridge or DIP financing — whether by the administrator/receiver or by the lawyer assisting them — falls squarely within Item 4.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Rescue financing sourced from criminal-connected lender at non-commercial terms", level: "high" },
      { risk: "DIP facility used to introduce illicit funds as 'rescue capital' that is then legitimised through trading", level: "high" },
      { risk: "Security granted to rescue lender gives criminal-connected party control over company assets", level: "high" },
      { risk: "Rescue financing contingent on directing post-recovery funds to lender-connected parties", level: "medium" },
    ],
    sources: [AUSTRAC_INSOLVENCY, AUSTRAC_TABLE6, AML_CTF_ACT],
  },
  {
    id: "ins-creditor-representation-only",
    categoryId: "insolvency",
    label: "Acting for a creditor in insolvency proceedings (no implementation of transactions)",
    description:
      "Representing a creditor in formal insolvency proceedings — lodging proofs of debt, attending creditors' meetings, voting on resolutions, objecting to a DOCA, or litigating to recover a voidable transaction — without independently implementing any Table 6 transaction. A lawyer who merely acts for a creditor in the conduct of the proceedings does not provide a designated service just because their client benefits from distributions.",
    verdict: "not-designated",
    verdictSummary: "Not designated — AUSTRAC confirms that the fact an action benefits creditors does not make each creditor a client for AML/CTF purposes. Acting for a creditor in the conduct of insolvency proceedings (proof of debt, meetings, voting) is not a designated service.",
    whyExcluded:
      "AUSTRAC's insolvency guidance states: 'The fact that your actions may benefit creditors, shareholders or other stakeholders doesn’t, on its own, make those persons your client for AML/CTF purposes.' A lawyer who acts for a creditor in the conduct of insolvency proceedings (lodging proofs, attending meetings, objecting to resolutions) is providing litigation/advisory services to the creditor client — not implementing a Table 6 transaction. This remains outside Table 6 unless the same lawyer takes active steps to implement a transaction on behalf of the company or any other party.",
    professions: ["Lawyers"],
    mlRisks: [],
    notCaughtExamples: [
      "Lodging a proof of debt on behalf of a creditor client",
      "Representing a creditor at a creditors' meeting and voting on a DOCA proposal",
      "Commencing proceedings to recover a preference payment or voidable transaction",
      "Advising a creditor on its rights and strategy in insolvency proceedings",
    ],
    sources: [AUSTRAC_INSOLVENCY, AUSTRAC_TABLE6, LSJ_DESIGNATED],
  },
  {
    id: "ins-court-order-exception",
    categoryId: "insolvency",
    label: "Understanding the court-order exception in insolvency (when it applies and when it does not)",
    description:
      "A common misconception in insolvency practice is that the court-order exclusion in Items 1, 2 and 3 protects all work done in court-ordered insolvency proceedings. AUSTRAC has clarified this is incorrect: the exclusion applies only where the court order ITSELF specifically requires or gives effect to the specific activity — not merely because the practitioner was appointed by a court.",
    verdict: "depends",
    verdictSummary: "Depends on whether the court order itself specifically requires or gives effect to the particular activity. A court appointment alone does NOT remove designated service status for all subsequent transactions carried out using general powers.",
    conditions: [
      "Court order itself requires or gives effect to the specific transaction (e.g. court orders the specific sale of a named property at a fixed price) → that specific transaction is NOT DESIGNATED under Items 1–3",
      "Court appoints a liquidator/administrator but the subsequent asset sales and fund management are carried out using general statutory powers (not specifically ordered) → those activities ARE DESIGNATED",
      "Trustee in bankruptcy acting in relation to the estate only (not assisting a specific person) → Items 1–4 and 6 do NOT apply (estate-only carve-out, distinct from the court-order exception)",
      "Liquidator appointed by court but uses general powers to realise real estate → Item 1 DESIGNATED (court appointment ≠ court-ordered sale)",
    ],
    professions: ["Lawyers"],
    mlRisks: [],
    notCaughtExamples: [
      "A court order that specifically directs the sale of 123 Smith Street for $X to Buyer Y at settlement on a fixed date — that specific sale is excluded",
    ],
    sources: [AUSTRAC_INSOLVENCY, AUSTRAC_TABLE6, AML_CTF_ACT, EASYAML_COURT_ORDERS],
  },

  // ── FAMILY LAW ────────────────────────────────────────────────────────────────
  {
    id: "fl-negotiation-advice-only",
    categoryId: "family-law",
    label: "Family law advice, negotiation and mediation (no funds handled, no transfer implemented)",
    description:
      "Providing legal advice to a party in family law proceedings, representing a client in negotiation or mediation, or appearing in Family Court or Federal Circuit Court on financial or parenting matters — where the lawyer does not hold client funds, implement a property transfer, or draft implementing instruments for a Table 6 transaction.",
    verdict: "not-designated",
    verdictSummary: "Not designated — pure advisory, negotiation, mediation and litigation work in family law does not trigger Table 6 where no funds are held and no transfer implemented.",
    whyExcluded:
      "Table 6 requires the lawyer to be 'assisting' in a transaction (e.g. a transfer of real estate or body corporate) or actively holding/managing funds as part of executing such a transaction. Purely advisory, negotiation and litigation services that do not cross into implementing a financial transaction are outside scope. AUSTRAC guidance and the Freedman & Gopalan analysis both confirm that 'litigation-only or advice without handling funds are generally out of scope'.",
    professions: ["Lawyers"],
    mlRisks: [],
    notCaughtExamples: [
      "Advising a client on their entitlements in a property settlement without taking steps to implement",
      "Representing a client in contested Family Court proceedings",
      "Attending a mediation or Family Dispute Resolution conference",
      "Drafting affidavits, applications or responses in parenting or financial proceedings",
    ],
    sources: [AUSTRAC_TABLE6, FREEDMAN_GOPALAN, LSJ_DESIGNATED],
  },
  {
    id: "fl-consent-orders-drafting",
    categoryId: "family-law",
    label: "Drafting consent orders for property settlement (no subsequent implementation by same lawyer)",
    description:
      "Negotiating and drafting consent orders in family law proceedings — i.e. preparing the minute of orders and short affidavit for filing with the Federal Circuit and Family Court of Australia (FCFCOA) — where the same lawyer does not then go on to implement the resulting property transfers (e.g. does not act in the conveyance or execute the transfer of title).",
    verdict: "not-designated",
    verdictSummary: "Not designated — drafting consent orders only influences a possible future conveyance; the order-drafting itself is not a designated service. It is the conveyancer who later executes the transfer who is captured.",
    whyExcluded:
      "AUSTRAC's worked example expressly addresses this scenario: a lawyer drafting a consent order after mediation, including provisions for a real estate transfer, is NOT providing a designated service through the consent-order drafting because it 'only influences a possible future conveyance'. The designated service is provided by the conveyancer who later executes the transfer. However, if the same lawyer who drafted the consent orders then also implements the transfer (e.g. acts as conveyancer to effect title transfer), Item 1 will be triggered for that additional service.",
    professions: ["Lawyers"],
    mlRisks: [],
    notCaughtExamples: [
      "Drafting consent orders for property settlement where client engages a separate conveyancer to transfer title",
      "Filing consent orders with the FCFCOA and receiving sealed orders",
    ],
    sources: [AUSTRAC_TABLE6, EASYAML_COURT_ORDERS, LSJ_DESIGNATED, AML_CTF_ACT],
  },
  {
    id: "fl-consent-orders-implementation",
    categoryId: "family-law",
    label: "Implementing a property transfer arising from consent orders or court orders",
    description:
      "Where the same family lawyer (or their firm) drafts the consent orders AND then takes steps to implement the resulting property transfer — e.g. executing transfer of title, attending settlement, or disbursing proceeds from trust account. Court-ordered transfers are excluded from Items 1 and 2; however, the conveyancing implementation work (physically transferring title) is itself a designated service.",
    verdict: "depends",
    verdictSummary: "Depends — the court order itself is excluded, but the conveyancing implementation work to execute a court-ordered transfer of real estate or body corporate is a designated service under Item 1 or 2.",
    conditions: [
      "Drafting consent orders only (separate conveyancer implements transfer) → NOT DESIGNATED",
      "Implementing the transfer of real estate pursuant to a court or consent order (attending settlement, executing transfer) → Item 1 — DESIGNATED (the conveyancing work is captured even though the underlying order is excluded)",
      "Implementing transfer of a company or trust interest pursuant to a court or consent order → Item 2 — DESIGNATED",
      "Holding settlement funds in trust account as part of implementing the transfer → Item 3 may also apply",
    ],
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Funds passing through trust account sourced from illicit activity concealed within settlement", level: "high" },
      { risk: "Consent orders used to legitimise transfer of criminally-derived property", level: "high" },
      { risk: "Settlement disguising dissipation of proceeds of crime", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, EASYAML_COURT_ORDERS, LSJ_DESIGNATED, AML_CTF_ACT, FREEDMAN_GOPALAN],
  },
  {
    id: "fl-bfa-property-transfer-real-estate",
    categoryId: "family-law",
    label: "Binding Financial Agreement (BFA) involving transfer of real estate",
    description:
      "Preparing or certifying a Binding Financial Agreement (BFA) under s 90B, 90C or 90D of the Family Law Act 1975 (Cth) (married couples) or s 90UB, 90UC or 90UD (de facto couples), where the BFA provides for the transfer of real estate from one party to the other. A BFA is a private contract — it is NOT a court order — and accordingly the court-order exclusion in Items 1 and 2 does NOT apply to BFAs.",
    verdict: "designated",
    tableItem: "Table 6, Item 1 (and/or Item 3)",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — a BFA is not a court order; the court-order exclusion does not apply. Implementing a real estate transfer under a BFA triggers Item 1.",
    customerForCDD: "The client on whose behalf you are implementing the property transfer",
    whyCaptured:
      "The court-order exclusion in Table 6 Items 1 and 2 only applies to transfers made 'pursuant to, or resulting from, an order of a court or tribunal'. A BFA is a private agreement under the Family Law Act — not a court order. The Law Institute of Victoria's AML/CTF memoranda expressly note that 'there is no carve out in the designated services definitions for binding financial agreements' and that BFAs 'will likely bring some family law matters into the scope of the Act'. A lawyer who assists in implementing a real estate transfer under a BFA provides an Item 1 designated service. If the lawyer also holds settlement funds in trust, Item 3 is triggered.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "BFA used to transfer property to a third party connected to organised crime under cover of relationship breakdown", level: "high" },
      { risk: "Undervalued property transfer in BFA used to strip assets from a party for illicit benefit", level: "high" },
      { risk: "Proceeds of crime laundered through what appears to be a legitimate relationship settlement", level: "high" },
      { risk: "Non-disclosure of assets in BFA to conceal illicit wealth from scrutiny", level: "high" },
      { risk: "BFA structured rapidly during enforcement proceedings to dissipate assets", level: "high" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LIV_MEMORANDA, FREEDMAN_GOPALAN, EASYAML_COURT_ORDERS],
  },
  {
    id: "fl-bfa-business-transfer",
    categoryId: "family-law",
    label: "BFA involving transfer of business interests, shares or trust interests",
    description:
      "A BFA that provides for one party to transfer shares in a company, units in a unit trust, or a beneficial interest in a discretionary trust to the other party as part of a relationship property settlement. Because a BFA is not a court order, the court-order exclusion in Item 2 does not apply, and assisting in the implementation of such transfers is a designated service.",
    verdict: "designated",
    tableItem: "Table 6, Item 2 (and/or Item 6)",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — transferring business, share or trust interests under a BFA triggers Item 2 (body corporate or legal arrangement transfer); Item 6 may also apply if the trust is restructured as part of the settlement.",
    customerForCDD: "The client on whose behalf you are implementing the transfer",
    whyCaptured:
      "Item 2 captures assisting in the planning or execution of a transaction to sell, buy or otherwise transfer a body corporate or legal arrangement (other than pursuant to a court order). A BFA that transfers shares, units or beneficial interests in trusts falls squarely within this definition. If the trust structure is also modified (e.g. removing a party as trustee or beneficiary), Item 6 (restructuring of a legal arrangement) may also be triggered. The Law Institute of Victoria expressly notes 'ancillary services like property settlements or trust arrangements involving large sums fall within the designated services framework'.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Business or trust interests transferred at undervalue to strip assets before enforcement", level: "high" },
      { risk: "Family company used as vehicle to hold illicit funds — transfer conceals true beneficial ownership", level: "high" },
      { risk: "Trust restructured in settlement to introduce new controller with criminal connections", level: "high" },
      { risk: "Complex corporate/trust structure makes true value of transferred interest opaque", level: "high" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LIV_MEMORANDA, LSJ_DESIGNATED, FREEDMAN_GOPALAN],
  },
  {
    id: "fl-bfa-drafting-certification-only",
    categoryId: "family-law",
    label: "Certifying independent legal advice on a BFA (no implementation of transfers)",
    description:
      "Acting as the independent legal adviser who certifies a party's BFA under s 90G or s 90UJ of the Family Law Act — providing legal advice on the effect of the BFA and signing the required certificate — but not implementing any of the property transfers in the BFA (e.g. a different lawyer or conveyancer handles the actual transfer of title).",
    verdict: "not-designated",
    verdictSummary: "Not designated — providing independent legal advice and signing the BFA certificate without implementing transfers is advisory work only and does not trigger Table 6.",
    whyExcluded:
      "The designated service under Items 1 and 2 requires 'assisting in the planning or execution' of the transfer or 'otherwise acting for or on behalf of a person' in the transaction. A lawyer who only certifies advice on a BFA but takes no steps to implement the resulting property transfers (i.e. does not organise, settle or execute the conveyance) does not cross the 'assisting' threshold. The advisory and certification role is not 'sufficiently linked to the outcome' of the transfer. The position changes if the same lawyer then also implements the transfers.",
    professions: ["Lawyers"],
    mlRisks: [],
    notCaughtExamples: [
      "Advising a party on the effect of a pre-nuptial BFA and signing the s 90G certificate without acting on the settlement",
      "Certifying advice on a post-separation BFA where a separate conveyancer will implement the property transfer",
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_DESIGNATED, LIV_MEMORANDA],
  },
  {
    id: "fl-trust-account-settlement-funds",
    categoryId: "family-law",
    label: "Receiving and disbursing settlement funds through trust account in a family law property settlement",
    description:
      "Receiving funds from one party (or a lender), holding them in the law firm's trust account, and disbursing them to the other party or their mortgagee as part of implementing a property settlement — whether the settlement arises from a BFA, consent orders or court orders. Holding and disbursing settlement funds in connection with the execution of a property transaction engages Item 3.",
    verdict: "designated",
    tableItem: "Table 6, Item 3",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — receiving, holding and disbursing a client's money in connection with the execution of a property or asset transfer is a designated service under Item 3.",
    customerForCDD: "The person whose money is being held or managed",
    whyCaptured:
      "Item 3 captures 'receiving, holding and controlling (including disbursing) or managing a person's money... as part of assisting the person in the planning or execution of a transaction, or otherwise acting for or on behalf of a person in a transaction'. Holding and disbursing settlement proceeds through a law firm's trust account in connection with implementing a family law property settlement is a paradigm example of Item 3. Freedman & Gopalan expressly identifies 'receiving and disbursing settlement proceeds via trust' and 'acting as a paying agent for spousal maintenance or child support' as in-scope services.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Settlement funds sourced from proceeds of crime introduced through trust account", level: "high" },
      { risk: "Large unexplained cash component of settlement payment with no verifiable source", level: "high" },
      { risk: "Funds received from offshore accounts in high-risk jurisdictions as part of settlement", level: "high" },
      { risk: "Rapid disbursement of funds to multiple payees obscuring beneficial destination", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, FREEDMAN_GOPALAN, LSJ_DESIGNATED],
  },
  {
    id: "fl-spousal-maintenance-paying-agent",
    categoryId: "family-law",
    label: "Acting as paying agent for ongoing spousal maintenance or child support payments",
    description:
      "Where a law firm's trust account is used as a conduit to receive and disburse ongoing spousal maintenance, de facto partner maintenance, or child support payments — i.e. the paying party deposits funds with the firm and the firm disburses to the receiving party. This constitutes managing a person's money in connection with a transaction and engages Item 3.",
    verdict: "designated",
    tableItem: "Table 6, Item 3",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — acting as a paying agent for maintenance through trust account is managing a person's money in connection with a transaction under Item 3.",
    customerForCDD: "The person on whose behalf funds are held and disbursed",
    whyCaptured:
      "Item 3 is not limited to one-off settlement transactions — it captures any ongoing 'receiving, holding and controlling (including disbursing) or managing' of a person's money in connection with assisting in the execution of a transaction. Using a trust account to channel recurring maintenance payments places the lawyer in an ongoing money management role connected to the financial transaction underpinning the maintenance obligation. Freedman & Gopalan specifically identifies this as an in-scope service.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Maintenance payments used as mechanism to regularly transfer illicit funds to a third party", level: "medium" },
      { risk: "Payer's maintenance funds sourced from criminal activity", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, FREEDMAN_GOPALAN],
  },
  {
    id: "fl-de-facto-property-settlement",
    categoryId: "family-law",
    label: "De facto relationship property settlement (BFA or court proceedings under Pt VIIIAB FLA)",
    description:
      "Assisting a de facto partner (including same-sex de facto partners) to negotiate and implement a property settlement under the Family Law Act 1975 (Cth), whether by way of a BFA under s 90UB/90UC/90UD, consent orders under s 90KA applied by analogy, or contested proceedings. The same analysis as married couples applies: BFAs are not court orders; court-ordered transfers are excluded but implementation is captured.",
    verdict: "depends",
    verdictSummary: "Depends — same analysis as married couples applies. BFA implementation triggers Items 1, 2 or 3 (depending on assets); consent order drafting alone does not; holding and disbursing funds triggers Item 3.",
    conditions: [
      "Advising on or negotiating a de facto property settlement without implementing transfers or holding funds → NOT DESIGNATED",
      "Drafting and certifying a BFA under s 90UB/90UC/90UD without implementing transfers → NOT DESIGNATED (advisory only)",
      "Implementing a real estate transfer under a de facto BFA → Item 1 — DESIGNATED (BFA is not a court order)",
      "Implementing transfer of business interests under a de facto BFA → Item 2 — DESIGNATED",
      "Holding and disbursing settlement funds in trust account → Item 3 — DESIGNATED",
      "Implementing a transfer pursuant to a court order under s 90SM FLA → implementation work DESIGNATED under Item 1/2 (court order excludes the underlying order, not the conveyancing implementation)",
    ],
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "De facto relationship (particularly short-term) created to facilitate asset transfer under guise of relationship breakdown", level: "high" },
      { risk: "Property transferred at significant undervalue in de facto settlement", level: "high" },
      { risk: "Complex offshore de facto property structures with unclear beneficial ownership", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LIV_MEMORANDA, FREEDMAN_GOPALAN],
  },
  {
    id: "fl-family-trust-restructure-settlement",
    categoryId: "family-law",
    label: "Restructuring a family trust or company as part of a property settlement",
    description:
      "Where a property settlement requires the restructuring of a family discretionary trust or family company — e.g. removing one spouse as trustee or beneficiary, appointing the other as sole trustee, amending the trust deed, or transferring the corporate trustee's shares — Item 6 and/or Item 2 may be triggered in addition to any real estate or client funds Items.",
    verdict: "designated",
    tableItem: "Table 6, Items 2 and/or 6",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — restructuring a family trust or company as part of a property settlement triggers Item 6 (restructuring of a legal arrangement) and/or Item 2 (transfer of body corporate or trust interest).",
    customerForCDD: "The person being assisted (and beneficial owners/trustees/directors as applicable to the structure being changed)",
    whyCaptured:
      "Item 6 expressly captures both 'creation' and 'restructuring' of a body corporate or legal arrangement. Amending a trust deed, changing trustee, or modifying beneficiary entitlements as part of a family law settlement is a restructure. If shares in a family company are transferred to one party, Item 2 (transfer of a body corporate) is also engaged. The Law Institute of Victoria expressly identifies 'trust arrangements involving large sums' as falling 'within the designated services framework' in the family law context. CDD must extend to the trustee, settlor and all beneficiaries of the restructured trust.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Family trust restructured to introduce a PEP-connected party as controller under guise of settlement", level: "high" },
      { risk: "Trust restructure obscures transfer of illicit wealth between parties", level: "high" },
      { risk: "Corporate trustee share transfer used to change control of trust without triggering stamp duty", level: "medium" },
      { risk: "Layered family trust/company structure makes true value of assets difficult to assess", level: "high" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LIV_MEMORANDA, LSJ_DESIGNATED, FREEDMAN_GOPALAN],
  },
  {
    id: "fl-superannuation-splitting",
    categoryId: "family-law",
    label: "Superannuation splitting in family law proceedings",
    description:
      "Implementing a superannuation splitting agreement or order — either by consent under s 90MH or by court order under s 90MT of the Family Law Act — that splits a superannuation interest between the parties. The split itself (a payment flag or splitting order) does not transfer real property or a body corporate, but if the split is satisfied by transferring SMSF assets (e.g. property or business interests out of the SMSF), additional Items may be triggered.",
    verdict: "depends",
    verdictSummary: "Depends — a super split that transfers fund credits only (no property or entity transfer) is generally not designated; a split satisfied by transferring SMSF real estate or business interests may trigger Items 1 or 2.",
    conditions: [
      "Documenting a superannuation splitting agreement or order where the split is satisfied by a payment flag or credit transfer only → NOT DESIGNATED (no real estate or body corporate transfer)",
      "Super split satisfied by rolling over SMSF assets including real property → Item 1 (real estate transfer) may apply",
      "Super split that requires restructuring the SMSF (e.g. new trust deed, trustee change) → Item 6 (restructuring) may apply",
      "Holding split proceeds in trust account pending rollover → Item 3 may apply",
    ],
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Super split used to transfer illicit funds between parties under the guise of a lawful entitlement", level: "medium" },
      { risk: "SMSF property used in split as mechanism to legitimise illicitly acquired real estate", level: "high" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, FREEDMAN_GOPALAN, STEP_PAPER],
  },
  {
    id: "fl-cohabitation-agreement",
    categoryId: "family-law",
    label: "Cohabitation agreement / financial agreement before de facto relationship (BFA s 90UB)",
    description:
      "Drafting and certifying a financial agreement entered into before a de facto relationship under s 90UB of the Family Law Act, or a financial agreement during a de facto relationship under s 90UC, to define property rights if the relationship breaks down. These are pre-emptive agreements with no current transfer of property — they define future entitlements only.",
    verdict: "not-designated",
    verdictSummary: "Not designated — a prospective cohabitation or pre-relationship BFA that defines future property rights without implementing any current transfer is advisory/drafting work that does not engage Table 6.",
    whyExcluded:
      "Table 6 requires 'assisting in the planning or execution of a transaction' — the transaction must be a current or imminent event, not a hypothetical future one. A pre-relationship or during-relationship BFA that simply records agreed property rights for a possible future breakdown is not assisting in the execution of a current transaction. There is no transfer of real estate, body corporate or legal arrangement at the time of drafting. The position changes if the BFA is implemented on separation and the lawyer then executes the property transfers — at that point Items 1, 2 or 3 may be triggered.",
    professions: ["Lawyers"],
    mlRisks: [],
    notCaughtExamples: [
      "Pre-nuptial BFA (s 90B) defining property rights before marriage",
      "De facto cohabitation agreement (s 90UB) defining property rights before moving in together",
      "Financial agreement during marriage (s 90C) without implementing any transfers",
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LIV_MEMORANDA],
  },
  {
    id: "fl-dvo-avo-proceedings",
    categoryId: "family-law",
    label: "Domestic violence orders (DVOs/AVOs) and related proceedings",
    description:
      "Representing a party in proceedings for a domestic violence order (DVO), apprehended violence order (AVO), or Family Violence Intervention Order (FVIO), including related applications for recovery orders, location orders, or child protection orders. These proceedings do not involve property transfers, asset management or entity creation.",
    verdict: "not-designated",
    verdictSummary: "Not designated — DVO/AVO proceedings are protective orders that do not involve financial transactions, property transfers or the creation of bodies corporate or legal arrangements.",
    whyExcluded:
      "Table 6 Items 1–9 all involve financial transactions: property transfer, entity creation or restructure, asset management, or financing. Domestic violence and protective order proceedings are entirely outside this framework. No Table 6 item is engaged.",
    professions: ["Lawyers"],
    mlRisks: [],
    notCaughtExamples: [
      "AVO application in NSW Local Court",
      "DVO application in Queensland Magistrates Court",
      "Family Violence Intervention Order in Victoria",
      "Recovery order for a child under Family Law Act",
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT],
  },

  // ── ESTATE PLANNING ───────────────────────────────────────────────────────
  {
    id: "ep-wills-drafting",
    categoryId: "estate-planning",
    label: "Drafting a will (simple or complex, no express trust created)",
    description:
      "Preparing a will for a client, including wills incorporating testamentary trust provisions. Testamentary trusts arise by operation of law upon death — they are not express trusts intentionally created in writing during the client's lifetime. Accordingly, will drafting is categorically excluded from Table 6.",
    verdict: "not-designated",
    verdictSummary: "Not designated — drafting a will (including one that creates a testamentary trust on death) is not a designated service under Table 6.",
    whyExcluded:
      "AUSTRAC guidance expressly states that 'the drafting of a will, and the subsequent creation of a testamentary trust, won't constitute a designated service under items 2, 4–5 and 6–9.' Testamentary trusts are excluded because they are not 'express trusts' intentionally created in writing during a person's lifetime — they arise by operation of law on death. This exclusion applies even where the will is complex and creates multiple testamentary trusts for different beneficiaries.",
    professions: ["Lawyers"],
    mlRisks: [],
    notCaughtExamples: [
      "Complex will creating multiple testamentary trusts for minor beneficiaries",
      "Discretionary testamentary trust will for tax-effective succession",
      "Will drafting even where estate is large or beneficiaries are offshore",
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_DESIGNATED, STEP_PAPER],
  },
  {
    id: "ep-enduring-poa-natural-person",
    categoryId: "estate-planning",
    label: "Drafting or acting under an enduring power of attorney for a natural person",
    description:
      "Drafting an enduring power of attorney (EPOA) appointing an attorney to manage a natural person's financial or personal affairs, or acting as attorney under such an instrument. Item 7 of Table 6 captures 'power of attorney of a body corporate or legal arrangement', not attorneys acting for natural persons.",
    verdict: "not-designated",
    verdictSummary: "Not designated — acting under a power of attorney for a natural person is not captured by Item 7, which only covers attorneys for a body corporate or legal arrangement.",
    whyExcluded:
      "Item 7 expressly captures acting as 'a power of attorney of a body corporate or legal arrangement', not a power of attorney for a natural person. AUSTRAC guidance confirms that 'acting for a natural person under a power of attorney' is a 'likely out' example for Item 7. Drafting the EPOA itself is also not an implementation step for a Table 6 transaction.",
    professions: ["Lawyers"],
    mlRisks: [],
    notCaughtExamples: [
      "EPOA for financial management under the Powers of Attorney Act 2003 (NSW)",
      "EPOA for personal/health decisions",
      "Acting as attorney to manage an individual's bank accounts and investments",
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_DESIGNATED],
  },
  {
    id: "ep-enduring-poa-body-corporate",
    categoryId: "estate-planning",
    label: "Acting as power of attorney for a body corporate or trust",
    description:
      "Acting as, or drafting a power of attorney appointing an attorney for, a body corporate (company) or legal arrangement (trust). This is distinct from an EPOA for a natural person — where the nominator is a body corporate or trust rather than an individual, Item 7 is engaged.",
    verdict: "designated",
    tableItem: "Table 6, Item 7",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — acting as power of attorney for a body corporate or legal arrangement falls within Item 7.",
    customerForCDD: "The nominator (the body corporate or trust on whose behalf you act as attorney)",
    whyCaptured:
      "Item 7 expressly includes 'a power of attorney of a body corporate or legal arrangement' as one of the positions captured. AUSTRAC guidance gives 'drafting a power of attorney for a corporation' as a 'likely in' example. The key distinction is the nature of the nominator: a corporate/trust nominator triggers Item 7; a natural person nominator does not.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Attorney for corporate concealing true controller", level: "high" },
      { risk: "Attorney used to execute transactions without oversight of beneficial owner", level: "high" },
      { risk: "Corporate POA used in jurisdictions with weak beneficial ownership registers", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_DESIGNATED],
  },
  {
    id: "ep-advance-care-directive",
    categoryId: "estate-planning",
    label: "Preparing an advance care directive or medical/lifestyle power of attorney",
    description:
      "Drafting advance care directives, advance health directives, or powers of attorney limited to healthcare and personal/lifestyle decisions (as distinct from financial management). These instruments appoint a substitute decision-maker for health and personal matters only.",
    verdict: "not-designated",
    verdictSummary: "Not designated — advance care directives and health/lifestyle POAs do not involve financial transactions or creation of bodies corporate or legal arrangements.",
    whyExcluded:
      "Table 6 Items 1–9 all relate to financial transactions, property transfers, or the creation of bodies corporate and legal arrangements. Advance care directives and health/lifestyle powers of attorney do not involve any of these elements. No Table 6 item is engaged.",
    professions: ["Lawyers"],
    mlRisks: [],
    notCaughtExamples: [
      "Advance health directive under Guardianship Act 1987 (NSW)",
      "Medical enduring power of attorney",
      "Combined lifestyle and healthcare advance care directive",
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT],
  },
  {
    id: "ep-special-disability-trust",
    categoryId: "estate-planning",
    label: "Establishing a Special Disability Trust (SDT)",
    description:
      "Drafting the trust deed and implementing a Special Disability Trust (SDT) for a principal beneficiary under the Social Security Act 1991. SDTs are a form of express trust created intentionally in writing during the client's lifetime, and accordingly fall within Item 6 if a lawyer assists in their creation.",
    verdict: "designated",
    tableItem: "Table 6, Item 6",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — an SDT is an express trust created intentionally in writing and falls within Item 6 (creation of a legal arrangement).",
    customerForCDD: "The person being assisted PLUS: the trustee, settlor, and all beneficiaries of the SDT",
    whyCaptured:
      "An SDT is an express trust intentionally created in writing — it is not a testamentary trust (which arises by operation of law on death). Item 6 captures assisting in the creation of a legal arrangement, which includes any express trust. The SDT's regulatory purpose under Social Security law does not remove it from the Table 6 definition. CDD obligations include the trustee, settlor, and all beneficiaries.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Misuse of SDT structure to shelter assets while retaining control", level: "medium" },
      { risk: "Inflated trust corpus used to absorb illicit funds under guise of disability care", level: "medium" },
      { risk: "Nominee trustee concealing true controller of SDT assets", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, STEP_PAPER],
  },
  {
    id: "ep-life-interest-trust",
    categoryId: "estate-planning",
    label: "Creating a life interest trust or protective trust (inter vivos)",
    description:
      "Establishing a life interest trust or protective trust during the client's lifetime (inter vivos), under which a beneficiary holds an interest for their lifetime and the remainder passes to others. If created by deed during the grantor's lifetime, this is an express trust. If it would arise under a will on death, the testamentary trust exclusion applies.",
    verdict: "depends",
    verdictSummary: "Depends — an inter vivos life interest trust is designated (express trust under Item 6); a life interest trust created by will on death is NOT designated (testamentary trust exclusion).",
    conditions: [
      "If the life interest trust is created by deed during the client's lifetime (inter vivos) → Item 6 applies — DESIGNATED",
      "If the life interest arrangement is created by will and takes effect on death → testamentary trust exclusion applies — NOT DESIGNATED",
      "CDD for inter vivos creation: the person assisted PLUS trustee, settlor, and all beneficiaries (including life tenant and remaindermen)",
    ],
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Life interest structure used to fragment beneficial ownership and frustrate tracing", level: "medium" },
      { risk: "Offshore remainderman as mechanism for concealed value transfer", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, STEP_PAPER, LSJ_DESIGNATED],
  },
  {
    id: "ep-testamentary-trust-implementation",
    categoryId: "estate-planning",
    label: "Implementing a testamentary trust after the deceased's death",
    description:
      "Administering the estate and implementing testamentary trust provisions after the deceased's death — i.e. transferring assets into the testamentary trust, appointing the trustee, and completing the estate administration steps required to activate the trust. The testamentary trust itself is excluded from Table 6, but implementation may bring in other items.",
    verdict: "depends",
    verdictSummary: "Depends — the testamentary trust itself is not a designated service, but implementation steps may trigger other Table 6 items (e.g. real estate transfer on death).",
    conditions: [
      "Establishing the testamentary trust itself (trust arising by operation of law on death) → NOT DESIGNATED",
      "Transferring real estate into the testamentary trust → Item 1 (real estate transaction) — consider whether court order exclusion applies under probate",
      "Transferring a business or body corporate into the trust → Item 2 may apply",
      "Holding trust assets in your trust account as part of administration → Item 3 may apply",
    ],
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Large estate with offshore beneficiaries and complex trust structure", level: "medium" },
      { risk: "Estate assets used to introduce illicit funds as 'inheritance'", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, STEP_PAPER, LSJ_DESIGNATED],
  },
  {
    id: "ep-family-provision-claim",
    categoryId: "estate-planning",
    label: "Family provision claims / contested estates",
    description:
      "Representing a claimant or defendant in a family provision claim under the Succession Act 2006 (NSW) or equivalent state legislation, or in other contested estate proceedings such as probate caveats, will validity disputes, or executor removal applications.",
    verdict: "not-designated",
    verdictSummary: "Not designated — family provision and contested estate proceedings are litigation/dispute resolution services, not Table 6 transactions.",
    whyExcluded:
      "AUSTRAC has confirmed that legal dispute resolution services 'will generally not fall under table 6'. Family provision claims determine legal entitlements under statute or equity — they do not involve 'assisting' in a future transaction to sell, buy or transfer real estate or a body corporate. Any court-ordered property transfer arising from the judgment is excluded from Items 1 and 2 because it results from a court order.",
    professions: ["Lawyers"],
    mlRisks: [],
    notCaughtExamples: [
      "Family provision claim in NSW Supreme Court",
      "Probate caveat proceedings disputing capacity or undue influence",
      "Executor removal application",
    ],
    sources: [AUSTRAC_TABLE6, LSJ_DESIGNATED, AML_CTF_ACT],
  },

  // ── SMSF ──────────────────────────────────────────────────────────────────
  {
    id: "smsf-establishment",
    categoryId: "smsf",
    label: "Establishing an SMSF — drafting the trust deed",
    description:
      "Acting on client instructions to draft the SMSF trust deed and implement the establishment of a Self-Managed Superannuation Fund. This is one of the most common SMSF services performed by lawyers. The SMSF is a form of express trust created intentionally in writing, and a lawyer who assists in drafting the trust deed is providing a Table 6 Item 6 designated service.",
    verdict: "designated",
    tableItem: "Table 6, Item 6",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — an SMSF is an express trust intentionally created in writing; drafting the SMSF trust deed engages Item 6 (creation of a legal arrangement).",
    customerForCDD: "The person being assisted PLUS: the trustee(s), settlor, and all beneficiaries (SMSF members) of the fund",
    whyCaptured:
      "An SMSF is a superannuation trust — an express trust intentionally created in writing during the client's lifetime. Item 6 captures assisting in the creation of a 'legal arrangement', which expressly includes express trusts. The AUSTRAC/STEP analysis confirms that the accountant or lawyer who drafts the SMSF trust deed provides a designated service. Note: a financial adviser who only provides financial advice on the benefits of an SMSF without drafting the trust is regulated under Table 1 Item 54, not Table 6. CDD obligations for an express trust created under Item 6 extend to the trustee(s), settlor, and all beneficiaries (members).",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "SMSF used in related-party property schemes to absorb illicit funds", level: "high" },
      { risk: "False member contributions used to launder funds into superannuation system", level: "high" },
      { risk: "SMSF trustee acting on instructions of a third party who is not a member", level: "high" },
      { risk: "Offshore or PEP-connected members as beneficial owners", level: "medium" },
      { risk: "Early access schemes using SMSFs to extract and launder super", level: "high" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, STEP_PAPER, LEX_AML_TABLE6],
  },
  {
    id: "smsf-corporate-trustee",
    categoryId: "smsf",
    label: "Incorporating a corporate trustee for an SMSF",
    description:
      "Incorporating a proprietary limited company to act as the corporate trustee of an SMSF, on client instructions. Many SMSF practitioners recommend a corporate trustee structure for succession and administrative reasons. The company incorporation itself is a separate Item 6 designated service.",
    verdict: "designated",
    tableItem: "Table 6, Item 6",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — incorporating a company (even for use as SMSF trustee) is assisting in the creation of a body corporate under Item 6.",
    customerForCDD: "The person being assisted PLUS: all beneficial owners and directors of the new corporate trustee company",
    whyCaptured:
      "Item 6 captures assisting in the creation of a body corporate, which includes incorporating a proprietary limited company to act as corporate trustee. The SMSF purpose of the company does not remove it from the scope of Item 6. This designated service is separate from the SMSF trust deed establishment — both services may be triggered in the same engagement.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Corporate trustee used to obscure beneficial ownership of SMSF assets", level: "high" },
      { risk: "Nominee director of corporate trustee concealing true controller", level: "high" },
      { risk: "Corporate trustee incorporated rapidly to facilitate related-party transactions", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, STEP_PAPER],
  },
  {
    id: "smsf-bare-trust-lrba",
    categoryId: "smsf",
    label: "Establishing a bare trust for an SMSF Limited Recourse Borrowing Arrangement (LRBA)",
    description:
      "Drafting the bare trust deed required for an SMSF Limited Recourse Borrowing Arrangement (LRBA) under s 67A of the SIS Act, under which the acquirable asset is held on bare trust for the SMSF until the borrowing is repaid. The bare trust is an express trust created intentionally in writing and triggers Item 6.",
    verdict: "designated",
    tableItem: "Table 6, Item 6",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — the bare trust in an LRBA is an express trust intentionally created in writing; drafting the bare trust deed engages Item 6.",
    customerForCDD: "The person being assisted PLUS: the trustee, settlor and all beneficiaries (the SMSF) of the bare trust",
    whyCaptured:
      "An LRBA bare trust is an express trust intentionally created in writing during the client's lifetime — it is not a testamentary trust. Item 6 captures assisting in the creation of a legal arrangement (express trust). Additionally, if the LRBA involves borrowing from a third-party lender and the lawyer assists in organising that debt financing, Item 4 (debt financing of a body corporate or legal arrangement) may also be triggered. The LRBA is a high-risk structure because of its potential use in related-party property transactions.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "LRBA used to acquire property from a related party at inflated price — classic laundering structure", level: "high" },
      { risk: "Non-arm's length loan terms to disguise the movement of illicit funds", level: "high" },
      { risk: "Layered SMSF/bare trust/corporate trustee structure obscuring beneficial ownership", level: "high" },
      { risk: "LRBA collateral used to access legitimate finance for illicit purposes", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, STEP_PAPER, LEX_AML_TABLE6],
  },
  {
    id: "smsf-trustee-change",
    categoryId: "smsf",
    label: "Changing the trustee of an SMSF (individual or corporate)",
    description:
      "Implementing a change of trustee of an SMSF — e.g. retiring individual trustees and appointing new individual trustees, or replacing individual trustees with a corporate trustee (or vice versa). This involves amending the trust deed and executing a deed of retirement and appointment. Item 6 expressly captures restructuring of legal arrangements.",
    verdict: "designated",
    tableItem: "Table 6, Item 6",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — changing the trustee of an SMSF is a restructuring of a legal arrangement (express trust) under Item 6.",
    customerForCDD: "The person being assisted (and the new trustee(s) as applicable)",
    whyCaptured:
      "Item 6 expressly covers both 'creation' and 'restructuring' of a body corporate or legal arrangement. A trustee change is a fundamental restructure of the SMSF trust — it changes who holds the legal interest in the trust assets and has control of the fund. AUSTRAC guidance identifies restructuring of trust structures as a key risk area.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "New trustee introduced as mechanism to transfer control to a PEP or sanctioned person", level: "high" },
      { risk: "Trustee change used to remove oversight and introduce complicit controller", level: "high" },
      { risk: "Rapid succession of trustee changes to frustrate asset tracing", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LEX_AML_TABLE6],
  },
  {
    id: "smsf-wind-up",
    categoryId: "smsf",
    label: "Winding up an SMSF",
    description:
      "Assisting with the wind-up of an SMSF — selling fund assets, paying out member benefits, rolling over to APRA-regulated funds, lodging final returns, and deregistering the fund with the ATO. Wind-up involves the dissolution of the trust, not the creation or restructuring of one. However, if the wind-up involves transferring real estate or business assets, other Items may be triggered.",
    verdict: "depends",
    verdictSummary: "Depends — winding up the SMSF itself is likely not a designated service (dissolution, not creation or restructuring), but transfer of real estate or business assets during wind-up may trigger Items 1 or 2.",
    conditions: [
      "The wind-up and dissolution of the SMSF trust itself → NOT DESIGNATED under Item 6 (dissolution is not creation or restructuring)",
      "If the wind-up involves transferring real estate out of the SMSF to a member or third party → Item 1 (real estate transaction) likely applies",
      "If the wind-up involves transferring a business or body corporate out of the SMSF → Item 2 may apply",
      "If the lawyer holds and disburses fund assets during wind-up → Item 3 (managing a person's property in connection with a transaction) may apply",
    ],
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Wind-up used to extract funds rapidly when illicit activity is suspected", level: "medium" },
      { risk: "Property transfer on wind-up to related party at undervalue", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, STEP_PAPER],
  },
  {
    id: "smsf-pension-commencement",
    categoryId: "smsf",
    label: "Documenting commencement of an account-based or TTR pension within an SMSF",
    description:
      "Preparing the trustee resolution and pension documentation for the commencement of an account-based pension or transition-to-retirement (TTR) income stream within an existing SMSF. Pension commencement involves converting the member's accumulation balance to a pension phase — it is an internal fund transaction, not a creation or restructuring of the trust.",
    verdict: "not-designated",
    verdictSummary: "Not designated — pension commencement within an existing SMSF is an internal administrative step, not a creation or restructuring of a body corporate or legal arrangement.",
    whyExcluded:
      "Pension commencement does not create or restructure the SMSF trust — the trust already exists. Nor does it involve a sale, purchase or transfer of real estate or a body corporate. The trustee resolution and pension documents are administrative implementation of a right that already exists within the trust. No Table 6 item is engaged by this process alone.",
    professions: ["Lawyers"],
    mlRisks: [],
    notCaughtExamples: [
      "Account-based pension commencement documentation",
      "Transition to retirement income stream (TRIS) documentation",
      "Pension reset documentation to re-base cost base of assets",
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, STEP_PAPER],
  },
  {
    id: "smsf-property-acquisition",
    categoryId: "smsf",
    label: "SMSF acquisition of real property (direct or via LRBA)",
    description:
      "Acting for the SMSF trustee in the purchase of real property directly by the fund or via an LRBA bare trust structure. This is one of the most common SMSF investment activities and triggers multiple Table 6 items simultaneously — real estate transfer (Item 1), potentially client funds management (Item 3), and bare trust creation (Item 6).",
    verdict: "designated",
    tableItem: "Table 6, Items 1, 3 and/or 6",
    tableReference: "s 6(5B)",
    verdictSummary: "Designated — SMSF property acquisition triggers Item 1 (real estate transaction), potentially Item 3 (holding purchase funds in trust), and Item 6 if an LRBA bare trust is established.",
    customerForCDD: "The SMSF trustee (and all SMSF members as beneficial owners of the fund assets)",
    whyCaptured:
      "Assisting the SMSF trustee to purchase real property engages Item 1 (assisting in the planning or execution of a transaction to buy real estate). If the SMSF funds are held in the lawyer's trust account during settlement, Item 3 is also engaged. If the property is being acquired via LRBA, the bare trust deed triggers Item 6. AUSTRAC guidance identifies SMSF property acquisition as a key money laundering risk area, particularly via related-party transactions.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Related-party property purchase at inflated price to introduce illicit funds into SMSF", level: "high" },
      { risk: "Non-arm's length LRBA terms concealing movement of illicit funds", level: "high" },
      { risk: "Third-party funds introduced as 'loan' to fund SMSF property purchase", level: "high" },
      { risk: "SMSF property used to legitimise illicitly-sourced deposit", level: "high" },
      { risk: "Offshore lender in LRBA with no genuine commercial terms", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, STEP_PAPER, LEX_AML_TABLE6],
  },
  {
    id: "smsf-contribution-strategy",
    categoryId: "smsf",
    label: "Advising on contribution strategies or superannuation splitting",
    description:
      "Advising clients on strategies to maximise superannuation contributions (concessional, non-concessional, spouse contributions) or implementing a superannuation splitting agreement following relationship breakdown. Pure advice does not trigger Table 6; implementation steps that involve a property transfer or trust restructure may.",
    verdict: "depends",
    verdictSummary: "Depends — pure advice is not designated; implementing a superannuation interest split involving transfer of a property interest or restructuring the SMSF may engage Items 1, 2 or 6.",
    conditions: [
      "Providing advice on contribution strategies only → NOT DESIGNATED",
      "Implementing a contributions reserve strategy involving no transfer of assets → NOT DESIGNATED",
      "Implementing a superannuation splitting agreement where the split is satisfied by transferring a property from the SMSF → Item 1 (real estate) may apply",
      "Implementing a superannuation splitting agreement that involves restructuring the SMSF (e.g. new deed, new trustee) → Item 6 (restructuring) may apply",
    ],
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Contribution splitting used to transfer illicit funds into superannuation system for non-member spouse", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, STEP_PAPER],
  },


  // ── EMPLOYMENT LAW ──────────────────────────────────────────────────────────
  {
    id: "emp-advice-general",
    categoryId: "employment-law",
    label: "General employment law advice — contracts, dismissal, discrimination, FWC",
    description:
      "Advising employers or employees on employment contracts, unfair dismissal or general protections claims, workplace discrimination, enterprise bargaining, or representing parties in Fair Work Commission proceedings. Employment law work is primarily advisory and dispute-resolution in character and does not typically involve implementing Table 6 transactions.",
    verdict: "not-designated",
    verdictSummary: "Not designated — general employment advice and Fair Work Commission representation are advisory and dispute-resolution services outside Table 6. They do not involve assisting in the transfer of real estate, a body corporate, or a legal arrangement, and there is no financing transaction.",
    whyExcluded:
      "Table 6 regulates transactional services that move value or create/restructure corporate structures. Employment law advice — including drafting contracts, advising on dismissals, representing clients before the FWC, or negotiating enterprise agreements — does not directly advance any of Items 1–9. AUSTRAC guidance confirms that dispute resolution and advisory work that merely influences a client's thinking, without implementing a Table 6 transaction, falls outside the regime.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, LSJ_TABLE6, AML_CTF_ACT],
  },
  {
    id: "emp-redundancy-payment",
    categoryId: "employment-law",
    label: "Managing redundancy or termination payments via trust account",
    description:
      "Acting for an employer making a mass redundancy or large individual termination where the employer requests the lawyer to hold the termination payment (including redundancy, payment in lieu of notice, or ETP) in the firm's trust account pending execution of a deed of release or resolution of a dispute about the amount. This is distinct from simply advising on the quantum of redundancy entitlements.",
    verdict: "depends",
    verdictSummary: "Depends — advising on redundancy entitlements is not designated. However, if the lawyer receives and holds a significant termination payment in trust account as part of implementing an employment settlement, Item 3 (receiving, holding or managing a person's property to help in the planning or execution of a transaction) may be engaged.",
    conditions: [
      "Advising on redundancy entitlements, statutory minimums, or ETP tax treatment only → NOT DESIGNATED",
      "Representing a party in an unfair dismissal or general protections application → NOT DESIGNATED (dispute resolution)",
      "Holding a redundancy payment in trust account pending execution of a deed of release, as part of implementing a settlement → Item 3 MAY be engaged if holding is transactional in character",
      "Holding payment in trust solely for routine disbursement after standard employment termination (no dispute) → likely NOT DESIGNATED (routine trust accounting, not a Table 6 transaction)",
    ],
    tableReference: "s 6(5B) Item 3",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Inflated redundancy payment used to extract illicit funds from a company to a related employee or associate", level: "medium" },
      { risk: "Deed of release payment used to transfer value from a corporate client to a third-party controller", level: "low" },
    ],
    sources: [AUSTRAC_TABLE6, LSJ_TABLE6, AML_CTF_ACT, LEX_AML_TABLE6],
  },
  {
    id: "emp-share-plan",
    categoryId: "employment-law",
    label: "Employee share plans, options and equity incentive schemes",
    description:
      "Advising on and implementing employee share plans (ESPs), employee share option plans (ESOPs), performance rights, or other equity incentive schemes. Implementation may involve creating a share trust or nominee structure to hold shares on behalf of employees, issuing new shares in the company, or transferring existing shares from shareholders to employees.",
    verdict: "depends",
    verdictSummary: "Depends — advising on plan design is not designated. Implementing a plan that involves creating a share trust (Item 6) or transferring a controlling interest in shares to employees (Item 2) may be designated.",
    conditions: [
      "Advising on the design or tax treatment of an employee share plan → NOT DESIGNATED",
      "Drafting ESP/ESOP plan rules and employee documents with no trust or entity creation → likely NOT DESIGNATED (advisory/documentation only)",
      "Establishing an employee share trust (a new bare or discretionary trust) to hold shares → Item 6 (creation of a legal arrangement) APPLIES → DESIGNATED",
      "Transferring shares representing a controlling interest (25%+) from existing shareholders to employees → Item 2 (transfer of a body corporate) MAY APPLY",
      "Issuing new shares to employees (lawyer implements the equity issuance) → Item 4 (equity financing) MAY APPLY",
    ],
    tableReference: "s 6(5B) Items 2, 4 and 6",
    customerForCDD: "The employer company and its ultimate beneficial owners. Employee beneficiaries of a share trust should be identified if they acquire a 25%+ beneficial interest.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Share plan used to transfer equity to a related party or nominee disguised as an employment benefit", level: "medium" },
      { risk: "Share trust used to obscure beneficial ownership of a controlling stake from regulators", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, LSJ_TABLE6, AML_CTF_ACT, LAWSOCIETY_IMPL_GUIDE],
  },
  {
    id: "emp-business-sale-employment",
    categoryId: "employment-law",
    label: "Employment aspects of a business sale (transfer of business, workforce transition)",
    description:
      "Advising on the employment law aspects of a business acquisition — including transfer of business obligations under the Fair Work Act 2009 (Cth), redundancy of non-transferring employees, harmonisation of employment contracts, and negotiating retention arrangements. The lawyer acts solely on the employment workstream of a broader M&A transaction.",
    verdict: "depends",
    verdictSummary: "Depends — advising on the employment workstream alone (without implementing the business entity or asset transfer) is not designated. However, if the same lawyer also implements the broader business transfer (share sale or asset sale), Items 2 or 3 will apply to the entire engagement.",
    conditions: [
      "Advising solely on employment law aspects of an M&A transaction, with separate lawyers handling the transaction → NOT DESIGNATED (advisory only, no direct advancement of the transfer)",
      "Acting as the primary transaction lawyer who also handles employment aspects AND implements the business transfer → Item 2 (business transfer) LIKELY DESIGNATED for the whole engagement",
      "Drafting and implementing retention deeds funded from proceeds held in trust → Item 3 MAY APPLY if funds are held in trust to enable the transaction",
    ],
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Inflated retention or sign-on payments used to extract value from an acquired business to related parties", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, LSJ_TABLE6, AML_CTF_ACT],
  },
  {
    id: "emp-corporate-restructure-redundancy",
    categoryId: "employment-law",
    label: "Corporate restructure involving redundancy and entity changes",
    description:
      "Advising on and implementing a corporate restructure that involves both organisational changes (redundancies, new reporting lines) and legal structural changes (mergers, demergers, transfer of employment between group entities, creation of new subsidiaries). The STEP paper clarifies that 'restructuring' under Item 6 refers to changing the legal form of a body corporate or legal arrangement — not merely organisational staffing changes.",
    verdict: "depends",
    verdictSummary: "Depends — advice on the organisational/staffing dimension of a restructure (redundancies, reporting lines) is expressly excluded from Item 6. However, if the restructure changes the legal form of a body corporate (merger, demerger, new subsidiary), Item 6 applies to that legal structural change.",
    conditions: [
      "Advising on and implementing only the redundancy and workforce aspects of a restructure (no entity changes) → NOT DESIGNATED (Item 6 expressly excludes 'organisational staffing profile' changes)",
      "Implementing a merger, demerger, or transfer of business between group entities that also involves workforce transition → Item 6 APPLIES to the legal structural change → DESIGNATED",
      "Creating a new subsidiary to house a particular workforce segment → Item 6 (creation of a body corporate) APPLIES → DESIGNATED",
      "Transferring employees between existing group entities only, with no change to legal structures → NOT DESIGNATED (no creation or restructuring of a body corporate or legal arrangement)",
    ],
    tableReference: "s 6(5B) Item 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Corporate restructure used to shift liabilities and assets to a new entity, leaving creditors unpaid", level: "medium" },
      { risk: "New subsidiary created to house specific workforce and assets as part of a broader asset-stripping scheme", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, LSJ_TABLE6, AML_CTF_ACT, STEP_PAPER, LAWSOCIETY_IMPL_GUIDE],
  },

  // ── COMMERCIAL CONTRACTS & JOINT VENTURES ──────────────────────────────────
  {
    id: "cc-commercial-contract",
    categoryId: "commercial-contracts",
    label: "Drafting and negotiating commercial contracts (supply, services, distribution)",
    description:
      "Drafting, reviewing, and negotiating commercial contracts between businesses — including supply agreements, services agreements, distribution agreements, agency agreements, and manufacturing agreements. These contracts regulate ongoing commercial relationships but do not, by themselves, transfer ownership of a body corporate, real estate, or create a new legal arrangement such as a trust or partnership.",
    verdict: "not-designated",
    verdictSummary: "Not designated — drafting and negotiating commercial contracts is advisory and documentation work that does not directly advance a Table 6 transaction. A supply or services agreement does not involve buying, selling, or transferring a body corporate or legal arrangement, and does not create a new corporate structure.",
    whyExcluded:
      "Table 6 is concerned with transactions that transfer ownership or create new structures. A commercial contract governs an ongoing relationship but does not transfer a body corporate (Item 2), create a legal arrangement (Item 6), or constitute an equity or debt financing transaction (Item 4). The LSJ guidance places advisory work without an underlying transaction in the 'LIKELY OUT' column.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, LSJ_TABLE6, AML_CTF_ACT],
  },
  {
    id: "cc-jv-incorporated",
    categoryId: "commercial-contracts",
    label: "Incorporated joint venture — creating a JV company",
    description:
      "Assisting parties to establish an incorporated joint venture by forming a new company (the JV Co) in which the joint venture parties hold shares proportionate to their contributions. The lawyer typically drafts the shareholders agreement, joint venture agreement, company constitution, and share subscription documents, and lodges the ASIC incorporation forms.",
    verdict: "designated",
    verdictSummary: "Designated — creating a new company for the joint venture directly engages Item 6 (assisting in the creation of a body corporate). The shareholders agreement and subscription for shares may also engage Item 4 (equity financing) if shares are issued for consideration.",
    customerForCDD: "The joint venture parties and their beneficial owners (25%+ threshold). The JV Co itself once created. Due diligence on source of contributed assets or cash is a key focus.",
    whyCaptured:
      "Item 6 captures 'assisting a person to plan or execute, or otherwise acting on behalf of a person in, the creation or restructuring of a body corporate'. Drafting the shareholders agreement and lodging ASIC incorporation forms directly advances the creation of the JV Co. The NSW Law Society Implementation Guide lists 'Lodging applications and forms with ASIC for registering a company' and 'Drafting, reviewing and negotiating corporate agreements including shareholders agreements' as Item 6 examples.",
    tableReference: "s 6(5B) Items 4 and 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "JV Co used to commingle illicit funds from one party with legitimate contributions from the other", level: "high" },
      { risk: "Beneficial ownership of JV Co obscured through nominee shareholders or complex holding company layering", level: "high" },
      { risk: "JV Co created in a secrecy jurisdiction to frustrate identification of ultimate beneficial owners", level: "high" },
      { risk: "Assets contributed to JV Co at inflated valuations to launder illicit value", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LAWSOCIETY_IMPL_GUIDE, LEX_AML_TABLE6],
  },
  {
    id: "cc-jv-unincorporated",
    categoryId: "commercial-contracts",
    label: "Unincorporated joint venture agreement",
    description:
      "Drafting an unincorporated joint venture (UJV) agreement under which parties collaborate on a project without forming a new company. Common in the resources and construction sectors, UJVs are contractual arrangements where participants hold their proportionate interest directly. A joint venture is expressly included in the AML/CTF Act's definition of 'legal arrangement'.",
    verdict: "designated",
    verdictSummary: "Designated — a joint venture is expressly listed as a 'legal arrangement' in the AML/CTF Act. Assisting in the creation of an unincorporated joint venture therefore engages Item 6 (creation of a legal arrangement). Drafting the UJV agreement and facilitating its execution directly advances this outcome.",
    customerForCDD: "The joint venture participants and their beneficial owners (25%+ interest threshold).",
    whyCaptured:
      "The AML/CTF Act's definition of 'legal arrangement' expressly includes 'a joint venture'. Item 6 captures assisting in the creation of any legal arrangement. Drafting a UJV agreement and facilitating its execution directly advances the creation of a joint venture legal arrangement. Even if no separate entity is formed, the UJV agreement itself creates the designated legal arrangement.",
    tableReference: "s 6(5B) Item 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "UJV used to pool illicit funds with legitimate business contributions, obscuring the illicit source", level: "high" },
      { risk: "Resource sector UJV used to launder proceeds through overvalued asset contributions", level: "medium" },
      { risk: "UJV participants include anonymous offshore entities with no disclosed beneficial ownership", level: "high" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LAWSOCIETY_IMPL_GUIDE, LEX_AML_TABLE6],
  },
  {
    id: "cc-shareholders-agreement",
    categoryId: "commercial-contracts",
    label: "Shareholders agreement for an existing company",
    description:
      "Drafting or amending a shareholders agreement for an existing company — including provisions on governance, dividend policy, transfer restrictions, buy-sell provisions, and dispute resolution. No new entity is being created; the agreement regulates relationships between existing shareholders.",
    verdict: "depends",
    verdictSummary: "Depends — drafting a shareholders agreement for an already-existing company with no change to legal structure or shareholding is likely not designated on its own. However, if accompanied by a share transfer (Item 2), equity issuance (Item 4), or if it changes the legal form of the company, Item 6 may apply.",
    conditions: [
      "Drafting or amending a shareholders agreement for an existing company with no change to legal structure or shareholding → likely NOT DESIGNATED (no creation or restructuring of a body corporate)",
      "Shareholders agreement prepared as part of incorporating a new company or creating a new partnership → Item 6 APPLIES → DESIGNATED",
      "Shareholders agreement prepared as part of a share sale (controlling interest 25%+) → Item 2 APPLIES → DESIGNATED",
      "Buy-sell provision triggered — implementing compulsory acquisition of shares under an existing drag-along or shotgun clause → Item 2 MAY APPLY depending on the interest transferred",
    ],
    tableReference: "s 6(5B) Items 2, 4 and 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Buy-sell provision triggered to force out a minority shareholder and transfer control to a criminal associate", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LAWSOCIETY_IMPL_GUIDE],
  },
  {
    id: "cc-consortium-agreement",
    categoryId: "commercial-contracts",
    label: "Consortium agreement and tender arrangements",
    description:
      "Drafting a consortium agreement between businesses to jointly bid for a government contract, infrastructure project, or major tender. Consortia may be purely contractual (no new entity) or may involve creating a special purpose vehicle (SPV). The lawyer drafts the consortium deed, IP ownership and licensing provisions, and may establish the SPV.",
    verdict: "depends",
    verdictSummary: "Depends — a purely contractual consortium deed that does not create a new legal entity or legal arrangement is likely not designated. However, if the consortium is structured as a joint venture (a 'legal arrangement' under the Act), or if an SPV company is created, Item 6 applies.",
    conditions: [
      "Contractual consortium agreement with no new entity or joint venture arrangement → likely NOT DESIGNATED",
      "Consortium structured as a joint venture (unincorporated) → Item 6 APPLIES → DESIGNATED",
      "Creating an SPV to act as the consortium vehicle for the tender → Item 6 APPLIES → DESIGNATED",
      "Consortium agreement for a government-funded project where lawyer holds tender security or performance bond in trust → Item 3 MAY APPLY",
    ],
    tableReference: "s 6(5B) Items 3 and 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Consortium used to introduce an illicit beneficial owner into a government contracting arrangement", level: "medium" },
      { risk: "SPV created for consortium used to siphon government contract proceeds to undisclosed beneficial owners", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LEX_AML_TABLE6],
  },
  {
    id: "cc-financing-facility",
    categoryId: "commercial-contracts",
    label: "Drafting and implementing a commercial financing facility (loan, credit, security)",
    description:
      "Assisting a company or legal arrangement to obtain debt financing — including drafting loan agreements, facility agreements, guarantee deeds, and security documents (PPSR registrations, mortgages, charges). Covers bilateral loans, syndicated facilities, mezzanine debt, and working capital facilities. Coordinating drawdowns on the facility is expressly an Item 4 example.",
    verdict: "designated",
    verdictSummary: "Designated — implementing a commercial financing facility for a body corporate or legal arrangement directly engages Item 4 (assisting in organising, planning, or executing a transaction for equity or debt financing relating to a body corporate or legal arrangement). The LSJ Table 6 examples expressly place 'drafting and implementing loan documents for a company' and 'coordinating drawdowns on a financing arrangement' in the 'LIKELY IN' column.",
    customerForCDD: "The borrowing entity and its ultimate beneficial owners. Where the lender is also a client, CDD applies to both.",
    whyCaptured:
      "Item 4 designates 'assisting in organising, planning, or executing a transaction for equity or debt financing relating to a body corporate or legal arrangement'. Drafting the facility agreement and coordinating drawdowns directly advances this outcome. This applies whether the lawyer acts for the borrower or the lender. Strategic advice on financing options without implementing a transaction falls outside Item 4.",
    tableReference: "s 6(5B) Item 4",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Loan transaction between related parties used to introduce illicit funds as apparently legitimate debt", level: "high" },
      { risk: "Back-to-back loan structure used to layer illicit funds through multiple entities", level: "high" },
      { risk: "Lender is an undisclosed related party or offshore entity with no commercial rationale for the loan", level: "high" },
      { risk: "Security granted over assets of dubious origin to legitimise illicitly-acquired property as loan collateral", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LAWSOCIETY_IMPL_GUIDE, LEX_AML_TABLE6],
  },
  {
    id: "cc-partnership-agreement",
    categoryId: "commercial-contracts",
    label: "Partnership agreement (including LP and incorporated limited partnership)",
    description:
      "Drafting a partnership agreement to create a general partnership, limited partnership (LP), or incorporated limited partnership. Partnerships are expressly included in the definition of 'legal arrangement' in the AML/CTF Act. Creating a partnership therefore engages Item 6.",
    verdict: "designated",
    verdictSummary: "Designated — a partnership is expressly listed as a 'legal arrangement' in the AML/CTF Act. Assisting in the creation of any partnership (general, limited, or incorporated) engages Item 6. The NSW Law Society Implementation Guide expressly lists 'partnership agreements' as an Item 6 example.",
    customerForCDD: "The partners and their beneficial owners. For LPs, both the general partner and limited partners (with 25%+ interest) must be identified.",
    whyCaptured:
      "The AML/CTF Act definition of 'legal arrangement' includes 'a partnership'. Item 6 designates assisting in the creation or restructuring of any legal arrangement. Drafting and executing a partnership agreement directly advances the creation of the partnership. The NSW Law Society Implementation Guide expressly cites 'partnership agreements' as an Item 6 designated service example.",
    tableReference: "s 6(5B) Item 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Partnership used to pool illicit funds from multiple sources into a jointly-held business", level: "high" },
      { risk: "Limited partnership used to create complex layered ownership structures that obscure beneficial owners", level: "high" },
      { risk: "Partner contributions include assets of illicit origin introduced at inflated values", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LAWSOCIETY_IMPL_GUIDE, LEX_AML_TABLE6],
  },

  // ── COMMERCIAL CONTRACTS — ADDITIONAL SERVICES ────────────────────────────
  {
    id: "cc-vendor-finance",
    categoryId: "commercial-contracts",
    label: "Vendor finance and deferred payment arrangements",
    description:
      "Documenting a transaction where the vendor of a business or asset provides finance to the purchaser — including vendor finance agreements, deferred payment deeds, instalment sale contracts, and associated security documents (e.g. PPSR registrations or mortgage over the purchased asset). Common in private business sales where bank funding is unavailable or the parties prefer a structured payout.",
    verdict: "designated",
    verdictSummary: "Designated — vendor finance is a debt financing arrangement relating to a body corporate or legal arrangement (Item 4). Where the underlying sale is a business transfer, Item 2 also applies. Implementing the finance documents directly advances both outcomes.",
    customerForCDD: "Both the vendor-financier and the purchaser-borrower. Source of funds verification for the purchaser is a key CDD focus — vendor finance is frequently used where traditional lenders declined, which can indicate higher ML risk.",
    whyCaptured:
      "Item 4 designates assisting in organising, planning, or executing a transaction for equity or debt financing relating to a body corporate or legal arrangement. Vendor finance provided in connection with a business acquisition directly engages this provision. Where the sale target is a company or trust, Items 2 and 4 both apply.",
    tableReference: "s 6(5B) Items 2 and 4",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Vendor finance used by a purchaser to acquire a business without scrutiny of fund source, legitimising illicit capital through an apparently commercial transaction", level: "high" },
      { risk: "Inflated purchase price with most of the price left as vendor debt — effectively transfers undeclared vendor income off the books", level: "high" },
      { risk: "Vendor and purchaser are secretly related parties, using the transaction to move value between entities under the guise of a commercial sale", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LAWSOCIETY_IMPL_GUIDE],
  },
  {
    id: "cc-asset-sale-business",
    categoryId: "commercial-contracts",
    label: "Business acquisition via asset sale (goodwill, IP, plant and equipment)",
    description:
      "Acting for a buyer or seller in an acquisition of a business conducted as an asset sale — transferring goodwill, intellectual property, plant and equipment, contracts, and employees rather than shares in a company. Because no shares or units change hands, the transaction does not engage Item 2 (body corporate transfer) directly, but may engage other Table 6 items depending on the assets and structure.",
    verdict: "depends",
    verdictSummary: "Depends — a pure asset sale that does not involve real estate, a body corporate, a legal arrangement, or client fund management is likely not designated. However, if the assets include real property (Item 1), if the sale is partly funded by vendor finance or a new lending facility (Item 4), or if a new entity is created to hold the assets (Item 6), a designated service arises.",
    conditions: [
      "Pure asset sale (goodwill, IP, plant/equipment, contracts only — no real estate, no new entity) → likely NOT DESIGNATED on its own",
      "Asset sale includes real property → Item 1 APPLIES → DESIGNATED for the property component",
      "Asset sale funded by a new bank loan or vendor finance facility → Item 4 APPLIES → DESIGNATED",
      "Purchaser creates a new company or trust to hold the assets as part of the transaction → Item 6 APPLIES → DESIGNATED",
      "Lawyer holds purchase price in trust account pending completion → Item 3 MAY APPLY",
    ],
    tableReference: "s 6(5B) Items 1, 3, 4 and 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Goodwill valued at inflated levels to funnel illicit cash into the transaction as apparent commercial consideration", level: "high" },
      { risk: "Real property transferred as part of asset package without separate Item 1 CDD focus", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LAWSOCIETY_IMPL_GUIDE],
  },
  {
    id: "cc-spv-formation",
    categoryId: "commercial-contracts",
    label: "Special purpose vehicle (SPV) formation for a commercial project",
    description:
      "Assisting parties to create a special purpose company or trust to hold, develop, or operate a commercial project — including drafting the incorporating documents, trust deed, subscription agreements, and governance documents. SPVs are used in project finance, infrastructure, property development, and private equity to isolate project assets and liabilities.",
    verdict: "designated",
    verdictSummary: "Designated — creating a new company (Item 6 — body corporate) or trust (Item 6 — legal arrangement) as an SPV directly engages Item 6. Where the SPV is capitalised by share subscription or debt, Items 4 and 6 both apply.",
    customerForCDD: "The promoters and equity investors in the SPV and their ultimate beneficial owners (25%+ interest threshold). Source of contributed capital is a key CDD focus.",
    whyCaptured:
      "Item 6 designates assisting in the creation of a body corporate or legal arrangement. Incorporating an SPV company or settling an SPV trust directly advances this outcome regardless of the commercial purpose. The NSW Law Society Implementation Guide expressly lists SPV creation as an Item 6 example.",
    tableReference: "s 6(5B) Items 4 and 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "SPV used to commingle illicit funds from one investor with legitimate capital from others, laundering proceeds through apparently commercial returns", level: "high" },
      { risk: "Complex SPV layering with multiple holding companies obscures the ultimate beneficial owner of the project", level: "high" },
      { risk: "SPV created in a secrecy jurisdiction with nominee directors to frustrate beneficial ownership identification", level: "high" },
      { risk: "Project finance raised against SPV assets at inflated valuations to maximise illicit funds introduced", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LAWSOCIETY_IMPL_GUIDE, LEX_AML_TABLE6],
  },
  {
    id: "cc-syndication",
    categoryId: "commercial-contracts",
    label: "Property or investment syndication structure",
    description:
      "Establishing a syndicated investment vehicle — such as an unregistered managed investment scheme, a unit trust with multiple investors, or a co-investment company — to pool capital from multiple parties for a common investment (commonly real estate development, commercial property, or agricultural land). The lawyer drafts the syndication deed, information memorandum, subscription agreements, and trustee/responsible entity appointment documents.",
    verdict: "designated",
    verdictSummary: "Designated — establishing a syndication structure creates a new legal arrangement (unit trust, unregistered MIS) or body corporate (co-investment company), engaging Item 6. Capital raised from investors by way of unit subscriptions or share issuance also engages Item 4 (equity financing). Where real estate is acquired by the syndicate, Item 1 applies to the property purchase.",
    customerForCDD: "Each investor/subscriber and their ultimate beneficial owners. Particular attention to politically exposed persons (PEPs) and offshore investors.",
    whyCaptured:
      "Creating a unit trust or unregistered managed investment scheme engages Item 6 (creation of a legal arrangement). Organising the subscription of units or shares by investors engages Item 4 (equity financing). The combination means most syndication structures engage at least two designated services simultaneously.",
    tableReference: "s 6(5B) Items 1, 4 and 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Syndication used to introduce illicit funds disguised as investor capital, legitimised through apparently genuine investment returns", level: "high" },
      { risk: "Beneficial ownership of syndicate units concealed through nominee investors or corporate trustees in secrecy jurisdictions", level: "high" },
      { risk: "Information memorandum overstates asset value to attract capital and justify inflated prices", level: "medium" },
      { risk: "Unregistered MIS used to avoid ASIC licensing requirements that would otherwise require disclosure of beneficial ownership", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LAWSOCIETY_IMPL_GUIDE, LEX_AML_TABLE6],
  },
  {
    id: "cc-earn-out",
    categoryId: "commercial-contracts",
    label: "Earn-out and deferred consideration in business sales",
    description:
      "Documenting earn-out provisions in a business sale — where part of the purchase price is contingent on the acquired business meeting performance targets after completion. Includes drafting earn-out schedules, accounting adjustment provisions, and dispute resolution mechanisms for earn-out calculations. Earn-outs form part of the overall consideration for the acquisition of the target entity.",
    verdict: "designated",
    verdictSummary: "Designated — earn-out arrangements are part of the overall consideration for a body corporate transfer (Item 2). Implementing the sale, including the earn-out mechanism, directly advances the body corporate transfer.",
    customerForCDD: "The vendor and purchaser of the target entity and their ultimate beneficial owners. Source of deferred consideration payments at each earn-out milestone warrants ongoing monitoring.",
    whyCaptured:
      "Item 2 designates assisting in the planning or execution of a transaction for the transfer of ownership of a body corporate or legal arrangement. The earn-out mechanism determines how much the purchaser pays for that ownership — it is inseparable from the overall transfer transaction and is captured as part of the designated service.",
    tableReference: "s 6(5B) Item 2",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Earn-out milestones manipulated to deliver undisclosed additional consideration to the vendor outside the documented transaction", level: "medium" },
      { risk: "Target business performance artificially inflated post-completion to trigger earn-out payments, obscuring the true commercial position", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LAWSOCIETY_IMPL_GUIDE],
  },
  {
    id: "cc-management-agreement",
    categoryId: "commercial-contracts",
    label: "Management agreements and intercompany services agreements",
    description:
      "Drafting management agreements, services agreements, or intercompany agreements between related companies — for example, a management fee agreement between a holding company and subsidiaries, a services agreement between a corporate trustee and its related service company, or a management rights agreement. These agreements regulate fee flows and service arrangements within corporate groups.",
    verdict: "not-designated",
    verdictSummary: "Not designated — management and services agreements between existing entities do not transfer ownership of a body corporate, create a new legal arrangement, or constitute debt or equity financing. They are advisory and documentation work falling outside Table 6.",
    whyExcluded:
      "Table 6 is transactional in character. Management and services agreements govern ongoing commercial relationships but do not transfer ownership, create a new entity or arrangement, or directly advance a Table 6 outcome. The LSJ guidance places advisory and documentation work without an underlying Table 6 transaction in the 'LIKELY OUT' column.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, LSJ_TABLE6, AML_CTF_ACT],
  },
  {
    id: "cc-franchise-agreement",
    categoryId: "commercial-contracts",
    label: "Franchise agreements and franchise system establishment",
    description:
      "Drafting franchise agreements, franchise disclosure documents, and related documentation for a franchisor establishing a franchise system, or acting for a franchisee entering into a franchise arrangement. May involve an associated business transfer if the franchisee is acquiring an existing franchised outlet.",
    verdict: "depends",
    verdictSummary: "Depends — drafting a franchise agreement is ordinarily not designated (it is a licensing arrangement, not a transfer of a body corporate or legal arrangement). However, if the franchise arrangement involves acquiring an existing outlet (body corporate transfer), or if the franchisee establishes a new company or trust to operate the franchise, designated services arise.",
    conditions: [
      "New franchise agreement (greenfield) — no acquisition of existing outlet → likely NOT DESIGNATED",
      "Franchisee acquiring an existing franchised outlet from an outgoing franchisee → Item 2 (body corporate transfer) or Item 1 (if real property included) MAY APPLY",
      "Franchisee creates a new company or trust to operate the franchise → Item 6 APPLIES → DESIGNATED",
      "Franchise system structured as a pooled investment with multiple franchisees → Item 4 or Item 6 MAY APPLY",
    ],
    tableReference: "s 6(5B) Items 1, 2 and 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Franchise acquisition used to legitimise illicit funds introduced as the purchase price for the business", level: "medium" },
      { risk: "Cash-intensive franchise business used as a vehicle to commingle illicit revenue with legitimate franchise income", level: "high" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LAWSOCIETY_IMPL_GUIDE],
  },
  {
    id: "cc-heads-of-agreement",
    categoryId: "commercial-contracts",
    label: "Heads of agreement, letters of intent and term sheets",
    description:
      "Drafting heads of agreement (HOA), letters of intent (LOI), or term sheets to document the principal commercial terms of a proposed transaction before binding documentation is prepared. These instruments are typically non-binding (except for confidentiality, exclusivity, and costs clauses) and serve as the framework for negotiating final contracts.",
    verdict: "not-designated",
    verdictSummary: "Not designated — heads of agreement and term sheets are preparatory documents that precede the transaction rather than directly advancing it. A non-binding HOA does not itself constitute a designated service. However, when the lawyer proceeds to implement the underlying transaction, the implementation work is designated if that transaction falls within Table 6.",
    whyExcluded:
      "The STEP paper and AUSTRAC guidance distinguish between 'advice that merely influences a client's decision' and 'preparatory steps that directly advance a Table 6 outcome'. A non-binding HOA influences the parties' negotiating positions but does not itself transfer a body corporate, create a legal arrangement, or advance a financing transaction. Caution: if a lawyer holds a deposit or exclusivity fee in trust while the HOA is on foot, Item 3 may apply.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, LSJ_TABLE6, AML_CTF_ACT, STEP_PAPER],
  },

  // ── CONSTRUCTION LAW ──────────────────────────────────────────────────────────
  {
    id: "cl-development-agreement",
    categoryId: "construction-law",
    label: "Development agreement between landowner and developer",
    description:
      "Drafting a development agreement under which a landowner grants a developer rights to construct a building or subdivision on the landowner's land in exchange for a share of developed lots, completed units, or a development fee. These agreements commonly involve a joint venture arrangement and may include profit-sharing, put-and-call options over the land, and a funding arrangement.",
    verdict: "designated",
    verdictSummary: "Designated — development agreements typically combine multiple Table 6 elements: a put-and-call option or transfer of real estate (Item 1), creation of a joint venture legal arrangement between the landowner and developer (Item 6), and often a financing component (Item 4). The lawyer implementing the development agreement directly advances these outcomes.",
    customerForCDD: "The landowner and developer, plus their ultimate beneficial owners. Source of development funding is a key CDD focus — construction projects are a well-documented conduit for real estate money laundering.",
    whyCaptured:
      "Item 1 designates assisting in the planning or execution of a real estate transaction. A development agreement gives the developer rights over the land and documents how lots or units will be transferred on completion — directly advancing multiple real estate transactions. Where the agreement creates a joint venture structure, Item 6 also applies. AUSTRAC's real estate sector risk assessment identifies large development projects as high ML risk due to complex cash flows and ownership structures.",
    tableReference: "s 6(5B) Items 1, 4 and 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Illicit funds introduced as development equity from an undisclosed offshore investor through a complex holding structure", level: "high" },
      { risk: "Construction costs inflated through related-party contracts to extract illicit value under the guise of legitimate expenses", level: "high" },
      { risk: "Developer uses multiple layered entities to obscure the ultimate beneficial owner of the development project", level: "high" },
      { risk: "Pre-sales to related parties at below-market prices to shift value before public settlement", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_CONSTRUCTION, AUSTRAC_REAL_ESTATE_RISK, LAWSOCIETY_IMPL_GUIDE],
  },
  {
    id: "cl-construction-contract",
    categoryId: "construction-law",
    label: "Drafting and negotiating construction contracts (AS 4000, NEC, FIDIC, D&C)",
    description:
      "Preparing, reviewing, and negotiating construction contracts between principals and head contractors, including standard-form contracts (AS 4000-1997, AS 4902-2000, NEC4, FIDIC) and design-and-construct (D&C) contracts. Work typically includes drafting special conditions, reviewing contractor-prepared forms, and advising on risk allocation and payment mechanisms.",
    verdict: "not-designated",
    verdictSummary: "Not designated — drafting and negotiating a construction contract is advisory and documentation work that does not itself transfer real estate, create a legal arrangement, or constitute a financing transaction. The construction contract governs how works will be performed on land already owned by the principal; it does not advance a Table 6 transaction.",
    whyExcluded:
      "Table 6 captures transactions that directly transfer, create, or finance real estate, entities, or legal arrangements. A construction contract regulates the delivery of building works — it is a services agreement, not a real estate transfer or entity creation instrument. The principal already owns (or has separately contracted to acquire) the land. Caution: if the lawyer holds a construction deposit or retention in trust, Item 3 may apply.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, LSJ_TABLE6, AML_CTF_ACT, LSJ_CONSTRUCTION],
  },
  {
    id: "cl-off-the-plan",
    categoryId: "construction-law",
    label: "Off-the-plan sales — contract preparation and exchange",
    description:
      "Acting for a developer in preparing and exchanging contracts for the sale of residential or commercial lots or units off the plan — before construction is complete. The lawyer prepares the contract of sale, vendor disclosure statement, and manages the exchange process with purchasers.",
    verdict: "designated",
    verdictSummary: "Designated — preparing and exchanging off-the-plan contracts directly assists in the planning and execution of real estate transactions (Item 1). Each purchaser contract implements a separate designated real estate transaction. CDD obligations arise at the point of exchange, not at settlement.",
    customerForCDD: "Each purchaser and their ultimate beneficial owners. AUSTRAC's real estate guidance identifies off-the-plan purchasers as elevated ML risk — deposits are paid without title transfer for an extended period, creating an opportunity to introduce and legitimise illicit funds through apparent property investment.",
    whyCaptured:
      "Item 1 designates assisting in the planning or execution of a transaction to buy, sell, or transfer real estate. Preparing a contract of sale and managing exchange is the core implementation act that directly advances each real estate transaction. Acting for the developer means the lawyer is providing multiple simultaneous designated services — one for each purchaser contract.",
    tableReference: "s 6(5B) Item 1",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Off-the-plan deposit used to park illicit funds for an extended period before settlement, with resale of the contract to a legitimate purchaser before completion", level: "high" },
      { risk: "Multiple off-the-plan purchases in one project by related parties or nominees to aggregate ownership while obscuring beneficial control", level: "high" },
      { risk: "Foreign purchaser using anonymous overseas company structure to acquire multiple lots, exploiting the time lag before settlement to frustrate AML checks", level: "high" },
      { risk: "Deposit held by vendor's lawyer in trust as a de facto banking service — large cash deposits from purchasers", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_CONSTRUCTION, AUSTRAC_REAL_ESTATE_RISK, LAWSOCIETY_IMPL_GUIDE],
  },
  {
    id: "cl-strata-subdivision",
    categoryId: "construction-law",
    label: "Strata plan registration and lot conveyancing at settlement",
    description:
      "Acting in the registration of a strata plan following construction, and completing the conveyancing of individual strata lots to purchasers. Includes preparing the strata plan lodgement documentation, by-laws, strata management statement, and individual lot transfer documents at settlement.",
    verdict: "designated",
    verdictSummary: "Designated — conveyancing of individual strata lots at settlement involves assisting in the execution of real estate transactions (Item 1). Each lot transfer is a separate designated service. If CDD was completed at contract exchange (off-the-plan), update and verify at settlement as identity and beneficial ownership can change.",
    customerForCDD: "Each lot purchaser and their ultimate beneficial owners. Identity and beneficial ownership should be re-verified at settlement.",
    whyCaptured:
      "Item 1 captures both the planning and execution phases of real estate transactions. Completing the conveyancing at settlement — transferring title to each purchaser — is the execution of the designated real estate transaction. The number of lots means the lawyer simultaneously provides multiple designated services, each requiring its own CDD process.",
    tableReference: "s 6(5B) Item 1",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Purchaser substitution between exchange and settlement — original purchaser assigns the contract to a third party to introduce a new beneficial owner not subject to original CDD", level: "high" },
      { risk: "Multiple lots acquired by a single beneficial owner through different nominee purchasers to avoid reporting thresholds", level: "high" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, AUSTRAC_REAL_ESTATE_RISK, LAWSOCIETY_IMPL_GUIDE, LSJ_CONSTRUCTION],
  },
  {
    id: "cl-construction-jv",
    categoryId: "construction-law",
    label: "Construction joint venture and project alliance agreement",
    description:
      "Drafting a construction joint venture agreement or project alliance agreement between two or more contractors to jointly deliver a large infrastructure or construction project. The arrangement may be structured as a consortium (contractual only) or a joint venture vehicle (incorporated or unincorporated). Includes head contractor and subcontractor consortium arrangements for government tenders.",
    verdict: "depends",
    verdictSummary: "Depends — a purely contractual consortium agreement with no new entity or legal arrangement created is likely not designated. However, if the agreement creates an unincorporated joint venture ('legal arrangement' under the Act) or a joint venture company (body corporate), Item 6 applies.",
    conditions: [
      "Contractual consortium agreement only (no new entity or joint venture arrangement) → likely NOT DESIGNATED",
      "Unincorporated construction joint venture (contractual JV with joint and several liability) → Item 6 APPLIES if the arrangement constitutes a 'joint venture' under the AML/CTF Act → DESIGNATED",
      "Incorporated construction JV (new company formed to act as contractor) → Item 6 APPLIES → DESIGNATED",
      "Project alliance that creates an alliance entity or trust → Item 6 APPLIES → DESIGNATED",
      "Lawyer holds tender security or performance bond in trust → Item 3 MAY APPLY",
    ],
    tableReference: "s 6(5B) Items 3 and 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Construction JV used to introduce an undisclosed beneficial owner into a government infrastructure contract", level: "medium" },
      { risk: "JV vehicle used to siphon government contract proceeds to offshore entities under the guise of subcontractor payments", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LSJ_CONSTRUCTION, LAWSOCIETY_IMPL_GUIDE],
  },
  {
    id: "cl-project-finance",
    categoryId: "construction-law",
    label: "Project finance — construction and development funding",
    description:
      "Acting for a developer, borrower, or lender in arranging project finance for a construction or development project — including drafting facility agreements, development finance facilities, progress-payment arrangements, security documents (first mortgage, PPSR), and intercreditor deeds. Coordinating drawdowns at construction milestones.",
    verdict: "designated",
    verdictSummary: "Designated — organising or implementing project finance for a development entity (body corporate or legal arrangement) directly engages Item 4 (debt financing relating to a body corporate or legal arrangement). Where the development involves real estate, Item 1 is also engaged if the lawyer assists with the underlying land acquisition.",
    customerForCDD: "The developer-borrower and its ultimate beneficial owners. Source of equity contribution is a key CDD focus alongside the borrowed funds.",
    whyCaptured:
      "Item 4 designates assisting in organising, planning, or executing a transaction for debt financing relating to a body corporate or legal arrangement. Development finance is invariably provided to a developer entity (a company or trust) — making Item 4 directly applicable. The construction sector is identified by AUSTRAC and FATF as particularly vulnerable to ML because the complexity of project cash flows makes it difficult to detect illicit fund flows.",
    tableReference: "s 6(5B) Items 1 and 4",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Illicit equity contribution by a developer obscured within the project's own capital contribution, leveraged against a legitimate construction loan", level: "high" },
      { risk: "Related-party subcontractor payments used to extract illicit value from the project under the guise of construction costs", level: "high" },
      { risk: "Land contributed to the project at an inflated value to maximise the loan-to-value ratio and minimise the developer's apparent capital contribution", level: "high" },
      { risk: "Progress claim fraud — fictitious claims drawn on the construction facility and diverted to undisclosed beneficiaries", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_CONSTRUCTION, AUSTRAC_REAL_ESTATE_RISK, LAWSOCIETY_IMPL_GUIDE, LEX_AML_TABLE6],
  },
  {
    id: "cl-security-of-payment",
    categoryId: "construction-law",
    label: "Security of payment adjudication and disputed payment claims",
    description:
      "Representing a contractor or subcontractor in a security of payment (SOP) adjudication under the relevant state Building and Construction Industry Security of Payment Act — including preparing or responding to payment claims, adjudication applications, adjudication responses, and enforcing adjudication determinations.",
    verdict: "not-designated",
    verdictSummary: "Not designated — SOP adjudication and payment dispute work is litigation and dispute resolution rather than a transaction to transfer real estate, a body corporate, or a legal arrangement. Legal advice and representation in payment disputes falls outside Table 6.",
    whyExcluded:
      "Table 6 captures transactional services that directly advance the transfer, creation, or financing of real estate, entities, or legal arrangements. SOP adjudication is a form of statutory dispute resolution to recover money owed under a construction contract — it is not a transaction to transfer real estate or create an entity. Note: if an adjudication determination is settled by a transfer of real estate or business assets, implementing that settlement may engage Table 6.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, LSJ_TABLE6, AML_CTF_ACT],
  },
  {
    id: "cl-easement",
    categoryId: "construction-law",
    label: "Easement, right of way, and access deed for development projects",
    description:
      "Drafting and registering easements, rights of way, access deeds, and covenant instruments to support a development project — such as drainage easements, infrastructure access rights, and restrictive covenants over adjoining land. These instruments create interests in land appurtenant to the development site and are typically registered on the title of the servient tenement.",
    verdict: "designated",
    verdictSummary: "Designated — creating and registering an easement or other interest in land constitutes assisting in a real estate transaction under Item 1. An easement is an interest in real estate; drafting and lodging the documents that create it directly advances a transaction to acquire that interest.",
    customerForCDD: "The parties to the easement — the grantor (servient owner) and the grantee (benefited party or developer). The developer and its beneficial owners are the primary CDD focus.",
    whyCaptured:
      "Item 1 designates assisting in the planning or execution of a transaction to buy, sell, or transfer an interest in real estate. An easement is an interest in land — its creation and registration transfers a right in real estate from the grantor to the grantee. Drafting the easement instrument and lodging it for registration directly advances this outcome.",
    tableReference: "s 6(5B) Item 1",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Easement consideration used to transfer value between related parties outside of a disclosed transaction", level: "medium" },
      { risk: "Development site acquisition structured as a series of smaller interests (easements, leases) to avoid triggering higher-value reporting thresholds", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, AUSTRAC_REAL_ESTATE_RISK, LSJ_CONSTRUCTION, LAWSOCIETY_IMPL_GUIDE],
  },
  {
    id: "cl-building-defects",
    categoryId: "construction-law",
    label: "Building defects claims and construction litigation",
    description:
      "Representing owners corporations, homeowners, or contractors in claims for defective building work — including statutory warranty claims under the Home Building Act 1989 (NSW) or equivalent state legislation, common law negligence claims, and NCAT/court proceedings. May also include expert evidence coordination and mediation.",
    verdict: "not-designated",
    verdictSummary: "Not designated — building defects litigation is legal representation in a dispute rather than a transaction to transfer real estate, create an entity, or arrange financing. Litigation and dispute resolution work falls outside Table 6.",
    whyExcluded:
      "Table 6 is transactional in character. Representing a client in a defects dispute does not itself advance any transfer of real estate, body corporate, or legal arrangement. Caution: if a defects claim is settled by a price adjustment on an existing property contract, or by a developer transferring a completed unit to resolve a dispute, implementing that settlement may engage Item 1.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, LSJ_TABLE6, AML_CTF_ACT],
  },
  {
    id: "cl-lease-commercial",
    categoryId: "construction-law",
    label: "Commercial and retail lease — preparation and registration for new premises",
    description:
      "Drafting, reviewing, negotiating, and registering commercial or retail leases for newly constructed premises. Commonly arises in construction law matters where the developer leases completed premises to anchor tenants or where a head contractor leases a site office. Includes preparation of disclosure statements, incentive deeds, rent review provisions, and mortgagee consent to lease.",
    verdict: "depends",
    verdictSummary: "Depends — commercial leases are interests in real property; however, there is uncertainty about whether leasing constitutes 'buying, selling, or transferring' real estate for the purposes of Item 1. Short-term or non-registrable leases are likely not designated; long-term registrable leases that effectively transfer commercial possession may be.",
    conditions: [
      "Short-term commercial lease (under 3 years, not registrable) → likely NOT DESIGNATED",
      "Long-term registrable commercial or retail lease → UNCERTAIN — Item 1 may apply if the lease transfers an interest in real estate within the meaning of the Act",
      "Lease with an option to purchase → if the purchase option is exercised, the conveyancing is designated under Item 1",
      "Lease incentive held in lawyer's trust account → Item 3 MAY APPLY",
    ],
    tableReference: "s 6(5B) Item 1",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Lease used to give effective control of real property to a criminal associate without triggering a formal title transfer or stamp duty", level: "medium" },
      { risk: "Lease incentive funds managed by the lawyer used to layer illicit funds through an apparently legitimate commercial transaction", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_CONSTRUCTION, AUSTRAC_REAL_ESTATE_RISK, LAWSOCIETY_IMPL_GUIDE],
  },

  {
    id: "cl-subcontract",
    categoryId: "construction-law",
    label: "Head contractor / subcontractor agreement and novation",
    description:
      "Preparing or reviewing subcontract agreements between a head contractor and its subcontractors under standard-form contracts (AS 4000, ABIC, HIA, Master Builders), and advising on the novation of subcontracts from a developer to a head contractor or from one head contractor to another following a project or company transfer. Novation effectively replaces one contracting party with another and is common where a development project changes hands mid-construction.",
    verdict: "depends",
    verdictSummary:
      "Depends — the subcontract itself is a services agreement and is ordinarily not designated. However, novation of a subcontract as part of a broader project or business transfer may engage Table 6 if the underlying transaction involves a transfer of a body corporate (Item 2), a real estate transaction (Item 1), or the creation of a new legal arrangement (Item 6). The novation is designated only where it directly advances one of those outcomes.",
    conditions: [
      "Standalone subcontract agreement (no underlying Table 6 transaction) → NOT DESIGNATED",
      "Novation of subcontracts as part of a business or project acquisition (body corporate transfer) → Item 2 MAY APPLY → DESIGNATED",
      "Novation from developer to builder under a development agreement → Item 1 MAY APPLY where the development agreement is itself a real estate transaction",
      "Novation involving creation of a new joint venture or SPV to complete the project → Item 6 MAY APPLY → DESIGNATED",
    ],
    tableReference: "s 6(5B) Items 1, 2 and 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Project novation used to introduce a new undisclosed beneficial owner into a partially-completed development mid-construction, frustrating CDD already completed on the original developer", level: "medium" },
      { risk: "Novation of subcontracts used to transfer inflated construction costs between related-party entities within a development group", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LAWSOCIETY_IMPL_GUIDE],
  },
  {
    id: "cl-performance-bond",
    categoryId: "construction-law",
    label: "Performance bond, bank guarantee and retention money disputes",
    description:
      "Advising on the calling, release, or dispute of performance bonds, unconditional bank guarantees, and retention money held as security under a construction contract. Includes drafting injunction applications to restrain a call on a bank guarantee, advising on whether a call is unconscionable, and managing retention releases at practical and final completion.",
    verdict: "not-designated",
    verdictSummary:
      "Not designated — advising on performance bonds and bank guarantees is advisory and dispute resolution work. The bond or guarantee itself is a security instrument, not a transaction to transfer real estate, create a legal arrangement, or constitute equity or debt financing within Table 6. Litigation to restrain a call is also not a designated service.",
    whyExcluded:
      "Table 6 captures services that directly advance the transfer, creation, or financing of real estate, entities, or legal arrangements. A performance bond secures contractual obligations under a construction contract — it does not transfer any interest in real estate or create a new entity. Advising on calling or releasing a bond is advisory work, and litigation to restrain a call is dispute resolution. Both fall outside Table 6. Caution: if a lawyer holds retention money in trust on behalf of a contractor, Item 3 may apply to the holding of those funds.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, LSJ_TABLE6, AML_CTF_ACT],
  },
  {
    id: "cl-home-warranty",
    categoryId: "construction-law",
    label: "Home building contracts and home warranty insurance",
    description:
      "Preparing residential building contracts under the Home Building Act 1989 (NSW) or equivalent state legislation, advising builders and homeowners on statutory warranties, and managing home warranty insurance (also known as builder's indemnity insurance or domestic building insurance) claims. Covers contracts for new dwellings, extensions, alterations, and swimming pools.",
    verdict: "depends",
    verdictSummary:
      "Depends — a standalone residential building contract is a services agreement and is ordinarily not designated. However, if the building contract is part of a house-and-land package (involving a simultaneous land sale), or if the lawyer holds deposit or progress payment funds in trust, designated services arise.",
    conditions: [
      "Standalone residential building contract only (client already owns the land) → NOT DESIGNATED — a services agreement, not a real estate transaction",
      "House-and-land package (simultaneous land sale and building contract) → Item 1 APPLIES to the land sale component → DESIGNATED",
      "Lawyer holds building deposit or progress payment in trust → Item 3 MAY APPLY",
      "Builder creates a new company or trust to carry out the project → Item 6 APPLIES → DESIGNATED",
      "Home warranty insurance claim management (dispute/litigation) → NOT DESIGNATED — advisory/dispute resolution",
    ],
    tableReference: "s 6(5B) Items 1 and 3",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "House-and-land package used to introduce illicit funds as the purchase price for the land and construction, combining two transactions to obscure the total value", level: "medium" },
      { risk: "Residential building deposit held in trust sourced from undisclosed third parties rather than the contracting homeowner", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LSJ_CONSTRUCTION, LAWSOCIETY_IMPL_GUIDE],
  },
  {
    id: "cl-infrastructure-delivery",
    categoryId: "construction-law",
    label: "Public infrastructure delivery — PPP and government contract",
    description:
      "Acting for a government authority, consortium, or financier in a public-private partnership (PPP), design-build-finance-operate (DBFO), or major government infrastructure procurement. Includes drafting the project deed, concession agreement, equity participation agreement, and associated finance documents. Projects commonly involve road, rail, hospital, school, and water infrastructure.",
    verdict: "designated",
    verdictSummary:
      "Designated — PPP and major government infrastructure transactions engage multiple Table 6 items simultaneously. The project entity (typically a special purpose company or trust) is created under Item 6. Equity subscriptions by consortium members engage Item 4. Where real property is transferred to or from the government as part of the project, Item 1 applies. The combination means virtually all PPP legal work involves at least one designated service.",
    customerForCDD:
      "The consortium equity investors and their ultimate beneficial owners. Each investor entity and its beneficial ownership chain must be verified — PPP consortia frequently include offshore infrastructure funds and foreign sovereign wealth vehicles. Source of equity capital is a key CDD focus.",
    whyCaptured:
      "Item 6 designates assisting in the creation of a body corporate or legal arrangement — PPP project vehicles (SPCs, project trusts) are established as part of every procurement. Item 4 designates assisting in organising equity or debt financing relating to a body corporate — financial close involves simultaneous equity subscription and project finance drawdown. Item 1 applies where government land is transferred to or leased by the project entity. The NSW Law Society Implementation Guide lists infrastructure project vehicles as Item 6 examples.",
    tableReference: "s 6(5B) Items 1, 4 and 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Offshore infrastructure fund used as a conduit to introduce illicit capital into a major government project, where beneficial ownership of the fund is obscured through multiple holding layers", level: "high" },
      { risk: "Consortium equity contribution sourced from jurisdictions with weak AML controls, commingled with legitimate co-investor capital at financial close", level: "high" },
      { risk: "Government land transferred to a project entity at an undervalue, with the shortfall captured as a benefit to an undisclosed beneficial owner in the consortium", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, AUSTRAC_REAL_ESTATE_RISK, LAWSOCIETY_IMPL_GUIDE, LEX_AML_TABLE6],
  },
  {
    id: "cl-owner-builder",
    categoryId: "construction-law",
    label: "Owner-builder permit advice and subsequent sale obligations",
    description:
      "Advising an owner-builder on the statutory requirements for obtaining an owner-builder permit under the Home Building Act 1989 (NSW) or equivalent, and on the mandatory disclosure obligations when selling an owner-builder property within the statutory period (typically 7 years from practical completion in NSW). Includes advising on the requirement to obtain home warranty insurance before sale and drafting associated contract special conditions.",
    verdict: "depends",
    verdictSummary:
      "Depends — advice on obtaining an owner-builder permit is regulatory advisory work and is not designated. However, when the lawyer prepares the contract of sale for an owner-builder property and implements the conveyancing, the sale transaction engages Item 1 (real estate transaction).",
    conditions: [
      "Advice on obtaining owner-builder permit only → NOT DESIGNATED — regulatory advisory work",
      "Preparing contract of sale and completing conveyancing of the owner-built property → Item 1 APPLIES → DESIGNATED",
      "Advising on home warranty insurance obligations prior to sale → NOT DESIGNATED — advisory only",
      "Lawyer holds deposit in trust account on the sale → Item 3 MAY APPLY",
    ],
    tableReference: "s 6(5B) Items 1 and 3",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Owner-builder property sold at an inflated price to a related party as a mechanism to legitimise illicit funds used in the construction", level: "medium" },
      { risk: "Construction costs deliberately understated to reduce apparent value, with the balance of illicit funds introduced as apparent equity", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LAWSOCIETY_IMPL_GUIDE],
  },
  {
    id: "cl-builder-insolvency",
    categoryId: "construction-law",
    label: "Builder insolvency — project completion and creditor claims",
    description:
      "Acting for a developer, financier, or creditor when a builder becomes insolvent during a construction project — including advising on step-in rights under the building contract, appointing a replacement contractor, dealing with the liquidator's claims, and completing the project. Also acting for the liquidator of a failed builder in recovering amounts owed by developers and subcontractors.",
    verdict: "depends",
    verdictSummary:
      "Depends — advisory work following a builder's insolvency (reviewing rights, liaising with the liquidator) is not itself designated. However, if the lawyer assists in appointing a replacement head contractor that involves creating a new entity (Item 6), or if completing the project requires a new financing arrangement (Item 4), or if the incomplete building is sold as part of the insolvency (Item 1), designated services arise.",
    conditions: [
      "Advisory and creditor claim work following builder insolvency → NOT DESIGNATED — advisory and dispute resolution",
      "Appointment of replacement builder via a new construction JV or entity → Item 6 MAY APPLY → DESIGNATED",
      "New project finance arranged to complete the development following builder failure → Item 4 APPLIES → DESIGNATED",
      "Incomplete development sold by developer or mortgagee in possession following builder insolvency → Item 1 APPLIES → DESIGNATED",
      "Liquidator selling plant and equipment or assigning subcontracts → ordinarily NOT DESIGNATED unless real estate or an entity is transferred",
    ],
    tableReference: "s 6(5B) Items 1, 4 and 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Insolvency used to abandon a project and transfer partially-built real estate to a related party at a distressed price, introducing illicit equity as apparent rescue finance", level: "high" },
      { risk: "Replacement contractor introduced by the financier is a related party, enabling illicit extraction of construction costs under the guise of project completion", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, AUSTRAC_INSOLVENCY, LAWSOCIETY_IMPL_GUIDE],
  },
  {
    id: "cl-strata-management",
    categoryId: "construction-law",
    label: "Strata management statement and building management committee",
    description:
      "Preparing a strata management statement (SMS) or building management committee (BMC) agreement for a mixed-use development comprising multiple strata schemes sharing common infrastructure — such as car parking, services, and amenity areas. The SMS governs the rights and obligations of the participating strata schemes and their lot owners in relation to the shared facilities.",
    verdict: "designated",
    verdictSummary:
      "Designated — a strata management statement creates a new legal arrangement (the BMC or shared management scheme) between the participating strata schemes, engaging Item 6. It is typically prepared as part of the registration of the strata plan, which itself involves multiple Item 1 real estate transactions.",
    customerForCDD:
      "The developer instructing preparation of the SMS, and their ultimate beneficial owners. The SMS is prepared as part of the development process — CDD on the developer should already be underway for the broader development transaction.",
    whyCaptured:
      "Item 6 designates assisting in the creation of a body corporate or legal arrangement. A building management committee is a statutory legal arrangement created under the Strata Schemes Development Act — it is a 'legal arrangement' within the meaning of the AML/CTF Act regardless of the fact that it is a statutory rather than a purely contractual creature.",
    tableReference: "s 6(5B) Items 1 and 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "SMS used to allocate shared facility costs inequitably between strata schemes in a way that benefits related parties within the development group", level: "low" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, AUSTRAC_REAL_ESTATE_RISK, LAWSOCIETY_IMPL_GUIDE],
  },
  {
    id: "cl-demolition",
    categoryId: "construction-law",
    label: "Demolition contract and site acquisition for redevelopment",
    description:
      "Acting in the acquisition of an existing improved property for redevelopment (including site amalgamation of multiple lots), and advising on demolition contracts, heritage relocation requirements, and asbestos removal obligations prior to construction. The lawyer typically acts in the underlying property purchases, advises on planning requirements, and prepares the demolition contract.",
    verdict: "designated",
    verdictSummary:
      "Designated — the acquisition of the site for redevelopment directly engages Item 1 (real estate transaction). The demolition contract itself is ordinarily not designated (a services agreement), but the underlying land purchases that precede demolition are clearly designated. Where multiple lots are acquired and amalgamated, each purchase is a separate designated service.",
    customerForCDD:
      "The developer/purchaser of each site lot and their ultimate beneficial owners. Site amalgamation purchases — particularly in inner-city areas — are high-value transactions that warrant enhanced due diligence. Source of funds for the aggregate purchase price across multiple lots is a key focus.",
    whyCaptured:
      "Item 1 designates assisting in the planning or execution of a transaction to buy, sell, or transfer real estate. Acquiring each lot of the amalgamated development site is a real estate transaction. The fact that the land will be demolished and redeveloped does not change the character of the acquisition. AUSTRAC's real estate sector risk assessment identifies large site acquisitions and amalgamations as elevated ML risk.",
    tableReference: "s 6(5B) Item 1",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Site amalgamation involving multiple sequential purchases from different vendors used to introduce illicit funds in smaller tranches below individual scrutiny thresholds", level: "high" },
      { risk: "Developer acquires multiple inner-city lots through nominee purchasers to conceal the true scale of the acquisition and the identity of the beneficial owner", level: "high" },
      { risk: "Demolition costs inflated through related-party contractor arrangements to extract illicit value from the project prior to construction commencement", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, AUSTRAC_REAL_ESTATE_RISK, LAWSOCIETY_IMPL_GUIDE],
  },
  {
    id: "cl-design-professional",
    categoryId: "construction-law",
    label: "Design professional appointments and PI insurance disputes",
    description:
      "Preparing appointment agreements for architects, engineers, and other design professionals engaged on a construction project, advising on the scope of professional services and ownership of intellectual property in design documents, and managing professional indemnity (PI) insurance claims and disputes arising from design errors or defects.",
    verdict: "not-designated",
    verdictSummary:
      "Not designated — design professional appointments are services agreements that regulate the delivery of professional services to a client. They do not transfer real estate, create a legal arrangement, or constitute a financing transaction. PI insurance disputes are advisory and litigation work, also outside Table 6.",
    whyExcluded:
      "Table 6 is transactional in character. Appointing a design professional and managing their scope of services is equivalent to any other professional services agreement — it governs the delivery of expertise, not the transfer of real estate or creation of an entity. PI insurance disputes are covered by the same reasoning as other construction litigation: advisory and dispute resolution work falls in the 'LIKELY OUT' column of the LSJ guidance. Note: if the lawyer holds PI insurance proceeds in trust for distribution among project parties, Item 3 may apply.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, LSJ_TABLE6, AML_CTF_ACT],
  },
  {
    id: "cl-building-contract-dispute",
    categoryId: "construction-law",
    label: "Termination of building contract and damages claims",
    description:
      "Advising a principal or contractor on the right to terminate a building contract for default, delay, or insolvency, issuing or responding to show-cause notices, and prosecuting or defending a damages claim following termination. Includes both litigation and arbitration of termination disputes, and advice on the right to complete the works using other contractors or the right to abandon the project.",
    verdict: "not-designated",
    verdictSummary:
      "Not designated — termination advice and contract damages claims are legal advice and dispute resolution work. They do not themselves transfer real estate, create a legal arrangement, or constitute a financing transaction. Table 6 is transactional; construction disputes fall outside it.",
    whyExcluded:
      "Advising a client on its right to terminate a building contract and pursuing a damages claim is core legal advisory and litigation work. The LSJ guidance places litigation and dispute resolution in the 'LIKELY OUT' column regardless of the value of the dispute. Caution: if a termination settlement involves the transfer of the partially completed development, or the creation of a new entity to complete the works, those outcomes may separately engage Item 1 or Item 6.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, LSJ_TABLE6, AML_CTF_ACT],
  },

  // ── PLANNING AND ENVIRONMENT LAW ───────────────────────────────────────────────
  {
    id: "pe-subdivision",
    categoryId: "planning-environment",
    label: "Land subdivision — plan of subdivision and lot transfer",
    description:
      "Acting for a landowner or developer in subdividing a parcel of land into two or more lots, registering the plan of subdivision, and completing the transfer of individual lots to purchasers. Encompasses Torrens title subdivisions, community title schemes, and rural lot subdivisions. The lawyer prepares subdivision documentation, requisitions, transfer instruments, and coordinates with council and the land titles office.",
    verdict: "designated",
    verdictSummary:
      "Designated — each lot transfer on registration of the subdivision plan is a real estate transaction within Item 1. Preparing and implementing the transfers that complete the subdivision directly advances those transactions. Where the developer sells lots off the plan before the plan is registered, Item 1 is also engaged at the point of contract exchange.",
    customerForCDD:
      "Each lot purchaser and their ultimate beneficial owners. Where lots are sold to a single developer who on-sells, CDD is required on the intermediate developer. Source of purchase funds is a key focus — rural and peri-urban subdivisions have been used to park and legitimise illicit capital.",
    whyCaptured:
      "Item 1 designates assisting in the planning or execution of a transaction to buy, sell, or transfer real estate. Completing the transfer of subdivided lots — whether sold off the plan or after registration — is the execution of a designated real estate transaction. The LSJ guidance confirms that implementing subdivision and lot conveyancing directly engages Item 1.",
    tableReference: "s 6(5B) Item 1",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Illicit funds introduced as the purchase price for subdivided lots through a series of related-party transactions at escalating prices", level: "high" },
      { risk: "Beneficial ownership of multiple lots aggregated through nominee purchasers to obscure the true beneficial controller of the land", level: "high" },
      { risk: "Rural or peri-urban land sold at inflated prices to justify large fund flows from undisclosed offshore sources", level: "medium" },
      { risk: "Subdivision used to break a large parcel into smaller, cheaper lots to reduce individual transaction values below scrutiny thresholds", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LAWSOCIETY_IMPL_GUIDE, AUSTRAC_REAL_ESTATE_RISK],
  },
  {
    id: "pe-rezoning",
    categoryId: "planning-environment",
    label: "Rezoning applications and planning agreement negotiations",
    description:
      "Acting for a landowner or developer in preparing and lodging a rezoning application (including a planning proposal under the Environmental Planning and Assessment Act 1979 (NSW) or equivalent state legislation), and negotiating a planning agreement (VPA or s 7.11 contribution agreement) with the relevant council or planning authority. Includes preparing environmental studies, heritage impact statements, and submissions.",
    verdict: "not-designated",
    verdictSummary:
      "Not designated — rezoning work and planning agreement negotiation are advisory and regulatory services that influence how land may be used, but do not themselves transfer real estate, create a legal arrangement, or constitute a financing transaction. The designated service (if any) arises when the rezoned land is subsequently bought, sold, or developed under a designated transaction.",
    whyExcluded:
      "Table 6 captures services that directly advance the transfer, creation, or financing of real estate, entities, or legal arrangements. A rezoning application alters the planning controls applying to land but does not transfer any interest in that land. Negotiating a planning agreement establishes infrastructure contribution obligations but is not a transaction to buy or sell real estate. The LSJ guidance places regulatory approvals and government dealings in the 'LIKELY OUT' column. However, if the lawyer also implements the subsequent sale or development of the rezoned land, that implementation work is designated.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, LSJ_TABLE6, AML_CTF_ACT, LAWSOCIETY_IMPL_GUIDE],
  },
  {
    id: "pe-compulsory-acquisition",
    categoryId: "planning-environment",
    label: "Compulsory acquisition — compensation claim and land transfer",
    description:
      "Acting for a landowner whose land is compulsorily acquired by a government authority under the Land Acquisition (Just Terms Compensation) Act 1991 (NSW) or equivalent state legislation — including negotiating compensation, instructing valuers, and completing the statutory transfer of title to the acquiring authority. Also acting for an acquiring authority in preparing acquisition notices and completing the land transfer.",
    verdict: "designated",
    verdictSummary:
      "Designated — a compulsory acquisition is a transaction to transfer real estate (Item 1), even though the transfer is involuntary and effected by statutory process. Assisting a landowner in negotiating compensation and completing the transfer, or assisting an acquiring authority in implementing the acquisition, directly advances the real estate transaction.",
    customerForCDD:
      "The landowner (if acting for the owner) or the acquiring authority (if acting for the authority). The landowner and their ultimate beneficial owners are the primary CDD focus. Note: compensation payments made by a government authority pursuant to statutory acquisition powers are likely excluded from Item 3 (client funds designation) under s 6(5C)-(5D), so Item 1 is the primary hook.",
    whyCaptured:
      "Item 1 designates assisting in the planning or execution of a transaction to buy, sell, or transfer real estate. A compulsory acquisition is a statutory mechanism for transferring title to real property — the transaction is the acquisition itself. The STEP paper notes that the involuntary nature of a transaction does not exclude it from Table 6; what matters is whether the lawyer's work directly advances the transfer of an interest in real estate.",
    tableReference: "s 6(5B) Item 1",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Inflated compensation claims colluding with a valuer to introduce illicit funds as apparently legitimate government compensation", level: "medium" },
      { risk: "Beneficial ownership of the acquired land obscured to divert compensation to an undisclosed party", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, STEP_PAPER, LAWSOCIETY_IMPL_GUIDE],
  },
  {
    id: "pe-development-contribution",
    categoryId: "planning-environment",
    label: "Development contribution deeds and works-in-kind agreements",
    description:
      "Negotiating and drafting a development contribution deed (also known as a works-in-kind agreement, infrastructure funding agreement, or planning agreement) between a developer and a council or infrastructure authority, under which the developer provides land, works, or monetary contributions in lieu of development contributions. Includes drafting the deed, managing council negotiations, and advising on s 7.11–7.12 Environmental Planning and Assessment Act 1979 (NSW) obligations.",
    verdict: "not-designated",
    verdictSummary:
      "Not designated — a development contribution deed is a regulatory and contractual arrangement that governs the developer's infrastructure obligations to a public authority. It does not transfer real estate between private parties, create a body corporate or legal arrangement, or constitute a debt or equity financing transaction within Table 6. However, if land is dedicated to council as part of the deed, that dedication may engage Item 1.",
    conditions: [
      "Cash contribution only (monetary development levy) → NOT DESIGNATED — payment to a government authority does not engage Table 6",
      "Works-in-kind agreement (developer constructs infrastructure) → likely NOT DESIGNATED — a services obligation, not a real estate transfer",
      "Land dedication to council as part of the deed → Item 1 MAY APPLY — transferring land (even to a government authority) may be a real estate transaction",
      "Lawyer holds development contribution funds in trust account pending payment → Item 3 MAY APPLY if the funds are not government/insurer payments within the exclusion",
    ],
    tableReference: "s 6(5B) Items 1 and 3",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, LSJ_TABLE6, AML_CTF_ACT, LAWSOCIETY_IMPL_GUIDE],
  },
  {
    id: "pe-environment-trust",
    categoryId: "planning-environment",
    label: "Environmental conservation trust and biodiversity offset trust establishment",
    description:
      "Drafting the trust deed and establishment documents for an environmental conservation trust or biodiversity offset trust — commonly required as a condition of development consent or as part of a biodiversity offset scheme under the Biodiversity Conservation Act 2016 (NSW) or equivalent. These trusts hold land or funds for conservation purposes as an offset for development impacts.",
    verdict: "designated",
    verdictSummary:
      "Designated — establishing a conservation trust or biodiversity offset trust creates a new legal arrangement (a trust) within Item 6. The lawyer drafting the trust deed and settling the trust directly advances the creation of a legal arrangement, regardless of its environmental purpose.",
    customerForCDD:
      "The settlor (typically the developer or landowner funding the offset), the trustee, and any ultimate beneficial controllers of the trust. In conservation trusts, the beneficial interest may vest in a government or charitable body — verify the ownership structure carefully.",
    whyCaptured:
      "Item 6 designates assisting in the creation of a body corporate or legal arrangement. A trust — including a charitable or conservation trust — is a 'legal arrangement' under the AML/CTF Act. The NSW Law Society Implementation Guide expressly lists trust establishment as an Item 6 example. The environmental or charitable purpose of the trust does not remove it from Table 6.",
    tableReference: "s 6(5B) Item 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Conservation trust used as a vehicle to transfer land or funds between related parties under the guise of a legitimate environmental obligation", level: "medium" },
      { risk: "Trust funds contributed by a developer from undisclosed illicit sources, legitimised through the biodiversity offset mechanism", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LAWSOCIETY_IMPL_GUIDE],
  },
  {
    id: "pe-contaminated-land",
    categoryId: "planning-environment",
    label: "Contaminated land sale — remediation deed and title transfer",
    description:
      "Acting in the sale of contaminated or potentially contaminated land, including drafting remediation deeds, contamination indemnities, special conditions addressing PFAS/asbestos/hydrocarbon contamination, and completing the conveyancing. The transaction often requires liaison with the EPA and management of planning certificates under the Environmental Planning and Assessment Act 1979 (NSW).",
    verdict: "designated",
    verdictSummary:
      "Designated — the sale and transfer of contaminated land is a real estate transaction within Item 1. The contaminated nature of the land and associated remediation obligations do not remove the transaction from Table 6. The lawyer implementing the sale and transfer directly advances the designated real estate transaction.",
    customerForCDD:
      "The vendor and purchaser and their ultimate beneficial owners. Contaminated land transactions warrant enhanced due diligence — contaminated sites at discounted prices can be used to park illicit capital with a view to profiting from remediation and redevelopment.",
    whyCaptured:
      "Item 1 designates assisting in the planning or execution of a transaction to buy, sell, or transfer real estate. A sale of contaminated land is a sale of real estate regardless of the additional remediation obligations. The lawyer's work implementing the sale — drafting the contract, managing the transfer, completing the conveyancing — directly advances the real estate transaction.",
    tableReference: "s 6(5B) Item 1",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Contaminated site acquired at a deep discount using illicit funds, with subsequent remediation and redevelopment used to cleanse the value and produce an apparently legitimate capital gain", level: "high" },
      { risk: "Vendor and purchaser are related parties using the contamination as a pretext for a below-market transfer of value", level: "medium" },
      { risk: "Remediation costs inflated through related-party contractor arrangements to extract additional illicit value from the transaction", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, AUSTRAC_REAL_ESTATE_RISK, LAWSOCIETY_IMPL_GUIDE],
  },
  {
    id: "pe-da-appeal",
    categoryId: "planning-environment",
    label: "Development application appeals and Land and Environment Court proceedings",
    description:
      "Representing a developer, objector, or council in an appeal or merits review of a development application decision in the Land and Environment Court (NSW) or equivalent state tribunal. Includes Class 1 merit appeals, Class 4 judicial review proceedings, and enforcement proceedings under the Environmental Planning and Assessment Act 1979 (NSW).",
    verdict: "not-designated",
    verdictSummary:
      "Not designated — Land and Environment Court proceedings are litigation and dispute resolution work. Representing a party in a DA appeal or judicial review does not itself transfer real estate, create a body corporate or legal arrangement, or constitute a financing transaction. Table 6 is transactional in character; litigation and dispute resolution falls outside it.",
    whyExcluded:
      "Table 6 captures services that directly advance the transfer, creation, or financing of real estate, entities, or legal arrangements. A DA appeal resolves a dispute about whether development consent should be granted — it does not transfer any interest in real estate or create any entity. The LSJ guidance places litigation and tribunal proceedings in the 'LIKELY OUT' column. Note: if the appeal is resolved by a deed of settlement that involves a real estate transaction or entity creation, implementing that settlement may engage Table 6.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, LSJ_TABLE6, AML_CTF_ACT],
  },
  {
    id: "pe-mining-tenement",
    categoryId: "planning-environment",
    label: "Mining tenement acquisition, transfer, and joint venture",
    description:
      "Acting in the acquisition, transfer, or joint venture of a mining tenement, exploration licence, or petroleum title — including preparing transfer instruments under the Mining Act 1992 (NSW) or equivalent, drafting farm-in agreements, joint operating agreements, and advising on ministerial consent requirements. May also involve the acquisition of a company that holds a mining tenement (share sale).",
    verdict: "designated",
    verdictSummary:
      "Designated — a mining tenement is an interest in land under Australian law; its transfer engages Item 1 (real estate transaction). Where the transfer is effected by a share sale of the tenement-holding company, Item 2 (body corporate transfer) applies. A farm-in agreement or joint operating agreement creating a joint venture arrangement engages Item 6 (creation of a legal arrangement). These services frequently engage multiple Table 6 items simultaneously.",
    customerForCDD:
      "The transferor and transferee (or farmor and farmee) and their ultimate beneficial owners. Mining tenements and resource projects frequently involve offshore investors and complex holding structures — enhanced due diligence is warranted. Source of consideration for the tenement acquisition is a key focus.",
    whyCaptured:
      "Item 1 designates assisting in a transaction to buy, sell, or transfer real estate, which includes interests in land such as mining tenements and exploration licences. Item 2 applies where the transfer is effected via a company share sale. Item 6 applies where a farm-in agreement or joint operating agreement creates an unincorporated joint venture (a 'legal arrangement' under the Act). The combination of resource tenement transfers and complex ownership structures is a high-risk area.",
    tableReference: "s 6(5B) Items 1, 2 and 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Mining tenement acquired at an inflated price using illicit funds to generate an apparently legitimate capital investment in the resources sector", level: "high" },
      { risk: "Complex holding structure for the tenement obscures the ultimate beneficial owner, enabling illicit funds to enter the resources sector undetected", level: "high" },
      { risk: "Farm-in agreement used to introduce an undisclosed foreign investor into a resource project without proper foreign investment review", level: "medium" },
      { risk: "Resource company share sale used to transfer control of valuable tenements without triggering separate tenement transfer consent requirements", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LAWSOCIETY_IMPL_GUIDE, LEX_AML_TABLE6],
  },
  {
    id: "pe-strata-renewal",
    categoryId: "planning-environment",
    label: "Strata renewal — collective sale or redevelopment plan",
    description:
      "Acting for an owners corporation, strata renewal committee, or developer in a strata renewal process under Part 10 of the Strata Schemes Development Act 2015 (NSW) or equivalent — including preparing the strata renewal plan, collective sale contract, or redevelopment plan, and completing individual lot transfers or the acquisition of the strata scheme.",
    verdict: "designated",
    verdictSummary:
      "Designated — a strata renewal collective sale or redevelopment involves the transfer of all lots in the strata scheme, engaging Item 1 (real estate transaction) for each lot. Where a new development entity acquires the scheme, Item 2 (body corporate transfer) may also apply. The lawyer implementing the renewal plan and individual lot transfers directly advances multiple designated services.",
    customerForCDD:
      "Each lot owner as vendor, and the acquiring developer or body corporate as purchaser. The developer and its ultimate beneficial owners are the primary CDD focus. Note that strata renewal processes may involve involuntary acquisition of dissenting lot owners — the involuntary nature does not remove the transaction from Table 6.",
    whyCaptured:
      "Item 1 designates assisting in the planning or execution of a transaction to buy, sell, or transfer real estate. A strata renewal collective sale implements the transfer of every lot in a strata scheme — potentially dozens of simultaneous real estate transactions. The STEP paper confirms that the involuntary character of a transaction does not exclude it from Table 6 where the lawyer's work directly advances real estate transfers.",
    tableReference: "s 6(5B) Items 1 and 2",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Acquiring developer uses illicit funds to purchase the strata scheme at a price inflated above market by coordinating with sympathetic lot owners", level: "high" },
      { risk: "Strata renewal used to rapidly transfer multiple lots to related parties under the statutory process, obscuring individual transaction scrutiny", level: "medium" },
      { risk: "Dissenting lot owner compensation payments sourced from illicit funds through a layered corporate acquirer structure", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, AUSTRAC_REAL_ESTATE_RISK, LAWSOCIETY_IMPL_GUIDE],
  },
  {
    id: "pe-heritage-advice",
    categoryId: "planning-environment",
    label: "Heritage impact advice and heritage listing proceedings",
    description:
      "Advising a landowner on the heritage listing of their property, preparing submissions to oppose or support a heritage listing proposal, and representing the landowner in heritage listing proceedings before the NSW Heritage Council or equivalent body. Also includes advising on heritage conservation agreements and heritage incentive provisions in planning instruments.",
    verdict: "not-designated",
    verdictSummary:
      "Not designated — heritage impact advice and listing proceedings are regulatory advisory and advocacy services that influence planning controls but do not themselves transfer real estate, create a legal arrangement, or constitute a financing transaction. The designated service (if any) arises when the property is subsequently sold or developed under a designated transaction.",
    whyExcluded:
      "Table 6 is transactional in character. Advising on or opposing a heritage listing changes the regulatory burden on a property but does not transfer any interest in that property. The LSJ guidance places regulatory advisory and government dealings in the 'LIKELY OUT' column. Note: if heritage advice is provided as part of the lawyer implementing a sale or development of the heritage-listed property, the overall transaction may be designated.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, LSJ_TABLE6, AML_CTF_ACT],
  },
  {
    id: "pe-carbon-credit",
    categoryId: "planning-environment",
    label: "Carbon credit unit (ACCU) and voluntary carbon credit transactions",
    description:
      "Acting in the acquisition, transfer, or retirement of Australian Carbon Credit Units (ACCUs) under the Carbon Credits (Carbon Farming Initiative) Act 2011 (Cth), or voluntary carbon credits, including drafting ACCU purchase agreements, carbon project agreements, and advising on the establishment of carbon farming projects on land. May involve the creation of a trust or corporate vehicle to hold and trade carbon credits.",
    verdict: "depends",
    verdictSummary:
      "Depends — a bare transfer of ACCUs or voluntary carbon credits is likely not a real estate transaction and does not itself engage Table 6, as carbon credits are not 'real estate' or a 'body corporate or legal arrangement'. However, if the carbon project requires establishing a trust or corporate vehicle to hold the carbon rights (Item 6), or if the carbon project involves a transaction in land (Item 1 — e.g. placing a legal encumbrance or carbon covenant on the land), designated services arise.",
    conditions: [
      "Simple ACCU purchase agreement between existing entities → likely NOT DESIGNATED — carbon credits are not real estate or a body corporate",
      "Carbon farming project established using a new trust or corporate vehicle → Item 6 APPLIES → DESIGNATED",
      "Carbon covenant or environmental encumbrance registered on land title as part of the project → Item 1 MAY APPLY if the covenant constitutes an interest in real estate",
      "Carbon project funded by a new debt or equity facility → Item 4 MAY APPLY",
      "Lawyer holds ACCU sale proceeds in trust account → Item 3 MAY APPLY",
    ],
    tableReference: "s 6(5B) Items 1, 3, 4 and 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Carbon credits used to launder illicit funds through the voluntary carbon market — large purchases at inflated prices between related parties", level: "medium" },
      { risk: "Carbon project structure used to create a vehicle for introducing illicit capital as apparent carbon farming investment", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LAWSOCIETY_IMPL_GUIDE],
  },
  {
    id: "pe-native-title",
    categoryId: "planning-environment",
    label: "Native title agreement — ILUA and future act consent",
    description:
      "Acting for a proponent or native title party in negotiating and executing an Indigenous Land Use Agreement (ILUA) under the Native Title Act 1993 (Cth), or in obtaining future act consent for development activities on native title land. Includes drafting the agreement, advising on compensation arrangements, and completing registration with the National Native Title Tribunal.",
    verdict: "depends",
    verdictSummary:
      "Depends — an ILUA that includes a transfer of freehold or leasehold land to the native title party engages Item 1 (real estate transaction). A consent determination that extinguishes native title in exchange for other benefits may also constitute a transaction in real estate. However, a future act consent agreement that merely authorises a proponent to undertake development without transferring any land interest is likely not designated.",
    conditions: [
      "ILUA includes transfer of freehold or leasehold title to native title holders → Item 1 APPLIES → DESIGNATED",
      "ILUA creates a land use arrangement (e.g. long-term lease or licence) over native title land → Item 1 MAY APPLY if the arrangement constitutes a registrable interest in land",
      "ILUA establishes a new body corporate (e.g. Prescribed Body Corporate holding land on trust) → Item 6 APPLIES → DESIGNATED",
      "Future act consent agreement only (no land transfer, no new entity) → likely NOT DESIGNATED",
      "Lawyer holds compensation payments in trust → Item 3 MAY APPLY (subject to government payment exclusion under s 6(5C)-(5D))",
    ],
    tableReference: "s 6(5B) Items 1, 3 and 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "ILUA compensation payments used to introduce illicit funds into a native title representative body or Prescribed Body Corporate without scrutiny", level: "medium" },
      { risk: "Land transferred under an ILUA to a related corporate entity controlled by an undisclosed beneficial owner", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LAWSOCIETY_IMPL_GUIDE],
  },

  // ── TAX LAW ──────────────────────────────────────────────────────────────────
  {
    id: "tax-advice-general",
    categoryId: "tax-law",
    label: "General tax advice — income tax, CGT, GST, FBT (no transaction)",
    description:
      "Advising clients on Australian tax obligations, entitlements, and planning options without implementing any transaction. Includes advising on CGT event consequences, GST treatment of proposed transactions, FBT liability, income tax residency, or Division 7A implications. The advice informs the client's decision-making but does not directly advance any transfer, financing, or entity creation.",
    verdict: "not-designated",
    verdictSummary: "Not designated — pure tax advice that does not directly advance a Table 6 transaction is outside the regime. The STEP paper confirms that advice which only 'influences the creation' of a structure without directly advancing it is not captured. Strategic tax planning advice without implementing a transaction is in the 'LIKELY OUT' category.",
    whyExcluded:
      "Table 6 is transactional in character — it captures services that directly advance the creation, transfer, or financing of real estate, entities, or legal arrangements. Tax advice that helps a client understand their position or evaluate options does not itself directly advance any Table 6 outcome. The STEP paper and AUSTRAC guidance both confirm that advice that 'merely influences' a client's decision without enabling independent action or constituting a preparatory step to implement the transaction falls outside Table 6.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, LSJ_TABLE6, AML_CTF_ACT, STEP_PAPER],
  },
  {
    id: "tax-restructure-entity",
    categoryId: "tax-law",
    label: "Tax-driven entity restructure (CGT rollover, Div 122/615 restructure)",
    description:
      "Implementing a tax-driven corporate or trust restructure — such as a Division 122 (transfer to wholly-owned company), Division 615 (business restructure rollover), Division 328-G (small business restructure), or trust-to-company conversion. These transactions involve transferring assets between entities or converting one entity type to another to achieve CGT deferral or income tax efficiencies. A new entity may be created and existing assets transferred to it.",
    verdict: "designated",
    verdictSummary: "Designated — implementing a tax-driven entity restructure involves the creation or restructuring of a body corporate or legal arrangement (Item 6) and, where assets are transferred to the new entity, the transfer of those assets (Item 2 if a body corporate is transferred; Item 1 if real property is transferred). The tax motivation does not change the Table 6 characterisation.",
    customerForCDD: "The transferor entity/individual and the transferee entity and their ultimate beneficial owners.",
    whyCaptured:
      "Item 6 designates assisting in the creation or restructuring of a body corporate or legal arrangement. A Division 122 interposition, Division 615 rollover, or small business restructure necessarily involves creating a new holding company or restructuring an existing one — squarely within Item 6. Where real property is part of the transfer, Item 1 is also engaged. The tax concession does not create an exemption from Table 6 obligations.",
    tableReference: "s 6(5B) Items 1, 2 and 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Tax-motivated restructure used to introduce a new undisclosed beneficial owner into a business under cover of a legitimate transaction", level: "high" },
      { risk: "Assets transferred to a newly-created entity that is then sold or mortgaged, allowing illicit equity to be extracted", level: "high" },
      { risk: "CGT rollover used to transfer property of illicit origin into a clean entity with no visible transaction history", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LAWSOCIETY_IMPL_GUIDE, STEP_PAPER],
  },
  {
    id: "tax-trust-variation",
    categoryId: "tax-law",
    label: "Trust variation, resettlement, and vesting",
    description:
      "Advising and implementing variations to a discretionary or unit trust deed — including changing trustee, adding or removing beneficiaries, extending the vesting date, or converting a discretionary trust to a unit trust. Trust variations can trigger CGT resettlement events. AUSTRAC guidance addresses when trust deed changes constitute 'restructuring' of a legal arrangement under Item 6.",
    verdict: "depends",
    verdictSummary: "Depends — minor administrative variations that do not change the legal form of the trust are likely not designated. Substantive variations that change the nature of the trust (converting from discretionary to unit trust, vesting the trust, or resettling assets on a new trust) engage Item 6 (restructuring or creation of a legal arrangement).",
    conditions: [
      "Administrative amendment to a trust deed (correcting errors, updating trustee name) with no change to the trust's legal form → NOT DESIGNATED",
      "Variation that changes beneficiary class or extends vesting date without changing the trust's legal form → borderline — SEEK ADVICE",
      "Converting a discretionary trust to a unit trust (change in legal form) → Item 6 (restructuring of a legal arrangement) APPLIES → DESIGNATED",
      "Vesting the trust and distributing assets to beneficiaries → Item 6 (restructuring) and Item 3 (managing property) MAY APPLY → DESIGNATED",
      "Resettling assets to a new trust (creating a new trust) → Item 6 (creation of a legal arrangement) APPLIES → DESIGNATED",
      "Change of trustee accompanied by transfer of trust assets to new trustee → Item 6 likely applies; Item 3 MAY APPLY",
    ],
    tableReference: "s 6(5B) Items 3 and 6",
    customerForCDD: "The trustee (current and new), settlor, and beneficiaries of the trust.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Trust resettlement used to transfer assets of illicit origin to a new trust with new beneficiaries, breaking the audit trail", level: "high" },
      { risk: "Change of trustee used to introduce a criminal associate as the new controller of trust assets", level: "high" },
      { risk: "Trust vesting used to distribute illicitly-sourced trust assets to beneficiaries under the guise of a legitimate distribution", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, STEP_PAPER, LSJ_TABLE6, LAWSOCIETY_IMPL_GUIDE],
  },
  {
    id: "tax-div7a",
    categoryId: "tax-law",
    label: "Division 7A loan agreements and UPE sub-trust arrangements",
    description:
      "Advising on and implementing Division 7A complying loan agreements between a private company and a shareholder or associate (or an interposed trust), to avoid the unpaid present entitlement (UPE) or loan being treated as a deemed dividend. May also involve establishing a sub-trust to hold the UPE for the sole benefit of the company beneficiary. Division 7A work is common in small business tax planning.",
    verdict: "depends",
    verdictSummary: "Depends — advising on Division 7A implications is not designated. Drafting a Division 7A complying loan agreement between existing entities is likely not designated on its own. However, establishing a sub-trust to hold the UPE engages Item 6 (creation of a legal arrangement), and if the loan is secured over real property, Item 1 or Item 3 may be engaged.",
    conditions: [
      "Advising on Division 7A implications of trust distributions only → NOT DESIGNATED",
      "Drafting a Division 7A complying loan agreement between the private company and the trustee (no new entity) → likely NOT DESIGNATED (loan agreement is not a body corporate or legal arrangement)",
      "Establishing a sub-trust for the sole benefit of the private company beneficiary → Item 6 (creation of a legal arrangement) APPLIES → DESIGNATED",
      "Division 7A loan secured by mortgage over real property → Item 1 MAY APPLY if the lawyer implements the mortgage; Item 3 if funds are held in trust",
    ],
    tableReference: "s 6(5B) Items 3 and 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Division 7A loan used to extract value from a company to a related party, concealing illicit enrichment", level: "medium" },
      { risk: "Back-to-back Division 7A loans used to layer funds across multiple related entities", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, STEP_PAPER, LSJ_TABLE6],
  },
  {
    id: "tax-ato-dispute",
    categoryId: "tax-law",
    label: "ATO disputes, objections, and AAT/Federal Court tax appeals",
    description:
      "Representing a client in a dispute with the ATO — including lodging objections to tax assessments, Part IVC appeals to the AAT or Federal Court, responding to ATO audits and reviews, negotiating payment arrangements, and seeking private binding rulings. Tax dispute resolution is analogous to other forms of litigation and dispute resolution.",
    verdict: "not-designated",
    verdictSummary: "Not designated — tax dispute resolution and ATO audit defence are litigation/advisory services that determine legal questions about past tax positions. They do not directly advance any Table 6 transaction. AUSTRAC confirms that dispute resolution generally falls outside Table 6.",
    whyExcluded:
      "Tax objections, AAT appeals, and Federal Court Part IVC proceedings are quintessentially dispute resolution — the lawyer is challenging a tax authority's position about past events, not implementing a future transaction. No asset is being transferred, no entity is being created, and no financing transaction is being implemented. Any payment of tax from funds held in trust is a government payment excluded from Item 3 by s 6(5C)/(5D).",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LEX_AML_TABLE6],
  },
  {
    id: "tax-private-ruling",
    categoryId: "tax-law",
    label: "Obtaining a private binding ruling for a proposed transaction",
    description:
      "Applying to the ATO on behalf of a client for a private binding ruling (PBR) on the tax treatment of a proposed transaction — such as a CGT rollover, trust distribution, or proposed business sale. The PBR application describes the transaction to the ATO and seeks a ruling on its tax consequences before the transaction is implemented.",
    verdict: "not-designated",
    verdictSummary: "Not designated — applying for a private binding ruling is an advisory and regulatory step that precedes the transaction. It relates to a proposed transaction, not one in progress. AUSTRAC guidance clarifies that the designated service begins when the lawyer acts on instructions to directly advance the transaction, not during pre-transaction advice or planning discussions.",
    whyExcluded:
      "A PBR application seeks to clarify consequences of a proposed (not yet agreed or commenced) transaction rather than directly advancing it. The STEP paper and AUSTRAC guidance confirm that an 'initial discussion with someone about their possible needs and circumstances, not directed to a specific transaction, does not trigger provision of designated services'. The designated service begins when the lawyer accepts instructions and takes steps to execute the transaction itself.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, STEP_PAPER, LSJ_TABLE6],
  },
  {
    id: "tax-transfer-pricing",
    categoryId: "tax-law",
    label: "Transfer pricing advice and intra-group transaction documentation",
    description:
      "Advising multinational groups on transfer pricing policies under Subdivision 815-B of the ITAA 1997, preparing transfer pricing documentation (master file, local file, country-by-country report), and assisting with ATO transfer pricing reviews. May be connected to intra-group transactions (loans, IP licences, services) that involve moving value between related entities across borders.",
    verdict: "depends",
    verdictSummary: "Depends — advising on transfer pricing policy and preparing documentation is not designated (advisory only). However, if the lawyer also implements the underlying intra-group financing transaction or creates/restructures the group entity through which intra-group transactions flow, Items 4 or 6 may apply.",
    conditions: [
      "Advising on arm's-length pricing policies or preparing TP documentation without implementing any transaction → NOT DESIGNATED",
      "Assisting an ATO transfer pricing review or audit (dispute resolution) → NOT DESIGNATED",
      "Implementing the intra-group loan agreement underpinning the transfer pricing arrangement → Item 4 (debt financing) MAY APPLY",
      "Creating or restructuring the group entity through which intra-group transactions flow → Item 6 APPLIES → DESIGNATED",
    ],
    tableReference: "s 6(5B) Items 4 and 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Transfer pricing arrangements used to shift illicit profits to a low-transparency jurisdiction under cover of tax planning", level: "high" },
      { risk: "Intra-group loans with non-commercial terms used to layer illicit funds across jurisdictions", level: "high" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LEX_AML_TABLE6],
  },

  // ── INTELLECTUAL PROPERTY ──────────────────────────────────────────────────
  {
    id: "ip-advice-general",
    categoryId: "intellectual-property",
    label: "General IP advice — patents, trade marks, copyright, designs (no transaction)",
    description:
      "Advising clients on the existence, scope, validity, infringement, or licensing strategy of intellectual property rights, without implementing any transaction. This includes freedom-to-operate opinions, IP audits, general trade mark clearance searches, copyright ownership advice, and patent landscape analysis. No transfer, assignment, financing, or entity creation is involved.",
    verdict: "not-designated",
    verdictSummary: "Not designated — pure IP advice that does not directly advance a Table 6 transaction is outside the regime. The LSJ guidance confirms that advice which 'merely influences a client's thinking' (strategic advice, background analysis, legal consequences) is generally not captured.",
    whyExcluded:
      "Table 6 is transactional in character. Items 1–4 and 6 require the lawyer to 'assist in the planning or execution' of a specific transaction or arrangement that is in progress or will occur. General IP advice, audits, or infringement opinions do not directly advance a transfer, financing, or entity creation — they are advisory services outside the designated service boundary. The LSJ Table 6 guidance expressly places 'strategic advice' and 'background analysis' in the 'LIKELY OUT' column.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, LSJ_DESIGNATED, LSJ_TABLE6, AML_CTF_ACT],
  },
  {
    id: "ip-assignment-transfer",
    categoryId: "intellectual-property",
    label: "Assigning or transferring ownership of IP rights (patent, trade mark, copyright, design)",
    description:
      "Preparing and implementing an assignment of intellectual property rights — including drafting the assignment deed, filing with IP Australia (for patents, trade marks, designs) or the Copyright Register, and taking settlement steps to complete the transfer. IP rights are intangible property and, when assigned, constitute a 'transfer' of property. The question is whether the IP rights fall within the definition of a 'body corporate or legal arrangement' under Item 2 or another Table 6 item.",
    verdict: "depends",
    verdictSummary: "Depends — a standalone assignment of bare IP rights (patent, trade mark, copyright) is likely NOT designated because IP rights are not a 'body corporate or legal arrangement' within Item 2. However, if the assignment occurs as part of a broader business or entity transfer, or if the IP is held in a trust or IP holding company that is also being transferred or restructured, Items 2 or 6 may apply.",
    conditions: [
      "Assigning bare IP rights (patent, trade mark, copyright, design) between natural persons or companies as a standalone transaction → likely NOT DESIGNATED (IP rights are not a 'body corporate or legal arrangement' within Item 2)",
      "Assigning IP as part of a broader business sale or asset sale where goodwill, contracts and other assets are also transferred → Item 2 MAY apply if a body corporate or legal arrangement is being transferred",
      "Assigning IP held in a trust (e.g. a bare IP trust) where the assignment restructures or winds up the trust → Item 6 (restructuring a legal arrangement) MAY apply",
      "Assigning IP held in an IP holding company as part of a group restructure that also involves transferring shares in the holding company → Item 2 (transfer of a body corporate) LIKELY APPLIES",
      "Lawyer holds consideration in trust account during IP assignment settlement → Item 3 MAY also apply",
    ],
    tableReference: "s 6(5B) Items 2, 3 and 6",
    customerForCDD: "The assignor and/or assignee, depending on who instructs the lawyer. Beneficial ownership of the IP (and the entities holding it) is relevant for CDD.",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Undervalued IP assignment used to shift illicit value between related parties", level: "high" },
      { risk: "IP assigned to an opaque offshore holding entity to conceal beneficial ownership", level: "high" },
      { risk: "Assignment price inflated to introduce illicit funds as apparent licensing revenue or sale proceeds", level: "medium" },
      { risk: "Serial IP assignments used to layer ownership and obscure the trail of title", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LAWSOCIETY_IMPL_GUIDE, LEX_AML_TABLE6],
  },
  {
    id: "ip-licence-agreement",
    categoryId: "intellectual-property",
    label: "Drafting and implementing an IP licence agreement",
    description:
      "Preparing and executing a licence agreement granting a third party the right to use intellectual property (patent, trade mark, software copyright, design, know-how). A licence does not transfer ownership — the licensor retains title. Licences may be exclusive, sole, or non-exclusive, and may involve upfront fees, royalties, or sublicensing rights. Complex licensing may involve financing arrangements (e.g. royalty-backed loans).",
    verdict: "not-designated",
    verdictSummary: "Not designated in most cases — a licence grants permission to use IP without transferring ownership or restructuring a body corporate or legal arrangement. It does not constitute a 'sale, buy or transfer' of a body corporate (Item 2) or a 'creation or restructuring' of a legal arrangement (Item 6). However, if the licensing is structured via a trust or special purpose vehicle, or involves royalty-backed financing, other items may apply.",
    conditions: [
      "Drafting a standard IP licence (exclusive, non-exclusive, sublicence) between parties → NOT DESIGNATED",
      "Licensing arrangement structured via a unit trust or partnership (e.g. IP licensing trust) where the lawyer also creates or restructures the trust → Item 6 MAY apply to the trust creation",
      "Royalty-backed financing arrangement (e.g. IP royalty securitisation or royalty loan) where the lawyer arranges or implements the financing → Item 4 (equity or debt financing) MAY apply",
      "Lawyer holds upfront licence fee in trust account → Item 3 MAY apply",
    ],
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Licensing fees used to move illicit funds across borders under guise of royalty payments", level: "medium" },
      { risk: "Related-party licensing at non-arm's-length rates to shift value to an offshore entity", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LEX_AML_TABLE6],
  },
  {
    id: "ip-holding-company",
    categoryId: "intellectual-property",
    label: "Establishing an IP holding company or IP holding trust",
    description:
      "Advising and implementing the creation of a dedicated IP holding company (typically a Pty Ltd) or IP holding trust (bare trust, unit trust, or discretionary trust) into which a client's IP assets are transferred or assigned. This structure is commonly used for tax planning, group restructuring, asset protection, or to facilitate licensing arrangements. The lawyer typically drafts the corporate or trust documents, files with ASIC or IP Australia, and arranges the IP assignment.",
    verdict: "designated",
    verdictSummary: "Designated — creating an IP holding company engages Item 6 (assisting in the creation or restructuring of a body corporate). Creating an IP holding trust engages Item 6 (creation of a legal arrangement). The subsequent IP assignment into the structure may also engage Item 2 (transfer of a body corporate/legal arrangement) if the holding entity is transferred, or Item 3 (holding funds).",
    customerForCDD: "The beneficial owner(s) of the IP holding structure (applying the 25%+ beneficial ownership threshold). Identifying the ultimate beneficial owner of complex IP holding arrangements is a key CDD requirement.",
    whyCaptured:
      "Item 6 expressly captures assisting in 'the planning or execution of the creation or restructuring' of a body corporate or legal arrangement. Drafting the company constitution, trust deed, or partnership agreement and taking steps to incorporate or settle the structure directly advances this outcome. AUSTRAC guidance and the LSJ Table 6 examples place 'drafting and reviewing trust deeds in relation to the creation or restructure of a trust' firmly in the 'LIKELY IN' column.",
    tableReference: "s 6(5B) Items 2, 3 and 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "IP holding structure used to obscure beneficial ownership of valuable IP from regulators and creditors", level: "high" },
      { risk: "IP transferred to an offshore holding company in a low-transparency jurisdiction to conceal illicit origin of IP value", level: "high" },
      { risk: "Complex IP holding trust used to layer ownership and frustrate beneficial ownership identification", level: "high" },
      { risk: "Related-party IP assignment into holding company at undervalue to extract value from an insolvent entity", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LAWSOCIETY_IMPL_GUIDE, STEP_PAPER, LEX_AML_TABLE6],
  },
  {
    id: "ip-business-sale",
    categoryId: "intellectual-property",
    label: "IP as part of a business sale or asset acquisition",
    description:
      "Acting on a business sale or asset purchase where intellectual property (brand, patents, software, trade secrets, customer lists) forms a material part of the consideration. IP is commonly bundled with goodwill, contracts, and physical assets in a going-concern sale. The transaction may be structured as an asset sale or a share sale of the entity that owns the IP.",
    verdict: "designated",
    verdictSummary: "Designated — a business sale involving IP is captured under Item 2 (assisting in the transfer of a body corporate or legal arrangement, e.g. share sale) or Item 2 (asset sale transferring a going concern that is a legal arrangement). The IP component does not change the character of the transaction; the overall business transfer is designated.",
    customerForCDD: "Seller and buyer (and any holding entities). Source of funds for the acquisition price is a key CDD focus where IP assets carry significant value.",
    whyCaptured:
      "A share sale transfers ownership of a body corporate — squarely within Item 2. An asset sale of a going concern (including its IP, goodwill and contracts) is also likely within Item 2 as the sale of a 'legal arrangement' or at minimum captures Item 3 (holding purchase funds in trust). The IP itself is not what triggers the designation; it is the vehicle through which the business (the body corporate or arrangement) is transferred.",
    tableReference: "s 6(5B) Items 2, 3 and 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "IP value inflated on the balance sheet to increase apparent business worth and launder illicit purchase funds", level: "high" },
      { risk: "Business acquired primarily for its IP by an entity with opaque beneficial ownership", level: "high" },
      { risk: "IP-heavy business used as a vehicle for value transfer between related criminal entities", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LAWSOCIETY_IMPL_GUIDE, LEX_AML_TABLE6],
  },
  {
    id: "ip-dispute-litigation",
    categoryId: "intellectual-property",
    label: "IP litigation and dispute resolution (infringement, opposition, cancellation)",
    description:
      "Acting for a party in IP litigation before the Federal Court, IP Australia (opposition proceedings), the Copyright Tribunal, or an arbitration. This includes patent infringement proceedings, trade mark opposition and cancellation, copyright infringement, passing off, and breach of confidentiality. Also includes negotiating and documenting deed of settlement or consent orders to resolve IP disputes.",
    verdict: "not-designated",
    verdictSummary: "Not designated in most cases — IP litigation is dispute resolution, which AUSTRAC has confirmed generally falls outside Table 6 as it concerns determining legal questions about past events rather than implementing future transactions. However, implementing a settlement that involves a transfer of IP as part of a broader body corporate or entity restructure may engage Items 2 or 6.",
    conditions: [
      "Representing a party in IP infringement proceedings, opposition or cancellation → NOT DESIGNATED",
      "Negotiating and documenting a deed of settlement (cash only, no asset transfer) → NOT DESIGNATED",
      "Implementing a settlement that requires the assignment of IP rights as the settlement consideration → see 'Assigning IP rights' entry — likely NOT DESIGNATED unless IP is in a body corporate",
      "Implementing a settlement that includes a transfer of shares or restructuring of an entity that holds IP → Item 2 or 6 MAY apply",
      "Court-ordered transfer of IP (including under consent orders) → court order exclusion under s 6(5D) applies → NOT DESIGNATED",
    ],
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Manufactured IP dispute used as a pretext for transferring value between controlled entities", level: "low" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, EASYAML_COURT_ORDERS, LEX_AML_TABLE6],
  },
  {
    id: "ip-royalty-financing",
    categoryId: "intellectual-property",
    label: "Royalty-backed financing or IP securitisation",
    description:
      "Assisting a client to raise debt or equity financing secured against or funded by IP royalty streams. This includes royalty loan agreements, IP securitisation structures (where royalty-generating IP is transferred to a special purpose vehicle that issues notes), revenue-based financing arrangements, and venture debt secured over patents or software. The lawyer may draft the financing documents, establish the SPV, or coordinate drawdowns.",
    verdict: "designated",
    verdictSummary: "Designated — arranging or implementing IP royalty financing directly engages Item 4 (assisting in organising, planning, or executing a transaction for equity or debt financing relating to a body corporate or legal arrangement). Establishing an SPV to hold the IP also engages Item 6.",
    customerForCDD: "The borrower/issuer (and its ultimate beneficial owners). The lender/noteholder if the lawyer acts for both parties. The SPV and its beneficial owners if a securitisation structure is used.",
    whyCaptured:
      "Item 4 captures 'assisting in organising, planning, or executing a transaction for equity or debt financing relating to a body corporate or legal arrangement'. Drafting a royalty loan agreement or coordinating drawdowns on a royalty-backed facility directly advances a debt financing transaction. If an SPV is created to hold the IP, Item 6 is also engaged. The LSJ Table 6 examples place 'drafting and implementing loan documents for a company' and 'coordinating drawdowns on a financing arrangement' firmly in the 'LIKELY IN' column.",
    tableReference: "s 6(5B) Items 4 and 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "IP royalty stream used as cover for money laundering via inflated royalty payments from a controlled entity", level: "high" },
      { risk: "SPV established in a secrecy jurisdiction to hold IP and issue notes to anonymous beneficial owners", level: "high" },
      { risk: "IP securitisation used to convert illicitly-derived IP value into apparently legitimate investment securities", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LEX_AML_TABLE6],
  },
  {
    id: "ip-franchising",
    categoryId: "intellectual-property",
    label: "Franchising arrangements",
    description:
      "Advising and preparing franchise agreements under which the franchisor grants the franchisee a licence to use the franchisor's IP (trade marks, systems, know-how) in exchange for fees and royalties. Under the Franchising Code of Conduct (Cth), franchise agreements must comply with specific disclosure requirements. The lawyer may act for the franchisor or franchisee and may also establish the franchise structure, prepare the Disclosure Document, or advise on the Franchising Code.",
    verdict: "depends",
    verdictSummary: "Depends — drafting a franchise agreement (a licence of IP) is generally not designated on its own. However, if the lawyer establishes the franchise structure (e.g. creates the franchisor entity, a master franchise trust, or a sublicensing vehicle), Item 6 applies. If the lawyer assists a franchisee to acquire a franchise business (effectively acquiring a going concern), Item 2 may apply.",
    conditions: [
      "Advising on and drafting a standard franchise agreement (licence of trade marks and know-how) → NOT DESIGNATED",
      "Establishing the franchisor entity or a master franchise trust from which licences will be granted → Item 6 APPLIES → DESIGNATED",
      "Acting for a buyer acquiring an existing franchisee business (franchise resale, with goodwill) → Item 2 MAY APPLY → likely DESIGNATED",
      "Holding franchise entry fees or security bonds in trust account → Item 3 MAY APPLY",
    ],
    tableReference: "s 6(5B) Items 2, 3 and 6",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Franchise fees used to layer illicit cash receipts through an apparently legitimate business", level: "medium" },
      { risk: "Franchise network established as a cash-intensive front business to launder criminal proceeds", level: "high" },
      { risk: "Complex master franchise trust structure used to conceal beneficial ownership across a franchise network", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LSJ_TABLE6, LEX_AML_TABLE6],
  },
  {
    id: "ip-registration",
    categoryId: "intellectual-property",
    label: "Trade mark or patent registration and prosecution",
    description:
      "Filing and prosecuting trade mark applications with IP Australia under the Trade Marks Act 1995 (Cth), or patent applications under the Patents Act 1990 (Cth). This includes responding to examination reports, filing divisional applications, managing renewals, and advising on registrability. IP registration is administrative and procedural — it creates new rights rather than transferring existing ones.",
    verdict: "not-designated",
    verdictSummary: "Not designated — registration and prosecution of IP rights before IP Australia is an administrative/regulatory process. It creates new intellectual property rights rather than transferring existing ones or restructuring a body corporate or legal arrangement. No Table 6 item is engaged.",
    whyExcluded:
      "Table 6 is concerned with transactions that move value (real estate, entities, money, financing) or create corporate/trust structures. Filing a trade mark or patent application is a regulatory process before a government authority — it is not a commercial transaction of the type Table 6 regulates. Obtaining IP rights does not involve 'buying, selling or transferring' a body corporate or legal arrangement, and IP Australia is itself a government body (removing any insurer/government-body relevance to Item 3).",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LEX_AML_TABLE6],
  },

  // ── PERSONAL INJURIES ────────────────────────────────────────────────────
  {
    id: "pi-litigation-advice",
    categoryId: "personal-injuries",
    label: "Personal injury litigation and legal advice (general)",
    description:
      "Acting for a claimant or defendant in personal injury proceedings — including motor vehicle accidents, public liability, medical negligence, and workplace injury claims — and providing legal advice in connection with those claims. Litigation and dispute resolution services are generally outside Table 6. Pure advice on the legal merits of a PI claim does not constitute a designated service.",
    verdict: "not-designated",
    verdictSummary: "Not designated — PI litigation and legal advice relating to a dispute about an existing claim are outside Table 6 (litigation exclusion). AUSTRAC has confirmed that court proceedings relating to matters that have already occurred are not Table 6 transactions.",
    whyExcluded:
      "AUSTRAC confirms that litigation typically concerns determining legal questions about past events, not implementing future transactions. Providing legal advice or representing a client in PI proceedings does not involve 'selling, buying or transferring' an asset within the meaning of Table 6. The item 3 exclusion in s 6(5C) also excludes receiving funds from insurers, government, courts or tribunals — which covers the vast majority of PI settlement and judgment payments.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, EASYAML_PI, LEX_AML_TABLE6],
  },
  {
    id: "pi-ctp-settlement-trust",
    categoryId: "personal-injuries",
    label: "CTP (compulsory third party) settlement funds received in trust",
    description:
      "Acting for a claimant in a compulsory third party (CTP) motor vehicle accident claim where the insurer pays a negotiated settlement amount into the lawyer's trust account for disbursement to the client. In NSW, CTP claims are managed under the Motor Accident Injuries Act 2017 (NSW) through the State Insurance Regulatory Authority (SIRA). The insurer (e.g. NRMA, QBE, GIO) is a licensed authorised insurer under the scheme.",
    verdict: "not-designated",
    verdictSummary: "Not designated — CTP settlement payments originate from a licensed authorised insurer. The Item 3 exclusion in s 6(5C) expressly excludes receiving funds from an insurer. The lawyer is receiving an insurer payment on behalf of the client, not implementing a Table 6 transaction.",
    whyExcluded:
      "Section 6(5C)/(5D) of the AML/CTF Act 2006 (as amended) excludes from Item 3 any payment received from an insurer, government body, court, or tribunal. CTP payments come from a licensed insurer under a statutory compensation scheme. Holding those funds in a trust account pending disbursement to the client is incidental to receiving an excluded payment and does not independently engage Item 3.",
    tableReference: "s 6(5C)–(5D) — Item 3 exclusions",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Inflated settlement amount negotiated with insurer to introduce illicit surplus into trust account", level: "low" },
      { risk: "Third-party directing disbursement of proceeds — potential proceeds-of-crime risk", level: "low" },
    ],
    sources: [AML_CTF_ACT, EASYAML_PI, AUSTRAC_TABLE6, LSJ_TRUSTS],
  },
  {
    id: "pi-workers-comp-statutory",
    categoryId: "personal-injuries",
    label: "Workers' compensation statutory scheme payments (icare / SIRA / Comcare / WorkCover)",
    description:
      "Acting for an injured worker receiving weekly compensation, medical expenses, or a lump sum under the Workers Compensation Act 1987 (NSW) or the Safety, Rehabilitation and Compensation Act 1988 (Cth). Statutory payments are made directly by icare (NSW), SIRA, Comcare, or an approved self-insurer. Many payments go directly to the worker or service provider rather than through the lawyer's trust account.",
    verdict: "not-designated",
    verdictSummary: "Not designated — statutory workers' compensation payments are made by or under the authority of a government statutory scheme (insurer/government body). Item 3 exclusion applies: payments from insurers and government bodies are expressly excluded from Item 3.",
    whyExcluded:
      "icare and similar statutory insurers are authorised under government legislation to manage statutory compensation schemes. Payments they make are 'insurer payments' or 'government payments' within the s 6(5C)/(5D) exclusion. The legal work involved is dispute resolution or advocacy, not a Table 6 designated service. If a lump sum redemption is paid via trust account, the Item 3 insurer-payment exclusion still applies.",
    tableReference: "s 6(5C)–(5D) — Item 3 exclusions",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AML_CTF_ACT, EASYAML_PI, AUSTRAC_TABLE6],
  },
  {
    id: "pi-negotiated-settlement-non-insurer",
    categoryId: "personal-injuries",
    label: "Negotiated lump-sum settlement from a non-insurer defendant (e.g. occupier, employer, individual)",
    description:
      "Acting for a PI claimant in a negotiated settlement where the defendant is not an insurer or government body (e.g. an uninsured occupier, an employer paying out of operating funds, or an individual). The settlement sum is paid into the lawyer's trust account and disbursed to the client. This situation differs from CTP or workers' comp because the payer is not an insurer subject to a statutory scheme.",
    verdict: "depends",
    verdictSummary: "Depends — if the defendant is an insurer or government body, Item 3 exclusion applies and the service is not designated. If the payer is a non-insurer private party, holding and disbursing settlement funds via trust account may engage Item 3 (holding money on behalf of another person in the course of a legal transaction) and no exclusion clearly applies.",
    conditions: [
      "Settlement paid by a licensed insurer or government body → Item 3 exclusion applies → NOT DESIGNATED",
      "Settlement paid directly by a non-insurer private party defendant and held in trust account → Item 3 MAY be engaged → FURTHER ANALYSIS REQUIRED",
      "Settlement involves transfer of real estate (e.g. defendant transfers property in satisfaction of claim) → Item 1 applies → DESIGNATED",
      "Court judgment (not negotiated settlement) directing payment → Item 3 exclusion for court/tribunal order payments applies → NOT DESIGNATED",
    ],
    tableReference: "s 6(5B) Item 3; s 6(5C)–(5D) exclusions",
    customerForCDD: "The plaintiff claimant (and potentially the defendant if a property transfer is involved)",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Proceeds of crime laundered via an inflated settlement paid by a controlled third party", level: "medium" },
      { risk: "Settlement used to transfer illicit property under guise of injury compensation", level: "medium" },
      { risk: "Third party directing settlement disbursement as a layering mechanism", level: "medium" },
    ],
    sources: [AML_CTF_ACT, EASYAML_PI, AUSTRAC_TABLE6, LSJ_TRUSTS],
  },
  {
    id: "pi-court-awarded-damages",
    categoryId: "personal-injuries",
    label: "Court-awarded damages paid pursuant to a judgment or court order",
    description:
      "Acting for a PI claimant where the court awards damages and orders the defendant (or its insurer) to pay a specified sum. The payment is made pursuant to the court order — either directly to the claimant or via the lawyer's trust account. Section 6(5C)/(5D) of the AML/CTF Act expressly excludes from Item 3 payments made under a court or tribunal order.",
    verdict: "not-designated",
    verdictSummary: "Not designated — payment pursuant to a court or tribunal order is expressly excluded from Item 3 by s 6(5C)/(5D). The court order is the operative instrument, not a transaction arranged or implemented by the lawyer.",
    whyExcluded:
      "Section 6(5D) of the AML/CTF Act excludes from Item 3 any payment made under the order of a court or tribunal. A judgment debt payment in a PI matter is squarely within this exclusion. The easyAML guidance on court-ordered transfers confirms this exclusion applies broadly to payments ordered by a court, not merely transfers of real property.",
    tableReference: "s 6(5C)–(5D) — Item 3 exclusions",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AML_CTF_ACT, EASYAML_PI, EASYAML_COURT_ORDERS, AUSTRAC_TABLE6],
  },
  {
    id: "pi-structured-settlement",
    categoryId: "personal-injuries",
    label: "Structured settlement / annuity arrangement",
    description:
      "Assisting a PI claimant to implement a structured settlement under the Civil Liability (Structured Settlements) Act 2018 (NSW) or equivalent, where damages are paid over time as a series of periodic payments, often funded by an annuity purchased by the defendant's insurer. The lawyer may be involved in advising, negotiating the structure, or facilitating the purchase of the annuity.",
    verdict: "depends",
    verdictSummary: "Depends — advice on, and negotiation of, a structured settlement is litigation-adjacent and not designated. However, if the lawyer takes active steps to arrange the financing of the annuity (e.g. facilitating the insurer's purchase of the annuity product), Item 4 (financing arrangements) may be engaged.",
    conditions: [
      "Advising on and negotiating the terms of a structured settlement → NOT DESIGNATED (litigation/advisory)",
      "Implementing a structured settlement where the annuity is purchased directly by the defendant's insurer without lawyer involvement in the financing → NOT DESIGNATED (insurer payment exclusion)",
      "Lawyer takes active steps to arrange or facilitate the financing of the annuity product on behalf of the claimant → Item 4 (financing) MAY be engaged → FURTHER ANALYSIS REQUIRED",
    ],
    tableReference: "s 6(5B) Items 3 and 4",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Structured settlement used to introduce illicit funds via inflated periodic payments over time", level: "low" },
    ],
    sources: [AML_CTF_ACT, AUSTRAC_TABLE6, EASYAML_PI, LEX_AML_TABLE6],
  },
  {
    id: "pi-medical-negligence",
    categoryId: "personal-injuries",
    label: "Medical negligence claim",
    description:
      "Acting for a patient-plaintiff in a medical negligence or clinical negligence claim against a healthcare provider, hospital, or their insurer (typically indemnified by MDA National, Avant, or Medical Defence Australia). Settlement payments are typically made by the defendant's medical indemnity insurer. Claims may be resolved by negotiated settlement or judgment.",
    verdict: "not-designated",
    verdictSummary: "Not designated — medical negligence claims are litigation/dispute resolution services. Settlement payments from a medical indemnity insurer fall within the Item 3 insurer-payment exclusion (s 6(5C)/(5D)). Court-awarded damages are excluded by the court-order exclusion.",
    whyExcluded:
      "Medical negligence claims are quintessentially litigation — the lawyer is assisting a client to obtain compensation for past harm, not implementing a future transaction. Settlement payments come from a licensed medical defence insurer and are therefore within the s 6(5C)/(5D) insurer-payment exclusion. The legal work is not a Table 6 designated service.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AML_CTF_ACT, EASYAML_PI, AUSTRAC_TABLE6],
  },
  {
    id: "pi-class-action",
    categoryId: "personal-injuries",
    label: "Class action / group proceeding (personal injury basis)",
    description:
      "Representing group members in a class action or representative proceeding under Part IVA of the Federal Court of Australia Act 1976 (Cth) or equivalent state legislation, where the underlying claims are personal injury claims (e.g. mass tort, pharmaceutical, asbestos). Settlement distributions are typically paid by the defendant or its insurer to a settlement fund administered under court supervision.",
    verdict: "not-designated",
    verdictSummary: "Not designated as to the personal injury litigation element — class action proceedings are litigation/dispute resolution. Settlement distributions from an insurer are within the Item 3 insurer-payment exclusion. However, if the settlement involves transfer of real property or a body corporate, Items 1 or 2 may separately apply.",
    conditions: [
      "Personal injury class action litigation and advice → NOT DESIGNATED",
      "Court-approved class action settlement distributed from a court-supervised settlement fund → NOT DESIGNATED (court order exclusion)",
      "Settlement fund managed by litigation funder with lawyer involvement in structuring the funding arrangement → Item 4 MAY be engaged",
      "Settlement that involves a transfer of real estate or a body corporate to class members → Items 1 or 2 MAY apply",
    ],
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Class action used as a vehicle to legitimise illicitly sourced settlement funds", level: "low" },
    ],
    sources: [AML_CTF_ACT, AUSTRAC_TABLE6, EASYAML_PI, LEX_AML_TABLE6],
  },
  {
    id: "pi-centrelink-medicare-repayment",
    categoryId: "personal-injuries",
    label: "Centrelink / Medicare / Department of Veterans' Affairs repayment from settlement proceeds",
    description:
      "Managing the repayment to Services Australia (Centrelink/Medicare), the Department of Veterans' Affairs, or a private health insurer out of a PI settlement sum. Under the Health and Other Services (Compensation) Act 1995 (Cth), a judgment or settlement that includes compensation for medical expenses triggers a Medicare repayment obligation. The lawyer typically deducts the charge notice amount from settlement proceeds and remits it before paying the balance to the client.",
    verdict: "not-designated",
    verdictSummary: "Not designated — repayment to a government agency (Centrelink/Medicare/DVA) from settlement proceeds is an administrative obligation incidental to the settlement. It is not a separate Table 6 transaction; it is a payment to a government body from funds already held in trust, which is excluded from Item 3.",
    whyExcluded:
      "The Medicare/Centrelink repayment is a statutory obligation — the lawyer is remitting funds to a government agency as required by law. This is excluded from Item 3 (government payment exclusion under s 6(5C)/(5D)). The underlying settlement itself is also excluded (insurer/court order exclusion). No independent Table 6 transaction is constituted.",
    tableReference: "s 6(5C)–(5D) — Item 3 exclusions",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AML_CTF_ACT, EASYAML_PI, AUSTRAC_TABLE6],
  },
  {
    id: "pi-property-settlement-from-pi-proceeds",
    categoryId: "personal-injuries",
    label: "Using PI settlement proceeds to purchase real estate",
    description:
      "Assisting a PI claimant to use their settlement proceeds to purchase real estate — for example, a client who receives a lump sum and immediately instructs the same lawyer to purchase a property. The PI matter itself is concluded; the conveyancing is a separate and subsequent retainer. Alternatively, the lawyer may be instructed to use trust-held settlement funds to complete an existing property purchase.",
    verdict: "designated",
    verdictSummary: "Designated — the conveyancing/real estate purchase transaction is a separate Item 1 designated service regardless of the source of funds. The fact that the purchase is funded from PI settlement proceeds does not alter the character of the real estate transaction.",
    customerForCDD: "The PI claimant/property purchaser (as client). Note that PI settlement proceeds may attract scrutiny as to source of funds if the amount is unusually large relative to the injury claimed.",
    whyCaptured:
      "Item 1 designates any service involving assisting in the planning or execution of a transaction to buy, sell or transfer real estate. When the PI lawyer also acts on the property purchase, they are providing a distinct Item 1 designated service. The source of the purchase funds (PI settlement) is relevant to customer due diligence and enhanced due diligence if the amount is significant.",
    tableReference: "s 6(5B) Item 1",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Inflated PI settlement used to 'clean' illicit funds and then invest in real property", level: "high" },
      { risk: "Third party directing use of settlement proceeds for property purchase — potential beneficial ownership risk", level: "high" },
      { risk: "Client unable to explain source of additional funds topping up the settlement amount", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, EASYAML_PI, LEX_AML_TABLE6],
  },
  {
    id: "pi-litigation-funding-arrangement",
    categoryId: "personal-injuries",
    label: "Arranging a litigation funding agreement for a PI claim",
    description:
      "Assisting a PI claimant to enter into a litigation funding agreement with a third-party litigation funder (e.g. IMF Bentham, Litigation Capital Management, or a private funder). The funder provides financing in exchange for a share of any judgment or settlement. The lawyer may introduce the funder, advise on the funding terms, or draft the funding deed.",
    verdict: "depends",
    verdictSummary: "Depends — advising on the terms of a litigation funding agreement is advisory/litigation-adjacent and arguably not designated. However, if the lawyer takes steps to arrange the financing (e.g. actively facilitating or structuring the funding transaction), Item 4 (financing arrangements) may be engaged.",
    conditions: [
      "Advising the client on the legal implications of a litigation funding agreement only → NOT DESIGNATED (advisory)",
      "Introducing the client to a funder and advising on terms without arranging the funding → likely NOT DESIGNATED",
      "Actively structuring or facilitating the litigation funding arrangement, negotiating terms on behalf of the client with the funder → Item 4 (financing) MAY be engaged → FURTHER ANALYSIS REQUIRED",
    ],
    tableReference: "s 6(5B) Item 4",
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Litigation funder is a vehicle for introducing illicit funds disguised as legitimate investment in litigation outcomes", level: "medium" },
      { risk: "Funder controls case strategy to ensure settlement reaches a pre-determined amount for money laundering purposes", level: "low" },
    ],
    sources: [AML_CTF_ACT, AUSTRAC_TABLE6, EASYAML_PI, LEX_AML_TABLE6],
  },

  // ── LITIGATION & DISPUTE RESOLUTION ──────────────────────────────────────
  {
    id: "lit-court-proceedings",
    categoryId: "litigation",
    label: "Representing a client in court or tribunal proceedings",
    description:
      "Acting for a client in civil, criminal or administrative court or tribunal proceedings. Litigation is generally excluded from Table 6 — AUSTRAC has confirmed that court proceedings determine legal questions about past events rather than implementing future transactions.",
    verdict: "not-designated",
    verdictSummary: "Not designated — legal dispute resolution services are outside Table 6.",
    whyExcluded:
      "AUSTRAC has confirmed that litigation typically relates to determining legal questions on matters that have already occurred, not matters in progress or future transactions. Court proceedings are not transactions to 'sell, buy or transfer' anything within the meaning of Table 6.",
    professions: ["Lawyers"],
    mlRisks: [],
    sources: [AUSTRAC_TABLE6, LEX_AML_TABLE6],
  },
  {
    id: "lit-settlement-with-transfer",
    categoryId: "litigation",
    label: "Implementing a settlement that involves transfer of property or business",
    description:
      "Acting on a negotiated settlement (not a court order) that requires one party to transfer real estate or business assets to another. The key distinction is between a court-ordered transfer (excluded) and a negotiated settlement (potentially designated if it involves implementing a Table 6 transaction).",
    verdict: "depends",
    verdictSummary: "Depends — the litigation itself is not designated, but implementing a settlement involving a property or business transfer may engage Items 1 or 2.",
    conditions: [
      "The litigation and dispute resolution work itself is NOT designated",
      "If the settlement involves a transfer of real estate and you take steps to implement that transfer → Item 1 (real estate transaction) may apply",
      "If the settlement involves a transfer of a body corporate or legal arrangement → Item 2 may apply",
      "A court-ordered transfer as part of judgment (not a negotiated settlement) is excluded from Items 1 and 2",
    ],
    professions: ["Lawyers"],
    mlRisks: [
      { risk: "Settlement used to disguise illicit value transfer as legitimate resolution", level: "medium" },
    ],
    sources: [AUSTRAC_TABLE6, AML_CTF_ACT, LEX_AML_TABLE6, HALL_WILCOX],
  },
];

export function getTransactionById(id: string): TransactionType | undefined {
  return transactions.find((t) => t.id === id);
}

export function getTransactionsByCategory(categoryId: string): TransactionType[] {
  return transactions.filter((t) => t.categoryId === categoryId);
}
