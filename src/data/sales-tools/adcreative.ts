import type { SalesTool } from "@/types/sales-tool";

export const adcreativeTool: SalesTool = {
  slug: "adcreative",
  name: "AdCreative.ai",
  logo: "/images/sales-tools/adcreative.png",
  tagline: {
    sr: "AI ad kreativi — baneri, copy, video i product shoot za Meta i Google",
    en: "AI ad creatives — banners, copy, video, and product shoots for Meta and Google",
  },
  categoryId: "paid-ads",
  category: { sr: "Paid reklame", en: "Paid ads" },
  categories: {
    sr: [
      "AI ad kreativi",
      "Performance insights",
      "Product photoshoot",
      "Video & UGC oglasi",
      "Competitor analysis",
      "Meta & Google integracije",
    ],
    en: [
      "AI ad creatives",
      "Performance insights",
      "Product photoshoot",
      "Video & UGC ads",
      "Competitor analysis",
      "Meta & Google integrations",
    ],
  },
  websiteUrl: "https://www.adcreative.ai/",
  recommended: true,
  rating: { g2: 4.6, g2Reviews: 320 },
  overview: {
    sr: "AdCreative.ai generiše oglase optimizovane za konverziju: statični baneri, AI copy, product photoshoot i video — trenirano na podacima sa $35B+ u ad spend-u. Krediti se troše na download; generisanje je neograničeno.",
    en: "AdCreative.ai generates conversion-optimized ads: static banners, AI copy, product photoshoots, and video — trained on $35B+ in ad performance data. Credits are spent on downloads; generation is unlimited.",
  },
  overviewExtended: {
    sr: "Za e-commerce, agencije i SMB paid timove. Starter ($39/mes, 10 kredita) pokriva slike i copy; Professional ($249) otključava video, batch, creative scoring i compliance. Ultimate ($999) za više brendova i agency scale. 7-dnevni trial (10 kredita, bez kartice). Godišnje -50%, kvartalno -25%.",
    en: "For e-commerce, agencies, and SMB paid media teams. Starter ($39/mo, 10 credits) covers images and copy; Professional ($249) unlocks video, batch, creative scoring, and compliance. Ultimate ($999) for more brands and agency scale. 7-day trial (10 credits, no card). Annual -50%, quarterly -25%.",
  },
  idealFor: {
    sr: [
      "E-commerce i D2C brendovi",
      "Performance marketing agencije",
      "SMB sa Meta/Google ads",
      "Growth timovi bez dizajnera",
      "Timovi koji testiraju mnogo varijanti",
    ],
    en: [
      "E-commerce and D2C brands",
      "Performance marketing agencies",
      "SMBs running Meta/Google ads",
      "Growth teams without designers",
      "Teams testing many ad variants",
    ],
  },
  keyFeatures: {
    sr: [
      "AI baneri i social ad formati",
      "Text Generator (headlines & copy)",
      "Product photoshoot transformacija",
      "Creative Insight & competitor ads",
      "Neograničeno generisanje",
      "iStock biblioteka (100M+ slika)",
    ],
    en: [
      "AI banners and social ad formats",
      "Text Generator (headlines & copy)",
      "Product photoshoot transformation",
      "Creative Insight & competitor ads",
      "Unlimited generation",
      "iStock library (100M+ images)",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "$39 / mesec", en: "$39 / month" },
    },
    {
      label: { sr: "Naplata", en: "Billing" },
      value: { sr: "Krediti (download)", en: "Credits (downloads)" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "7 dana · bez kartice", en: "7 days · no card" },
    },
    {
      label: { sr: "Godišnje", en: "Annual" },
      value: { sr: "do -50%", en: "up to 50% off" },
    },
  ],
  pricing: {
    startingPrice: { sr: "od $39 / mesec", en: "from $39 / month" },
    billing: {
      sr: "Krediti po download-u · kvartal -25% · godina -50%",
      en: "Credits per download · quarterly 25% off · annual 50% off",
    },
    trial: {
      sr: "7 dana · 10 kredita · bez kartice",
      en: "7 days · 10 credits · no card required",
    },
    plans: [
      {
        id: "starter",
        name: { sr: "Starter", en: "Starter" },
        price: { sr: "$39 / mes", en: "$39 / mo" },
        billingNote: {
          sr: "~$20/mes godišnje · 10 kredita",
          en: "~$20/mo annually · 10 credits",
        },
        highlights: {
          sr: [
            "10 download kredita / mesec",
            "1 brand · 1 korisnik",
            "Unlimited generisanje",
            "Text Generator AI",
            "Meta & Google integracije",
            "Creative Insight AI",
          ],
          en: [
            "10 download credits / month",
            "1 brand · 1 user",
            "Unlimited generation",
            "Text Generator AI",
            "Meta & Google integrations",
            "Creative Insight AI",
          ],
        },
      },
      {
        id: "professional",
        name: { sr: "Professional", en: "Professional" },
        price: { sr: "$249 / mes", en: "$249 / mo" },
        billingNote: {
          sr: "~$125/mes godišnje · 50 kredita",
          en: "~$125/mo annually · 50 credits",
        },
        highlights: {
          sr: [
            "50 kredita · do 10 korisnika",
            "10 brandova",
            "Product & ad video",
            "Batch creatives & custom templates",
            "Creative Scoring & Compliance AI",
            "Competitor Insights",
          ],
          en: [
            "50 credits · up to 10 users",
            "10 brands",
            "Product & ad video",
            "Batch creatives & custom templates",
            "Creative Scoring & Compliance AI",
            "Competitor Insights",
          ],
        },
      },
      {
        id: "ultimate",
        name: { sr: "Ultimate", en: "Ultimate" },
        price: { sr: "$999 / mes", en: "$999 / mo" },
        billingNote: {
          sr: "~$500/mes godišnje · 100 kredita",
          en: "~$500/mo annually · 100 credits",
        },
        highlights: {
          sr: [
            "100 kredita · 20 korisnika",
            "25 brandova",
            "Storytelling & fashion video",
            "Sve Pro funkcije",
            "Agency-scale kapacitet",
            "Prioritetni support",
          ],
          en: [
            "100 credits · 20 users",
            "25 brands",
            "Storytelling & fashion video",
            "All Pro features",
            "Agency-scale capacity",
            "Priority support",
          ],
        },
      },
      {
        id: "enterprise",
        name: { sr: "Enterprise", en: "Enterprise" },
        price: { sr: "Custom", en: "Custom" },
        billingNote: { sr: "Tailored AI modeli", en: "Tailored AI models" },
        highlights: {
          sr: [
            "Fine-tuning na vašim podacima",
            "Commercially safe AI",
            "Governance & compliance",
            "Dedicated account manager",
            "API & DAM integracije",
            "Personalizovan onboarding",
          ],
          en: [
            "Fine-tuning on your data",
            "Commercially safe AI",
            "Governance & compliance",
            "Dedicated account manager",
            "API & DAM integrations",
            "Personalized onboarding",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "Mesečni krediti", en: "Monthly credits" },
        values: {
          starter: { sr: "10", en: "10" },
          professional: { sr: "50", en: "50" },
          ultimate: { sr: "100", en: "100" },
          enterprise: { sr: "Custom", en: "Custom" },
        },
      },
      {
        feature: { sr: "Brandovi", en: "Brands" },
        values: {
          starter: { sr: "1", en: "1" },
          professional: { sr: "10", en: "10" },
          ultimate: { sr: "25", en: "25" },
          enterprise: { sr: "Custom", en: "Custom" },
        },
      },
      {
        feature: { sr: "Korisnici", en: "Users" },
        values: {
          starter: { sr: "1", en: "1" },
          professional: { sr: "10", en: "10" },
          ultimate: { sr: "20", en: "20" },
          enterprise: { sr: "Custom", en: "Custom" },
        },
      },
      {
        feature: { sr: "Video oglasi", en: "Video ads" },
        values: {
          starter: { sr: "Ne", en: "No" },
          professional: { sr: "Da", en: "Yes" },
          ultimate: { sr: "Pun paket", en: "Full suite" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Batch creatives", en: "Batch creatives" },
        values: {
          starter: { sr: "Ne", en: "No" },
          professional: { sr: "Da", en: "Yes" },
          ultimate: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Competitor insights", en: "Competitor insights" },
        values: {
          starter: { sr: "Ograničeno", en: "Limited" },
          professional: { sr: "Da", en: "Yes" },
          ultimate: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Početni do srednji", en: "Beginner to intermediate" },
    description: {
      sr: "Registracija → 7-dnevni trial → upload brand kit (logo, boje, font) → izbor formata (Meta, Google, social) → generisanje varijanti → download troši kredit. Povežite ad account za Creative Insight. Za video i batch pređite na Professional.",
      en: "Sign up → 7-day trial → upload brand kit (logo, colors, fonts) → pick formats (Meta, Google, social) → generate variants → download uses a credit. Connect ad accounts for Creative Insight. Upgrade to Professional for video and batch.",
    },
  },
  pros: {
    sr: [
      "Brzo — kreativi za minute, ne dane",
      "Trenirano na ogromnom ad performance dataset-u",
      "Neograničeno generisanje pre download-a",
      "Integracije sa Meta i Google Ads",
      "Jasan ROI za paid timove bez agencije",
    ],
    en: [
      "Fast — creatives in minutes, not days",
      "Trained on a massive ad performance dataset",
      "Unlimited generation before download",
      "Meta and Google Ads integrations",
      "Clear ROI for paid teams without an agency",
    ],
  },
  cons: {
    sr: [
      "Video i batch tek od $249/mes",
      "Krediti se ne prenose — troše se na download",
      "Nije zamena za Canva dizajn opšte namene",
      "Enterprise API samo na custom planu",
      "Ultimate plan skup za manje agencije",
    ],
    en: [
      "Video and batch only from $249/mo",
      "Credits do not roll over — spent on download",
      "Not a general-purpose Canva replacement",
      "Enterprise API only on custom plans",
      "Ultimate plan is expensive for smaller agencies",
    ],
  },
  alternatives: [
    {
      slug: "unbounce",
      name: "Unbounce",
      description: {
        sr: "Landing stranice — drugačiji deo funnel-a.",
        en: "Landing pages — different part of the funnel.",
      },
      startingPrice: { sr: "od $29", en: "from $29" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Landing stranice", en: "Landing pages" },
    },
    {
      slug: "instantly",
      name: "Instantly",
      description: {
        sr: "Cold email — paid + outbound stack.",
        en: "Cold email — paid plus outbound stack.",
      },
      startingPrice: { sr: "od $37", en: "from $37" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
    {
      slug: "clay",
      name: "Clay",
      description: {
        sr: "GTM data — ne generiše ad kreative.",
        en: "GTM data — does not generate ad creatives.",
      },
      startingPrice: { sr: "od $149", en: "from $149" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "n8n",
      name: "n8n",
      description: {
        sr: "Automatizuj export kreativa u ad account.",
        en: "Automate creative export to ad accounts.",
      },
      startingPrice: { sr: "od €20", en: "from €20" },
      trial: { sr: "Besplatno", en: "Free trial" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko košta AdCreative.ai?", en: "How much does AdCreative.ai cost?" },
      answer: {
        sr: "Starter $39/mes (10 kredita), Professional $249 (50), Ultimate $999 (100). Godišnja pretplata do -50% (npr. Starter ~$20/mes). Enterprise je custom.",
        en: "Starter $39/mo (10 credits), Professional $249 (50), Ultimate $999 (100). Annual billing up to 50% off (e.g. Starter ~$20/mo). Enterprise is custom.",
      },
    },
    {
      question: { sr: "Šta je kredit?", en: "What is a credit?" },
      answer: {
        sr: "Kredit se troši kada preuzmete (download) finalni kreativ. Generisanje varijanti je neograničeno — možete testirati mnogo verzija pre nego što potrošite kredit na export.",
        en: "A credit is spent when you download a final creative. Generating variants is unlimited — test many versions before spending a credit on export.",
      },
    },
    {
      question: { sr: "Da li ima besplatan trial?", en: "Is there a free trial?" },
      answer: {
        sr: "Da — 7 dana sa pristupom Pro funkcijama i 10 kredita, bez kreditne kartice.",
        en: "Yes — 7 days with Pro feature access and 10 credits, no credit card required.",
      },
    },
    {
      question: { sr: "Zašto izabrati AdCreative?", en: "Why choose AdCreative?" },
      answer: {
        sr: "Kada vam trebaju performance-oriented ad kreativi brzo, sa insight-ima iz stvarnih kampanja i bez full-time dizajnera — posebno za e-commerce i agencije sa više klijenata.",
        en: "When you need performance-oriented ad creatives fast, with insights from real campaigns and without a full-time designer — especially for e-commerce and multi-client agencies.",
      },
    },
    {
      question: { sr: "Kako radi AdCreative?", en: "How does AdCreative work?" },
      answer: {
        sr: "Uploadujete brand, birate tip oglasa (banner, video, photoshoot), AI generiše varijante optimizovane za konverziju, Creative Insight pokazuje šta radi u povezanim ad account-ima.",
        en: "Upload your brand, pick ad types (banner, video, photoshoot), AI generates conversion-optimized variants, and Creative Insight shows what works in connected ad accounts.",
      },
    },
    {
      question: {
        sr: "Koje su alternative AdCreative-u?",
        en: "What are AdCreative alternatives?",
      },
      answer: {
        sr: "Canva, Predis.ai, AdGen AI za generisanje; za landing + ads kombinujete sa Unbounce. AdCreative se fokusira na paid performance data, ne opšti dizajn.",
        en: "Canva, Predis.ai, AdGen AI for generation; combine with Unbounce for landing plus ads. AdCreative focuses on paid performance data, not general design.",
      },
    },
    {
      question: {
        sr: "Da li treba Professional za video?",
        en: "Do you need Professional for video?",
      },
      answer: {
        sr: "Da — product video, ad video, storytelling i batch creatives su na Professional ($249) ili Ultimate planu. Starter je primarno za statične kreative i copy.",
        en: "Yes — product video, ad video, storytelling, and batch creatives are on Professional ($249) or Ultimate. Starter is primarily for static creatives and copy.",
      },
    },
    {
      question: {
        sr: "Da li ima API?",
        en: "Does it have an API?",
      },
      answer: {
        sr: "Javni self-serve API nije istaknut — Enterprise uključuje API/DAM integracije i tailored modele. Za većinu timova dovoljne su native Meta/Google integracije.",
        en: "A public self-serve API is not prominently listed — Enterprise includes API/DAM integrations and tailored models. For most teams, native Meta/Google integrations are enough.",
      },
    },
  ],
  integrations: {
    sr: [
      "Meta Ads (Facebook/Instagram)",
      "Google Ads",
      "LinkedIn Ads",
      "iStock",
      "Zapier",
      "Shopify (e-commerce)",
    ],
    en: [
      "Meta Ads (Facebook/Instagram)",
      "Google Ads",
      "LinkedIn Ads",
      "iStock",
      "Zapier",
      "Shopify (e-commerce)",
    ],
  },
};
