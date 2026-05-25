import type { SalesTool } from "@/types/sales-tool";

export const laGrowthMachineTool: SalesTool = {
  slug: "lagrowthmachine",
  name: "La Growth Machine",
  logo: "/images/sales-tools/lagrowthmachine.png",
  tagline: {
    sr: "Multichannel LinkedIn i email automatizacija za B2B outbound",
    en: "Multichannel LinkedIn and email automation for B2B outbound",
  },
  categoryId: "linkedin-outreach",
  category: { sr: "LinkedIn outreach", en: "LinkedIn outreach" },
  categories: {
    sr: [
      "LinkedIn automatizacija",
      "Multichannel outreach",
      "Lead enrichment",
      "Email sekvence",
      "AI copywriting",
      "CRM sync",
    ],
    en: [
      "LinkedIn automation",
      "Multichannel outreach",
      "Lead enrichment",
      "Email sequences",
      "AI copywriting",
      "CRM sync",
    ],
  },
  websiteUrl: "https://lagrowthmachine.com/?ref=n2zmzmj",
  recommended: true,
  rating: { g2: 4.7, g2Reviews: 120 },
  overview: {
    sr: "La Growth Machine (LGM) automatizuje outbound na LinkedIn-u, email-u, pozivima i X-u — od izgradnje liste i enrichment-a do sekvenci i jedinstvenog inbox-a za odgovore.",
    en: "La Growth Machine (LGM) automates outbound on LinkedIn, email, calls, and X — from list building and enrichment to sequences and a unified inbox for replies.",
  },
  overviewExtended: {
    sr: "Fokus je na sigurnoj LinkedIn automatizaciji (cloud, proxy limiti) i multichannel workflow-ima koji smanjuju ručni rad. Integracije sa HubSpot, Pipedrive, Zapier i API-jem. Nije pun CRM niti alat za cold calling kao centralni proizvod — jačina je online lead engagement i GTM automatizacija.",
    en: "The focus is safe LinkedIn automation (cloud-based, smart sending limits) and multichannel workflows that cut manual work. Integrations include HubSpot, Pipedrive, Zapier, and API access. It is not a full CRM or a dialer-first product — the strength is online lead engagement and GTM automation.",
  },
  idealFor: {
    sr: [
      "Sales i GTM timovi",
      "Agencije za lead gen",
      "Startapovi i scale-upovi",
      "SMB kompanije",
      "Founderi koji rade outbound sami",
    ],
    en: [
      "Sales and GTM teams",
      "Lead gen agencies",
      "Startups and scale-ups",
      "SMBs",
      "Founders doing outbound solo",
    ],
  },
  keyFeatures: {
    sr: [
      "LinkedIn automatizacija (connect, DM, voice, social warming)",
      "Email sekvence i rotating inbox (do 10 adresa)",
      "Waterfall enrichment i verifikovani emailovi",
      "Multichannel inbox — LinkedIn + email na jednom mestu",
      "Intent import (lajkovi, komentari, eventi na LinkedIn-u)",
      "HubSpot / Pipedrive sync i Zapier integracije",
    ],
    en: [
      "LinkedIn automation (connect, DM, voice, social warming)",
      "Email sequences and rotating inbox (up to 10 addresses)",
      "Waterfall enrichment and verified emails",
      "Multichannel inbox — LinkedIn + email in one place",
      "Intent import (LinkedIn likes, comments, event attendees)",
      "HubSpot / Pipedrive sync and Zapier integrations",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "€60 / mesec", en: "€60 / month" },
    },
    {
      label: { sr: "Naplata", en: "Billing" },
      value: { sr: "Po identitetu (identity)", en: "Per identity" },
    },
    {
      label: { sr: "G2 ocena", en: "G2 rating" },
      value: { sr: "4.7 / 5", en: "4.7 / 5" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "14 dana (bez kartice)", en: "14 days (no card)" },
    },
  ],
  pricing: {
    startingPrice: { sr: "od €60 / mesec", en: "from €60 / month" },
    billing: {
      sr: "Po identitetu — godišnja naplata ~2 meseca besplatno",
      en: "Per identity — annual billing ~2 months free",
    },
    trial: {
      sr: "14 dana besplatno, bez kreditne kartice",
      en: "14-day free trial, no credit card",
    },
    plans: [
      {
        id: "basic",
        name: { sr: "Basic", en: "Basic" },
        price: { sr: "€60 / mesec", en: "€60 / month" },
        billingNote: {
          sr: "Po identitetu · LinkedIn + Email",
          en: "Per identity · LinkedIn + Email",
        },
        highlights: {
          sr: [
            "250 obogaćenih leadova mesečno",
            "1 sending email po identitetu",
            "Do 3 identiteta",
            "3 člana tima",
            "27M+ company baza",
            "Šabloni kampanja i AI voice poruke",
          ],
          en: [
            "250 enriched leads per month",
            "1 sending email per identity",
            "Up to 3 identities",
            "3 team members",
            "27M+ company database",
            "Campaign templates and AI voice messages",
          ],
        },
      },
      {
        id: "pro",
        name: { sr: "Pro", en: "Pro" },
        price: { sr: "€120 / mesec", en: "€120 / month" },
        billingNote: {
          sr: "Po identitetu · + Calls",
          en: "Per identity · + Calls",
        },
        highlights: {
          sr: [
            "400 obogaćenih leadova",
            "5 sending emailova (rotating inbox)",
            "Do 6 aktivnih kampanja",
            "Neograničeno identiteta",
            "25 članova tima besplatno",
            "Custom workflow i multichannel inbox",
          ],
          en: [
            "400 enriched leads",
            "5 sending emails (rotating inbox)",
            "Up to 6 active campaigns",
            "Unlimited identities",
            "25 team members included",
            "Custom workflows and multichannel inbox",
          ],
        },
      },
      {
        id: "ultimate",
        name: { sr: "Ultimate", en: "Ultimate" },
        price: { sr: "€180 / mesec", en: "€180 / month" },
        billingNote: {
          sr: "~€150 uz godišnju naplatu · + X (Twitter)",
          en: "~€150 with annual billing · + X (Twitter)",
        },
        highlights: {
          sr: [
            "1.000 obogaćenih leadova",
            "10 sending emailova po identitetu",
            "Neograničene kampanje",
            "Neograničeni članovi tima",
            "HubSpot / Pipedrive sync",
            "Drag-and-drop sequence builder",
          ],
          en: [
            "1,000 enriched leads",
            "10 sending emails per identity",
            "Unlimited campaigns",
            "Unlimited team members",
            "HubSpot / Pipedrive sync",
            "Drag-and-drop sequence builder",
          ],
        },
      },
      {
        id: "agency",
        name: { sr: "Agency", en: "Agency" },
        price: { sr: "Po dogovoru", en: "Custom" },
        billingNote: {
          sr: "Min. 6 identiteta",
          en: "Min. 6 identities",
        },
        highlights: {
          sr: [
            "Za lead gen agencije",
            "Dedicated support i onboarding",
            "Ekskluzivne funkcije",
            "Discounted planovi",
            "Custom identiteti",
          ],
          en: [
            "For lead gen agencies",
            "Dedicated support and onboarding",
            "Exclusive features",
            "Discounted plans",
            "Custom identities",
          ],
        },
      },
      {
        id: "custom",
        name: { sr: "Custom", en: "Custom" },
        price: { sr: "od €150 / mesec", en: "from €150 / month" },
        billingNote: {
          sr: "Min. 6 meseci · po dogovoru",
          en: "6-month min · custom",
        },
        highlights: {
          sr: [
            "Custom limiti i funkcije",
            "Custom support i onboarding",
            "Fleksibilni paket za veće timove",
          ],
          en: [
            "Custom limits and features",
            "Custom support and onboarding",
            "Flexible package for larger teams",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "Kanali", en: "Channels" },
        values: {
          basic: { sr: "LinkedIn, Email", en: "LinkedIn, Email" },
          pro: { sr: "+ Calls", en: "+ Calls" },
          ultimate: { sr: "+ X (Twitter)", en: "+ X (Twitter)" },
          agency: { sr: "Custom", en: "Custom" },
          custom: { sr: "Custom", en: "Custom" },
        },
      },
      {
        feature: { sr: "Enrichment / mesec", en: "Enrichment / month" },
        values: {
          basic: { sr: "250", en: "250" },
          pro: { sr: "400", en: "400" },
          ultimate: { sr: "1.000", en: "1,000" },
          agency: { sr: "Custom", en: "Custom" },
          custom: { sr: "Custom", en: "Custom" },
        },
      },
      {
        feature: { sr: "Sending emailova", en: "Sending emails" },
        values: {
          basic: { sr: "1", en: "1" },
          pro: { sr: "5", en: "5" },
          ultimate: { sr: "10", en: "10" },
          agency: { sr: "Custom", en: "Custom" },
          custom: { sr: "Custom", en: "Custom" },
        },
      },
      {
        feature: { sr: "CRM sync", en: "CRM sync" },
        values: {
          basic: { sr: "Zapier", en: "Zapier" },
          pro: { sr: "Zapier", en: "Zapier" },
          ultimate: { sr: "HubSpot, Pipedrive", en: "HubSpot, Pipedrive" },
          agency: { sr: "Da", en: "Yes" },
          custom: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Aktivne kampanje", en: "Active campaigns" },
        values: {
          basic: { sr: "Šabloni", en: "Templates" },
          pro: { sr: "Do 6", en: "Up to 6" },
          ultimate: { sr: "Neograničeno", en: "Unlimited" },
          agency: { sr: "Neograničeno", en: "Unlimited" },
          custom: { sr: "Custom", en: "Custom" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Napredna", en: "Advanced" },
    description: {
      sr: "Povežete LinkedIn i email identitet, uvezete leadove (CSV, Sales Navigator, intent), izaberete šablon sekvence i pokrenete kampanju. Multichannel inbox i CRM sync zahtevaju malo više konfiguracije — većina timova vidi prve odgovore u roku od nekoliko dana.",
      en: "Connect your LinkedIn and email identity, import leads (CSV, Sales Navigator, intent), pick a sequence template, and launch. Multichannel inbox and CRM sync need a bit more setup — most teams see first replies within a few days.",
    },
  },
  pros: {
    sr: [
      "Jedan od najzrelijih LinkedIn automation alata (od 2017)",
      "Sigurniji pristup — cloud, proxy-i, pametni limiti slanja",
      "Multichannel (LinkedIn, email, pozivi, X) u jednom workflow-u",
      "Ugrađen enrichment i rotating inbox na višim planovima",
      "14-dnevni trial bez kartice",
    ],
    en: [
      "One of the most mature LinkedIn automation tools (since 2017)",
      "Safety-first approach — cloud, proxies, smart sending limits",
      "Multichannel (LinkedIn, email, calls, X) in one workflow",
      "Built-in enrichment and rotating inbox on higher tiers",
      "14-day trial with no credit card",
    ],
  },
  cons: {
    sr: [
      "Naplata po identitetu — više profila = viši trošak",
      "Nije zamena za pun CRM ili masivan cold email-only stack",
      "Setup je napredniji od jednostavnih email alata",
      "Najbolji CRM sync i custom sekvence tek na Ultimate planu",
      "Cene primarno u EUR",
    ],
    en: [
      "Per-identity billing — more profiles means higher cost",
      "Not a replacement for a full CRM or email-only stack at scale",
      "Setup is more advanced than simple email tools",
      "Best CRM sync and custom sequences start on Ultimate",
      "Pricing primarily in EUR",
    ],
  },
  alternatives: [
    {
      slug: "heyreach",
      name: "HeyReach",
      description: {
        sr: "Multi-sender LinkedIn — flat fee za agencije.",
        en: "Multi-sender LinkedIn — flat fee for agencies.",
      },
      startingPrice: { sr: "od $79", en: "from $79" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "LinkedIn outreach", en: "LinkedIn outreach" },
    },
    {
      slug: "lemlist",
      name: "Lemlist",
      description: {
        sr: "Multichannel outreach sa AI personalizacijom.",
        en: "Multichannel outreach with AI personalization.",
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
    {
      slug: "instantly",
      name: "Instantly",
      description: {
        sr: "Cold email na skali — neograničeni inbox-ovi.",
        en: "High-volume cold email with unlimited inboxes.",
      },
      startingPrice: { sr: "od $37", en: "from $37" },
      trial: { sr: "Besplatan start", en: "Free start" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
    {
      slug: "expandi",
      name: "Expandi",
      description: {
        sr: "LinkedIn automatizacija fokusirana na safety.",
        en: "LinkedIn automation focused on safety.",
      },
      startingPrice: { sr: "od $99", en: "from $99" },
      trial: { sr: "7 dana", en: "7 days" },
      category: { sr: "LinkedIn outreach", en: "LinkedIn outreach" },
    },
  ],
  faq: [
    {
      question: {
        sr: "Koliko košta La Growth Machine?",
        en: "How much does La Growth Machine cost?",
      },
      answer: {
        sr: "Basic je €60/mesec po identitetu, Pro €120/mesec, Ultimate €180/mesec (~€150 godišnje) po identitetu. Agency i Custom su po dogovoru. Godišnja naplata uključuje oko 2 meseca besplatno.",
        en: "Basic is €60/month per identity, Pro is €120/month, Ultimate is €180/month (~€150 billed annually) per identity. Agency and Custom are custom. Annual billing includes roughly two months free.",
      },
    },
    {
      question: {
        sr: "Šta je identitet (identity)?",
        en: "What is an identity?",
      },
      answer: {
        sr: "Identitet je profil koji automatski vodi kampanje (LinkedIn + email povezani na taj seat). Svaki dodatni prodavac ili founder koji šalje outreach obično treba svoj identitet — naplaćuje se posebno.",
        en: "An identity is a profile that runs campaigns automatically (LinkedIn + email connected to that seat). Each additional rep or founder doing outreach typically needs their own identity — billed separately.",
      },
    },
    {
      question: {
        sr: "Da li LGM ima probni period?",
        en: "Does La Growth Machine offer a trial?",
      },
      answer: {
        sr: "Da — 14 dana sa punim pristupom funkcijama, bez kreditne kartice. Custom sekvence u trial-u su ograničene; podrška može omogućiti test po zahtevu.",
        en: "Yes — 14 days with full feature access, no credit card required. Custom sequences are limited during trial; support can enable testing on request.",
      },
    },
    {
      question: {
        sr: "Da li je LinkedIn automatizacija sigurna?",
        en: "Is LinkedIn automation safe?",
      },
      answer: {
        sr: "LGM naglašava cloud infrastrukturu (bez ekstenzija), mobilne proxy-e i limite slanja bazirane na realnim podacima — cilj je smanjiti rizik ban-a u odnosu na agresivne alate.",
        en: "LGM emphasizes cloud infrastructure (no browser extensions), mobile proxies, and sending limits based on real-world data — aiming to reduce ban risk versus aggressive tools.",
      },
    },
    {
      question: {
        sr: "Zašto izabrati La Growth Machine?",
        en: "Why choose La Growth Machine?",
      },
      answer: {
        sr: "Kada vam treba LinkedIn-first multichannel outbound sa enrichment-om, rotating inbox-om i jednim inbox-om za odgovore — LGM je jedan od najpoznatijih izbora u Evropi za agencije i GTM timove.",
        en: "When you need LinkedIn-first multichannel outbound with enrichment, rotating inbox, and one reply inbox — LGM is one of the best-known picks in Europe for agencies and GTM teams.",
      },
    },
    {
      question: { sr: "Da li LGM ima API?", en: "Does La Growth Machine have an API?" },
      answer: {
        sr: "Da — API, Zapier, Make i Clay integracije za kreiranje leadova, trigger-e i povezivanje sa ostatkom stack-a. Ultimate dodaje native HubSpot i Pipedrive sync.",
        en: "Yes — API, Zapier, Make, and Clay integrations for leads, triggers, and stack connectivity. Ultimate adds native HubSpot and Pipedrive sync.",
      },
    },
    {
      question: {
        sr: "Koje su alternative La Growth Machine-u?",
        en: "What are La Growth Machine alternatives?",
      },
      answer: {
        sr: "Često se poredi sa Lemlist, Expandi, PhantomBuster i Apollo. LGM je najjači za LinkedIn + email workflow sa sigurnosnim fokusom; Instantly bolje za čist high-volume email.",
        en: "Often compared to Lemlist, Expandi, PhantomBuster, and Apollo. LGM is strongest for LinkedIn + email workflows with a safety focus; Instantly is better for pure high-volume email.",
      },
    },
  ],
  integrations: {
    sr: [
      "HubSpot",
      "Pipedrive",
      "Zapier",
      "Make",
      "Clay",
      "Phantombuster",
      "API",
    ],
    en: [
      "HubSpot",
      "Pipedrive",
      "Zapier",
      "Make",
      "Clay",
      "Phantombuster",
      "API",
    ],
  },
};
