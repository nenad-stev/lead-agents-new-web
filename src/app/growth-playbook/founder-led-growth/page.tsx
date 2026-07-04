import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContentLocker } from "@/components/playbook/ContentLocker";
import { PlaybookHero } from "@/components/playbook/PlaybookHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { founderLedGrowthCluster } from "@/data/founderLedGrowth";
import { getRoutes } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { breadcrumbSchema, courseSchema } from "@/lib/schema";
import { pageMetadata, staticPaths } from "@/lib/seo";
import { t, tList } from "@/types/playbook";

const locale = "sr";

export const metadata: Metadata = pageMetadata({
  locale,
  paths: staticPaths.growthPlaybook,
  title: founderLedGrowthCluster.meta.title.sr,
  description: founderLedGrowthCluster.meta.description.sr,
});

export default function FounderLedGrowthPlaybookPage() {
  const dictionary = getDictionary(locale);
  const routes = getRoutes(locale);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Početna", path: routes.home },
            { name: founderLedGrowthCluster.hero.title[locale], path: routes.growthPlaybook },
          ]),
          courseSchema({
            name: founderLedGrowthCluster.hero.title[locale],
            description: founderLedGrowthCluster.meta.description[locale],
            locale,
            path: routes.growthPlaybook,
          }),
        ]}
      />
      <Header locale={locale} dictionary={dictionary} />
      <main>
        <PlaybookHero
          locale={locale}
          title={founderLedGrowthCluster.hero.title}
          subtitle={founderLedGrowthCluster.hero.subtitle}
          primaryCta={{ sr: "Uskoro live", en: "Going live soon" }}
          secondaryCta={founderLedGrowthCluster.hero.secondaryCta}
          primaryHref="#flg-waitlist"
          secondaryHref={routes.contact}
          eyebrow={t(founderLedGrowthCluster.labels.growthPlaybook, locale)}
        />

        <Section
          eyebrow={t(founderLedGrowthCluster.labels.growthPlaybook, locale)}
          title={t(founderLedGrowthCluster.intro.title, locale)}
        >
          <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
            {tList(founderLedGrowthCluster.intro.paragraphs, locale).map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="flg-waitlist" title="Uskoro live">
          <ContentLocker locale={locale} />
        </Section>
      </main>
      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
