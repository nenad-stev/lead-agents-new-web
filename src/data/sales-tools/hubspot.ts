import type { SalesTool } from "@/types/sales-tool";

export const hubspotTool: SalesTool = {
  slug: "hubspot",
  name: "HubSpot",
  logo: "/images/sales-tools/hubspot.png",
  tagline: {
    sr: "CRM + marketing + sales — jedan stack za ceo GTM funnel",
    en: "CRM + marketing + sales — one stack for the full GTM funnel",
  },
  categoryId: "crm",
  category: { sr: "CRM", en: "CRM" },
  categories: {
    sr: [
      "Sales Hub",
      "Marketing Hub",
      "CRM & pipeline",
      "Email & sekvence",
      "Workflow automatizacija",
      "Revenue attribution",
    ],
    en: [
      "Sales Hub",
      "Marketing Hub",
      "CRM & pipeline",
      "Email & sequences",
      "Workflow automation",
      "Revenue attribution",
    ],
  },
  websiteUrl: "https://www.hubspot.com/",
  recommended: true,
  rating: { g2: 4.4, g2Reviews: 12000 },
  overview: {
    sr: "HubSpot je platforma koja spaja marketing, prodaju i korisničku podršku: CRM, email kampanje, landing stranice, sekvence i izveštaji — sa jedinstvenim pogledom na kontakt i deal.",
    en: "HubSpot is a platform that unifies marketing, sales, and customer service: CRM, email campaigns, landing pages, sequences, and reporting — with a single view of every contact and deal.",
  },
  overviewExtended: {
    sr: "Za GTM timove koji žele „sistem zapisa“ između Clay/Instantly/Lemlist i sales tima. Sales Hub Starter od **$9/seat/mes** (godišnje); Professional **$90/seat** + onboarding $1.500. Besplatan CRM za start. Nije cold email infrastruktura — koristite ga kao centralni CRM + marketing automation, uz Instantly za volume outbound.",
    en: "For GTM teams that want a system of record between Clay/Instantly/Lemlist and sales. Sales Hub Starter from **$9/seat/mo** (annual); Professional **$90/seat** + $1,500 onboarding. Free CRM to start. Not cold email infrastructure — use it as central CRM + marketing automation, with Instantly for volume outbound.",
  },
  idealFor: {
    sr: [
      "B2B sales i marketing timovi",
      "Inbound + outbound hibrid",
      "RevOps koji standardizuju stack",
      "Scale-up kompanije",
      "Agencije sa više klijenata (portal)",
    ],
    en: [
      "B2B sales and marketing teams",
      "Inbound + outbound hybrid motion",
      "RevOps standardizing the stack",
      "Scale-up companies",
      "Agencies with multiple clients (portals)",
    ],
  },
  keyFeatures: {
    sr: [
      "Unified CRM (kontakti, kompanije, dealovi)",
      "Sales sekvence i meeting scheduling",
      "Marketing automation & lead scoring (Pro+)",
      "Landing pages & forms",
      "Integracije (Gmail, Slack, Salesforce…)",
      "AI asistenti (Breeze) na višim planovima",
    ],
    en: [
      "Unified CRM (contacts, companies, deals)",
      "Sales sequences and meeting scheduling",
      "Marketing automation & lead scoring (Pro+)",
      "Landing pages & forms",
      "Integrations (Gmail, Slack, Salesforce…)",
      "AI assistants (Breeze) on higher tiers",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od (Sales)", en: "Starting from (Sales)" },
      value: { sr: "$0 (Free CRM)", en: "$0 (Free CRM)" },
    },
    {
      label: { sr: "Sales Hub Starter", en: "Sales Hub Starter" },
      value: { sr: "$9 / seat", en: "$9 / seat" },
    },
    {
      label: { sr: "Naplata", en: "Billing" },
      value: { sr: "Po seat-u + hub-ovi", en: "Per seat + hubs" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "Free tools · demo", en: "Free tools · demo" },
    },
  ],
  pricing: {
    startingPrice: { sr: "od $0 (Free CRM)", en: "from $0 (Free CRM)" },
    billing: {
      sr: "Po seat-u po Hub-u · onboarding na Pro+",
      en: "Per seat per Hub · onboarding on Pro+",
    },
    trial: {
      sr: "Besplatan CRM · trial na plaćenim hub-ovima",
      en: "Free CRM · trials on paid hubs",
    },
    plans: [
      {
        id: "free",
        name: { sr: "Free CRM", en: "Free CRM" },
        price: { sr: "$0", en: "$0" },
        billingNote: { sr: "Do 2 korisnika", en: "Up to 2 users" },
        highlights: {
          sr: [
            "Kontakti, kompanije, dealovi",
            "Live chat & basic bots",
            "HubSpot branding",
            "Ograničene automatizacije",
            "Dobar POC za mali tim",
            "Upgrade kada treba sekvence",
          ],
          en: [
            "Contacts, companies, deals",
            "Live chat & basic bots",
            "HubSpot branding",
            "Limited automation",
            "Good POC for small teams",
            "Upgrade when you need sequences",
          ],
        },
      },
      {
        id: "starter",
        name: { sr: "Sales Hub Starter", en: "Sales Hub Starter" },
        price: { sr: "$9 / seat / mes", en: "$9 / seat / mo" },
        billingNote: {
          sr: "$15/mes mesečno · bez min seat-a",
          en: "$15/mo monthly · no seat minimum",
        },
        highlights: {
          sr: [
            "Email templates & tracking",
            "Meeting scheduler",
            "Live chat",
            "Simple automation",
            "Rep reporting",
            "Povezivanje sa outreach alatima",
          ],
          en: [
            "Email templates & tracking",
            "Meeting scheduler",
            "Live chat",
            "Simple automation",
            "Rep reporting",
            "Connect to outreach tools",
          ],
        },
      },
      {
        id: "professional",
        name: { sr: "Sales Hub Pro", en: "Sales Hub Pro" },
        price: { sr: "$90 / seat / mes", en: "$90 / seat / mo" },
        billingNote: {
          sr: "Onboarding $1.500 · min ~3 seat-a",
          en: "Onboarding $1,500 · ~3 seat min",
        },
        highlights: {
          sr: [
            "Sales sekvence",
            "Workflow automation",
            "Forecasting & custom reports",
            "Lead scoring",
            "Playbooks (Enterprise blizu)",
            "Salesforce sync",
          ],
          en: [
            "Sales sequences",
            "Workflow automation",
            "Forecasting & custom reports",
            "Lead scoring",
            "Playbooks (near Enterprise)",
            "Salesforce sync",
          ],
        },
      },
      {
        id: "enterprise",
        name: { sr: "Sales Hub Enterprise", en: "Sales Hub Enterprise" },
        price: { sr: "$150 / seat / mes", en: "$150 / seat / mo" },
        billingNote: {
          sr: "Onboarding $3.500 · min ~5–10 seat-ova",
          en: "Onboarding $3,500 · ~5–10 seat min",
        },
        highlights: {
          sr: [
            "Custom objects",
            "Conversation intelligence",
            "Advanced permissions",
            "Multi-touch attribution",
            "Predictive scoring",
            "SSO & enterprise security",
          ],
          en: [
            "Custom objects",
            "Conversation intelligence",
            "Advanced permissions",
            "Multi-touch attribution",
            "Predictive scoring",
            "SSO & enterprise security",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "Sales sekvence", en: "Sales sequences" },
        values: {
          free: { sr: "Ne", en: "No" },
          starter: { sr: "Ograničeno", en: "Limited" },
          professional: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Workflow automation", en: "Workflow automation" },
        values: {
          free: { sr: "Ne", en: "No" },
          starter: { sr: "Osnovno", en: "Basic" },
          professional: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Lead scoring", en: "Lead scoring" },
        values: {
          free: { sr: "Ne", en: "No" },
          starter: { sr: "Ne", en: "No" },
          professional: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Predictive", en: "Predictive" },
        },
      },
      {
        feature: { sr: "Forecasting", en: "Forecasting" },
        values: {
          free: { sr: "Ne", en: "No" },
          starter: { sr: "Ne", en: "No" },
          professional: { sr: "Da", en: "Yes" },
          enterprise: { sr: "AI", en: "AI" },
        },
      },
      {
        feature: { sr: "Custom objects", en: "Custom objects" },
        values: {
          free: { sr: "Ne", en: "No" },
          starter: { sr: "Ne", en: "No" },
          professional: { sr: "Ne", en: "No" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Onboarding fee", en: "Onboarding fee" },
        values: {
          free: { sr: "$0", en: "$0" },
          starter: { sr: "$0", en: "$0" },
          professional: { sr: "$1.500", en: "$1,500" },
          enterprise: { sr: "$3.500", en: "$3,500" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Srednja do napredna", en: "Medium to advanced" },
    description: {
      sr: "Free CRM → import kontakata → povežite inbox i kalendar → pipeline stage-ovi → integracije (Clay webhook, Instantly sync). Za Pro: workflow-i za lead routing i sekvence. Planirajte RevOps vreme za čist data model pre skaliranja.",
      en: "Free CRM → import contacts → connect inbox and calendar → pipeline stages → integrations (Clay webhook, Instantly sync). For Pro: workflows for lead routing and sequences. Plan RevOps time for a clean data model before scaling.",
    },
  },
  pros: {
    sr: [
      "Ekosistem — sve na jednom mestu",
      "Standard u B2B — lako naći integracije",
      "Free tier za validaciju procesa",
      "Odličan za inbound + sales handoff",
      "Ogromna baza edukacije i partnera",
    ],
    en: [
      "Ecosystem — much in one place",
      "B2B standard — easy integrations",
      "Free tier to validate process",
      "Great for inbound + sales handoff",
      "Huge education and partner network",
    ],
  },
  cons: {
    sr: [
      "Cena raste brzo na Pro/Enterprise",
      "Onboarding fee na višim tier-ima",
      "Nije optimizovan za cold email volume",
      "Kompleksnost — lako preopteretiti tim",
      "Marketing Hub posebna naplata",
    ],
    en: [
      "Cost ramps fast on Pro/Enterprise",
      "Onboarding fees on higher tiers",
      "Not optimized for cold email volume",
      "Complexity — easy to overwhelm the team",
      "Marketing Hub billed separately",
    ],
  },
  alternatives: [
    {
      slug: "attio",
      name: "Attio",
      description: {
        sr: "AI-native CRM — fleksibilniji data model.",
        en: "AI-native CRM — more flexible data model.",
      },
      startingPrice: { sr: "od $36", en: "from $36" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "CRM", en: "CRM" },
    },
    {
      slug: "nocrm",
      name: "noCRM",
      description: {
        sr: "Sales-first CRM — manje admina.",
        en: "Sales-first CRM — less admin overhead.",
      },
      startingPrice: { sr: "od €11", en: "from €11" },
      trial: { sr: "15 dana", en: "15 days" },
      category: { sr: "CRM", en: "CRM" },
    },
    {
      slug: "instantly",
      name: "Instantly",
      description: {
        sr: "Cold email — često pored HubSpot-a.",
        en: "Cold email — often alongside HubSpot.",
      },
      startingPrice: { sr: "od $37", en: "from $37" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
    {
      slug: "revsure",
      name: "RevSure",
      description: {
        sr: "Attribution layer iznad HubSpot-a.",
        en: "Attribution layer on top of HubSpot.",
      },
      startingPrice: { sr: "od $4.000", en: "from $4,000" },
      trial: { sr: "Demo", en: "Demo" },
      category: { sr: "Analitika", en: "Analytics" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko košta HubSpot?", en: "How much does HubSpot cost?" },
      answer: {
        sr: "Free CRM $0. Sales Hub Starter $9/seat/mes (godišnje) ili $15 mesečno. Professional $90/seat + $1.500 onboarding. Enterprise $150/seat + $3.500 onboarding. Marketing i Service hub-ovi se naplaćuju posebno.",
        en: "Free CRM $0. Sales Hub Starter $9/seat/mo (annual) or $15 monthly. Professional $90/seat + $1,500 onboarding. Enterprise $150/seat + $3,500 onboarding. Marketing and Service hubs are billed separately.",
      },
    },
    {
      question: {
        sr: "Da li zamenjuje Instantly/Lemlist?",
        en: "Does it replace Instantly/Lemlist?",
      },
      answer: {
        sr: "Ne za cold email na velikom volumenu. HubSpot je CRM + marketing automation; Instantly/Lemlist su infrastruktura za inbox rotation i deliverability. Tipičan stack: outreach alat → sync u HubSpot.",
        en: "Not for high-volume cold email. HubSpot is CRM + marketing automation; Instantly/Lemlist are infrastructure for inbox rotation and deliverability. Typical stack: outreach tool → sync to HubSpot.",
      },
    },
    {
      question: { sr: "Zašto izabrati HubSpot?", en: "Why choose HubSpot?" },
      answer: {
        sr: "Kada vam treba jedan centralni sistem za marketing, sales i reporting — posebno ako imate inbound kanale i želite da RevOps vidi ceo funnel.",
        en: "When you need one central system for marketing, sales, and reporting — especially with inbound channels and RevOps visibility across the funnel.",
      },
    },
    {
      question: {
        sr: "Koji Hub treba sales tim?",
        en: "Which Hub does a sales team need?",
      },
      answer: {
        sr: "Sales Hub. Starter za mali tim bez sekvenci; Professional kada vam trebaju workflow-i, sekvence i forecasting. Free CRM može biti dovoljan na početku.",
        en: "Sales Hub. Starter for small teams without sequences; Professional when you need workflows, sequences, and forecasting. Free CRM can be enough at the start.",
      },
    },
    {
      question: { sr: "Da li ima API?", en: "Does it have an API?" },
      answer: {
        sr: "Da — robustan API i marketplace integracija (Clay, Zapier, n8n). Limiti rastu sa tier-om.",
        en: "Yes — robust API and marketplace integrations (Clay, Zapier, n8n). Limits increase with tier.",
      },
    },
  ],
  integrations: {
    sr: [
      "Clay",
      "Instantly",
      "Lemlist",
      "Gmail / Outlook",
      "Salesforce",
      "Slack",
      "Zapier",
      "n8n",
      "LinkedIn",
    ],
    en: [
      "Clay",
      "Instantly",
      "Lemlist",
      "Gmail / Outlook",
      "Salesforce",
      "Slack",
      "Zapier",
      "n8n",
      "LinkedIn",
    ],
  },
};
