import type { Metadata } from "next";

import { CaseStudiesListingPage } from "@/components/case-studies/CaseStudiesListingPage";
import { caseStudies } from "@/data/case-studies";
import { getRoutes } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata, staticPaths } from "@/lib/seo";

const locale = "sr";
const dictionary = getDictionary(locale);

export const metadata: Metadata = pageMetadata({
  locale,
  paths: staticPaths.caseStudies,
  title: `${dictionary.pages.caseStudies.title} | Lead Agents`,
  description: dictionary.pages.caseStudies.description,
});

export default function CaseStudiesPage() {
  const routes = getRoutes(locale);

  return (
    <CaseStudiesListingPage
      locale={locale}
      dictionary={dictionary}
      title={dictionary.pages.caseStudies.title}
      description={dictionary.pages.caseStudies.description}
      comingSoonLabel={dictionary.pages.caseStudies.comingSoon}
      items={caseStudies.map((item) => ({
        href: routes.caseStudy(item.slug),
        title: item.title.sr,
        description: item.excerpt.sr,
        image: item.image,
        imageAlt: item.imageAlt?.sr,
      }))}
    />
  );
}
