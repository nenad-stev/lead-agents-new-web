import type { Metadata } from "next";

import { SalesToolsListingPage } from "@/components/sales-tools/SalesToolsListingPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getRoutes } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata, staticPaths } from "@/lib/seo";

const dictionary = getDictionary("sr");

export const metadata: Metadata = pageMetadata({
  locale: "sr",
  paths: staticPaths.salesTools,
  title: `${dictionary.pages.salesTools.title} | Lead Agents`,
  description: dictionary.pages.salesTools.description,
});

export default function SalesToolsPage() {
  const routes = getRoutes("sr");

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Početna", path: routes.home },
          { name: dictionary.pages.salesTools.title, path: routes.salesTools },
        ])}
      />
      <SalesToolsListingPage locale="sr" dictionary={dictionary} />
    </>
  );
}
