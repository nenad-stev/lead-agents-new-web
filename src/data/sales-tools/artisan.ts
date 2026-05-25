import type { SalesTool } from "@/types/sales-tool";

export const artisanTool: SalesTool = {
  slug: "artisan",
  name: "Artisan",
  logo: "/images/sales-tools/artisan.png",
  tagline: {
    sr: "AI BDR Ava — autonomni outbound od research-a do sastanka",
    en: "AI BDR Ava — autonomous outbound from research to meeting",
  },
  categoryId: "prospecting",
  category: { sr: "Prospecting", en: "Prospecting" },
  categories: {
    sr: [
      "AI BDR (Ava)",
      "Autonomne kampanje",
      "B2B baza kontakata",
      "Email + LinkedIn",
      "Krediti po akciji",
      "CRM sync",
    ],
    en: [
      "AI BDR (Ava)",
      "Autonomous campaigns",
      "B2B contact database",
      "Email + LinkedIn",
      "Credit-based actions",
      "CRM sync",
    ],
  },
  websiteUrl: "https://www.artisan.co/",
  recommended: true,
  rating: { g2: 4.5, g2Reviews: 95 },
  overview: {
    sr: "Artisan (Ava) je AI digitalni BDR: pronalazi leadove, radi dubinski research, personalizuje email i LinkedIn outreach, odgovara na reply-jeve i bookuje sastanke — umesto da SDR ručno radi isti ciklus.",
    en: "Artisan (Ava) is an AI digital BDR: finds leads, runs deep research, personalizes email and LinkedIn outreach, handles replies, and books meetings — instead of an SDR doing the same loop manually.",
  },
  overviewExtended: {
    sr: "Free plan (300 kredita/mes) za list building. Intern **$250/mes** (12k kredita) pokreće autonomne kampanje + HubSpot sync. Employee **$600/mes** (30k) za Salesforce i advanced campaign tipove. Trial: 10k kredita (~$300) bez kartice. Nije Clay — fokus je „zaposlite“ AI BDR-a, ne spreadsheet enrichment.",
    en: "Free plan (300 credits/mo) for list building. Intern **$250/mo** (12k credits) runs autonomous campaigns + HubSpot sync. Employee **$600/mo** (30k) adds Salesforce and advanced campaign types. Trial: 10k credits (~$300), no card. Not Clay — the focus is hiring an AI BDR, not spreadsheet enrichment.",
  },
  idealFor: {
    sr: [
      "Outbound timovi koji skaliraju bez novog BDR-a",
      "Founderi sa ograničenim SDR budžetom",
      "Startup do mid-market B2B",
      "Timovi koji već imaju CRM (HubSpot/SF)",
      "Agencije koje testiraju AI outbound",
    ],
    en: [
      "Outbound teams scaling without another BDR hire",
      "Founders with limited SDR budget",
      "Startup to mid-market B2B",
      "Teams already on CRM (HubSpot/SF)",
      "Agencies testing AI outbound",
    ],
  },
  keyFeatures: {
    sr: [
      "Ava — autonomni AI BDR",
      "Agent swarm research",
      "Autonomous replies & meeting booking",
      "Website visitor de-anonymization",
      "Deliverability monitoring",
      "Power dialer add-on ($67/seat)",
    ],
    en: [
      "Ava — autonomous AI BDR",
      "Agent swarm research",
      "Autonomous replies & meeting booking",
      "Website visitor de-anonymization",
      "Deliverability monitoring",
      "Power dialer add-on ($67/seat)",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "$0 (Free)", en: "$0 (Free)" },
    },
    {
      label: { sr: "Intern plan", en: "Intern plan" },
      value: { sr: "$250 / mes", en: "$250 / mo" },
    },
    {
      label: { sr: "Naplata", en: "Billing" },
      value: { sr: "Krediti po akciji", en: "Credits per action" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "10k kredita · bez kartice", en: "10k credits · no card" },
    },
  ],
  pricing: {
    startingPrice: { sr: "od $0 (Free)", en: "from $0 (Free)" },
    billing: {
      sr: "Krediti · godišnje -10%",
      en: "Credits · 10% off annual",
    },
    trial: {
      sr: "10k kredita · 30 dana · bez kartice",
      en: "10k credits · 30 days · no card",
    },
    plans: [
      {
        id: "free",
        name: { sr: "Free", en: "Free" },
        price: { sr: "$0", en: "$0" },
        billingNote: { sr: "300 kredita / mesec", en: "300 credits / month" },
        highlights: {
          sr: [
            "Find leads & enrichment",
            "Agent swarm research",
            "CSV import/export",
            "Bez autonomnih kampanja",
            "Bez CRM sync-a",
            "Dobar POC",
          ],
          en: [
            "Find leads & enrichment",
            "Agent swarm research",
            "CSV import/export",
            "No autonomous campaigns",
            "No CRM sync",
            "Good POC",
          ],
        },
      },
      {
        id: "intern",
        name: { sr: "Intern", en: "Intern" },
        price: { sr: "$250 / mes", en: "$250 / mo" },
        billingNote: {
          sr: "Godišnje · 12k kredita upfront",
          en: "Annual · 12k credits upfront",
        },
        highlights: {
          sr: [
            "Autonomous campaigns & replies",
            "HubSpot CRM sync",
            "Deliverability monitoring",
            "Slack integracija",
            "~22 kredita po kontaktu (tipično)",
            "Power dialer +$67/seat",
          ],
          en: [
            "Autonomous campaigns & replies",
            "HubSpot CRM sync",
            "Deliverability monitoring",
            "Slack integration",
            "~22 credits per contact (typical)",
            "Power dialer +$67/seat",
          ],
        },
      },
      {
        id: "employee",
        name: { sr: "Employee", en: "Employee" },
        price: { sr: "$600 / mes", en: "$600 / mo" },
        billingNote: {
          sr: "Godišnje · 30k kredita",
          en: "Annual · 30k credits",
        },
        highlights: {
          sr: [
            "Salesforce sync",
            "Advanced campaign types",
            "Full self-driving Ava",
            "Cross-sell / upsell kampanje",
            "Webhooks (uskoro)",
            "Priority support",
          ],
          en: [
            "Salesforce sync",
            "Advanced campaign types",
            "Full self-driving Ava",
            "Cross-sell / upsell campaigns",
            "Webhooks (coming soon)",
            "Priority support",
          ],
        },
      },
      {
        id: "enterprise",
        name: { sr: "Enterprise", en: "Enterprise" },
        price: { sr: "Custom", en: "Custom" },
        billingNote: { sr: "Custom volume", en: "Custom volume" },
        highlights: {
          sr: [
            "Forward deployed implementation",
            "Campaign strategy session",
            "Dedicated CSM + Slack",
            "SSO / SAML",
            "Audit logs",
            "Advanced security",
          ],
          en: [
            "Forward deployed implementation",
            "Campaign strategy session",
            "Dedicated CSM + Slack",
            "SSO / SAML",
            "Audit logs",
            "Advanced security",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "Mesečni krediti", en: "Monthly credits" },
        values: {
          free: { sr: "300", en: "300" },
          intern: { sr: "12.000", en: "12,000" },
          employee: { sr: "30.000", en: "30,000" },
          enterprise: { sr: "Custom", en: "Custom" },
        },
      },
      {
        feature: { sr: "Autonomous campaigns", en: "Autonomous campaigns" },
        values: {
          free: { sr: "Ne", en: "No" },
          intern: { sr: "Da", en: "Yes" },
          employee: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Autonomous replies", en: "Autonomous replies" },
        values: {
          free: { sr: "Ne", en: "No" },
          intern: { sr: "Da", en: "Yes" },
          employee: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "HubSpot sync", en: "HubSpot sync" },
        values: {
          free: { sr: "Ne", en: "No" },
          intern: { sr: "Da", en: "Yes" },
          employee: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Salesforce sync", en: "Salesforce sync" },
        values: {
          free: { sr: "Ne", en: "No" },
          intern: { sr: "Ne", en: "No" },
          employee: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "SSO", en: "SSO" },
        values: {
          free: { sr: "Ne", en: "No" },
          intern: { sr: "Ne", en: "No" },
          employee: { sr: "Ne", en: "No" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Srednja", en: "Medium" },
    description: {
      sr: "Start free → definišite ICP → Ava gradi liste i research → povežite HubSpot (Intern+) → pokrenite cold outbound kampanju → pratite positive replies u dashboard-u. Mailbox infrastruktura se naplaćuje posebno u USD.",
      en: "Start free → define ICP → Ava builds lists and research → connect HubSpot (Intern+) → launch cold outbound campaign → track positive replies in the dashboard. Mailbox infrastructure is billed separately in USD.",
    },
  },
  pros: {
    sr: [
      "Zamenjuje deo BDR posla end-to-end",
      "Jasan kreditni model sa estimatorom",
      "Generous trial (10k kredita)",
      "Research kvalitet (agent swarm)",
      "CRM sync na paid planovima",
    ],
    en: [
      "Replaces part of the BDR job end-to-end",
      "Clear credit model with estimator",
      "Generous trial (10k credits)",
      "Strong research (agent swarm)",
      "CRM sync on paid plans",
    ],
  },
  cons: {
    sr: [
      "Kampanje tek od $250/mes",
      "Krediti se troše brzo na full outbound",
      "Mailbox/phone posebna naplata",
      "Manje kontrole od ručnog Instantly stack-a",
      "Enterprise za velike timove",
    ],
    en: [
      "Campaigns only from $250/mo",
      "Credits burn fast on full outbound",
      "Mailbox/phone billed separately",
      "Less control than a manual Instantly stack",
      "Enterprise for large teams",
    ],
  },
  alternatives: [
    {
      slug: "relevance-ai",
      name: "Relevance AI",
      description: {
        sr: "Custom AI agenti — više DIY.",
        en: "Custom AI agents — more DIY.",
      },
      startingPrice: { sr: "od $0", en: "from $0" },
      trial: { sr: "Free plan", en: "Free plan" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "instantly",
      name: "Instantly",
      description: {
        sr: "Cold email infra — više kontrole.",
        en: "Cold email infra — more control.",
      },
      startingPrice: { sr: "od $37", en: "from $37" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
    {
      slug: "clay",
      name: "Clay",
      description: {
        sr: "Enrichment pre outbound-a.",
        en: "Enrichment before outbound.",
      },
      startingPrice: { sr: "od $149", en: "from $149" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "apollo",
      name: "Apollo",
      description: {
        sr: "Baza + sekvence u jednom.",
        en: "Database + sequences in one.",
      },
      startingPrice: { sr: "od $49", en: "from $49" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko košta Artisan?", en: "How much does Artisan cost?" },
      answer: {
        sr: "Free $0 (300 kredita/mes). Intern $250/mes (12k kredita, godišnje). Employee $600/mes (30k). Enterprise custom. Tipična kampanja ~22 kredita po kontaktu.",
        en: "Free $0 (300 credits/mo). Intern $250/mo (12k credits, annual). Employee $600/mo (30k). Enterprise custom. Typical campaign ~22 credits per contact.",
      },
    },
    {
      question: { sr: "Šta je Ava?", en: "What is Ava?" },
      answer: {
        sr: "Ava je AI BDR agent Artisan platforme — radi prospecting, personalizaciju, slanje, follow-up na reply-jeve i booking sastanaka u autonomnom režimu.",
        en: "Ava is Artisan's AI BDR agent — prospecting, personalization, sending, reply follow-up, and meeting booking in autonomous mode.",
      },
    },
    {
      question: { sr: "Da li ima besplatan trial?", en: "Is there a free trial?" },
      answer: {
        sr: "Da — novi account dobija 10.000 kredita (~$300 vrednosti) na 30 dana, bez kartice. Bez kartice na kraju → pad na Free (300/mes), kampanje pauzirane.",
        en: "Yes — new accounts get 10,000 credits (~$300 value) for 30 days, no card. No card at end → downgrade to Free (300/mo), campaigns paused.",
      },
    },
    {
      question: {
        sr: "Artisan vs Instantly?",
        en: "Artisan vs Instantly?",
      },
      answer: {
        sr: "Instantly je infrastruktura za cold email (inboxi, warmup, volume). Artisan je AI BDR koji vodi ceo outbound proces. Često: Artisan za autonomiju, Instantly ako želite full kontrolu nad inbox stack-om.",
        en: "Instantly is cold email infrastructure (inboxes, warmup, volume). Artisan is an AI BDR running the full outbound process. Often: Artisan for autonomy, Instantly if you want full control of the inbox stack.",
      },
    },
    {
      question: { sr: "Da li ima API?", en: "Does it have an API?" },
      answer: {
        sr: "Webhooks kao data source dolaze na Employee+ planu. Integracije preko HubSpot/Salesforce i Slack na paid tier-ima.",
        en: "Webhooks as a data source are on Employee+ plans. Integrations via HubSpot/Salesforce and Slack on paid tiers.",
      },
    },
  ],
  integrations: {
    sr: [
      "HubSpot",
      "Salesforce",
      "Slack",
      "Gmail",
      "LinkedIn",
      "Zapier",
      "Power dialer",
    ],
    en: [
      "HubSpot",
      "Salesforce",
      "Slack",
      "Gmail",
      "LinkedIn",
      "Zapier",
      "Power dialer",
    ],
  },
};
