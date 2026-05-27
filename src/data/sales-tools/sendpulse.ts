import type { SalesTool } from "@/types/sales-tool";

export const sendpulseTool: SalesTool = {
  slug: "sendpulse",
  name: "SendPulse",
  logo: "/images/sales-tools/sendpulse.png",
  tagline: {
    sr: "All-in-one marketing, email, chatbot, CRM i automation bez kartice na startu",
    en: "All-in-one marketing, email, chatbot, CRM, and automation with no card to start",
  },
  categoryId: "email-marketing",
  category: { sr: "Email marketing", en: "Email marketing" },
  categories: {
    sr: [
      "Email kampanje",
      "Marketing automation",
      "Chatbot (3 besplatna)",
      "Ugrađeni CRM",
      "Landing pages",
      "Pay-as-you-go opcija",
    ],
    en: [
      "Email campaigns",
      "Marketing automation",
      "Chatbot (3 free)",
      "Built-in CRM",
      "Landing pages",
      "Pay-as-you-go option",
    ],
  },
  websiteUrl: "https://sendpulse.com/",
  recommended: true,
  rating: { g2: 4.6, g2Reviews: 280 },
  overview: {
    sr: "SendPulse je marketing platforma: email (15k besplatnih/mes), chatbotovi, CRM, landing stranice i automation flow-ovi, za timove koji žele nurture, newsletter i lead gen bez odmah plaćanja pretplate.",
    en: "SendPulse is a marketing platform: email (15k free/mo), chatbots, CRM, landing pages, and automation flows, for teams that want nurture, newsletters, and lead gen without paying upfront.",
  },
  overviewExtended: {
    sr: "Free plan: do 500 subscribera, 15k emailova/mes, 3 sender adrese. Standard od **~$8/mes** (godišnje, 500 subs), unlimited emailovi. Pro **~$10/mes**, dynamic segmentacija, 10 user-a. Nije cold outreach alat kao Instantly, koristite za marketing liste, onboarding sekvence i chat na sajtu. Pay-as-you-go za povremene kampanje.",
    en: "Free plan: up to 500 subscribers, 15k emails/mo, 3 sender addresses. Standard from **~$8/mo** (annual, 500 subs), unlimited emails. Pro **~$10/mo**, dynamic segmentation, 10 users. Not a cold outreach tool like Instantly, use for marketing lists, onboarding sequences, and on-site chat. Pay-as-you-go for occasional sends.",
  },
  idealFor: {
    sr: [
      "Mali biznis i indie projekti",
      "E-commerce i online kursevi",
      "Marketing timovi sa ograničenim budžetom",
      "Timovi koji žele CRM + email u jednom",
      "Kompanije sa EU/tržištem (multi-language support)",
    ],
    en: [
      "Small business and indie projects",
      "E-commerce and online courses",
      "Marketing teams on a tight budget",
      "Teams wanting CRM + email in one tool",
      "Companies with EU markets (multilingual support)",
    ],
  },
  keyFeatures: {
    sr: [
      "Drag-and-drop email builder (140+ šablona)",
      "Automation flows (do 5 free)",
      "Chatbot builder (WhatsApp, Telegram…)",
      "CRM pipeline u platformi",
      "A/B test (Standard+)",
      "Web push & SMS (add-on)",
    ],
    en: [
      "Drag-and-drop email builder (140+ templates)",
      "Automation flows (up to 5 on free)",
      "Chatbot builder (WhatsApp, Telegram…)",
      "CRM pipeline in-platform",
      "A/B testing (Standard+)",
      "Web push & SMS (add-on)",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "$0 (Free)", en: "$0 (Free)" },
    },
    {
      label: { sr: "Standard (god.)", en: "Standard (annual)" },
      value: { sr: "~$8 / mes", en: "~$8 / mo" },
    },
    {
      label: { sr: "Free email limit", en: "Free email limit" },
      value: { sr: "15k / mesec", en: "15k / month" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "Free plan · bez kartice", en: "Free plan · no card" },
    },
  ],
  pricing: {
    startingPrice: { sr: "od $0 (Free)", en: "from $0 (Free)" },
    billing: {
      sr: "Po broju subscribera · PAYG opcija",
      en: "By subscriber count · PAYG option",
    },
    trial: {
      sr: "Free plan, bez kartice",
      en: "Free plan, no card required",
    },
    plans: [
      {
        id: "free",
        name: { sr: "Free", en: "Free" },
        price: { sr: "$0", en: "$0" },
        billingNote: { sr: "Do 500 subs · 15k email/mes", en: "Up to 500 subs · 15k emails/mo" },
        highlights: {
          sr: [
            "15.000 emailova mesečno",
            "3 chatbot-a besplatno",
            "Osnovni automation (5 flow)",
            "3 sender email adrese",
            "Subscription forme",
            "SendPulse branding",
          ],
          en: [
            "15,000 emails per month",
            "3 free chatbots",
            "Basic automation (5 flows)",
            "3 sender email addresses",
            "Subscription forms",
            "SendPulse branding",
          ],
        },
      },
      {
        id: "standard",
        name: { sr: "Standard", en: "Standard" },
        price: { sr: "~$8 / mes", en: "~$8 / mo" },
        billingNote: {
          sr: "Godišnje · od 500 subs",
          en: "Annual · from 500 subs",
        },
        highlights: {
          sr: [
            "Unlimited emailovi",
            "A/B test subject & content",
            "3 user-a po nalogu",
            "10 automation flow-ova",
            "Bez SendPulse branding-a",
            "Scheduled sending",
          ],
          en: [
            "Unlimited emails",
            "A/B test subject & content",
            "3 users per account",
            "10 automation flows",
            "No SendPulse branding",
            "Scheduled sending",
          ],
        },
      },
      {
        id: "pro",
        name: { sr: "Pro", en: "Pro" },
        price: { sr: "~$10 / mes", en: "~$10 / mo" },
        billingNote: { sr: "Godišnje · dynamic segments", en: "Annual · dynamic segments" },
        highlights: {
          sr: [
            "Dynamic segmentacija",
            "Email verification (100/mes)",
            "10 user-a",
            "50 automation flow-ova",
            "Re-engagement emails",
            "Personalizovan onboarding",
          ],
          en: [
            "Dynamic segmentation",
            "Email verification (100/mo)",
            "10 users",
            "50 automation flows",
            "Re-engagement emails",
            "Personalized onboarding",
          ],
        },
      },
      {
        id: "enterprise",
        name: { sr: "Enterprise", en: "Enterprise" },
        price: { sr: "Custom", en: "Custom" },
        billingNote: { sr: "Min 2.500 kontakata", en: "Min 2,500 contacts" },
        highlights: {
          sr: [
            "Unlimited senders & flows",
            "Unlimited users",
            "Full A/B suite",
            "Dedicated support",
            "VIP plan 5M+ subs",
            "Custom bundle builder",
          ],
          en: [
            "Unlimited senders & flows",
            "Unlimited users",
            "Full A/B suite",
            "Dedicated support",
            "VIP plan 5M+ subs",
            "Custom bundle builder",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "Emailovi / mes", en: "Emails / month" },
        values: {
          free: { sr: "15k", en: "15k" },
          standard: { sr: "Unlimited", en: "Unlimited" },
          pro: { sr: "Unlimited", en: "Unlimited" },
          enterprise: { sr: "Unlimited", en: "Unlimited" },
        },
      },
      {
        feature: { sr: "Subscriber limit", en: "Subscriber limit" },
        values: {
          free: { sr: "500", en: "500" },
          standard: { sr: "Po tier-u", en: "By tier" },
          pro: { sr: "Po tier-u", en: "By tier" },
          enterprise: { sr: "2.500+", en: "2,500+" },
        },
      },
      {
        feature: { sr: "Automation flows", en: "Automation flows" },
        values: {
          free: { sr: "5", en: "5" },
          standard: { sr: "10", en: "10" },
          pro: { sr: "50", en: "50" },
          enterprise: { sr: "Unlimited", en: "Unlimited" },
        },
      },
      {
        feature: { sr: "CRM uključen", en: "CRM included" },
        values: {
          free: { sr: "Da", en: "Yes" },
          standard: { sr: "Da", en: "Yes" },
          pro: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "A/B test", en: "A/B test" },
        values: {
          free: { sr: "Ne", en: "No" },
          standard: { sr: "Da", en: "Yes" },
          pro: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Full suite", en: "Full suite" },
        },
      },
      {
        feature: { sr: "Branding uklonjen", en: "Branding removed" },
        values: {
          free: { sr: "Ne", en: "No" },
          standard: { sr: "Da", en: "Yes" },
          pro: { sr: "Da", en: "Yes" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Početni", en: "Beginner" },
    description: {
      sr: "Registracija → import liste ili forme na sajtu → prvi email ili automation → povežite CRM pipeline za sales follow-up. Za e-commerce: Shopify integracija. Cena raste sa brojem subscribera, proverite kalkulator pre upgrade-a.",
      en: "Sign up → import list or site forms → first email or automation → connect CRM pipeline for sales follow-up. For e-commerce: Shopify integration. Price scales with subscribers, check the calculator before upgrading.",
    },
  },
  pros: {
    sr: [
      "Velikodušan free tier (15k emailova)",
      "Sve-u-jednom bez dodatnih alata",
      "Jednostavan za početnike",
      "Chatbot + email + CRM",
      "Pay-as-you-go za retke kampanje",
    ],
    en: [
      "Generous free tier (15k emails)",
      "All-in-one without extra tools",
      "Easy for beginners",
      "Chatbot + email + CRM",
      "Pay-as-you-go for rare sends",
    ],
  },
  cons: {
    sr: [
      "Nije za cold email deliverability stack",
      "Cena skalira sa listom",
      "Manje GTM-native od HubSpot-a",
      "Enterprise od 2.500+ kontakata",
      "Nije zamena za Instantly outbound",
    ],
    en: [
      "Not built for cold email deliverability stacks",
      "Price scales with list size",
      "Less GTM-native than HubSpot",
      "Enterprise from 2,500+ contacts",
      "Not a replacement for Instantly outbound",
    ],
  },
  alternatives: [
    {
      slug: "hubspot",
      name: "HubSpot",
      description: {
        sr: "Full GTM CRM + marketing hub.",
        en: "Full GTM CRM + marketing hub.",
      },
      startingPrice: { sr: "od $0", en: "from $0" },
      trial: { sr: "Free CRM", en: "Free CRM" },
      category: { sr: "CRM", en: "CRM" },
    },
    {
      slug: "instantly",
      name: "Instantly",
      description: {
        sr: "Cold email, druga namena.",
        en: "Cold email, different use case.",
      },
      startingPrice: { sr: "od $37", en: "from $37" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
    {
      slug: "lemlist",
      name: "Lemlist",
      description: {
        sr: "Multichannel outreach sekvence.",
        en: "Multichannel outreach sequences.",
      },
      startingPrice: { sr: "od $55", en: "from $55" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
    {
      slug: "unbounce",
      name: "Unbounce",
      description: {
        sr: "Landing pages, fokus na CRO.",
        en: "Landing pages - CRO focus.",
      },
      startingPrice: { sr: "od $29", en: "from $29" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Landing stranice", en: "Landing pages" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko košta SendPulse?", en: "How much does SendPulse cost?" },
      answer: {
        sr: "Free $0 (500 subs, 15k email/mes). Standard ~$8/mes godišnje (500 subs, unlimited email). Pro ~$10/mes. Enterprise custom (min 2.500 kontakata). Pay-as-you-go po broju poslatih emailova (važe 1 godinu).",
        en: "Free $0 (500 subs, 15k emails/mo). Standard ~$8/mo annual (500 subs, unlimited email). Pro ~$10/mo. Enterprise custom (min 2,500 contacts). Pay-as-you-go by emails sent (valid 1 year).",
      },
    },
    {
      question: {
        sr: "Da li je za cold outreach?",
        en: "Is it for cold outreach?",
      },
      answer: {
        sr: "Ne - SendPulse je opt-in marketing (newsletter, nurture, automation). Za cold email koristite Instantly/Smartlead; SendPulse za liste koje ste legalno prikupili.",
        en: "No - SendPulse is opt-in marketing (newsletter, nurture, automation). For cold email use Instantly/Smartlead; SendPulse for lists you collected legally.",
      },
    },
    {
      question: { sr: "Zašto izabrati SendPulse?", en: "Why choose SendPulse?" },
      answer: {
        sr: "Kada vam treba jeftin start sa email + chatbot + CRM bez HubSpot kompleksnosti, posebno za SMB, kurseve i e-commerce nurture.",
        en: "When you need a cheap start with email + chatbot + CRM without HubSpot complexity, especially for SMB, courses, and e-commerce nurture.",
      },
    },
    {
      question: { sr: "Da li ima besplatan plan?", en: "Is there a free plan?" },
      answer: {
        sr: "Da - Free plan bez kartice: 15k emailova, 500 subscribera, 3 chatbot-a, osnovni automation. Dovoljno za test pre plaćenog plana.",
        en: "Yes - Free plan, no card: 15k emails, 500 subscribers, 3 chatbots, basic automation. Enough to test before a paid plan.",
      },
    },
    {
      question: { sr: "Da li ima API?", en: "Does it have an API?" },
      answer: {
        sr: "Da - API i webhooks na Pro+ planovima za integracije (Zapier, Make, Shopify, WordPress).",
        en: "Yes - API and webhooks on Pro+ plans for integrations (Zapier, Make, Shopify, WordPress).",
      },
    },
  ],
  integrations: {
    sr: [
      "Zapier",
      "Make",
      "Shopify",
      "WordPress",
      "HubSpot",
      "Facebook Messenger",
      "WhatsApp",
      "Telegram",
    ],
    en: [
      "Zapier",
      "Make",
      "Shopify",
      "WordPress",
      "HubSpot",
      "Facebook Messenger",
      "WhatsApp",
      "Telegram",
    ],
  },
};
