import type { Metadata } from "next";

import { ContentLocker } from "@/components/playbook/ContentLocker";
import { PlaybookClusterPage } from "@/components/playbook/PlaybookClusterPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { founderLedGrowthCluster } from "@/data/founderLedGrowth";
import { getPlaybookPaths } from "@/data/playbooks";
import { getRoutes } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { breadcrumbSchema, courseSchema } from "@/lib/schema";
import { pageMetadata, staticPaths } from "@/lib/seo";

const locale = "sr";

export const metadata: Metadata = pageMetadata({
  locale,
  paths: staticPaths.growthPlaybook,
  title: founderLedGrowthCluster.meta.title.sr,
  description: founderLedGrowthCluster.meta.description.sr,
  robots: { index: false, follow: false },
});

export default function FounderLedGrowthPlaybookPage() {
  const dictionary = getDictionary(locale);
  const routes = getRoutes(locale);
  const paths = getPlaybookPaths(locale, founderLedGrowthCluster.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Početna", path: routes.home },
            {
              name: founderLedGrowthCluster.hero.title[locale],
              path: routes.growthPlaybook,
            },
          ]),
          courseSchema({
            name: founderLedGrowthCluster.hero.title[locale],
            description: founderLedGrowthCluster.meta.description[locale],
            locale,
            path: routes.growthPlaybook,
          }),
        ]}
      />
      <PlaybookClusterPage
        locale={locale}
        dictionary={dictionary}
        cluster={founderLedGrowthCluster}
        paths={{
          cluster: paths.cluster,
          lesson: paths.lesson,
          contact: routes.contact,
          salesTool: routes.salesTool,
          salesToolsHub: routes.salesTools,
        }}
        afterCurriculum={
          <Section
            id="flg-waitlist"
            title="Uskoro javno dostupno"
            description="Lekcije su u preview režimu. Ostavi email — javićemo ti čim playbook bude otvoren za sve."
            className="border-t border-border/50"
          >
            <ContentLocker locale={locale} />
          </Section>
        }
      />
    </>
  );
}
