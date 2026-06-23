import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SalesToolDetailPage } from "@/components/sales-tools/SalesToolDetailPage";
import { getSalesToolBySlug, getAllSalesToolSlugs } from "@/data/sales-tools";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata, salesToolPaths } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSalesToolSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getSalesToolBySlug(slug);
  const locale = "en";

  if (!tool) {
    return { title: "Tool not found" };
  }

  return pageMetadata({
    locale,
    paths: salesToolPaths(slug),
    title: `${tool.name}, Review, Pricing & Alternatives | Lead Agents`,
    description: tool.overview[locale],
  });
}

export default async function EnglishSalesToolDetailPageRoute({ params }: PageProps) {
  const { slug } = await params;
  const locale = "en";
  const dictionary = getDictionary(locale);
  const tool = getSalesToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  return <SalesToolDetailPage locale={locale} dictionary={dictionary} tool={tool} />;
}
