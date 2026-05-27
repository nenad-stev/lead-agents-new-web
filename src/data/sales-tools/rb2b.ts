import type { SalesTool } from "@/types/sales-tool";

export const rb2bTool: SalesTool = {
  slug: "rb2b",
  name: "RB2B",
  logo: "/images/sales-tools/rb2b.png",
  tagline: {
    sr: "Identifikacija posetilaca sajta, ljudi i kompanije u realnom vremenu",
    en: "Website visitor identification, people and companies in real time",
  },
  categoryId: "prospecting",
  category: { sr: "Prospecting", en: "Prospecting" },
  categories: {
    sr: [
      "Visitor identification",
      "Intent signali",
      "Person-level ID (US)",
      "Hot Leads & Hot Pages",
      "Slack / Teams alerti",
      "CRM integracije",
    ],
    en: [
      "Visitor identification",
      "Intent signals",
      "Person-level ID (US)",
      "Hot Leads & Hot Pages",
      "Slack / Teams alerts",
      "CRM integrations",
    ],
  },
  websiteUrl: "https://www.rb2b.com/",
  recommended: true,
  rating: { g2: 4.5, g2Reviews: 85 },
  overview: {
    sr: "RB2B pretvara anonimne posete sajta u imenovane leadove: identifikuje 70-80% US saobraćaja na nivou osobe (ime, titula, LinkedIn, poslovni email) i šalje ih u Slack, Teams ili CRM u realnom vremenu.",
    en: "RB2B turns anonymous site visits into named leads: it identifies 70-80% of US traffic at the person level (name, title, LinkedIn, work email) and pushes them to Slack, Teams, or your CRM in real time.",
  },
  overviewExtended: {
    sr: "Instalacija je pixel u header sajta (~5 min). Hot Leads filtrira ICP posetioce; Hot Pages označava high-intent URL-ove (pricing, demo). Besplatan plan: 150 rezolucija mesečno; 7-dnevni Pro trial sa punim funkcijama. Person-level ID je fokus na SAD, globalno je company-level zbog GDPR.",
    en: "Setup is a pixel in your site header (~5 minutes). Hot Leads filters ICP visitors; Hot Pages tags high-intent URLs (pricing, demo). Free plan: 150 resolutions per month; 7-day Pro trial with full features. Person-level ID focuses on the US, globally it's company-level due to GDPR.",
  },
  idealFor: {
    sr: [
      "B2B SaaS sa inbound saobraćajem",
      "SDR timovi koji love warm signale",
      "ABM i named-account prodaja",
      "Marketing timovi (demand gen)",
      "Agencije sa više klijentskih sajtova",
    ],
    en: [
      "B2B SaaS with inbound traffic",
      "SDR teams chasing warm signals",
      "ABM and named-account sales",
      "Marketing / demand gen teams",
      "Agencies managing client sites",
    ],
  },
  keyFeatures: {
    sr: [
      "Person-level ID (SAD) + company-level globalno",
      "Push u Slack, Teams, HubSpot, Salesforce",
      "Hot Leads (ICP filter) i Hot Pages",
      "Firmografski filteri (veličina, industrija, geo)",
      "50+ integracija (Clay, Zapier, Instantly…)",
      "SOC 2 Type II · neograničeni korisnici",
    ],
    en: [
      "Person-level ID (US) + company-level globally",
      "Push to Slack, Teams, HubSpot, Salesforce",
      "Hot Leads (ICP filter) and Hot Pages",
      "Firmographic filters (size, industry, geo)",
      "50+ integrations (Clay, Zapier, Instantly…)",
      "SOC 2 Type II · unlimited users",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "$0 (150 rez./mes)", en: "$0 (150 res./mo)" },
    },
    {
      label: { sr: "Naplata", en: "Billing" },
      value: { sr: "Po rezoluciji (kredit)", en: "Per resolution (credit)" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "7 dana Pro + free plan", en: "7-day Pro + free plan" },
    },
    {
      label: { sr: "Ocena", en: "Rating" },
      value: { sr: "~4.5 / 5", en: "~4.5 / 5" },
    },
  ],
  pricing: {
    startingPrice: { sr: "od $0 / mesec", en: "from $0 / month" },
    billing: {
      sr: "Rezolucije mesečno · 1 rezolucija = 1 identifikovan kontakt",
      en: "Monthly resolutions · 1 resolution = 1 identified contact",
    },
    trial: {
      sr: "7 dana pun Pro + 150 rez. free plan",
      en: "7-day full Pro trial + 150 res. free plan",
    },
    plans: [
      {
        id: "free",
        name: { sr: "Free", en: "Free" },
        price: { sr: "$0", en: "$0" },
        billingNote: { sr: "150 rezolucija / mesec", en: "150 resolutions / month" },
        highlights: {
          sr: [
            "Company-level ID (globalno)",
            "Push na Slack",
            "LinkedIn profili (posle trial-a ograničeno)",
            "Neograničeni korisnici",
            "Bez kartice",
          ],
          en: [
            "Company-level ID (global)",
            "Push to Slack",
            "LinkedIn profiles (limited after trial)",
            "Unlimited users",
            "No card required",
          ],
        },
      },
      {
        id: "starter",
        name: { sr: "Starter", en: "Starter" },
        price: { sr: "$79 / mesec", en: "$79 / month" },
        billingNote: { sr: "300 rezolucija / mesec", en: "300 resolutions / month" },
        highlights: {
          sr: [
            "Person-level ID (SAD)",
            "LinkedIn URL u Slack",
            "Hot Leads & Hot Pages",
            "Osnovni filteri",
            "Bez poslovnih emailova na ovom tier-u",
          ],
          en: [
            "Person-level ID (US)",
            "LinkedIn URLs to Slack",
            "Hot Leads & Hot Pages",
            "Core filters",
            "No business emails on this tier",
          ],
        },
      },
      {
        id: "pro",
        name: { sr: "Pro", en: "Pro" },
        price: { sr: "od $149 / mesec", en: "from $149 / month" },
        billingNote: { sr: "600+ rezolucija / mesec", en: "600+ resolutions / month" },
        highlights: {
          sr: [
            "Poslovni email adrese",
            "Sve integracije (HubSpot, Zapier…)",
            "Pageview history & session recap",
            "Traffic insights",
            "Overage po rezoluciji",
          ],
          en: [
            "Business email addresses",
            "All integrations (HubSpot, Zapier…)",
            "Pageview history & session recap",
            "Traffic insights",
            "Per-resolution overage",
          ],
        },
      },
      {
        id: "pro_plus",
        name: { sr: "Pro+", en: "Pro+" },
        price: { sr: "od $199 / mesec", en: "from $199 / month" },
        billingNote: {
          sr: "Premium resolution · veći volumen",
          en: "Premium resolution · higher volume",
        },
        highlights: {
          sr: [
            "Viša stopa person-level pokrivenosti",
            "Identity graph waterfall",
            "Veći mesečni paket rezolucija",
            "Prioritet za high-traffic sajtove",
            "Napredna segmentacija",
          ],
          en: [
            "Higher person-level match rate",
            "Identity graph waterfall",
            "Larger monthly resolution bundles",
            "Priority for high-traffic sites",
            "Advanced segmentation",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "Mesečne rezolucije", en: "Monthly resolutions" },
        values: {
          free: { sr: "150", en: "150" },
          starter: { sr: "300", en: "300" },
          pro: { sr: "600+", en: "600+" },
          pro_plus: { sr: "Skalabilno", en: "Scalable" },
        },
      },
      {
        feature: { sr: "Person-level ID", en: "Person-level ID" },
        values: {
          free: { sr: "Ne (company)", en: "No (company)" },
          starter: { sr: "Da (US)", en: "Yes (US)" },
          pro: { sr: "Da (US)", en: "Yes (US)" },
          pro_plus: { sr: "Premium (US)", en: "Premium (US)" },
        },
      },
      {
        feature: { sr: "Poslovni email", en: "Work email" },
        values: {
          free: { sr: "Ne", en: "No" },
          starter: { sr: "Ne", en: "No" },
          pro: { sr: "Da", en: "Yes" },
          pro_plus: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "CRM / Zapier", en: "CRM / Zapier" },
        values: {
          free: { sr: "Slack", en: "Slack" },
          starter: { sr: "Slack", en: "Slack" },
          pro: { sr: "Sve", en: "All" },
          pro_plus: { sr: "Sve", en: "All" },
        },
      },
      {
        feature: { sr: "Hot Pages", en: "Hot Pages" },
        values: {
          free: { sr: "Ograničeno", en: "Limited" },
          starter: { sr: "Da", en: "Yes" },
          pro: { sr: "Da", en: "Yes" },
          pro_plus: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Korisnici", en: "Users" },
        values: {
          free: { sr: "Neograničeno", en: "Unlimited" },
          starter: { sr: "Neograničeno", en: "Unlimited" },
          pro: { sr: "Neograničeno", en: "Unlimited" },
          pro_plus: { sr: "Neograničeno", en: "Unlimited" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Niska", en: "Low" },
    description: {
      sr: "Kopirate pixel u <head> sajta, povežete Slack ili Teams, definišete Hot Pages i ICP filtere. Prvi leadovi stižu za nekoliko minuta. Za CRM workflow dodajete HubSpot/Salesforce na Pro planu.",
      en: "Paste the pixel in your site <head>, connect Slack or Teams, define Hot Pages and ICP filters. First leads arrive within minutes. Add HubSpot/Salesforce workflows on the Pro plan.",
    },
  },
  pros: {
    sr: [
      "Jedan od najbržih načina da ulovite inbound intent",
      "Person-level podaci za SAD (ne samo firma)",
      "Real-time alerti u Slack, prodavac reaguje odmah",
      "Setup za ~5 minuta",
      "Neograničeni korisnici u workspace-u",
    ],
    en: [
      "One of the fastest ways to capture inbound intent",
      "Person-level data for the US (not just company)",
      "Real-time Slack alerts, reps act immediately",
      "~5 minute setup",
      "Unlimited users per workspace",
    ],
  },
  cons: {
    sr: [
      "Person-level ID prvenstveno za US tržište",
      "Naplata po rezoluciji, visok saobraćaj = veći trošak",
      "Nije zamena za cold outbound ili enrichment alate",
      "Starter nema poslovne emailove ni pun CRM sync",
      "Za EU person-level ID ograničen zbog compliance-a",
    ],
    en: [
      "Person-level ID is primarily for the US market",
      "Per-resolution billing, high traffic increases cost",
      "Not a replacement for cold outbound or enrichment tools",
      "Starter lacks work emails and full CRM sync",
      "EU person-level ID is limited for compliance reasons",
    ],
  },
  alternatives: [
    {
      slug: "apollo",
      name: "Apollo",
      description: {
        sr: "Baza + outreach, drugačiji use case od visitor ID.",
        en: "Database plus outreach, different use case than visitor ID.",
      },
      startingPrice: { sr: "od $49", en: "from $49" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "clay",
      name: "Clay",
      description: {
        sr: "Automatizujte RB2B leadove u GTM tabeli.",
        en: "Automate RB2B leads in a GTM table.",
      },
      startingPrice: { sr: "od $134", en: "from $134" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "fullenrich",
      name: "FullEnrich",
      description: {
        sr: "Obogaćivanje kontakata, nakon što znate ko je posetilac.",
        en: "Contact enrichment, once you know who visited.",
      },
      startingPrice: { sr: "od $29", en: "from $29" },
      trial: { sr: "50 kredita", en: "50 credits" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "attio",
      name: "Attio",
      description: {
        sr: "CRM gde smestate identifikovane posetioce.",
        en: "CRM to store identified visitors.",
      },
      startingPrice: { sr: "od $29", en: "from $29" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "CRM", en: "CRM" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko košta RB2B?", en: "How much does RB2B cost?" },
      answer: {
        sr: "Free plan je $0 sa 150 rezolucija mesečno. Starter $79/mes (300 rez., person-level US). Pro od $149/mes (600+ rez., email + integracije). Pro+ od $199/mes za veći volumen i premium resolution.",
        en: "The free plan is $0 with 150 resolutions per month. Starter is $79/mo (300 res., US person-level). Pro from $149/mo (600+ res., email + integrations). Pro+ from $199/mo for higher volume and premium resolution.",
      },
    },
    {
      question: { sr: "Šta je rezolucija?", en: "What is a resolution?" },
      answer: {
        sr: "Jedna rezolucija = jedan jedinstveni identifikovan posetilac (osoba ili kompanija) koji vam RB2B isporuči. Dupli poseti istog kontakta u istom periodu ne troše dodatne rezolucije na isti način.",
        en: "One resolution = one unique identified visitor (person or company) delivered by RB2B. Repeat visits from the same contact are handled without double-charging the same way.",
      },
    },
    {
      question: { sr: "Da li RB2B ima besplatan plan?", en: "Does RB2B have a free plan?" },
      answer: {
        sr: "Da - 150 mesečnih rezolucija bez kartice, plus 7-dnevni trial sa punim Pro funkcijama (LinkedIn, email, integracije).",
        en: "Yes - 150 monthly resolutions with no card, plus a 7-day trial with full Pro features (LinkedIn, email, integrations).",
      },
    },
    {
      question: { sr: "Kako se RB2B postavlja?", en: "How do you set up RB2B?" },
      answer: {
        sr: "Dodate JavaScript pixel u header sajta, povežete Slack/Teams, podesite Hot Pages (npr. /pricing) i ICP filtere. Većina timova vidi prve leadove u roku od nekoliko minuta.",
        en: "Add the JavaScript pixel to your site header, connect Slack/Teams, configure Hot Pages (e.g. /pricing) and ICP filters. Most teams see first leads within minutes.",
      },
    },
    {
      question: { sr: "Zašto izabrati RB2B?", en: "Why choose RB2B?" },
      answer: {
        sr: "Kada imate značajan inbound saobraćaj i želite da prodaja zna ko je na sajtu pre nego što popuni formu, posebno decision-maker-i na pricing ili demo stranicama.",
        en: "When you have meaningful inbound traffic and want sales to know who is on the site before they fill out a form, especially decision-makers on pricing or demo pages.",
      },
    },
    {
      question: {
        sr: "Da li radi van SAD?",
        en: "Does it work outside the US?",
      },
      answer: {
        sr: "Person-level identifikacija je fokusirana na SAD (70-80% pokrivenosti). Globalno možete dobijati company-level ID. Za EU person-level podatke važe ograničenja zbog GDPR.",
        en: "Person-level identification focuses on the US (70-80% coverage). Globally you can get company-level ID. EU person-level data is limited due to GDPR.",
      },
    },
    {
      question: { sr: "Koje integracije podržava?", en: "What integrations does it support?" },
      answer: {
        sr: "Slack, Microsoft Teams, HubSpot, Salesforce, Clay, Zapier, Instantly, HeyReach i 50+ alata. Pro plan uključuje poslovne emailove i pun CRM sync.",
        en: "Slack, Microsoft Teams, HubSpot, Salesforce, Clay, Zapier, Instantly, HeyReach, and 50+ tools. The Pro plan includes work emails and full CRM sync.",
      },
    },
    {
      question: {
        sr: "Koje su alternative RB2B-u?",
        en: "What are RB2B alternatives?",
      },
      answer: {
        sr: "Često se poredi sa Demandbase, Clearbit, Leadfeeder i Apollo visitor features. RB2B se ističe person-level ID-om u realnom vremenu i brzim Slack alertima.",
        en: "Often compared to Demandbase, Clearbit, Leadfeeder, and Apollo visitor features. RB2B stands out with real-time person-level ID and fast Slack alerts.",
      },
    },
  ],
  integrations: {
    sr: [
      "Slack",
      "Microsoft Teams",
      "HubSpot",
      "Salesforce",
      "Clay",
      "Zapier",
      "Instantly",
      "HeyReach",
      "Apollo",
      "Webhooks",
    ],
    en: [
      "Slack",
      "Microsoft Teams",
      "HubSpot",
      "Salesforce",
      "Clay",
      "Zapier",
      "Instantly",
      "HeyReach",
      "Apollo",
      "Webhooks",
    ],
  },
};
