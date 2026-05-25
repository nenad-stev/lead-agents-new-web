import type { SalesTool } from "@/types/sales-tool";

export const smartleadTool: SalesTool = {
  slug: "smartlead",
  name: "Smartlead",
  logo: "/images/sales-tools/smartlead.png",
  tagline: {
    sr: "Cold email na skali sa neograničenim inbox-ovima i AI warmup-om",
    en: "Cold email at scale with unlimited inboxes and AI warmup",
  },
  categoryId: "email-outreach",
  category: { sr: "Email outreach", en: "Email outreach" },
  categories: {
    sr: [
      "Cold email",
      "Email warmup",
      "Master Inbox",
      "Deliverability",
      "Automatizacija sekvenci",
      "API & whitelabel",
    ],
    en: [
      "Cold email",
      "Email warmup",
      "Master Inbox",
      "Deliverability",
      "Sequence automation",
      "API & whitelabel",
    ],
  },
  websiteUrl: "https://smartlead.ai?via=lead-agents",
  recommended: true,
  rating: { g2: 4.9, g2Reviews: 10 },
  overview: {
    sr: "Smartlead je platforma za cold email outreach: povežete neograničen broj email naloga, zagrevate ih AI warmup-om i šaljete sekvence po volumenu — bez naplate po korisniku ili po inbox-u.",
    en: "Smartlead is a cold email outreach platform: connect unlimited email accounts, warm them with AI warmup, and run sequences by volume — without per-seat or per-inbox pricing.",
  },
  overviewExtended: {
    sr: "Master Inbox objedinjuje sve odgovore, rotacija mailbox-ova i dynamic IP pomažu deliverability-u, a Pro+ planovi dodaju global block list, ChatGPT asistenciju i naprednu analitiku. Nije lead baza ni pun CRM — Smartlead je fokusiran na slanje, warmup i revenue cycle oko cold email-a. Za list building koristite Clay ili Apollo, pa uvezite u kampanje.",
    en: "Master Inbox unifies all replies; mailbox rotation and dynamic IPs support deliverability, while Pro+ plans add a global block list, ChatGPT assistance, and advanced analytics. It is not a lead database or full CRM — Smartlead focuses on sending, warmup, and the revenue cycle around cold email. Use Clay or Apollo for list building, then import into campaigns.",
  },
  idealFor: {
    sr: [
      "Lead gen i outbound agencije",
      "B2B sales timovi",
      "Recruiteri sa high-volume email-om",
      "Founderi koji skaliraju cold outreach",
      "Startapovi i SMB",
    ],
    en: [
      "Lead gen and outbound agencies",
      "B2B sales teams",
      "Recruiters running high-volume email",
      "Founders scaling cold outreach",
      "Startups and SMBs",
    ],
  },
  keyFeatures: {
    sr: [
      "Neograničeni email nalozi na svim planovima",
      "AI-powered email warmup",
      "Master Inbox — svi odgovori na jednom mestu",
      "Automatska rotacija mailbox-ova",
      "Dynamic IP i deliverability monitoring",
      "CRM sync, API, webhook-i i whitelabel (viši tier-ovi)",
    ],
    en: [
      "Unlimited email accounts on all plans",
      "AI-powered email warmup",
      "Master Inbox — all replies in one place",
      "Automatic mailbox rotation",
      "Dynamic IPs and deliverability monitoring",
      "CRM sync, API, webhooks, and whitelabel (higher tiers)",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "$39 / mesec", en: "$39 / month" },
    },
    {
      label: { sr: "Naplata", en: "Billing" },
      value: { sr: "Po volumenu slanja", en: "By sending volume" },
    },
    {
      label: { sr: "G2 ocena", en: "G2 rating" },
      value: { sr: "4.9 / 5", en: "4.9 / 5" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "14 dana · bez kartice", en: "14 days · no card" },
    },
  ],
  pricing: {
    startingPrice: { sr: "od $39 / mesec", en: "from $39 / month" },
    billing: {
      sr: "Po planu (leadovi + emailovi/mes) · ~17% jeftinije godišnje",
      en: "By plan (leads + emails/mo) · ~17% off annual",
    },
    trial: {
      sr: "14 dana trial · bez kreditne kartice",
      en: "14-day trial · no credit card required",
    },
    plans: [
      {
        id: "basic",
        name: { sr: "Basic", en: "Basic" },
        price: { sr: "$39 / mesec", en: "$39 / month" },
        billingNote: {
          sr: "~$32.50 uz godišnju naplatu",
          en: "~$32.50 with annual billing",
        },
        highlights: {
          sr: [
            "2.000 aktivnih leadova",
            "6.000 emailova mesečno",
            "Neograničeni nalozi i warmup",
            "Dynamic IP",
            "General support",
          ],
          en: [
            "2,000 active leads",
            "6,000 emails per month",
            "Unlimited accounts and warmup",
            "Dynamic IPs",
            "General support",
          ],
        },
      },
      {
        id: "pro",
        name: { sr: "Pro", en: "Pro" },
        price: { sr: "$94 / mesec", en: "$94 / month" },
        billingNote: {
          sr: "~$78.30 uz godišnju naplatu · najpopularniji za skaliranje",
          en: "~$78.30 with annual billing · most popular for scaling",
        },
        highlights: {
          sr: [
            "30.000 aktivnih leadova",
            "90.000 emailova mesečno",
            "ChatGPT asistencija",
            "Global block list",
            "Neograničeni korisnici (seats)",
            "Prioritetna podrška",
          ],
          en: [
            "30,000 active leads",
            "90,000 emails per month",
            "ChatGPT assistance",
            "Global block list",
            "Unlimited seats",
            "Priority support",
          ],
        },
      },
      {
        id: "unlimited-smart",
        name: { sr: "Unlimited Smart", en: "Unlimited Smart" },
        price: { sr: "$174 / mesec", en: "$174 / month" },
        billingNote: {
          sr: "~$144.50 uz godišnju naplatu",
          en: "~$144.50 with annual billing",
        },
        highlights: {
          sr: [
            "Neograničeni kontakti",
            "150.000 emailova mesečno",
            "Dynamic sekvence",
            "Sve Pro funkcije",
            "Za agencije u rastu",
          ],
          en: [
            "Unlimited contacts",
            "150,000 emails per month",
            "Dynamic sequences",
            "All Pro features",
            "Built for growing agencies",
          ],
        },
      },
      {
        id: "unlimited-prime",
        name: { sr: "Unlimited Prime", en: "Unlimited Prime" },
        price: { sr: "$379 / mesec", en: "$379 / month" },
        billingNote: {
          sr: "~$314.60 uz godišnju naplatu",
          en: "~$314.60 with annual billing",
        },
        highlights: {
          sr: [
            "Neograničeni kontakti",
            "500.000 emailova mesečno",
            "Maksimalan volumen slanja",
            "Napredna infrastruktura",
            "Dedicated account manager (gde dostupno)",
          ],
          en: [
            "Unlimited contacts",
            "500,000 emails per month",
            "Maximum sending volume",
            "Advanced infrastructure",
            "Dedicated account manager (where available)",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "Email nalozi", en: "Email accounts" },
        values: {
          basic: { sr: "Neograničeno", en: "Unlimited" },
          pro: { sr: "Neograničeno", en: "Unlimited" },
          "unlimited-smart": { sr: "Neograničeno", en: "Unlimited" },
          "unlimited-prime": { sr: "Neograničeno", en: "Unlimited" },
        },
      },
      {
        feature: { sr: "Emailova / mesec", en: "Emails / month" },
        values: {
          basic: { sr: "6.000", en: "6,000" },
          pro: { sr: "90.000", en: "90,000" },
          "unlimited-smart": { sr: "150.000", en: "150,000" },
          "unlimited-prime": { sr: "500.000", en: "500,000" },
        },
      },
      {
        feature: { sr: "Aktivni leadovi", en: "Active leads" },
        values: {
          basic: { sr: "2.000", en: "2,000" },
          pro: { sr: "30.000", en: "30,000" },
          "unlimited-smart": { sr: "Neograničeno", en: "Unlimited" },
          "unlimited-prime": { sr: "Neograničeno", en: "Unlimited" },
        },
      },
      {
        feature: { sr: "Global block list", en: "Global block list" },
        values: {
          basic: { sr: "Ne", en: "No" },
          pro: { sr: "Da", en: "Yes" },
          "unlimited-smart": { sr: "Da", en: "Yes" },
          "unlimited-prime": { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Whitelabel", en: "Whitelabel" },
        values: {
          basic: { sr: "Ne", en: "No" },
          pro: { sr: "Ne", en: "No" },
          "unlimited-smart": { sr: "Opciono", en: "Optional" },
          "unlimited-prime": { sr: "Da", en: "Yes" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Srednja", en: "Intermediate" },
    description: {
      sr: "Povežete domene i mailbox-ove, uključite warmup, uvezete leadove ili povežete enrichment workflow, zatim pokrenete sekvencu. Većina timova šalje prvu kampanju u roku od jednog dana uz tutorijale i demo.",
      en: "Connect domains and mailboxes, enable warmup, import leads or connect an enrichment workflow, then launch a sequence. Most teams send a first campaign within a day using tutorials and demos.",
    },
  },
  pros: {
    sr: [
      "Neograničeni inbox-ovi — idealno za više domena i agencije",
      "Cena raste sa volumenom, ne sa brojem prodavaca",
      "AI warmup i deliverability alati uključeni",
      "Master Inbox za sve odgovore",
      "Jak API i CRM integracije",
    ],
    en: [
      "Unlimited inboxes — ideal for multi-domain and agency setups",
      "Cost scales with volume, not headcount",
      "AI warmup and deliverability tools included",
      "Master Inbox for all replies",
      "Strong API and CRM integrations",
    ],
  },
  cons: {
    sr: [
      "Fokus isključivo na email — nema native LinkedIn sekvenci",
      "Nije lead sourcing alat — treba vam Apollo, Clay ili slično",
      "Dodatni troškovi: mailbox provideri i domeni posebno",
      "Napredni whitelabel i enterprise na višim tier-ovima",
    ],
    en: [
      "Email-only focus — no native LinkedIn sequences",
      "Not a lead sourcing tool — you need Apollo, Clay, or similar",
      "Extra costs: mailbox providers and domains are separate",
      "Advanced whitelabel and enterprise on higher tiers",
    ],
  },
  alternatives: [
    {
      slug: "instantly",
      name: "Instantly",
      description: {
        sr: "Sličan model: neograničeni inbox-ovi i warmup po volumenu.",
        en: "Similar model: unlimited inboxes and warmup by volume.",
      },
      startingPrice: { sr: "od $37", en: "from $37" },
      trial: { sr: "Besplatan start", en: "Free to start" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
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
  ],
  faq: [
    {
      question: { sr: "Koliko košta Smartlead?", en: "How much does Smartlead cost?" },
      answer: {
        sr: "Planovi počinju od $39/mesec (Basic: 6.000 emailova, 2.000 leadova). Pro je $94/mesec (90.000 emailova, 30.000 leadova). Unlimited Smart $174, Unlimited Prime $379. Godišnja naplata je oko 17% jeftinija.",
        en: "Plans start at $39/month (Basic: 6,000 emails, 2,000 leads). Pro is $94/month (90,000 emails, 30,000 leads). Unlimited Smart is $174, Unlimited Prime is $379. Annual billing is roughly 17% cheaper.",
      },
    },
    {
      question: {
        sr: "Da li mogu povezati neograničeno email naloga?",
        en: "Can I connect unlimited email accounts?",
      },
      answer: {
        sr: "Da — svi planovi uključuju neograničene mailbox-ove i warmup, što je ključna prednost u odnosu na alate koji naplaćuju svakog prodavca posebno (npr. Lemlist po profilu).",
        en: "Yes — all plans include unlimited mailboxes and warmup, a key advantage over tools that charge per rep (e.g. Lemlist per profile).",
      },
    },
    {
      question: { sr: "Da li Smartlead ima probni period?", en: "Does Smartlead offer a trial?" },
      answer: {
        sr: "Da — 14 dana trial sa punim funkcijama, bez kreditne kartice. Možete zakazati i live demo za onboarding.",
        en: "Yes — a 14-day trial with full features, no credit card required. You can also book a live demo for onboarding.",
      },
    },
    {
      question: { sr: "Zašto izabrati Smartlead?", en: "Why choose Smartlead?" },
      answer: {
        sr: "Kada šaljete veliki obim cold email-a sa više domena i ne želite da platite po seat-u — Smartlead drži trošak predvidivim uz AI warmup, rotaciju inbox-ova i Master Inbox.",
        en: "When you send high-volume cold email across multiple domains and do not want per-seat pricing — Smartlead keeps costs predictable with AI warmup, inbox rotation, and Master Inbox.",
      },
    },
    {
      question: { sr: "Da li Smartlead ima API?", en: "Does Smartlead have an API?" },
      answer: {
        sr: "Da — API i webhook-i za CRM, Zapier, Make i custom workflow-e. Viši planovi nude širi API pristup i whitelabel opcije.",
        en: "Yes — API and webhooks for CRMs, Zapier, Make, and custom workflows. Higher plans offer broader API access and whitelabel options.",
      },
    },
    {
      question: {
        sr: "Koje su alternative Smartlead-u?",
        en: "What are Smartlead alternatives?",
      },
      answer: {
        sr: "Često se poredi sa Instantly, Lemlist, Mailshake i Reply.io. Smartlead i Instantly su najbliži po modelu (neograničeni inbox-ovi); Lemlist je jači za multichannel.",
        en: "Often compared to Instantly, Lemlist, Mailshake, and Reply.io. Smartlead and Instantly are closest in model (unlimited inboxes); Lemlist is stronger for multichannel.",
      },
    },
  ],
  integrations: {
    sr: [
      "HubSpot",
      "Salesforce",
      "Pipedrive",
      "Clay",
      "Zapier",
      "Make",
      "API / Webhooks",
    ],
    en: [
      "HubSpot",
      "Salesforce",
      "Pipedrive",
      "Clay",
      "Zapier",
      "Make",
      "API / Webhooks",
    ],
  },
};
