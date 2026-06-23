import type { Metadata } from "next";

import { SalesToolsListingPage } from "@/components/sales-tools/SalesToolsListingPage";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata, staticPaths } from "@/lib/seo";

const dictionary = getDictionary("en");

export const metadata: Metadata = pageMetadata({
  locale: "en",
  paths: staticPaths.salesTools,
  title: `${dictionary.pages.salesTools.title} | Lead Agents`,
  description: dictionary.pages.salesTools.description,
});

export default function EnglishSalesToolsPage() {
  return <SalesToolsListingPage locale="en" dictionary={dictionary} />;
}
