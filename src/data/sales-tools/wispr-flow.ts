import type { SalesTool } from "@/types/sales-tool";

export const wisprFlowTool: SalesTool = {
  slug: "wispr-flow",
  name: "Wispr Flow",
  logo: "/images/sales-tools/wispr-flow.png",
  tagline: {
    sr: "Voice-to-text - 4× brže pisanje emailova, CRM nota i LinkedIn poruka",
    en: "Voice-to-text - 4× faster emails, CRM notes, and LinkedIn messages",
  },
  categoryId: "voice-ai",
  category: { sr: "AI glas", en: "Voice AI" },
  categories: {
    sr: [
      "Voice-to-text",
      "AI auto-edit teksta",
      "Mac / Windows / iPhone",
      "Personal dictionary",
      "Multilingual",
      "HIPAA (Enterprise)",
    ],
    en: [
      "Voice-to-text",
      "AI auto-edit text",
      "Mac / Windows / iPhone",
      "Personal dictionary",
      "Multilingual",
      "HIPAA (Enterprise)",
    ],
  },
  websiteUrl: "https://wisprflow.ai/",
  recommended: true,
  rating: { g2: 4.8, g2Reviews: 150 },
  overview: {
    sr: "Wispr Flow pretvara govor u doteran tekst u bilo kojoj aplikaciji - Gmail, Slack, HubSpot, Notion, sa AI koji uklanja „eee“, ispravlja gramatiku i pamti vaš stil. Idealno za founder-e koji pišu outreach i follow-up glasom.",
    en: "Wispr Flow turns speech into polished text in any app - Gmail, Slack, HubSpot, Notion, with AI that removes filler words, fixes grammar, and learns your style. Ideal for founders writing outreach and follow-ups by voice.",
  },
  overviewExtended: {
    sr: "Flow Basic **besplatno** (~2.000 reči/ned). Flow Pro **$15/mes** ($12 godišnje), unlimited dictation. Tim/Enterprise: kontakt sales (bulk, SSO, HIPAA). 14-dan Pro trial pri signup-u. Nije meeting recorder, koristite uz tl;dv za pozive; Wispr za brzo kucanje poruka između sastanaka.",
    en: "Flow Basic **free** (~2,000 words/week). Flow Pro **$15/mo** ($12 annual), unlimited dictation. Team/Enterprise: contact sales (bulk, SSO, HIPAA). 14-day Pro trial on signup. Not a meeting recorder, pair with tl;dv for calls; Wispr for fast typing between meetings.",
  },
  idealFor: {
    sr: [
      "Founderi i sales rep-ovi",
      "Konsultanti i agencije",
      "Customer support timovi",
      "Content / copywriter-i",
      "Timovi sa RSI / brzim tempom rada",
    ],
    en: [
      "Founders and sales reps",
      "Consultants and agencies",
      "Customer support teams",
      "Content / copywriters",
      "Teams with RSI / fast-paced work",
    ],
  },
  keyFeatures: {
    sr: [
      "Radi u svim app-ovima (system-wide)",
      "AI cleanup & personal dictionary",
      "100+ jezika",
      "Zero retention mode (privacy)",
      "Timski planovi & admin",
      "iPhone + desktop sync",
    ],
    en: [
      "Works in all apps (system-wide)",
      "AI cleanup & personal dictionary",
      "100+ languages",
      "Zero retention mode (privacy)",
      "Team plans & admin",
      "iPhone + desktop sync",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "$0 (Basic)", en: "$0 (Basic)" },
    },
    {
      label: { sr: "Pro", en: "Pro" },
      value: { sr: "$12-15 / mes", en: "$12-15 / mo" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "14 dana Pro", en: "14-day Pro" },
    },
    {
      label: { sr: "Platforme", en: "Platforms" },
      value: { sr: "Mac · Win · iOS", en: "Mac · Win · iOS" },
    },
  ],
  pricing: {
    startingPrice: { sr: "od $0 (Basic)", en: "from $0 (Basic)" },
    billing: {
      sr: "Po user-u · godišnje -20%",
      en: "Per user · 20% off annual",
    },
    trial: {
      sr: "14 dana Flow Pro · bez kartice",
      en: "14-day Flow Pro · no card",
    },
    plans: [
      {
        id: "basic",
        name: { sr: "Flow Basic", en: "Flow Basic" },
        price: { sr: "$0", en: "$0" },
        billingNote: {
          sr: "~2.000 reči / nedelja",
          en: "~2,000 words / week",
        },
        highlights: {
          sr: [
            "Besplatan tier (ne trial)",
            "Mac, Windows, iPhone",
            "Osnovni voice-to-text",
            "Privacy kontrole",
            "Dovoljno za test",
            "Upgrade na Pro bilo kada",
          ],
          en: [
            "Free tier (not a trial)",
            "Mac, Windows, iPhone",
            "Basic voice-to-text",
            "Privacy controls",
            "Enough to test",
            "Upgrade to Pro anytime",
          ],
        },
      },
      {
        id: "pro",
        name: { sr: "Flow Pro", en: "Flow Pro" },
        price: { sr: "$15 / mes", en: "$15 / mo" },
        billingNote: {
          sr: "$12/mes godišnje · unlimited",
          en: "$12/mo annual · unlimited",
        },
        highlights: {
          sr: [
            "Unlimited dictation",
            "AI auto-edits & tone",
            "Personal dictionary",
            "100+ jezika",
            "Prioritetna brzina",
            "Student 50% off (3 mes free)",
          ],
          en: [
            "Unlimited dictation",
            "AI auto-edits & tone",
            "Personal dictionary",
            "100+ languages",
            "Priority speed",
            "Student 50% off (3 mo free)",
          ],
        },
      },
      {
        id: "business",
        name: { sr: "Flow for Business", en: "Flow for Business" },
        price: { sr: "Custom", en: "Custom" },
        billingNote: {
          sr: "Bulk · SSO · HIPAA",
          en: "Bulk · SSO · HIPAA",
        },
        highlights: {
          sr: [
            "Centralizovano billing",
            "Admin & usage controls",
            "SSO (Enterprise)",
            "HIPAA compliance",
            "Bulk discount",
            "Dedicated support",
          ],
          en: [
            "Centralized billing",
            "Admin & usage controls",
            "SSO (Enterprise)",
            "HIPAA compliance",
            "Bulk discount",
            "Dedicated support",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "Dictation limit", en: "Dictation limit" },
        values: {
          basic: { sr: "~2k reči/ned", en: "~2k words/wk" },
          pro: { sr: "Unlimited", en: "Unlimited" },
          business: { sr: "Unlimited", en: "Unlimited" },
        },
      },
      {
        feature: { sr: "AI auto-edit", en: "AI auto-edit" },
        values: {
          basic: { sr: "Osnovno", en: "Basic" },
          pro: { sr: "Pun", en: "Full" },
          business: { sr: "Pun", en: "Full" },
        },
      },
      {
        feature: { sr: "Tim admin", en: "Team admin" },
        values: {
          basic: { sr: "Ne", en: "No" },
          pro: { sr: "Ne", en: "No" },
          business: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "HIPAA", en: "HIPAA" },
        values: {
          basic: { sr: "Ne", en: "No" },
          pro: { sr: "Ne", en: "No" },
          business: { sr: "Enterprise", en: "Enterprise" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Početni", en: "Beginner" },
    description: {
      sr: "Download za Mac/Windows/iPhone → 14-dan Pro trial → držite shortcut i govorite u bilo kom polju → dodajte personal dictionary (brend, ICP termini) → Pro za unlimited. Za sales: dictirajte cold email draft-ove i CRM notes između poziva.",
      en: "Download for Mac/Windows/iPhone → 14-day Pro trial → hold shortcut and speak in any field → add personal dictionary (brand, ICP terms) → Pro for unlimited. For sales: dictate cold email drafts and CRM notes between calls.",
    },
  },
  pros: {
    sr: [
      "4× brže od kucanja za outreach",
      "Radi u svim app-ovima",
      "Pravi free tier",
      "AI čisti tekst automatski",
      "14-dan Pro bez kartice",
    ],
    en: [
      "4× faster than typing for outreach",
      "Works in all apps",
      "Real free tier",
      "AI cleans text automatically",
      "14-day Pro without a card",
    ],
  },
  cons: {
    sr: [
      "Basic limit ~2k reči/nedelju",
      "Nije meeting intelligence",
      "Tim pricing nije javna",
      "Zavisi od mikrofona/okruženja",
      "Manje GTM-specifičan od tl;dv",
    ],
    en: [
      "Basic capped ~2k words/week",
      "Not meeting intelligence",
      "Team pricing not public",
      "Depends on mic/environment",
      "Less GTM-specific than tl;dv",
    ],
  },
  alternatives: [
    {
      slug: "elevenlabs",
      name: "ElevenLabs",
      description: {
        sr: "TTS & voice clone, druga namena.",
        en: "TTS & voice clone, different use case.",
      },
      startingPrice: { sr: "od $0", en: "from $0" },
      trial: { sr: "Free tier", en: "Free tier" },
      category: { sr: "AI glas", en: "Voice AI" },
    },
    {
      slug: "tldv",
      name: "tl;dv",
      description: {
        sr: "Meeting notes, komplement.",
        en: "Meeting notes, complement.",
      },
      startingPrice: { sr: "od $0", en: "from $0" },
      trial: { sr: "Free plan", en: "Free plan" },
      category: { sr: "Conversation intelligence", en: "Conversation intelligence" },
    },
    {
      slug: "instantly",
      name: "Instantly",
      description: {
        sr: "Email slanje, posle dictation-a.",
        en: "Email sending, after dictation.",
      },
      startingPrice: { sr: "od $37", en: "from $37" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
    {
      slug: "clay",
      name: "Clay",
      description: {
        sr: "Personalizacija pre emaila.",
        en: "Personalization before email.",
      },
      startingPrice: { sr: "od $149", en: "from $149" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko košta Wispr Flow?", en: "How much does Wispr Flow cost?" },
      answer: {
        sr: "Basic $0 (~2k reči/ned). Pro $15/mes ili $12/mes godišnje (~$144/god). Business/Enterprise, kontakt sales. Studenti: 3 meseca free + 50% off Pro.",
        en: "Basic $0 (~2k words/wk). Pro $15/mo or $12/mo annual (~$144/yr). Business/Enterprise, contact sales. Students: 3 months free + 50% off Pro.",
      },
    },
    {
      question: { sr: "Da li ima besplatan plan?", en: "Is there a free plan?" },
      answer: {
        sr: "Da - Flow Basic je trajno besplatan sa nedeljnim limitom. Plus 14-dnevni Flow Pro trial pri prvom signup-u, bez kartice.",
        en: "Yes - Flow Basic is permanently free with a weekly cap. Plus a 14-day Flow Pro trial on first signup, no card.",
      },
    },
    {
      question: { sr: "Zašto izabrati Wispr Flow?", en: "Why choose Wispr Flow?" },
      answer: {
        sr: "Kada pišete 50+ emailova/poruka dnevno i želite brzinu bez gubljenja kvaliteta teksta, posebno za founder-led outbound.",
        en: "When you write 50+ emails/messages daily and want speed without losing text quality, especially for founder-led outbound.",
      },
    },
    {
      question: { sr: "Wispr vs ElevenLabs?", en: "Wispr vs ElevenLabs?" },
      answer: {
        sr: "Wispr = govor → tekst (dictation). ElevenLabs = tekst → glas (TTS, voice agents). Različiti use case-ovi u GTM stack-u.",
        en: "Wispr = speech → text (dictation). ElevenLabs = text → voice (TTS, voice agents). Different use cases in the GTM stack.",
      },
    },
    {
      question: { sr: "Da li ima API?", en: "Does it have an API?" },
      answer: {
        sr: "Fokus je na desktop/mobile app, enterprise plan nudi compliance i integracije preko sales tima; nije developer-first API platforma.",
        en: "Focus is desktop/mobile app, enterprise plan offers compliance and integrations via sales; not a developer-first API platform.",
      },
    },
  ],
  integrations: {
    sr: [
      "Gmail",
      "Outlook",
      "Slack",
      "Notion",
      "HubSpot",
      "LinkedIn (browser)",
      "VS Code",
      "Bilo koja app",
    ],
    en: [
      "Gmail",
      "Outlook",
      "Slack",
      "Notion",
      "HubSpot",
      "LinkedIn (browser)",
      "VS Code",
      "Any app",
    ],
  },
};
