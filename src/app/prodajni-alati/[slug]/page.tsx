import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SalesToolDetailPage } from "@/components/sales-tools/SalesToolDetailPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSalesToolBySlug, getAllSalesToolSlugs } from "@/data/sales-tools";
import { getRoutes } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { breadcrumbSchema, softwareApplicationSchema } from "@/lib/schema";
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
  const locale = "sr";

  if (!tool) {
    return { title: "Alat nije pronađen" };
  }

  return pageMetadata({
    locale,
    paths: salesToolPaths(slug),
    title: `${tool.name}, Pregled, cene i alternative | Lead Agents`,
    description: tool.overview[locale],
  });
}

export default async function SalesToolDetailPageRoute({ params }: PageProps) {
  const { slug } = await params;
  const locale = "sr";
  const dictionary = getDictionary(locale);
  const routes = getRoutes(locale);
  const tool = getSalesToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const path = routes.salesTool(slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Početna", path: routes.home },
            { name: dictionary.pages.salesTools.title, path: routes.salesTools },
            { name: tool.name, path },
          ]),
          softwareApplicationSchema(tool, locale, path),
        ]}
      />
      <SalesToolDetailPage locale={locale} dictionary={dictionary} tool={tool} />
    </>
  );
}
