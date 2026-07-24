import type { ReactNode } from "react";

import { PhaseRoadmap } from "@/components/playbook/PhaseRoadmap";
import { PlaybookCurriculumIndex } from "@/components/playbook/PlaybookCurriculumIndex";
import { PlaybookHero } from "@/components/playbook/PlaybookHero";
import { RecommendedTools } from "@/components/playbook/RecommendedTools";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CtaSection } from "@/components/ui/CtaSection";
import { Section } from "@/components/ui/Section";
import type { Dictionary, Locale } from "@/lib/i18n";
import { t, tList, type PlaybookCluster } from "@/types/playbook";

type PlaybookClusterPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  cluster: PlaybookCluster;
  paths: {
    cluster: string;
    lesson: (slug: string) => string;
    contact: string;
    salesTool: (slug: string) => string;
    salesToolsHub: string;
  };
  /** Optional waitlist / gate block after the curriculum */
  afterCurriculum?: ReactNode;
};

const viewToolLabel = { sr: "Pogledaj alat", en: "View tool" };

export function PlaybookClusterPage({
  locale,
  dictionary,
  cluster,
  paths,
  afterCurriculum,
}: PlaybookClusterPageProps) {
  return (
    <>
      <Header locale={locale} dictionary={dictionary} />
      <main>
        <PlaybookHero
          locale={locale}
          title={cluster.hero.title}
          subtitle={cluster.hero.subtitle}
          primaryCta={cluster.hero.primaryCta}
          secondaryCta={cluster.hero.secondaryCta}
          primaryHref="#curriculum"
          secondaryHref={paths.contact}
          eyebrow={t(cluster.labels.growthPlaybook, locale)}
        />

        <Section eyebrow={t(cluster.labels.growthPlaybook, locale)} title={t(cluster.intro.title, locale)}>
          <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
            {tList(cluster.intro.paragraphs, locale).map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          <dl className="mt-12 grid gap-6 rounded-2xl border border-border bg-card/40 p-6 md:grid-cols-2">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wider text-accent">
                {locale === "sr" ? "Za koga" : "Audience"}
              </dt>
              <dd className="mt-2 text-muted">{t(cluster.audience, locale)}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wider text-accent">
                {locale === "sr" ? "Ishod" : "Outcome"}
              </dt>
              <dd className="mt-2 text-muted">{t(cluster.outcome, locale)}</dd>
            </div>
          </dl>
        </Section>

        <Section
          title={t(cluster.framework.title, locale)}
          description={t(cluster.framework.description, locale)}
          className="border-t border-border/50 bg-card/20"
        >
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cluster.phases.map((phase) => {
              const lessonCount = cluster.lessons.filter(
                (lesson) => lesson.phaseId === phase.id,
              ).length;
              const phaseAnchor = `#phase-${phase.id}`;

              return (
                <li key={phase.id}>
                  <a
                    href={phaseAnchor}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-background/80 p-5 transition-colors hover:border-accent/50 hover:bg-card/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <span className="font-mono text-xs font-semibold text-accent">
                      {String(phase.order).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-bold text-foreground transition-colors group-hover:text-accent">
                      {t(phase.title, locale)}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-muted">
                      {t(phase.description, locale)}
                    </p>
                    <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-subtle">
                      {lessonCount}{" "}
                      {locale === "sr"
                        ? lessonCount === 1
                          ? "lekcija"
                          : "lekcije"
                        : lessonCount === 1
                          ? "lesson"
                          : "lessons"}
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </Section>

        <Section
          id="curriculum"
          title={
            locale === "sr"
              ? "Put kroz 12 lekcija"
              : "The path through 12 lessons"
          }
          description={
            locale === "sr"
              ? "Redosled je namerno: svaka lekcija gradi na prethodnoj — od zavisnosti od referral-a do celog sistema u praksi."
              : "The order is intentional: each lesson builds on the last — from referral dependency to the full system in practice."
          }
        >
          <PlaybookCurriculumIndex
            locale={locale}
            cluster={cluster}
            lessonHref={paths.lesson}
          />
          <p className="mt-6 text-sm text-muted">
            <a href="#roadmap" className="font-semibold text-accent hover:underline">
              {locale === "sr"
                ? "Ili pregledaj po fazama ↓"
                : "Or browse by phase ↓"}
            </a>
          </p>
        </Section>

        <Section
          id="roadmap"
          title={t(cluster.roadmap.title, locale)}
          description={t(cluster.roadmap.description, locale)}
          className="border-t border-border/50 bg-card/20"
        >
          <PhaseRoadmap
            locale={locale}
            cluster={cluster}
            lessonHref={paths.lesson}
          />
        </Section>

        {afterCurriculum}

        <Section
          title={t(cluster.toolsSection.title, locale)}
          description={t(cluster.toolsSection.description, locale)}
          className="border-t border-border/50"
        >
          <RecommendedTools
            locale={locale}
            title={cluster.toolsSection.title}
            tools={cluster.recommendedTools}
            toolHref={paths.salesTool}
            salesToolsHubHref={paths.salesToolsHub}
            viewToolLabel={viewToolLabel}
          />
        </Section>

        <CtaSection
          locale={locale}
          variant="band"
          className="mb-8"
          eyebrow={locale === "sr" ? "Growth Playbook" : "Growth Playbook"}
          title={t(cluster.cta.title, locale)}
          description={t(cluster.cta.text, locale)}
          primaryHref={paths.contact}
          primaryLabel={t(cluster.cta.button, locale)}
        />
      </main>
      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
