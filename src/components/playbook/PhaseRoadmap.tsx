import { LessonCard } from "@/components/playbook/LessonCard";
import type { Locale } from "@/lib/i18n";
import { t, type LocalizedText, type PlaybookCluster } from "@/types/playbook";

type PhaseRoadmapProps = {
  locale: Locale;
  cluster: PlaybookCluster;
  lessonHref: (slug: string) => string;
};

export function PhaseRoadmap({ locale, cluster, lessonHref }: PhaseRoadmapProps) {
  return (
    <div className="space-y-16">
      {cluster.phases.map((phase) => {
        const lessons = cluster.lessons.filter((lesson) => lesson.phaseId === phase.id);
        if (lessons.length === 0) return null;

        return (
          <div key={phase.id} id={`phase-${phase.id}`} className="scroll-mt-28">
            <div className="mb-8 flex flex-col gap-2 border-l-2 border-accent pl-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                  {String(phase.order).padStart(2, "0")}
                </p>
                <h3 className="text-2xl font-bold text-foreground">{t(phase.title, locale)}</h3>
              </div>
              <p className="max-w-md text-sm text-muted">{t(phase.description, locale)}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {lessons.map((lesson) => (
                <div key={lesson.slug} className="relative">
                  <LessonCard
                    locale={locale}
                    lesson={lesson}
                    phase={phase}
                    lessonHref={lessonHref(lesson.slug)}
                    openLessonLabel={cluster.labels.openLesson}
                    lessonNumberLabel={cluster.labels.lessonNumber}
                    readTimeLabel={cluster.labels.readTime}
                    phaseLabel={cluster.labels.phase}
                    minutesLabel={cluster.labels.minutes}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
