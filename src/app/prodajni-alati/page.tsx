import type { Metadata } from "next";

import { SalesToolsListingPage } from "@/components/sales-tools/SalesToolsListingPage";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata, staticPaths } from "@/lib/seo";

const dictionary = getDictionary("sr");

export const metadata: Metadata = pageMetadata({
  locale: "sr",
  paths: staticPaths.salesTools,
  title: `${dictionary.pages.salesTools.title} | Lead Agents`,
  description: dictionary.pages.salesTools.description,
});

export default function SalesToolsPage() {
  return <SalesToolsListingPage locale="sr" dictionary={dictionary} />;
}
