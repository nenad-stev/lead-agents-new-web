import type { Metadata } from "next";

import { ContactPage } from "@/components/contact/ContactPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getRoutes } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { breadcrumbSchema } from "@/lib/schema";
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
  const routes = getRoutes("en");

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: routes.home },
          { name: labels.title, path: routes.contact },
        ])}
      />
      <ContactPage locale="en" dictionary={dictionary} />
    </>
  );
}
