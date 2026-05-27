import Link from "next/link";

import type { Locale } from "@/lib/i18n";
import type { RichRelatedLesson } from "@/types/rich-lesson";
import { lt } from "@/components/playbook/lesson/lesson-utils";

type RelatedLessonsBlockProps = {
  locale: Locale;
  title: { sr: string; en: string };
  previous?: RichRelatedLesson;
  next?: RichRelatedLesson;
  lessonHref: (slug: string) => string;
  previousLabel: string;
  nextLabel: string;
};

export function RelatedLessonsBlock({
  locale,
  title,
  previous,
  next,
  lessonHref,
  previousLabel,
  nextLabel,
}: RelatedLessonsBlockProps) {
  return (
    <nav className="playbook-lesson-related" aria-label={lt(title, locale)}>
      <h2 className="playbook-lesson-section__title">{lt(title, locale)}</h2>
      <div className="playbook-lesson-related__nav">
        {previous ? (
          <Link href={lessonHref(previous.slug)} className="playbook-lesson-related__card">
            <span className="playbook-lesson-related__label">{previousLabel}</span>
            <span className="playbook-lesson-related__title">
              {lt(previous.title, locale)}
            </span>
          </Link>
        ) : (
          <div className="playbook-lesson-related__card playbook-lesson-related__card--muted">
            <span className="playbook-lesson-related__label">{previousLabel}</span>
            <span className="playbook-lesson-related__title">
              {locale === "sr" ? ",  Ovo je prva lekcija" : ",  This is the first lesson"}
            </span>
          </div>
        )}
        {next ? (
          <Link
            href={lessonHref(next.slug)}
            className="playbook-lesson-related__card playbook-lesson-related__card--next"
          >
            <span className="playbook-lesson-related__label">{nextLabel}</span>
            <span className="playbook-lesson-related__title">{lt(next.title, locale)}</span>
          </Link>
        ) : (
          <div className="playbook-lesson-related__card playbook-lesson-related__card--muted playbook-lesson-related__card--next">
            <span className="playbook-lesson-related__label">{nextLabel}</span>
            <span className="playbook-lesson-related__title">
              {locale === "sr" ? ",  Ovo je poslednja lekcija" : ",  This is the final lesson"}
            </span>
          </div>
        )}
      </div>
    </nav>
  );
}
