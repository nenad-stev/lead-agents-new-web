import type { Metadata } from "next";

import { PlaybookClusterPage } from "@/components/playbook/PlaybookClusterPage";
import { FOUNDER_LED_GROWTH_SLUG, founderLedGrowthCluster } from "@/data/founderLedGrowth";
import { getPlaybookPaths } from "@/data/playbooks";
import { getRoutes } from "@/data/site";
import { getDictionary } from "@/lib/i18n";

const locale = "en";

export const metadata: Metadata = {
  title: founderLedGrowthCluster.meta.title.en,
  description: founderLedGrowthCluster.meta.description.en,
};

export default function FounderLedGrowthPlaybookEnPage() {
  const dictionary = getDictionary(locale);
  const routes = getRoutes(locale);
  const paths = getPlaybookPaths(locale, FOUNDER_LED_GROWTH_SLUG);

  return (
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
    />
  );
}
