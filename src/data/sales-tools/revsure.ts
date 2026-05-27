import type { SalesTool } from "@/types/sales-tool";

export const revsureTool: SalesTool = {
  slug: "revsure",
  name: "RevSure",
  logo: "/images/sales-tools/revsure.png",
  tagline: {
    sr: "Full-funnel attribution - AI pipeline, ROI i GTM inteligencija",
    en: "Full-funnel attribution - AI pipeline, ROI, and GTM intelligence",
  },
  categoryId: "analytics",
  category: { sr: "Analitika", en: "Analytics" },
  categories: {
    sr: [
      "Multi-touch attribution",
      "Pipeline forecasting",
      "Campaign analytics",
      "Funnel health",
      "CRM/MAP writeback",
      "Agentic GTM (Reli)",
    ],
    en: [
      "Multi-touch attribution",
      "Pipeline forecasting",
      "Campaign analytics",
      "Funnel health",
      "CRM/MAP writeback",
      "Agentic GTM (Reli)",
    ],
  },
  websiteUrl: "https://www.revsure.ai/",
  recommended: true,
  rating: { g2: 4.7, g2Reviews: 85 },
  overview: {
    sr: "RevSure spaja marketing, sales i GTM podatke u jednu full-funnel sliku: multi-touch attribution, predikcija pipeline-a, prioritizacija leadova i AI preporuke gde da pomerite budžet, umesto fragmentiranih CRM + ads + spreadsheet izveštaja.",
    en: "RevSure unifies marketing, sales, and GTM data into one full-funnel view: multi-touch attribution, pipeline prediction, lead prioritization, and AI recommendations on where to shift budget, instead of fragmented CRM + ads + spreadsheet reports.",
  },
  overviewExtended: {
    sr: "Za mid-market i enterprise B2B timove sa MAP-om (50k+ kontakata). Early Adopter od **$4.000/mes** (50k MAP kontakata, 10 user-a). Growth **$6.000/mes** (150k, AI attribution, pipeline acceleration). Nije outreach alat, analytics i execution layer iznad HubSpot/Salesforce stack-a. Rezultati tipično za 5 nedelja posle integracije.",
    en: "For mid-market and enterprise B2B teams with a MAP (50k+ contacts). Early Adopter from **$4,000/mo** (50k MAP contacts, 10 users). Growth **$6,000/mo** (150k, AI attribution, pipeline acceleration). Not an outreach tool, analytics and execution layer on top of your HubSpot/Salesforce stack. Results typically within 5 weeks of integration.",
  },
  idealFor: {
    sr: [
      "VP Marketing & demand gen",
      "RevOps i GTM Operations",
      "CRO/CMO koji traže ROI dokaz",
      "B2B SaaS sa kompleksnim funnel-om",
      "Timovi sa više kanala (paid, outbound, events)",
    ],
    en: [
      "VP Marketing & demand gen",
      "RevOps and GTM Operations",
      "CRO/CMO needing ROI proof",
      "B2B SaaS with complex funnels",
      "Teams across many channels (paid, outbound, events)",
    ],
  },
  keyFeatures: {
    sr: [
      "Multi-touch attribution (W, J, time decay…)",
      "Unified funnel metrics & health",
      "AI campaign performance prediction",
      "Pipeline projections (do 4 kvartala)",
      "Propensity scoring & acceleration",
      "Reli Gen AI copilot za GTM",
    ],
    en: [
      "Multi-touch attribution (W, J, time decay…)",
      "Unified funnel metrics & health",
      "AI campaign performance prediction",
      "Pipeline projections (up to 4 quarters)",
      "Propensity scoring & acceleration",
      "Reli Gen AI copilot for GTM",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "$4.000 / mes", en: "$4,000 / mo" },
    },
    {
      label: { sr: "Naplata", en: "Billing" },
      value: { sr: "Po timu + MAP kontakti", en: "Per team + MAP contacts" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "Demo / pilot", en: "Demo / pilot" },
    },
    {
      label: { sr: "Idealno za", en: "Best for" },
      value: { sr: "Mid-market+", en: "Mid-market+" },
    },
  ],
  pricing: {
    startingPrice: { sr: "od $4.000 / mesec", en: "from $4,000 / month" },
    billing: {
      sr: "MAP kontakti · white-glove onboarding",
      en: "MAP contacts · white-glove onboarding",
    },
    trial: {
      sr: "Book demo, pilot po dogovoru",
      en: "Book demo, pilot on request",
    },
    plans: [
      {
        id: "early-adopter",
        name: { sr: "Early Adopter", en: "Early Adopter" },
        price: { sr: "$4.000 / mes", en: "$4,000 / mo" },
        billingNote: { sr: "50k MAP · 10 user-a", en: "50k MAP · 10 users" },
        highlights: {
          sr: [
            "Multi-touch attribution",
            "Unified funnel & pipeline health",
            "Campaign & channel analytics",
            "Lead lifecycle tracking",
            "White-glove deployment",
            "+50k kontakata: +$1.000/mes",
          ],
          en: [
            "Multi-touch attribution",
            "Unified funnel & pipeline health",
            "Campaign & channel analytics",
            "Lead lifecycle tracking",
            "White-glove deployment",
            "+50k contacts: +$1,000/mo",
          ],
        },
      },
      {
        id: "growth",
        name: { sr: "Growth", en: "Growth" },
        price: { sr: "$6.000 / mes", en: "$6,000 / mo" },
        billingNote: { sr: "150k MAP · 15 user-a", en: "150k MAP · 15 users" },
        highlights: {
          sr: [
            "AI multi-touch attribution",
            "Pipeline acceleration & propensity",
            "Booking readiness (4 kvartala)",
            "AI budget reallocation preporuke",
            "CRM/MAP writeback",
            "Bi-weekly enablement",
          ],
          en: [
            "AI multi-touch attribution",
            "Pipeline acceleration & propensity",
            "Booking readiness (4 quarters)",
            "AI budget reallocation recommendations",
            "CRM/MAP writeback",
            "Bi-weekly enablement",
          ],
        },
      },
      {
        id: "enterprise",
        name: { sr: "Enterprise", en: "Enterprise" },
        price: { sr: "Custom", en: "Custom" },
        billingNote: { sr: "500k+ MAP · unlimited users", en: "500k+ MAP · unlimited users" },
        highlights: {
          sr: [
            "Custom attribution modeli",
            "Više CRM/MAP instanci",
            "Data warehouse (BigQuery, Snowflake)",
            "Reverse ETL",
            "Dedicated CSM & QBR",
            "Security & compliance (SSO)",
          ],
          en: [
            "Custom attribution models",
            "Multiple CRM/MAP instances",
            "Data warehouse (BigQuery, Snowflake)",
            "Reverse ETL",
            "Dedicated CSM & QBR",
            "Security & compliance (SSO)",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "MAP kontakti", en: "MAP contacts" },
        values: {
          "early-adopter": { sr: "50k", en: "50k" },
          growth: { sr: "150k", en: "150k" },
          enterprise: { sr: "500k+", en: "500k+" },
        },
      },
      {
        feature: { sr: "User-i uključeni", en: "Users included" },
        values: {
          "early-adopter": { sr: "10", en: "10" },
          growth: { sr: "15", en: "15" },
          enterprise: { sr: "Unlimited", en: "Unlimited" },
        },
      },
      {
        feature: { sr: "AI attribution", en: "AI attribution" },
        values: {
          "early-adopter": { sr: "Ne", en: "No" },
          growth: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Custom", en: "Custom" },
        },
      },
      {
        feature: { sr: "Pipeline acceleration", en: "Pipeline acceleration" },
        values: {
          "early-adopter": { sr: "Osnovno", en: "Basic" },
          growth: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Data warehouse", en: "Data warehouse" },
        values: {
          "early-adopter": { sr: "Ne", en: "No" },
          growth: { sr: "Ne", en: "No" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Support", en: "Support" },
        values: {
          "early-adopter": { sr: "White-glove", en: "White-glove" },
          growth: { sr: "Bi-weekly", en: "Bi-weekly" },
          enterprise: { sr: "Dedicated CSM", en: "Dedicated CSM" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Napredna", en: "Advanced" },
    description: {
      sr: "Book demo → mapiranje CRM, MAP, ads, web analytics → white-glove integracija (5 nedelja do prvih insight-a) → dashboard za attribution i funnel health → Growth plan za AI preporuke i writeback u CRM. Enterprise za multi-BU i warehouse.",
      en: "Book demo → map CRM, MAP, ads, web analytics → white-glove integration (insights within ~5 weeks) → attribution and funnel health dashboard → Growth plan for AI recommendations and CRM writeback. Enterprise for multi-BU and warehouse access.",
    },
  },
  pros: {
    sr: [
      "Jedan izvor istine za ceo funnel",
      "AI preporuke za budžet i kanale",
      "Prediktivni pipeline, ne samo istorija",
      "White-glove onboarding uključen",
      "Writeback u CRM/MAP za akciju",
    ],
    en: [
      "Single source of truth for the full funnel",
      "AI recommendations for budget and channels",
      "Predictive pipeline, not just history",
      "White-glove onboarding included",
      "Writeback to CRM/MAP for action",
    ],
  },
  cons: {
    sr: [
      "Visok entry ($4k+), nije za startupe",
      "Zahteva čist MAP/CRM data hygiene",
      "Nije outreach ili enrichment alat",
      "Enterprise funkcije samo na custom planu",
      "Add-on moduli (MMM, deanonymization) extra",
    ],
    en: [
      "High entry ($4k+), not for startups",
      "Requires clean MAP/CRM data hygiene",
      "Not an outreach or enrichment tool",
      "Enterprise features only on custom plans",
      "Add-on modules (MMM, deanonymization) cost extra",
    ],
  },
  alternatives: [
    {
      slug: "attio",
      name: "Attio",
      description: {
        sr: "CRM, ne full-funnel attribution.",
        en: "CRM, not full-funnel attribution.",
      },
      startingPrice: { sr: "od $29", en: "from $29" },
      trial: { sr: "Free plan", en: "Free plan" },
      category: { sr: "CRM", en: "CRM" },
    },
    {
      slug: "clay",
      name: "Clay",
      description: {
        sr: "GTM data, drugačiji layer.",
        en: "GTM data, different layer.",
      },
      startingPrice: { sr: "od $149", en: "from $149" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "predictleads",
      name: "PredictLeads",
      description: {
        sr: "Company signali, input za scoring.",
        en: "Company signals, input for scoring.",
      },
      startingPrice: { sr: "od $0", en: "from $0" },
      trial: { sr: "100 kredita", en: "100 credits" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "n8n",
      name: "n8n",
      description: {
        sr: "Automatizuj writeback workflow-e.",
        en: "Automate writeback workflows.",
      },
      startingPrice: { sr: "od €20", en: "from €20" },
      trial: { sr: "Besplatno", en: "Free trial" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko košta RevSure?", en: "How much does RevSure cost?" },
      answer: {
        sr: "Early Adopter od $4.000/mes (50k MAP kontakata, 10 user-a). Growth $6.000/mes (150k, 15 user-a). Enterprise custom (500k+). Dodatnih 50k kontakata na Early: +$1.000/mes; na Growth: +$2.500 za 100k.",
        en: "Early Adopter from $4,000/mo (50k MAP contacts, 10 users). Growth $6,000/mo (150k, 15 users). Enterprise custom (500k+). Extra 50k contacts on Early: +$1,000/mo; on Growth: +$2,500 per 100k.",
      },
    },
    {
      question: { sr: "Za koga je RevSure?", en: "Who is RevSure for?" },
      answer: {
        sr: "Mid-market i enterprise B2B marketing, sales i RevOps timovi koji imaju MAP + CRM + paid kanale i žele da povežu spend sa pipeline-om i revenue, ne solo founder outbound.",
        en: "Mid-market and enterprise B2B marketing, sales, and RevOps teams with MAP + CRM + paid channels who want to connect spend to pipeline and revenue, not solo founder outbound.",
      },
    },
    {
      question: { sr: "Zašto izabrati RevSure?", en: "Why choose RevSure?" },
      answer: {
        sr: "Kada vam treba AI-driven attribution i pipeline forecasting u jednoj platformi, sa preporukama gde da pomerite budžet, umesto ručnog spajanja HubSpot + Google Ads + Excel.",
        en: "When you need AI-driven attribution and pipeline forecasting in one platform, with recommendations on where to shift budget, instead of manually stitching HubSpot + Google Ads + Excel.",
      },
    },
    {
      question: { sr: "Kako brzo vidite rezultate?", en: "How fast do you see results?" },
      answer: {
        sr: "Tipično za oko 5 nedelja posle white-glove integracije, funnel health, attribution i prve AI insight-e. Zavisi od kvaliteta podataka u CRM/MAP.",
        en: "Typically around 5 weeks after white-glove integration, funnel health, attribution, and first AI insights. Depends on CRM/MAP data quality.",
      },
    },
    {
      question: {
        sr: "Da li zamenjuje CRM?",
        en: "Does it replace your CRM?",
      },
      answer: {
        sr: "Ne - RevSure se integriše sa CRM i MAP (HubSpot, Salesforce, Marketo itd.) i vraća insight-e nazad (writeback). CRM ostaje system of record.",
        en: "No - RevSure integrates with your CRM and MAP (HubSpot, Salesforce, Marketo, etc.) and writes insights back (writeback). The CRM stays the system of record.",
      },
    },
    {
      question: {
        sr: "Koje su alternative?",
        en: "What are the alternatives?",
      },
      answer: {
        sr: "CaliberMind, Dreamdata, HockeyStack, Bizible (Adobe). RevSure se ističe agentic AI (Reli) i full-funnel execution preporukama, ne samo reporting-om.",
        en: "CaliberMind, Dreamdata, HockeyStack, Bizible (Adobe). RevSure stands out with agentic AI (Reli) and full-funnel execution recommendations, not just reporting.",
      },
    },
    {
      question: { sr: "Koji su add-on moduli?", en: "What add-on modules exist?" },
      answer: {
        sr: "Account deanonymization, incrementality testing, marketing mix modeling, social selling outreach, deep funnel optimization za ads (Google/LinkedIn/Meta), reverse ETL, enrichment (Apollo, ZoomInfo), BigQuery tables.",
        en: "Account deanonymization, incrementality testing, marketing mix modeling, social selling outreach, deep funnel optimization for ads (Google/LinkedIn/Meta), reverse ETL, enrichment (Apollo, ZoomInfo), BigQuery tables.",
      },
    },
    {
      question: { sr: "Da li ima trial?", en: "Is there a trial?" },
      answer: {
        sr: "Nema self-serve free trial, book demo i pilot program po dogovoru sa sales timom, u skladu sa veličinom vašeg MAP-a.",
        en: "No self-serve free trial, book a demo and a pilot program arranged with sales, based on your MAP size.",
      },
    },
  ],
  integrations: {
    sr: [
      "HubSpot",
      "Salesforce",
      "Marketo",
      "Google Ads",
      "LinkedIn Ads",
      "Meta Ads",
      "BigQuery",
      "Snowflake",
      "Apollo",
      "ZoomInfo",
    ],
    en: [
      "HubSpot",
      "Salesforce",
      "Marketo",
      "Google Ads",
      "LinkedIn Ads",
      "Meta Ads",
      "BigQuery",
      "Snowflake",
      "Apollo",
      "ZoomInfo",
    ],
  },
};
