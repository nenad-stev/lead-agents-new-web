import type { SalesTool } from "@/types/sales-tool";

export const botmindsTool: SalesTool = {
  slug: "botminds",
  name: "Botminds",
  logo: "/images/sales-tools/botminds.png",
  tagline: {
    sr: "AI document intelligence — ekstrakcija podataka sa web-a i dokumenata za GTM research",
    en: "AI document intelligence — extract data from web and documents for GTM research",
  },
  categoryId: "prospecting",
  category: { sr: "Prospecting", en: "Prospecting" },
  categories: {
    sr: [
      "Agentic document extraction",
      "Web data capture",
      "AI workflow-i",
      "Competitive intelligence",
      "Lead enrichment iz dokumenata",
      "Enterprise automation",
    ],
    en: [
      "Agentic document extraction",
      "Web data capture",
      "AI workflows",
      "Competitive intelligence",
      "Lead enrichment from documents",
      "Enterprise automation",
    ],
  },
  websiteUrl: "https://www.botminds.ai/",
  recommended: false,
  rating: { g2: 4.5, g2Reviews: 30 },
  overview: {
    sr: "Botminds automatizuje hvatanje i obradu podataka iz dokumenata i web izvora — PDF-ovi, ugovori, izveštaji, competitor sajtovi — pomoću AI engine-a i workflow-a za finance, legal, ops i sales research.",
    en: "Botminds automates capturing and processing data from documents and web sources — PDFs, contracts, reports, competitor sites — using AI engines and workflows for finance, legal, ops, and sales research.",
  },
  overviewExtended: {
    sr: "Enterprise pricing (demo obavezan) — nije self-serve SaaS kao Clay. U GTM stack-u: competitor monitoring, ekstrakcija firmografije iz javnih dokumenata, RFP analiza. Nije CRM ni sequencer — sloj za **unstructured data** pre nego što leadovi uđu u Clay/Apollo.",
    en: "Enterprise pricing (demo required) — not self-serve SaaS like Clay. In the GTM stack: competitor monitoring, firmographic extraction from public documents, RFP analysis. Not a CRM or sequencer — a layer for **unstructured data** before leads enter Clay/Apollo.",
  },
  idealFor: {
    sr: [
      "Enterprise sales & strategy timovi",
      "Competitive intelligence",
      "Legal & finance ops (cross-funkcionalno)",
      "Research-heavy outbound",
      "Kompanije sa velikim document volume-om",
    ],
    en: [
      "Enterprise sales & strategy teams",
      "Competitive intelligence",
      "Legal & finance ops (cross-functional)",
      "Research-heavy outbound",
      "Companies with high document volume",
    ],
  },
  keyFeatures: {
    sr: [
      "Agentic document extraction",
      "Autonomous decision workflows",
      "Web crawling & monitoring",
      "AI analytics dashboard",
      "Custom AI modeli po use case-u",
      "Trial preko sales-a",
    ],
    en: [
      "Agentic document extraction",
      "Autonomous decision workflows",
      "Web crawling & monitoring",
      "AI analytics dashboard",
      "Custom AI models per use case",
      "Trial via sales",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena", en: "Pricing" },
      value: { sr: "Custom", en: "Custom" },
    },
    {
      label: { sr: "Fokus", en: "Focus" },
      value: { sr: "Dokumenti + web", en: "Documents + web" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "Demo / trial", en: "Demo / trial" },
    },
    {
      label: { sr: "Segment", en: "Segment" },
      value: { sr: "SMB – Enterprise", en: "SMB – Enterprise" },
    },
  ],
  pricing: {
    startingPrice: { sr: "Custom — kontakt sales", en: "Custom — contact sales" },
    billing: {
      sr: "Enterprise · po volumenu",
      en: "Enterprise · by volume",
    },
    trial: {
      sr: "Trial dostupan (sales)",
      en: "Trial available (sales)",
    },
    plans: [
      {
        id: "starter",
        name: { sr: "Starter", en: "Starter" },
        price: { sr: "Custom", en: "Custom" },
        billingNote: {
          sr: "SMB pilot projekti",
          en: "SMB pilot projects",
        },
        highlights: {
          sr: [
            "Osnovna document extraction",
            "Web source monitoring",
            "Pre-built workflow šabloni",
            "Email support",
            "Idealno za pilot",
            "Cena preko sales-a",
          ],
          en: [
            "Basic document extraction",
            "Web source monitoring",
            "Pre-built workflow templates",
            "Email support",
            "Ideal for pilots",
            "Pricing via sales",
          ],
        },
      },
      {
        id: "professional",
        name: { sr: "Professional", en: "Professional" },
        price: { sr: "Custom", en: "Custom" },
        billingNote: {
          sr: "Mid-market · više izvora",
          en: "Mid-market · more sources",
        },
        highlights: {
          sr: [
            "Agentic extraction engine",
            "Autonomous workflows",
            "AI analytics",
            "API pristup",
            "Priority onboarding",
            "Sales & ops use case-ovi",
          ],
          en: [
            "Agentic extraction engine",
            "Autonomous workflows",
            "AI analytics",
            "API access",
            "Priority onboarding",
            "Sales & ops use cases",
          ],
        },
      },
      {
        id: "enterprise",
        name: { sr: "Enterprise", en: "Enterprise" },
        price: { sr: "Custom", en: "Custom" },
        billingNote: {
          sr: "Volume · compliance · SLA",
          en: "Volume · compliance · SLA",
        },
        highlights: {
          sr: [
            "Unlimited document volume",
            "Custom AI model training",
            "Dedicated CSM",
            "SOC2 / enterprise security",
            "On-prem / VPC opcije",
            "Global rollout",
          ],
          en: [
            "Unlimited document volume",
            "Custom AI model training",
            "Dedicated CSM",
            "SOC2 / enterprise security",
            "On-prem / VPC options",
            "Global rollout",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "Web monitoring", en: "Web monitoring" },
        values: {
          starter: { sr: "Osnovno", en: "Basic" },
          professional: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Unlimited", en: "Unlimited" },
        },
      },
      {
        feature: { sr: "Agentic workflows", en: "Agentic workflows" },
        values: {
          starter: { sr: "Šabloni", en: "Templates" },
          professional: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Custom", en: "Custom" },
        },
      },
      {
        feature: { sr: "API", en: "API" },
        values: {
          starter: { sr: "Ograničeno", en: "Limited" },
          professional: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Pun", en: "Full" },
        },
      },
      {
        feature: { sr: "Custom AI model", en: "Custom AI model" },
        values: {
          starter: { sr: "Ne", en: "No" },
          professional: { sr: "Delimično", en: "Partial" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Napredni", en: "Advanced" },
    description: {
      sr: "Demo → definišite document/web izvore → konfigurišite extraction workflow → validacija output-a → export u CRM/Clay preko API. Za GTM: competitor PDF-ovi, annual reports, tender dokumenti → strukturirani podaci za outbound.",
      en: "Demo → define document/web sources → configure extraction workflow → validate output → export to CRM/Clay via API. For GTM: competitor PDFs, annual reports, tender docs → structured data for outbound.",
    },
  },
  pros: {
    sr: [
      "Jak za unstructured data",
      "Web + document u jednom",
      "Agentic automation",
      "Enterprise-grade",
      "Dobar za competitive intel",
    ],
    en: [
      "Strong on unstructured data",
      "Web + documents in one",
      "Agentic automation",
      "Enterprise-grade",
      "Good for competitive intel",
    ],
  },
  cons: {
    sr: [
      "Nema javne cene",
      "Nije self-serve kao Clay",
      "Duži sales ciklus",
      "Overkill za mali outbound tim",
      "Nije zamena za contact database",
    ],
    en: [
      "No public pricing",
      "Not self-serve like Clay",
      "Longer sales cycle",
      "Overkill for small outbound teams",
      "Not a contact database replacement",
    ],
  },
  alternatives: [
    {
      slug: "clay",
      name: "Clay",
      description: {
        sr: "Prospecting + enrichment — self-serve.",
        en: "Prospecting + enrichment — self-serve.",
      },
      startingPrice: { sr: "od $149", en: "from $149" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "apify",
      name: "Apify",
      description: {
        sr: "Web scraping infrastruktura.",
        en: "Web scraping infrastructure.",
      },
      startingPrice: { sr: "od $49", en: "from $49" },
      trial: { sr: "Free tier", en: "Free tier" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "predictleads",
      name: "PredictLeads",
      description: {
        sr: "Intent signali iz web-a.",
        en: "Web intent signals.",
      },
      startingPrice: { sr: "Custom", en: "Custom" },
      trial: { sr: "Demo", en: "Demo" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "relevance-ai",
      name: "Relevance AI",
      description: {
        sr: "AI agenti za workflow.",
        en: "AI agents for workflows.",
      },
      startingPrice: { sr: "od $0", en: "from $0" },
      trial: { sr: "Free tier", en: "Free tier" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko košta Botminds?", en: "How much does Botminds cost?" },
      answer: {
        sr: "Javna cena nije na sajtu — kontaktirajte sales za quote. Tipično enterprise model po volumenu dokumenata i broju workflow-a.",
        en: "No public pricing on the site — contact sales for a quote. Typically enterprise pricing by document volume and workflow count.",
      },
    },
    {
      question: { sr: "Zašto izabrati Botminds?", en: "Why choose Botminds?" },
      answer: {
        sr: "Kada vam treba AI ekstrakcija iz PDF-ova, ugovora i web izvora — ne samo LinkedIn/email liste — za strategic sales i competitive research.",
        en: "When you need AI extraction from PDFs, contracts, and web sources — not just LinkedIn/email lists — for strategic sales and competitive research.",
      },
    },
    {
      question: { sr: "Botminds vs Clay?", en: "Botminds vs Clay?" },
      answer: {
        sr: "Clay = self-serve prospecting sa 50+ API izvora. Botminds = enterprise document/web intelligence sa agentic workflow-ima. Često se dopunjuju: Botminds za research, Clay za outbound execution.",
        en: "Clay = self-serve prospecting with 50+ API sources. Botminds = enterprise document/web intelligence with agentic workflows. Often complementary: Botminds for research, Clay for outbound execution.",
      },
    },
    {
      question: { sr: "Da li ima trial?", en: "Is there a trial?" },
      answer: {
        sr: "Da — trial dostupan preko sales kontakta (dužina nije javno navedena).",
        en: "Yes — trial available via sales contact (length not publicly stated).",
      },
    },
    {
      question: { sr: "Da li ima API?", en: "Does it have an API?" },
      answer: {
        sr: "Da — API na Professional+ za export ekstrahovanih podataka u CRM, data warehouse ili Clay/n8n workflow.",
        en: "Yes — API on Professional+ to export extracted data to CRM, data warehouse, or Clay/n8n workflows.",
      },
    },
  ],
  integrations: {
    sr: [
      "API",
      "Zapier",
      "Salesforce",
      "SharePoint",
      "Google Drive",
      "Custom web sources",
      "Export CSV/JSON",
    ],
    en: [
      "API",
      "Zapier",
      "Salesforce",
      "SharePoint",
      "Google Drive",
      "Custom web sources",
      "Export CSV/JSON",
    ],
  },
};
