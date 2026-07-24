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

const locale = "en";

export const metadata: Metadata = pageMetadata({
  locale,
  paths: staticPaths.growthPlaybook,
  title: founderLedGrowthCluster.meta.title.en,
  description: founderLedGrowthCluster.meta.description.en,
  robots: { index: false, follow: false },
});

export default function FounderLedGrowthPlaybookEnPage() {
  const dictionary = getDictionary(locale);
  const routes = getRoutes(locale);
  const paths = getPlaybookPaths(locale, founderLedGrowthCluster.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: routes.home },
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
            title="Going live soon"
            description="Lessons are in preview mode. Leave your email — we’ll notify you when the playbook opens to everyone."
            className="border-t border-border/50"
          >
            <ContentLocker locale={locale} />
          </Section>
        }
      />
    </>
  );
}
