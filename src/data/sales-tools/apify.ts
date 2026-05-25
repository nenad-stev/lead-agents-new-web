import type { SalesTool } from "@/types/sales-tool";

export const apifyTool: SalesTool = {
  slug: "apify",
  name: "Apify",
  logo: "/images/sales-tools/apify.png",
  tagline: {
    sr: "Web scraping i automatizacija — hiljade Actor-a, API i proxy infrastruktura",
    en: "Web scraping and automation — thousands of Actors, API, and proxy infrastructure",
  },
  categoryId: "prospecting",
  category: { sr: "Prospecting", en: "Prospecting" },
  categories: {
    sr: [
      "Web scraping",
      "Data extraction",
      "Apify Store (Actors)",
      "Workflow automatizacija",
      "Proxy & anti-bot",
      "API & scheduling",
    ],
    en: [
      "Web scraping",
      "Data extraction",
      "Apify Store (Actors)",
      "Workflow automation",
      "Proxy & anti-bot",
      "API & scheduling",
    ],
  },
  websiteUrl: "https://apify.com/",
  recommended: true,
  rating: { g2: 4.7, g2Reviews: 210 },
  overview: {
    sr: "Apify je cloud platforma za izvlačenje podataka sa weba: pokrećete gotove scrapere (Actors) iz Store-a ili pišete sopstvene — bez održavanja servera, proxy-ja i skaliranja.",
    en: "Apify is a cloud platform for extracting web data: run ready-made scrapers (Actors) from the Store or build your own — without maintaining servers, proxies, or scaling infrastructure.",
  },
  overviewExtended: {
    sr: "Za GTM timove: LinkedIn, Google Maps, marketplace listingi, job boardovi — podaci u JSON/CSV ili direktno u Clay, Zapier, Google Sheets. Naplata je pretplata + pay-as-you-go (compute units, proxy GB, storage). Nije CRM ni outreach alat — koristi se da napunite pipeline podacima.",
    en: "For GTM teams: LinkedIn, Google Maps, marketplace listings, job boards — output as JSON/CSV or straight into Clay, Zapier, Google Sheets. Billing is subscription plus pay-as-you-go (compute units, proxy GB, storage). Not a CRM or outreach tool — use it to feed your pipeline with data.",
  },
  idealFor: {
    sr: [
      "GTM Ops i growth timovi",
      "Agencije koje grade custom liste",
      "Developeri koji prodaju scrapere (Actors)",
      "RevOps sa repetitivnim data taskovima",
      "Timovi koji integrišu sa Clay-om",
    ],
    en: [
      "GTM Ops and growth teams",
      "Agencies building custom lists",
      "Developers publishing scrapers (Actors)",
      "RevOps with repetitive data tasks",
      "Teams integrating with Clay",
    ],
  },
  keyFeatures: {
    sr: [
      "6.000+ gotovih Actors u Apify Store",
      "Custom scraperi (Node.js, Python, Playwright)",
      "Scheduling, monitoring i API",
      "Residential & datacenter proxy",
      "Dataset export (JSON, CSV, Excel)",
      "Apify Academy i code templates",
    ],
    en: [
      "6,000+ ready-made Actors in Apify Store",
      "Custom scrapers (Node.js, Python, Playwright)",
      "Scheduling, monitoring, and API",
      "Residential & datacenter proxies",
      "Dataset export (JSON, CSV, Excel)",
      "Apify Academy and code templates",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "$0 ($5 usage)", en: "$0 ($5 usage)" },
    },
    {
      label: { sr: "Naplata", en: "Billing" },
      value: { sr: "Pretplata + pay-as-you-go", en: "Subscription + pay-as-you-go" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "Free plan bez kartice", en: "Free plan, no card" },
    },
    {
      label: { sr: "Ocena", en: "Rating" },
      value: { sr: "4.7 / 5 (G2)", en: "4.7 / 5 (G2)" },
    },
  ],
  pricing: {
    startingPrice: { sr: "od $29 / mesec", en: "from $29 / month" },
    billing: {
      sr: "Uključena platform usage + dodatni CU, proxy, storage",
      en: "Included platform usage + extra CUs, proxies, storage",
    },
    trial: {
      sr: "Free plan ($5 usage/mes)",
      en: "Free plan ($5 usage/mo)",
    },
    plans: [
      {
        id: "free",
        name: { sr: "Free", en: "Free" },
        price: { sr: "$0", en: "$0" },
        billingNote: { sr: "$5 platform usage / mesec", en: "$5 platform usage / month" },
        highlights: {
          sr: [
            "Apify Store (ograničeno)",
            "Community support",
            "Bez kreditne kartice",
            "7 dana retention podataka",
            "Idealno za test",
          ],
          en: [
            "Apify Store (limited)",
            "Community support",
            "No credit card",
            "7-day data retention",
            "Great for testing",
          ],
        },
      },
      {
        id: "starter",
        name: { sr: "Starter", en: "Starter" },
        price: { sr: "$29 / mesec", en: "$29 / month" },
        billingNote: {
          sr: "~$26/mes godišnje · $29 prepaid usage",
          en: "~$26/mo annual · $29 prepaid usage",
        },
        highlights: {
          sr: [
            "Bronze Store discount",
            "Chat support",
            "8 GB RAM po Actor run",
            "API pristup",
            "Pay-as-you-go preko limita",
          ],
          en: [
            "Bronze Store discount",
            "Chat support",
            "8 GB RAM per Actor run",
            "API access",
            "Pay-as-you-go beyond included usage",
          ],
        },
      },
      {
        id: "scale",
        name: { sr: "Scale", en: "Scale" },
        price: { sr: "$199 / mesec", en: "$199 / month" },
        billingNote: {
          sr: "~$179/mes godišnje · $199 prepaid usage",
          en: "~$179/mo annual · $199 prepaid usage",
        },
        highlights: {
          sr: [
            "Silver Store discount",
            "Priority chat support",
            "128 GB RAM · 128 concurrent runs",
            "Jeftiniji proxy i CU",
            "Startup program (−30%)",
          ],
          en: [
            "Silver Store discount",
            "Priority chat support",
            "128 GB RAM · 128 concurrent runs",
            "Lower proxy & CU rates",
            "Startup program (30% off)",
          ],
        },
      },
      {
        id: "business",
        name: { sr: "Business", en: "Business" },
        price: { sr: "$999 / mesec", en: "$999 / month" },
        billingNote: {
          sr: "~$899/mes godišnje · $999 prepaid usage",
          en: "~$899/mo annual · $999 prepaid usage",
        },
        highlights: {
          sr: [
            "Gold Store discount",
            "Account manager",
            "256 GB RAM · 256 concurrent runs",
            "SLA opcije",
            "Enterprise-grade volume",
          ],
          en: [
            "Gold Store discount",
            "Account manager",
            "256 GB RAM · 256 concurrent runs",
            "SLA options",
            "Enterprise-grade volume",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "Uključena usage", en: "Included usage" },
        values: {
          free: { sr: "$5", en: "$5" },
          starter: { sr: "$29", en: "$29" },
          scale: { sr: "$199", en: "$199" },
          business: { sr: "$999", en: "$999" },
        },
      },
      {
        feature: { sr: "Compute unit (okvirno)", en: "Compute unit (approx.)" },
        values: {
          free: { sr: "$0.30/CU", en: "$0.30/CU" },
          starter: { sr: "$0.30/CU", en: "$0.30/CU" },
          scale: { sr: "$0.25/CU", en: "$0.25/CU" },
          business: { sr: "$0.20/CU", en: "$0.20/CU" },
        },
      },
      {
        feature: { sr: "Residential proxy", en: "Residential proxy" },
        values: {
          free: { sr: "$8/GB", en: "$8/GB" },
          starter: { sr: "$8/GB", en: "$8/GB" },
          scale: { sr: "$7.5/GB", en: "$7.5/GB" },
          business: { sr: "$7/GB", en: "$7/GB" },
        },
      },
      {
        feature: { sr: "Max RAM / run", en: "Max RAM / run" },
        values: {
          free: { sr: "Ograničeno", en: "Limited" },
          starter: { sr: "8 GB", en: "8 GB" },
          scale: { sr: "128 GB", en: "128 GB" },
          business: { sr: "256 GB", en: "256 GB" },
        },
      },
      {
        feature: { sr: "Support", en: "Support" },
        values: {
          free: { sr: "Community", en: "Community" },
          starter: { sr: "Chat", en: "Chat" },
          scale: { sr: "Priority chat", en: "Priority chat" },
          business: { sr: "Account mgr.", en: "Account mgr." },
        },
      },
      {
        feature: { sr: "Store discount", en: "Store discount" },
        values: {
          free: { sr: "—", en: "—" },
          starter: { sr: "Bronze", en: "Bronze" },
          scale: { sr: "Silver", en: "Silver" },
          business: { sr: "Gold", en: "Gold" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Srednja", en: "Intermediate" },
    description: {
      sr: "Izaberete Actor iz Store-a (npr. LinkedIn, Google Maps), podesite input, pokrenete run i exportujete dataset. Custom scraperi zahtevaju Node/Python znanje ili template iz Academy-ja. Integracija sa Clay/Zapier preko API-ja ili webhook-a.",
      en: "Pick an Actor from the Store (e.g. LinkedIn, Google Maps), set inputs, run, and export the dataset. Custom scrapers need Node/Python skills or Academy templates. Integrate with Clay/Zapier via API or webhooks.",
    },
  },
  pros: {
    sr: [
      "Ogroman katalog gotovih scrapera (Actors)",
      "Ne morate da hostujete infrastrukturu",
      "Skalira od prototipa do enterprise volumena",
      "Jaka dokumentacija i Apify Academy",
      "Odličan za Clay / automatizacije u GTM stack-u",
    ],
    en: [
      "Huge catalog of ready-made scrapers (Actors)",
      "No need to host scraping infrastructure",
      "Scales from prototype to enterprise volume",
      "Strong docs and Apify Academy",
      "Excellent for Clay / GTM stack automations",
    ],
  },
  cons: {
    sr: [
      "Pay-as-you-go može brzo narasti (proxy + CU)",
      "Zahteva razumevanje Actor input/output modela",
      "Nije zamena za verifikovane B2B email baze",
      "Scraping mora poštovati ToS sajtova i zakone",
      "Kompleksniji od „one-click“ lead findera",
    ],
    en: [
      "Pay-as-you-go can add up fast (proxies + CUs)",
      "Requires understanding Actor input/output model",
      "Not a replacement for verified B2B email databases",
      "Scraping must respect site ToS and regulations",
      "More complex than one-click lead finders",
    ],
  },
  alternatives: [
    {
      slug: "clay",
      name: "Clay",
      description: {
        sr: "Orkestrira Apify Actors u GTM tabeli.",
        en: "Orchestrates Apify Actors in a GTM table.",
      },
      startingPrice: { sr: "od $134", en: "from $134" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "apollo",
      name: "Apollo",
      description: {
        sr: "Gotova B2B baza — bez custom scrapinga.",
        en: "Ready-made B2B database — no custom scraping.",
      },
      startingPrice: { sr: "od $49", en: "from $49" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "fullenrich",
      name: "FullEnrich",
      description: {
        sr: "Enrichment email/telefon — nakon što imate listu.",
        en: "Email/phone enrichment — after you have a list.",
      },
      startingPrice: { sr: "od $29", en: "from $29" },
      trial: { sr: "50 kredita", en: "50 credits" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "instantly",
      name: "Instantly",
      description: {
        sr: "Cold email nakon što izvučete i obogatite leadove.",
        en: "Cold email once you extract and enrich leads.",
      },
      startingPrice: { sr: "od $37", en: "from $37" },
      trial: { sr: "Besplatan start", en: "Free start" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko košta Apify?", en: "How much does Apify cost?" },
      answer: {
        sr: "Free plan je $0 sa $5 mesečne platform usage. Starter $29/mes (uključuje $29 usage), Scale $199, Business $999. Prekoračenje usage-a, proxy saobraćaj i storage se naplaćuju dodatno (pay-as-you-go).",
        en: "The free plan is $0 with $5 monthly platform usage. Starter is $29/mo (includes $29 usage), Scale $199, Business $999. Excess usage, proxy traffic, and storage are billed additionally (pay-as-you-go).",
      },
    },
    {
      question: { sr: "Šta je Actor?", en: "What is an Actor?" },
      answer: {
        sr: "Actor je serverless program na Apify platformi koji skrejpuje sajt, crawla ili automatizuje browser. Možete koristiti gotove iz Store-a ili objaviti svoj.",
        en: "An Actor is a serverless program on Apify that scrapes a site, crawls, or automates a browser. Use ready-made ones from the Store or publish your own.",
      },
    },
    {
      question: { sr: "Da li Apify ima besplatan plan?", en: "Does Apify have a free plan?" },
      answer: {
        sr: "Da — $5 platform kredita mesečno, bez kartice. Dovoljno za testiranje manjih Actor run-ova i učenje platforme.",
        en: "Yes — $5 in platform credits per month, no card required. Enough to test smaller Actor runs and learn the platform.",
      },
    },
    {
      question: { sr: "Zašto izabrati Apify?", en: "Why choose Apify?" },
      answer: {
        sr: "Kada vam treba fresh web data sa sajtova gde nema gotove B2B baze — LinkedIn postovi, Google Maps, marketplace listingi, custom izvori — uz scheduling i API.",
        en: "When you need fresh web data from sites without a ready-made B2B database — LinkedIn posts, Google Maps, marketplace listings, custom sources — with scheduling and API.",
      },
    },
    {
      question: {
        sr: "Da li je legalno za sales prospecting?",
        en: "Is it legal for sales prospecting?",
      },
      answer: {
        sr: "Zavisi od sajta, jurisdikcije i načina korišćenja podataka. Uvek proverite Terms of Service, robots.txt i lokalne propise (GDPR). Koristite samo javno dostupne podatke u skladu sa pravilima.",
        en: "It depends on the site, jurisdiction, and how you use the data. Always check Terms of Service, robots.txt, and local rules (GDPR). Use only publicly available data in compliance with policies.",
      },
    },
    {
      question: { sr: "Da li Apify ima API?", en: "Does Apify have an API?" },
      answer: {
        sr: "Da — pun REST API za pokretanje, scheduling, monitoring Actor-a i upravljanje dataset-ima. Integracije sa Zapier, Make, Google Sheets, Clay i sl.",
        en: "Yes — full REST API to run, schedule, and monitor Actors and manage datasets. Integrations with Zapier, Make, Google Sheets, Clay, and more.",
      },
    },
    {
      question: {
        sr: "Kako se uklapa sa Clay-om?",
        en: "How does it fit with Clay?",
      },
      answer: {
        sr: "Clay često koristi Apify Actors kao izvor u waterfall kolonama — izvučete podatke u Apify, zatim obogatite i personalizujete u Clay tabeli pre exporta u outreach alat.",
        en: "Clay often uses Apify Actors as a source in waterfall columns — extract in Apify, then enrich and personalize in a Clay table before exporting to outreach tools.",
      },
    },
    {
      question: {
        sr: "Koje su alternative Apify-u?",
        en: "What are Apify alternatives?",
      },
      answer: {
        sr: "Često se poredi sa Bright Data, ScrapingBee, Octoparse, Import.io ili self-hosted Scrapy/Puppeteer. Apify se ističe Store-om, hostingom i GTM-friendly integracijama.",
        en: "Often compared to Bright Data, ScrapingBee, Octoparse, Import.io, or self-hosted Scrapy/Puppeteer. Apify stands out with its Store, hosting, and GTM-friendly integrations.",
      },
    },
  ],
  integrations: {
    sr: [
      "Clay",
      "Zapier",
      "Make",
      "Google Sheets",
      "HubSpot",
      "Slack",
      "REST API",
      "Webhooks",
      "GitHub",
    ],
    en: [
      "Clay",
      "Zapier",
      "Make",
      "Google Sheets",
      "HubSpot",
      "Slack",
      "REST API",
      "Webhooks",
      "GitHub",
    ],
  },
};
