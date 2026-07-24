export type LgSlug = "male-firme" | "srednje-firme" | "enterprise";

export type LgLocalized = {
  sr: string;
  en: string;
};

export type LgCard = {
  title: LgLocalized;
  description?: LgLocalized;
};

export type LgStep = {
  title: LgLocalized;
  description: LgLocalized;
  items?: LgLocalized[];
};

export type LgTeamMember = {
  title: LgLocalized;
  responsibilities: LgLocalized[];
  person?: {
    name: string;
    image: string;
    role: LgLocalized;
  };
};

export type LgFaqItem = {
  question: LgLocalized;
  answer: LgLocalized;
};

export type LgComparisonRow = {
  label: LgLocalized;
  male: LgLocalized;
  mid: LgLocalized;
  enterprise: LgLocalized;
};

export type LeadGenerationPageContent = {
  slug: LgSlug;
  paths: { sr: string; en: string };
  seo: {
    title: LgLocalized;
    description: LgLocalized;
  };
  navLabel: LgLocalized;
  navDesc: LgLocalized;
  hero: {
    eyebrow: LgLocalized;
    title: LgLocalized;
    subtitle: LgLocalized;
    primaryCta: LgLocalized;
    secondaryCta: LgLocalized;
    secondaryHref: string;
  };
  audience: {
    title: LgLocalized;
    items: LgLocalized[];
  };
  highlight?: {
    title: LgLocalized;
    description: LgLocalized;
    bullets: LgLocalized[];
    closing: LgLocalized;
  };
  problems: {
    title: LgLocalized;
    cards: LgCard[];
  };
  approach: {
    title: LgLocalized;
    paragraphs: LgLocalized[];
    listTitle?: LgLocalized;
    listItems?: LgLocalized[];
    note?: LgLocalized;
  };
  process: {
    title: LgLocalized;
    steps: LgStep[];
  };
  auditDiagram?: {
    title: LgLocalized;
    description: LgLocalized;
    areas: LgStep[];
  };
  deliverables: {
    title: LgLocalized;
    items: LgLocalized[];
  };
  team: {
    title: LgLocalized;
    members: LgTeamMember[];
    note: LgLocalized;
  };
  collaboration?: {
    title: LgLocalized;
    intro?: LgLocalized;
    steps: LgStep[];
  };
  results: {
    title: LgLocalized;
    intro?: LgLocalized[];
    items: LgLocalized[];
  };
  proof: {
    title: LgLocalized;
    description: LgLocalized;
    stats: Array<{ value: string; label: LgLocalized }>;
  };
  faq: {
    title: LgLocalized;
    items: LgFaqItem[];
  };
  cta: {
    title: LgLocalized;
    description: LgLocalized;
    primaryCta: LgLocalized;
  };
  otherSolutions: {
    title: LgLocalized;
    description: LgLocalized;
  };
};
