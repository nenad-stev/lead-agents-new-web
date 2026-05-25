import { sharedClientResults } from "./shared-results";

import type { ServicePage } from "@/types/service";

export const founderLedGrowth: ServicePage = {
  slug: "founder-led-growth",
  meta: {
    title: {
      sr: "Founder Led Growth — Metodologija | Lead Agents",
      en: "Founder Led Growth — Methodology | Lead Agents",
    },
    description: {
      sr: "Skalirajte B2B prodaju kroz outbound, LinkedIn sadržaj i precizno targetirane LinkedIn Ads kampanje.",
      en: "Scale B2B sales through outbound, LinkedIn content, and precisely targeted LinkedIn Ads campaigns.",
    },
  },
  hero: {
    eyebrow: {
      sr: "Usluga",
      en: "Service",
    },
    title: {
      sr: "Founder Led Growth metodologija",
      en: "Founder Led Growth methodology",
    },
    description: {
      sr: "Pomažemo osnivačima da skaliraju B2B prodaju kroz personalizovane outbound kampanje, LinkedIn sadržaj koji gradi poverenje i precizno targetirane LinkedIn Ads kampanje.",
      en: "We help founders scale B2B sales through personalized outbound campaigns, trust-building LinkedIn content, and precisely targeted LinkedIn Ads.",
    },
    audience: {
      sr: "Za foundere koji žele brzo da rastu",
      en: "For founders who want to grow fast",
    },
    primaryCta: {
      sr: "Zakaži konsultaciju",
      en: "Book a consultation",
    },
    secondaryCta: {
      sr: "Pogledaj rezultate",
      en: "See results",
    },
  },
  steps: {
    title: {
      sr: "Metodologija u 3 koraka",
      en: "Methodology in 3 steps",
    },
    items: [
      {
        step: "01",
        title: {
          sr: "Outbound mašina",
          en: "Outbound engine",
        },
        description: {
          sr: "Pravimo personalizovane prospecting kampanje koje pune tvoj kalendar kvalifikovanim leadovima.",
          en: "We build personalized prospecting campaigns that fill your calendar with qualified leads.",
        },
      },
      {
        step: "02",
        title: {
          sr: "LinkedIn autoritet",
          en: "LinkedIn authority",
        },
        description: {
          sr: "Kreiramo i objavljujemo sadržaj koji edukuje idealne kupce i gradi poverenje koje vodi ka prodaji.",
          en: "We create and publish content that educates ideal buyers and builds trust that leads to sales.",
        },
      },
      {
        step: "03",
        title: {
          sr: "LinkedIn Ads (ABM)",
          en: "LinkedIn Ads (ABM)",
        },
        description: {
          sr: "Skaliramo kampanje tako što tačno targetujemo kompanije i pretvaramo hladne account-e u zainteresovane kupce.",
          en: "We scale campaigns by targeting specific companies and turning cold accounts into interested buyers.",
        },
      },
    ],
  },
  results: {
    title: {
      sr: "Rezultati koje smo ostvarili",
      en: "Results we have delivered",
    },
    items: sharedClientResults,
  },
  consultation: {
    title: {
      sr: "Šta dobijaš kada zakažeš sastanak",
      en: "What you get when you book a call",
    },
    subtitle: {
      sr: "Besplatna strategijska sesija prilagođena tvom biznisu — bez generičkih saveta.",
      en: "A free strategy session tailored to your business — no generic advice.",
    },
    items: [
      {
        title: { sr: "Analiza rasta", en: "Growth analysis" },
        description: {
          sr: "Analiziramo vaš trenutni pristup i identifikujemo konkretne prilike za unapređenje.",
          en: "We analyze your current approach and identify concrete opportunities for improvement.",
        },
      },
      {
        title: { sr: "Optimizacija ICP-a", en: "ICP optimization" },
        description: {
          sr: "Preciziramo targetiranje kako bismo se fokusirali na najvrednije potencijalne klijente.",
          en: "We refine targeting to focus on your most valuable potential clients.",
        },
      },
      {
        title: { sr: "Kontent strategija", en: "Content strategy" },
        description: {
          sr: "Pravimo personalizovanu mapu puta za founder-led sadržaj koji privlači idealne klijente.",
          en: "We build a personalized roadmap for founder-led content that attracts ideal clients.",
        },
      },
      {
        title: { sr: "Demonstracija sistema", en: "System walkthrough" },
        description: {
          sr: "Videćete kako naša automatizacija funkcioniše i kako se prilagođava vašem biznisu.",
          en: "You will see how our automation works and how it can be adapted to your business.",
        },
      },
    ],
    ctaTitle: {
      sr: "Zakažite besplatnu strategijsku sesiju",
      en: "Book your free strategy session",
    },
    ctaButton: {
      sr: "Zakaži sastanak",
      en: "Book a meeting",
    },
  },
};
