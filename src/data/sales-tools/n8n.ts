import type { SalesTool } from "@/types/sales-tool";

export const n8nTool: SalesTool = {
  slug: "n8n",
  name: "n8n",
  logo: "/images/sales-tools/n8n.png",
  tagline: {
    sr: "Workflow automatizacija - 500+ integracija, self-host ili cloud",
    en: "Workflow automation - 500+ integrations, self-host or cloud",
  },
  categoryId: "prospecting",
  category: { sr: "Prospecting", en: "Prospecting" },
  categories: {
    sr: [
      "Workflow automatizacija",
      "AI agenti",
      "500+ integracija (nodes)",
      "Self-hosted & cloud",
      "JavaScript / Python",
      "Pay-per-execution",
    ],
    en: [
      "Workflow automation",
      "AI agents",
      "500+ integrations (nodes)",
      "Self-hosted & cloud",
      "JavaScript / Python",
      "Pay-per-execution",
    ],
  },
  websiteUrl: "https://n8n.io/",
  recommended: true,
  rating: { g2: 4.5, g2Reviews: 14 },
  overview: {
    sr: "n8n je open-source platforma za automatizaciju workflow-a: vizuelni editor + custom kod (JS/Python), 500+ aplikacija i AI agenti. Naplaćuje se po execution-u (ceo workflow od starta do kraja), ne po koraku kao Zapier.",
    en: "n8n is an open-source workflow automation platform: visual editor plus custom code (JS/Python), 500+ apps, and AI agents. Billing is per execution (full workflow run start to finish), not per step like Zapier.",
  },
  overviewExtended: {
    sr: "Za GTM stack: povežite Clay, HubSpot, Instantly, FullEnrich, Slack, enrichment → routing → outreach bez vendor lock-in-a. Community Edition je besplatan na GitHub-u (self-host). Cloud: Starter €20/mes (2.5k executions), Pro €50, Business €667 (self-hosted license). Unlimited korisnika na svim planovima.",
    en: "For your GTM stack: connect Clay, HubSpot, Instantly, FullEnrich, Slack, enrichment → routing → outreach without vendor lock-in. Community Edition is free on GitHub (self-host). Cloud: Starter €20/mo (2.5k executions), Pro €50, Business €667 (self-hosted license). Unlimited users on all plans.",
  },
  idealFor: {
    sr: [
      "GTM Ops i RevOps timovi",
      "Developeri koji žele kontrolu nad podacima",
      "Agencije sa custom outbound pipeline-ima",
      "Timovi koji prerastaju Zapier/Make",
      "Kompanije sa self-host zahtevima",
    ],
    en: [
      "GTM Ops and RevOps teams",
      "Developers who want data control",
      "Agencies with custom outbound pipelines",
      "Teams outgrowing Zapier/Make",
      "Companies with self-host requirements",
    ],
  },
  keyFeatures: {
    sr: [
      "Drag-and-drop + JS/Python koraci",
      "500+ native integracija",
      "AI Workflow Builder krediti",
      "Webhook, queue, schedule triggeri",
      "Self-host ili n8n cloud (EU)",
      "1700+ workflow template-a",
    ],
    en: [
      "Drag-and-drop + JS/Python steps",
      "500+ native integrations",
      "AI Workflow Builder credits",
      "Webhook, queue, schedule triggers",
      "Self-host or n8n cloud (EU)",
      "1,700+ workflow templates",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "€20 / mes (cloud)", en: "€20 / mo (cloud)" },
    },
    {
      label: { sr: "Naplata", en: "Billing" },
      value: { sr: "Po execution-u", en: "Per execution" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "Besplatno · bez kartice", en: "Free trial · no card" },
    },
    {
      label: { sr: "Self-host", en: "Self-host" },
      value: { sr: "Community (GitHub)", en: "Community (GitHub)" },
    },
  ],
  pricing: {
    startingPrice: { sr: "od €20 / mesec", en: "from €20 / month" },
    billing: {
      sr: "Po workflow execution-u · godišnja ušteda 17%",
      en: "Per workflow execution · 17% off annually",
    },
    trial: {
      sr: "Starter/Pro trial bez kartice",
      en: "Starter/Pro trial, no card required",
    },
    plans: [
      {
        id: "starter",
        name: { sr: "Starter", en: "Starter" },
        price: { sr: "€20 / mes", en: "€20 / mo" },
        billingNote: {
          sr: "Godišnje · 2.5k executions",
          en: "Billed annually · 2.5k executions",
        },
        highlights: {
          sr: [
            "n8n cloud hosting",
            "1 shared project",
            "5 concurrent executions",
            "Unlimited korisnika",
            "50 AI Workflow Builder kredita",
            "Forum support",
          ],
          en: [
            "n8n cloud hosting",
            "1 shared project",
            "5 concurrent executions",
            "Unlimited users",
            "50 AI Workflow Builder credits",
            "Forum support",
          ],
        },
      },
      {
        id: "pro",
        name: { sr: "Pro", en: "Pro" },
        price: { sr: "€50 / mes", en: "€50 / mo" },
        billingNote: {
          sr: "Godišnje · 10k executions",
          en: "Billed annually · 10k executions",
        },
        highlights: {
          sr: [
            "3 shared projekta",
            "20 concurrent executions",
            "7 dana insights",
            "150 AI Builder kredita",
            "Admin roles & global variables",
            "Workflow history & execution search",
          ],
          en: [
            "3 shared projects",
            "20 concurrent executions",
            "7 days of insights",
            "150 AI Builder credits",
            "Admin roles & global variables",
            "Workflow history & execution search",
          ],
        },
      },
      {
        id: "business",
        name: { sr: "Business", en: "Business" },
        price: { sr: "€667 / mes", en: "€667 / mo" },
        billingNote: {
          sr: "Self-hosted license · 40k executions",
          en: "Self-hosted license · 40k executions",
        },
        highlights: {
          sr: [
            "6 shared projekata",
            "SSO, SAML, LDAP",
            "30 dana insights",
            "Git version control",
            "Scaling & environments",
            "14-dnevni Business trial",
          ],
          en: [
            "6 shared projects",
            "SSO, SAML, LDAP",
            "30 days of insights",
            "Git version control",
            "Scaling & environments",
            "14-day Business trial",
          ],
        },
      },
      {
        id: "enterprise",
        name: { sr: "Enterprise", en: "Enterprise" },
        price: { sr: "Custom", en: "Custom" },
        billingNote: { sr: "Cloud ili self-host", en: "Cloud or self-host" },
        highlights: {
          sr: [
            "Custom executions",
            "Unlimited shared projects",
            "200+ concurrent executions",
            "365 dana insights",
            "Dedicated support + SLA",
            "Invoice billing",
          ],
          en: [
            "Custom executions",
            "Unlimited shared projects",
            "200+ concurrent executions",
            "365 days of insights",
            "Dedicated support + SLA",
            "Invoice billing",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "Mesečni executions", en: "Monthly executions" },
        values: {
          starter: { sr: "2.5k", en: "2.5k" },
          pro: { sr: "10k", en: "10k" },
          business: { sr: "40k", en: "40k" },
          enterprise: { sr: "Custom", en: "Custom" },
        },
      },
      {
        feature: { sr: "Hosting", en: "Hosting" },
        values: {
          starter: { sr: "n8n cloud", en: "n8n cloud" },
          pro: { sr: "n8n cloud", en: "n8n cloud" },
          business: { sr: "Self-host", en: "Self-host" },
          enterprise: { sr: "Oba", en: "Both" },
        },
      },
      {
        feature: { sr: "Concurrent executions", en: "Concurrent executions" },
        values: {
          starter: { sr: "5", en: "5" },
          pro: { sr: "20", en: "20" },
          business: { sr: "20+", en: "20+" },
          enterprise: { sr: "200+", en: "200+" },
        },
      },
      {
        feature: { sr: "Shared projekti", en: "Shared projects" },
        values: {
          starter: { sr: "1", en: "1" },
          pro: { sr: "3", en: "3" },
          business: { sr: "6", en: "6" },
          enterprise: { sr: "Unlimited", en: "Unlimited" },
        },
      },
      {
        feature: { sr: "SSO / SAML", en: "SSO / SAML" },
        values: {
          starter: { sr: "Ne", en: "No" },
          pro: { sr: "Ne", en: "No" },
          business: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "AI Builder krediti", en: "AI Builder credits" },
        values: {
          starter: { sr: "50", en: "50" },
          pro: { sr: "150", en: "150" },
          business: { sr: "Uskoro", en: "Coming soon" },
          enterprise: { sr: "1000", en: "1000" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Srednja do napredna", en: "Medium to advanced" },
    description: {
      sr: "Cloud: registracija i trial bez kartice. Self-host: Docker/npm install Community Edition. Prvi workflow iz template-a (npr. Clay → CRM), zatim credentials i test execution. Za produkciju: Business license na self-hosted instanci sa SSO i Git sync.",
      en: "Cloud: sign up and start a trial with no card. Self-host: Docker/npm install Community Edition. First workflow from a template (e.g. Clay → CRM), then credentials and test execution. For production: Business license on self-hosted instance with SSO and Git sync.",
    },
  },
  pros: {
    sr: [
      "Jeftinije od Zapier-a na velikom volumenu (per execution)",
      "Pun kod (JS/Python) + vizuelni editor",
      "Self-host i EU data residency",
      "Neograničeni korisnici",
      "Ogromna zajednica i template biblioteka",
    ],
    en: [
      "Cheaper than Zapier at scale (per execution)",
      "Full code (JS/Python) plus visual editor",
      "Self-host and EU data residency",
      "Unlimited users",
      "Large community and template library",
    ],
  },
  cons: {
    sr: [
      "Zahteva tehnički mindset, nije pure no-code",
      "Self-host = više DevOps odgovornosti",
      "Business plan skup za manje timove",
      "Overage na Business može biti skup",
      "Manje „plug and play“ od Zapier-a za non-tech",
    ],
    en: [
      "Requires a technical mindset, not pure no-code",
      "Self-host means more DevOps responsibility",
      "Business plan is expensive for smaller teams",
      "Business overages can get costly",
      "Less plug-and-play than Zapier for non-technical users",
    ],
  },
  alternatives: [
    {
      slug: "elevenlabs",
      name: "ElevenLabs",
      description: {
        sr: "TTS i voice agenti u n8n workflow-u.",
        en: "TTS and voice agents inside n8n workflows.",
      },
      startingPrice: { sr: "od $0", en: "from $0" },
      trial: { sr: "10k kredita free", en: "10k credits free" },
      category: { sr: "AI glas", en: "Voice AI" },
    },
    {
      slug: "clay",
      name: "Clay",
      description: {
        sr: "GTM tabela sa ugrađenim enrichment-om.",
        en: "GTM table with built-in enrichment.",
      },
      startingPrice: { sr: "od $149", en: "from $149" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "apify",
      name: "Apify",
      description: {
        sr: "Scraping node u n8n workflow-u.",
        en: "Scraping node inside n8n workflows.",
      },
      startingPrice: { sr: "od $29", en: "from $29" },
      trial: { sr: "Free plan", en: "Free plan" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "fullenrich",
      name: "FullEnrich",
      description: {
        sr: "Waterfall enrichment kao n8n korak.",
        en: "Waterfall enrichment as an n8n step.",
      },
      startingPrice: { sr: "od $29", en: "from $29" },
      trial: { sr: "50 kredita", en: "50 credits" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "instantly",
      name: "Instantly",
      description: {
        sr: "Email outreach, često target workflow-a.",
        en: "Email outreach, often the target of workflows.",
      },
      startingPrice: { sr: "od $37", en: "from $37" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko košta n8n?", en: "How much does n8n cost?" },
      answer: {
        sr: "Cloud Starter od €20/mes (godišnje, 2.5k executions), Pro €50 (10k), Business €667 (40k, self-hosted license). Enterprise je custom. Community Edition na GitHub-u je besplatna za self-host.",
        en: "Cloud Starter from €20/mo (annual, 2.5k executions), Pro €50 (10k), Business €667 (40k, self-hosted license). Enterprise is custom. Community Edition on GitHub is free to self-host.",
      },
    },
    {
      question: { sr: "Šta je execution?", en: "What is an execution?" },
      answer: {
        sr: "Jedan execution = jedan kompletan prolaz workflow-a od početka do kraja, bez obzira na broj koraka ili zapisa. Za razliku od Zapier-a gde se plaća po task-u/koraku.",
        en: "One execution = one complete workflow run from start to finish, regardless of steps or records. Unlike Zapier, where you pay per task/step.",
      },
    },
    {
      question: { sr: "Da li je n8n besplatan?", en: "Is n8n free?" },
      answer: {
        sr: "Da - Community Edition (self-hosted) je open source na GitHub-u. Hosted Starter/Pro imaju besplatan trial bez kartice. Business trial traje 14 dana.",
        en: "Yes - Community Edition (self-hosted) is open source on GitHub. Hosted Starter/Pro offer a free trial with no card. Business trial lasts 14 days.",
      },
    },
    {
      question: { sr: "Zašto izabrati n8n?", en: "Why choose n8n?" },
      answer: {
        sr: "Kada vam treba fleksibilnost (kod + UI), self-host opcija, predvidljiva cena po execution-u i 500+ integracija za GTM automatizaciju, enrichment, routing leadova, sync u CRM.",
        en: "When you need flexibility (code + UI), self-hosting, predictable per-execution pricing, and 500+ integrations for GTM automation, enrichment, lead routing, CRM sync.",
      },
    },
    {
      question: { sr: "Kako radi n8n?", en: "How does n8n work?" },
      answer: {
        sr: "Povezujete triggere (webhook, schedule, event) sa node-ovima (HTTP, CRM, AI, transformacije). Workflow se izvršava sekvencijalno ili paralelno; greške idu u error workflow za retry ili alert.",
        en: "You connect triggers (webhook, schedule, event) to nodes (HTTP, CRM, AI, transforms). The workflow runs sequentially or in parallel; errors route to error workflows for retry or alerts.",
      },
    },
    {
      question: {
        sr: "Koje su alternative n8n-u?",
        en: "What are n8n alternatives?",
      },
      answer: {
        sr: "Zapier i Make za brži no-code start; Clay za GTM-specifične tabele; Bardeen/Lindy za AI agente. n8n je jači za tehničke timove i self-host.",
        en: "Zapier and Make for faster no-code starts; Clay for GTM-specific tables; Bardeen/Lindy for AI agents. n8n is stronger for technical teams and self-hosting.",
      },
    },
    {
      question: { sr: "Da li n8n ima API?", en: "Does n8n have an API?" },
      answer: {
        sr: "Da - REST API za upravljanje workflow-ima, CLI za self-host, custom HTTP/GraphQL koraci, i MCP integracije u novijim stack-ovima.",
        en: "Yes - REST API to manage workflows, CLI for self-host, custom HTTP/GraphQL steps, and MCP integrations in newer stacks.",
      },
    },
    {
      question: {
        sr: "Kako se uklapa u sales stack?",
        en: "How does it fit in a sales stack?",
      },
      answer: {
        sr: "Tipično: webhook iz RB2B/Trigify → enrichment (FullEnrich/Clay) → scoring → Instantly/Lemlist/HeyReach → HubSpot/Attio update. n8n je lepak između alata.",
        en: "Typical flow: webhook from RB2B/Trigify → enrichment (FullEnrich/Clay) → scoring → Instantly/Lemlist/HeyReach → HubSpot/Attio update. n8n is the glue between tools.",
      },
    },
  ],
  integrations: {
    sr: [
      "Clay",
      "HubSpot",
      "Salesforce",
      "Slack",
      "Google Sheets",
      "Instantly",
      "Lemlist",
      "FullEnrich",
      "OpenAI",
      "HTTP / Webhook",
    ],
    en: [
      "Clay",
      "HubSpot",
      "Salesforce",
      "Slack",
      "Google Sheets",
      "Instantly",
      "Lemlist",
      "FullEnrich",
      "OpenAI",
      "HTTP / Webhook",
    ],
  },
};
