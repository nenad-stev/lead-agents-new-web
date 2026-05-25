import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PlaybookLessonPage } from "@/components/playbook/PlaybookLessonPage";
import {
  FOUNDER_LED_GROWTH_SLUG,
  founderLedGrowthCluster,
} from "@/data/founderLedGrowth";
import {
  getPlaybookLesson,
  getPlaybookLessonStaticParams,
  getPlaybookPaths,
} from "@/data/playbooks";
import { getRoutes } from "@/data/site";
import { getDictionary } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ lesson: string }>;
};

const locale = "sr";

export function generateStaticParams() {
  return getPlaybookLessonStaticParams(FOUNDER_LED_GROWTH_SLUG);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lesson: lessonSlug } = await params;
  const lesson = getPlaybookLesson(FOUNDER_LED_GROWTH_SLUG, lessonSlug);

  if (!lesson) {
    return { title: "Lekcija nije pronađena" };
  }

  return {
    title: lesson.meta.title.sr,
    description: lesson.meta.description.sr,
    keywords: lesson.meta.keywords?.sr,
  };
}

export default async function FounderLedGrowthLessonPage({ params }: PageProps) {
  const { lesson: lessonSlug } = await params;
  const dictionary = getDictionary(locale);
  const routes = getRoutes(locale);
  const paths = getPlaybookPaths(locale, FOUNDER_LED_GROWTH_SLUG);
  const lesson = getPlaybookLesson(FOUNDER_LED_GROWTH_SLUG, lessonSlug);

  if (!lesson) {
    notFound();
  }

  return (
    <PlaybookLessonPage
      locale={locale}
      dictionary={dictionary}
      cluster={founderLedGrowthCluster}
      lesson={lesson}
      paths={{
        cluster: paths.cluster,
        lesson: paths.lesson,
        contact: routes.contact,
        salesTool: routes.salesTool,
        salesToolsHub: routes.salesTools,
      }}
    />
  );
}
