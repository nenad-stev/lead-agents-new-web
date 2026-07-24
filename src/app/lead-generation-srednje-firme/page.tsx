import type { Metadata } from "next";

import { SrednjeFirmeLeadGenerationPage } from "@/components/lead-generation/SrednjeFirmeLeadGenerationPage";
import { getLeadGenerationPage } from "@/data/lead-generation";
import { pageMetadata } from "@/lib/seo";

const content = getLeadGenerationPage("srednje-firme");

export const metadata: Metadata = pageMetadata({
  locale: "sr",
  paths: content.paths,
  title: content.seo.title.sr,
  description: content.seo.description.sr,
  robots: { index: false, follow: false },
});

export default function Page() {
  return <SrednjeFirmeLeadGenerationPage locale="sr" />;
}
