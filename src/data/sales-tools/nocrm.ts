import type { SalesTool } from "@/types/sales-tool";

export const nocrmTool: SalesTool = {
  slug: "nocrm",
  name: "noCRM",
  logo: "/images/sales-tools/nocrm.png",
  tagline: {
    sr: "Sales-first CRM — pipeline, follow-up, bez teškog admina",
    en: "Sales-first CRM — pipeline, follow-ups, without heavy admin",
  },
  categoryId: "crm",
  category: { sr: "CRM", en: "CRM" },
  categories: {
    sr: [
      "Lead management",
      "Vizuelni pipeline",
      "Smart follow-up",
      "Quotes & fakture",
      "WhatsApp & VoIP",
      "Zapier (3000+)",
    ],
    en: [
      "Lead management",
      "Visual pipeline",
      "Smart follow-ups",
      "Quotes & invoices",
      "WhatsApp & VoIP",
      "Zapier (3,000+)",
    ],
  },
  websiteUrl: "https://www.nocrm.io/",
  recommended: true,
  rating: { g2: 4.7, g2Reviews: 500 },
  overview: {
    sr: "noCRM je CRM napravljen za prodavce, ne za marketing ops: brzo kreirate lead, vidite sledeći korak, podsetnici za follow-up i pipeline koji drži fokus na zatvaranju — bez Salesforce težine.",
    en: "noCRM is a CRM built for salespeople, not marketing ops: create leads fast, see the next step, follow-up reminders, and a pipeline focused on closing — without Salesforce weight.",
  },
  overviewExtended: {
    sr: "Starter od **€11/user/mes** (godišnje) — 500 leadova, 1 pipeline. Expert **€22** — unlimited leads, quotes, API. Dream **€33** — WhatsApp, email sync, tim management, automations. Trial 15 dana (30 sa karticom). Nije outreach sequencer — koristite uz Instantly/Expandi; noCRM je gde leadovi završavaju posle odgovora.",
    en: "Starter from **€11/user/mo** (annual) — 500 leads, 1 pipeline. Expert **€22** — unlimited leads, quotes, API. Dream **€33** — WhatsApp, email sync, team management, automations. 15-day trial (30 with card). Not an outreach sequencer — pair with Instantly/Expandi; noCRM is where leads land after they reply.",
  },
  idealFor: {
    sr: [
      "Solo prodavci i founderi",
      "SMB sales timovi (1–100 rep)",
      "Telesales i inside sales",
      "Timovi koji mrze kompleksan CRM",
      "Kompanije sa WhatsApp prodajom",
    ],
    en: [
      "Solo sellers and founders",
      "SMB sales teams (1–100 reps)",
      "Telesales and inside sales",
      "Teams that dislike complex CRMs",
      "Companies selling via WhatsApp",
    ],
  },
  keyFeatures: {
    sr: [
      "Brz onboarding (minuti)",
      "Lead iz email/WhatsApp/telefona",
      "Custom pipeline & tagovi",
      "Smart follow-up podsetnici",
      "Quotes & invoices (Expert+)",
      "Mobile app (iOS/Android)",
    ],
    en: [
      "Fast onboarding (minutes)",
      "Leads from email/WhatsApp/phone",
      "Custom pipeline & tags",
      "Smart follow-up reminders",
      "Quotes & invoices (Expert+)",
      "Mobile app (iOS/Android)",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "€11 / user", en: "€11 / user" },
    },
    {
      label: { sr: "Naplata", en: "Billing" },
      value: { sr: "Po user-u / seat-u", en: "Per user / seat" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "15–30 dana", en: "15–30 days" },
    },
    {
      label: { sr: "Hosting", en: "Hosting" },
      value: { sr: "EU · GDPR", en: "EU · GDPR" },
    },
  ],
  pricing: {
    startingPrice: { sr: "od €11 / user / mes", en: "from €11 / user / mo" },
    billing: {
      sr: "Po seat-u · godišnje do -40%",
      en: "Per seat · up to 40% off annual",
    },
    trial: {
      sr: "15 dana · 30 sa karticom",
      en: "15 days · 30 with card",
    },
    plans: [
      {
        id: "starter",
        name: { sr: "Starter", en: "Starter" },
        price: { sr: "€19 / mes", en: "€19 / mo" },
        billingNote: {
          sr: "~€11/mes godišnje · 500 leadova",
          en: "~€11/mo annual · 500 leads",
        },
        highlights: {
          sr: [
            "500 leadova · 1 pipeline",
            "Quick lead capture",
            "Notes & reminders",
            "Mobile app",
            "5.000 email/mes uključeno",
            "Novi klijenti only (plan)",
          ],
          en: [
            "500 leads · 1 pipeline",
            "Quick lead capture",
            "Notes & reminders",
            "Mobile app",
            "5,000 emails/mo included",
            "New customers only (plan)",
          ],
        },
      },
      {
        id: "expert",
        name: { sr: "Expert", en: "Expert" },
        price: { sr: "€29 / mes", en: "€29 / mo" },
        billingNote: {
          sr: "~€22/mes godišnje · unlimited",
          en: "~€22/mo annual · unlimited",
        },
        highlights: {
          sr: [
            "Unlimited leads & pipelines",
            "Quotes & invoices",
            "3.000+ Zapier integracija",
            "API (2.000 req/day)",
            "Advanced reporting",
            "Najbolji odnos cene za tim",
          ],
          en: [
            "Unlimited leads & pipelines",
            "Quotes & invoices",
            "3,000+ Zapier integrations",
            "API (2,000 req/day)",
            "Advanced reporting",
            "Best value for teams",
          ],
        },
      },
      {
        id: "dream",
        name: { sr: "Dream", en: "Dream" },
        price: { sr: "€39 / mes", en: "€39 / mo" },
        billingNote: {
          sr: "~€33/mes godišnje · tim & VoIP",
          en: "~€33/mo annual · team & VoIP",
        },
        highlights: {
          sr: [
            "WhatsApp & VoIP integracije",
            "2-way email sync",
            "Role & permissions",
            "Internal automations",
            "Team goals & reports",
            "Priority support",
          ],
          en: [
            "WhatsApp & VoIP integrations",
            "2-way email sync",
            "Roles & permissions",
            "Internal automations",
            "Team goals & reports",
            "Priority support",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "Lead limit", en: "Lead limit" },
        values: {
          starter: { sr: "500", en: "500" },
          expert: { sr: "Unlimited", en: "Unlimited" },
          dream: { sr: "Unlimited", en: "Unlimited" },
        },
      },
      {
        feature: { sr: "Pipelines", en: "Pipelines" },
        values: {
          starter: { sr: "1", en: "1" },
          expert: { sr: "Unlimited", en: "Unlimited" },
          dream: { sr: "Unlimited", en: "Unlimited" },
        },
      },
      {
        feature: { sr: "Quotes & invoices", en: "Quotes & invoices" },
        values: {
          starter: { sr: "Ne", en: "No" },
          expert: { sr: "Da", en: "Yes" },
          dream: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "WhatsApp sync", en: "WhatsApp sync" },
        values: {
          starter: { sr: "Ne", en: "No" },
          expert: { sr: "Ne", en: "No" },
          dream: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Email 2-way sync", en: "Email 2-way sync" },
        values: {
          starter: { sr: "BCC", en: "BCC" },
          expert: { sr: "BCC", en: "BCC" },
          dream: { sr: "2-way", en: "2-way" },
        },
      },
      {
        feature: { sr: "Team management", en: "Team management" },
        values: {
          starter: { sr: "Ne", en: "No" },
          expert: { sr: "Osnovno", en: "Basic" },
          dream: { sr: "Pun", en: "Full" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Početni", en: "Beginner" },
    description: {
      sr: "Trial → import CSV ili ručno dodavanje leadova → podesite pipeline stage-ove → daily follow-up lista → Expert za quotes i Zapier (Instantly → noCRM). Dream ako prodajete preko WhatsApp/VoIP i trebate tim permissions.",
      en: "Trial → import CSV or add leads manually → set pipeline stages → daily follow-up list → Expert for quotes and Zapier (Instantly → noCRM). Dream if you sell via WhatsApp/VoIP and need team permissions.",
    },
  },
  pros: {
    sr: [
      "Brz start — prodavci ga odmah koriste",
      "Fokus na akciju, ne na polja",
      "EU hosting & GDPR",
      "Dobar mobilni app",
      "Jeftiniji od enterprise CRM-a",
    ],
    en: [
      "Fast start — reps use it immediately",
      "Action-focused, not field-heavy",
      "EU hosting & GDPR",
      "Solid mobile app",
      "Cheaper than enterprise CRMs",
    ],
  },
  cons: {
    sr: [
      "Nije marketing automation platforma",
      "Starter limit 500 leadova",
      "Dream potreban za WhatsApp/email sync",
      "Manje enterprise feature-a od HubSpot-a",
      "Nema built-in cold email",
    ],
    en: [
      "Not a marketing automation platform",
      "Starter capped at 500 leads",
      "Dream needed for WhatsApp/email sync",
      "Fewer enterprise features than HubSpot",
      "No built-in cold email",
    ],
  },
  alternatives: [
    {
      slug: "attio",
      name: "Attio",
      description: {
        sr: "Modern AI CRM — više customizacije.",
        en: "Modern AI CRM — more customization.",
      },
      startingPrice: { sr: "od $36", en: "from $36" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "CRM", en: "CRM" },
    },
    {
      slug: "hubspot",
      name: "HubSpot",
      description: {
        sr: "Full platform — marketing + sales.",
        en: "Full platform — marketing + sales.",
      },
      startingPrice: { sr: "od $0", en: "from $0" },
      trial: { sr: "Free CRM", en: "Free CRM" },
      category: { sr: "CRM", en: "CRM" },
    },
    {
      slug: "apollo",
      name: "Apollo",
      description: {
        sr: "Baza + CRM u jednom.",
        en: "Database + CRM in one.",
      },
      startingPrice: { sr: "od $49", en: "from $49" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "instantly",
      name: "Instantly",
      description: {
        sr: "Outbound pre nego lead uđe u CRM.",
        en: "Outbound before leads enter CRM.",
      },
      startingPrice: { sr: "od $37", en: "from $37" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko košta noCRM?", en: "How much does noCRM cost?" },
      answer: {
        sr: "Starter ~€11/user/mes (godišnje, €19 mesečno). Expert ~€22 (€29 mesečno). Dream ~€33 (€39 mesečno). Svi planovi po seat-u; godišnja naplata štedi do 40%.",
        en: "Starter ~€11/user/mo (annual, €19 monthly). Expert ~€22 (€29 monthly). Dream ~€33 (€39 monthly). All plans per seat; annual billing saves up to 40%.",
      },
    },
    {
      question: { sr: "Da li ima besplatan plan?", en: "Is there a free plan?" },
      answer: {
        sr: "Nema trajnog free plana — 15-dnevni trial bez kartice (30 dana ako dodate karticu). Svi paid planovi se mogu probati.",
        en: "No permanent free plan — 15-day trial without a card (30 days if you add a card). All paid plans are available to try.",
      },
    },
    {
      question: { sr: "Zašto izabrati noCRM?", en: "Why choose noCRM?" },
      answer: {
        sr: "Kada prodavci ne koriste „težak“ CRM i treba im jasan sledeći korak + follow-up — bez marketing modula koje niko ne popunjava.",
        en: "When reps won't use a heavy CRM and need a clear next step + follow-ups — without marketing modules nobody fills in.",
      },
    },
    {
      question: {
        sr: "noCRM vs HubSpot?",
        en: "noCRM vs HubSpot?",
      },
      answer: {
        sr: "HubSpot je platforma za marketing + sales + reporting. noCRM je sales pipeline tool — brži, jeftiniji, manje feature-a. Često: HubSpot za marketing, noCRM za čist sales fokus (retko oba).",
        en: "HubSpot is marketing + sales + reporting platform. noCRM is a sales pipeline tool — faster, cheaper, fewer features. Often: HubSpot for marketing, noCRM for pure sales focus (rarely both).",
      },
    },
    {
      question: { sr: "Da li ima API?", en: "Does it have an API?" },
      answer: {
        sr: "Da — Expert+ uključuje API (2.000 poziva/dan na Expert; više na Dream). Zapier za 3.000+ integracija.",
        en: "Yes — Expert+ includes API (2,000 calls/day on Expert; more on Dream). Zapier for 3,000+ integrations.",
      },
    },
  ],
  integrations: {
    sr: [
      "Zapier",
      "Gmail",
      "Outlook",
      "WhatsApp",
      "Aircall",
      "CloudTalk",
      "JustCall",
      "API",
    ],
    en: [
      "Zapier",
      "Gmail",
      "Outlook",
      "WhatsApp",
      "Aircall",
      "CloudTalk",
      "JustCall",
      "API",
    ],
  },
};
