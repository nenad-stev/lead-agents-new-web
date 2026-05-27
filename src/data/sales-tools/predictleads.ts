import type { SalesTool } from "@/types/sales-tool";

export const predictleadsTool: SalesTool = {
  slug: "predictleads",
  name: "PredictLeads",
  logo: "/images/sales-tools/predictleads.png",
  tagline: {
    sr: "Company intelligence, signali, technographics i intent preko API-ja",
    en: "Company intelligence, signals, technographics, and intent via API",
  },
  categoryId: "prospecting",
  category: { sr: "Prospecting", en: "Prospecting" },
  categories: {
    sr: [
      "Intent signali",
      "Technographics",
      "Job openings",
      "News & financing events",
      "Company discovery",
      "API, webhooks & MCP",
    ],
    en: [
      "Intent signals",
      "Technographics",
      "Job openings",
      "News & financing events",
      "Company discovery",
      "API, webhooks & MCP",
    ],
  },
  websiteUrl: "https://predictleads.com/",
  recommended: true,
  rating: { g2: 4.6, g2Reviews: 95 },
  overview: {
    sr: "PredictLeads je B2B company intelligence sloj: strukturirani podaci o kompanijama, vestima, finansiranjima, job posting-ima i technographics, preko REST API-ja, webhook-ova, flat file exporta i MCP servera za AI agente.",
    en: "PredictLeads is a B2B company intelligence layer: structured data on companies, news, funding, job postings, and technographics, via REST API, webhooks, flat-file exports, and an MCP server for AI agents.",
  },
  overviewExtended: {
    sr: "100 besplatnih API kredita mesečno. Većina poziva = 1 kredit (do 1.000 zapisa po odgovoru). Pay-as-you-go od $40/mes minimum ($0.04/kredit), sa volumenom do $0.002. Follow kompanije = 1 kredit/mes po firmi. Enterprise: puni flat file + webhook pristup od 2015. Idealno kao enrichment u Clay/CRM stack-u.",
    en: "100 free API credits per month. Most calls = 1 credit (up to 1,000 records per response). Pay-as-you-go from $40/mo minimum ($0.04/credit), down to $0.002 at volume. Follow a company = 1 credit/month per firm. Enterprise: full flat files + webhooks with history from 2015. Ideal as enrichment in a Clay/CRM stack.",
  },
  idealFor: {
    sr: [
      "GTM Ops i RevOps timovi",
      "Clay / enrichment workflow-i",
      "VC i investment scouting",
      "Agencije sa signal-based outbound-om",
      "AI agent produkti (MCP)",
    ],
    en: [
      "GTM Ops and RevOps teams",
      "Clay / enrichment workflows",
      "VC and investment scouting",
      "Agencies running signal-based outbound",
      "AI agent products (MCP)",
    ],
  },
  keyFeatures: {
    sr: [
      "100M+ kompanija, firmographics & hijerarhija",
      "News events (29 kategorija signala)",
      "Job openings sa opisima i platom",
      "Technographics (~83M kompanija)",
      "Similar companies & discovery API",
      "Follow + real-time webhooks",
    ],
    en: [
      "100M+ companies, firmographics & hierarchy",
      "News events (29 signal categories)",
      "Job openings with descriptions & salary",
      "Technographics (~83M companies)",
      "Similar companies & discovery API",
      "Follow + real-time webhooks",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "$0 (100 kredita)", en: "$0 (100 credits)" },
    },
    {
      label: { sr: "Naplata", en: "Billing" },
      value: { sr: "Pay-as-you-go krediti", en: "Pay-as-you-go credits" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "100 API poziva/mes besplatno", en: "100 free API calls/mo" },
    },
    {
      label: { sr: "Minimum (paid)", en: "Minimum (paid)" },
      value: { sr: "$40 / mesec", en: "$40 / month" },
    },
  ],
  pricing: {
    startingPrice: { sr: "od $0 (100 kredita)", en: "from $0 (100 credits)" },
    billing: {
      sr: "Krediti · tier cena · Enterprise custom",
      en: "Credits · tiered pricing · Enterprise custom",
    },
    trial: {
      sr: "100 kredita/mes bez kartice",
      en: "100 credits/mo, no card required",
    },
    plans: [
      {
        id: "free",
        name: { sr: "Free", en: "Free" },
        price: { sr: "$0", en: "$0" },
        billingNote: { sr: "100 API kredita / mesec", en: "100 API credits / month" },
        highlights: {
          sr: [
            "REST API pristup",
            "Do 1.000 rezultata po pozivu",
            "Test kvaliteta podataka",
            "Dokumentacija & signup",
            "Bez obaveze",
          ],
          en: [
            "REST API access",
            "Up to 1,000 results per call",
            "Evaluate data quality",
            "Docs & signup",
            "No commitment",
          ],
        },
      },
      {
        id: "payg",
        name: { sr: "Pay-as-you-go", en: "Pay-as-you-go" },
        price: { sr: "od $40 / mesec", en: "from $40 / month" },
        billingNote: {
          sr: "$0.04-$0.002 po kreditu · min $40",
          en: "$0.04-$0.002 per credit · $40 min",
        },
        highlights: {
          sr: [
            "101-5k kredita: $0.04",
            "5k-100k: $0.02-$0.01",
            "100k+: $0.004-$0.002",
            "Follow firme: 1 kredit/mes",
            "Priority / 24-7 support na višim tier-ima",
          ],
          en: [
            "101-5k credits: $0.04",
            "5k-100k: $0.02-$0.01",
            "100k+: $0.004-$0.002",
            "Follow companies: 1 credit/mo",
            "Priority / 24-7 support on higher tiers",
          ],
        },
      },
      {
        id: "enterprise",
        name: { sr: "Enterprise", en: "Enterprise" },
        price: { sr: "Custom", en: "Custom" },
        billingNote: { sr: "Flat files + webhooks", en: "Flat files + webhooks" },
        highlights: {
          sr: [
            "Puni dataset export (S3, GCS, SFTP)",
            "Istorija od 2015 · delta export",
            "Neograničeno praćenje kompanija",
            "Real-time webhook pristup",
            "24/7 support · money-back policy",
          ],
          en: [
            "Full dataset export (S3, GCS, SFTP)",
            "History from 2015 · delta exports",
            "Unlimited company tracking",
            "Real-time webhook access",
            "24/7 support · money-back policy",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "Mesečni krediti (start)", en: "Monthly credits (start)" },
        values: {
          free: { sr: "100", en: "100" },
          payg: { sr: "Po potrošnji", en: "By usage" },
          enterprise: { sr: "Custom", en: "Custom" },
        },
      },
      {
        feature: { sr: "Cena po kreditu", en: "Price per credit" },
        values: {
          free: { sr: "$0", en: "$0" },
          payg: { sr: "$0.04-$0.002", en: "$0.04-$0.002" },
          enterprise: { sr: "Custom", en: "Custom" },
        },
      },
      {
        feature: { sr: "API poziv (tipično)", en: "API call (typical)" },
        values: {
          free: { sr: "1 kredit", en: "1 credit" },
          payg: { sr: "1 kredit", en: "1 credit" },
          enterprise: { sr: "1 kredit", en: "1 credit" },
        },
      },
      {
        feature: { sr: "Webhooks", en: "Webhooks" },
        values: {
          free: { sr: "Ograničeno", en: "Limited" },
          payg: { sr: "Da (follow)", en: "Yes (follow)" },
          enterprise: { sr: "Pun pristup", en: "Full access" },
        },
      },
      {
        feature: { sr: "Flat file export", en: "Flat file export" },
        values: {
          free: { sr: "Ne", en: "No" },
          payg: { sr: "Na upit", en: "On request" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "MCP (AI agenti)", en: "MCP (AI agents)" },
        values: {
          free: { sr: "Da", en: "Yes" },
          payg: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Srednja do napredna", en: "Medium to advanced" },
    description: {
      sr: "Registracija, API ključ, prvi pozivi prema dokumentaciji (company, news, jobs, tech). Za GTM: follow liste kompanija + webhook u Clay/Zapier. Enterprise za bulk flat file sync u data warehouse ili CRM.",
      en: "Sign up, API key, first calls per docs (company, news, jobs, tech). For GTM: follow company lists + webhook into Clay/Zapier. Enterprise for bulk flat-file sync to a data warehouse or CRM.",
    },
  },
  pros: {
    sr: [
      "Jedan poziv = do 1.000 zapisa (1 kredit), efikasno",
      "Širok spektar signala (vesti, poslovi, tech stack)",
      "Odličan za Clay i AI agent (MCP)",
      "100 besplatnih kredita za evaluaciju",
      "Fokus na rastuće kompanije i ranije signale",
    ],
    en: [
      "One call = up to 1,000 records (1 credit), efficient",
      "Broad signal coverage (news, jobs, tech stack)",
      "Great for Clay and AI agents (MCP)",
      "100 free credits to evaluate",
      "Focused on growing companies and early signals",
    ],
  },
  cons: {
    sr: [
      "Nije UI-first prospecting alat - API/data layer",
      "Krediti ne prelaze u sledeći mesec",
      "Discovery endpoint naplaćuje po rezultatu",
      "Enterprise flat files zahtevaju sales razgovor",
      "Zahteva engineering ili Clay za operativni tim",
    ],
    en: [
      "Not a UI-first prospecting tool - API/data layer",
      "Credits do not roll over month to month",
      "Discovery endpoints bill per result",
      "Enterprise flat files require a sales conversation",
      "Needs engineering or Clay for ops teams",
    ],
  },
  alternatives: [
    {
      slug: "clay",
      name: "Clay",
      description: {
        sr: "Orkestrira PredictLeads u GTM tabeli.",
        en: "Orchestrates PredictLeads in GTM tables.",
      },
      startingPrice: { sr: "od $134", en: "from $134" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "apollo",
      name: "Apollo",
      description: {
        sr: "Baza kontakata + outreach u jednom.",
        en: "Contact database + outreach in one.",
      },
      startingPrice: { sr: "od $49", en: "from $49" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "rb2b",
      name: "RB2B",
      description: {
        sr: "Visitor ID na sajtu, drugačiji signal.",
        en: "Website visitor ID, different signal type.",
      },
      startingPrice: { sr: "od $0", en: "from $0" },
      trial: { sr: "150 rez. free", en: "150 res. free" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "apify",
      name: "Apify",
      description: {
        sr: "Custom scraping kada nema gotovog API-ja.",
        en: "Custom scraping when no ready-made API exists.",
      },
      startingPrice: { sr: "od $29", en: "from $29" },
      trial: { sr: "Free plan", en: "Free plan" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko košta PredictLeads?", en: "How much does PredictLeads cost?" },
      answer: {
        sr: "Prvih 100 API kredita mesečno je besplatno. Posle toga pay-as-you-go sa minimum $40/mes i $0.04 po kreditu (do $0.002 na velikom volumenu). Enterprise flat file + webhook je custom cena.",
        en: "The first 100 API credits per month are free. After that, pay-as-you-go with a $40/mo minimum and $0.04 per credit (down to $0.002 at high volume). Enterprise flat files + webhooks are custom-priced.",
      },
    },
    {
      question: { sr: "Kako rade API krediti?", en: "How do API credits work?" },
      answer: {
        sr: "Većina API poziva = 1 kredit bez obzira na broj zapisa u odgovoru (do 1.000). Discovery i Similar Companies se naplaćuju po vraćenoj kompaniji. Praćenje firme = 1 kredit mesečno.",
        en: "Most API calls = 1 credit regardless of records returned (up to 1,000). Discovery and Similar Companies bill per company returned. Following a company = 1 credit per month.",
      },
    },
    {
      question: { sr: "Da li ima besplatan plan?", en: "Is there a free plan?" },
      answer: {
        sr: "Da - 100 API kredita svakog meseca nakon registracije. Dovoljno za test integracije i kvaliteta podataka pre plaćene potrošnje.",
        en: "Yes - 100 API credits every month after signup. Enough to test integration and data quality before paid usage.",
      },
    },
    {
      question: { sr: "Zašto izabrati PredictLeads?", en: "Why choose PredictLeads?" },
      answer: {
        sr: "Kada vam trebaju strukturirani company signali (hiring, funding, tech adoption, partnerships) u API obliku, posebno za signal-based outbound i AI workflow-e, ne statična kontakt baza.",
        en: "When you need structured company signals (hiring, funding, tech adoption, partnerships) as API data, especially for signal-based outbound and AI workflows, not a static contact database.",
      },
    },
    {
      question: {
        sr: "Koji dataset-i su uključeni?",
        en: "Which datasets are included?",
      },
      answer: {
        sr: "Companies, News Events, Job Openings, Technographics, Financing Events, Products, Similar Companies i Key Customers (supply chain). Dostupno preko API-ja; puni istorijski export na Enterprise.",
        en: "Companies, News Events, Job Openings, Technographics, Financing Events, Products, Similar Companies, and Key Customers (supply chain). Available via API; full historical export on Enterprise.",
      },
    },
    {
      question: { sr: "Da li PredictLeads ima API?", en: "Does PredictLeads have an API?" },
      answer: {
        sr: "Da - REST API, webhooks za follow kompanije, flat file delivery (Enterprise) i MCP server za AI agente (Claude, ChatGPT, itd.).",
        en: "Yes - REST API, webhooks for followed companies, flat-file delivery (Enterprise), and an MCP server for AI agents (Claude, ChatGPT, etc.).",
      },
    },
    {
      question: {
        sr: "Kako se uklapa sa Clay-om?",
        en: "How does it fit with Clay?",
      },
      answer: {
        sr: "Clay često koristi PredictLeads kao izvor signala u kolonama, npr. nova zaposlenja, funding, promena tech stack-a, pre nego što pokrenete personalizovan outreach.",
        en: "Clay often uses PredictLeads as a signal source in columns, e.g. new hires, funding, tech stack changes, before launching personalized outreach.",
      },
    },
    {
      question: {
        sr: "Koje su alternative PredictLeads-u?",
        en: "What are PredictLeads alternatives?",
      },
      answer: {
        sr: "Često se poredi sa TheirStack, Coresignal, Bombora ili custom scraping (Apify). PredictLeads se ističe kombinacijom signala + MCP + pay-as-you-go bez seat naplate.",
        en: "Often compared to TheirStack, Coresignal, Bombora, or custom scraping (Apify). PredictLeads stands out with combined signals + MCP + pay-as-you-go without per-seat fees.",
      },
    },
  ],
  integrations: {
    sr: [
      "Clay",
      "HubSpot",
      "Zapier",
      "Make",
      "AWS S3 / GCS / SFTP",
      "MCP (AI agenti)",
      "REST API",
      "Webhooks",
    ],
    en: [
      "Clay",
      "HubSpot",
      "Zapier",
      "Make",
      "AWS S3 / GCS / SFTP",
      "MCP (AI agents)",
      "REST API",
      "Webhooks",
    ],
  },
};
