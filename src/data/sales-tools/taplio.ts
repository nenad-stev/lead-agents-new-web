import type { SalesTool } from "@/types/sales-tool";

export const taplioTool: SalesTool = {
  slug: "taplio",
  name: "Taplio",
  logo: "/images/sales-tools/taplio.png",
  tagline: {
    sr: "All-in-one LinkedIn platforma za content, scheduling i rast brenda",
    en: "All-in-one LinkedIn platform for content, scheduling, and brand growth",
  },
  categoryId: "linkedin-content",
  category: { sr: "LinkedIn content", en: "LinkedIn content" },
  categories: {
    sr: [
      "AI pisanje postova",
      "Scheduling i kalendar",
      "Viralna inspiracija (5M+ postova)",
      "Carousel maker",
      "LinkedIn analitika",
      "Lead lista i engagement",
    ],
    en: [
      "AI post writing",
      "Scheduling and calendar",
      "Viral inspiration (5M+ posts)",
      "Carousel maker",
      "LinkedIn analytics",
      "Lead lists and engagement",
    ],
  },
  websiteUrl: "https://taplio.com",
  recommended: true,
  rating: { g2: 4.6, g2Reviews: 180 },
  overview: {
    sr: "Taplio je all-in-one LinkedIn alat za founder-e i B2B timove: AI pomaže da pišete postove, planirate objave, pratite performanse i gradite engagement — bez skakanja između Docs-a, Canva-e i native LinkedIn-a.",
    en: "Taplio is an all-in-one LinkedIn tool for founders and B2B teams: AI helps you write posts, plan publishing, track performance, and build engagement — without jumping between Docs, Canva, and native LinkedIn.",
  },
  overviewExtended: {
    sr: "AI je treniran na stotinama miliona LinkedIn postova, a biblioteka od 5M+ viralnih objava daje inspiraciju po niši. Starter plan ($39) je za scheduling i analitiku bez AI kredita; za AI pisanje i komentare treba Standard ($65) ili Pro ($199) sa lead bazom i naprednom automatizacijom. Nije CRM ni email outreach alat — Taplio je content engine koji se lepo kombinuje sa Clay, Attio i La Growth Machine u Founder-Led Growth stack-u.",
    en: "AI is trained on hundreds of millions of LinkedIn posts, and a library of 5M+ viral posts gives niche-specific inspiration. The Starter plan ($39) covers scheduling and analytics without AI credits; AI writing and commenting require Standard ($65) or Pro ($199) with a lead database and advanced automation. It is not a CRM or email outreach tool — Taplio is a content engine that pairs well with Clay, Attio, and La Growth Machine in a Founder-Led Growth stack.",
  },
  idealFor: {
    sr: [
      "Founderi koji grade personal brand na LinkedIn-u",
      "B2B konsultanti i agencije",
      "Content creator-i u niši",
      "Solopreneur-i koji objavljuju redovno",
      "Marketing timovi fokusirani na LinkedIn",
    ],
    en: [
      "Founders building a personal brand on LinkedIn",
      "B2B consultants and agencies",
      "Niche content creators",
      "Solopreneurs publishing consistently",
      "Marketing teams focused on LinkedIn",
    ],
  },
  keyFeatures: {
    sr: [
      "AI generator postova, hook-ova i ideja (Standard+)",
      "Scheduling i content kalendar",
      "Biblioteka 5M+ viralnih LinkedIn postova",
      "Carousel maker sa šablonima",
      "Analitika profila i rasta pratilaca",
      "Pro: lead lista (3M+), auto-reply, DM automatizacija",
    ],
    en: [
      "AI post, hook, and idea generator (Standard+)",
      "Scheduling and content calendar",
      "Library of 5M+ viral LinkedIn posts",
      "Carousel maker with templates",
      "Profile analytics and follower growth",
      "Pro: lead list (3M+), auto-reply, DM automation",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "$39 / mesec", en: "$39 / month" },
    },
    {
      label: { sr: "Naplata", en: "Billing" },
      value: { sr: "Po korisniku / planu", en: "Per user / plan" },
    },
    {
      label: { sr: "AI od", en: "AI from" },
      value: { sr: "Standard $65 / mesec", en: "Standard $65 / month" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "7 dana · pun Pro pristup", en: "7 days · full Pro access" },
    },
  ],
  pricing: {
    startingPrice: { sr: "od $39 / mesec", en: "from $39 / month" },
    billing: {
      sr: "Mesečno ili godišnje (~25% jeftinije)",
      en: "Monthly or annual (~25% cheaper)",
    },
    trial: {
      sr: "7 dana trial sa punim Pro pristupom",
      en: "7-day trial with full Pro access",
    },
    plans: [
      {
        id: "starter",
        name: { sr: "Starter", en: "Starter" },
        price: { sr: "$39 / mesec", en: "$39 / month" },
        billingNote: {
          sr: "~$32 / mesec uz godišnju naplatu",
          en: "~$32 / month with annual billing",
        },
        highlights: {
          sr: [
            "Scheduling i content kalendar",
            "5M+ viralnih postova (inspiracija)",
            "Post analitika",
            "10 repurpose kredita",
            "Auto-plug komentari",
            "Bez AI expert mode kredita",
          ],
          en: [
            "Scheduling and content calendar",
            "5M+ viral posts (inspiration)",
            "Post analytics",
            "10 repurpose credits",
            "Auto-plug comments",
            "No AI expert mode credits",
          ],
        },
      },
      {
        id: "standard",
        name: { sr: "Standard", en: "Standard" },
        price: { sr: "$65 / mesec", en: "$65 / month" },
        billingNote: {
          sr: "~$49 / mesec uz godišnju naplatu · minimum za AI pisanje",
          en: "~$49 / month with annual billing · minimum for AI writing",
        },
        highlights: {
          sr: [
            "250 AI kredita mesečno",
            "500 commenting kredita",
            "Lead list building",
            "Auto-reply na komentare",
            "Upravljanje kontaktima",
            "AI post ideje",
          ],
          en: [
            "250 AI credits per month",
            "500 commenting credits",
            "Lead list building",
            "Auto-reply to comments",
            "Contact management",
            "AI post ideas",
          ],
        },
      },
      {
        id: "pro",
        name: { sr: "Pro", en: "Pro" },
        price: { sr: "$199 / mesec", en: "$199 / month" },
        billingNote: {
          sr: "~$149 / mesec uz godišnju naplatu",
          en: "~$149 / month with annual billing",
        },
        highlights: {
          sr: [
            "Neograničeni AI krediti",
            "3M+ obogaćenih leadova",
            "Auto-DM topli leadovi",
            "Bulk DM publici",
            "Auto connection requests",
            "Maksimalni automation limiti",
          ],
          en: [
            "Unlimited AI credits",
            "3M+ enriched leads",
            "Auto-DM warm leads",
            "Bulk DM to audiences",
            "Auto connection requests",
            "Maximum automation limits",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "AI pisanje postova", en: "AI post writing" },
        values: {
          starter: { sr: "Ne", en: "No" },
          standard: { sr: "250 kredita/mes", en: "250 credits/mo" },
          pro: { sr: "Neograničeno", en: "Unlimited" },
        },
      },
      {
        feature: { sr: "Scheduling", en: "Scheduling" },
        values: {
          starter: { sr: "Da", en: "Yes" },
          standard: { sr: "Da", en: "Yes" },
          pro: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Viralna inspiracija", en: "Viral inspiration" },
        values: {
          starter: { sr: "5M+ postova", en: "5M+ posts" },
          standard: { sr: "5M+ postova", en: "5M+ posts" },
          pro: { sr: "5M+ postova", en: "5M+ posts" },
        },
      },
      {
        feature: { sr: "Lead baza", en: "Lead database" },
        values: {
          starter: { sr: "Ne", en: "No" },
          standard: { sr: "List building", en: "List building" },
          pro: { sr: "3M+ leadova", en: "3M+ leads" },
        },
      },
      {
        feature: { sr: "DM automatizacija", en: "DM automation" },
        values: {
          starter: { sr: "Ne", en: "No" },
          standard: { sr: "Ograničeno", en: "Limited" },
          pro: { sr: "Auto + bulk DM", en: "Auto + bulk DM" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Srednja", en: "Intermediate" },
    description: {
      sr: "Povežete LinkedIn nalog, istražite viralnu biblioteku, kreirate ili AI-generišete postove, zakažete u kalendar i pratite analitiku. Chrome ekstenzija (Taplio X) daje brze statistike direktno na LinkedIn-u.",
      en: "Connect your LinkedIn account, browse the viral library, create or AI-generate posts, schedule in the calendar, and track analytics. The Chrome extension (Taplio X) adds quick stats directly on LinkedIn.",
    },
  },
  pros: {
    sr: [
      "Kompletan LinkedIn content stack na jednom mestu",
      "Jaka inspiracija iz viralnih postova po niši",
      "AI ubrzava pisanje za founder-e (Standard+)",
      "7-dnevni trial sa punim Pro pristupom",
      "Dobar za Founder-Led Growth content engine fazu",
    ],
    en: [
      "Full LinkedIn content stack in one place",
      "Strong inspiration from viral posts by niche",
      "AI speeds up writing for founders (Standard+)",
      "7-day trial with full Pro access",
      "Strong fit for the Founder-Led Growth content engine phase",
    ],
  },
  cons: {
    sr: [
      "Starter ($39) nema AI kredite — samo scheduling",
      "Za ozbiljan AI workflow minimum je $65/mesec",
      "Fokus isključivo na LinkedIn (nema X/email u Taplio-u)",
      "Automation na Pro nivou zahteva pažnju prema LinkedIn pravilima",
      "Nije zamena za CRM ili cold email alate",
    ],
    en: [
      "Starter ($39) has no AI credits — scheduling only",
      "Serious AI workflow starts at $65/month minimum",
      "LinkedIn-only focus (no X/email inside Taplio)",
      "Pro automation requires care around LinkedIn policies",
      "Not a replacement for CRM or cold email tools",
    ],
  },
  alternatives: [
    {
      slug: "trigify",
      name: "Trigify",
      description: {
        sr: "Social listening i intent signali sa LinkedIn-a.",
        en: "Social listening and LinkedIn intent signals.",
      },
      startingPrice: { sr: "od $40", en: "from $40" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "lagrowthmachine",
      name: "La Growth Machine",
      description: {
        sr: "Multichannel outreach automatizacija (LinkedIn + email).",
        en: "Multichannel outreach automation (LinkedIn + email).",
      },
      startingPrice: { sr: "od €60", en: "from €60" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "LinkedIn outreach", en: "LinkedIn outreach" },
    },
    {
      slug: "lemlist",
      name: "Lemlist",
      description: {
        sr: "Multichannel sales engagement sa LinkedIn koracima.",
        en: "Multichannel sales engagement with LinkedIn steps.",
      },
      startingPrice: { sr: "od $55", en: "from $55" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko košta Taplio?", en: "How much does Taplio cost?" },
      answer: {
        sr: "Starter je $39/mesec (scheduling, bez AI kredita). Standard $65/mesec (250 AI + 500 commenting kredita). Pro $199/mesec (neograničeni AI, 3M+ leadova, DM automatizacija). Godišnja naplata je do ~25% jeftinija.",
        en: "Starter is $39/month (scheduling, no AI credits). Standard is $65/month (250 AI + 500 commenting credits). Pro is $199/month (unlimited AI, 3M+ leads, DM automation). Annual billing is up to ~25% cheaper.",
      },
    },
    {
      question: {
        sr: "Da li Starter plan ima AI?",
        en: "Does the Starter plan include AI?",
      },
      answer: {
        sr: "Ne — Starter uključuje scheduling, viralnu biblioteku i analitiku, ali nema AI expert mode kredite. Za AI pisanje postova treba Standard ili Pro.",
        en: "No — Starter includes scheduling, the viral library, and analytics, but no AI expert mode credits. AI post writing requires Standard or Pro.",
      },
    },
    {
      question: { sr: "Da li Taplio ima probni period?", en: "Does Taplio offer a trial?" },
      answer: {
        sr: "Da — 7 dana trial sa punim Pro pristupom (sve funkcije i neograničeni krediti tokom trial-a). Nakon toga birate plan; otkazivanje je u Settings → Billing.",
        en: "Yes — a 7-day trial with full Pro access (all features and unlimited credits during the trial). Then you pick a plan; cancel anytime in Settings → Billing.",
      },
    },
    {
      question: { sr: "Zašto izabrati Taplio?", en: "Why choose Taplio?" },
      answer: {
        sr: "Kada founder ili mali tim želi da sistematski objavljuje na LinkedIn-u — sa inspiracijom, AI pomoći, scheduling-om i analitikom — bez ručnog haosa. Idealno za Founder-Led Growth content fazu.",
        en: "When a founder or small team wants to publish systematically on LinkedIn — with inspiration, AI help, scheduling, and analytics — without manual chaos. Ideal for the Founder-Led Growth content phase.",
      },
    },
    {
      question: { sr: "Da li je Taplio siguran za LinkedIn?", en: "Is Taplio safe for LinkedIn?" },
      answer: {
        sr: "Taplio dizajnira automatizacije da prate normalne LinkedIn obrasce (objave, komentari, engagement). Ipak, agresivna automatizacija na Pro planu zahteva oprez — pratite LinkedIn limite i Terms of Service.",
        en: "Taplio designs automations to follow normal LinkedIn patterns (posts, comments, engagement). Still, aggressive Pro-level automation needs caution — respect LinkedIn limits and Terms of Service.",
      },
    },
    {
      question: {
        sr: "Koje su alternative Taplio-u?",
        en: "What are Taplio alternatives?",
      },
      answer: {
        sr: "Za čist scheduling: Buffer, Hypefury, Publer. Za outreach: La Growth Machine, Lemlist. Taplio je najjači kao LinkedIn-first content + AI platforma za personal brand.",
        en: "For pure scheduling: Buffer, Hypefury, Publer. For outreach: La Growth Machine, Lemlist. Taplio is strongest as a LinkedIn-first content + AI platform for personal brands.",
      },
    },
  ],
  integrations: {
    sr: [
      "LinkedIn (native)",
      "Taplio X Chrome ekstenzija",
      "Zapier",
      "API (Pro)",
      "HubSpot (workflow)",
      "Notion / Google Docs (content workflow)",
    ],
    en: [
      "LinkedIn (native)",
      "Taplio X Chrome extension",
      "Zapier",
      "API (Pro)",
      "HubSpot (workflow)",
      "Notion / Google Docs (content workflow)",
    ],
  },
};
