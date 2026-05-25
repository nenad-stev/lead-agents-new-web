import { ContentLocker } from "@/components/playbook/ContentLocker";
import type { Locale } from "@/lib/i18n";
import { t, tList, type LessonSection, type PlaybookLesson } from "@/types/playbook";

type LessonArticleProps = {
  locale: Locale;
  lesson: PlaybookLesson;
};

function LessonSectionBlock({
  section,
  locale,
}: {
  section: LessonSection;
  locale: Locale;
}) {
  return (
    <section key={section.id} id={section.id} className="mb-14 scroll-mt-28">
      <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
        {t(section.title, locale)}
      </h2>
      <div className="mt-5 space-y-4">
        {tList(section.paragraphs, locale).map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </div>
      {section.bullets ? (
        <ul className="mt-5 list-disc space-y-2 pl-6 text-muted">
          {tList(section.bullets, locale).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

export function LessonArticle({ locale, lesson }: LessonArticleProps) {
  const previewSections = lesson.sections.filter((section) => !section.gated);
  const gatedSections = lesson.sections.filter((section) => section.gated);

  return (
    <article className="playbook-article max-w-none">
      {previewSections.map((section) => (
        <LessonSectionBlock key={section.id} section={section} locale={locale} />
      ))}

      {gatedSections.length > 0 ? (
        <ContentLocker locale={locale}>
          {gatedSections.map((section) => (
            <LessonSectionBlock key={section.id} section={section} locale={locale} />
          ))}
        </ContentLocker>
      ) : null}
    </article>
  );
}
