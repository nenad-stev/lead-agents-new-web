import type { Locale } from "@/lib/i18n";
import { lt } from "@/components/playbook/lesson/lesson-utils";

type TemplateBlockProps = {
  locale: Locale;
  title: { sr: string; en: string };
  content: { sr: string; en: string };
};

type TemplateSection = {
  number: number;
  heading: string;
  body: string;
};

function parseTemplateSections(text: string): TemplateSection[] {
  const sections: TemplateSection[] = [];
  const lines = text.split("\n");
  let current: { number: number; heading: string; lines: string[] } | null = null;

  for (const line of lines) {
    const match = line.match(/^(\d+)\.\s+(.+)$/);
    if (match) {
      if (current) {
        sections.push({
          number: current.number,
          heading: current.heading,
          body: current.lines.join("\n").trim(),
        });
      }
      current = {
        number: Number(match[1]),
        heading: match[2],
        lines: [],
      };
      continue;
    }
    if (current) {
      current.lines.push(line);
    }
  }

  if (current) {
    sections.push({
      number: current.number,
      heading: current.heading,
      body: current.lines.join("\n").trim(),
    });
  }

  return sections;
}

function TemplateSectionBody({ body }: { body: string }) {
  const blocks = body.split(/\n\n+/).filter(Boolean);

  return (
    <div className="playbook-lesson-template__body">
      {blocks.map((block) => {
        const lines = block.split("\n");
        const isList = lines.every((line) => line.trim().startsWith("-"));

        if (isList) {
          return (
            <ul key={block.slice(0, 40)} className="playbook-lesson-template__list">
              {lines.map((line) => (
                <li key={line}>{line.replace(/^\s*-\s*/, "")}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={block.slice(0, 40)} className="playbook-lesson-template__paragraph">
            {block}
          </p>
        );
      })}
    </div>
  );
}

export function TemplateBlock({ locale, title, content }: TemplateBlockProps) {
  const text = lt(content, locale);
  const sections = parseTemplateSections(text);

  return (
    <div className="playbook-lesson-template">
      <h3 className="playbook-lesson-template__title">{lt(title, locale)}</h3>
      {sections.length > 0 ? (
        <div className="playbook-lesson-template__grid">
          {sections.map((section) => (
            <article key={section.number} className="playbook-lesson-template__section">
              <header className="playbook-lesson-template__section-header">
                <span className="playbook-lesson-template__section-num" aria-hidden>
                  {section.number}
                </span>
                <h4 className="playbook-lesson-template__section-title">{section.heading}</h4>
              </header>
              {section.body ? <TemplateSectionBody body={section.body} /> : null}
            </article>
          ))}
        </div>
      ) : (
        <pre className="playbook-lesson-template__fallback">
          <code>{text}</code>
        </pre>
      )}
    </div>
  );
}
