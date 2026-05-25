import type { SalesTool } from "@/types/sales-tool";

export const relevanceAiTool: SalesTool = {
  slug: "relevance-ai",
  name: "Relevance AI",
  logo: "/images/sales-tools/relevance-ai.png",
  tagline: {
    sr: "AI workforce — no-code agenti za prodaju, research i GTM automatizaciju",
    en: "AI workforce — no-code agents for sales, research, and GTM automation",
  },
  categoryId: "prospecting",
  category: { sr: "Prospecting", en: "Prospecting" },
  categories: {
    sr: [
      "AI agenti",
      "BDR / sales agenti",
      "No-code builder",
      "Actions + Vendor Credits",
      "2000+ integracija",
      "Bring your own LLM",
    ],
    en: [
      "AI agents",
      "BDR / sales agents",
      "No-code builder",
      "Actions + Vendor Credits",
      "2,000+ integrations",
      "Bring your own LLM",
    ],
  },
  websiteUrl: "https://relevanceai.com/",
  recommended: true,
  rating: { g2: 4.5, g2Reviews: 120 },
  overview: {
    sr: "Relevance AI je platforma za izgradnju AI workforce-a bez koda: kreirate agente prirodnim jezikom, povezujete alate (CRM, email, scraping) i puštate ih da rade research, enrichment i follow-up — uz odvojenu naplatu Actions (izvršenja) i Vendor Credits (LLM troškovi).",
    en: "Relevance AI is a no-code platform for building an AI workforce: create agents in natural language, connect tools (CRM, email, scraping), and let them run research, enrichment, and follow-up — with separate billing for Actions (executions) and Vendor Credits (LLM costs).",
  },
  overviewExtended: {
    sr: "Za RevOps i GTM Ops: BDR agent, account research, lead scoring workflow. Free: 200 Actions/mes + 1.000 Vendor Credits jednokratno. Pro od $19/mes (god.) — 2.500 Actions, $20 Vendor Credits. Team od $234/mes (god.) — 7.000 Actions, meeting agenti, A/B test. Nije Clay zamena — više „pokreni agenta“ nego „tabela leadova“.",
    en: "For RevOps and GTM Ops: BDR agents, account research, lead scoring workflows. Free: 200 Actions/mo + 1,000 Vendor Credits one-time. Pro from $19/mo (annual) — 2,500 Actions, $20 Vendor Credits. Team from $234/mo (annual) — 7,000 Actions, meeting agents, A/B testing. Not a Clay replacement — more \"run an agent\" than \"lead spreadsheet.\"",
  },
  idealFor: {
    sr: [
      "RevOps i GTM Engineering timovi",
      "Agencije sa repetitivnim research taskovima",
      "Ops timovi bez punog dev resursa",
      "Timovi koji žele BDR agente pre outbound-a",
      "Kompanije koje već koriste OpenAI/Anthropic API",
    ],
    en: [
      "RevOps and GTM Engineering teams",
      "Agencies with repetitive research tasks",
      "Ops teams without full dev resources",
      "Teams wanting BDR agents before outbound",
      "Companies already using OpenAI/Anthropic APIs",
    ],
  },
  keyFeatures: {
    sr: [
      "No-code agent builder (prirodnim jezikom)",
      "Workforces — timovi agenta",
      "Schedule & bulk runs",
      "WhatsApp, LinkedIn, Telegram triggeri (Pro+)",
      "Calling & meeting agenti (Team+)",
      "BYOK — bez markup-a na LLM",
    ],
    en: [
      "No-code agent builder (natural language)",
      "Workforces — teams of agents",
      "Schedule & bulk runs",
      "WhatsApp, LinkedIn, Telegram triggers (Pro+)",
      "Calling & meeting agents (Team+)",
      "BYOK — no markup on LLM costs",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "$0 (Free)", en: "$0 (Free)" },
    },
    {
      label: { sr: "Naplata", en: "Billing" },
      value: { sr: "Actions + Vendor Credits", en: "Actions + Vendor Credits" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "Free plan · bez kartice", en: "Free plan · no card" },
    },
    {
      label: { sr: "Pro (god.)", en: "Pro (annual)" },
      value: { sr: "$19 / mes", en: "$19 / mo" },
    },
  ],
  pricing: {
    startingPrice: { sr: "od $0 (Free)", en: "from $0 (Free)" },
    billing: {
      sr: "Actions + Vendor Credits · rollover na paid",
      en: "Actions + Vendor Credits · rollover on paid",
    },
    trial: {
      sr: "Free — 200 Actions/mes",
      en: "Free — 200 Actions/mo",
    },
    plans: [
      {
        id: "free",
        name: { sr: "Free", en: "Free" },
        price: { sr: "$0", en: "$0" },
        billingNote: { sr: "200 Actions/mes", en: "200 Actions/mo" },
        highlights: {
          sr: [
            "1.000 Vendor Credits (jednokratno)",
            "Neograničeni agenti & workforces",
            "Low-code builder",
            "1-click share",
            "Community support",
            "Bez top-up kredita",
          ],
          en: [
            "1,000 Vendor Credits (one-time)",
            "Unlimited agents & workforces",
            "Low-code builder",
            "1-click share",
            "Community support",
            "No credit top-ups",
          ],
        },
      },
      {
        id: "pro",
        name: { sr: "Pro", en: "Pro" },
        price: { sr: "$29 / mes", en: "$29 / mo" },
        billingNote: {
          sr: "~$19/mes godišnje · 2.500 Actions",
          en: "~$19/mo annual · 2,500 Actions",
        },
        highlights: {
          sr: [
            "$20 Vendor Credits/mes",
            "2 build korisnika",
            "Schedule tasks & chat mode",
            "Smart escalations (email, Slack)",
            "Premium triggeri (WhatsApp, LinkedIn)",
            "Bring your own LLM",
          ],
          en: [
            "$20 Vendor Credits/mo",
            "2 build users",
            "Schedule tasks & chat mode",
            "Smart escalations (email, Slack)",
            "Premium triggers (WhatsApp, LinkedIn)",
            "Bring your own LLM",
          ],
        },
      },
      {
        id: "team",
        name: { sr: "Team", en: "Team" },
        price: { sr: "$349 / mes", en: "$349 / mo" },
        billingNote: {
          sr: "~$234/mes godišnje · 7.000 Actions",
          en: "~$234/mo annual · 7,000 Actions",
        },
        highlights: {
          sr: [
            "$70 Vendor Credits/mes · rollover",
            "5 build · 45 end users",
            "Calling & meeting agenti",
            "A/B testing & analytics",
            "5 shared projekata",
            "Priority support",
          ],
          en: [
            "$70 Vendor Credits/mo · rollover",
            "5 build · 45 end users",
            "Calling & meeting agents",
            "A/B testing & analytics",
            "5 shared projects",
            "Priority support",
          ],
        },
      },
      {
        id: "enterprise",
        name: { sr: "Enterprise", en: "Enterprise" },
        price: { sr: "Custom", en: "Custom" },
        billingNote: { sr: "Unlimited workforces", en: "Unlimited workforces" },
        highlights: {
          sr: [
            "Custom Actions & Vendor Credits",
            "SSO, RBAC, audit logs",
            "Agent evaluations",
            "Dedicated account manager",
            "SLA & custom DPA",
            "2.000+ integracija",
          ],
          en: [
            "Custom Actions & Vendor Credits",
            "SSO, RBAC, audit logs",
            "Agent evaluations",
            "Dedicated account manager",
            "SLA & custom DPA",
            "2,000+ integrations",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "Actions / mesec", en: "Actions / month" },
        values: {
          free: { sr: "200", en: "200" },
          pro: { sr: "2.500", en: "2,500" },
          team: { sr: "7.000", en: "7,000" },
          enterprise: { sr: "Custom", en: "Custom" },
        },
      },
      {
        feature: { sr: "Vendor Credits", en: "Vendor Credits" },
        values: {
          free: { sr: "1k jednokratno", en: "1k one-time" },
          pro: { sr: "$20/mes", en: "$20/mo" },
          team: { sr: "$70/mes", en: "$70/mo" },
          enterprise: { sr: "Custom", en: "Custom" },
        },
      },
      {
        feature: { sr: "Meeting agenti", en: "Meeting agents" },
        values: {
          free: { sr: "Ne", en: "No" },
          pro: { sr: "Ne", en: "No" },
          team: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "BYOK (LLM)", en: "BYOK (LLM)" },
        values: {
          free: { sr: "Ne", en: "No" },
          pro: { sr: "Da", en: "Yes" },
          team: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Rollover kredita", en: "Credit rollover" },
        values: {
          free: { sr: "Ne", en: "No" },
          pro: { sr: "Vendor", en: "Vendor" },
          team: { sr: "Vendor", en: "Vendor" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Top-up", en: "Top-up" },
        values: {
          free: { sr: "Ne", en: "No" },
          pro: { sr: "Da", en: "Yes" },
          team: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Custom", en: "Custom" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Srednja do napredna", en: "Medium to advanced" },
    description: {
      sr: "Signup → izaberite template (BDR, research) ili kreirajte agenta → povežite integracije (HubSpot, Gmail, Apify) → test u chat modu → schedule ili webhook trigger. Za produkciju: Team plan ako vam trebaju meeting agenti ili više build user-a.",
      en: "Sign up → pick a template (BDR, research) or build an agent → connect integrations (HubSpot, Gmail, Apify) → test in chat mode → schedule or webhook trigger. For production: Team plan if you need meeting agents or more build users.",
    },
  },
  pros: {
    sr: [
      "Bez koda — ops tim može sam da gradi",
      "Transparentna podela Actions vs LLM troškova",
      "BYOK smanjuje Vendor Credit trošak",
      "Bogat katalog gotovih GTM template-a",
      "Skalira od jednog agenta do workforce-a",
    ],
    en: [
      "No code — ops teams can build themselves",
      "Transparent split of Actions vs LLM costs",
      "BYOK reduces Vendor Credit spend",
      "Rich catalog of ready-made GTM templates",
      "Scales from one agent to a full workforce",
    ],
  },
  cons: {
    sr: [
      "Novi pricing model zahteva planiranje Actions",
      "Free plan ograničen bez top-up-a",
      "Nije zamena za Clay enrichment tabele",
      "Kompleksniji od Zapier-a za jednostavne flow-ove",
      "Enterprise cena samo preko sales-a",
    ],
    en: [
      "New pricing model requires Action planning",
      "Free plan is limited with no top-ups",
      "Not a replacement for Clay enrichment tables",
      "More complex than Zapier for simple flows",
      "Enterprise pricing only via sales",
    ],
  },
  alternatives: [
    {
      slug: "n8n",
      name: "n8n",
      description: {
        sr: "Workflow automatizacija — manje AI-native.",
        en: "Workflow automation — less AI-native.",
      },
      startingPrice: { sr: "od €20", en: "from €20" },
      trial: { sr: "Besplatno", en: "Free trial" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "clay",
      name: "Clay",
      description: {
        sr: "GTM tabela — enrichment pre agenta.",
        en: "GTM table — enrichment before agents.",
      },
      startingPrice: { sr: "od $149", en: "from $149" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "apify",
      name: "Apify",
      description: {
        sr: "Scraping kao korak u agent workflow-u.",
        en: "Scraping as a step in agent workflows.",
      },
      startingPrice: { sr: "od $29", en: "from $29" },
      trial: { sr: "Free plan", en: "Free plan" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "predictleads",
      name: "PredictLeads",
      description: {
        sr: "Company intelligence feed za agente.",
        en: "Company intelligence feed for agents.",
      },
      startingPrice: { sr: "od $0", en: "from $0" },
      trial: { sr: "100 kredita", en: "100 credits" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko košta Relevance AI?", en: "How much does Relevance AI cost?" },
      answer: {
        sr: "Free $0 (200 Actions/mes). Pro $29/mes ili ~$19 godišnje (2.500 Actions + $20 Vendor Credits). Team $349/mes ili ~$234 godišnje (7.000 Actions + $70 Vendor Credits). Enterprise custom.",
        en: "Free $0 (200 Actions/mo). Pro $29/mo or ~$19 annual (2,500 Actions + $20 Vendor Credits). Team $349/mo or ~$234 annual (7,000 Actions + $70 Vendor Credits). Enterprise is custom.",
      },
    },
    {
      question: { sr: "Šta su Actions i Vendor Credits?", en: "What are Actions and Vendor Credits?" },
      answer: {
        sr: "Actions = svaki korak agenta (tool run, workflow step). Vendor Credits = trošak LLM providera (pass-through bez markup-a). Možete koristiti svoj API ključ i platiti samo Actions.",
        en: "Actions = each agent step (tool run, workflow step). Vendor Credits = LLM provider cost (pass-through, no markup). You can use your own API key and pay only for Actions.",
      },
    },
    {
      question: { sr: "Da li je besplatan?", en: "Is it free?" },
      answer: {
        sr: "Da — Free plan sa 200 Actions mesečno i 1.000 Vendor Credits pri registraciji. Bez kreditne kartice. Za više — Pro ili Team.",
        en: "Yes — Free plan with 200 monthly Actions and 1,000 Vendor Credits at signup. No credit card. For more — Pro or Team.",
      },
    },
    {
      question: { sr: "Zašto izabrati Relevance AI?", en: "Why choose Relevance AI?" },
      answer: {
        sr: "Kada vam treba AI workforce (BDR, research, ops) koji tim može graditi bez developera — sa triggerima na LinkedIn/WhatsApp i mogućnošću voice meeting agenta na Team planu.",
        en: "When you need an AI workforce (BDR, research, ops) your team can build without developers — with LinkedIn/WhatsApp triggers and voice meeting agents on Team.",
      },
    },
    {
      question: {
        sr: "Kako se razlikuje od Clay-a?",
        en: "How is it different from Clay?",
      },
      answer: {
        sr: "Clay je spreadsheet-first enrichment. Relevance AI je agent-first automatizacija — agent odlučuje korake, poziva alate, šalje follow-up. Često se koriste zajedno: Clay → Relevance agent → Instantly.",
        en: "Clay is spreadsheet-first enrichment. Relevance AI is agent-first automation — the agent decides steps, calls tools, sends follow-up. Often used together: Clay → Relevance agent → Instantly.",
      },
    },
    {
      question: { sr: "Da li ima API?", en: "Does it have an API?" },
      answer: {
        sr: "Da — REST API i Python SDK za pokretanje agenata i integraciju u vaš stack. Top-up: $80/1.000 Actions, $20/10.000 Vendor Credits.",
        en: "Yes — REST API and Python SDK to trigger agents and integrate into your stack. Top-ups: $80/1,000 Actions, $20/10,000 Vendor Credits.",
      },
    },
    {
      question: {
        sr: "Koje su alternative?",
        en: "What are the alternatives?",
      },
      answer: {
        sr: "n8n/Make za čiste workflow-e, Bardeen za browser automatizaciju, Lindy za AI asistente. Relevance vodi za multi-agent workforce sa GTM template-ima.",
        en: "n8n/Make for pure workflows, Bardeen for browser automation, Lindy for AI assistants. Relevance leads for multi-agent workforces with GTM templates.",
      },
    },
  ],
  integrations: {
    sr: [
      "HubSpot",
      "Salesforce",
      "Gmail",
      "Slack",
      "LinkedIn",
      "WhatsApp",
      "Apify",
      "OpenAI / Anthropic (BYOK)",
      "Zapier",
    ],
    en: [
      "HubSpot",
      "Salesforce",
      "Gmail",
      "Slack",
      "LinkedIn",
      "WhatsApp",
      "Apify",
      "OpenAI / Anthropic (BYOK)",
      "Zapier",
    ],
  },
};
