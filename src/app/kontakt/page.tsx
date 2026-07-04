import type { Metadata } from "next";

import { ContactPage } from "@/components/contact/ContactPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getRoutes } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { breadcrumbSchema } from "@/lib/schema";
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
  const routes = getRoutes("sr");

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Početna", path: routes.home },
          { name: labels.title, path: routes.contact },
        ])}
      />
      <ContactPage locale="sr" dictionary={dictionary} />
    </>
  );
}
