import type { Metadata } from "next";

import { HomePage } from "@/components/home/HomePage";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata, staticPaths } from "@/lib/seo";

const dictionary = getDictionary("en");

export const metadata: Metadata = pageMetadata({
  locale: "en",
  paths: staticPaths.home,
  title: dictionary.meta.title,
  description: dictionary.meta.description,
});

export default function EnglishHomePage() {
  return <HomePage locale="en" dictionary={dictionary} />;
}
