import type { Locale } from "@/lib/i18n";

export type LocalizedText = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;

export type SalesToolPlan = {
  id: string;
  name: LocalizedText;
  price: LocalizedText;
  billingNote: LocalizedText;
  highlights: LocalizedList;
};

export type SalesToolFeatureRow = {
  feature: LocalizedText;
  values: Record<string, LocalizedText>;
};

export type SalesToolAlternative = {
  slug: string;
  name: string;
  description: LocalizedText;
  startingPrice: LocalizedText;
  trial: LocalizedText;
  category: LocalizedText;
};

export type SalesToolFaq = {
  question: LocalizedText;
  answer: LocalizedText;
};

export type SalesToolCategoryId =
  | "crm"
  | "prospecting"
  | "email-outreach"
  | "linkedin-outreach"
  | "linkedin-content"
  | "landing-pages"
  | "paid-ads"
  | "voice-ai"
  | "analytics"
  | "email-marketing"
  | "conversation-intelligence";

export type SalesTool = {
  slug: string;
  name: string;
  logo: string;
  tagline: LocalizedText;
  categoryId: SalesToolCategoryId;
  category: LocalizedText;
  categories: LocalizedList;
  websiteUrl: string;
  recommended?: boolean;
  rating?: {
    g2: number;
    g2Reviews: number;
  };
  overview: LocalizedText;
  overviewExtended?: LocalizedText;
  idealFor: LocalizedList;
  keyFeatures: LocalizedList;
  quickFacts: Array<{
    label: LocalizedText;
    value: LocalizedText;
  }>;
  pricing: {
    startingPrice: LocalizedText;
    billing: LocalizedText;
    trial: LocalizedText;
    plans: SalesToolPlan[];
    comparison: SalesToolFeatureRow[];
  };
  setup: {
    complexity: LocalizedText;
    description: LocalizedText;
  };
  pros: LocalizedList;
  cons: LocalizedList;
  alternatives: SalesToolAlternative[];
  faq: SalesToolFaq[];
  integrations: LocalizedList;
};
