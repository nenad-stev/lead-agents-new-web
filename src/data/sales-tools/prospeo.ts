import type { SalesTool } from "@/types/sales-tool";

export const prospeoTool: SalesTool = {
  slug: "prospeo",
  name: "Prospeo",
  logo: "/images/sales-tools/prospeo.png",
  tagline: {
    sr: "Verifikovani B2B emailovi, mobilni brojevi i enrichment podataka",
    en: "Verified B2B emails, mobile numbers, and data enrichment",
  },
  categoryId: "prospecting",
  category: { sr: "Prospecting", en: "Prospecting" },
  categories: {
    sr: [
      "Email finder",
      "Mobile finder",
      "Data enrichment",
      "People search",
      "Chrome ekstenzija",
      "CRM sync",
    ],
    en: [
      "Email finder",
      "Mobile finder",
      "Data enrichment",
      "People search",
      "Chrome extension",
      "CRM sync",
    ],
  },
  websiteUrl: "https://prospeo.io/?via=lead-agents",
  recommended: true,
  rating: { g2: 4.8, g2Reviews: 280 },
  overview: {
    sr: "Prospeo je alat za B2B kontakt podatke: pronalazi i verifikuje poslovne emailove, mobilne brojeve i firmografske podatke — preko pretrage, CSV/API enrichment-a ili Chrome ekstenzije.",
    en: "Prospeo is a B2B contact data tool: it finds and verifies business emails, mobile numbers, and firmographics — via search, CSV/API enrichment, or a Chrome extension.",
  },
  overviewExtended: {
    sr: "Krediti se troše po pronađenom emailu (1 kredit) ili mobilu (10 kredita); pretraga i pregled rezultata su besplatni dok ne „otkrijete“ kontakt. Growth i Pro dodaju HubSpot/Salesforce sync, intent filtere i job-change tracking. Nije outreach platforma — koristite ga uz Instantly, Lemlist ili LGM za slanje.",
    en: "Credits are spent per email found (1 credit) or mobile (10 credits); searching and previewing are free until you reveal a contact. Growth and Pro add HubSpot/Salesforce sync, intent filters, and job-change tracking. It is not an outreach platform — pair it with Instantly, Lemlist, or LGM for sending.",
  },
  idealFor: {
    sr: [
      "SDR i sales timovi",
      "Growth i GTM",
      "Recruiteri",
      "Agencije",
      "Startapovi i SMB",
    ],
    en: [
      "SDR and sales teams",
      "Growth and GTM",
      "Recruiters",
      "Agencies",
      "Startups and SMBs",
    ],
  },
  keyFeatures: {
    sr: [
      "Triple-verified poslovni emailovi",
      "Mobile finder i direktni brojevi",
      "AI Search i AI Lookalikes za TAM listu",
      "41 filtera + intent teme na višim planovima",
      "CSV, API i Google Sheets enrichment",
      "HubSpot / Salesforce sync (Growth+)",
    ],
    en: [
      "Triple-verified business emails",
      "Mobile finder and direct dials",
      "AI Search and AI Lookalikes for TAM building",
      "41 filters + intent topics on higher tiers",
      "CSV, API, and Google Sheets enrichment",
      "HubSpot / Salesforce sync (Growth+)",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "$37 / mesec", en: "$37 / month" },
    },
    {
      label: { sr: "Naplata", en: "Billing" },
      value: { sr: "Po korisniku + krediti", en: "Per user + credits" },
    },
    {
      label: { sr: "Free plan", en: "Free plan" },
      value: { sr: "100 kredita / mesec", en: "100 credits / month" },
    },
    {
      label: { sr: "Ocena", en: "Rating" },
      value: { sr: "4.8 / 5", en: "4.8 / 5" },
    },
  ],
  pricing: {
    startingPrice: { sr: "od $37 / mesec", en: "from $37 / month" },
    billing: {
      sr: "Po korisniku · godišnja naplata ~25% jeftinije",
      en: "Per user · ~25% off with annual billing",
    },
    trial: {
      sr: "Free plan bez vremenskog limita",
      en: "Free plan with no time limit",
    },
    plans: [
      {
        id: "free",
        name: { sr: "Free", en: "Free" },
        price: { sr: "$0", en: "$0" },
        billingNote: { sr: "100 kredita mesečno", en: "100 credits per month" },
        highlights: {
          sr: [
            "27 search filtera",
            "AI Search i AI Lookalikes",
            "Chrome ekstenzija",
            "50+ AI data polja",
            "3 intent teme",
          ],
          en: [
            "27 search filters",
            "AI Search and AI Lookalikes",
            "Chrome extension",
            "50+ AI data fields",
            "3 intent topics",
          ],
        },
      },
      {
        id: "starter",
        name: { sr: "Starter", en: "Starter" },
        price: { sr: "$37 / mesec", en: "$37 / month" },
        billingNote: {
          sr: "~$49 mesečno · 1.000 kredita/god",
          en: "~$49 monthly · 1,000 credits/year",
        },
        highlights: {
          sr: [
            "CSV i API enrichment",
            "Osnovne integracije",
            "Roles & permissions",
            "32 filtera · 6 intent tema",
            "20.000 redova u selekciji",
          ],
          en: [
            "CSV and API enrichment",
            "Basic integrations",
            "Roles and permissions",
            "32 filters · 6 intent topics",
            "20,000 row selection",
          ],
        },
      },
      {
        id: "growth",
        name: { sr: "Growth", en: "Growth" },
        price: { sr: "$74 / mesec", en: "$74 / month" },
        billingNote: {
          sr: "~$99 mesečno · 5.000 kredita/god",
          en: "~$99 monthly · 5,000 credits/year",
        },
        highlights: {
          sr: [
            "HubSpot i Salesforce sync",
            "CRM enrichment i deduplication",
            "Job change tracking",
            "Search analytics i ICP detection",
            "38 filtera · 9 intent tema",
          ],
          en: [
            "HubSpot and Salesforce sync",
            "CRM enrichment and deduplication",
            "Job change tracking",
            "Search analytics and ICP detection",
            "38 filters · 9 intent topics",
          ],
        },
      },
      {
        id: "pro",
        name: { sr: "Pro", en: "Pro" },
        price: { sr: "$149 / mesec", en: "$149 / month" },
        billingNote: {
          sr: "~$199 mesečno · 20.000 kredita/god",
          en: "~$199 monthly · 20,000 credits/year",
        },
        highlights: {
          sr: [
            "Svi 41 filter",
            "12 intent tema",
            "Najviši API rate limiti",
            "Enterprise-grade limiti",
            "Credits add-on dostupan",
          ],
          en: [
            "All 41 filters",
            "12 intent topics",
            "Highest API rate limits",
            "Enterprise-grade limits",
            "Credits add-on available",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "Krediti (godišnji plan)", en: "Credits (annual plan)" },
        values: {
          free: { sr: "100 / mes", en: "100 / mo" },
          starter: { sr: "1.000", en: "1,000" },
          growth: { sr: "5.000", en: "5,000" },
          pro: { sr: "20.000", en: "20,000" },
        },
      },
      {
        feature: { sr: "Search filteri", en: "Search filters" },
        values: {
          free: { sr: "27", en: "27" },
          starter: { sr: "32", en: "32" },
          growth: { sr: "38", en: "38" },
          pro: { sr: "41", en: "41" },
        },
      },
      {
        feature: { sr: "HubSpot / Salesforce", en: "HubSpot / Salesforce" },
        values: {
          free: { sr: "Ne", en: "No" },
          starter: { sr: "Ne", en: "No" },
          growth: { sr: "Da", en: "Yes" },
          pro: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Job change tracking", en: "Job change tracking" },
        values: {
          free: { sr: "Ne", en: "No" },
          starter: { sr: "Ne", en: "No" },
          growth: { sr: "Da", en: "Yes" },
          pro: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Public API", en: "Public API" },
        values: {
          free: { sr: "Ograničeno", en: "Limited" },
          starter: { sr: "Da", en: "Yes" },
          growth: { sr: "Da", en: "Yes" },
          pro: { sr: "Najviši limiti", en: "Highest limits" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Srednja", en: "Intermediate" },
    description: {
      sr: "Registracija, definisanje ICP filtera ili upload CSV liste, zatim enrichment ili export u outreach alat. Chrome ekstenzija radi odmah na LinkedIn-u i sajtovima. CRM sync zahteva Growth plan i kratku OAuth konfiguraciju.",
      en: "Sign up, set ICP filters or upload a CSV list, then enrich or export to your outreach tool. The Chrome extension works immediately on LinkedIn and websites. CRM sync needs Growth plan and a short OAuth setup.",
    },
  },
  pros: {
    sr: [
      "Visoka tačnost emailova — fokus na deliverability",
      "Besplatan pregled pretrage; plaćate tek pri exportu/reveal",
      "AI Search i lookalikes za brzo građenje TAM liste",
      "Integracije sa Clay, Zapier, Lemlist, Outreach",
      "Free plan bez kartice i bez roka",
    ],
    en: [
      "High email accuracy — deliverability-focused",
      "Free to search; pay only on export/reveal",
      "AI Search and lookalikes for fast TAM building",
      "Integrations with Clay, Zapier, Lemlist, Outreach",
      "Free plan with no card and no expiry",
    ],
  },
  cons: {
    sr: [
      "Krediti se ne prenose u sledeći mesec",
      "Mobilni brojevi troše 10× više kredita od emaila",
      "Nije zamena za cold email ili LinkedIn sekvence",
      "Najbolji CRM sync tek od Growth plana",
      "Godišnji planovi daju kredite unapred — planirajte potrošnju",
    ],
    en: [
      "Credits do not roll over month to month",
      "Mobile numbers cost 10× more credits than emails",
      "Not a replacement for cold email or LinkedIn sequences",
      "Best CRM sync starts on Growth tier",
      "Annual plans grant credits upfront — plan usage accordingly",
    ],
  },
  alternatives: [
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
      slug: "instantly",
      name: "Instantly",
      description: {
        sr: "Cold email infrastruktura nakon što imate liste.",
        en: "Cold email infrastructure once you have lists.",
      },
      startingPrice: { sr: "od $37", en: "from $37" },
      trial: { sr: "Besplatan start", en: "Free start" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
    {
      slug: "lemlist",
      name: "Lemlist",
      description: {
        sr: "Multichannel outreach sa personalizacijom.",
        en: "Multichannel outreach with personalization.",
      },
      startingPrice: { sr: "od $55", en: "from $55" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
    {
      slug: "fullenrich",
      name: "FullEnrich",
      description: {
        sr: "Waterfall enrichment iz 20+ izvora.",
        en: "Waterfall enrichment from 20+ sources.",
      },
      startingPrice: { sr: "od $29", en: "from $29" },
      trial: { sr: "50 kredita", en: "50 credits" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "hunter",
      name: "Hunter",
      description: {
        sr: "Email finder po domenu — jednostavniji fokus.",
        en: "Domain-based email finder — simpler focus.",
      },
      startingPrice: { sr: "od $34", en: "from $34" },
      trial: { sr: "Besplatan plan", en: "Free plan" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko košta Prospeo?", en: "How much does Prospeo cost?" },
      answer: {
        sr: "Free plan je $0 sa 100 kredita mesečno. Starter od $37/mesec (godišnje) ili ~$49 mesečno, Growth $74/~$99, Pro $149/~$199. Krediti se dodaju na početku ciklusa; ne prelaze u sledeći period.",
        en: "The free plan is $0 with 100 credits per month. Starter from $37/month (annual) or ~$49 monthly, Growth $74/~$99, Pro $149/~$199. Credits reset each billing cycle and do not roll over.",
      },
    },
    {
      question: { sr: "Kako rade krediti?", en: "How do credits work?" },
      answer: {
        sr: "1 kredit = jedan verifikovan poslovni email pri exportu. Mobilni broj košta 10 kredita. Pretraga i preview su besplatni — plaćate kada otkrijete kontakt.",
        en: "1 credit = one verified business email on export. A mobile number costs 10 credits. Search and preview are free — you pay when you reveal a contact.",
      },
    },
    {
      question: { sr: "Da li Prospeo ima besplatan plan?", en: "Does Prospeo have a free plan?" },
      answer: {
        sr: "Da — 100 kredita mesečno, Chrome ekstenzija, AI Search i osnovni filteri, bez kartice i bez vremenskog ograničenja.",
        en: "Yes — 100 credits per month, Chrome extension, AI Search, and core filters, with no card required and no time limit.",
      },
    },
    {
      question: { sr: "Zašto izabrati Prospeo?", en: "Why choose Prospeo?" },
      answer: {
        sr: "Kada vam treba čist data layer pre outreach-a — verifikovani emailovi, mobilni brojevi i bogati firmografski podaci — bez mešanja sa slanjem kampanja u istom alatu.",
        en: "When you need a clean data layer before outreach — verified emails, mobiles, and rich firmographics — without mixing sending campaigns in the same tool.",
      },
    },
    {
      question: {
        sr: "Da li se integriše sa outreach alatima?",
        en: "Does it integrate with outreach tools?",
      },
      answer: {
        sr: "Da — Clay, Zapier, Lemlist, Outreach, CSV export i API. Growth i Pro dodaju native HubSpot i Salesforce sync.",
        en: "Yes — Clay, Zapier, Lemlist, Outreach, CSV export, and API. Growth and Pro add native HubSpot and Salesforce sync.",
      },
    },
    {
      question: { sr: "Da li Prospeo ima API?", en: "Does Prospeo have an API?" },
      answer: {
        sr: "Da — Public API na Starter+ planovima, sa višim rate limitima na Pro. Dostupan je i MCP server za AI workflow-e.",
        en: "Yes — public API on Starter+ plans, with higher rate limits on Pro. An MCP server is also available for AI workflows.",
      },
    },
    {
      question: {
        sr: "Koje su alternative Prospeo-u?",
        en: "What are Prospeo alternatives?",
      },
      answer: {
        sr: "Često se poredi sa Apollo, Hunter, Snov.io i Findymail. Prospeo je najjači kao data-first enrichment; Apollo pokriva i outreach u istom proizvodu.",
        en: "Often compared to Apollo, Hunter, Snov.io, and Findymail. Prospeo is strongest as data-first enrichment; Apollo also covers outreach in one product.",
      },
    },
  ],
  integrations: {
    sr: [
      "HubSpot",
      "Salesforce",
      "Clay",
      "Zapier",
      "Lemlist",
      "Outreach",
      "Google Sheets",
      "API",
    ],
    en: [
      "HubSpot",
      "Salesforce",
      "Clay",
      "Zapier",
      "Lemlist",
      "Outreach",
      "Google Sheets",
      "API",
    ],
  },
};
