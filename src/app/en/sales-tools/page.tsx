import type { Metadata } from "next";

import { SalesToolsListingPage } from "@/components/sales-tools/SalesToolsListingPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getRoutes } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata, staticPaths } from "@/lib/seo";

const dictionary = getDictionary("en");

export const metadata: Metadata = pageMetadata({
  locale: "en",
  paths: staticPaths.salesTools,
  title: `${dictionary.pages.salesTools.title} | Lead Agents`,
  description: dictionary.pages.salesTools.description,
});

export default function EnglishSalesToolsPage() {
  const routes = getRoutes("en");

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: routes.home },
          { name: dictionary.pages.salesTools.title, path: routes.salesTools },
        ])}
      />
      <SalesToolsListingPage locale="en" dictionary={dictionary} />
    </>
  );
}
