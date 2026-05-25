import type { SalesTool } from "@/types/sales-tool";

export const expandiTool: SalesTool = {
  slug: "expandi",
  name: "Expandi",
  logo: "/images/sales-tools/expandi.png",
  tagline: {
    sr: "LinkedIn automatizacija — cloud, warm-up i multichannel sekvence",
    en: "LinkedIn automation — cloud, warm-up, and multichannel sequences",
  },
  categoryId: "linkedin-outreach",
  category: { sr: "LinkedIn outreach", en: "LinkedIn outreach" },
  categories: {
    sr: [
      "LinkedIn automatizacija",
      "Multichannel (email)",
      "Smart limits & warm-up",
      "Lead scraping",
      "Campaign prioritization",
      "Agency whitelabel",
    ],
    en: [
      "LinkedIn automation",
      "Multichannel (email)",
      "Smart limits & warm-up",
      "Lead scraping",
      "Campaign prioritization",
      "Agency whitelabel",
    ],
  },
  websiteUrl: "https://expandi.io/",
  recommended: true,
  rating: { g2: 4.6, g2Reviews: 450 },
  overview: {
    sr: "Expandi je cloud LinkedIn outreach alat: automatizujete connect, poruke, InMail i event invite — uz dedicated IP po zemlji, profile warm-up i smart limite da smanjite rizik ban-a. Multichannel sekvence uključuju i email follow-up.",
    en: "Expandi is a cloud LinkedIn outreach tool: automate connects, messages, InMail, and event invites — with a dedicated country-based IP, profile warm-up, and smart limits to reduce ban risk. Multichannel sequences include email follow-up too.",
  },
  overviewExtended: {
    sr: "Business plan **$99/mes po LinkedIn nalogu** (godišnje ~$79). 7-dnevni trial sa svim funkcijama, bez naplate do kraja evaluacije. Za 10+ naloga — Agency (whitelabel, role, client reports). Nije baza leadova kao Apollo — fokus je sigurna LinkedIn automatizacija + scraping audience-a.",
    en: "Business plan **$99/mo per LinkedIn account** (annual ~$79). 7-day trial with all features, no charge until evaluation ends. For 10+ accounts — Agency (whitelabel, roles, client reports). Not a lead database like Apollo — focused on safe LinkedIn automation plus audience scraping.",
  },
  idealFor: {
    sr: [
      "SDR i sales timovi na LinkedIn-u",
      "Lead gen agencije",
      "Recruiteri i fundraising timovi",
      "Growth hackeri sa više kampanja",
      "Timovi koji žele email + LinkedIn u jednoj sekvenci",
    ],
    en: [
      "SDR and sales teams on LinkedIn",
      "Lead gen agencies",
      "Recruiters and fundraising teams",
      "Growth hackers running multiple campaigns",
      "Teams wanting email + LinkedIn in one sequence",
    ],
  },
  keyFeatures: {
    sr: [
      "10+ tipova kampanja (Connector, Mobile…)",
      "7+ metoda za audience scraping",
      "Auto warm-up & smart limit ranges",
      "Multichannel sequence builder (If/Action)",
      "GIF & image personalizacija",
      "Centralizovan inbox i analytics",
    ],
    en: [
      "10+ campaign types (Connector, Mobile…)",
      "7+ audience scraping methods",
      "Auto warm-up & smart limit ranges",
      "Multichannel sequence builder (If/Action)",
      "GIF & image personalization",
      "Centralized inbox and analytics",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "$99 / seat / mes", en: "$99 / seat / mo" },
    },
    {
      label: { sr: "Naplata", en: "Billing" },
      value: { sr: "Po LinkedIn nalogu", en: "Per LinkedIn account" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "7 dana · puna platforma", en: "7 days · full platform" },
    },
    {
      label: { sr: "Godišnje", en: "Annual" },
      value: { sr: "-20% (~$79/mes)", en: "-20% (~$79/mo)" },
    },
  ],
  pricing: {
    startingPrice: { sr: "od $99 / nalog / mes", en: "from $99 / account / mo" },
    billing: {
      sr: "Po LinkedIn seat-u · godišnje -20%",
      en: "Per LinkedIn seat · 20% off annual",
    },
    trial: {
      sr: "7 dana — sve funkcije, bez naplate na startu",
      en: "7 days — all features, not charged at signup",
    },
    plans: [
      {
        id: "business",
        name: { sr: "Business", en: "Business" },
        price: { sr: "$99 / mes", en: "$99 / mo" },
        billingNote: {
          sr: "~$79/mes godišnje · po LinkedIn nalogu",
          en: "~$79/mo annual · per LinkedIn account",
        },
        highlights: {
          sr: [
            "Cloud + dedicated country IP",
            "Profile auto warm-up",
            "Smart limit ranges",
            "Neograničene kampanje",
            "Multichannel (LinkedIn + email)",
            "CRM integracije",
          ],
          en: [
            "Cloud + dedicated country IP",
            "Profile auto warm-up",
            "Smart limit ranges",
            "Unlimited campaigns",
            "Multichannel (LinkedIn + email)",
            "CRM integrations",
          ],
        },
      },
      {
        id: "agency",
        name: { sr: "Agency", en: "Agency" },
        price: { sr: "Custom", en: "Custom" },
        billingNote: { sr: "10+ seat-ova · whitelabel", en: "10+ seats · whitelabel" },
        highlights: {
          sr: [
            "Roles & permissions",
            "Centralizovano upravljanje kampanja",
            "Client reports",
            "Template sharing",
            "Dedicated CSM",
            "Expandi pod vašim brendom",
          ],
          en: [
            "Roles & permissions",
            "Centralized campaign management",
            "Client reports",
            "Template sharing",
            "Dedicated CSM",
            "Expandi under your brand",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "LinkedIn nalozi", en: "LinkedIn accounts" },
        values: {
          business: { sr: "1+ (po ceni)", en: "1+ (priced each)" },
          agency: { sr: "10+ (popust)", en: "10+ (volume discount)" },
        },
      },
      {
        feature: { sr: "Whitelabel", en: "Whitelabel" },
        values: {
          business: { sr: "Ne", en: "No" },
          agency: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Warm-up", en: "Warm-up" },
        values: {
          business: { sr: "Da", en: "Yes" },
          agency: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Multichannel email", en: "Multichannel email" },
        values: {
          business: { sr: "Da", en: "Yes" },
          agency: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Dedicated support", en: "Dedicated support" },
        values: {
          business: { sr: "Standard", en: "Standard" },
          agency: { sr: "CSM", en: "CSM" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Početni do srednji", en: "Beginner to intermediate" },
    description: {
      sr: "Trial → povežite LinkedIn → warm-up 3–7 dana sa niskim limitima → kreirajte audience (search, post engagers, grupa) → sequence sa If/Action granama → pokrenite kampanju. Za agencije: Agency plan + whitelabel onboarding preko sales demo-a.",
      en: "Trial → connect LinkedIn → 3–7 day warm-up with low limits → build audience (search, post engagers, group) → sequence with If/Action branches → launch. For agencies: Agency plan + whitelabel onboarding via sales demo.",
    },
  },
  pros: {
    sr: [
      "Jedan od najsigurnijih cloud LinkedIn alata",
      "Mnogo tipova kampanja (Mobile Connector itd.)",
      "Multichannel bez drugog sequencer-a",
      "Campaign prioritization — fokus na šta radi",
      "Jasan trial pre odluke",
    ],
    en: [
      "Among the safest cloud LinkedIn tools",
      "Many campaign types (Mobile Connector, etc.)",
      "Multichannel without another sequencer",
      "Campaign prioritization — focus on what works",
      "Clear trial before you commit",
    ],
  },
  cons: {
    sr: [
      "Po LinkedIn nalogu — skupo na 10+ sendera vs HeyReach flat",
      "Nema javnog API-ja",
      "Video personalizacija je paid add-on",
      "Agency plan samo preko sales-a",
      "Nije email-first kao Instantly",
    ],
    en: [
      "Per LinkedIn account — expensive at 10+ senders vs HeyReach flat fee",
      "No public API",
      "Video personalization is a paid add-on",
      "Agency plan only via sales",
      "Not email-first like Instantly",
    ],
  },
  alternatives: [
    {
      slug: "heyreach",
      name: "HeyReach",
      description: {
        sr: "Multi-sender po flat fee — bolje za agencije.",
        en: "Multi-sender flat fee — better for agencies.",
      },
      startingPrice: { sr: "od $79", en: "from $79" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "LinkedIn outreach", en: "LinkedIn outreach" },
    },
    {
      slug: "lagrowthmachine",
      name: "La Growth Machine",
      description: {
        sr: "LinkedIn + email sa safety fokusom.",
        en: "LinkedIn + email with a safety focus.",
      },
      startingPrice: { sr: "od $60", en: "from $60" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "LinkedIn outreach", en: "LinkedIn outreach" },
    },
    {
      slug: "lemlist",
      name: "Lemlist",
      description: {
        sr: "Multichannel sa voice note i email.",
        en: "Multichannel with voice notes and email.",
      },
      startingPrice: { sr: "od $55", en: "from $55" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
    {
      slug: "apollo",
      name: "Apollo",
      description: {
        sr: "Baza + outreach u jednom.",
        en: "Database plus outreach in one.",
      },
      startingPrice: { sr: "od $49", en: "from $49" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko košta Expandi?", en: "How much does Expandi cost?" },
      answer: {
        sr: "Business $99/mes po LinkedIn nalogu (~$79 godišnje). Agency custom za 10+ seat-ova sa whitelabel-om. Više naloga = volume popust na sales upit.",
        en: "Business $99/mo per LinkedIn account (~$79 annual). Agency custom for 10+ seats with whitelabel. More accounts = volume discount on a sales inquiry.",
      },
    },
    {
      question: { sr: "Da li ima besplatan trial?", en: "Is there a free trial?" },
      answer: {
        sr: "Da — 7 dana sa punim pristupom svim funkcijama. Ne naplaćuje se dok eksplicitno ne nastavite posle trial-a.",
        en: "Yes — 7 days with full access to all features. You are not charged until you explicitly continue after the trial.",
      },
    },
    {
      question: { sr: "Zašto izabrati Expandi?", en: "Why choose Expandi?" },
      answer: {
        sr: "Kada vam treba cloud LinkedIn automatizacija sa warm-up-om, smart limitima i 10+ tipova kampanja — posebno ako radite scraping audience-a i multichannel sa email-om.",
        en: "When you need cloud LinkedIn automation with warm-up, smart limits, and 10+ campaign types — especially if you scrape audiences and run multichannel with email.",
      },
    },
    {
      question: { sr: "Kako radi Expandi?", en: "How does Expandi work?" },
      answer: {
        sr: "Cloud browser simulira ljudsko ponašanje sa vašeg IP-a. Sequence builder povezuje LinkedIn akcije i email korake sa If/Action logikom. Dashboard prikazuje reply rate i campaign performance.",
        en: "Cloud browser simulates human behavior from your IP. The sequence builder links LinkedIn actions and email steps with If/Action logic. The dashboard shows reply rate and campaign performance.",
      },
    },
    {
      question: {
        sr: "Da li je siguran za LinkedIn?",
        en: "Is it safe for LinkedIn?",
      },
      answer: {
        sr: "Expandi naglašava dedicated IP, warm-up i smart limits umesto „maksimalnih“ limita. Ipak — svaka automatizacija nosi rizik; počnite polako i pratite account health.",
        en: "Expandi emphasizes dedicated IP, warm-up, and smart limits instead of \"maximum\" limits. Still — any automation carries risk; start slow and monitor account health.",
      },
    },
    {
      question: {
        sr: "Koje su alternative?",
        en: "What are the alternatives?",
      },
      answer: {
        sr: "HeyReach (multi-sender flat fee), La Growth Machine, Dripify, Waalaxy, Lemlist. Expandi vodi po broju campaign tipova i agency whitelabel-u.",
        en: "HeyReach (multi-sender flat fee), La Growth Machine, Dripify, Waalaxy, Lemlist. Expandi leads on campaign type variety and agency whitelabel.",
      },
    },
    {
      question: { sr: "Da li ima API?", en: "Does it have an API?" },
      answer: {
        sr: "Javni API trenutno nije istaknut — fokus je na cloud UI, integracije (CRM) i webhook-style povezivanja preko podržanih alata.",
        en: "A public API is not prominently listed — the focus is the cloud UI, integrations (CRM), and webhook-style connections via supported tools.",
      },
    },
  ],
  integrations: {
    sr: [
      "HubSpot",
      "Pipedrive",
      "Salesforce",
      "Zapier",
      "Smartlead",
      "Hyperise (GIF)",
      "Senspark (video add-on)",
      "Email provider (SMTP)",
    ],
    en: [
      "HubSpot",
      "Pipedrive",
      "Salesforce",
      "Zapier",
      "Smartlead",
      "Hyperise (GIF)",
      "Senspark (video add-on)",
      "Email provider (SMTP)",
    ],
  },
};
