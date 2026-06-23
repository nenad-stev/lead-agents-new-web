import type { Metadata } from "next";

import { ContactPage } from "@/components/contact/ContactPage";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata, staticPaths } from "@/lib/seo";

const dictionary = getDictionary("sr");
const labels = dictionary.pages.contact;

export const metadata: Metadata = pageMetadata({
  locale: "sr",
  paths: staticPaths.contact,
  title: labels.metaTitle,
  description: labels.metaDescription,
});

export default function KontaktPage() {
  return <ContactPage locale="sr" dictionary={dictionary} />;
}
