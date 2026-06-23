import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Section } from "@/components/ui/Section";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata, staticPaths } from "@/lib/seo";

const dictionary = getDictionary("en");
const heroImage = "/images/webinars/kako-prodati-usluge-na-linkedin-u-2026.png";
const webinarSlug = "/en/webinar/how-to-sell-your-services-on-linkedin-in-2026";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  paths: staticPaths.webinars,
  title: "Lead Agents Webinars | LinkedIn Sales and Founder-Led Growth",
  description:
    "Watch Lead Agents webinar replay pages on LinkedIn sales, outreach, Founder-Led Growth, LinkedIn Ads, and CRM lead scoring.",
});

export default function WebinarHubEnPage() {
  return (
    <>
      <Header locale="en" dictionary={dictionary} />
      <main>
        <Section
          eyebrow="Education"
          title="Webinars"
          description="Webinar replay pages with practical tactics for LinkedIn sales and B2B pipeline growth."
        >
          <article className="overflow-hidden rounded-2xl border border-border bg-card/40">
            <div className="relative aspect-video w-full overflow-hidden bg-black/20">
              <Image src={heroImage} alt="Webinar hero" width={1024} height={576} className="h-full w-full object-contain" />
            </div>
            <div className="space-y-3 p-6">
              <h2 className="text-2xl font-bold text-foreground">How to Sell Your Services on LinkedIn in 2026</h2>
              <p className="text-muted">
                Founder-Led Growth webinar recap: ICP, profile, outreach, content, LinkedIn Ads, CRM, and buying signals.
              </p>
              <Link href={webinarSlug} className="inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-black">
                Open webinar page
              </Link>
            </div>
          </article>
        </Section>
      </main>
      <Footer locale="en" dictionary={dictionary} />
    </>
  );
}
