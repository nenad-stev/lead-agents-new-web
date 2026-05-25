import type { SalesTool } from "@/types/sales-tool";

export const fullenrichTool: SalesTool = {
  slug: "fullenrich",
  name: "FullEnrich",
  logo: "/images/sales-tools/fullenrich.png",
  tagline: {
    sr: "Waterfall enrichment — email i mobilni brojevi iz 20+ izvora",
    en: "Waterfall enrichment — emails and mobile numbers from 20+ sources",
  },
  categoryId: "prospecting",
  category: { sr: "Prospecting", en: "Prospecting" },
  categories: {
    sr: [
      "Waterfall enrichment",
      "Email finder",
      "Mobile finder",
      "Reverse email lookup",
      "Data enrichment",
      "API & integracije",
    ],
    en: [
      "Waterfall enrichment",
      "Email finder",
      "Mobile finder",
      "Reverse email lookup",
      "Data enrichment",
      "API & integrations",
    ],
  },
  websiteUrl: "https://fullenrich.com/",
  recommended: true,
  rating: { g2: 4.8, g2Reviews: 120 },
  overview: {
    sr: "FullEnrich je B2B alat za waterfall enrichment: redom pita 20+ premium provajdera dok ne nađe verifikovan poslovni email ili mobilni broj — prosečna stopa pronalaženja 80%+.",
    en: "FullEnrich is a B2B waterfall enrichment tool: it queries 20+ premium providers in sequence until it finds a verified work email or mobile number — with an average find rate of 80%+.",
  },
  overviewExtended: {
    sr: "Krediti se troše samo kada stvarno dobijete podatak (1 email = 1 kredit, mobil = 10 kredita). Neiskorišćeni krediti se prenose do 3 meseca. Neograničen broj korisnika u workspace-u — idealno uz Clay, Instantly ili CRM preko API-ja, Zapier-a ili Make-a.",
    en: "Credits are spent only when data is actually found (1 email = 1 credit, mobile = 10 credits). Unused credits roll over for up to 3 months. Unlimited users per workspace — ideal alongside Clay, Instantly, or your CRM via API, Zapier, or Make.",
  },
  idealFor: {
    sr: [
      "SDR i outbound timovi",
      "Growth i demand gen",
      "Agencije sa velikim listama",
      "RevOps / GTM Ops",
      "Timovi koji već koriste Clay ili sekvencere",
    ],
    en: [
      "SDR and outbound teams",
      "Growth and demand gen",
      "Agencies with large lists",
      "RevOps / GTM Ops",
      "Teams already using Clay or sequencers",
    ],
  },
  keyFeatures: {
    sr: [
      "Waterfall iz 20+ izvora podataka",
      "Triple email verifikacija (~1% bounce)",
      "Mobilni brojevi (landline besplatno)",
      "Reverse email lookup + firmografija",
      "API, Zapier, Make, n8n, Clay",
      "Neograničeni korisnici — deljeni krediti",
    ],
    en: [
      "Waterfall across 20+ data sources",
      "Triple email verification (~1% bounce)",
      "Mobile numbers (landlines free)",
      "Reverse email lookup + firmographics",
      "API, Zapier, Make, n8n, Clay",
      "Unlimited users — shared credits",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "$29 / mesec", en: "$29 / month" },
    },
    {
      label: { sr: "Naplata", en: "Billing" },
      value: { sr: "Po kreditima (deljeni tim)", en: "Credit-based (shared team)" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "50 kredita besplatno", en: "50 free credits" },
    },
    {
      label: { sr: "Ocena", en: "Rating" },
      value: { sr: "4.8 / 5 (G2)", en: "4.8 / 5 (G2)" },
    },
  ],
  pricing: {
    startingPrice: { sr: "od $29 / mesec", en: "from $29 / month" },
    billing: {
      sr: "Krediti · rollover do 3 meseca · neograničeni korisnici",
      en: "Credits · rollover up to 3 months · unlimited users",
    },
    trial: {
      sr: "50 kredita bez kartice",
      en: "50 credits, no card required",
    },
    plans: [
      {
        id: "free",
        name: { sr: "Free", en: "Free" },
        price: { sr: "$0", en: "$0" },
        billingNote: { sr: "50 kredita za start", en: "50 credits to start" },
        highlights: {
          sr: [
            "Waterfall enrichment",
            "Triple email verifikacija",
            "CSV upload & export",
            "Neograničeni korisnici",
            "GDPR & CCPA usklađenost",
          ],
          en: [
            "Waterfall enrichment",
            "Triple email verification",
            "CSV upload & export",
            "Unlimited users",
            "GDPR & CCPA aligned",
          ],
        },
      },
      {
        id: "starter",
        name: { sr: "Starter", en: "Starter" },
        price: { sr: "$29 / mesec", en: "$29 / month" },
        billingNote: {
          sr: "Mesečni krediti · rollover 3 meseca",
          en: "Monthly credits · 3-month rollover",
        },
        highlights: {
          sr: [
            "Sve iz Free plana",
            "Veći mesečni pool kredita",
            "Prioritet enrichment",
            "API pristup",
            "Integracije (1000+ app)",
          ],
          en: [
            "Everything in Free",
            "Larger monthly credit pool",
            "Priority enrichment",
            "API access",
            "Integrations (1000+ apps)",
          ],
        },
      },
      {
        id: "pro",
        name: { sr: "Pro", en: "Pro" },
        price: { sr: "$55 / mesec", en: "$55 / month" },
        billingNote: {
          sr: "Više kredita · za aktivne timove",
          en: "More credits · for active teams",
        },
        highlights: {
          sr: [
            "Sve iz Starter-a",
            "Veći volumen enrichment-a",
            "Napredna phone validacija",
            "People & company search",
            "Podrška za visok obim",
          ],
          en: [
            "Everything in Starter",
            "Higher enrichment volume",
            "Advanced phone validation",
            "People & company search",
            "High-volume support",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "Krediti (primer)", en: "Credits (example)" },
        values: {
          free: { sr: "50 (start)", en: "50 (start)" },
          starter: { sr: "Mesečni pool", en: "Monthly pool" },
          pro: { sr: "Veći pool", en: "Larger pool" },
        },
      },
      {
        feature: { sr: "1 email pronađen", en: "1 email found" },
        values: {
          free: { sr: "1 kredit", en: "1 credit" },
          starter: { sr: "1 kredit", en: "1 credit" },
          pro: { sr: "1 kredit", en: "1 credit" },
        },
      },
      {
        feature: { sr: "1 mobilni broj", en: "1 mobile number" },
        values: {
          free: { sr: "10 kredita", en: "10 credits" },
          starter: { sr: "10 kredita", en: "10 credits" },
          pro: { sr: "10 kredita", en: "10 credits" },
        },
      },
      {
        feature: { sr: "Rollover kredita", en: "Credit rollover" },
        values: {
          free: { sr: "—", en: "—" },
          starter: { sr: "3 meseca", en: "3 months" },
          pro: { sr: "3 meseca", en: "3 months" },
        },
      },
      {
        feature: { sr: "Korisnici", en: "Users" },
        values: {
          free: { sr: "Neograničeno", en: "Unlimited" },
          starter: { sr: "Neograničeno", en: "Unlimited" },
          pro: { sr: "Neograničeno", en: "Unlimited" },
        },
      },
      {
        feature: { sr: "API", en: "API" },
        values: {
          free: { sr: "Ograničeno", en: "Limited" },
          starter: { sr: "Da", en: "Yes" },
          pro: { sr: "Da", en: "Yes" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Niska do srednja", en: "Low to medium" },
    description: {
      sr: "Registracija, upload CSV-a ili povezivanje preko API/Clay/Zapier. Za test koristite besplatnih 50 kredita na pravoj listi leadova. Enrichment tip (samo email, samo telefon ili oba) birate po kampanji.",
      en: "Sign up, upload a CSV, or connect via API/Clay/Zapier. Test with 50 free credits on a real lead list. Choose enrichment type (email only, phone only, or both) per campaign.",
    },
  },
  pros: {
    sr: [
      "Najviša stopa pronalaženja zahvaljujući waterfall-u",
      "Plaćate samo kada dobijete verifikovan podatak",
      "Neograničeni korisnici bez per-seat cene",
      "Odličan za međunarodne liste (geo-matched vendori)",
      "Jaka integracija sa Clay i automatizacijama",
    ],
    en: [
      "Highest find rates thanks to waterfall enrichment",
      "Pay only when verified data is returned",
      "Unlimited users with no per-seat pricing",
      "Strong for international lists (geo-matched vendors)",
      "Excellent Clay and automation integrations",
    ],
  },
  cons: {
    sr: [
      "Nije outreach platforma — treba vam sender pored alata",
      "Mobilni brojevi troše 10× više kredita",
      "Fokus na kontakt podatke, ne pun CRM",
      "Tačan broj kredita po planu zavisi od pretplate",
      "Najbolji rezultati kada imate jasan ICP i listu",
    ],
    en: [
      "Not an outreach platform — you still need a sender",
      "Mobile numbers cost 10× more credits than emails",
      "Focused on contact data, not a full CRM",
      "Exact credits per plan depend on subscription",
      "Best results with a clear ICP and lead list",
    ],
  },
  alternatives: [
    {
      slug: "prospeo",
      name: "Prospeo",
      description: {
        sr: "Verifikovani emailovi i mobilni — sličan data-first fokus.",
        en: "Verified emails and mobiles — similar data-first focus.",
      },
      startingPrice: { sr: "od $37", en: "from $37" },
      trial: { sr: "100 kredita / mes", en: "100 credits / mo" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "apollo",
      name: "Apollo",
      description: {
        sr: "Baza + outreach u jednoj platformi.",
        en: "Database plus outreach in one platform.",
      },
      startingPrice: { sr: "od $49", en: "from $49" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "clay",
      name: "Clay",
      description: {
        sr: "Orkestrira FullEnrich i druge provajdere u tabeli.",
        en: "Orchestrates FullEnrich and other providers in tables.",
      },
      startingPrice: { sr: "od $134", en: "from $134" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "instantly",
      name: "Instantly",
      description: {
        sr: "Cold email nakon što imate obogaćene liste.",
        en: "Cold email once lists are enriched.",
      },
      startingPrice: { sr: "od $37", en: "from $37" },
      trial: { sr: "Besplatan start", en: "Free start" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko košta FullEnrich?", en: "How much does FullEnrich cost?" },
      answer: {
        sr: "Besplatno sa 50 kredita bez kartice. Plaćeni planovi počinju od $29/mesec (Starter) i $55/mesec (Pro). Naplata je kreditna — deljeni između celog tima.",
        en: "Free with 50 credits and no card. Paid plans start at $29/month (Starter) and $55/month (Pro). Billing is credit-based and shared across your whole team.",
      },
    },
    {
      question: { sr: "Kako rade krediti?", en: "How do credits work?" },
      answer: {
        sr: "1 verifikovan email = 1 kredit. 1 mobilni broj = 10 kredita. Krediti se ne troše ako kontakt nije pronađen ili email nije isporučiv. Neiskorišćeni mesečni krediti se prenose do 3 meseca.",
        en: "1 verified email = 1 credit. 1 mobile number = 10 credits. Credits are not spent if no contact is found or email is undeliverable. Unused monthly credits roll over for up to 3 months.",
      },
    },
    {
      question: { sr: "Šta je waterfall enrichment?", en: "What is waterfall enrichment?" },
      answer: {
        sr: "FullEnrich redom pita više provajdera (20+) dok ne nađe email ili telefon. Više izvora = viša stopa pronalaženja nego kod jednog vendora.",
        en: "FullEnrich queries multiple providers (20+) in sequence until an email or phone is found. More sources means higher find rates than a single vendor.",
      },
    },
    {
      question: { sr: "Da li ima besplatan plan?", en: "Is there a free plan?" },
      answer: {
        sr: "Da — 50 kredita za testiranje, bez kreditne kartice. Dovoljno da uporedite find rate sa trenutnim alatom na vašoj listi.",
        en: "Yes — 50 credits to test, no credit card required. Enough to benchmark find rate against your current tool on your own list.",
      },
    },
    {
      question: { sr: "Zašto izabrati FullEnrich?", en: "Why choose FullEnrich?" },
      answer: {
        sr: "Kada vam treba maksimalan reach na cold listama — posebno email + mobil — bez kupovine više odvojenih alata. Često nadmašuje pojedinačne findere po stopi pronalaženja.",
        en: "When you need maximum reach on cold lists — especially email plus mobile — without buying multiple separate tools. It often beats single-source finders on find rate.",
      },
    },
    {
      question: {
        sr: "Da li se integriše sa Clay i CRM-om?",
        en: "Does it integrate with Clay and CRMs?",
      },
      answer: {
        sr: "Da — native Clay integracija, API, Zapier, Make, n8n i 1000+ aplikacija. Tipičan stack: FullEnrich → Clay/CRM → Instantly ili Lemlist.",
        en: "Yes — native Clay integration, API, Zapier, Make, n8n, and 1000+ apps. Typical stack: FullEnrich → Clay/CRM → Instantly or Lemlist.",
      },
    },
    {
      question: { sr: "Da li FullEnrich ima API?", en: "Does FullEnrich have an API?" },
      answer: {
        sr: "Da — REST API za bulk enrichment u vašim workflow-ima. Dostupan je i MCP server za AI alate (Claude, ChatGPT).",
        en: "Yes — REST API for bulk enrichment in your workflows. An MCP server is also available for AI tools (Claude, ChatGPT).",
      },
    },
    {
      question: {
        sr: "Koje su alternative FullEnrich-u?",
        en: "What are FullEnrich alternatives?",
      },
      answer: {
        sr: "Često se poredi sa Apollo, ZoomInfo, Lusha, Prospeo i Clay (koji može koristiti FullEnrich kao jedan od izvora). FullEnrich je najjači kao dedicated waterfall enrichment layer.",
        en: "Often compared to Apollo, ZoomInfo, Lusha, Prospeo, and Clay (which can use FullEnrich as one source). FullEnrich is strongest as a dedicated waterfall enrichment layer.",
      },
    },
  ],
  integrations: {
    sr: [
      "Clay",
      "HubSpot",
      "Salesforce",
      "Zapier",
      "Make",
      "n8n",
      "Google Sheets",
      "API",
      "MCP (AI alati)",
    ],
    en: [
      "Clay",
      "HubSpot",
      "Salesforce",
      "Zapier",
      "Make",
      "n8n",
      "Google Sheets",
      "API",
      "MCP (AI tools)",
    ],
  },
};
