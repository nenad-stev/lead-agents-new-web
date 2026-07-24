import type { Metadata } from "next";

import { MaleFirmeLeadGenerationPage } from "@/components/lead-generation/MaleFirmeLeadGenerationPage";
import { getLeadGenerationPage } from "@/data/lead-generation";
import { pageMetadata } from "@/lib/seo";

const content = getLeadGenerationPage("male-firme");

export const metadata: Metadata = pageMetadata({
  locale: "sr",
  paths: content.paths,
  title: content.seo.title.sr,
  description: content.seo.description.sr,
  robots: { index: false, follow: false },
});

export default function Page() {
  return <MaleFirmeLeadGenerationPage locale="sr" />;
}
