import type { SalesTool } from "@/types/sales-tool";

export const trigifyTool: SalesTool = {
  slug: "trigify",
  name: "Trigify",
  logo: "/images/sales-tools/trigify.png",
  tagline: {
    sr: "AI social listening, signali sa LinkedIn-a i workflow-i za GTM timove",
    en: "AI social listening - LinkedIn signals and workflows for GTM teams",
  },
  categoryId: "prospecting",
  category: { sr: "Prospecting", en: "Prospecting" },
  categories: {
    sr: [
      "Social listening",
      "Intent signali",
      "LinkedIn engagement",
      "AI workflow (Jarvis)",
      "Warm lead alerts",
      "CRM integracije",
    ],
    en: [
      "Social listening",
      "Intent signals",
      "LinkedIn engagement",
      "AI workflows (Jarvis)",
      "Warm lead alerts",
      "CRM integrations",
    ],
  },
  websiteUrl: "https://www.trigify.io/",
  recommended: true,
  rating: { g2: 4.6, g2Reviews: 65 },
  overview: {
    sr: "Trigify prati društvene mreže (posebno LinkedIn) u realnom vremenu: ko komentariše, lajkuje ili prati vaše naloge i konkurente, zatim AI workflow-i pretvaraju signal u akciju za prodaju i marketing.",
    en: "Trigify monitors social networks (especially LinkedIn) in real time: who comments, likes, or follows your accounts and competitors, then AI workflows turn signals into action for sales and marketing.",
  },
  overviewExtended: {
    sr: "Kreditni model, ne plaćate po korisniku za običan tim. Starter ($40) uključuje 4.000 kredita i 25 listening pretraga; Max ($199) 40.000 kredita, neograničene pretrage i besplatne Jarvis AI izvršavanja. Push u Slack, CRM, Clay. Nije CRM ni sequencer, sloj signala iznad vašeg stack-a.",
    en: "Credit-based, no per-seat fee for normal team members. Starter ($40) includes 4,000 credits and 25 listening searches; Max ($199) 40,000 credits, unlimited searches, and free Jarvis AI execution. Push to Slack, CRM, Clay. Not a CRM or sequencer, a signal layer on top of your stack.",
  },
  idealFor: {
    sr: [
      "B2B prodaja koja love social intent",
      "Founder-led outbound na LinkedIn-u",
      "Growth i demand gen timovi",
      "Agencije koje prate više brendova",
      "Timovi sa Clay / LGM u stack-u",
    ],
    en: [
      "B2B sales chasing social intent",
      "Founder-led LinkedIn outbound",
      "Growth and demand gen teams",
      "Agencies monitoring multiple brands",
      "Teams running Clay / LGM in their stack",
    ],
  },
  keyFeatures: {
    sr: [
      "Listening pretrage (nalozi, ključne reči, konkurenti)",
      "Neograničeni custom workflow-i",
      "Jarvis AI, build & execute (Max+)",
      "Liste iz keyword engagement-a",
      "Social Actions & Engagement",
      "API i 50+ integracija",
    ],
    en: [
      "Listening searches (accounts, keywords, competitors)",
      "Unlimited custom workflows",
      "Jarvis AI, build & execute (Max+)",
      "Lists from keyword engagement",
      "Social Actions & Engagement",
      "API and 50+ integrations",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "$40 / mesec", en: "$40 / month" },
    },
    {
      label: { sr: "Naplata", en: "Billing" },
      value: { sr: "Po kreditima (ne po seat-u)", en: "Credit-based (not per seat)" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "14 dana besplatno", en: "14-day free trial" },
    },
    {
      label: { sr: "Overage", en: "Overage" },
      value: { sr: "$0.012 / kredit", en: "$0.012 / credit" },
    },
  ],
  pricing: {
    startingPrice: { sr: "od $40 / mesec", en: "from $40 / month" },
    billing: {
      sr: "Mesečni krediti + overage $0.012/kredit",
      en: "Monthly credits + $0.012/credit overage",
    },
    trial: {
      sr: "14 dana, puna platforma, bez kartice",
      en: "14 days, full platform, no card",
    },
    plans: [
      {
        id: "starter",
        name: { sr: "Starter", en: "Starter" },
        price: { sr: "$40 / mesec", en: "$40 / month" },
        billingNote: { sr: "4.000 kredita · 25 pretraga", en: "4,000 credits · 25 searches" },
        highlights: {
          sr: [
            "25 listening pretraga",
            "Neograničeni workflow-i",
            "7 dana search history",
            "Social engagement & actions",
            "1 workspace",
          ],
          en: [
            "25 listening searches",
            "Unlimited workflows",
            "7-day search history",
            "Social engagement & actions",
            "1 workspace",
          ],
        },
      },
      {
        id: "max",
        name: { sr: "Max", en: "Max" },
        price: { sr: "$199 / mesec", en: "$199 / month" },
        billingNote: {
          sr: "40.000 kredita · neograničene pretrage",
          en: "40,000 credits · unlimited searches",
        },
        highlights: {
          sr: [
            "Neograničene listening pretrage",
            "Besplatne Jarvis AI izvršavanja",
            "BYOK (bring your own key)",
            "12 meseci search history",
            "3 workspace-a · API",
          ],
          en: [
            "Unlimited listening searches",
            "Free Jarvis AI executions",
            "BYOK (bring your own key)",
            "12-month search history",
            "3 workspaces · API",
          ],
        },
      },
      {
        id: "enterprise",
        name: { sr: "Enterprise", en: "Enterprise" },
        price: { sr: "Custom", en: "Custom" },
        billingNote: { sr: "Neograničeni krediti i workspace-i", en: "Unlimited credits and workspaces" },
        highlights: {
          sr: [
            "SSO / SAML",
            "Dedicated CSM + SLA",
            "Sva vremenska istorija",
            "RBAC · neograničeni workspace-i",
            "Custom integracije",
          ],
          en: [
            "SSO / SAML",
            "Dedicated CSM + SLA",
            "All-time history",
            "RBAC · unlimited workspaces",
            "Custom integrations",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "Mesečni krediti", en: "Monthly credits" },
        values: {
          starter: { sr: "4.000", en: "4,000" },
          max: { sr: "40.000", en: "40,000" },
          enterprise: { sr: "Custom", en: "Custom" },
        },
      },
      {
        feature: { sr: "Listening pretrage", en: "Listening searches" },
        values: {
          starter: { sr: "25", en: "25" },
          max: { sr: "Neograničeno", en: "Unlimited" },
          enterprise: { sr: "Neograničeno", en: "Unlimited" },
        },
      },
      {
        feature: { sr: "Jarvis AI execute", en: "Jarvis AI execute" },
        values: {
          starter: { sr: "Plaća kredite", en: "Uses credits" },
          max: { sr: "Besplatno", en: "Free" },
          enterprise: { sr: "Besplatno", en: "Free" },
        },
      },
      {
        feature: { sr: "Search history", en: "Search history" },
        values: {
          starter: { sr: "7 dana", en: "7 days" },
          max: { sr: "12 meseci", en: "12 months" },
          enterprise: { sr: "Sve", en: "All time" },
        },
      },
      {
        feature: { sr: "Workspaces", en: "Workspaces" },
        values: {
          starter: { sr: "1", en: "1" },
          max: { sr: "3", en: "3" },
          enterprise: { sr: "Neograničeno", en: "Unlimited" },
        },
      },
      {
        feature: { sr: "SSO / SAML", en: "SSO / SAML" },
        values: {
          starter: { sr: "Ne", en: "No" },
          max: { sr: "Ne", en: "No" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Niska do srednja", en: "Low to medium" },
    description: {
      sr: "Kreirate listening pretrage (nalozi, ključne reči), povežete Slack ili CRM, definišete workflow koji šalje leadove u outreach. Većina timova vidi prve signale u roku od nekoliko dana.",
      en: "Create listening searches (accounts, keywords), connect Slack or CRM, define workflows that push leads into outreach. Most teams see first signals within a few days.",
    },
  },
  pros: {
    sr: [
      "Hvata warm intent dok je još na LinkedIn-u",
      "Kreditni model, bez per-seat cene za tim",
      "AI workflow-i (Jarvis) za prioritizaciju",
      "Jaka integracija sa GTM stack-om",
      "14-dnevni trial bez kartice",
    ],
    en: [
      "Captures warm intent while still on LinkedIn",
      "Credit model, no per-seat team pricing",
      "AI workflows (Jarvis) for prioritization",
      "Strong GTM stack integrations",
      "14-day trial with no card",
    ],
  },
  cons: {
    sr: [
      "Krediti se troše brzo pri velikom monitoringu",
      "Nije zamena za cold email ili CRM",
      "Fokus na društvene signale, ne na email baze",
      "Kompleksniji od jednostavnog „alert u Slack“",
      "Enterprise funkcije tek na custom planu",
    ],
    en: [
      "Credits burn quickly at high monitoring volume",
      "Not a replacement for cold email or CRM",
      "Focused on social signals, not email databases",
      "More complex than a simple Slack alert",
      "Enterprise features only on custom plans",
    ],
  },
  alternatives: [
    {
      slug: "taplio",
      name: "Taplio",
      description: {
        sr: "LinkedIn content & growth, drugačiji fokus od listening-a.",
        en: "LinkedIn content & growth, different focus than listening.",
      },
      startingPrice: { sr: "od $39", en: "from $39" },
      trial: { sr: "7 dana", en: "7 days" },
      category: { sr: "LinkedIn content", en: "LinkedIn content" },
    },
    {
      slug: "lagrowthmachine",
      name: "La Growth Machine",
      description: {
        sr: "Multichannel outreach nakon što uhvatite signal.",
        en: "Multichannel outreach after you catch the signal.",
      },
      startingPrice: { sr: "od €60", en: "from €60" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "LinkedIn outreach", en: "LinkedIn outreach" },
    },
    {
      slug: "rb2b",
      name: "RB2B",
      description: {
        sr: "Visitor ID na sajtu, drugi tip intent signala.",
        en: "Website visitor ID, another intent signal type.",
      },
      startingPrice: { sr: "od $0", en: "from $0" },
      trial: { sr: "150 rez. free", en: "150 res. free" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "clay",
      name: "Clay",
      description: {
        sr: "Obogati i rutiraj Trigify leadove u tabeli.",
        en: "Enrich and route Trigify leads in a table.",
      },
      startingPrice: { sr: "od $134", en: "from $134" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko košta Trigify?", en: "How much does Trigify cost?" },
      answer: {
        sr: "Starter je $40/mes sa 4.000 kredita. Max $199/mes sa 40.000 kredita i besplatnim Jarvis izvršavanjima. Enterprise je custom. Overage je $0.012 po kreditu.",
        en: "Starter is $40/mo with 4,000 credits. Max is $199/mo with 40,000 credits and free Jarvis execution. Enterprise is custom. Overage is $0.012 per credit.",
      },
    },
    {
      question: { sr: "Kako rade krediti?", en: "How do credits work?" },
      answer: {
        sr: "Krediti pokrivaju listening pretrage, workflow akcije i (na Starter-u) Jarvis izvršavanja. Nije klasična per-user naplata, normalni članovi tima ne troše seat.",
        en: "Credits cover listening searches, workflow actions, and (on Starter) Jarvis executions. It's not classic per-user billing, normal team members don't consume seats.",
      },
    },
    {
      question: { sr: "Da li ima besplatan trial?", en: "Is there a free trial?" },
      answer: {
        sr: "Da - 14 dana pune platforme bez kreditne kartice. Dovoljno da podesite pretrage i vidite kvalitet signala na vašem ICP-u.",
        en: "Yes - 14 days of full platform access with no credit card. Enough to set up searches and see signal quality on your ICP.",
      },
    },
    {
      question: { sr: "Zašto izabrati Trigify?", en: "Why choose Trigify?" },
      answer: {
        sr: "Kada želite da prodaja reaguje na ljude koji već engage-uju sa vama ili konkurentima na LinkedIn-u, pre nego što postanu cold lead u bazi.",
        en: "When you want sales to react to people already engaging with you or competitors on LinkedIn, before they become a cold lead in your database.",
      },
    },
    {
      question: { sr: "Šta je Jarvis?", en: "What is Jarvis?" },
      answer: {
        sr: "Jarvis je AI sloj u Trigify-u za custom workflow-e: filtrira, sumira i rutira social podatke. Na Max planu izvršavanja su besplatna; na Starter-u troše kredite.",
        en: "Jarvis is Trigify's AI layer for custom workflows: filter, summarize, and route social data. Executions are free on Max; on Starter they consume credits.",
      },
    },
    {
      question: {
        sr: "Da li se integriše sa outreach alatima?",
        en: "Does it integrate with outreach tools?",
      },
      answer: {
        sr: "Da - Slack, HubSpot, Salesforce, Clay, Zapier, Instantly, HeyReach i dr. Tipičan flow: Trigify signal → Clay enrichment → LGM/Instantly sekvenca.",
        en: "Yes - Slack, HubSpot, Salesforce, Clay, Zapier, Instantly, HeyReach, and more. Typical flow: Trigify signal → Clay enrichment → LGM/Instantly sequence.",
      },
    },
    {
      question: { sr: "Da li Trigify ima API?", en: "Does Trigify have an API?" },
      answer: {
        sr: "Da - API pristup na Max i Enterprise planovima za custom integracije i automatizacije van ugrađenih konektora.",
        en: "Yes - API access on Max and Enterprise plans for custom integrations and automations beyond built-in connectors.",
      },
    },
    {
      question: {
        sr: "Koje su alternative Trigify-u?",
        en: "What are Trigify alternatives?",
      },
      answer: {
        sr: "Često se poredi sa Buska, Brand24, Awario ili generičkim social listening alatima. Trigify je najjači za B2B LinkedIn intent i GTM workflow-e.",
        en: "Often compared to Buska, Brand24, Awario, or generic social listening tools. Trigify is strongest for B2B LinkedIn intent and GTM workflows.",
      },
    },
  ],
  integrations: {
    sr: [
      "Slack",
      "HubSpot",
      "Salesforce",
      "Clay",
      "Zapier",
      "Instantly",
      "HeyReach",
      "La Growth Machine",
      "API",
    ],
    en: [
      "Slack",
      "HubSpot",
      "Salesforce",
      "Clay",
      "Zapier",
      "Instantly",
      "HeyReach",
      "La Growth Machine",
      "API",
    ],
  },
};
