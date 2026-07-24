import Link from "next/link";

import { LessonLockBadge } from "@/components/playbook/LessonLockBadge";
import type { Locale } from "@/lib/i18n";
import { t, type LocalizedText, type PlaybookLesson, type PlaybookPhase } from "@/types/playbook";

type LessonCardProps = {
  locale: Locale;
  lesson: PlaybookLesson;
  phase?: PlaybookPhase;
  lessonHref: string;
  openLessonLabel: LocalizedText;
  lessonNumberLabel: LocalizedText;
  readTimeLabel: LocalizedText;
  phaseLabel: LocalizedText;
  minutesLabel: LocalizedText;
};

export function LessonCard({
  locale,
  lesson,
  phase,
  lessonHref,
  openLessonLabel,
  lessonNumberLabel,
  readTimeLabel,
  phaseLabel,
  minutesLabel,
}: LessonCardProps) {
  return (
    <article className="relative group flex h-full flex-col rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-accent/40 hover:bg-card">
      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider text-muted-subtle">
        <span className="text-accent">
          {t(lessonNumberLabel, locale)} {lesson.order}
        </span>
        {phase ? (
          <span className="rounded-full border border-border px-2.5 py-0.5 text-[0.65rem]">
            {t(phaseLabel, locale)}: {t(phase.title, locale)}
          </span>
        ) : null}
        <span>
          {t(readTimeLabel, locale)}: {lesson.estimatedReadTime} {t(minutesLabel, locale)}
        </span>
        <LessonLockBadge />
      </div>
      <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-accent">
        <Link href={lessonHref} className="after:absolute after:inset-0">
          {t(lesson.title, locale)}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {t(lesson.description, locale)}
      </p>
      <p className="mt-6 text-sm font-semibold text-accent">
        {t(openLessonLabel, locale)} →
      </p>
    </article>
  );
}
