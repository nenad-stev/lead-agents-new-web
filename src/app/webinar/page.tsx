import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Section } from "@/components/ui/Section";
import { getDictionary } from "@/lib/i18n";

const dictionary = getDictionary("sr");
const heroImage = "/images/webinars/kako-prodati-usluge-na-linkedin-u-2026.png";
const webinarSlug = "/webinar/kako-prodati-usluge-na-linkedin-u-2026";

export const metadata: Metadata = {
  title: "Lead Agents Webinari | LinkedIn prodaja i Founder-Led Growth",
  description:
    "Pogledajte Lead Agents webinar replay sadržaj o LinkedIn prodaji, outreach-u, Founder-Led Growth sistemu, LinkedIn Ads-u i CRM lead scoring-u.",
  alternates: {
    canonical: "/webinar",
    languages: {
      en: "/en/webinar",
    },
  },
};

export default function WebinarHubPage() {
  return (
    <>
      <Header locale="sr" dictionary={dictionary} />
      <main>
        <Section
          eyebrow="Edukacija"
          title="Webinari"
          description="Webinar replay stranice sa konkretnim taktikama za LinkedIn prodaju i B2B pipeline."
        >
          <article className="overflow-hidden rounded-2xl border border-border bg-card/40">
            <div className="relative aspect-video w-full overflow-hidden bg-black/20">
              <Image src={heroImage} alt="Webinar hero" width={1024} height={576} className="h-full w-full object-contain" />
            </div>
            <div className="space-y-3 p-6">
              <h2 className="text-2xl font-bold text-foreground">Kako prodati svoje usluge na LinkedInu u 2026.</h2>
              <p className="text-muted">
                Founder-Led Growth webinar recap: ICP, profil, outreach, content, LinkedIn Ads, CRM i buying signals.
              </p>
              <Link href={webinarSlug} className="inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-black">
                Otvori webinar stranicu
              </Link>
            </div>
          </article>
        </Section>
      </main>
      <Footer locale="sr" dictionary={dictionary} />
    </>
  );
}
