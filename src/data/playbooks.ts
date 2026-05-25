import {
  FOUNDER_LED_GROWTH_SLUG,
  founderLedGrowthCluster,
  getFounderLedGrowthLesson,
} from "@/data/founderLedGrowth";
import { founderLedGrowthLessons } from "@/data/founderLedGrowthLessons";
import type { Locale } from "@/lib/i18n";
import type { PlaybookCluster, PlaybookLesson } from "@/types/playbook";

export const playbookClusters: PlaybookCluster[] = [founderLedGrowthCluster];

export function getPlaybookClusterBySlug(slug: string): PlaybookCluster | undefined {
  return playbookClusters.find((cluster) => cluster.slug === slug);
}

export function getAllPlaybookClusterSlugs(): string[] {
  return playbookClusters.map((cluster) => cluster.slug);
}

export function getPlaybookLesson(
  clusterSlug: string,
  lessonSlug: string,
): PlaybookLesson | undefined {
  if (clusterSlug === FOUNDER_LED_GROWTH_SLUG) {
    return getFounderLedGrowthLesson(lessonSlug);
  }
  return undefined;
}

export function getPlaybookLessonStaticParams(clusterSlug: string) {
  if (clusterSlug !== FOUNDER_LED_GROWTH_SLUG) return [];
  return founderLedGrowthLessons.map((lesson) => ({ lesson: lesson.slug }));
}

export function getPlaybookPaths(locale: Locale, clusterSlug: string) {
  const prefix = locale === "en" ? "/en" : "";
  const base = `${prefix}/growth-playbook/${clusterSlug}`;
  return {
    cluster: base,
    lesson: (lessonSlug: string) => `${base}/${lessonSlug}`,
    hub: `${prefix}/growth-playbook`,
  };
}
