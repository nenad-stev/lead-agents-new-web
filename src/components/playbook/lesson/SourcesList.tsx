import type { Locale } from "@/lib/i18n";
import type { RichSourceItem } from "@/types/rich-lesson";
import { lt } from "@/components/playbook/lesson/lesson-utils";

type SourcesListProps = {
  locale: Locale;
  title: { sr: string; en: string };
  sources: RichSourceItem[];
};

export function SourcesList({ locale, title, sources }: SourcesListProps) {
  if (!sources.length) return null;

  return (
    <div className="playbook-lesson-sources">
      <h2 className="playbook-lesson-section__title">{lt(title, locale)}</h2>
      <ol className="playbook-lesson-sources__list">
        {sources.map((source, index) => (
          <li key={`source-${index}-${source.url}`}>
            <span className="playbook-lesson-sources__index">{index + 1}.</span>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="playbook-lesson-sources__link"
            >
              {lt(source.title, locale)}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
