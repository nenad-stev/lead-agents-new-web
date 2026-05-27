import type { SalesTool } from "@/types/sales-tool";

export const clayTool: SalesTool = {
  slug: "clay",
  name: "Clay",
  logo: "/images/sales-tools/clay.png",
  tagline: {
    sr: "GTM spreadsheet za enrichment, signale i automatizaciju iz 150+ izvora",
    en: "GTM spreadsheet for enrichment, signals, and automation from 150+ sources",
  },
  categoryId: "prospecting",
  category: { sr: "Prospecting", en: "Prospecting" },
  categories: {
    sr: [
      "Data enrichment",
      "Waterfall providers",
      "AI research (Claygent)",
      "Intent signali",
      "CRM sync",
      "Outbound workflow",
    ],
    en: [
      "Data enrichment",
      "Waterfall providers",
      "AI research (Claygent)",
      "Intent signals",
      "CRM sync",
      "Outbound workflows",
    ],
  },
  websiteUrl: "https://clay.com/?via=d36c88",
  recommended: true,
  rating: { g2: 4.9, g2Reviews: 1200 },
  overview: {
    sr: "Clay je radna površina za GTM timove: u jednoj tabeli spajate 150+ data provajdera, AI istraživanje (Claygent), signale i automatizacije, bez ručnog prebacivanja CSV-ova i API ključeva po alatima.",
    en: "Clay is a workspace for GTM teams: in one table you connect 150+ data providers, AI research (Claygent), signals, and automations, without manually juggling CSVs and API keys across tools.",
  },
  overviewExtended: {
    sr: "Tipičan flow: uvezete listu ili LinkedIn search, pokrenete waterfall za email/telefon, obogatite firmografiju, dodate AI personalizaciju i pošaljete u Lemlist, Instantly ili CRM. Nije zamena za pun CRM ili masivan email sender - Clay je mozak koji priprema i održava podatke u pokretu.",
    en: "Typical flow: import a list or LinkedIn search, run a waterfall for email/phone, enrich firmographics, add AI personalization, and push to Lemlist, Instantly, or your CRM. It is not a full CRM or high-volume email sender - Clay is the brain that prepares and keeps data in motion.",
  },
  idealFor: {
    sr: [
      "GTM Ops i RevOps",
      "Growth i outbound timovi",
      "Agencije sa custom listama",
      "Enterprise GTM (ABM, inbound enrichment)",
      "Startapovi koji grade data stack",
    ],
    en: [
      "GTM Ops and RevOps",
      "Growth and outbound teams",
      "Agencies building custom lists",
      "Enterprise GTM (ABM, inbound enrichment)",
      "Startups building a data stack",
    ],
  },
  keyFeatures: {
    sr: [
      "Waterfall enrichment preko 150+ provajdera",
      "Claygent - AI web research i custom kolone",
      "Signali: job change, news, web intent, social",
      "CRM auto-sync i hygiene (HubSpot, Salesforce…)",
      "Sequencer i integracije sa outreach alatima",
      "Sculptor, workflow-i prirodnim jezikom",
    ],
    en: [
      "Waterfall enrichment across 150+ providers",
      "Claygent - AI web research and custom columns",
      "Signals: job change, news, web intent, social",
      "CRM auto-sync and hygiene (HubSpot, Salesforce…)",
      "Sequencer and outreach tool integrations",
      "Sculptor, workflows in natural language",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "$134 / mesec", en: "$134 / month" },
    },
    {
      label: { sr: "Naplata", en: "Billing" },
      value: { sr: "Actions + data krediti", en: "Actions + data credits" },
    },
    {
      label: { sr: "G2 ocena", en: "G2 rating" },
      value: { sr: "4.9 / 5", en: "4.9 / 5" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "14 dana", en: "14 days" },
    },
  ],
  pricing: {
    startingPrice: { sr: "od $134 / mesec", en: "from $134 / month" },
    billing: {
      sr: "Po actions + data kreditima · godišnje ~10% jeftinije",
      en: "By actions + data credits · ~10% off annual",
    },
    trial: {
      sr: "14 dana trial + Free plan",
      en: "14-day trial + free plan",
    },
    plans: [
      {
        id: "free",
        name: { sr: "Free", en: "Free" },
        price: { sr: "$0", en: "$0" },
        billingNote: {
          sr: "500 actions · 100 data kredita/mes",
          en: "500 actions · 100 data credits/mo",
        },
        highlights: {
          sr: [
            "Neograničeni korisnici i tabele",
            "Waterfall i Claygent",
            "Do 200 redova po tabeli",
            "BYOK (svoji API ključevi)",
            "Clay sequencer za email",
          ],
          en: [
            "Unlimited users and tables",
            "Waterfall and Claygent",
            "Up to 200 rows per table",
            "Bring your own API keys",
            "Clay sequencer for email",
          ],
        },
      },
      {
        id: "launch",
        name: { sr: "Launch", en: "Launch" },
        price: { sr: "$167 / mesec", en: "$167 / month" },
        billingNote: {
          sr: "od ~$134 godišnje · 15k actions/mes",
          en: "from ~$134 annual · 15k actions/mo",
        },
        highlights: {
          sr: [
            "2.500 data kredita mesečno",
            "Phone enrichment i signali",
            "Do 50.000 redova po tabeli",
            "Custom functions",
            "Integracije sa outreach alatima",
          ],
          en: [
            "2,500 data credits per month",
            "Phone enrichment and signals",
            "Up to 50,000 rows per table",
            "Custom functions",
            "Outreach tool integrations",
          ],
        },
      },
      {
        id: "growth",
        name: { sr: "Growth", en: "Growth" },
        price: { sr: "$446 / mesec", en: "$446 / month" },
        billingNote: {
          sr: "od ~$359 godišnje · 40k actions/mes",
          en: "from ~$359 annual · 40k actions/mo",
        },
        highlights: {
          sr: [
            "6.000 data kredita mesečno",
            "Auto-sync i enrich CRM",
            "HTTP API i webhook signali",
            "Web intent signali",
            "1 ads audience (LinkedIn/Meta)",
          ],
          en: [
            "6,000 data credits per month",
            "Auto-sync and enrich CRM",
            "HTTP API and webhook signals",
            "Web intent signals",
            "1 ads audience (LinkedIn/Meta)",
          ],
        },
      },
      {
        id: "enterprise",
        name: { sr: "Enterprise", en: "Enterprise" },
        price: { sr: "Po dogovoru", en: "Custom" },
        billingNote: {
          sr: "Custom actions i krediti",
          en: "Custom actions and credits",
        },
        highlights: {
          sr: [
            "Data warehouse sync",
            "Audiences (neograničeni redovi)",
            "SSO i RBAC",
            "Dedicated growth strategist",
            "2+ ads audiences",
          ],
          en: [
            "Data warehouse sync",
            "Audiences (unlimited rows)",
            "SSO and RBAC",
            "Dedicated growth strategist",
            "2+ ads audiences",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "Actions / mesec", en: "Actions / month" },
        values: {
          free: { sr: "500", en: "500" },
          launch: { sr: "15.000", en: "15,000" },
          growth: { sr: "40.000", en: "40,000" },
          enterprise: { sr: "Custom", en: "Custom" },
        },
      },
      {
        feature: { sr: "Data krediti / mesec", en: "Data credits / month" },
        values: {
          free: { sr: "100", en: "100" },
          launch: { sr: "2.500", en: "2,500" },
          growth: { sr: "6.000", en: "6,000" },
          enterprise: { sr: "Custom", en: "Custom" },
        },
      },
      {
        feature: { sr: "Redova po tabeli", en: "Rows per table" },
        values: {
          free: { sr: "200", en: "200" },
          launch: { sr: "50.000", en: "50,000" },
          growth: { sr: "50.000", en: "50,000" },
          enterprise: { sr: "Neograničeno*", en: "Unlimited*" },
        },
      },
      {
        feature: { sr: "CRM sync", en: "CRM sync" },
        values: {
          free: { sr: "Ne", en: "No" },
          launch: { sr: "Integracije", en: "Integrations" },
          growth: { sr: "Auto-sync", en: "Auto-sync" },
          enterprise: { sr: "Auto-sync + DWH", en: "Auto-sync + DWH" },
        },
      },
      {
        feature: { sr: "Web intent signali", en: "Web intent signals" },
        values: {
          free: { sr: "Ne", en: "No" },
          launch: { sr: "Ne", en: "No" },
          growth: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Napredna", en: "Advanced" },
    description: {
      sr: "Počinjete od template-a ili prazne tabele, povežete provajdere i gradite kolone (enrichment, AI, signali). Prvi workflow može biti spreman za dan-dva; kompleksni ABM i CRM loop-ovi traže GTM Ops iskustvo i Clay University materijale.",
      en: "Start from a template or blank table, connect providers, and build columns (enrichment, AI, signals). A first workflow can ship in a day or two; complex ABM and CRM loops need GTM Ops experience and Clay University resources.",
    },
  },
  pros: {
    sr: [
      "Jedno mesto za 150+ data izvora i waterfall logiku",
      "Claygent za research koji drugi alati ne pokrivaju",
      "Fleksibilni workflow-i, od liste do CRM/outreach-a",
      "Neograničeni korisnici na svim planovima",
      "Jaka zajednica (Clay University, Slack)",
    ],
    en: [
      "One place for 150+ data sources and waterfall logic",
      "Claygent for research other tools do not cover",
      "Flexible workflows, from list to CRM/outreach",
      "Unlimited users on all plans",
      "Strong community (Clay University, Slack)",
    ],
  },
  cons: {
    sr: [
      "Kriva učenja, nije plug-and-play za početnike",
      "Cena raste sa actions i data kreditima",
      "Nije outreach platforma, treba vam sender pored",
      "Najbolji CRM i intent feature-i tek na Growth+",
      "Kompleksno planiranje potrošnje kredita",
    ],
    en: [
      "Steep learning curve, not plug-and-play for beginners",
      "Cost scales with actions and data credits",
      "Not an outreach platform, you still need a sender",
      "Best CRM and intent features start on Growth+",
      "Credit usage takes planning to control spend",
    ],
  },
  alternatives: [
    {
      slug: "relevance-ai",
      name: "Relevance AI",
      description: {
        sr: "AI agenti, automatizacija posle Clay enrichment-a.",
        en: "AI agents, automation after Clay enrichment.",
      },
      startingPrice: { sr: "od $0", en: "from $0" },
      trial: { sr: "Free plan", en: "Free plan" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "n8n",
      name: "n8n",
      description: {
        sr: "Orkestrira Clay u multi-step GTM workflow-ima.",
        en: "Orchestrates Clay in multi-step GTM workflows.",
      },
      startingPrice: { sr: "od €20", en: "from €20" },
      trial: { sr: "Besplatno · bez kartice", en: "Free trial · no card" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "predictleads",
      name: "PredictLeads",
      description: {
        sr: "Company intelligence signali preko API-ja.",
        en: "Company intelligence signals via API.",
      },
      startingPrice: { sr: "od $0", en: "from $0" },
      trial: { sr: "100 kredita/mes", en: "100 credits/mo" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "apify",
      name: "Apify",
      description: {
        sr: "Web scraping Actors kao izvor u Clay kolonama.",
        en: "Web scraping Actors as a source in Clay columns.",
      },
      startingPrice: { sr: "od $29", en: "from $29" },
      trial: { sr: "Free plan", en: "Free plan" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "apollo",
      name: "Apollo",
      description: {
        sr: "Baza + outreach u jednom, manje custom workflow-a.",
        en: "Database plus outreach in one, less custom workflow.",
      },
      startingPrice: { sr: "od $49", en: "from $49" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "prospeo",
      name: "Prospeo",
      description: {
        sr: "Fokus na verifikovane emailove i mobile.",
        en: "Focus on verified emails and mobiles.",
      },
      startingPrice: { sr: "od $37", en: "from $37" },
      trial: { sr: "Free plan", en: "Free plan" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "instantly",
      name: "Instantly",
      description: {
        sr: "Cold email slanje nakon Clay enrichment-a.",
        en: "Cold email sending after Clay enrichment.",
      },
      startingPrice: { sr: "od $37", en: "from $37" },
      trial: { sr: "Besplatan start", en: "Free start" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
    {
      slug: "lemlist",
      name: "Lemlist",
      description: {
        sr: "Multichannel outreach iz Clay tabele.",
        en: "Multichannel outreach from Clay tables.",
      },
      startingPrice: { sr: "od $55", en: "from $55" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko košta Clay?", en: "How much does Clay cost?" },
      answer: {
        sr: "Free plan je $0 (500 actions, 100 data kredita). Launch od ~$134-167/mesec, Growth od ~$359-446/mesec, Enterprise po dogovoru. Naplata kombinuje platform actions i data kredite za provajdere.",
        en: "The free plan is $0 (500 actions, 100 data credits). Launch from ~$134-167/month, Growth from ~$359-446/month, Enterprise is custom. Billing combines platform actions and data credits for providers.",
      },
    },
    {
      question: { sr: "Šta su actions i data krediti?", en: "What are actions and data credits?" },
      answer: {
        sr: "Actions mere koliko puta pokrenete enrichment ili GTM korake u Clay-u. Data krediti plaćaju podatke i AI od provajdera u marketplace-u (email, telefon, firmografija).",
        en: "Actions measure how often you run enrichment or GTM steps in Clay. Data credits pay for data and AI from marketplace providers (email, phone, firmographics).",
      },
    },
    {
      question: { sr: "Da li Clay ima probni period?", en: "Does Clay offer a trial?" },
      answer: {
        sr: "Da - 14-dnevni trial na paid planovima, plus trajni Free plan bez kartice za eksperimentisanje.",
        en: "Yes, a 14-day trial on paid plans, plus a permanent free plan with no card required to experiment.",
      },
    },
    {
      question: { sr: "Zašto izabrati Clay?", en: "Why choose Clay?" },
      answer: {
        sr: "Kada vam treba custom GTM logika, waterfall, AI research, signali i sync u CRM/outreach, a ne samo jedan fiksni data vendor.",
        en: "When you need custom GTM logic, waterfalls, AI research, signals, and sync to CRM/outreach, not just one fixed data vendor.",
      },
    },
    {
      question: { sr: "Da li Clay šalje emailove?", en: "Does Clay send emails?" },
      answer: {
        sr: "Ima ugrađeni sequencer i integracije sa Lemlist, Instantly, Outreach i drugima - Clay priprema podatke i pokreće kampanje, ali većina timova i dalje koristi dedicirani sender za skalu.",
        en: "It has a built-in sequencer and integrations with Lemlist, Instantly, Outreach, and others - Clay prepares data and triggers campaigns, but most teams still use a dedicated sender for scale.",
      },
    },
    {
      question: { sr: "Da li Clay ima API?", en: "Does Clay have an API?" },
      answer: {
        sr: "Da - HTTP API, webhook-i, CRM integracije i MCP server za povezivanje sa AI alatima i internim sistemima.",
        en: "Yes - HTTP API, webhooks, CRM integrations, and an MCP server to connect with AI tools and internal systems.",
      },
    },
    {
      question: {
        sr: "Koje su alternative Clay-u?",
        en: "What are Clay alternatives?",
      },
      answer: {
        sr: "Često se poredi sa Apollo, ZoomInfo, Phantombuster i Clearbit stack-om. Clay je najjači kada gradite jedinstvene, višekanalne workflow-e; Apollo je brži za all-in-one prospecting.",
        en: "Often compared to Apollo, ZoomInfo, Phantombuster, and a Clearbit-style stack. Clay is strongest when building unique multichannel workflows; Apollo is faster for all-in-one prospecting.",
      },
    },
  ],
  integrations: {
    sr: [
      "HubSpot",
      "Salesforce",
      "Lemlist",
      "Instantly",
      "Zapier",
      "Slack",
      "Snowflake",
      "API / Webhooks",
    ],
    en: [
      "HubSpot",
      "Salesforce",
      "Lemlist",
      "Instantly",
      "Zapier",
      "Slack",
      "Snowflake",
      "API / Webhooks",
    ],
  },
};
