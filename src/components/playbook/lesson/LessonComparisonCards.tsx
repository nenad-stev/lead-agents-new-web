import type { Locale } from "@/lib/i18n";
import type { RichComparisonCardsBlock } from "@/types/rich-lesson";
import { ll, lt } from "@/components/playbook/lesson/lesson-utils";

type LessonComparisonCardsProps = {
  locale: Locale;
  cards: RichComparisonCardsBlock["cards"];
};

export function LessonComparisonCards({ locale, cards }: LessonComparisonCardsProps) {
  return (
    <div className="playbook-lesson-compare-cards">
      {cards.map((card) => (
        <article
          key={lt(card.title, locale)}
          className={`playbook-lesson-compare-cards__card playbook-lesson-compare-cards__card--${card.variant ?? "muted"}`}
        >
          <header className="playbook-lesson-compare-cards__header">
            <h3 className="playbook-lesson-compare-cards__title">{lt(card.title, locale)}</h3>
            {card.subtitle ? (
              <p className="playbook-lesson-compare-cards__subtitle">{lt(card.subtitle, locale)}</p>
            ) : null}
          </header>
          <ul className="playbook-lesson-compare-cards__list">
            {ll(card.items, locale).map((item) => (
              <li key={item.slice(0, 40)}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
