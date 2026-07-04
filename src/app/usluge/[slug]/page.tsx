import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/JsonLd";
import { ColdSalesOutreachPage } from "@/components/services/ColdSalesOutreachPage";
import { FounderLedGrowthPreviewPage } from "@/components/services/FounderLedGrowthPreviewPage";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import { coldSalesOutreach } from "@/data/services/cold-sales-outreach";
import { founderLedGrowth } from "@/data/services/founder-led-growth";
import { getAllServiceSlugs, getServiceBySlug } from "@/data/services";
import { getRoutes } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata, servicePaths } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const locale = "sr";

  if (!service) {
    return { title: "Usluga nije pronađena" };
  }

  return pageMetadata({
    locale,
    paths: servicePaths(slug),
    title: service.meta.title[locale],
    description: service.meta.description[locale],
  });
}

export default async function ServicePageRoute({ params }: PageProps) {
  const { slug } = await params;
  const locale = "sr";
  const dictionary = getDictionary(locale);
  const routes = getRoutes(locale);
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const path = routes.service(slug);
  const structuredData = [
    breadcrumbSchema([
      { name: "Početna", path: routes.home },
      { name: service.hero.title[locale], path },
    ]),
    serviceSchema(service, locale, path),
  ];

  if (slug === founderLedGrowth.slug) {
    return (
      <>
        <JsonLd data={structuredData} />
        <FounderLedGrowthPreviewPage locale={locale} dictionary={dictionary} />
      </>
    );
  }

  if (slug === coldSalesOutreach.slug) {
    return (
      <>
        <JsonLd data={structuredData} />
        <ColdSalesOutreachPage locale={locale} dictionary={dictionary} />
      </>
    );
  }

  return (
    <>
      <JsonLd data={structuredData} />
      <ServiceDetailPage locale={locale} dictionary={dictionary} service={service} />
    </>
  );
}
