import type { Locale } from "@/lib/i18n";
import type { RichZoneCard } from "@/types/rich-lesson";
import { lt } from "@/components/playbook/lesson/lesson-utils";

type LessonZoneCardsProps = {
  locale: Locale;
  title?: { sr: string; en: string };
  subtitle?: { sr: string; en: string };
  cards: RichZoneCard[];
};

export function LessonZoneCards({ locale, title, subtitle, cards }: LessonZoneCardsProps) {
  return (
    <div className="playbook-lesson-zone-cards">
      {title ? <h3 className="playbook-lesson-zone-cards__title">{lt(title, locale)}</h3> : null}
      {subtitle ? (
        <p className="playbook-lesson-zone-cards__subtitle">{lt(subtitle, locale)}</p>
      ) : null}
      <ol className="playbook-lesson-zone-cards__list">
        {cards.map((card, index) => (
          <li key={lt(card.zone, locale)} className="playbook-lesson-zone-cards__item">
            <div className="playbook-lesson-zone-cards__marker" aria-hidden>
              <span className="playbook-lesson-zone-cards__step">{index + 1}</span>
            </div>
            <article className="playbook-lesson-zone-cards__card">
              <header className="playbook-lesson-zone-cards__header">
                <h4 className="playbook-lesson-zone-cards__zone">{lt(card.zone, locale)}</h4>
                {card.eyebrow ? (
                  <span className="playbook-lesson-zone-cards__eyebrow">{lt(card.eyebrow, locale)}</span>
                ) : null}
              </header>
              <p className="playbook-lesson-zone-cards__job">{lt(card.job, locale)}</p>
              <div className="playbook-lesson-zone-cards__columns">
                <div className="playbook-lesson-zone-cards__col playbook-lesson-zone-cards__col--do">
                  <p className="playbook-lesson-zone-cards__col-label">
                    {locale === "sr" ? "Uradi" : "Do"}
                  </p>
                  <p className="playbook-lesson-zone-cards__col-text">{lt(card.doThis, locale)}</p>
                </div>
                {card.avoid ? (
                  <div className="playbook-lesson-zone-cards__col playbook-lesson-zone-cards__col--avoid">
                    <p className="playbook-lesson-zone-cards__col-label">
                      {locale === "sr" ? "Izbegni" : "Avoid"}
                    </p>
                    <p className="playbook-lesson-zone-cards__col-text">{lt(card.avoid, locale)}</p>
                  </div>
                ) : null}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
