import type { SalesTool } from "@/types/sales-tool";

export const breakcoldTool: SalesTool = {
  slug: "breakcold",
  name: "Breakcold",
  logo: "/images/sales-tools/breakcold.png",
  tagline: {
    sr: "AI-native CRM - LinkedIn inbox, pipeline i automatizacija za social selling",
    en: "AI-native CRM - LinkedIn inbox, pipeline, and automation for social selling",
  },
  categoryId: "crm",
  category: { sr: "CRM", en: "CRM" },
  categories: {
    sr: [
      "AI-native CRM",
      "Unified LinkedIn inbox",
      "Social selling",
      "AI agenti & workflow",
      "Data enrichment (50+ polja)",
      "Meeting recorder",
    ],
    en: [
      "AI-native CRM",
      "Unified LinkedIn inbox",
      "Social selling",
      "AI agents & workflows",
      "Data enrichment (50+ fields)",
      "Meeting recorder",
    ],
  },
  websiteUrl: "https://www.breakcold.com/",
  recommended: true,
  rating: { g2: 4.8, g2Reviews: 114 },
  overview: {
    sr: "Breakcold je CRM za prodavce koji žive na LinkedIn-u i emailu: jedan inbox za kanale, AI koji pomera leadove kroz pipeline i automatizuje follow-up, bez ručnog copy-paste-a između tabova.",
    en: "Breakcold is a CRM for reps who live on LinkedIn and email: one inbox across channels, AI that moves leads through the pipeline, and automated follow-ups, without copy-pasting between tabs.",
  },
  overviewExtended: {
    sr: "Essentials **$30/user/mes**, Pro **$60** (unified LinkedIn inbox, sweet spot), Max **$100** (Telegram, napredna analitika). Godišnja naplata štedi do 30%. 14-dan trial. Nije cold email sequencer, koristite uz Instantly/Lemlist; Breakcold je gde social selling i CRM susreću.",
    en: "Essentials **$30/user/mo**, Pro **$60** (unified LinkedIn inbox, sweet spot), Max **$100** (Telegram, advanced analytics). Annual billing saves up to 30%. 14-day trial. Not a cold email sequencer, pair with Instantly/Lemlist; Breakcold is where social selling meets CRM.",
  },
  idealFor: {
    sr: [
      "Agencije i konsultanti na LinkedIn-u",
      "Founder-led sales",
      "Startapovi sa social selling motion-om",
      "Timovi koji žele jeftiniji HubSpot za LinkedIn CRM",
      "SMB outbound bez enterprise CRM-a",
    ],
    en: [
      "Agencies and consultants on LinkedIn",
      "Founder-led sales",
      "Startups with a social selling motion",
      "Teams wanting a cheaper HubSpot for LinkedIn CRM",
      "SMB outbound without enterprise CRM",
    ],
  },
  keyFeatures: {
    sr: [
      "Unified inbox (email + LinkedIn na Pro+)",
      "AI agenti, auto pipeline & taskovi",
      "Besplatno enrichment 50+ datapointa",
      "Meeting recorder (2-10h/mes po planu)",
      "Zapier & API",
      "Workspace za agencije",
    ],
    en: [
      "Unified inbox (email + LinkedIn on Pro+)",
      "AI agents, auto pipeline & tasks",
      "Free enrichment on 50+ data points",
      "Meeting recorder (2-10h/mo by plan)",
      "Zapier & API",
      "Workspaces for agencies",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "$30 / user", en: "$30 / user" },
    },
    {
      label: { sr: "Najpopularniji", en: "Most popular" },
      value: { sr: "Pro $60", en: "Pro $60" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "14 dana", en: "14 days" },
    },
    {
      label: { sr: "G2", en: "G2" },
      value: { sr: "4.8 / 5", en: "4.8 / 5" },
    },
  ],
  pricing: {
    startingPrice: { sr: "od $30 / user / mes", en: "from $30 / user / mo" },
    billing: {
      sr: "Po seat-u · godišnje -30%",
      en: "Per seat · 30% off annual",
    },
    trial: { sr: "14 dana · bez kartice", en: "14 days · no card" },
    plans: [
      {
        id: "essentials",
        name: { sr: "CRM Essentials", en: "CRM Essentials" },
        price: { sr: "$30 / mes", en: "$30 / mo" },
        billingNote: {
          sr: "~$24/mes godišnje · 25 AI leadova",
          en: "~$24/mo annual · 25 AI leads",
        },
        highlights: {
          sr: [
            "Unified email inbox",
            "Unlimited kontakti & pipeline",
            "CRM analytics (30 dana)",
            "7+ platformi za lead capture",
            "2h meeting recording/mes",
            "API & Zapier",
          ],
          en: [
            "Unified email inbox",
            "Unlimited contacts & pipelines",
            "CRM analytics (30 days)",
            "7+ platforms for lead capture",
            "2h meeting recording/mo",
            "API & Zapier",
          ],
        },
      },
      {
        id: "pro",
        name: { sr: "CRM Pro", en: "CRM Pro" },
        price: { sr: "$60 / mes", en: "$60 / mo" },
        billingNote: {
          sr: "~$48/mes godišnje · LinkedIn inbox",
          en: "~$48/mo annual · LinkedIn inbox",
        },
        highlights: {
          sr: [
            "Unified LinkedIn inbox",
            "AI CRM agenti & workflow",
            "Unlimited analytics history",
            "Auto lead scoring",
            "Email kampanje",
            "5h meeting recording/mes",
          ],
          en: [
            "Unified LinkedIn inbox",
            "AI CRM agents & workflows",
            "Unlimited analytics history",
            "Auto lead scoring",
            "Email campaigns",
            "5h meeting recording/mo",
          ],
        },
      },
      {
        id: "max",
        name: { sr: "CRM Max", en: "CRM Max" },
        price: { sr: "$100 / mes", en: "$100 / mo" },
        billingNote: {
          sr: "~$80/mes godišnje · 3 social inbox-a",
          en: "~$80/mo annual · 3 social inboxes",
        },
        highlights: {
          sr: [
            "3 social inbox-a / naloga",
            "Telegram inbox & auto-sync",
            "Advanced analytics blocks",
            "200 AI leadova/seat",
            "10h meeting recording/mes",
            "Priority support",
          ],
          en: [
            "3 social inboxes / accounts",
            "Telegram inbox & auto-sync",
            "Advanced analytics blocks",
            "200 AI leads/seat",
            "10h meeting recording/mo",
            "Priority support",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "LinkedIn unified inbox", en: "LinkedIn unified inbox" },
        values: {
          essentials: { sr: "Ne", en: "No" },
          pro: { sr: "Da", en: "Yes" },
          max: { sr: "3 naloga", en: "3 accounts" },
        },
      },
      {
        feature: { sr: "AI CRM agenti", en: "AI CRM agents" },
        values: {
          essentials: { sr: "Ne", en: "No" },
          pro: { sr: "Da", en: "Yes" },
          max: { sr: "Napredno", en: "Advanced" },
        },
      },
      {
        feature: { sr: "Meeting recording", en: "Meeting recording" },
        values: {
          essentials: { sr: "2h/mes", en: "2h/mo" },
          pro: { sr: "5h/mes", en: "5h/mo" },
          max: { sr: "10h/mes", en: "10h/mo" },
        },
      },
      {
        feature: { sr: "Analytics history", en: "Analytics history" },
        values: {
          essentials: { sr: "30 dana", en: "30 days" },
          pro: { sr: "Unlimited", en: "Unlimited" },
          max: { sr: "Advanced", en: "Advanced" },
        },
      },
      {
        feature: { sr: "Telegram", en: "Telegram" },
        values: {
          essentials: { sr: "Ne", en: "No" },
          pro: { sr: "Ne", en: "No" },
          max: { sr: "Da", en: "Yes" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Početni", en: "Beginner" },
    description: {
      sr: "Trial → povežite LinkedIn i email → import leadova → podesite pipeline → Pro za LinkedIn inbox. Za agencije: workspace po klijentu. Tokeni pokreću AI enrichment, većina enrichment-a je besplatna.",
      en: "Trial → connect LinkedIn and email → import leads → set pipeline → Pro for LinkedIn inbox. For agencies: workspace per client. Tokens power AI enrichment, most enrichment is free.",
    },
  },
  pros: {
    sr: [
      "Odličan za LinkedIn social selling",
      "Jeftiniji od enterprise CRM-a",
      "AI štedi vreme na CRM update-ima",
      "Unified inbox smanjuje tab switching",
      "14-dnevni trial bez kartice",
    ],
    en: [
      "Great for LinkedIn social selling",
      "Cheaper than enterprise CRMs",
      "AI saves time on CRM updates",
      "Unified inbox cuts tab switching",
      "14-day trial without a card",
    ],
  },
  cons: {
    sr: [
      "LinkedIn inbox tek na Pro+",
      "Nije cold email infrastruktura",
      "Nije full marketing automation",
      "Max potreban za Telegram",
      "Per-seat skalira sa timom",
    ],
    en: [
      "LinkedIn inbox only on Pro+",
      "Not cold email infrastructure",
      "Not full marketing automation",
      "Max needed for Telegram",
      "Per-seat cost scales with team",
    ],
  },
  alternatives: [
    {
      slug: "nocrm",
      name: "noCRM",
      description: {
        sr: "Sales-first CRM bez social inbox-a.",
        en: "Sales-first CRM without social inbox.",
      },
      startingPrice: { sr: "od €11", en: "from €11" },
      trial: { sr: "15 dana", en: "15 days" },
      category: { sr: "CRM", en: "CRM" },
    },
    {
      slug: "hubspot",
      name: "HubSpot",
      description: {
        sr: "Full GTM platforma.",
        en: "Full GTM platform.",
      },
      startingPrice: { sr: "od $0", en: "from $0" },
      trial: { sr: "Free CRM", en: "Free CRM" },
      category: { sr: "CRM", en: "CRM" },
    },
    {
      slug: "attio",
      name: "Attio",
      description: {
        sr: "Modern AI CRM.",
        en: "Modern AI CRM.",
      },
      startingPrice: { sr: "od $36", en: "from $36" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "CRM", en: "CRM" },
    },
    {
      slug: "heyreach",
      name: "HeyReach",
      description: {
        sr: "LinkedIn outreach, druga namena.",
        en: "LinkedIn outreach, different use case.",
      },
      startingPrice: { sr: "od $79", en: "from $79" },
      trial: { sr: "7 dana", en: "7 days" },
      category: { sr: "LinkedIn outreach", en: "LinkedIn outreach" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko košta Breakcold?", en: "How much does Breakcold cost?" },
      answer: {
        sr: "Essentials $30/user/mes ($24 godišnje). Pro $60 ($48 godišnje), uključuje LinkedIn inbox. Max $100 ($80 godišnje). Kvartalno -20%, godišnje -30%.",
        en: "Essentials $30/user/mo ($24 annual). Pro $60 ($48 annual), includes LinkedIn inbox. Max $100 ($80 annual). Quarterly -20%, annual -30%.",
      },
    },
    {
      question: { sr: "Da li ima besplatan plan?", en: "Is there a free plan?" },
      answer: {
        sr: "Nema trajnog free plana - 14-dnevni trial sa punim pristupom, bez kartice.",
        en: "No permanent free plan - 14-day trial with full access, no card required.",
      },
    },
    {
      question: { sr: "Zašto izabrati Breakcold?", en: "Why choose Breakcold?" },
      answer: {
        sr: "Kada vam je LinkedIn centralan kanal prodaje i treba CRM koji živi u tom workflow-u, ne odvojen tab koji niko ne popunjava.",
        en: "When LinkedIn is your core sales channel and you need a CRM that lives in that workflow, not a separate tab nobody fills in.",
      },
    },
    {
      question: {
        sr: "Breakcold vs HubSpot?",
        en: "Breakcold vs HubSpot?",
      },
      answer: {
        sr: "HubSpot je marketing + sales platforma. Breakcold je social-selling CRM sa LinkedIn inbox-om, jeftiniji i fokusiraniji za outbound na LinkedIn-u.",
        en: "HubSpot is marketing + sales platform. Breakcold is a social-selling CRM with LinkedIn inbox, cheaper and more focused for LinkedIn outbound.",
      },
    },
    {
      question: { sr: "Da li ima API?", en: "Does it have an API?" },
      answer: {
        sr: "Da - API, webhooks i Zapier na svim planovima za integracije sa vašim stack-om.",
        en: "Yes - API, webhooks, and Zapier on all plans for integrations with your stack.",
      },
    },
  ],
  integrations: {
    sr: [
      "LinkedIn",
      "Gmail",
      "Outlook",
      "WhatsApp",
      "Telegram",
      "Zapier",
      "API",
    ],
    en: [
      "LinkedIn",
      "Gmail",
      "Outlook",
      "WhatsApp",
      "Telegram",
      "Zapier",
      "API",
    ],
  },
};
