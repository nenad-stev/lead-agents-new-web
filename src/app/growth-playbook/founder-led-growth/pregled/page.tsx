import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FlgPreviewLessonsIndex } from "@/components/playbook/FlgPreviewLessonsIndex";
import { FOUNDER_LED_GROWTH_SLUG } from "@/data/founderLedGrowth";
import { getPlaybookPaths } from "@/data/playbooks";
import { ensureFlgPreviewAccess, hasFlgPreviewAccess } from "@/lib/flg-preview";
import { getDictionary } from "@/lib/i18n";

export const dynamic = "force-dynamic";

type PageProps = {
  searchParams: Promise<{ flg_preview?: string }>;
};

const locale = "sr";

export async function generateMetadata(): Promise<Metadata> {
  const canPreview = await hasFlgPreviewAccess();

  return {
    title: canPreview
      ? "Pregled lekcija | Founder Led Growth"
      : "Founder Led Growth playbook uskoro live",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function FounderLedGrowthPreviewIndexPage({
  searchParams,
}: PageProps) {
  const { flg_preview: previewToken } = await searchParams;
  const canPreview = await ensureFlgPreviewAccess(previewToken);

  if (!canPreview) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const paths = getPlaybookPaths(locale, FOUNDER_LED_GROWTH_SLUG);

  return (
    <FlgPreviewLessonsIndex
      locale={locale}
      dictionary={dictionary}
      paths={{
        cluster: paths.cluster,
        lesson: paths.lesson,
        index: `${paths.cluster}/pregled`,
      }}
    />
  );
}
