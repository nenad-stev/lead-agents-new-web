import type { Locale } from "@/lib/i18n";
import type { RichStatRowBlock } from "@/types/rich-lesson";
import { lt } from "@/components/playbook/lesson/lesson-utils";

type LessonStatRowProps = {
  locale: Locale;
  items: RichStatRowBlock["items"];
};

export function LessonStatRow({ locale, items }: LessonStatRowProps) {
  return (
    <div className="playbook-lesson-stat-row" role="list">
      {items.map((item) => (
        <article key={lt(item.label, locale)} className="playbook-lesson-stat-row__card" role="listitem">
          <p className="playbook-lesson-stat-row__value">{lt(item.value, locale)}</p>
          <p className="playbook-lesson-stat-row__label">{lt(item.label, locale)}</p>
          {item.description ? (
            <p className="playbook-lesson-stat-row__description">{lt(item.description, locale)}</p>
          ) : null}
        </article>
      ))}
    </div>
  );
}
