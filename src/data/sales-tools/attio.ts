import type { SalesTool } from "@/types/sales-tool";

export const attioTool: SalesTool = {
  slug: "attio",
  name: "Attio",
  logo: "/images/sales-tools/attio.png",
  tagline: {
    sr: "AI-native CRM za moderne prodajne timove",
    en: "AI-native CRM for modern sales teams",
  },
  categoryId: "crm",
  category: { sr: "CRM", en: "CRM" },
  categories: {
    sr: [
      "AI CRM",
      "Upravljanje leadovima",
      "Obogaćivanje podataka",
      "Sales funnel",
      "Automatizacija prodaje",
    ],
    en: [
      "AI CRM",
      "Lead management",
      "Data enrichment",
      "Sales funnel",
      "Sales automation",
    ],
  },
  websiteUrl: "https://attio.com",
  recommended: true,
  rating: { g2: 4.8, g2Reviews: 120 },
  overview: {
    sr: "Attio je AI-powered CRM dizajniran da prodajnim i marketing timovima pomogne da upravljaju klijentskim podacima i revenue workflow-ima. Ističe se fleksibilnošću — prilagođava se vašim procesima umesto da vas forsira u rigidne šablone.",
    en: "Attio is an AI-powered CRM designed to help sales and marketing teams manage customer data and revenue workflows. It stands out for its flexibility — adapting to your processes instead of forcing rigid templates.",
  },
  overviewExtended: {
    sr: "Idealno za B2B SaaS kompanije i rastuće startape. Attio se ističe u outreach-u, praćenju dealova i nurturing-u leadova uz AI uvide. Sinhronizuje email, kalendar i druge izvore podataka — rezultate vidite skoro odmah nakon setup-a. Integracije: Gmail, Slack, data warehouse-i i sales engagement alati.",
    en: "Ideal for B2B SaaS companies and growing startups. Attio excels at outreach, deal tracking, and lead nurturing with AI insights. It syncs email, calendar, and other data sources — you see results almost immediately after setup. Integrations include Gmail, Slack, data warehouses, and sales engagement tools.",
  },
  idealFor: {
    sr: ["Startapi", "Scale-up kompanije", "SMB timovi", "GTM builderi"],
    en: ["Startups", "Scale-ups", "SMB teams", "GTM builders"],
  },
  keyFeatures: {
    sr: [
      "AI-native CRM platforma",
      "Moćan automation engine",
      "Real-time sinhronizacija podataka",
      "Prilagodljivi workflow-i i izveštaji",
      "Skalabilnost sa niskom latencijom",
      "Enterprise-grade bezbednost",
    ],
    en: [
      "AI-native CRM platform",
      "Powerful automation engine",
      "Real-time data sync",
      "Customizable workflows and reports",
      "Scalable with low latency",
      "Enterprise-grade security compliance",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "$36 / mesec", en: "$36 / month" },
    },
    {
      label: { sr: "Naplata", en: "Billing" },
      value: { sr: "Po korisniku (seat)", en: "Per seat" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "14 dana (Pro plan)", en: "14 days (Pro plan)" },
    },
    {
      label: { sr: "G2 ocena", en: "G2 rating" },
      value: { sr: "4.8 / 5 (120+ recenzija)", en: "4.8 / 5 (120+ reviews)" },
    },
    {
      label: { sr: "Kompleksnost setup-a", en: "Setup complexity" },
      value: { sr: "Napredna", en: "Advanced" },
    },
    {
      label: { sr: "API", en: "API" },
      value: { sr: "Da", en: "Yes" },
    },
  ],
  pricing: {
    startingPrice: { sr: "$36 / mesec", en: "$36 / month" },
    billing: { sr: "Po korisniku, mesečno ili godišnje", en: "Per user, monthly or annually" },
    trial: { sr: "Dostupan — 14 dana Pro plana", en: "Available — 14-day Pro trial" },
    plans: [
      {
        id: "free",
        name: { sr: "Free", en: "Free" },
        price: { sr: "$0", en: "$0" },
        billingNote: {
          sr: "Do 3 korisnika",
          en: "Up to 3 seats",
        },
        highlights: {
          sr: [
            "Real-time sync",
            "Automatsko obogaćivanje",
            "Osnovno slanje emailova",
            "Mesečna naplata",
          ],
          en: [
            "Real-time sync",
            "Automatic enrichment",
            "Basic email sending",
            "Monthly billing",
          ],
        },
      },
      {
        id: "plus",
        name: { sr: "Plus", en: "Plus" },
        price: { sr: "$29 / korisnik", en: "$29 / user" },
        billingNote: {
          sr: "Mesečno ili godišnje (−20%)",
          en: "Monthly or annually (save 20%)",
        },
        highlights: {
          sr: [
            "Neograničen broj korisnika",
            "Private liste",
            "Naprednije email slanje",
            "Jedan tim",
          ],
          en: [
            "Unlimited seats",
            "Private lists",
            "Enhanced email sending",
            "Single team",
          ],
        },
      },
      {
        id: "pro",
        name: { sr: "Pro", en: "Pro" },
        price: { sr: "$69 / korisnik", en: "$69 / user" },
        billingNote: {
          sr: "Mesečno ili godišnje (−20%)",
          en: "Monthly or annually (save 20%)",
        },
        highlights: {
          sr: [
            "Multi-team organizacije",
            "Call intelligence",
            "Napredni podaci",
            "Prioritetni support",
          ],
          en: [
            "Multi-team orgs",
            "Call intelligence",
            "Advanced data",
            "Priority support",
          ],
        },
      },
      {
        id: "enterprise",
        name: { sr: "Enterprise", en: "Enterprise" },
        price: { sr: "Kontakt prodaju", en: "Contact sales" },
        billingNote: { sr: "Godišnji ugovor", en: "Annual contract" },
        highlights: {
          sr: [
            "SAML i SSO",
            "Neograničeni objekti",
            "Fleksibilna fakturisanja",
            "Custom funkcije",
          ],
          en: [
            "SAML and SSO",
            "Unlimited objects",
            "Flexible invoicing",
            "Custom features",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "Broj korisnika (seats)", en: "Seats" },
        values: {
          free: { sr: "Do 3", en: "Up to 3" },
          plus: { sr: "Neograničeno", en: "Unlimited" },
          pro: { sr: "Neograničeno", en: "Unlimited" },
          enterprise: { sr: "Neograničeno", en: "Unlimited" },
        },
      },
      {
        feature: { sr: "Real-time sync", en: "Real-time sync" },
        values: {
          free: { sr: "Da", en: "Yes" },
          plus: { sr: "Da", en: "Yes" },
          pro: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Automatsko obogaćivanje", en: "Auto enrichment" },
        values: {
          free: { sr: "Da", en: "Yes" },
          plus: { sr: "Da", en: "Yes" },
          pro: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Workflow automatizacija", en: "Workflow automation" },
        values: {
          free: { sr: "Osnovno", en: "Basic" },
          plus: { sr: "Da", en: "Yes" },
          pro: { sr: "Napredno", en: "Advanced" },
          enterprise: { sr: "Custom", en: "Custom" },
        },
      },
      {
        feature: { sr: "Call intelligence", en: "Call intelligence" },
        values: {
          free: { sr: "Ne", en: "No" },
          plus: { sr: "Ne", en: "No" },
          pro: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Multi-team", en: "Multi-team" },
        values: {
          free: { sr: "Ne", en: "No" },
          plus: { sr: "Ne", en: "No" },
          pro: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "SAML / SSO", en: "SAML / SSO" },
        values: {
          free: { sr: "Ne", en: "No" },
          plus: { sr: "Ne", en: "No" },
          pro: { sr: "Ne", en: "No" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Prioritetni support", en: "Priority support" },
        values: {
          free: { sr: "Ne", en: "No" },
          plus: { sr: "Ne", en: "No" },
          pro: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Dedicated", en: "Dedicated" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Napredna", en: "Advanced" },
    description: {
      sr: "Attio povezuje podatke, automatizuje workflow-e i koristi AI za prospecting i izveštaje. Setup zahteva mapiranje objekata i integracija sa email/kalendarom, ali onboarding vodi kroz ključne korake.",
      en: "Attio connects data, automates workflows, and uses AI for prospecting and reporting. Setup requires mapping objects and connecting email/calendar, but onboarding guides you through the essentials.",
    },
  },
  pros: {
    sr: [
      "Fleksibilan data model — prilagođava se vašem procesu",
      "Brz setup u odnosu na klasične CRM-ove",
      "Snažna automatizacija i AI funkcije",
      "Moderan, čist interfejs",
    ],
    en: [
      "Flexible data model — adapts to your process",
      "Faster setup than legacy CRMs",
      "Strong automation and AI features",
      "Modern, clean interface",
    ],
  },
  cons: {
    sr: [
      "Napredniji setup za kompleksne organizacije",
      "Nije idealan za velike enterprise ERP potrebe",
      "Viši trošak na Pro/Enterprise nivou",
    ],
    en: [
      "Advanced setup for complex orgs",
      "Not ideal for large enterprise ERP needs",
      "Higher cost at Pro/Enterprise tiers",
    ],
  },
  alternatives: [
    {
      slug: "apollo",
      name: "Apollo",
      description: {
        sr: "Baza leadova i outreach — dobar par uz CRM.",
        en: "Lead database and outreach — pairs well with a CRM.",
      },
      startingPrice: { sr: "od $49 / mesec", en: "from $49 / month" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "lemlist",
      name: "Lemlist",
      description: {
        sr: "Multichannel outreach za punjenje pipeline-a.",
        en: "Multichannel outreach to fill your pipeline.",
      },
      startingPrice: { sr: "od $55 / mesec", en: "from $55 / month" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
    {
      slug: "instantly",
      name: "Instantly",
      description: {
        sr: "Cold email na skali — neograničeni inbox-ovi.",
        en: "High-volume cold email with unlimited inboxes.",
      },
      startingPrice: { sr: "od $37 / mesec", en: "from $37 / month" },
      trial: { sr: "Besplatan start", en: "Free start" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
    {
      slug: "hubspot",
      name: "HubSpot",
      description: {
        sr: "Sve-u-jednom platforma za marketing, sales i CRM.",
        en: "All-in-one platform for marketing, sales, and CRM.",
      },
      startingPrice: { sr: "od $9 / mesec", en: "from $9 / month" },
      trial: { sr: "30 dana", en: "30 days" },
      category: { sr: "CRM", en: "CRM" },
    },
    {
      slug: "pipedrive",
      name: "Pipedrive",
      description: {
        sr: "Sales CRM fokusiran na pipeline management.",
        en: "Sales CRM focused on pipeline management.",
      },
      startingPrice: { sr: "od $14 / mesec", en: "from $14 / month" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "CRM", en: "CRM" },
    },
  ],
  faq: [
    {
      question: { sr: "Kako koristiti Attio?", en: "How to use Attio?" },
      answer: {
        sr: "Sinhronizujte kontakte i email za real-time obogaćivanje. Koristite workflow-e i automatizacije za prodaju i upravljanje klijentima.",
        en: "Sync contacts and email for real-time enrichment. Use workflows and automations to streamline sales and customer management.",
      },
    },
    {
      question: { sr: "Koliko košta Attio?", en: "How much is Attio?" },
      answer: {
        sr: "Free plan do 3 korisnika, Plus $29/korisnik, Pro $69/korisnik, Enterprise po dogovoru.",
        en: "Free plan up to 3 seats, Plus $29/user, Pro $69/user, Enterprise custom pricing.",
      },
    },
    {
      question: { sr: "Da li Attio ima API?", en: "Does Attio have an API?" },
      answer: {
        sr: "Da — API omogućava custom integracije i automatizacije kroz vaš tech stack.",
        en: "Yes — the API enables custom integrations and automations across your tech stack.",
      },
    },
    {
      question: { sr: "Da li postoji probni period?", en: "Is there a free trial?" },
      answer: {
        sr: "Da, 14-dnevni probni period Pro plana sa punim funkcijama.",
        en: "Yes, a 14-day Pro plan trial with full features.",
      },
    },
  ],
  integrations: {
    sr: ["Gmail", "Outlook", "Slack", "Zapier", "Segment", "Snowflake", "HubSpot"],
    en: ["Gmail", "Outlook", "Slack", "Zapier", "Segment", "Snowflake", "HubSpot"],
  },
};
