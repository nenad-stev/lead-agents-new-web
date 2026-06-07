import { sharedClientResults } from "./shared-results";

import type { ServicePage } from "@/types/service";

export const founderLedGrowth: ServicePage = {
  slug: "founder-led-growth",
  meta: {
    title: {
      sr: "Founder Led Growth - Metodologija | Lead Agents",
      en: "Founder Led Growth - Methodology | Lead Agents",
    },
    description: {
      sr: "Operativni B2B revenue sistem: ICP, outreach + content paralelno, engagement, CRM, buying signali i LinkedIn Ads koji skaliraju ono što radi.",
      en: "An operational B2B revenue system: ICP, outreach + content in parallel, engagement, CRM, buying signals, and LinkedIn Ads that scale what works.",
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
      sr: "Pomažemo osnivačima da implementiraju ceo Founder-Led Growth sistem: ICP i profil, outreach + content paralelno, engagement, CRM, buying signali i ads koji skaliraju organski rezultate.",
      en: "We help founders implement the full Founder-Led Growth system: ICP and profile, outreach + content in parallel, engagement, CRM, buying signals, and ads that scale organic results.",
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
      sr: "Tri stuba jednog revenue sistema",
      en: "Three pillars of one revenue system",
    },
    items: [
      {
        step: "01",
        title: {
          sr: "Outbound mašina",
          en: "Outbound engine",
        },
        description: {
          sr: "ICP, profil i personalizovan outreach koji validira ponudu i širi mrežu, paralelno sa content-om.",
          en: "ICP, profile, and personalized outreach that validates your offer and expands the network, in parallel with content.",
        },
      },
      {
        step: "02",
        title: {
          sr: "LinkedIn autoritet",
          en: "LinkedIn authority",
        },
        description: {
          sr: "Edukativni content i engagement koji grade poverenje dok outreach radi, plus CRM koji prati signale.",
          en: "Educational content and engagement that build trust while outreach runs, plus CRM that tracks signals.",
        },
      },
      {
        step: "03",
        title: {
          sr: "LinkedIn Ads (ABM)",
          en: "LinkedIn Ads (ABM)",
        },
        description: {
          sr: "Thought Leader Ads i ABM koji pojačavaju postove sa ICP engagement-om i pokreću topliji outreach na signale.",
          en: "Thought Leader Ads and ABM that amplify posts with ICP engagement and trigger warmer outreach on signals.",
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
      sr: "Besplatna strategijska sesija prilagođena tvom biznisu, bez generičkih saveta.",
      en: "A free strategy session tailored to your business, no generic advice.",
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
