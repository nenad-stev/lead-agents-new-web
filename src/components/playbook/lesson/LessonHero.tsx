import type { Locale } from "@/lib/i18n";
import type { RichLessonHero } from "@/types/rich-lesson";
import { ll, lt } from "@/components/playbook/lesson/lesson-utils";

type LessonHeroProps = {
  locale: Locale;
  hero: RichLessonHero;
  phaseLabel?: string;
  phaseTitle?: string;
};

export function LessonHero({ locale, hero, phaseLabel, phaseTitle }: LessonHeroProps) {
  return (
    <header className="playbook-lesson-hero">
      {phaseLabel && phaseTitle ? (
        <p className="playbook-lesson-hero__phase">
          {phaseLabel}: {phaseTitle}
        </p>
      ) : null}
      <p className="playbook-lesson-hero__eyebrow">{lt(hero.eyebrow, locale)}</p>
      <h1 className="playbook-lesson-hero__title">{lt(hero.title, locale)}</h1>
      <div className="playbook-lesson-hero__body">
        {ll(hero.paragraphs, locale).map((p) => (
          <p key={p.slice(0, 48)} className="playbook-lesson-hero__paragraph">
            {p}
          </p>
        ))}
      </div>
      {hero.callout ? (
        <p className="playbook-lesson-callout playbook-lesson-callout--accent playbook-lesson-hero__callout">
          {lt(hero.callout, locale)}
        </p>
      ) : null}
    </header>
  );
}
