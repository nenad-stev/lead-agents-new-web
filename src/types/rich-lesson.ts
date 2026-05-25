import type { Locale } from "@/lib/i18n";
import type { LocalizedList, LocalizedText } from "@/types/playbook";

export type RichLessonMeta = {
  stage: LocalizedText;
  readingTime: LocalizedText;
  difficulty: LocalizedText;
  outcome: LocalizedText;
  recommendedTools: LocalizedText;
};

export type RichLessonHero = {
  eyebrow: LocalizedText;
  title: LocalizedText;
  paragraphs: LocalizedList;
  callout?: LocalizedText;
};

export type RichLessonTocItem = {
  id: string;
  title: LocalizedText;
};

export type RichTableRow = {
  cells: LocalizedText[];
};

export type RichTableBlock = {
  type: "table";
  id?: string;
  caption?: LocalizedText;
  headers: LocalizedText[];
  rows: RichTableRow[];
};

export type RichFrameworkStep = {
  step: number;
  title: LocalizedText;
  whatToDo: LocalizedText;
  whyItMatters: LocalizedText;
  example: LocalizedText;
  commonMistake: LocalizedText;
  tryThis: LocalizedText;
  highlight: LocalizedText;
};

export type RichProofCard = {
  title: LocalizedText;
  body: LocalizedText;
  sourceLabel: LocalizedText;
  sourceUrl: string;
};

export type RichToolCard = {
  name: string;
  slug?: string;
  /** Local path e.g. /images/sales-tools/notion.png when not on sales-tools hub */
  logo?: string;
  usedFor: LocalizedText;
  whyItFits: LocalizedText;
  alternative: LocalizedText;
};

export type RichPipelineFlowBlock = {
  type: "pipeline-flow";
  title?: LocalizedText;
  subtitle?: LocalizedText;
  stages: LocalizedText[];
};

export type RichStatRowBlock = {
  type: "stat-row";
  items: Array<{
    value: LocalizedText;
    label: LocalizedText;
    description?: LocalizedText;
  }>;
};

export type RichComparisonCardsBlock = {
  type: "comparison-cards";
  cards: Array<{
    title: LocalizedText;
    subtitle?: LocalizedText;
    items: LocalizedList;
    variant?: "muted" | "accent";
  }>;
};

export type RichIllustrationBlock = {
  type: "illustration";
  src: string;
  alt: LocalizedText;
  caption?: LocalizedText;
  credit?: LocalizedText;
  /** External link (e.g. live LinkedIn profile for reference screenshots) */
  href?: string;
  /** Default cover; use contain for UI screenshots */
  fit?: "cover" | "contain";
  /** CSS aspect-ratio value, e.g. "1024 / 749" */
  aspectRatio?: string;
};

export type RichZoneCard = {
  zone: LocalizedText;
  eyebrow?: LocalizedText;
  job: LocalizedText;
  doThis: LocalizedText;
  avoid?: LocalizedText;
};

export type RichZoneCardsBlock = {
  type: "zone-cards";
  title?: LocalizedText;
  subtitle?: LocalizedText;
  cards: RichZoneCard[];
};

export type RichVideoEmbed = {
  title: LocalizedText;
  channel: LocalizedText;
  description: LocalizedText;
  placementNote: LocalizedText;
  embedUrl: string;
  watchUrl: string;
};

export type RichFaqItem = {
  question: LocalizedText;
  answer: LocalizedText;
};

export type RichSourceItem = {
  title: LocalizedText;
  url: string;
};

export type RichRelatedLesson = {
  slug: string;
  title: LocalizedText;
  note?: LocalizedText;
};

export type RichLessonBlock =
  | { type: "paragraphs"; paragraphs: LocalizedList }
  | { type: "bullets"; items: LocalizedList }
  | { type: "callout"; variant?: "default" | "accent" | "tip"; text: LocalizedText }
  | RichTableBlock
  | { type: "framework-intro"; title: LocalizedText; description: LocalizedText }
  | { type: "framework-steps"; steps: RichFrameworkStep[] }
  | { type: "proof-grid"; cards: RichProofCard[] }
  | { type: "tool-grid"; tools: RichToolCard[] }
  | { type: "video"; video: RichVideoEmbed }
  | { type: "checklist"; title: LocalizedText; items: LocalizedList }
  | { type: "template"; title: LocalizedText; content: LocalizedText }
  | { type: "visual-suggestions"; items: Array<{ title: LocalizedText; placement: LocalizedText; description: LocalizedText }> }
  | { type: "workflow"; title: LocalizedText; steps: LocalizedList; highlight?: LocalizedText }
  | { type: "story"; title: LocalizedText; paragraphs: LocalizedList }
  | RichPipelineFlowBlock
  | RichStatRowBlock
  | RichComparisonCardsBlock
  | RichIllustrationBlock
  | RichZoneCardsBlock
  | {
      type: "section";
      id: string;
      title: LocalizedText;
      blocks: RichLessonBlock[];
    };

export type RichLessonContent = {
  meta: RichLessonMeta;
  hero: RichLessonHero;
  toc: RichLessonTocItem[];
  blocks: RichLessonBlock[];
  faq: RichFaqItem[];
  sources: RichSourceItem[];
  relatedLessons: {
    previous?: RichRelatedLesson;
    next?: RichRelatedLesson;
    related: RichRelatedLesson[];
  };
  cta: {
    title: LocalizedText;
    body: LocalizedText;
    primaryLabel: LocalizedText;
    secondaryLabel: LocalizedText;
  };
  seoKeywords: LocalizedList;
};
