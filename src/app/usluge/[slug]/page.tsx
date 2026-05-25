import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ColdSalesOutreachPage } from "@/components/services/ColdSalesOutreachPage";
import { FounderLedGrowthPreviewPage } from "@/components/services/FounderLedGrowthPreviewPage";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import { coldSalesOutreach } from "@/data/services/cold-sales-outreach";
import { founderLedGrowth } from "@/data/services/founder-led-growth";
import { getAllServiceSlugs, getServiceBySlug } from "@/data/services";
import { getDictionary } from "@/lib/i18n";

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

  return {
    title: service.meta.title[locale],
    description: service.meta.description[locale],
  };
}

export default async function ServicePageRoute({ params }: PageProps) {
  const { slug } = await params;
  const locale = "sr";
  const dictionary = getDictionary(locale);
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  if (slug === founderLedGrowth.slug) {
    return <FounderLedGrowthPreviewPage locale={locale} dictionary={dictionary} />;
  }

  if (slug === coldSalesOutreach.slug) {
    return <ColdSalesOutreachPage locale={locale} dictionary={dictionary} />;
  }

  return <ServiceDetailPage locale={locale} dictionary={dictionary} service={service} />;
}
