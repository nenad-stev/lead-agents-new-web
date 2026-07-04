import type { Metadata } from "next";

import { CaseStudiesListingPage } from "@/components/case-studies/CaseStudiesListingPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { caseStudies } from "@/data/case-studies";
import { getRoutes } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata, staticPaths } from "@/lib/seo";

const locale = "en";
const dictionary = getDictionary(locale);

export const metadata: Metadata = pageMetadata({
  locale,
  paths: staticPaths.caseStudies,
  title: `${dictionary.pages.caseStudies.title} | Lead Agents`,
  description: dictionary.pages.caseStudies.description,
});

export default function EnglishCaseStudiesPage() {
  const routes = getRoutes(locale);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: routes.home },
          { name: dictionary.pages.caseStudies.title, path: routes.caseStudies },
        ])}
      />
      <CaseStudiesListingPage
        locale={locale}
        dictionary={dictionary}
        title={dictionary.pages.caseStudies.title}
        description={dictionary.pages.caseStudies.description}
        comingSoonLabel={dictionary.pages.caseStudies.comingSoon}
        items={caseStudies.map((item) => ({
          href: routes.caseStudy(item.slug),
          title: item.title.en,
          description: item.excerpt.en,
          image: item.image,
          imageAlt: item.imageAlt?.en,
        }))}
      />
    </>
  );
}
