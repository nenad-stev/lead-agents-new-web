import type { SalesToolCategoryId } from "@/types/sales-tool";
import type { Locale } from "@/lib/i18n";

export const salesToolCategories: Array<{
  id: SalesToolCategoryId | "all";
  label: Record<Locale, string>;
  description: Record<Locale, string>;
}> = [
  {
    id: "all",
    label: { sr: "Svi alati", en: "All tools" },
    description: {
      sr: "Kompletan kurirani katalog",
      en: "Full curated catalog",
    },
  },
  {
    id: "crm",
    label: { sr: "CRM", en: "CRM" },
    description: {
      sr: "Upravljanje pipeline-om i klijentima",
      en: "Pipeline and customer management",
    },
  },
  {
    id: "prospecting",
    label: { sr: "Prospecting", en: "Prospecting" },
    description: {
      sr: "Pronalaženje i obogaćivanje leadova",
      en: "Finding and enriching leads",
    },
  },
  {
    id: "email-outreach",
    label: { sr: "Email outreach", en: "Email outreach" },
    description: {
      sr: "Cold email i sekvence",
      en: "Cold email and sequences",
    },
  },
  {
    id: "linkedin-outreach",
    label: { sr: "LinkedIn outreach", en: "LinkedIn outreach" },
    description: {
      sr: "LinkedIn automatizacija i multichannel sekvence",
      en: "LinkedIn automation and multichannel sequences",
    },
  },
  {
    id: "linkedin-content",
    label: { sr: "LinkedIn content", en: "LinkedIn content" },
    description: {
      sr: "Content, scheduling i analitika za founder-e",
      en: "Content, scheduling, and analytics for founders",
    },
  },
  {
    id: "landing-pages",
    label: { sr: "Landing stranice", en: "Landing pages" },
    description: {
      sr: "Stranice, CRO i konverzije",
      en: "Pages, CRO, and conversions",
    },
  },
  {
    id: "paid-ads",
    label: { sr: "Paid reklame", en: "Paid ads" },
    description: {
      sr: "AI kreativi, baneri i video oglasi",
      en: "AI creatives, banners, and video ads",
    },
  },
  {
    id: "voice-ai",
    label: { sr: "AI glas", en: "Voice AI" },
    description: {
      sr: "TTS, voice clone i konverzacijski agenti",
      en: "TTS, voice cloning, and conversational agents",
    },
  },
  {
    id: "analytics",
    label: { sr: "Analitika", en: "Analytics" },
    description: {
      sr: "Attribution, pipeline i GTM inteligencija",
      en: "Attribution, pipeline, and GTM intelligence",
    },
  },
  {
    id: "email-marketing",
    label: { sr: "Email marketing", en: "Email marketing" },
    description: {
      sr: "Newsletter, automation i kampanje",
      en: "Newsletters, automation, and campaigns",
    },
  },
  {
    id: "conversation-intelligence",
    label: { sr: "Conversation intelligence", en: "Conversation intelligence" },
    description: {
      sr: "Snimanje poziva, transkripcija i AI coaching",
      en: "Call recording, transcription, and AI coaching",
    },
  },
];
