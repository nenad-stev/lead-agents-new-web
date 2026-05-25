import { CaseStudiesListingPage } from "@/components/case-studies/CaseStudiesListingPage";
import { caseStudies } from "@/data/case-studies";
import { getRoutes } from "@/data/site";
import { getDictionary } from "@/lib/i18n";

export default function CaseStudiesPage() {
  const locale = "sr";
  const dictionary = getDictionary(locale);
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
