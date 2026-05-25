import Link from "next/link";

import { LessonArticle } from "@/components/playbook/LessonArticle";
import { RichPlaybookLessonPage } from "@/components/playbook/RichPlaybookLessonPage";
import { LessonNavigation } from "@/components/playbook/LessonNavigation";
import { LessonSidebar } from "@/components/playbook/LessonSidebar";
import { RecommendedTools } from "@/components/playbook/RecommendedTools";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CtaSection } from "@/components/ui/CtaSection";
import { getAdjacentLessons, getPhaseById } from "@/data/founderLedGrowth";
import type { Dictionary, Locale } from "@/lib/i18n";
import { t, type PlaybookCluster, type PlaybookLesson } from "@/types/playbook";

type PlaybookLessonPageProps = {
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

export function PlaybookLessonPage({
  locale,
  dictionary,
  cluster,
  lesson,
  paths,
}: PlaybookLessonPageProps) {
  if (lesson.richContent) {
    return (
      <RichPlaybookLessonPage
        locale={locale}
        dictionary={dictionary}
        cluster={cluster}
        lesson={lesson}
        paths={paths}
      />
    );
  }

  const phase = getPhaseById(lesson.phaseId);
  const { previous, next } = getAdjacentLessons(lesson.slug);
  const sections = lesson.sections.map((section) => ({
    id: section.id,
    title: section.title,
  }));

  const lessonTools = cluster.recommendedTools.filter((tool) =>
    lesson.recommendedToolSlugs.includes(tool.slug ?? ""),
  );

  const breadcrumbGrowth = t(cluster.labels.growthPlaybook, locale);
  const breadcrumbCluster = t(cluster.labels.clusterName, locale);

  return (
    <>
      <Header locale={locale} dictionary={dictionary} />
      <main className="pb-24">
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
          <header className="max-w-3xl border-b border-border pb-10">
            {phase ? (
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                {t(cluster.labels.phase, locale)}: {t(phase.title, locale)}
              </p>
            ) : null}
            <p className="mt-3 text-sm text-muted-subtle">
              {t(cluster.labels.lessonNumber, locale)} {lesson.order} ·{" "}
              {t(cluster.labels.readTime, locale)}: {lesson.estimatedReadTime}{" "}
              {t(cluster.labels.minutes, locale)}
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {t(lesson.title, locale)}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {t(lesson.description, locale)}
            </p>
          </header>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
            <div className="min-w-0">
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
              <LessonArticle locale={locale} lesson={lesson} />

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

              <CtaSection
                locale={locale}
                variant="compact"
                className="mt-14"
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
