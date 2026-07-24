import type { Metadata } from "next";

import { SrednjeFirmeLeadGenerationPage } from "@/components/lead-generation/SrednjeFirmeLeadGenerationPage";
import { getLeadGenerationPage } from "@/data/lead-generation";
import { pageMetadata } from "@/lib/seo";

const content = getLeadGenerationPage("srednje-firme");

export const metadata: Metadata = pageMetadata({
  locale: "en",
  paths: content.paths,
  title: content.seo.title.en,
  description: content.seo.description.en,
  robots: { index: false, follow: false },
});

export default function Page() {
  return <SrednjeFirmeLeadGenerationPage locale="en" />;
}
