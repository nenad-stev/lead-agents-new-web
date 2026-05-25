import type { Metadata } from "next";

import { SalesToolsListingPage } from "@/components/sales-tools/SalesToolsListingPage";
import { getDictionary } from "@/lib/i18n";

const dictionary = getDictionary("sr");

export const metadata: Metadata = {
  title: `${dictionary.pages.salesTools.title} | Lead Agents`,
  description: dictionary.pages.salesTools.description,
};

export default function SalesToolsPage() {
  return <SalesToolsListingPage locale="sr" dictionary={dictionary} />;
}
