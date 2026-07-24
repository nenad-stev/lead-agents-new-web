import type { Metadata } from "next";

import { EnterpriseLeadGenerationPage } from "@/components/lead-generation/EnterpriseLeadGenerationPage";
import { getLeadGenerationPage } from "@/data/lead-generation";
import { pageMetadata } from "@/lib/seo";

const slug = "enterprise" as const;
const content = getLeadGenerationPage(slug);

export const metadata: Metadata = pageMetadata({
  locale: "sr",
  paths: content.paths,
  title: content.seo.title.sr,
  description: content.seo.description.sr,
  robots: { index: false, follow: false },
});

export default function Page() {
  return <EnterpriseLeadGenerationPage locale="sr" />;
}
