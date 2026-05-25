import { PhaseRoadmap } from "@/components/playbook/PhaseRoadmap";
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
};

const viewToolLabel = { sr: "Pogledaj alat", en: "View tool" };

export function PlaybookClusterPage({
  locale,
  dictionary,
  cluster,
  paths,
}: PlaybookClusterPageProps) {
  const firstLesson = cluster.lessons[0];
  const firstLessonHref = firstLesson ? paths.lesson(firstLesson.slug) : paths.cluster;

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
          primaryHref={firstLessonHref}
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
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cluster.phases.map((phase) => {
              const hasLessons = cluster.lessons.some(
                (lesson) => lesson.phaseId === phase.id,
              );
              const phaseAnchor = `#phase-${phase.id}`;

              if (!hasLessons) {
                return (
                  <li
                    key={phase.id}
                    className="rounded-2xl border border-border bg-background/80 p-5"
                  >
                    <span className="font-mono text-xs font-semibold text-accent">
                      {String(phase.order).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-bold text-foreground">
                      {t(phase.title, locale)}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{t(phase.description, locale)}</p>
                  </li>
                );
              }

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
                    <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                      {locale === "sr" ? "Pogledaj lekcije ↓" : "View lessons ↓"}
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </Section>

        <Section
          title={t(cluster.roadmap.title, locale)}
          description={t(cluster.roadmap.description, locale)}
        >
          <PhaseRoadmap
            locale={locale}
            cluster={cluster}
            lessonHref={paths.lesson}
          />
        </Section>

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
