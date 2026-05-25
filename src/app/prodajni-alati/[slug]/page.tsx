import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SalesToolDetailPage } from "@/components/sales-tools/SalesToolDetailPage";
import { getSalesToolBySlug, getAllSalesToolSlugs } from "@/data/sales-tools";
import { getDictionary } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSalesToolSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getSalesToolBySlug(slug);
  const locale = "sr";

  if (!tool) {
    return { title: "Alat nije pronađen" };
  }

  return {
    title: `${tool.name} — Pregled, cene i alternative | Lead Agents`,
    description: tool.overview[locale],
  };
}

export default async function SalesToolDetailPageRoute({ params }: PageProps) {
  const { slug } = await params;
  const locale = "sr";
  const dictionary = getDictionary(locale);
  const tool = getSalesToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  return <SalesToolDetailPage locale={locale} dictionary={dictionary} tool={tool} />;
}
