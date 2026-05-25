import Link from "next/link";

import { LessonHero } from "@/components/playbook/lesson/LessonHero";
import { LessonMetaCard } from "@/components/playbook/lesson/LessonMetaCard";
import {
  buildLessonRecommendedTools,
  filterLessonToc,
} from "@/components/playbook/lesson/lesson-tool-utils";
import { RichLessonRenderer } from "@/components/playbook/lesson/RichLessonRenderer";
import { LessonNavigation } from "@/components/playbook/LessonNavigation";
import { LessonSidebar } from "@/components/playbook/LessonSidebar";
import { RecommendedTools } from "@/components/playbook/RecommendedTools";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/components/ui/CtaSection";
import { getAdjacentLessons, getPhaseById } from "@/data/founderLedGrowth";
import type { Dictionary, Locale } from "@/lib/i18n";
import { t, type PlaybookCluster, type PlaybookLesson } from "@/types/playbook";
import {
  ltCtaLabel,
  resolveLessonCtaActions,
} from "@/components/playbook/lesson/lesson-cta-utils";
import { lt } from "@/components/playbook/lesson/lesson-utils";

type RichPlaybookLessonPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  cluster: PlaybookCluster;
  lesson: PlaybookLesson;
  paths: {
    cluster: string;
    lesson: (slug: string) => string;
    contact: string;
    salesTool: (slug: string) => string;
    salesToolsHub: string;
  };
};

const viewToolLabel = { sr: "Pogledaj alat", en: "View tool" };

export function RichPlaybookLessonPage({
  locale,
  dictionary,
  cluster,
  lesson,
  paths,
}: RichPlaybookLessonPageProps) {
  const rich = lesson.richContent;
  if (!rich) return null;

  const phase = getPhaseById(lesson.phaseId);
  const { previous, next } = getAdjacentLessons(lesson.slug);
  const sections = filterLessonToc(rich.toc).map((item) => ({
    id: item.id,
    title: item.title,
  }));

  const lessonTools = buildLessonRecommendedTools(lesson, cluster);
  const ctaActions = resolveLessonCtaActions(rich.cta, next, paths);

  const breadcrumbGrowth = t(cluster.labels.growthPlaybook, locale);
  const breadcrumbCluster = t(cluster.labels.clusterName, locale);

  return (
    <>
      <Header locale={locale} dictionary={dictionary} />
      <main className="playbook-lesson-page pb-24">
        <div className="border-b border-border/50 bg-background">
          <div className="mx-auto max-w-6xl px-6 py-6 md:px-8">
            <nav className="text-sm text-muted-subtle" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href={paths.cluster} className="hover:text-accent">
                    {breadcrumbGrowth}
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href={paths.cluster} className="hover:text-accent">
                    {breadcrumbCluster}
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-foreground">{t(lesson.title, locale)}</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-10 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
            <div className="min-w-0">
              <LessonHero
                locale={locale}
                hero={rich.hero}
                phaseLabel={phase ? t(cluster.labels.phase, locale) : undefined}
                phaseTitle={phase ? t(phase.title, locale) : undefined}
              />
              <div className="mt-8">
                <LessonMetaCard
                  locale={locale}
                  meta={rich.meta}
                  lessonNumber={lesson.order}
                  lessonNumberLabel={t(cluster.labels.lessonNumber, locale)}
                />
              </div>

              {phase ? (
                <LessonSidebar
                  variant="mobile"
                  locale={locale}
                  lesson={lesson}
                  phaseTitle={phase.title}
                  sections={sections}
                  tableOfContentsLabel={cluster.labels.tableOfContents}
                  phaseLabel={cluster.labels.phase}
                  readTimeLabel={cluster.labels.readTime}
                  minutesLabel={cluster.labels.minutes}
                  lessonNumberLabel={cluster.labels.lessonNumber}
                  previous={previous}
                  next={next}
                  previousLabel={cluster.labels.previousLesson}
                  nextLabel={cluster.labels.nextLesson}
                  clusterHref={paths.cluster}
                />
              ) : null}

              <div className="mt-12">
                <RichLessonRenderer
                  locale={locale}
                  content={rich}
                  lessonHref={paths.lesson}
                  salesToolHref={paths.salesTool}
                  previousLabel={t(cluster.labels.previousLesson, locale)}
                  nextLabel={t(cluster.labels.nextLesson, locale)}
                />
              </div>

              {lessonTools.length > 0 ? (
                <div className="mt-14 rounded-2xl border border-border bg-card/40 p-6 md:p-8">
                  <RecommendedTools
                    locale={locale}
                    title={cluster.labels.recommendedTools}
                    tools={lessonTools}
                    toolHref={paths.salesTool}
                    salesToolsHubHref={paths.salesToolsHub}
                    viewToolLabel={viewToolLabel}
                  />
                </div>
              ) : null}

              <section className="playbook-lesson-cta-block mt-14">
                <h2 className="playbook-lesson-cta-block__title">
                  {lt(rich.cta.title, locale)}
                </h2>
                <p className="playbook-lesson-cta-block__body">{lt(rich.cta.body, locale)}</p>
                <div className="playbook-lesson-cta-block__actions">
                  <Button href={ctaActions.primary.href} variant="primary">
                    {ltCtaLabel(ctaActions.primary.label, locale)}
                  </Button>
                  <Button href={ctaActions.secondary.href} variant="secondary">
                    {ltCtaLabel(ctaActions.secondary.label, locale)}
                  </Button>
                </div>
              </section>

              <CtaSection
                locale={locale}
                variant="compact"
                className="mt-10"
                eyebrow={locale === "sr" ? "Sledeći korak" : "Next step"}
                title={t(cluster.lessonCta.title, locale)}
                description={t(cluster.lessonCta.text, locale)}
                primaryHref={paths.contact}
                primaryLabel={t(cluster.lessonCta.button, locale)}
              />

              <LessonNavigation
                locale={locale}
                previous={previous}
                next={next}
                previousLabel={cluster.labels.previousLesson}
                nextLabel={cluster.labels.nextLesson}
                lessonHref={paths.lesson}
              />

              <p className="mt-8">
                <Link
                  href={paths.cluster}
                  className="text-sm font-semibold text-accent hover:underline"
                >
                  ← {t(cluster.labels.backToPlaybook, locale)}
                </Link>
              </p>
            </div>

            <aside className="relative hidden min-h-0 lg:block">
              {phase ? (
                <LessonSidebar
                  variant="desktop"
                  locale={locale}
                  lesson={lesson}
                  phaseTitle={phase.title}
                  sections={sections}
                  tableOfContentsLabel={cluster.labels.tableOfContents}
                  phaseLabel={cluster.labels.phase}
                  readTimeLabel={cluster.labels.readTime}
                  minutesLabel={cluster.labels.minutes}
                  lessonNumberLabel={cluster.labels.lessonNumber}
                  previous={previous}
                  next={next}
                  previousLabel={cluster.labels.previousLesson}
                  nextLabel={cluster.labels.nextLesson}
                  clusterHref={paths.cluster}
                />
              ) : null}
            </aside>
          </div>
        </div>
      </main>
      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
