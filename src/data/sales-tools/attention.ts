import type { SalesTool } from "@/types/sales-tool";

export const attentionTool: SalesTool = {
  slug: "attention",
  name: "Attention",
  logo: "/images/sales-tools/attention.png",
  tagline: {
    sr: "AI sales agenti, uče iz najboljih poziva i automatizuju CRM + follow-up",
    en: "AI sales agents, learn from top calls and automate CRM + follow-ups",
  },
  categoryId: "conversation-intelligence",
  category: { sr: "Conversation intelligence", en: "Conversation intelligence" },
  categories: {
    sr: [
      "AI sales agenti",
      "Call recording & transkripcija",
      "Auto CRM update",
      "AI coaching scorecards",
      "Follow-up email < 60s",
      "200+ integracija",
    ],
    en: [
      "AI sales agents",
      "Call recording & transcription",
      "Auto CRM update",
      "AI coaching scorecards",
      "Follow-up email < 60s",
      "200+ integrations",
    ],
  },
  websiteUrl: "https://www.attention.com/",
  recommended: true,
  rating: { g2: 4.9, g2Reviews: 200 },
  overview: {
    sr: "Attention snima i analizira sales pozive, zatim AI agenti automatski ažuriraju CRM, šalju follow-up i generišu coaching scorecards (MEDDIC, BANT, custom), da rep-ovi troše vreme na prodaju, ne na admin.",
    en: "Attention records and analyzes sales calls, then AI agents auto-update CRM, send follow-ups, and generate coaching scorecards (MEDDIC, BANT, custom), so reps spend time selling, not on admin.",
  },
  overviewExtended: {
    sr: "Enterprise-first, cena preko sales tima (tipično **$25K-$200K+/god** zavisno od tima i integracija). G2 **4.9/5**. Nije standalone CRM, sloj iznad HubSpot/Salesforce. Uporedite sa tl;dv ako vam treba transparentna cena i free tier.",
    en: "Enterprise-first, pricing via sales (typically **$25K-$200K+/year** depending on team and integrations). G2 **4.9/5**. Not a standalone CRM, a layer on HubSpot/Salesforce. Compare with tl;dv if you need transparent pricing and a free tier.",
  },
  idealFor: {
    sr: [
      "Revenue timovi (10+ rep-ova)",
      "RevOps koji standardizuju coaching",
      "Enterprise B2B sales",
      "Timovi sa Salesforce/HubSpot CRM",
      "CS i sales hybrid organizacije",
    ],
    en: [
      "Revenue teams (10+ reps)",
      "RevOps standardizing coaching",
      "Enterprise B2B sales",
      "Teams on Salesforce/HubSpot CRM",
      "CS and sales hybrid orgs",
    ],
  },
  keyFeatures: {
    sr: [
      "AI Sales Agents (pre-built + custom)",
      "1-click CRM field mapping",
      "Real-time coaching na pozivu",
      "Multi-meeting intelligence (pitaj AI bilo šta)",
      "Agent Builder",
      "Custom integracije na zahtev",
    ],
    en: [
      "AI Sales Agents (pre-built + custom)",
      "1-click CRM field mapping",
      "Real-time coaching on calls",
      "Multi-meeting intelligence (ask AI anything)",
      "Agent Builder",
      "Custom integrations on request",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena", en: "Pricing" },
      value: { sr: "Custom (sales)", en: "Custom (sales)" },
    },
    {
      label: { sr: "G2", en: "G2" },
      value: { sr: "4.9 / 5", en: "4.9 / 5" },
    },
    {
      label: { sr: "Integracije", en: "Integrations" },
      value: { sr: "200+", en: "200+" },
    },
    {
      label: { sr: "Demo", en: "Demo" },
      value: { sr: "Preko sales-a", en: "Via sales" },
    },
  ],
  pricing: {
    startingPrice: { sr: "Custom, kontakt sales", en: "Custom, contact sales" },
    billing: {
      sr: "Enterprise · po timu / seat-u",
      en: "Enterprise · per team / seat",
    },
    trial: {
      sr: "Demo preko sales tima",
      en: "Demo via sales team",
    },
    plans: [
      {
        id: "starter",
        name: { sr: "Starter (referenca)", en: "Starter (reference)" },
        price: { sr: "~$59 / user / mes", en: "~$59 / user / mo" },
        billingNote: {
          sr: "Nije javno na sajtu · procena trećih strana",
          en: "Not public on site · third-party estimate",
        },
        highlights: {
          sr: [
            "Call recording & transkripcija",
            "Osnovni AI coaching",
            "CRM sync",
            "Zoom / Meet / Teams",
            "Za manje revenue timove",
            "Potvrda cene preko sales-a",
          ],
          en: [
            "Call recording & transcription",
            "Basic AI coaching",
            "CRM sync",
            "Zoom / Meet / Teams",
            "For smaller revenue teams",
            "Confirm pricing with sales",
          ],
        },
      },
      {
        id: "professional",
        name: { sr: "Professional (referenca)", en: "Professional (reference)" },
        price: { sr: "~$149 / user / mes", en: "~$149 / user / mo" },
        billingNote: {
          sr: "Custom scorecards · analytics",
          en: "Custom scorecards · analytics",
        },
        highlights: {
          sr: [
            "Napredni coaching scorecards",
            "Deeper analytics",
            "AI agent workflow-i",
            "Framework tracking (MEDDIC…)",
            "Tim-level reporting",
            "Sales kontakt za quote",
          ],
          en: [
            "Advanced coaching scorecards",
            "Deeper analytics",
            "AI agent workflows",
            "Framework tracking (MEDDIC…)",
            "Team-level reporting",
            "Sales contact for quote",
          ],
        },
      },
      {
        id: "enterprise",
        name: { sr: "Enterprise", en: "Enterprise" },
        price: { sr: "Custom", en: "Custom" },
        billingNote: {
          sr: "Tipično $25K-$200K+ / god",
          en: "Typically $25K-$200K+ / yr",
        },
        highlights: {
          sr: [
            "Custom AI agenti",
            "Premium support & onboarding",
            "Advanced security & compliance",
            "Custom integracije",
            "Dedicated CSM",
            "Multi-region rollout",
          ],
          en: [
            "Custom AI agents",
            "Premium support & onboarding",
            "Advanced security & compliance",
            "Custom integrations",
            "Dedicated CSM",
            "Multi-region rollout",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "AI Sales Agents", en: "AI Sales Agents" },
        values: {
          starter: { sr: "Osnovno", en: "Basic" },
          professional: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Custom", en: "Custom" },
        },
      },
      {
        feature: { sr: "Custom scorecards", en: "Custom scorecards" },
        values: {
          starter: { sr: "Ne", en: "No" },
          professional: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Pun", en: "Full" },
        },
      },
      {
        feature: { sr: "CRM auto-fill", en: "CRM auto-fill" },
        values: {
          starter: { sr: "Da", en: "Yes" },
          professional: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Agent Builder", en: "Agent Builder" },
        values: {
          starter: { sr: "Ne", en: "No" },
          professional: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Javna cena", en: "Public pricing" },
        values: {
          starter: { sr: "Ne", en: "No" },
          professional: { sr: "Ne", en: "No" },
          enterprise: { sr: "Ne", en: "No" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Srednji", en: "Intermediate" },
    description: {
      sr: "Demo → povežite Zoom/Meet/Teams + CRM (Salesforce/HubSpot) → mapirajte CRM polja na meeting note template → rollout coaching framework → AI agenti za follow-up i CRM. Implementacija 2-6 nedelja za enterprise.",
      en: "Demo → connect Zoom/Meet/Teams + CRM (Salesforce/HubSpot) → map CRM fields to meeting note templates → roll out coaching framework → AI agents for follow-up and CRM. Enterprise implementation 2-6 weeks.",
    },
  },
  pros: {
    sr: [
      "Jak AI za CRM update i follow-up",
      "4.9 G2, visok satisfaction",
      "200+ integracija",
      "Real-time coaching na pozivu",
      "Smanjuje admin rep-ova 50%+",
    ],
    en: [
      "Strong AI for CRM updates and follow-ups",
      "4.9 G2, high satisfaction",
      "200+ integrations",
      "Real-time coaching on calls",
      "Cuts rep admin 50%+",
    ],
  },
  cons: {
    sr: [
      "Cena nije javna, sales call obavezan",
      "Nema self-serve free plan",
      "Skupo za mali tim (<10 rep)",
      "Nije zamena za CRM",
      "Enterprise onboarding traje",
    ],
    en: [
      "Pricing not public, sales call required",
      "No self-serve free plan",
      "Expensive for small teams (<10 reps)",
      "Not a CRM replacement",
      "Enterprise onboarding takes time",
    ],
  },
  alternatives: [
    {
      slug: "tldv",
      name: "tl;dv",
      description: {
        sr: "Transparentna cena · free plan · srpski (Whisper).",
        en: "Transparent pricing · free plan · Serbian (Whisper).",
      },
      startingPrice: { sr: "od $0", en: "from $0" },
      trial: { sr: "Free plan", en: "Free plan" },
      category: { sr: "Conversation intelligence", en: "Conversation intelligence" },
    },
    {
      slug: "hubspot",
      name: "HubSpot",
      description: {
        sr: "CRM koji Attention puni automatski.",
        en: "CRM Attention fills automatically.",
      },
      startingPrice: { sr: "od $0", en: "from $0" },
      trial: { sr: "Free CRM", en: "Free CRM" },
      category: { sr: "CRM", en: "CRM" },
    },
    {
      slug: "revsure",
      name: "RevSure",
      description: {
        sr: "Pipeline analytics, druga namena.",
        en: "Pipeline analytics, different use case.",
      },
      startingPrice: { sr: "Custom", en: "Custom" },
      trial: { sr: "Demo", en: "Demo" },
      category: { sr: "Analitika", en: "Analytics" },
    },
    {
      slug: "clay",
      name: "Clay",
      description: {
        sr: "Prospecting, pre poziva.",
        en: "Prospecting, before calls.",
      },
      startingPrice: { sr: "od $149", en: "from $149" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko košta Attention?", en: "How much does Attention cost?" },
      answer: {
        sr: "Javna cena nije na sajtu, kontaktirajte sales. Enterprise deploy-ovi često $25K-$200K+/god. Treće strane pominju ~$59-$399/user/mes tier-ove, potvrdite sa Attention timom.",
        en: "No public pricing on the site, contact sales. Enterprise deployments often $25K-$200K+/year. Third parties mention ~$59-$399/user/mo tiers, confirm with Attention.",
      },
    },
    {
      question: { sr: "Da li ima besplatan plan?", en: "Is there a free plan?" },
      answer: {
        sr: "Nema javnog free plana, demo i trial dogovaraju se preko sales kontakta (work email).",
        en: "No public free plan, demo and trial arranged via sales contact (work email).",
      },
    },
    {
      question: { sr: "Zašto izabrati Attention?", en: "Why choose Attention?" },
      answer: {
        sr: "Kada imate revenue tim koji gubi deal-ove zbog praznina u procesu, a želite AI agente koji automatski popunjavaju CRM i coach-uju iz stvarnih poziva.",
        en: "When your revenue team loses deals to process gaps, and you want AI agents that auto-fill CRM and coach from real calls.",
      },
    },
    {
      question: { sr: "Attention vs tl;dv?", en: "Attention vs tl;dv?" },
      answer: {
        sr: "Attention je enterprise AI sales agent fokus. tl;dv ima javnu cenu, free plan i Whisper transkripciju na srpskom, bolji za SMB i timove koji žele brz start.",
        en: "Attention is enterprise AI sales agent focus. tl;dv has public pricing, a free plan, and Whisper Serbian transcription, better for SMB and fast starts.",
      },
    },
    {
      question: { sr: "Da li ima API?", en: "Does it have an API?" },
      answer: {
        sr: "Da - 200+ integracija + custom integration requests; API pristup na enterprise dogovoru.",
        en: "Yes - 200+ integrations + custom integration requests; API access on enterprise agreement.",
      },
    },
  ],
  integrations: {
    sr: [
      "Salesforce",
      "HubSpot",
      "Zoom",
      "Google Meet",
      "Microsoft Teams",
      "Zapier",
      "Slack",
      "Gong (import)",
    ],
    en: [
      "Salesforce",
      "HubSpot",
      "Zoom",
      "Google Meet",
      "Microsoft Teams",
      "Zapier",
      "Slack",
      "Gong (import)",
    ],
  },
};
