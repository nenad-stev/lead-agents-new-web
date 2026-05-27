import type { SalesTool } from "@/types/sales-tool";

export const odooTool: SalesTool = {
  slug: "odoo",
  name: "Odoo",
  logo: "/images/sales-tools/odoo.png",
  tagline: {
    sr: "All-in-one ERP - CRM, prodaja, inventar i računovodstvo u jednoj platformi",
    en: "All-in-one ERP - CRM, sales, inventory, and accounting in one platform",
  },
  categoryId: "crm",
  category: { sr: "CRM", en: "CRM" },
  categories: {
    sr: [
      "CRM & pipeline",
      "Prodaja & ponude",
      "Inventar & skladište",
      "Računovodstvo",
      "E-commerce & website",
      "Odoo Studio (Custom)",
    ],
    en: [
      "CRM & pipeline",
      "Sales & quotations",
      "Inventory & warehouse",
      "Accounting",
      "E-commerce & website",
      "Odoo Studio (Custom)",
    ],
  },
  websiteUrl: "https://www.odoo.com/",
  recommended: true,
  rating: { g2: 4.3, g2Reviews: 800 },
  overview: {
    sr: "Odoo je open-source poslovna platforma sa desetinama aplikacija: CRM, prodaja, nabavka, inventar, HR, website, jedna baza podataka, jedan UI, bez vendor lock-in-a na Community izdanju.",
    en: "Odoo is an open-source business platform with dozens of apps: CRM, sales, purchasing, inventory, HR, website, one database, one UI, no vendor lock-in on the Community edition.",
  },
  overviewExtended: {
    sr: "Enterprise **Standard ~$25/user/mes** (godišnje), svi app-ovi, Odoo Online hosting. **Custom ~$37/user**, Studio, multi-company, API, Odoo.sh. **One App Free**, jedna aplikacija (npr. samo CRM) besplatno. Community 100% free (self-host). Nije cold outreach alat, koristite kao operativni sistem firme uz Instantly za outbound.",
    en: "Enterprise **Standard ~$25/user/mo** (annual), all apps, Odoo Online hosting. **Custom ~$37/user**, Studio, multi-company, API, Odoo.sh. **One App Free**, one app (e.g. CRM only) free. Community 100% free (self-host). Not a cold outreach tool, use as your company OS alongside Instantly for outbound.",
  },
  idealFor: {
    sr: [
      "SMB i mid-market koji žele jedan sistem",
      "Proizvodnja + prodaja + inventar",
      "E-commerce sa backend-om",
      "Timovi koji žele jeftiniji SAP/NetSuite",
      "Kompanije sa lokalnim partnerima za implementaciju",
    ],
    en: [
      "SMB and mid-market wanting one system",
      "Manufacturing + sales + inventory",
      "E-commerce with backend ops",
      "Teams wanting cheaper SAP/NetSuite",
      "Companies with local implementation partners",
    ],
  },
  keyFeatures: {
    sr: [
      "40+ integrisanih aplikacija",
      "UI < 90ms response",
      "Community (LGPL) + Enterprise",
      "Odoo Studio, no-code customizacija",
      "Global partner mreža",
      "External API (Custom+)",
    ],
    en: [
      "40+ integrated applications",
      "UI < 90ms response",
      "Community (LGPL) + Enterprise",
      "Odoo Studio, no-code customization",
      "Global partner network",
      "External API (Custom+)",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "$0 (1 app)", en: "$0 (1 app)" },
    },
    {
      label: { sr: "Standard", en: "Standard" },
      value: { sr: "~$25 / user", en: "~$25 / user" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "Besplatan trial", en: "Free trial" },
    },
    {
      label: { sr: "Open source", en: "Open source" },
      value: { sr: "Community", en: "Community" },
    },
  ],
  pricing: {
    startingPrice: { sr: "od $0 (One App Free)", en: "from $0 (One App Free)" },
    billing: {
      sr: "Po internal user-u · godišnje",
      en: "Per internal user · annual",
    },
    trial: {
      sr: "Trial · bez kartice",
      en: "Trial · no card required",
    },
    plans: [
      {
        id: "one-app",
        name: { sr: "One App Free", en: "One App Free" },
        price: { sr: "$0", en: "$0" },
        billingNote: {
          sr: "Jedna app · unlimited users",
          en: "One app · unlimited users",
        },
        highlights: {
          sr: [
            "Samo jedna Odoo aplikacija",
            "Unlimited internal users",
            "Odoo Online hosting",
            "Idealno za čist CRM start",
            "Bez Studio / multi-company",
            "Upgrade kad treba više modula",
          ],
          en: [
            "Single Odoo application only",
            "Unlimited internal users",
            "Odoo Online hosting",
            "Ideal for CRM-only start",
            "No Studio / multi-company",
            "Upgrade when more modules needed",
          ],
        },
      },
      {
        id: "standard",
        name: { sr: "Standard", en: "Standard" },
        price: { sr: "~$25 / user / mes", en: "~$25 / user / mo" },
        billingNote: {
          sr: "Godišnje · svi app-ovi",
          en: "Annual · all apps",
        },
        highlights: {
          sr: [
            "Svi Odoo app-ovi uključeni",
            "Odoo Online hosting",
            "Unlimited support",
            "CRM + Sales + Inventory + Accounting",
            "Marketing & website moduli",
            "Bez skrivenih troškova po modulu",
          ],
          en: [
            "All Odoo apps included",
            "Odoo Online hosting",
            "Unlimited support",
            "CRM + Sales + Inventory + Accounting",
            "Marketing & website modules",
            "No hidden per-module fees",
          ],
        },
      },
      {
        id: "custom",
        name: { sr: "Custom", en: "Custom" },
        price: { sr: "~$37 / user / mes", en: "~$37 / user / mo" },
        billingNote: {
          sr: "Studio · multi-company · API",
          en: "Studio · multi-company · API",
        },
        highlights: {
          sr: [
            "Odoo Studio (no-code)",
            "Multi-company & multi-DB",
            "External API",
            "Odoo.sh / on-premise opcija",
            "Custom development",
            "Third-party app marketplace",
          ],
          en: [
            "Odoo Studio (no-code)",
            "Multi-company & multi-DB",
            "External API",
            "Odoo.sh / on-premise option",
            "Custom development",
            "Third-party app marketplace",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "Svi app-ovi", en: "All apps" },
        values: {
          "one-app": { sr: "1 app", en: "1 app" },
          standard: { sr: "Da", en: "Yes" },
          custom: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Odoo Studio", en: "Odoo Studio" },
        values: {
          "one-app": { sr: "Ne", en: "No" },
          standard: { sr: "Ne", en: "No" },
          custom: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Multi-company", en: "Multi-company" },
        values: {
          "one-app": { sr: "Ne", en: "No" },
          standard: { sr: "Ne", en: "No" },
          custom: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "External API", en: "External API" },
        values: {
          "one-app": { sr: "Ne", en: "No" },
          standard: { sr: "Ne", en: "No" },
          custom: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Hosting", en: "Hosting" },
        values: {
          "one-app": { sr: "Online", en: "Online" },
          standard: { sr: "Online", en: "Online" },
          custom: { sr: "Online / sh / on-prem", en: "Online / sh / on-prem" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Napredni", en: "Advanced" },
    description: {
      sr: "Trial ili One App Free → aktivirajte CRM + Sales → import kontakata → podesite pipeline → partner za Custom ako treba inventar/računovodstvo. Implementacija 2-8 nedelja zavisno od scope-a. Community za dev timove sa self-host iskustvom.",
      en: "Trial or One App Free → enable CRM + Sales → import contacts → set pipeline → partner for Custom if inventory/accounting needed. Implementation 2-8 weeks depending on scope. Community for dev teams with self-host experience.",
    },
  },
  pros: {
    sr: [
      "Jedna cena, svi moduli",
      "Open-source Community opcija",
      "Brz UI i integracija modula",
      "Velika globalna zajednica",
      "Jeftiniji od SAP/NetSuite TCO",
    ],
    en: [
      "One price, all modules",
      "Open-source Community option",
      "Fast UI and module integration",
      "Large global community",
      "Lower TCO than SAP/NetSuite",
    ],
  },
  cons: {
    sr: [
      "Implementacija zahteva planiranje",
      "Nije specijalizovan cold email alat",
      "Custom plan za Studio/API",
      "Cena varira po regionu (geo pricing)",
      "Partner troškovi dodatni",
    ],
    en: [
      "Implementation needs planning",
      "Not a specialized cold email tool",
      "Custom plan for Studio/API",
      "Price varies by region (geo pricing)",
      "Partner costs on top",
    ],
  },
  alternatives: [
    {
      slug: "hubspot",
      name: "HubSpot",
      description: {
        sr: "Marketing-first CRM SaaS.",
        en: "Marketing-first CRM SaaS.",
      },
      startingPrice: { sr: "od $0", en: "from $0" },
      trial: { sr: "Free CRM", en: "Free CRM" },
      category: { sr: "CRM", en: "CRM" },
    },
    {
      slug: "nocrm",
      name: "noCRM",
      description: {
        sr: "Lagani sales CRM, bez ERP-a.",
        en: "Light sales CRM, no ERP.",
      },
      startingPrice: { sr: "od €11", en: "from €11" },
      trial: { sr: "15 dana", en: "15 days" },
      category: { sr: "CRM", en: "CRM" },
    },
    {
      slug: "attio",
      name: "Attio",
      description: {
        sr: "Modern B2B CRM.",
        en: "Modern B2B CRM.",
      },
      startingPrice: { sr: "od $36", en: "from $36" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "CRM", en: "CRM" },
    },
    {
      slug: "instantly",
      name: "Instantly",
      description: {
        sr: "Outbound, komplement Odoo CRM-u.",
        en: "Outbound, complements Odoo CRM.",
      },
      startingPrice: { sr: "od $37", en: "from $37" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko košta Odoo?", en: "How much does Odoo cost?" },
      answer: {
        sr: "One App Free $0. Standard ~$24.90/user/mes (godišnje, svi app-ovi). Custom ~$37.40/user. Community besplatno (self-host). Cene zavise od regiona.",
        en: "One App Free $0. Standard ~$24.90/user/mo (annual, all apps). Custom ~$37.40/user. Community free (self-host). Prices vary by region.",
      },
    },
    {
      question: { sr: "Da li je Odoo besplatan?", en: "Is Odoo free?" },
      answer: {
        sr: "Community edition je 100% free open-source. Enterprise ima paid planove; One App Free dozvoljava jednu aplikaciju besplatno na Odoo Online.",
        en: "Community edition is 100% free open-source. Enterprise has paid plans; One App Free allows one app free on Odoo Online.",
      },
    },
    {
      question: { sr: "Zašto izabrati Odoo?", en: "Why choose Odoo?" },
      answer: {
        sr: "Kada vam treba CRM + operacije (inventar, računi, HR) u jednom sistemu umesto 5 odvojenih SaaS pretplata.",
        en: "When you need CRM + operations (inventory, accounting, HR) in one system instead of five separate SaaS subscriptions.",
      },
    },
    {
      question: { sr: "Odoo vs HubSpot?", en: "Odoo vs HubSpot?" },
      answer: {
        sr: "HubSpot je GTM/marketing SaaS. Odoo je ERP sa CRM modulom, širi scope, više implementacije, jeftiniji all-in-one za operacije.",
        en: "HubSpot is GTM/marketing SaaS. Odoo is ERP with CRM, broader scope, more implementation, cheaper all-in-one for operations.",
      },
    },
    {
      question: { sr: "Da li ima API?", en: "Does it have an API?" },
      answer: {
        sr: "Da - External API na Custom planu; XML-RPC/JSON-RPC na Community i Enterprise za integracije.",
        en: "Yes - External API on Custom plan; XML-RPC/JSON-RPC on Community and Enterprise for integrations.",
      },
    },
  ],
  integrations: {
    sr: [
      "Zapier",
      "Google Workspace",
      "Microsoft 365",
      "Stripe",
      "PayPal",
      "Amazon",
      "External API",
    ],
    en: [
      "Zapier",
      "Google Workspace",
      "Microsoft 365",
      "Stripe",
      "PayPal",
      "Amazon",
      "External API",
    ],
  },
};
