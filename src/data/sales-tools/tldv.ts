import type { SalesTool } from "@/types/sales-tool";

export const tldvTool: SalesTool = {
  slug: "tldv",
  name: "tl;dv",
  logo: "/images/sales-tools/tldv.png",
  tagline: {
    sr: "AI meeting recorder — transkripcija na srpskom, CRM sync i sales coaching",
    en: "AI meeting recorder — Serbian transcription, CRM sync, and sales coaching",
  },
  categoryId: "conversation-intelligence",
  category: { sr: "Conversation intelligence", en: "Conversation intelligence" },
  categories: {
    sr: [
      "Snimanje Zoom / Meet / Teams",
      "Transkripcija 30+ jezika",
      "Srpski jezik (Whisper)",
      "AI meeting notes",
      "CRM auto-update",
      "Sales playbooks (MEDDIC…)",
    ],
    en: [
      "Zoom / Meet / Teams recording",
      "30+ language transcription",
      "Serbian (Whisper)",
      "AI meeting notes",
      "CRM auto-update",
      "Sales playbooks (MEDDIC…)",
    ],
  },
  websiteUrl: "https://tldv.io/",
  recommended: true,
  rating: { g2: 4.6, g2Reviews: 400 },
  overview: {
    sr: "tl;dv snima, transkribuje i sumira sales i interne sastanke na Zoom, Google Meet i MS Teams — sa AI beleškama koje idu direktno u HubSpot/Salesforce. **Podržava srpski jezik** putem Premium Whisper modela (auto-detekcija na Business+ planu).",
    en: "tl;dv records, transcribes, and summarizes sales and internal meetings on Zoom, Google Meet, and MS Teams — with AI notes pushed to HubSpot/Salesforce. **Supports Serbian** via the Premium Whisper model (auto-detection on Business+).",
  },
  overviewExtended: {
    sr: "Free plan za test. Pro **$29/user/mes** ($18 godišnje) — unlimited AI notes. Business **$98** ($59 godišnje) — native CRM, sales coaching, **Whisper za srpski i višejezične pozive**. Nije CRM — sloj iznad vašeg stack-a; uparite sa Attention za enterprise AI agente.",
    en: "Free plan to test. Pro **$29/user/mo** ($18 annual) — unlimited AI notes. Business **$98** ($59 annual) — native CRM, sales coaching, **Whisper for Serbian and multilingual calls**. Not a CRM — a layer on your stack; pair with Attention for enterprise AI agents.",
  },
  idealFor: {
    sr: [
      "B2B sales timovi na Zoom/Meet",
      "RevOps koji žele CRM bez ručnog unosa",
      "Timovi sa srpskim / balkanskim klijentima",
      "CS i product koji dele call insights",
      "SMB koji žele free start pre upgrade-a",
    ],
    en: [
      "B2B sales teams on Zoom/Meet",
      "RevOps wanting CRM without manual entry",
      "Teams with Serbian / Balkan clients",
      "CS and product sharing call insights",
      "SMBs wanting a free start before upgrading",
    ],
  },
  keyFeatures: {
    sr: [
      "**Transkripcija na srpskom** (Whisper, Business+)",
      "30+ jezika (hrvatski, bugarski, ukrajinski…)",
      "AI clip-ovi i highlight momenti",
      "CRM field mapping (Business+)",
      "Speaker analytics & talk-to-listen",
      "Recurring AI reports (multi-meeting)",
    ],
    en: [
      "**Serbian transcription** (Whisper, Business+)",
      "30+ languages (Croatian, Bulgarian, Ukrainian…)",
      "AI clips and highlight moments",
      "CRM field mapping (Business+)",
      "Speaker analytics & talk-to-listen",
      "Recurring AI reports (multi-meeting)",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "$0 (Free)", en: "$0 (Free)" },
    },
    {
      label: { sr: "Srpski jezik", en: "Serbian" },
      value: { sr: "Da (Whisper)", en: "Yes (Whisper)" },
    },
    {
      label: { sr: "Pro (god.)", en: "Pro (annual)" },
      value: { sr: "$18 / user", en: "$18 / user" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "Free plan", en: "Free plan" },
    },
  ],
  pricing: {
    startingPrice: { sr: "od $0 (Free)", en: "from $0 (Free)" },
    billing: {
      sr: "Po seat-u · -40% godišnje",
      en: "Per seat · 40% off annual",
    },
    trial: {
      sr: "Free plan · bez kartice",
      en: "Free plan · no card required",
    },
    plans: [
      {
        id: "free",
        name: { sr: "Free", en: "Free" },
        price: { sr: "$0", en: "$0" },
        billingNote: {
          sr: "Unlimited snimanja · limitirani AI",
          en: "Unlimited recordings · limited AI",
        },
        highlights: {
          sr: [
            "Unlimited snimanja & transkripti",
            "30+ jezika transkripcije",
            "10 AI notes (lifetime)",
            "5 manual upload-a",
            "Slack & calendar integracije",
            "3 meseca storage",
          ],
          en: [
            "Unlimited recordings & transcripts",
            "30+ transcription languages",
            "10 AI notes (lifetime)",
            "5 manual uploads",
            "Slack & calendar integrations",
            "3 months storage",
          ],
        },
      },
      {
        id: "pro",
        name: { sr: "Pro", en: "Pro" },
        price: { sr: "$29 / mes", en: "$29 / mo" },
        billingNote: {
          sr: "$18/mes godišnje · unlimited AI",
          en: "$18/mo annual · unlimited AI",
        },
        highlights: {
          sr: [
            "Unlimited AI summaries",
            "HubSpot / Notion / Zapier",
            "Speaker recognition",
            "Tim sharing & folders",
            "Standard transkripcija (30+ jezika)",
            "Bez native Salesforce (Business+)",
          ],
          en: [
            "Unlimited AI summaries",
            "HubSpot / Notion / Zapier",
            "Speaker recognition",
            "Team sharing & folders",
            "Standard transcription (30+ languages)",
            "No native Salesforce (Business+)",
          ],
        },
      },
      {
        id: "business",
        name: { sr: "Business", en: "Business" },
        price: { sr: "$98 / mes", en: "$98 / mo" },
        billingNote: {
          sr: "$59/mes godišnje · Whisper + CRM",
          en: "$59/mo annual · Whisper + CRM",
        },
        highlights: {
          sr: [
            "**Whisper — srpski auto-detekcija**",
            "Native Salesforce & HubSpot",
            "Sales coaching & playbooks",
            "Multi-meeting AI reports",
            "Custom dictionary (tim)",
            "Deal intelligence",
          ],
          en: [
            "**Whisper — Serbian auto-detection**",
            "Native Salesforce & HubSpot",
            "Sales coaching & playbooks",
            "Multi-meeting AI reports",
            "Team custom dictionary",
            "Deal intelligence",
          ],
        },
      },
      {
        id: "enterprise",
        name: { sr: "Enterprise", en: "Enterprise" },
        price: { sr: "Custom", en: "Custom" },
        billingNote: { sr: "50+ users · compliance", en: "50+ users · compliance" },
        highlights: {
          sr: [
            "SSO & advanced security",
            "Data residency opcije",
            "Dedicated support",
            "Custom SLA",
            "Admin controls (AI settings)",
            "Volume discount",
          ],
          en: [
            "SSO & advanced security",
            "Data residency options",
            "Dedicated support",
            "Custom SLA",
            "Admin controls (AI settings)",
            "Volume discount",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "Srpski jezik", en: "Serbian language" },
        values: {
          free: { sr: "Standard model*", en: "Standard model*" },
          pro: { sr: "Standard model*", en: "Standard model*" },
          business: { sr: "Whisper ✓", en: "Whisper ✓" },
          enterprise: { sr: "Whisper ✓", en: "Whisper ✓" },
        },
      },
      {
        feature: { sr: "AI notes", en: "AI notes" },
        values: {
          free: { sr: "10 lifetime", en: "10 lifetime" },
          pro: { sr: "Unlimited", en: "Unlimited" },
          business: { sr: "Unlimited", en: "Unlimited" },
          enterprise: { sr: "Unlimited", en: "Unlimited" },
        },
      },
      {
        feature: { sr: "Native CRM", en: "Native CRM" },
        values: {
          free: { sr: "Zapier", en: "Zapier" },
          pro: { sr: "HubSpot (Zapier)", en: "HubSpot (Zapier)" },
          business: { sr: "SF + HubSpot", en: "SF + HubSpot" },
          enterprise: { sr: "Pun", en: "Full" },
        },
      },
      {
        feature: { sr: "Sales coaching", en: "Sales coaching" },
        values: {
          free: { sr: "Ne", en: "No" },
          pro: { sr: "Osnovno", en: "Basic" },
          business: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Whisper model", en: "Whisper model" },
        values: {
          free: { sr: "Ne", en: "No" },
          pro: { sr: "Ne", en: "No" },
          business: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Početni", en: "Beginner" },
    description: {
      sr: "Instalirajte Chrome extension ili desktop app → povežite kalendar → prvi snimak → Preferences: izaberite jezik (za srpski: Business+ i Whisper auto-detect) → mapirajte CRM template na Business. Free plan dovoljan za test srpskih poziva.",
      en: "Install Chrome extension or desktop app → connect calendar → first recording → Preferences: set language (for Serbian: Business+ and Whisper auto-detect) → map CRM template on Business. Free plan enough to test Serbian calls.",
    },
  },
  pros: {
    sr: [
      "**Eksplicitna podrška za srpski** (Whisper)",
      "Generozan free plan",
      "Javna, transparentna cena",
      "Native CRM na Business",
      "Koristi ceo tim (ne samo sales)",
    ],
    en: [
      "**Explicit Serbian support** (Whisper)",
      "Generous free plan",
      "Public, transparent pricing",
      "Native CRM on Business",
      "Whole team can use it (not sales-only)",
    ],
  },
  cons: {
    sr: [
      "Whisper (srpski) tek na Business+",
      "Standard model nema sr u dropdown-u",
      "Skok cene Pro → Business",
      "Free plan limitira AI notes",
      "Nije zamena za Gong enterprise depth",
    ],
    en: [
      "Whisper (Serbian) only on Business+",
      "Standard model has no Serbian in dropdown",
      "Steep Pro → Business price jump",
      "Free plan limits AI notes",
      "Not a Gong-level enterprise depth replacement",
    ],
  },
  alternatives: [
    {
      slug: "attention",
      name: "Attention",
      description: {
        sr: "Enterprise AI sales agenti.",
        en: "Enterprise AI sales agents.",
      },
      startingPrice: { sr: "Custom", en: "Custom" },
      trial: { sr: "Demo", en: "Demo" },
      category: { sr: "Conversation intelligence", en: "Conversation intelligence" },
    },
    {
      slug: "hubspot",
      name: "HubSpot",
      description: {
        sr: "CRM sync destinacija.",
        en: "CRM sync destination.",
      },
      startingPrice: { sr: "od $0", en: "from $0" },
      trial: { sr: "Free CRM", en: "Free CRM" },
      category: { sr: "CRM", en: "CRM" },
    },
    {
      slug: "n8n",
      name: "n8n",
      description: {
        sr: "Automatizacija posle transkripta.",
        en: "Automation after transcripts.",
      },
      startingPrice: { sr: "od $24", en: "from $24" },
      trial: { sr: "Free tier", en: "Free tier" },
      category: { sr: "Analitika", en: "Analytics" },
    },
    {
      slug: "instantly",
      name: "Instantly",
      description: {
        sr: "Outbound — pre discovery poziva.",
        en: "Outbound — before discovery calls.",
      },
      startingPrice: { sr: "od $37", en: "from $37" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
  ],
  faq: [
    {
      question: {
        sr: "Da li tl;dv podržava srpski jezik?",
        en: "Does tl;dv support Serbian?",
      },
      answer: {
        sr: "Da. Za srpske sales pozive koristite Premium Whisper model (Business+ plan): auto-detektuje srpski i podržava više jezika u jednom sastanku. Standardni model pokriva 30+ jezika (uključujući hrvatski); za punu podršku srpskom preporučujemo Whisper.",
        en: "Yes. For Serbian sales calls use the Premium Whisper model (Business+ plan): it auto-detects Serbian and supports multiple languages in one meeting. The standard model covers 30+ languages (including Croatian); for full Serbian support we recommend Whisper.",
      },
    },
    {
      question: { sr: "Koliko košta tl;dv?", en: "How much does tl;dv cost?" },
      answer: {
        sr: "Free $0. Pro $29/mes ($18 godišnje). Business $98/mes ($59 godišnje) — Whisper + CRM. Enterprise custom. Trenutno ~40% popusta na godišnje planove.",
        en: "Free $0. Pro $29/mo ($18 annual). Business $98/mo ($59 annual) — Whisper + CRM. Enterprise custom. Currently ~40% off annual plans.",
      },
    },
    {
      question: { sr: "Zašto izabrati tl;dv?", en: "Why choose tl;dv?" },
      answer: {
        sr: "Kada vam treba meeting intelligence sa javnom cenom, free startom i srpskom transkripcijom — bez enterprise sales ciklusa kao kod Gong/Attention.",
        en: "When you need meeting intelligence with public pricing, a free start, and Serbian transcription — without the enterprise sales cycle of Gong/Attention.",
      },
    },
    {
      question: { sr: "tl;dv vs Attention?", en: "tl;dv vs Attention?" },
      answer: {
        sr: "tl;dv: transparentno, free plan, srpski Whisper, širi use (CS, product). Attention: enterprise AI agenti, skrivena cena, jači autonomni CRM workflow za velike revenue timove.",
        en: "tl;dv: transparent, free plan, Serbian Whisper, broader use (CS, product). Attention: enterprise AI agents, hidden pricing, stronger autonomous CRM workflows for large revenue teams.",
      },
    },
    {
      question: { sr: "Da li ima API?", en: "Does it have an API?" },
      answer: {
        sr: "Da — tl;dv API (v1alpha1) za transkripte, snimke i integracije u vaš stack.",
        en: "Yes — tl;dv API (v1alpha1) for transcripts, recordings, and integrations into your stack.",
      },
    },
  ],
  integrations: {
    sr: [
      "Zoom",
      "Google Meet",
      "Microsoft Teams",
      "HubSpot",
      "Salesforce",
      "Slack",
      "Notion",
      "Zapier",
    ],
    en: [
      "Zoom",
      "Google Meet",
      "Microsoft Teams",
      "HubSpot",
      "Salesforce",
      "Slack",
      "Notion",
      "Zapier",
    ],
  },
};
