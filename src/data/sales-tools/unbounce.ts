import type { SalesTool } from "@/types/sales-tool";

export const unbounceTool: SalesTool = {
  slug: "unbounce",
  name: "Unbounce",
  logo: "/images/sales-tools/unbounce.png",
  tagline: {
    sr: "No-code landing stranice sa AI optimizacijom konverzija",
    en: "No-code landing pages with AI conversion optimization",
  },
  categoryId: "landing-pages",
  category: { sr: "Landing stranice", en: "Landing pages" },
  categories: {
    sr: [
      "Landing page builder",
      "A/B testiranje",
      "CRO",
      "AI copywriting",
      "Popups i sticky bars",
      "Smart Traffic",
    ],
    en: [
      "Landing page builder",
      "A/B testing",
      "CRO",
      "AI copywriting",
      "Popups and sticky bars",
      "Smart Traffic",
    ],
  },
  websiteUrl: "https://unbounce.com/",
  recommended: true,
  rating: { g2: 4.4, g2Reviews: 376 },
  overview: {
    sr: "Unbounce je platforma za landing stranice bez koda: drag-and-drop editor, A/B testovi i AI (Smart Traffic, copywriting) koji pomažu da paid i outbound kampanje konvertuju bolje, bez developera.",
    en: "Unbounce is a no-code landing page platform: drag-and-drop builder, A/B tests, and AI (Smart Traffic, copywriting) to help paid and outbound campaigns convert better, without developers.",
  },
  overviewExtended: {
    sr: "Idealno kada vam treba brza stranica za oglas, webinar ili cold email CTA, ne ceo sajt. Integracije sa HubSpot, Salesforce i Zapier-om povezuju stranicu sa CRM-om i email alatima. Nije zamena za Webflow ili WordPress; fokus je konverzija na jednoj stranici.",
    en: "Ideal when you need a fast page for ads, webinars, or cold email CTAs, not a full site. Integrations with HubSpot, Salesforce, and Zapier connect pages to your CRM and email stack. It is not a replacement for Webflow or WordPress; the focus is single-page conversion.",
  },
  idealFor: {
    sr: [
      "Marketing timovi i growth",
      "Agencije sa više klijenata",
      "SaaS i B2B lead gen",
      "E-commerce kampanje",
      "Founderi bez dev tima",
    ],
    en: [
      "Marketing and growth teams",
      "Agencies with multiple clients",
      "SaaS and B2B lead gen",
      "E-commerce campaigns",
      "Founders without a dev team",
    ],
  },
  keyFeatures: {
    sr: [
      "Drag-and-drop builder i 100+ šablona",
      "No-code A/B testiranje i varijante",
      "AI Smart Traffic, usmerava posetioce na bolju varijantu",
      "AI copywriting za naslove i CTA",
      "Popups, sticky bars i dinamički tekst",
      "Analitika, integracije i custom domen",
    ],
    en: [
      "Drag-and-drop builder and 100+ templates",
      "No-code A/B testing and variants",
      "AI Smart Traffic, routes visitors to better variants",
      "AI copywriting for headlines and CTAs",
      "Popups, sticky bars, and dynamic text replacement",
      "Analytics, integrations, and custom domains",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "$29 / mesec", en: "$29 / month" },
    },
    {
      label: { sr: "Naplata", en: "Billing" },
      value: { sr: "Po korisniku / timu", en: "Per user / team" },
    },
    {
      label: { sr: "G2 ocena", en: "G2 rating" },
      value: { sr: "4.4 / 5", en: "4.4 / 5" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "14 dana (bez kartice)", en: "14 days (no card)" },
    },
  ],
  pricing: {
    startingPrice: { sr: "od $29 / mesec", en: "from $29 / month" },
    billing: {
      sr: "Mesečno ili godišnje (ušteda ~25%)",
      en: "Monthly or annual (~25% savings)",
    },
    trial: {
      sr: "14 dana besplatno, bez kreditne kartice",
      en: "14-day free trial, no credit card",
    },
    plans: [
      {
        id: "starter",
        name: { sr: "Starter", en: "Starter" },
        price: { sr: "$29 / mesec", en: "$29 / month" },
        billingNote: {
          sr: "~$22 uz godišnju naplatu",
          en: "~$22 with annual billing",
        },
        highlights: {
          sr: [
            "Drag-and-drop builder",
            "5 stranica",
            "Do 500 posetilaca mesečno",
            "1 korisnik, 1 root domen",
            "Lead forme i besplatan hosting",
          ],
          en: [
            "Drag-and-drop builder",
            "5 pages",
            "Up to 500 visitors per month",
            "1 user, 1 root domain",
            "Lead forms and free hosting",
          ],
        },
      },
      {
        id: "build",
        name: { sr: "Build", en: "Build" },
        price: { sr: "$99 / mesec", en: "$99 / month" },
        billingNote: {
          sr: "~$74 uz godišnju naplatu",
          en: "~$74 with annual billing",
        },
        highlights: {
          sr: [
            "Neograničene stranice",
            "Do 20k posetilaca",
            "Popups i sticky bars",
            "AI copywriting",
            "1000+ integracija",
          ],
          en: [
            "Unlimited pages",
            "Up to 20k visitors",
            "Popups and sticky bars",
            "AI copywriting",
            "1,000+ integrations",
          ],
        },
      },
      {
        id: "experiment",
        name: { sr: "Experiment", en: "Experiment" },
        price: { sr: "$149 / mesec", en: "$149 / month" },
        billingNote: {
          sr: "~$112 uz godišnju naplatu · 3 korisnika",
          en: "~$112 with annual billing · 3 users",
        },
        highlights: {
          sr: [
            "Neograničeni A/B testovi",
            "Do 30k posetilaca",
            "2 root domena",
            "Neograničene varijante",
            "Conversion insights",
          ],
          en: [
            "Unlimited A/B tests",
            "Up to 30k visitors",
            "2 root domains",
            "Unlimited variants",
            "Conversion insights",
          ],
        },
      },
      {
        id: "optimize",
        name: { sr: "Optimize", en: "Optimize" },
        price: { sr: "$249 / mesec", en: "$249 / month" },
        billingNote: {
          sr: "~$187 uz godišnju naplatu · 5 korisnika",
          en: "~$187 with annual billing · 5 users",
        },
        highlights: {
          sr: [
            "AI traffic optimizacija (Smart Traffic)",
            "Do 50k posetilaca",
            "3 root domena",
            "Zakazivanje stranica i popup-ova",
            "Advanced targeting i benchmarking",
          ],
          en: [
            "AI traffic optimization (Smart Traffic)",
            "Up to 50k visitors",
            "3 root domains",
            "Page, popup, and sticky bar scheduling",
            "Advanced targeting and benchmarking",
          ],
        },
      },
      {
        id: "agency",
        name: { sr: "Agency / Concierge", en: "Agency / Concierge" },
        price: { sr: "Po dogovoru", en: "Custom" },
        billingNote: {
          sr: "Od 50k+ posetilaca, više klijenata",
          en: "From 50k+ visitors, multi-client",
        },
        highlights: {
          sr: [
            "Neograničene kolaboracije",
            "Implementation services",
            "Dedicated success manager",
            "Agency partner listing",
          ],
          en: [
            "Unlimited collaborations",
            "Implementation services",
            "Dedicated success manager",
            "Agency partner listing",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "Stranice", en: "Pages" },
        values: {
          starter: { sr: "5", en: "5" },
          build: { sr: "Neograničeno", en: "Unlimited" },
          experiment: { sr: "Neograničeno", en: "Unlimited" },
          optimize: { sr: "Neograničeno", en: "Unlimited" },
          agency: { sr: "Neograničeno", en: "Unlimited" },
        },
      },
      {
        feature: { sr: "Posetioci / mesec", en: "Visitors / month" },
        values: {
          starter: { sr: "500", en: "500" },
          build: { sr: "20.000", en: "20,000" },
          experiment: { sr: "30.000", en: "30,000" },
          optimize: { sr: "50.000", en: "50,000" },
          agency: { sr: "50.000+", en: "50,000+" },
        },
      },
      {
        feature: { sr: "A/B testovi", en: "A/B testing" },
        values: {
          starter: { sr: "Ne", en: "No" },
          build: { sr: "Ne", en: "No" },
          experiment: { sr: "Neograničeno", en: "Unlimited" },
          optimize: { sr: "Neograničeno", en: "Unlimited" },
          agency: { sr: "Neograničeno", en: "Unlimited" },
        },
      },
      {
        feature: { sr: "AI Smart Traffic", en: "AI Smart Traffic" },
        values: {
          starter: { sr: "Ne", en: "No" },
          build: { sr: "Ne", en: "No" },
          experiment: { sr: "Ne", en: "No" },
          optimize: { sr: "Da", en: "Yes" },
          agency: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Korisnici", en: "Users" },
        values: {
          starter: { sr: "1", en: "1" },
          build: { sr: "1", en: "1" },
          experiment: { sr: "3", en: "3" },
          optimize: { sr: "5", en: "5" },
          agency: { sr: "5+", en: "5+" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Srednja", en: "Intermediate" },
    description: {
      sr: "Izaberete šablon ili blank stranicu, povežete domen, dodate formu i pixel-e, pa objavite. A/B testovi i Smart Traffic zahtevaju malo više planiranja, većina timova objavi prvu kampanju u jednom danu.",
      en: "Pick a template or blank page, connect your domain, add forms and pixels, then publish. A/B tests and Smart Traffic need a bit more planning, most teams ship a first campaign within a day.",
    },
  },
  pros: {
    sr: [
      "Brzo pokretanje landing stranica bez developera",
      "Jasan fokus na konverziju i CRO, ne na ceo sajt",
      "AI Smart Traffic i copywriting u višim planovima",
      "100+ šablona, hosting i integracije uključeni",
      "14-dnevni trial bez kreditne kartice",
    ],
    en: [
      "Launch landing pages fast without developers",
      "Clear conversion and CRO focus, not full-site builds",
      "AI Smart Traffic and copywriting on higher tiers",
      "100+ templates, hosting, and integrations included",
      "14-day trial with no credit card",
    ],
  },
  cons: {
    sr: [
      "Nije alat za kompletan web sajt ili backend logiku",
      "Naplaćuje se po korisniku, timovi brzo rastu u ceni",
      "Limiti posetilaca, prekoračenje nosi dodatne troškove",
      "Starter plan ima samo 5 stranica",
      "Najbolji AI i A/B alati tek od Experiment/Optimize plana",
    ],
    en: [
      "Not built for full websites or backend logic",
      "Per-user pricing adds up as teams grow",
      "Visitor caps, overages can add cost",
      "Starter plan caps at 5 pages",
      "Best AI and A/B features start at Experiment/Optimize tiers",
    ],
  },
  alternatives: [
    {
      slug: "adcreative",
      name: "AdCreative.ai",
      description: {
        sr: "AI baneri i video za paid kampanje uz landing.",
        en: "AI banners and video for paid campaigns alongside landing pages.",
      },
      startingPrice: { sr: "od $39", en: "from $39" },
      trial: { sr: "7 dana", en: "7 days" },
      category: { sr: "Paid reklame", en: "Paid ads" },
    },
    {
      slug: "instantly",
      name: "Instantly",
      description: {
        sr: "Cold email infrastruktura, par za landing + outbound.",
        en: "Cold email infrastructure, pairs with landing + outbound.",
      },
      startingPrice: { sr: "od $37 / mesec", en: "from $37 / month" },
      trial: { sr: "Besplatan start", en: "Free start" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
    {
      slug: "instapage",
      name: "Instapage",
      description: {
        sr: "Landing stranice za enterprise timove i agencije.",
        en: "Landing pages for enterprise teams and agencies.",
      },
      startingPrice: { sr: "od $79 / mesec", en: "from $79 / month" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Landing stranice", en: "Landing pages" },
    },
    {
      slug: "leadpages",
      name: "Leadpages",
      description: {
        sr: "Jednostavan builder za lead gen i prodaju.",
        en: "Simple builder for lead gen and sales pages.",
      },
      startingPrice: { sr: "od $37 / mesec", en: "from $37 / month" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Landing stranice", en: "Landing pages" },
    },
    {
      slug: "clickfunnels",
      name: "ClickFunnels",
      description: {
        sr: "Funnel-i od stranice do checkout-a.",
        en: "Funnels from page to checkout.",
      },
      startingPrice: { sr: "od $97 / mesec", en: "from $97 / month" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Landing stranice", en: "Landing pages" },
    },
  ],
  faq: [
    {
      question: { sr: "Kako koristiti Unbounce?", en: "How do you use Unbounce?" },
      answer: {
        sr: "Kreirate stranicu u drag-and-drop editoru, povežete domen ili koristite Unbounce hosting, dodate formu i tracking, pa objavite. Za optimizaciju pokrenete A/B test ili Smart Traffic na Optimize planu.",
        en: "Build a page in the drag-and-drop editor, connect a domain or use Unbounce hosting, add forms and tracking, then publish. For optimization, run A/B tests or Smart Traffic on the Optimize plan.",
      },
    },
    {
      question: { sr: "Koliko košta Unbounce?", en: "How much does Unbounce cost?" },
      answer: {
        sr: "Starter kreće od $29/mesec ($22 godišnje). Build sa neograničenim stranicama je oko $74-99/mesec, Experiment ~$112-149, Optimize ~$187-249. Agency i Concierge su po dogovoru.",
        en: "Starter starts at $29/month ($22 billed annually). Build with unlimited pages is around $74-99/month, Experiment ~$112-149, Optimize ~$187-249. Agency and Concierge are custom.",
      },
    },
    {
      question: { sr: "Da li Unbounce ima probni period?", en: "Does Unbounce offer a trial?" },
      answer: {
        sr: "Da - 14 dana sa punim pristupom izabranom planu, bez kreditne kartice. Ne naplaćuju dok ne odlučite da nastavite.",
        en: "Yes - 14 days with full access to your chosen plan, no credit card required. You are not charged until you choose to continue.",
      },
    },
    {
      question: { sr: "Zašto izabrati Unbounce?", en: "Why choose Unbounce?" },
      answer: {
        sr: "Kada vam treba brza, testabilna landing stranica za paid ili outbound kampanje, sa AI optimizacijom i bez dev tima - Unbounce je jedan od najzrelijih alata u kategoriji.",
        en: "When you need a fast, testable landing page for paid or outbound campaigns, with AI optimization and no dev team - Unbounce is one of the most mature tools in the category.",
      },
    },
    {
      question: { sr: "Kako radi Smart Traffic?", en: "How does Smart Traffic work?" },
      answer: {
        sr: "AI analizira ponašanje posetilaca i automatski usmerava svakog na varijantu stranice koja ima veću šansu za konverziju, bez ručnog podešavanja split testova posle početne faze.",
        en: "AI analyzes visitor behavior and automatically routes each person to the page variant most likely to convert, without manual split-test tuning after the initial learning phase.",
      },
    },
    {
      question: { sr: "Da li Unbounce ima API?", en: "Does Unbounce have an API?" },
      answer: {
        sr: "Podržava custom skripte, integracije i automatizaciju preko Zapier-a i sličnih alata; za napredne workflow-e koristite njihovu dokumentaciju i partner integracije.",
        en: "It supports custom scripts, integrations, and automation via Zapier and similar tools; for advanced workflows, use their docs and partner integrations.",
      },
    },
    {
      question: {
        sr: "Koje su alternative Unbounce-u?",
        en: "What are Unbounce alternatives?",
      },
      answer: {
        sr: "Često se poredi sa Instapage, Leadpages i ClickFunnels. Za kompletan outbound stack dodajte cold email alat poput Instantly, landing stranica + inbox kampanja.",
        en: "Often compared to Instapage, Leadpages, and ClickFunnels. For a full outbound stack, pair it with a cold email tool like Instantly, landing page plus inbox campaigns.",
      },
    },
  ],
  integrations: {
    sr: [
      "HubSpot",
      "Salesforce",
      "Mailchimp",
      "ActiveCampaign",
      "Zapier",
      "WordPress",
      "Google Analytics",
    ],
    en: [
      "HubSpot",
      "Salesforce",
      "Mailchimp",
      "ActiveCampaign",
      "Zapier",
      "WordPress",
      "Google Analytics",
    ],
  },
};
