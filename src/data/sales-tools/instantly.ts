import type { SalesTool } from "@/types/sales-tool";

export const instantlyTool: SalesTool = {
  slug: "instantly",
  name: "Instantly",
  logo: "/images/sales-tools/instantly.png",
  tagline: {
    sr: "Cold email infrastruktura sa neograničenim inbox-ovima",
    en: "Cold email infrastructure with unlimited inboxes",
  },
  categoryId: "email-outreach",
  category: { sr: "Email outreach", en: "Email outreach" },
  categories: {
    sr: [
      "Cold email",
      "Email warmup",
      "Lead baza",
      "AI personalizacija",
      "Deliverability",
      "Unibox",
    ],
    en: [
      "Cold email",
      "Email warmup",
      "Lead database",
      "AI personalization",
      "Deliverability",
      "Unified inbox",
    ],
  },
  websiteUrl: "https://refer.instantly.ai/lead-agents",
  recommended: true,
  rating: { g2: 4.9, g2Reviews: 47 },
  overview: {
    sr: "Instantly je platforma za cold email na skali: povežete neograničen broj email naloga, zagrevate ih ugrađenim warmup-om i šaljete sekvence bez naplate po korisniku, plaćate volumen slanja.",
    en: "Instantly is a cold email platform built for scale: connect unlimited email accounts, warm them up in-app, and run sequences without per-seat pricing, you pay for sending volume.",
  },
  overviewExtended: {
    sr: "U paketu su i Lead Finder (450M+ B2B kontakata), AI pisanje poruka, obogaćivanje profila i Unibox za odgovore. Odličan izbor kada tim šalje veliki obim cold email-a sa više domena. Nije zamena za LinkedIn outreach ili pun CRM, fokus je email kanal i deliverability.",
    en: "It also includes Lead Finder (450M+ B2B contacts), AI copy, profile enrichment, and a unified inbox for replies. A strong pick when your team sends high-volume cold email across multiple domains. It is not a replacement for LinkedIn outreach or a full CRM, the focus is email and deliverability.",
  },
  idealFor: {
    sr: [
      "Agencije sa više klijenata",
      "B2B prodajni timovi",
      "Founderi koji skaliraju outbound",
      "Freelanceri i konsultanti",
      "Startapovi i SMB",
    ],
    en: [
      "Agencies managing multiple clients",
      "B2B sales teams",
      "Founders scaling outbound",
      "Freelancers and consultants",
      "Startups and SMBs",
    ],
  },
  keyFeatures: {
    sr: [
      "Neograničen broj email naloga na jednoj pretplati",
      "Ugrađeni warmup i zaštita reputacije",
      "Automatska rotacija slanja između inbox-ova",
      "Lead Finder - 450M+ kontakata i filteri",
      "AI personalizacija i follow-up sekvence",
      "Unibox, analitika i API / webhook integracije",
    ],
    en: [
      "Unlimited email accounts on one subscription",
      "Built-in warmup and reputation protection",
      "Automatic sending rotation across inboxes",
      "Lead Finder - 450M+ contacts and filters",
      "AI personalization and follow-up sequences",
      "Unified inbox, analytics, and API / webhook integrations",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "$37 / mesec", en: "$37 / month" },
    },
    {
      label: { sr: "Naplata", en: "Billing" },
      value: { sr: "Po workspace-u / volumenu", en: "Per workspace / volume" },
    },
    {
      label: { sr: "G2 ocena", en: "G2 rating" },
      value: { sr: "4.9 / 5", en: "4.9 / 5" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "Besplatan start (bez kartice)", en: "Free start (no card)" },
    },
  ],
  pricing: {
    startingPrice: { sr: "$37 / mesec", en: "$37 / month" },
    billing: {
      sr: "Po workspace-u, ne po korisniku",
      en: "Per workspace, not per user",
    },
    trial: {
      sr: "Besplatan početak bez kreditne kartice",
      en: "Free to start, no credit card required",
    },
    plans: [
      {
        id: "growth",
        name: { sr: "Growth", en: "Growth" },
        price: { sr: "$47 / mesec", en: "$47 / month" },
        billingNote: {
          sr: "Outreach plan · ~$37 uz godišnju naplatu",
          en: "Outreach plan · ~$37 with annual billing",
        },
        highlights: {
          sr: [
            "Neograničeni email nalozi",
            "Neograničeni warmup",
            "5.000 emailova mesečno",
            "1.000 uploadovanih kontakata",
            "Chat podrška",
          ],
          en: [
            "Unlimited email accounts",
            "Unlimited email warmup",
            "5,000 emails per month",
            "1,000 uploaded contacts",
            "Chat support",
          ],
        },
      },
      {
        id: "hypergrowth",
        name: { sr: "Hypergrowth", en: "Hypergrowth" },
        price: { sr: "$97 / mesec", en: "$97 / month" },
        billingNote: { sr: "Outreach plan", en: "Outreach plan" },
        highlights: {
          sr: [
            "Sve iz Growth plana",
            "100.000 emailova mesečno",
            "25.000 uploadovanih kontakata",
            "Premium live podrška",
          ],
          en: [
            "Everything in Growth",
            "100,000 emails per month",
            "25,000 uploaded contacts",
            "Premium live support",
          ],
        },
      },
      {
        id: "light-speed",
        name: { sr: "Light Speed", en: "Light Speed" },
        price: { sr: "$358 / mesec", en: "$358 / month" },
        billingNote: { sr: "Outreach plan", en: "Outreach plan" },
        highlights: {
          sr: [
            "500.000 emailova mesečno",
            "100.000 kontakata",
            "SISR, dedicirani IP pool",
            "Maksimalna deliverability infrastruktura",
          ],
          en: [
            "500,000 emails per month",
            "100,000 contacts",
            "SISR, dedicated IP pooling",
            "Maximum deliverability infrastructure",
          ],
        },
      },
      {
        id: "growth-leads",
        name: { sr: "Growth (Lead Finder)", en: "Growth (Lead Finder)" },
        price: { sr: "od $42 / mesec", en: "from $42 / month" },
        billingNote: { sr: "Krediti + lead baza", en: "Credits + lead database" },
        highlights: {
          sr: [
            "1.500-2.000 Instantly kredita",
            "450M+ B2B leadova",
            "Waterfall email enrichment",
            "AI email writer i 100+ šablona",
            "Export u CRM i outreach alate",
          ],
          en: [
            "1,500-2,000 Instantly credits",
            "450M+ B2B leads",
            "Waterfall email enrichment",
            "AI email writer and 100+ templates",
            "Export to CRMs and outreach tools",
          ],
        },
      },
      {
        id: "enterprise",
        name: { sr: "Enterprise", en: "Enterprise" },
        price: { sr: "Po dogovoru", en: "Custom" },
        billingNote: { sr: "200.000+ kredita / custom volumen", en: "200,000+ credits / custom volume" },
        highlights: {
          sr: [
            "Dedicated account manager",
            "Slack kanal",
            "Private deliverability mreža",
            "VIP setup opcije",
          ],
          en: [
            "Dedicated account manager",
            "Shared Slack channel",
            "Private deliverability network",
            "VIP setup options",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "Email nalozi", en: "Email accounts" },
        values: {
          growth: { sr: "Neograničeno", en: "Unlimited" },
          hypergrowth: { sr: "Neograničeno", en: "Unlimited" },
          "light-speed": { sr: "Neograničeno", en: "Unlimited" },
          "growth-leads": { sr: "Neograničeno", en: "Unlimited" },
          enterprise: { sr: "Neograničeno", en: "Unlimited" },
        },
      },
      {
        feature: { sr: "Emailova / mesec", en: "Emails / month" },
        values: {
          growth: { sr: "5.000", en: "5,000" },
          hypergrowth: { sr: "100.000", en: "100,000" },
          "light-speed": { sr: "500.000", en: "500,000" },
          "growth-leads": { sr: "Po kreditima", en: "Credit-based" },
          enterprise: { sr: "500.000+", en: "500,000+" },
        },
      },
      {
        feature: { sr: "Lead Finder krediti", en: "Lead Finder credits" },
        values: {
          growth: { sr: ", ", en: ", " },
          hypergrowth: { sr: ", ", en: ", " },
          "light-speed": { sr: ", ", en: ", " },
          "growth-leads": { sr: "1.500-2.000", en: "1,500-2,000" },
          enterprise: { sr: "200.000+", en: "200,000+" },
        },
      },
      {
        feature: { sr: "SISR deliverability", en: "SISR deliverability" },
        values: {
          growth: { sr: "Ne", en: "No" },
          hypergrowth: { sr: "Ne", en: "No" },
          "light-speed": { sr: "Da", en: "Yes" },
          "growth-leads": { sr: "Ne", en: "No" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Dedicated manager", en: "Dedicated manager" },
        values: {
          growth: { sr: "Ne", en: "No" },
          hypergrowth: { sr: "Ne", en: "No" },
          "light-speed": { sr: "Ne", en: "No" },
          "growth-leads": { sr: "Ne", en: "No" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Srednja", en: "Intermediate" },
    description: {
      sr: "Povežete domene i inbox-ove, podesite warmup, uvezete leadove ili koristite Lead Finder, zatim pokrenete sekvencu. Većina timova može da pošalje prvu kampanju u roku od jednog dana uz njihove vodiče i AI šablone.",
      en: "Connect domains and inboxes, configure warmup, import leads or use Lead Finder, then launch a sequence. Most teams can send a first campaign within a day using their guides and AI templates.",
    },
  },
  pros: {
    sr: [
      "Neograničeni inbox-ovi, idealno za više domena",
      "Cena raste sa volumenom, ne sa brojem prodavaca",
      "Warmup i deliverability alati uključeni",
      "Lead baza i AI personalizacija u istom ekosistemu",
      "API, webhook-i i CRM export",
    ],
    en: [
      "Unlimited inboxes, ideal for multi-domain setups",
      "Cost scales with volume, not headcount",
      "Warmup and deliverability tools included",
      "Lead database and AI personalization in one stack",
      "API, webhooks, and CRM export",
    ],
  },
  cons: {
    sr: [
      "Fokus isključivo na email, nema LinkedIn/WhatsApp sekvenci",
      "Napredni CRM i marketing automatizacija nisu u centru proizvoda",
      "Više planova (outreach vs. krediti) zahtevaju jasno planiranje budžeta",
      "Enterprise funkcije tek na višim tier-ovima",
    ],
    en: [
      "Email-only focus, no native LinkedIn/WhatsApp sequences",
      "Advanced CRM and marketing automation are not the core product",
      "Multiple plan lines (outreach vs. credits) need clear budget planning",
      "Enterprise features only on higher tiers",
    ],
  },
  alternatives: [
    {
      slug: "lemlist",
      name: "Lemlist",
      description: {
        sr: "Multichannel outreach sa naplatom po korisniku.",
        en: "Multichannel outreach with per-seat pricing.",
      },
      startingPrice: { sr: "od $55", en: "from $55" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
    {
      slug: "apollo",
      name: "Apollo",
      description: {
        sr: "Baza podataka + outreach u jednoj platformi.",
        en: "Database plus outreach in one platform.",
      },
      startingPrice: { sr: "od $49", en: "from $49" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko košta Instantly?", en: "How much does Instantly cost?" },
      answer: {
        sr: "Outreach planovi počinju od oko $37/mesec (godišnja naplata) ili $47/mesec mesečno. Hypergrowth je $97, Light Speed $358. Lead Finder planovi sa kreditima kreću od oko $42/mesec. Enterprise je po dogovoru.",
        en: "Outreach plans start around $37/month (annual billing) or $47/month billed monthly. Hypergrowth is $97, Light Speed $358. Lead Finder credit plans start around $42/month. Enterprise is custom.",
      },
    },
    {
      question: {
        sr: "Da li mogu povezati neograničeno email naloga?",
        en: "Can I connect unlimited email accounts?",
      },
      answer: {
        sr: "Da, jedna pretplata pokriva neograničen broj naloga i warmup, što je glavna prednost u odnosu na alate koji naplaćuju svakog prodavca posebno.",
        en: "Yes, one subscription covers unlimited accounts and warmup, which is the main advantage over tools that charge per rep.",
      },
    },
    {
      question: { sr: "Da li Instantly ima probni period?", en: "Does Instantly offer a trial?" },
      answer: {
        sr: "Možete krenuti besplatno bez kreditne kartice. Za enterprise i VIP setup dostupni su demo pozivi i partner program.",
        en: "You can start for free without a credit card. Demos and partner programs are available for enterprise and VIP setup.",
      },
    },
    {
      question: { sr: "Zašto izabrati Instantly?", en: "Why choose Instantly?" },
      answer: {
        sr: "Kada šaljete veliki obim cold email-a sa više domena, Instantly drži trošak predvidivim i deliverability visokim, warmup, rotacija inbox-ova i AI personalizacija su ugrađeni.",
        en: "When you send high-volume cold email across multiple domains, Instantly keeps costs predictable and deliverability high, warmup, inbox rotation, and AI personalization are built in.",
      },
    },
    {
      question: { sr: "Da li Instantly ima API?", en: "Does Instantly have an API?" },
      answer: {
        sr: "Da - API i webhook-i omogućavaju povezivanje sa CRM-om, enrichment workflow-ima i internim automatizacijama.",
        en: "Yes, the API and webhooks let you connect CRMs, enrichment workflows, and internal automations.",
      },
    },
    {
      question: {
        sr: "Koje su alternative Instantly-ju?",
        en: "What are Instantly alternatives?",
      },
      answer: {
        sr: "Često se poredi sa Smartlead, Lemlist, Reply.io i Woodpecker. Instantly i Smartlead su slični po modelu (neograničeni inbox-ovi); Lemlist i Apollo bolje pokrivaju multichannel ili data-first pristup.",
        en: "Often compared to Smartlead, Lemlist, Reply.io, and Woodpecker. Instantly and Smartlead are similar in model (unlimited inboxes); Lemlist and Apollo better cover multichannel or data-first workflows.",
      },
    },
  ],
  integrations: {
    sr: [
      "HubSpot",
      "Salesforce",
      "Pipedrive",
      "Zapier",
      "Make",
      "API / Webhooks",
    ],
    en: [
      "HubSpot",
      "Salesforce",
      "Pipedrive",
      "Zapier",
      "Make",
      "API / Webhooks",
    ],
  },
};
