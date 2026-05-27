import type { SalesTool } from "@/types/sales-tool";

export const heyreachTool: SalesTool = {
  slug: "heyreach",
  name: "HeyReach",
  logo: "/images/sales-tools/heyreach.png",
  tagline: {
    sr: "LinkedIn automatizacija, neograničeni senderi, jedna fiksna cena",
    en: "LinkedIn automation, unlimited senders, one flat fee",
  },
  categoryId: "linkedin-outreach",
  category: { sr: "LinkedIn outreach", en: "LinkedIn outreach" },
  categories: {
    sr: [
      "LinkedIn automatizacija",
      "Multi-sender rotacija",
      "Unified inbox",
      "Agency whitelabel",
      "API & webhooks",
      "Multichannel (email add-on)",
    ],
    en: [
      "LinkedIn automation",
      "Multi-sender rotation",
      "Unified inbox",
      "Agency whitelabel",
      "API & webhooks",
      "Multichannel (email add-on)",
    ],
  },
  websiteUrl: "https://www.heyreach.io/",
  recommended: true,
  rating: { g2: 4.8, g2Reviews: 280 },
  overview: {
    sr: "HeyReach automatizuje LinkedIn outreach za agencije i sales timove: povežete više LinkedIn naloga (sendera), rotirate slanje kroz jednu kampanju i odgovarate iz jedinstvenog inbox-a, bez naplate po korisniku.",
    en: "HeyReach automates LinkedIn outreach for agencies and sales teams: connect multiple LinkedIn accounts (senders), rotate sending across one campaign, and reply from a unified inbox, with no per-user fee.",
  },
  overviewExtended: {
    sr: "Growth plan ($79/sender) uključuje residential proxy po senderu i 14-dnevni trial (3 LinkedIn naloga, bez kartice). Agency ($999) pokriva 50 sendera + whitelabel; Unlimited ($1.999), neograničeni senderi. Integracije: HubSpot, Clay, Zapier, API, MCP. Nije email-first alat kao Instantly, fokus je skaliranje LinkedIn-a.",
    en: "The Growth plan ($79/sender) includes a residential proxy per sender and a 14-day trial (3 LinkedIn accounts, no card). Agency ($999) covers 50 senders plus whitelabel; Unlimited ($1,999) for unlimited senders. Integrations: HubSpot, Clay, Zapier, API, MCP. Not an email-first tool like Instantly, the focus is scaling LinkedIn.",
  },
  idealFor: {
    sr: [
      "Lead gen agencije (5+ sendera)",
      "Sales i SDR timovi",
      "GTM operatori sa Clay stack-om",
      "Founderi koji skaliraju outbound",
      "Timovi sa više LinkedIn profila",
    ],
    en: [
      "Lead gen agencies (5+ senders)",
      "Sales and SDR teams",
      "GTM operators with a Clay stack",
      "Founders scaling outbound",
      "Teams with multiple LinkedIn profiles",
    ],
  },
  keyFeatures: {
    sr: [
      "Auto-rotate više LinkedIn sendera",
      "Unified inbox za sve odgovore",
      "Sve LinkedIn akcije (connect, DM, view…)",
      "Import leadova (Clay, CSV, API)",
      "Find email + multichannel kampanje",
      "Whitelabel za agencije (Agency+)",
    ],
    en: [
      "Auto-rotate multiple LinkedIn senders",
      "Unified inbox for all replies",
      "All LinkedIn actions (connect, DM, view…)",
      "Lead import (Clay, CSV, API)",
      "Find email + multichannel campaigns",
      "Whitelabel for agencies (Agency+)",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "$79 / sender", en: "$79 / sender" },
    },
    {
      label: { sr: "Naplata", en: "Billing" },
      value: { sr: "Po senderu (ne po user-u)", en: "Per sender (not per user)" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "14 dana · 3 naloga", en: "14 days · 3 accounts" },
    },
    {
      label: { sr: "Agency paket", en: "Agency bundle" },
      value: { sr: "50 sendera / $999", en: "50 senders / $999" },
    },
  ],
  pricing: {
    startingPrice: { sr: "od $79 / sender / mes", en: "from $79 / sender / month" },
    billing: {
      sr: "Po LinkedIn senderu · tim/VAs besplatno",
      en: "Per LinkedIn sender · teammates/VAs free",
    },
    trial: {
      sr: "14 dana premium · bez kartice · 3 sendera",
      en: "14-day premium trial · no card · 3 senders",
    },
    plans: [
      {
        id: "growth",
        name: { sr: "Growth", en: "Growth" },
        price: { sr: "$79 / sender / mes", en: "$79 / sender / month" },
        billingNote: {
          sr: "Godišnje ~$59/sender · kvartal ~$67",
          en: "Annual ~$59/sender · quarterly ~$67",
        },
        highlights: {
          sr: [
            "Dedicated residential proxy po senderu",
            "100 kredita/sender + 100 email kredita",
            "Unified inbox & multichannel",
            "API, webhooks, MCP server",
            "Neograničeni korisnici tima",
          ],
          en: [
            "Dedicated residential proxy per sender",
            "100 credits/sender + 100 email credits",
            "Unified inbox & multichannel",
            "API, webhooks, MCP server",
            "Unlimited team users",
          ],
        },
      },
      {
        id: "agency",
        name: { sr: "Agency", en: "Agency" },
        price: { sr: "$999 / mesec", en: "$999 / month" },
        billingNote: { sr: "50 sendera uključeno", en: "50 senders included" },
        highlights: {
          sr: [
            "Whitelabel uključen",
            "Bring your own proxies",
            "1.000 kredita · 300 email kredita",
            "Done-for-you onboarding",
            "Dedicated Slack kanal",
          ],
          en: [
            "Whitelabel included",
            "Bring your own proxies",
            "1,000 credits · 300 email credits",
            "Done-for-you onboarding",
            "Dedicated Slack channel",
          ],
        },
      },
      {
        id: "unlimited",
        name: { sr: "Unlimited", en: "Unlimited" },
        price: { sr: "$1.999 / mesec", en: "$1,999 / month" },
        billingNote: { sr: "Neograničeni senderi", en: "Unlimited senders" },
        highlights: {
          sr: [
            "Sve iz Agency plana",
            "3.000 kredita · 500 email kredita",
            "Multi-brand whitelabel (add-on)",
            "Done-for-you migration",
            "Priority support · 30d trial na upit",
          ],
          en: [
            "Everything in Agency",
            "3,000 credits · 500 email credits",
            "Multi-brand whitelabel (add-on)",
            "Done-for-you migration",
            "Priority support · 30-day trial on request",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "LinkedIn senderi", en: "LinkedIn senders" },
        values: {
          growth: { sr: "Po izboru (1-10+)", en: "Your choice (1-10+)" },
          agency: { sr: "50", en: "50" },
          unlimited: { sr: "Neograničeno", en: "Unlimited" },
        },
      },
      {
        feature: { sr: "Proxy", en: "Proxy" },
        values: {
          growth: { sr: "Uključen (residential)", en: "Included (residential)" },
          agency: { sr: "BYO proxy", en: "BYO proxy" },
          unlimited: { sr: "BYO proxy", en: "BYO proxy" },
        },
      },
      {
        feature: { sr: "Whitelabel", en: "Whitelabel" },
        values: {
          growth: { sr: "Ne", en: "No" },
          agency: { sr: "1 brand", en: "1 brand" },
          unlimited: { sr: "Multi-brand +", en: "Multi-brand +" },
        },
      },
      {
        feature: { sr: "Korisnici tima", en: "Team users" },
        values: {
          growth: { sr: "Neograničeno", en: "Unlimited" },
          agency: { sr: "Neograničeno", en: "Unlimited" },
          unlimited: { sr: "Neograničeno", en: "Unlimited" },
        },
      },
      {
        feature: { sr: "API / webhooks", en: "API / webhooks" },
        values: {
          growth: { sr: "Da", en: "Yes" },
          agency: { sr: "Da", en: "Yes" },
          unlimited: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Support", en: "Support" },
        values: {
          growth: { sr: "Standard", en: "Standard" },
          agency: { sr: "Slack + onboarding", en: "Slack + onboarding" },
          unlimited: { sr: "Priority", en: "Priority" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Srednja", en: "Medium" },
    description: {
      sr: "Povežete LinkedIn sendere, importujete listu (Clay, CSV, Sales Navigator), gradite sekvencu sa If Connected logikom i pokrenete kampanju. Odgovori stižu u unified inbox, možete delegirati VAs ili sales bez dodatne seat naplate.",
      en: "Connect LinkedIn senders, import a list (Clay, CSV, Sales Navigator), build a sequence with If Connected logic, and launch. Replies land in the unified inbox, delegate to VAs or reps with no extra seat charge.",
    },
  },
  pros: {
    sr: [
      "Najbolji UX za multi-sender LinkedIn skaliranje",
      "Fiksna cena za 50+ naloga (Agency), ~$20/sender",
      "Ne naplaćuje članove tima / klijente / VAs",
      "Odličan Clay + HubSpot ekosistem",
      "Brza podrška i aktivni GTM community",
    ],
    en: [
      "Best-in-class UX for multi-sender LinkedIn scaling",
      "Flat pricing for 50+ accounts (Agency), ~$20/sender",
      "No charge for teammates / clients / VAs",
      "Strong Clay + HubSpot ecosystem",
      "Fast support and active GTM community",
    ],
  },
  cons: {
    sr: [
      "Samo LinkedIn, nema native cold email kao Instantly",
      "Agency/Unlimited zahtevaju sopstvene proxije",
      "Ispod ~12 sendera per-seat alati mogu biti jeftiniji",
      "LinkedIn limiti i dalje važe (20-40 invite/dan po nalogu)",
      "Whitelabel i migration tek na višim planovima",
    ],
    en: [
      "LinkedIn only, no native cold email like Instantly",
      "Agency/Unlimited require your own proxies",
      "Below ~12 senders, per-seat tools can be cheaper",
      "LinkedIn limits still apply (20-40 invites/day per account)",
      "Whitelabel and migration only on higher tiers",
    ],
  },
  alternatives: [
    {
      slug: "expandi",
      name: "Expandi",
      description: {
        sr: "Cloud LinkedIn, po seat-u, 10+ kampanja.",
        en: "Cloud LinkedIn, per seat, 10+ campaigns.",
      },
      startingPrice: { sr: "od $99", en: "from $99" },
      trial: { sr: "7 dana", en: "7 days" },
      category: { sr: "LinkedIn outreach", en: "LinkedIn outreach" },
    },
    {
      slug: "lagrowthmachine",
      name: "La Growth Machine",
      description: {
        sr: "Multichannel (LinkedIn + email) u jednom flow-u.",
        en: "Multichannel (LinkedIn + email) in one flow.",
      },
      startingPrice: { sr: "od €60", en: "from €60" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "LinkedIn outreach", en: "LinkedIn outreach" },
    },
    {
      slug: "lemlist",
      name: "Lemlist",
      description: {
        sr: "Multichannel outreach sa jakom personalizacijom.",
        en: "Multichannel outreach with strong personalization.",
      },
      startingPrice: { sr: "od $55", en: "from $55" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
    {
      slug: "clay",
      name: "Clay",
      description: {
        sr: "Enrichment i orchestration pre HeyReach kampanje.",
        en: "Enrichment and orchestration before HeyReach campaigns.",
      },
      startingPrice: { sr: "od $134", en: "from $134" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "instantly",
      name: "Instantly",
      description: {
        sr: "Cold email nakon LinkedIn touchpoint-a.",
        en: "Cold email after LinkedIn touchpoints.",
      },
      startingPrice: { sr: "od $37", en: "from $37" },
      trial: { sr: "Besplatan start", en: "Free start" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko košta HeyReach?", en: "How much does HeyReach cost?" },
      answer: {
        sr: "Growth je $79/mes po LinkedIn senderu (jeftinije godišnje). Agency je $999/mes za 50 sendera. Unlimited je $1.999/mes za neograničene sendere. Korisnici tima su besplatni.",
        en: "Growth is $79/mo per LinkedIn sender (cheaper annually). Agency is $999/mo for 50 senders. Unlimited is $1,999/mo for unlimited senders. Team users are free.",
      },
    },
    {
      question: { sr: "Šta je sender?", en: "What is a sender?" },
      answer: {
        sr: "Sender (seat) je LinkedIn nalog koji povežete na organizaciju. HeyReach naplaćuje sendere, ne članove tima, VAs ili klijente koje onboardujete.",
        en: "A sender (seat) is a LinkedIn account you connect to your organization. HeyReach charges for senders, not teammates, VAs, or clients you onboard.",
      },
    },
    {
      question: { sr: "Da li ima besplatan trial?", en: "Is there a free trial?" },
      answer: {
        sr: "Da - 14 dana premium funkcija, bez kartice, sa do 3 LinkedIn sendera na Growth planu. Agency/Unlimited mogu dobiti do 30 dana na upit.",
        en: "Yes - 14 days of premium features, no card, with up to 3 LinkedIn senders on Growth. Agency/Unlimited can get up to 30 days on request.",
      },
    },
    {
      question: { sr: "Zašto izabrati HeyReach?", en: "Why choose HeyReach?" },
      answer: {
        sr: "Kada skalirate LinkedIn sa više naloga i želite jedan inbox, rotaciju sendera i agency whitelabel, bez plaćanja $79+ po nalogu kao kod per-account konkurenata.",
        en: "When you scale LinkedIn with multiple accounts and want one inbox, sender rotation, and agency whitelabel, without paying $79+ per account like per-seat competitors.",
      },
    },
    {
      question: {
        sr: "Da li treba Sales Navigator?",
        en: "Do you need Sales Navigator?",
      },
      answer: {
        sr: "Radi i sa free LinkedIn nalogom, ali Sales Navigator ili Recruiter preporučujemo za bolje targetiranje i export leadova.",
        en: "It works with free LinkedIn too, but Sales Navigator or Recruiter is recommended for better targeting and lead export.",
      },
    },
    {
      question: { sr: "Da li ima whitelabel?", en: "Does it offer whitelabel?" },
      answer: {
        sr: "Da, uključen na Agency planu (jedan brand). Unlimited nudi multi-brand whitelabel kao add-on za agencije sa više klijenata.",
        en: "Yes, included on Agency (one brand). Unlimited offers multi-brand whitelabel as an add-on for agencies with multiple clients.",
      },
    },
    {
      question: { sr: "Da li HeyReach ima API?", en: "Does HeyReach have an API?" },
      answer: {
        sr: "Da - API, webhooks i MCP server za integraciju sa Clay, HubSpot, Zapier i custom GTM workflow-ima.",
        en: "Yes - API, webhooks, and an MCP server for Clay, HubSpot, Zapier, and custom GTM workflows.",
      },
    },
    {
      question: {
        sr: "Koje su alternative HeyReach-u?",
        en: "What are HeyReach alternatives?",
      },
      answer: {
        sr: "Često se poredi sa Expandi, La Growth Machine, Dripify i Waalaxy. HeyReach je najjači za agencije sa mnogo sendera po flat fee modelu.",
        en: "Often compared to Expandi, La Growth Machine, Dripify, and Waalaxy. HeyReach is strongest for agencies with many senders on a flat-fee model.",
      },
    },
  ],
  integrations: {
    sr: [
      "HubSpot",
      "Clay",
      "Zapier",
      "Make",
      "Trigify",
      "RB2B",
      "API",
      "Webhooks",
      "MCP",
    ],
    en: [
      "HubSpot",
      "Clay",
      "Zapier",
      "Make",
      "Trigify",
      "RB2B",
      "API",
      "Webhooks",
      "MCP",
    ],
  },
};
