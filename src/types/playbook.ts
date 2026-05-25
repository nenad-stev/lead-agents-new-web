import type { Locale } from "@/lib/i18n";
import type { RichLessonContent } from "@/types/rich-lesson";

export type LocalizedText = {
  sr: string;
  en: string;
};

export type LocalizedList = {
  sr: string[];
  en: string[];
};

export type PlaybookPhase = {
  id: string;
  order: number;
  title: LocalizedText;
  description: LocalizedText;
};

export type LessonSection = {
  id: string;
  title: LocalizedText;
  paragraphs: LocalizedList;
  bullets?: LocalizedList;
  gated?: boolean;
};

export type PlaybookRecommendedTool = {
  slug?: string;
  name: string;
  category: LocalizedText;
  description: LocalizedText;
};

export type PlaybookLesson = {
  slug: string;
  order: number;
  phaseId: string;
  estimatedReadTime: number;
  title: LocalizedText;
  description: LocalizedText;
  sections: LessonSection[];
  recommendedToolSlugs: string[];
  meta: {
    title: LocalizedText;
    description: LocalizedText;
    keywords?: LocalizedList;
  };
  /** Premium structured lesson layout (overrides simple sections when set). */
  richContent?: RichLessonContent;
};

export type PlaybookCluster = {
  slug: string;
  phases: PlaybookPhase[];
  lessons: PlaybookLesson[];
  recommendedTools: PlaybookRecommendedTool[];
  audience: LocalizedText;
  outcome: LocalizedText;
  relatedCaseStudySlugs: string[];
  meta: {
    title: LocalizedText;
    description: LocalizedText;
  };
  hero: {
    title: LocalizedText;
    subtitle: LocalizedText;
    primaryCta: LocalizedText;
    secondaryCta: LocalizedText;
  };
  intro: {
    title: LocalizedText;
    paragraphs: LocalizedList;
  };
  framework: {
    title: LocalizedText;
    description: LocalizedText;
  };
  roadmap: {
    title: LocalizedText;
    description: LocalizedText;
  };
  toolsSection: {
    title: LocalizedText;
    description: LocalizedText;
  };
  cta: {
    title: LocalizedText;
    text: LocalizedText;
    button: LocalizedText;
  };
  lessonCta: {
    title: LocalizedText;
    text: LocalizedText;
    button: LocalizedText;
  };
  labels: {
    growthPlaybook: LocalizedText;
    clusterName: LocalizedText;
    openLesson: LocalizedText;
    lessonNumber: LocalizedText;
    readTime: LocalizedText;
    phase: LocalizedText;
    previousLesson: LocalizedText;
    nextLesson: LocalizedText;
    backToPlaybook: LocalizedText;
    tableOfContents: LocalizedText;
    recommendedTools: LocalizedText;
    minutes: LocalizedText;
  };
};

export function t(text: LocalizedText, locale: Locale): string {
  return text[locale];
}

export function tList(text: LocalizedList, locale: Locale): string[] {
  return text[locale];
}
