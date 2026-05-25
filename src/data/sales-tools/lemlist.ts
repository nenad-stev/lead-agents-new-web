import type { SalesTool } from "@/types/sales-tool";

export const lemlistTool: SalesTool = {
  slug: "lemlist",
  name: "Lemlist",
  logo: "/images/sales-tools/lemlist.png",
  tagline: {
    sr: "AI sales engagement platforma za konverziju idealnih kupaca",
    en: "AI-powered sales engagement platform for converting ideal buyers",
  },
  categoryId: "email-outreach",
  category: { sr: "Email outreach", en: "Email outreach" },
  categories: {
    sr: [
      "Multichannel outreach",
      "AI personalizacija",
      "Data enrichment",
      "Email deliverability",
      "Lead database",
      "Voice note prospecting",
    ],
    en: [
      "Multichannel outreach",
      "AI personalization",
      "Data enrichment",
      "Email deliverability",
      "Lead database",
      "Voice note prospecting",
    ],
  },
  websiteUrl: "https://www.lemlist.com",
  recommended: true,
  rating: { g2: 4.5, g2Reviews: 890 },
  overview: {
    sr: "Lemlist je sales engagement alat za automatizovan outreach preko emaila, LinkedIn-a, WhatsApp-a i poziva — sa personalizovanim multichannel kampanjama iz jedne platforme.",
    en: "Lemlist is a sales engagement tool that automates outreach across email, LinkedIn, WhatsApp, and calls — with personalized multichannel campaigns from one platform.",
  },
  overviewExtended: {
    sr: "Pomaže timovima da pronađu i obogate leadove, personalizuju poruke u velikom obimu i drže deliverability visokim. Ima native CRM integracije (HubSpot, Salesforce) i ugrađeno obogaćivanje podataka. Nije namenjen inbound lead management-u ili naprednoj marketing automatizaciji van outbound prodaje.",
    en: "It helps teams find and enrich leads, personalize messages at scale, and maintain strong deliverability. Native CRM integrations (HubSpot, Salesforce) and built-in enrichment are included. It is not built for inbound lead management or advanced marketing automation outside outbound sales.",
  },
  idealFor: {
    sr: [
      "Sales timovi",
      "Solo founderi",
      "Startapovi",
      "SMB kompanije",
      "Agencije",
    ],
    en: ["Sales teams", "Solo founders", "Startups", "SMBs", "Agencies"],
  },
  keyFeatures: {
    sr: [
      "Brzo pronalaženje kvalifikovanih leadova (450M+ baza)",
      "Automatsko obogaćivanje kontakata",
      "AI personalizacija outreach-a u velikom obimu",
      "Multichannel kampanje (email, LinkedIn, WhatsApp, pozivi)",
      "Email deliverability i warmup (Lemwarm)",
      "CRM integracije i API",
    ],
    en: [
      "Find qualified leads fast (450M+ lead database)",
      "Automatic contact enrichment",
      "AI-powered outreach personalization at scale",
      "Multichannel campaigns (email, LinkedIn, WhatsApp, calls)",
      "Email deliverability and warmup (Lemwarm)",
      "CRM integrations and API",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "$55 / mesec", en: "$55 / month" },
    },
    {
      label: { sr: "Naplata", en: "Billing" },
      value: { sr: "Po korisniku (seat)", en: "Per seat" },
    },
    {
      label: { sr: "G2 / Capterra", en: "G2 / Capterra" },
      value: { sr: "4.5 / 4.6", en: "4.5 / 4.6" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "14 dana", en: "14 days" },
    },
  ],
  pricing: {
    startingPrice: { sr: "$55 / mesec", en: "$55 / month" },
    billing: { sr: "Po korisniku (seat)", en: "Per seat" },
    trial: { sr: "14 dana (dostupan trial)", en: "14-day free trial" },
    plans: [
      {
        id: "email-pro",
        name: { sr: "Email Pro", en: "Email Pro" },
        price: { sr: "$55 / mesec", en: "$55 / month" },
        billingNote: { sr: "Po korisniku", en: "Per user" },
        highlights: {
          sr: [
            "3 email naloga po korisniku",
            "Neograničeni follow-up-i",
            "450M+ leadova",
            "1.000 enrichment kredita",
            "AI personalizacija",
          ],
          en: [
            "3 email accounts per user",
            "Unlimited follow-ups",
            "450M+ leads",
            "1,000 enrichment credits",
            "AI personalization",
          ],
        },
      },
      {
        id: "multichannel-expert",
        name: { sr: "Multichannel Expert", en: "Multichannel Expert" },
        price: { sr: "$79 / mesec", en: "$79 / month" },
        billingNote: { sr: "Po korisniku", en: "Per user" },
        highlights: {
          sr: [
            "5 email naloga po korisniku",
            "Multichannel follow-up-i",
            "1.500 enrichment kredita",
            "Pozivi u aplikaciji",
            "LinkedIn + WhatsApp",
          ],
          en: [
            "5 email accounts per user",
            "Multichannel follow-ups",
            "1,500 enrichment credits",
            "In-app calling",
            "LinkedIn + WhatsApp",
          ],
        },
      },
      {
        id: "enterprise",
        name: { sr: "Enterprise", en: "Enterprise" },
        price: { sr: "Kontakt prodaju", en: "Contact sales" },
        billingNote: { sr: "Min. 5 korisnika", en: "Min. 5 users" },
        highlights: {
          sr: [
            "5+ seatova",
            "2.500 enrichment kredita",
            "Napredni API pristup",
            "Dedicated manager",
            "SSO / SAML",
          ],
          en: [
            "5+ seats",
            "2,500 enrichment credits",
            "Advanced API access",
            "Assigned manager",
            "SSO / SAML",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "Email nalozi / korisnik", en: "Email accounts / user" },
        values: {
          "email-pro": { sr: "3", en: "3" },
          "multichannel-expert": { sr: "5", en: "5" },
          enterprise: { sr: "5", en: "5" },
        },
      },
      {
        feature: { sr: "LinkedIn + WhatsApp", en: "LinkedIn + WhatsApp" },
        values: {
          "email-pro": { sr: "Ne", en: "No" },
          "multichannel-expert": { sr: "Da", en: "Yes" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Enrichment krediti", en: "Enrichment credits" },
        values: {
          "email-pro": { sr: "1.000", en: "1,000" },
          "multichannel-expert": { sr: "1.500", en: "1,500" },
          enterprise: { sr: "2.500", en: "2,500" },
        },
      },
      {
        feature: { sr: "Pozivi u aplikaciji", en: "In-app calling" },
        values: {
          "email-pro": { sr: "Ne", en: "No" },
          "multichannel-expert": { sr: "Da", en: "Yes" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "SSO / SAML", en: "SSO / SAML" },
        values: {
          "email-pro": { sr: "Ne", en: "No" },
          "multichannel-expert": { sr: "Ne", en: "No" },
          enterprise: { sr: "Da", en: "Yes" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Napredna", en: "Advanced" },
    description: {
      sr: "Registracija, povezivanje kanala i kreiranje multichannel sekvenci — rezultati su mogući već za nekoliko dana zahvaljujući workflow-ima i Lemlist Academy resursima.",
      en: "Sign up, connect channels, and build multichannel sequences — you can see results within days thanks to smart workflows and Lemlist Academy resources.",
    },
  },
  pros: {
    sr: [
      "Sve-u-jednom: prospecting, personalizacija i outreach",
      "AI personalizacija i multichannel iz jedne platforme",
      "Ugrađeni deliverability alati (Lemwarm)",
      "450M+ leadova i enrichment u paketu",
      "Native CRM integracije i API",
    ],
    en: [
      "All-in-one prospecting, personalization, and outreach",
      "AI personalization and multichannel from one platform",
      "Built-in deliverability tools (Lemwarm)",
      "450M+ leads and enrichment included",
      "Native CRM integrations and API",
    ],
  },
  cons: {
    sr: [
      "Cena po seat-u brzo raste sa timom",
      "Nije za inbound lead management",
      "Naprednija marketing automatizacija van outbound-a",
      "Setup označen kao napredniji",
    ],
    en: [
      "Per-seat pricing scales quickly with team size",
      "Not built for inbound lead management",
      "Limited for advanced marketing automation beyond outbound",
      "Setup rated as more advanced",
    ],
  },
  alternatives: [
    {
      slug: "elevenlabs",
      name: "ElevenLabs",
      description: {
        sr: "AI glas za voice note korake u sekvenci.",
        en: "AI voice for voice note steps in sequences.",
      },
      startingPrice: { sr: "od $0", en: "from $0" },
      trial: { sr: "10k kredita free", en: "10k credits free" },
      category: { sr: "AI glas", en: "Voice AI" },
    },
    {
      slug: "instantly",
      name: "Instantly",
      description: {
        sr: "Cold email po volumenu — neograničeni inbox-ovi.",
        en: "Volume-based cold email — unlimited inboxes.",
      },
      startingPrice: { sr: "od $37", en: "from $37" },
      trial: { sr: "Besplatan start", en: "Free start" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
    {
      slug: "apollo",
      name: "Apollo",
      description: {
        sr: "Data-first platforma — baza + outreach.",
        en: "Data-first platform — database + outreach.",
      },
      startingPrice: { sr: "od $49", en: "from $49" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "attio",
      name: "Attio",
      description: {
        sr: "Moderni AI CRM za upravljanje pipeline-om.",
        en: "Modern AI CRM for pipeline management.",
      },
      startingPrice: { sr: "od $29", en: "from $29" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "CRM", en: "CRM" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko košta Lemlist?", en: "How much does Lemlist cost?" },
      answer: {
        sr: "Planovi počinju od $55/mesec po korisniku (Email Pro), $79/mesec (Multichannel Expert), plus Enterprise po dogovoru (min. 5 korisnika).",
        en: "Plans start at $55/month per user (Email Pro), $79/month (Multichannel Expert), plus custom Enterprise pricing (min. 5 users).",
      },
    },
    {
      question: { sr: "Da li Lemlist ima probni period?", en: "Does Lemlist offer a free trial?" },
      answer: {
        sr: "Da — dostupan je 14-dnevni besplatni trial i mogućnost zakazivanja personalizovanog demo poziva pre kupovine.",
        en: "Yes — a 14-day free trial is available, plus personalized demo bookings before you buy.",
      },
    },
    {
      question: { sr: "Zašto izabrati Lemlist?", en: "Why choose Lemlist?" },
      answer: {
        sr: "Nudi all-in-one prospecting sa AI personalizacijom, automatizovanim multichannel outreach-om i deliverability alatima za veće reply rate-ove.",
        en: "It offers all-in-one prospecting with AI personalization, automated multichannel outreach, and deliverability tools to boost reply rates.",
      },
    },
    {
      question: { sr: "Kako Lemlist radi?", en: "How does Lemlist work?" },
      answer: {
        sr: "Pronalazi i obogaćuje leadove, pokreće personalizovane kampanje preko više kanala i prati interakcije u jednom inbox-u radi maksimalnog uspeha outreach-a.",
        en: "It finds and enriches leads, runs personalized campaigns across multiple channels, and tracks interactions in one inbox to maximize outreach success.",
      },
    },
    {
      question: { sr: "Da li Lemlist ima API?", en: "Does Lemlist have an API?" },
      answer: {
        sr: "Da — API omogućava automatizaciju workflow-a, sinhronizaciju CRM podataka i integraciju sa drugim aplikacijama. Napredni API je na Enterprise planu.",
        en: "Yes — the API automates workflows, syncs CRM data, and integrates with other apps. Advanced API access is on the Enterprise plan.",
      },
    },
    {
      question: {
        sr: "Koje su alternative Lemlist-u?",
        en: "What are Lemlist alternatives?",
      },
      answer: {
        sr: "Česte alternative uključuju Instantly, Smartlead, Reply.io, Outreach, Salesloft i Mailshake — različiti modeli cena (npr. po volumenu slanja vs. po profilu).",
        en: "Common alternatives include Instantly, Smartlead, Reply.io, Outreach, Salesloft, and Mailshake — with different pricing models (e.g. sending volume vs. per profile).",
      },
    },
  ],
  integrations: {
    sr: ["HubSpot", "Salesforce", "Pipedrive", "Zapier", "Slack"],
    en: ["HubSpot", "Salesforce", "Pipedrive", "Zapier", "Slack"],
  },
};
