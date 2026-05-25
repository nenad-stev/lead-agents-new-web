import type { Locale } from "@/lib/i18n";
import { ll, lt } from "@/components/playbook/lesson/lesson-utils";

type ChecklistBlockProps = {
  locale: Locale;
  title: { sr: string; en: string };
  items: { sr: string[]; en: string[] };
};

export function ChecklistBlock({ locale, title, items }: ChecklistBlockProps) {
  return (
    <div className="playbook-lesson-checklist">
      <h3 className="playbook-lesson-checklist__title">{lt(title, locale)}</h3>
      <ul className="playbook-lesson-checklist__list">
        {ll(items, locale).map((item) => (
          <li key={item} className="playbook-lesson-checklist__item">
            <span className="playbook-lesson-checklist__box" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
