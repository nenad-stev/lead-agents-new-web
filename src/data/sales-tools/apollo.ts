import type { SalesTool } from "@/types/sales-tool";

export const apolloTool: SalesTool = {
  slug: "apollo",
  name: "Apollo",
  logo: "/images/sales-tools/apollo.png",
  tagline: {
    sr: "Sales intelligence i outreach na jednoj platformi",
    en: "Sales intelligence and outreach in one platform",
  },
  categoryId: "prospecting",
  category: { sr: "Prospecting", en: "Prospecting" },
  categories: {
    sr: ["Baza kontakata", "Email finder", "Sales engagement", "Data enrichment"],
    en: ["Contact database", "Email finder", "Sales engagement", "Data enrichment"],
  },
  websiteUrl: "https://www.apollo.io",
  recommended: true,
  rating: { g2: 4.8, g2Reviews: 4139 },
  overview: {
    sr: "Apollo je Sales Intelligence i Sales Engagement platforma sa bazom od miliona verifikovanih kontakata i kompanija. Omogućava pretragu, filtriranje i outreach na skali.",
    en: "Apollo is a Sales Intelligence and Sales Engagement platform with a database of millions of verified contacts and companies. It enables search, filtering, and outreach at scale.",
  },
  overviewExtended: {
    sr: "Pronađite email adrese i telefone, obogatite podatke i pokrenite sekvence direktno iz platforme. Free plan uključuje 50 email adresa mesečno.",
    en: "Find emails and phone numbers, enrich data, and run sequences directly from the platform. The free plan includes 50 email credits per month.",
  },
  idealFor: {
    sr: ["SDR timovi", "Agencije", "B2B prodaja", "Growth timovi"],
    en: ["SDR teams", "Agencies", "B2B sales", "Growth teams"],
  },
  keyFeatures: {
    sr: [
      "Baza B2B kontakata i kompanija",
      "Email i phone finder",
      "Sales engagement sekvence",
      "Data enrichment",
      "Integracije sa CRM-om",
    ],
    en: [
      "B2B contact and company database",
      "Email and phone finder",
      "Sales engagement sequences",
      "Data enrichment",
      "CRM integrations",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "$49 / mesec", en: "$49 / month" },
    },
    {
      label: { sr: "Free plan", en: "Free plan" },
      value: { sr: "50 emailova / mesec", en: "50 emails / month" },
    },
    {
      label: { sr: "G2 ocena", en: "G2 rating" },
      value: { sr: "4.8 / 5", en: "4.8 / 5" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "14 dana", en: "14 days" },
    },
  ],
  pricing: {
    startingPrice: { sr: "$49 / mesec", en: "$49 / month" },
    billing: { sr: "Po korisniku ili kreditima", en: "Per user or credits" },
    trial: { sr: "14 dana", en: "14 days" },
    plans: [
      {
        id: "free",
        name: { sr: "Free", en: "Free" },
        price: { sr: "$0", en: "$0" },
        billingNote: { sr: "Ograničeni krediti", en: "Limited credits" },
        highlights: {
          sr: ["50 emailova mesečno", "Osnovna pretraga", "Chrome ekstenzija"],
          en: ["50 emails per month", "Basic search", "Chrome extension"],
        },
      },
      {
        id: "basic",
        name: { sr: "Basic", en: "Basic" },
        price: { sr: "$49 / mesec", en: "$49 / month" },
        billingNote: { sr: "Po korisniku", en: "Per user" },
        highlights: {
          sr: ["Više kredita", "Email sekvence", "Integracije"],
          en: ["More credits", "Email sequences", "Integrations"],
        },
      },
      {
        id: "professional",
        name: { sr: "Professional", en: "Professional" },
        price: { sr: "$99 / mesec", en: "$99 / month" },
        billingNote: { sr: "Po korisniku", en: "Per user" },
        highlights: {
          sr: ["10.000+ emailova", "Napredni filteri", "A/B testovi"],
          en: ["10,000+ emails", "Advanced filters", "A/B testing"],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "Email krediti", en: "Email credits" },
        values: {
          free: { sr: "50 / mesec", en: "50 / month" },
          basic: { sr: "Ograničeno", en: "Limited" },
          professional: { sr: "10.000+", en: "10,000+" },
        },
      },
      {
        feature: { sr: "Sales sekvence", en: "Sales sequences" },
        values: {
          free: { sr: "Ne", en: "No" },
          basic: { sr: "Da", en: "Yes" },
          professional: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "CRM integracije", en: "CRM integrations" },
        values: {
          free: { sr: "Ograničeno", en: "Limited" },
          basic: { sr: "Da", en: "Yes" },
          professional: { sr: "Da", en: "Yes" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Srednja", en: "Medium" },
    description: {
      sr: "Brz onboarding — povežete email, definišete ICP i pokrećete prvu listu za nekoliko sati.",
      en: "Fast onboarding — connect email, define ICP, and launch your first list within hours.",
    },
  },
  pros: {
    sr: ["Ogromna baza podataka", "Sve-u-jednom za prospecting", "Dobar free tier"],
    en: ["Huge database", "All-in-one prospecting", "Solid free tier"],
  },
  cons: {
    sr: ["Krediti se brzo troše", "Podaci ponekad zastareli", "Cena raste sa timom"],
    en: ["Credits burn quickly", "Data sometimes stale", "Cost scales with team"],
  },
  alternatives: [
    {
      slug: "attio",
      name: "Attio",
      description: { sr: "Moderni AI CRM.", en: "Modern AI CRM." },
      startingPrice: { sr: "od $29", en: "from $29" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "CRM", en: "CRM" },
    },
    {
      slug: "lemlist",
      name: "Lemlist",
      description: { sr: "Personalizovan cold email.", en: "Personalized cold email." },
      startingPrice: { sr: "od $59", en: "from $59" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko emailova mogu naći besplatno?", en: "How many free emails?" },
      answer: {
        sr: "Free plan uključuje 50 verifikovanih email adresa mesečno.",
        en: "The free plan includes 50 verified email addresses per month.",
      },
    },
  ],
  integrations: {
    sr: ["Salesforce", "HubSpot", "Pipedrive", "Outreach", "Zapier"],
    en: ["Salesforce", "HubSpot", "Pipedrive", "Outreach", "Zapier"],
  },
};
