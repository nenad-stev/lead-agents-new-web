import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FlgPreviewBanner } from "@/components/playbook/FlgPreviewBanner";
import { PlaybookLessonPage } from "@/components/playbook/PlaybookLessonPage";
import { FOUNDER_LED_GROWTH_SLUG, founderLedGrowthCluster } from "@/data/founderLedGrowth";
import {
  getPlaybookLesson,
  getPlaybookLessonStaticParams,
  getPlaybookPaths,
} from "@/data/playbooks";
import { getRoutes } from "@/data/site";
import { ensureFlgPreviewAccess, hasFlgPreviewAccess } from "@/lib/flg-preview";
import { getDictionary } from "@/lib/i18n";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ lesson: string }>;
  searchParams: Promise<{ flg_preview?: string }>;
};

const locale = "en";

export function generateStaticParams() {
  return getPlaybookLessonStaticParams(FOUNDER_LED_GROWTH_SLUG);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const canPreview = await hasFlgPreviewAccess();

  if (!canPreview) {
    return {
      title: "Founder Led Growth playbook is going live soon",
      description:
        "Lessons are currently locked. Leave your email on the main page and we will notify you once the playbook is published.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const { lesson: lessonSlug } = await params;
  const lesson = getPlaybookLesson(FOUNDER_LED_GROWTH_SLUG, lessonSlug);

  if (!lesson) {
    return { title: "Lesson not found" };
  }

  return {
    title: lesson.meta.title.en,
    description: lesson.meta.description.en,
    keywords: lesson.meta.keywords?.en,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function FounderLedGrowthLessonEnPage({
  params,
  searchParams,
}: PageProps) {
  const { flg_preview: previewToken } = await searchParams;
  const canPreview = await ensureFlgPreviewAccess(previewToken);

  if (!canPreview) {
    notFound();
  }

  const { lesson: lessonSlug } = await params;
  const dictionary = getDictionary(locale);
  const routes = getRoutes(locale);
  const paths = getPlaybookPaths(locale, FOUNDER_LED_GROWTH_SLUG);
  const lesson = getPlaybookLesson(FOUNDER_LED_GROWTH_SLUG, lessonSlug);

  if (!lesson) {
    notFound();
  }

  return (
    <>
      <FlgPreviewBanner locale={locale} lessonsIndexHref={`${paths.cluster}/preview`} />
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
    </>
  );
}
