import type { Metadata } from "next";

import { MaleFirmeLeadGenerationPage } from "@/components/lead-generation/MaleFirmeLeadGenerationPage";
import { getLeadGenerationPage } from "@/data/lead-generation";
import { pageMetadata } from "@/lib/seo";

const content = getLeadGenerationPage("male-firme");

export const metadata: Metadata = pageMetadata({
  locale: "en",
  paths: content.paths,
  title: content.seo.title.en,
  description: content.seo.description.en,
  robots: { index: false, follow: false },
});

export default function Page() {
  return <MaleFirmeLeadGenerationPage locale="en" />;
}
