import type { Metadata } from "next";

import { ContactPage } from "@/components/contact/ContactPage";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata, staticPaths } from "@/lib/seo";

const dictionary = getDictionary("en");
const labels = dictionary.pages.contact;

export const metadata: Metadata = pageMetadata({
  locale: "en",
  paths: staticPaths.contact,
  title: labels.metaTitle,
  description: labels.metaDescription,
});

export default function EnglishContactPage() {
  return <ContactPage locale="en" dictionary={dictionary} />;
}
