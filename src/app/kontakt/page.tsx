import type { Metadata } from "next";

import { ContactPage } from "@/components/contact/ContactPage";
import { getDictionary } from "@/lib/i18n";

const dictionary = getDictionary("sr");
const labels = dictionary.pages.contact;

export const metadata: Metadata = {
  title: labels.metaTitle,
  description: labels.metaDescription,
};

export default function KontaktPage() {
  return <ContactPage locale="sr" dictionary={dictionary} />;
}
