import type { SalesTool } from "@/types/sales-tool";

export const elevenlabsTool: SalesTool = {
  slug: "elevenlabs",
  name: "ElevenLabs",
  logo: "/images/sales-tools/elevenlabs.png",
  tagline: {
    sr: "AI glas - TTS, voice clone i konverzacijski agenti za outbound i podršku",
    en: "AI voice - TTS, voice cloning, and conversational agents for outbound and support",
  },
  categoryId: "voice-ai",
  category: { sr: "AI glas", en: "Voice AI" },
  categories: {
    sr: [
      "Text-to-speech",
      "Voice cloning",
      "Speech-to-text",
      "Konverzacijski AI agenti",
      "Dubbing & lokalizacija",
      "API za developere",
    ],
    en: [
      "Text-to-speech",
      "Voice cloning",
      "Speech-to-text",
      "Conversational AI agents",
      "Dubbing & localization",
      "Developer API",
    ],
  },
  websiteUrl: "https://elevenlabs.io/",
  recommended: true,
  rating: { g2: 4.7, g2Reviews: 180 },
  overview: {
    sr: "ElevenLabs pretvara tekst u prirodan, emotivan govor, plus kloniranje glasa, dubbing na 29+ jezika i low-latency agente za telefon ili chat. Krediti pokrivaju TTS, STT, muziku i sound effects.",
    en: "ElevenLabs turns text into natural, expressive speech, plus voice cloning, dubbing into 29+ languages, and low-latency agents for phone or chat. Credits cover TTS, STT, music, and sound effects.",
  },
  overviewExtended: {
    sr: "Za GTM: personalizovani voice note u LinkedIn/email sekvencama, AI demo glas za video (AdCreative/HeyGen), ili inbound/outbound voice agent preko API-ja. Free plan (10k kredita) za test; Creator ($22/mes, 121k kredita) za ozbiljan volume. Nije sequencer ni CRM, audio sloj u vašem stack-u, često preko n8n ili custom integracije.",
    en: "For GTM: personalized voice notes in LinkedIn/email sequences, AI demo voice for video (AdCreative/HeyGen), or inbound/outbound voice agents via API. Free plan (10k credits) to test; Creator ($22/mo, 121k credits) for real volume. Not a sequencer or CRM, an audio layer in your stack, often via n8n or custom integration.",
  },
  idealFor: {
    sr: [
      "SDR timovi sa voice note outbound-om",
      "Founderi koji skaliraju lični brend glasom",
      "Agencije (dubbing, reklame, podcast)",
      "Developeri koji grade voice agente",
      "Support timovi (IVR, chatbot glas)",
    ],
    en: [
      "SDR teams running voice note outbound",
      "Founders scaling personal brand with voice",
      "Agencies (dubbing, ads, podcasts)",
      "Developers building voice agents",
      "Support teams (IVR, chatbot voice)",
    ],
  },
  keyFeatures: {
    sr: [
      "Expressive TTS (Flash, Multilingual v2/v3)",
      "Instant & Professional voice clone",
      "ElevenAgents, konverzacijski agenti",
      "Scribe STT (bulk i realtime)",
      "Dubbing Studio & Voice Changer",
      "Studio projekti + komercijalna licenca (Starter+)",
    ],
    en: [
      "Expressive TTS (Flash, Multilingual v2/v3)",
      "Instant & Professional voice clone",
      "ElevenAgents, conversational agents",
      "Scribe STT (bulk and realtime)",
      "Dubbing Studio & Voice Changer",
      "Studio projects + commercial license (Starter+)",
    ],
  },
  quickFacts: [
    {
      label: { sr: "Cena od", en: "Starting from" },
      value: { sr: "$0 (10k kredita)", en: "$0 (10k credits)" },
    },
    {
      label: { sr: "Naplata", en: "Billing" },
      value: { sr: "Krediti po modelu", en: "Credits per model" },
    },
    {
      label: { sr: "Probni period", en: "Trial" },
      value: { sr: "Free plan · bez kartice", en: "Free plan · no card" },
    },
    {
      label: { sr: "Popularan plan", en: "Popular plan" },
      value: { sr: "Creator $22/mes", en: "Creator $22/mo" },
    },
  ],
  pricing: {
    startingPrice: { sr: "od $0 (Free)", en: "from $0 (Free)" },
    billing: {
      sr: "Mesečni krediti · rollover do 2 meseca",
      en: "Monthly credits · rollover up to 2 months",
    },
    trial: {
      sr: "Free - 10k kredita/mes",
      en: "Free - 10k credits/mo",
    },
    plans: [
      {
        id: "free",
        name: { sr: "Free", en: "Free" },
        price: { sr: "$0", en: "$0" },
        billingNote: { sr: "10k kredita · bez komercijalne licence", en: "10k credits · no commercial license" },
        highlights: {
          sr: [
            "TTS, STT, Sound Effects, Music",
            "Voice Design",
            "3 Studio projekta",
            "128 kbps audio",
            "Osnovni API pristup",
            "Zahteva atribuciju",
          ],
          en: [
            "TTS, STT, Sound Effects, Music",
            "Voice Design",
            "3 Studio projects",
            "128 kbps audio",
            "Basic API access",
            "Attribution required",
          ],
        },
      },
      {
        id: "starter",
        name: { sr: "Starter", en: "Starter" },
        price: { sr: "$6 / mes", en: "$6 / mo" },
        billingNote: { sr: "30k kredita", en: "30k credits" },
        highlights: {
          sr: [
            "Komercijalna licenca",
            "Instant Voice Cloning",
            "20 Studio projekata",
            "Dubbing Studio",
            "Muzika za komercijalnu upotrebu",
            "~30 min TTS uključeno",
          ],
          en: [
            "Commercial license",
            "Instant Voice Cloning",
            "20 Studio projects",
            "Dubbing Studio",
            "Music for commercial use",
            "~30 min TTS included",
          ],
        },
      },
      {
        id: "creator",
        name: { sr: "Creator", en: "Creator" },
        price: { sr: "$22 / mes", en: "$22 / mo" },
        billingNote: {
          sr: "121k kredita · prvi mesec -50%",
          en: "121k credits · first month 50% off",
        },
        highlights: {
          sr: [
            "Professional Voice Cloning",
            "192 kbps kvalitet",
            "~121 min TTS",
            "Usage-based dodatni krediti",
            "Najbolji odnos cene i volumena",
            "Za kreatore i mali GTM tim",
          ],
          en: [
            "Professional Voice Cloning",
            "192 kbps quality",
            "~121 min TTS",
            "Usage-based extra credits",
            "Best value for volume",
            "For creators and small GTM teams",
          ],
        },
      },
      {
        id: "pro",
        name: { sr: "Pro", en: "Pro" },
        price: { sr: "$99 / mes", en: "$99 / mo" },
        billingNote: { sr: "600k kredita", en: "600k credits" },
        highlights: {
          sr: [
            "44.1kHz PCM preko API-ja",
            "192 kbps output",
            "~600 min TTS",
            "Sve Creator funkcije",
            "Viši concurrency limiti",
            "Za produkcioni API volume",
          ],
          en: [
            "44.1kHz PCM via API",
            "192 kbps output",
            "~600 min TTS",
            "All Creator features",
            "Higher concurrency limits",
            "For production API volume",
          ],
        },
      },
      {
        id: "scale",
        name: { sr: "Scale", en: "Scale" },
        price: { sr: "$299 / mes", en: "$299 / mo" },
        billingNote: { sr: "1.8M kredita · 3 seat-a", en: "1.8M credits · 3 seats" },
        highlights: {
          sr: [
            "Team workspace",
            "3 Professional Voice Clone",
            "~1.800 min TTS",
            "Kolaboracija u timu",
            "Za agencije i rastuće timove",
            "Sve Pro funkcije",
          ],
          en: [
            "Team workspace",
            "3 Professional Voice Clones",
            "~1,800 min TTS",
            "Team collaboration",
            "For agencies and growing teams",
            "All Pro features",
          ],
        },
      },
      {
        id: "business",
        name: { sr: "Business", en: "Business" },
        price: { sr: "$990 / mes", en: "$990 / mo" },
        billingNote: { sr: "6M kredita · 10 seat-ova", en: "6M credits · 10 seats" },
        highlights: {
          sr: [
            "Low-latency TTS (~5¢/min)",
            "10 Professional Voice Clone",
            "~6.000 min TTS",
            "10 workspace korisnika",
            "Za voice agente u produkciji",
            "Sve Scale funkcije",
          ],
          en: [
            "Low-latency TTS (~5¢/min)",
            "10 Professional Voice Clones",
            "~6,000 min TTS",
            "10 workspace users",
            "For production voice agents",
            "All Scale features",
          ],
        },
      },
      {
        id: "enterprise",
        name: { sr: "Enterprise", en: "Enterprise" },
        price: { sr: "Custom", en: "Custom" },
        billingNote: { sr: "DPA, SLA, HIPAA BAA", en: "DPA, SLA, HIPAA BAA" },
        highlights: {
          sr: [
            "Custom krediti i seat-ovi",
            "Custom SSO",
            "Povećan concurrency",
            "Managed dubbing (Productions)",
            "Prioritetni support",
            "Popusti na velikom volumenu",
          ],
          en: [
            "Custom credits and seats",
            "Custom SSO",
            "Elevated concurrency",
            "Managed dubbing (Productions)",
            "Priority support",
            "Volume discounts",
          ],
        },
      },
    ],
    comparison: [
      {
        feature: { sr: "Mesečni krediti", en: "Monthly credits" },
        values: {
          free: { sr: "10k", en: "10k" },
          starter: { sr: "30k", en: "30k" },
          creator: { sr: "121k", en: "121k" },
          pro: { sr: "600k", en: "600k" },
          scale: { sr: "1.8M", en: "1.8M" },
          business: { sr: "6M", en: "6M" },
        },
      },
      {
        feature: { sr: "Komercijalna licenca", en: "Commercial license" },
        values: {
          free: { sr: "Ne", en: "No" },
          starter: { sr: "Da", en: "Yes" },
          creator: { sr: "Da", en: "Yes" },
          pro: { sr: "Da", en: "Yes" },
          scale: { sr: "Da", en: "Yes" },
          business: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Voice clone", en: "Voice clone" },
        values: {
          free: { sr: "Ne", en: "No" },
          starter: { sr: "Instant", en: "Instant" },
          creator: { sr: "Professional", en: "Professional" },
          pro: { sr: "Professional", en: "Professional" },
          scale: { sr: "3 Pro clone", en: "3 Pro clones" },
          business: { sr: "10 Pro clone", en: "10 Pro clones" },
        },
      },
      {
        feature: { sr: "Tim (seat-ovi)", en: "Team (seats)" },
        values: {
          free: { sr: "1", en: "1" },
          starter: { sr: "1", en: "1" },
          creator: { sr: "1", en: "1" },
          pro: { sr: "1", en: "1" },
          scale: { sr: "3", en: "3" },
          business: { sr: "10", en: "10" },
        },
      },
      {
        feature: { sr: "API PCM 44.1kHz", en: "API PCM 44.1kHz" },
        values: {
          free: { sr: "Ne", en: "No" },
          starter: { sr: "Ne", en: "No" },
          creator: { sr: "Ne", en: "No" },
          pro: { sr: "Da", en: "Yes" },
          scale: { sr: "Da", en: "Yes" },
          business: { sr: "Da", en: "Yes" },
        },
      },
      {
        feature: { sr: "Low-latency agenti", en: "Low-latency agents" },
        values: {
          free: { sr: "Ograničeno", en: "Limited" },
          starter: { sr: "Ograničeno", en: "Limited" },
          creator: { sr: "Ograničeno", en: "Limited" },
          pro: { sr: "Da", en: "Yes" },
          scale: { sr: "Da", en: "Yes" },
          business: { sr: "Pun pristup", en: "Full access" },
        },
      },
    ],
  },
  setup: {
    complexity: { sr: "Početni do srednji", en: "Beginner to intermediate" },
    description: {
      sr: "Registracija → Free plan → izaberite glas ili klonirajte (Starter+) → paste tekst u Studio ili pozovite API. Za outbound: generišete audio, export MP3, ubacite u Lemlist/Instantly ili n8n webhook. Za agente: ElevenAgents + Speech Engine (~$0.08/min). Startup grant: 33M karaktera besplatno 12 meseci.",
      en: "Sign up → Free plan → pick a voice or clone (Starter+) → paste text in Studio or call the API. For outbound: generate audio, export MP3, drop into Lemlist/Instantly or an n8n webhook. For agents: ElevenAgents + Speech Engine (~$0.08/min). Startup grant: 33M characters free for 12 months.",
    },
  },
  pros: {
    sr: [
      "Najrealističniji AI glasovi na tržištu",
      "Jedan vendor za TTS, STT, dubbing i agente",
      "Jasan kreditni model sa rollover-om",
      "Odličan API za custom GTM automatizaciju",
      "Free tier za ozbiljan POC",
    ],
    en: [
      "Among the most realistic AI voices on the market",
      "One vendor for TTS, STT, dubbing, and agents",
      "Clear credit model with rollover",
      "Strong API for custom GTM automation",
      "Free tier for a serious POC",
    ],
  },
  cons: {
    sr: [
      "Krediti zavise od modela (Flash je jeftiniji od Multilingual v2)",
      "Free plan nema komercijalnu licencu",
      "Voice agenti u produkciji traže Business+ za latency",
      "Nije gotov outbound alat, treba vam sequencer",
      "Professional clone zahteva viši plan",
    ],
    en: [
      "Credits vary by model (Flash is cheaper than Multilingual v2)",
      "Free plan has no commercial license",
      "Production voice agents often need Business+ for latency",
      "Not a ready-made outbound tool, you need a sequencer",
      "Professional clone requires a higher plan",
    ],
  },
  alternatives: [
    {
      slug: "lemlist",
      name: "Lemlist",
      description: {
        sr: "Multichannel outreach, voice note kao kanal.",
        en: "Multichannel outreach, voice notes as a channel.",
      },
      startingPrice: { sr: "od $39", en: "from $39" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
    {
      slug: "n8n",
      name: "n8n",
      description: {
        sr: "Orkestrira ElevenLabs API u GTM flow-u.",
        en: "Orchestrates ElevenLabs API in GTM flows.",
      },
      startingPrice: { sr: "od €20", en: "from €20" },
      trial: { sr: "Besplatno", en: "Free trial" },
      category: { sr: "Prospecting", en: "Prospecting" },
    },
    {
      slug: "adcreative",
      name: "AdCreative.ai",
      description: {
        sr: "Video oglasi, drugačiji format od čistog audio.",
        en: "Video ads, different format from pure audio.",
      },
      startingPrice: { sr: "od $39", en: "from $39" },
      trial: { sr: "7 dana", en: "7 days" },
      category: { sr: "Paid reklame", en: "Paid ads" },
    },
    {
      slug: "instantly",
      name: "Instantly",
      description: {
        sr: "Cold email, audio kao attachment u sekvenci.",
        en: "Cold email, audio as an attachment in sequences.",
      },
      startingPrice: { sr: "od $37", en: "from $37" },
      trial: { sr: "14 dana", en: "14 days" },
      category: { sr: "Email outreach", en: "Email outreach" },
    },
  ],
  faq: [
    {
      question: { sr: "Koliko košta ElevenLabs?", en: "How much does ElevenLabs cost?" },
      answer: {
        sr: "Free $0 (10k kredita), Starter $6 (30k), Creator $22 (121k), Pro $99 (600k), Scale $299 (1.8M, 3 seat-a), Business $990 (6M, 10 seat-ova). Enterprise je custom. API pay-as-you-go takođe postoji odvojeno od Studio planova.",
        en: "Free $0 (10k credits), Starter $6 (30k), Creator $22 (121k), Pro $99 (600k), Scale $299 (1.8M, 3 seats), Business $990 (6M, 10 seats). Enterprise is custom. API pay-as-you-go is also available separately from Studio plans.",
      },
    },
    {
      question: { sr: "Šta je kredit?", en: "What is a credit?" },
      answer: {
        sr: "Krediti se troše po generisanju, broj zavisi od modela (npr. Flash/Turbo je jeftiniji po karakteru od Multilingual v2). STT se naplaćuje po audio minutu, agenti po minutu poziva (~$0.08/min Speech Engine).",
        en: "Credits are spent per generation, cost depends on the model (e.g. Flash/Turbo is cheaper per character than Multilingual v2). STT bills per audio minute; agents bill per call minute (~$0.08/min Speech Engine).",
      },
    },
    {
      question: { sr: "Da li je besplatan?", en: "Is it free?" },
      answer: {
        sr: "Da - Free plan sa 10k kredita mesečno, bez kartice. Nema komercijalne licence i traži atribuciju. Za ozbiljan outbound uzmi Starter ($6) ili Creator ($22).",
        en: "Yes - Free plan with 10k credits per month, no card required. No commercial license and attribution is required. For serious outbound, use Starter ($6) or Creator ($22).",
      },
    },
    {
      question: { sr: "Zašto izabrati ElevenLabs?", en: "Why choose ElevenLabs?" },
      answer: {
        sr: "Kada vam treba najrealističniji glas za voice note prospecting, lokalizovan sadržaj ili voice agente, sa jednim API-jem umesto kombinovanja Murf + posebnog STT + posebnog telefonskog vendora.",
        en: "When you need the most realistic voice for voice note prospecting, localized content, or voice agents, with one API instead of combining Murf + a separate STT tool + a separate phone vendor.",
      },
    },
    {
      question: {
        sr: "Kako se uklapa u sales stack?",
        en: "How does it fit in a sales stack?",
      },
      answer: {
        sr: "Tipično: generišete personalizovani audio (ime, kompanija) → export → Lemlist/Instantly voice step ili LinkedIn attachment. Za inbound: ElevenAgents + CRM webhook. n8n povezuje enrichment (Clay) sa TTS generisanjem.",
        en: "Typical flow: generate personalized audio (name, company) → export → Lemlist/Instantly voice step or LinkedIn attachment. For inbound: ElevenAgents + CRM webhook. n8n connects enrichment (Clay) to TTS generation.",
      },
    },
    {
      question: {
        sr: "Koje su alternative?",
        en: "What are the alternatives?",
      },
      answer: {
        sr: "Murf AI, Play.ht, Synthesia/HeyGen (video+avatar), AutoCalls.ai (telefon agenti). ElevenLabs vodi po kvalitetu glasa i dubini API-ja; video-first alati su bolji kada vam treba lice, ne samo glas.",
        en: "Murf AI, Play.ht, Synthesia/HeyGen (video+avatar), AutoCalls.ai (phone agents). ElevenLabs leads on voice quality and API depth; video-first tools are better when you need a face, not just voice.",
      },
    },
    {
      question: { sr: "Da li ima API?", en: "Does it have an API?" },
      answer: {
        sr: "Da - TTS (Flash od $0.05/1k karaktera), STT (Scribe), Speech Engine za agente, dubbing, voice changer. Pro+ za PCM 44.1kHz. Pay-as-you-go bez pretplate je moguć.",
        en: "Yes - TTS (Flash from $0.05/1k chars), STT (Scribe), Speech Engine for agents, dubbing, voice changer. Pro+ for 44.1kHz PCM. Pay-as-you-go without a subscription is available.",
      },
    },
    {
      question: {
        sr: "Da li krediti prelaze u sledeći mesec?",
        en: "Do credits roll over?",
      },
      answer: {
        sr: "Da, na plaćenim planovima neiskorišćeni krediti mogu da se prenesu do dva meseca dok je pretplata aktivna i niste downgrade-ovali.",
        en: "Yes, on paid plans unused credits can roll over for up to two months while your subscription stays active and you have not downgraded.",
      },
    },
  ],
  integrations: {
    sr: [
      "REST API",
      "ElevenAgents",
      "n8n",
      "Zapier",
      "Make",
      "Lemlist",
      "HubSpot (preko automatizacije)",
      "Discord community",
    ],
    en: [
      "REST API",
      "ElevenAgents",
      "n8n",
      "Zapier",
      "Make",
      "Lemlist",
      "HubSpot (via automation)",
      "Discord community",
    ],
  },
};
