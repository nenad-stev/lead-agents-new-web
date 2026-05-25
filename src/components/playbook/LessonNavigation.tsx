import Link from "next/link";

import type { Locale } from "@/lib/i18n";
import { t, type LocalizedText, type PlaybookLesson } from "@/types/playbook";

type LessonNavigationProps = {
  locale: Locale;
  previous?: PlaybookLesson;
  next?: PlaybookLesson;
  previousLabel: LocalizedText;
  nextLabel: LocalizedText;
  lessonHref: (slug: string) => string;
};

export function LessonNavigation({
  locale,
  previous,
  next,
  previousLabel,
  nextLabel,
  lessonHref,
}: LessonNavigationProps) {
  if (!previous && !next) return null;

  return (
    <nav
      className="mt-12 grid gap-4 border-t border-border pt-10 sm:grid-cols-2"
      aria-label="Lesson navigation"
    >
      {previous ? (
        <Link
          href={lessonHref(previous.slug)}
          className="group rounded-2xl border border-border bg-card/40 p-5 transition-colors hover:border-accent/40"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-subtle">
            ← {t(previousLabel, locale)}
          </p>
          <p className="mt-2 font-semibold text-foreground group-hover:text-accent">
            {t(previous.title, locale)}
          </p>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={lessonHref(next.slug)}
          className="group rounded-2xl border border-border bg-card/40 p-5 text-right transition-colors hover:border-accent/40 sm:col-start-2"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-subtle">
            {t(nextLabel, locale)} →
          </p>
          <p className="mt-2 font-semibold text-foreground group-hover:text-accent">
            {t(next.title, locale)}
          </p>
        </Link>
      ) : null}
    </nav>
  );
}
