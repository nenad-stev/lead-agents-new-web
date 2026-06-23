import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyDetailPage } from "@/components/case-studies/CaseStudyDetailPage";
import { PlaceholderDetailPage } from "@/components/pages/PlaceholderDetailPage";
import {
  caseStudies,
  getCaseStudyBySlug,
  getCaseStudyDetailBySlug,
} from "@/data/case-studies";
import { getRoutes } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { caseStudyPaths, pageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = getCaseStudyDetailBySlug(slug);
  const listing = getCaseStudyBySlug(slug);
  const locale = "sr";

  if (detail) {
    return pageMetadata({
      locale,
      paths: caseStudyPaths(slug),
      title: detail.meta.title[locale],
      description: detail.meta.description[locale],
    });
  }

  if (listing) {
    return pageMetadata({
      locale,
      paths: caseStudyPaths(slug),
      title: `${listing.title[locale]} | Lead Agents`,
      description: listing.excerpt[locale],
    });
  }

  return { title: "Case study nije pronađena" };
}

export default async function CaseStudyDetailPageRoute({ params }: PageProps) {
  const { slug } = await params;
  const locale = "sr";
  const dictionary = getDictionary(locale);
  const routes = getRoutes(locale);
  const caseStudy = getCaseStudyBySlug(slug);
  const detail = getCaseStudyDetailBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  if (detail) {
    return (
      <CaseStudyDetailPage
        locale={locale}
        dictionary={dictionary}
        caseStudy={detail}
      />
    );
  }

  return (
    <PlaceholderDetailPage
      locale={locale}
      dictionary={dictionary}
      title={caseStudy.title.sr}
      excerpt={caseStudy.excerpt.sr}
      backLabel={dictionary.pages.caseStudyDetail.back}
      backHref={routes.caseStudies}
      placeholder={dictionary.pages.caseStudyDetail.placeholder}
      image={caseStudy.image}
      imageAlt={caseStudy.imageAlt?.sr}
    />
  );
}
