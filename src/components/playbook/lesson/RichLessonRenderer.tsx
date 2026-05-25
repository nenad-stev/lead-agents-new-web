import type { Locale } from "@/lib/i18n";
import type { RichLessonBlock, RichLessonContent } from "@/types/rich-lesson";
import { ChecklistBlock } from "@/components/playbook/lesson/ChecklistBlock";
import { FrameworkStepCard } from "@/components/playbook/lesson/FrameworkStepCard";
import { LessonBulletList } from "@/components/playbook/lesson/LessonTable";
import { LessonCallout } from "@/components/playbook/lesson/LessonCallout";
import { LessonTable } from "@/components/playbook/lesson/LessonTable";
import { ProofGrid } from "@/components/playbook/lesson/ProofGrid";
import { TemplateBlock } from "@/components/playbook/lesson/TemplateBlock";
import { ToolCard } from "@/components/playbook/lesson/ToolCard";
import { VideoEmbedCard } from "@/components/playbook/lesson/VideoEmbedCard";
import { FAQAccordion } from "@/components/playbook/lesson/FAQAccordion";
import { SourcesList } from "@/components/playbook/lesson/SourcesList";
import { RelatedLessonsBlock } from "@/components/playbook/lesson/RelatedLessonsBlock";
import { LessonComparisonCards } from "@/components/playbook/lesson/LessonComparisonCards";
import { LessonIllustration } from "@/components/playbook/lesson/LessonIllustration";
import { LessonPipelineFlow } from "@/components/playbook/lesson/LessonPipelineFlow";
import { LessonStatRow } from "@/components/playbook/lesson/LessonStatRow";
import { LessonZoneCards } from "@/components/playbook/lesson/LessonZoneCards";
import { ll, lt, lessonSectionClass } from "@/components/playbook/lesson/lesson-utils";

type RichLessonRendererProps = {
  locale: Locale;
  content: RichLessonContent;
  lessonHref: (slug: string) => string;
  salesToolHref?: (slug: string) => string;
  previousLabel: string;
  nextLabel: string;
};

function BlockRenderer({
  block,
  locale,
  salesToolHref,
}: {
  block: RichLessonBlock;
  locale: Locale;
  salesToolHref?: (slug: string) => string;
}) {
  switch (block.type) {
    case "paragraphs":
      return (
        <div className="playbook-lesson-prose">
          {ll(block.paragraphs, locale).map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      );
    case "bullets":
      return <LessonBulletList locale={locale} items={block.items} />;
    case "callout":
      return <LessonCallout locale={locale} text={block.text} variant={block.variant} />;
    case "table":
      return <LessonTable locale={locale} table={block} />;
    case "framework-intro":
      return (
        <div className="playbook-lesson-framework-intro">
          <h3 className="playbook-lesson-framework-intro__title">
            {lt(block.title, locale)}
          </h3>
          <p className="playbook-lesson-framework-intro__description">
            {lt(block.description, locale)}
          </p>
        </div>
      );
    case "framework-steps":
      return (
        <div className="playbook-lesson-framework-steps">
          {block.steps.map((step) => (
            <FrameworkStepCard key={step.step} locale={locale} step={step} />
          ))}
        </div>
      );
    case "proof-grid":
      return <ProofGrid locale={locale} cards={block.cards} />;
    case "tool-grid":
      return (
        <div className="playbook-lesson-tool-grid">
          {block.tools.map((tool) => (
            <ToolCard key={tool.name} locale={locale} tool={tool} salesToolHref={salesToolHref} />
          ))}
        </div>
      );
    case "video":
      return <VideoEmbedCard locale={locale} video={block.video} />;
    case "checklist":
      return (
        <ChecklistBlock locale={locale} title={block.title} items={block.items} />
      );
    case "template":
      return (
        <TemplateBlock locale={locale} title={block.title} content={block.content} />
      );
    case "visual-suggestions":
      return null;
    case "workflow":
      return (
        <div className="playbook-lesson-workflow">
          <h3 className="playbook-lesson-workflow__title">{lt(block.title, locale)}</h3>
          <ol className="playbook-lesson-workflow__steps">
            {ll(block.steps, locale).map((step, i) => (
              <li key={step.slice(0, 30)}>
                <span className="playbook-lesson-workflow__num">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
          {block.highlight ? (
            <LessonCallout locale={locale} text={block.highlight} variant="accent" />
          ) : null}
        </div>
      );
    case "story":
      return (
        <div className="playbook-lesson-story">
          <h3 className="playbook-lesson-story__title">{lt(block.title, locale)}</h3>
          <div className="playbook-lesson-prose">
            {ll(block.paragraphs, locale).map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      );
    case "pipeline-flow":
      return (
        <LessonPipelineFlow
          locale={locale}
          title={block.title}
          subtitle={block.subtitle}
          stages={block.stages}
        />
      );
    case "stat-row":
      return <LessonStatRow locale={locale} items={block.items} />;
    case "comparison-cards":
      return <LessonComparisonCards locale={locale} cards={block.cards} />;
    case "illustration":
      return <LessonIllustration locale={locale} block={block} />;
    case "zone-cards":
      return (
        <LessonZoneCards
          locale={locale}
          title={block.title}
          subtitle={block.subtitle}
          cards={block.cards}
        />
      );
    case "section":
      if (block.id === "visuals") {
        return null;
      }
      return (
        <section
          id={block.id}
          className={lessonSectionClass()}
        >
          <h2 className="playbook-lesson-section__title">{lt(block.title, locale)}</h2>
          <div className="playbook-lesson-section__body">
            {block.blocks.map((child, index) => (
              <BlockRenderer
                key={`${block.id}-${index}`}
                block={child}
                locale={locale}
                salesToolHref={salesToolHref}
              />
            ))}
          </div>
        </section>
      );
    default:
      return null;
  }
}

export function RichLessonRenderer({
  locale,
  content,
  lessonHref,
  salesToolHref,
  previousLabel,
  nextLabel,
}: RichLessonRendererProps) {
  const faqTitle = { sr: "Česta pitanja (SEO)", en: "FAQ" };
  const sourcesTitle = {
    sr: "Izvori i dalje čitanje",
    en: "Sources & further reading",
  };
  const relatedTitle = { sr: "Povezane lekcije", en: "Related lessons" };

  return (
    <article className="playbook-lesson-article">
      {content.blocks.map((block, index) => (
        <BlockRenderer
          key={index}
          block={block}
          locale={locale}
          salesToolHref={salesToolHref}
        />
      ))}

      <FAQAccordion locale={locale} title={faqTitle} items={content.faq} />

      <SourcesList locale={locale} title={sourcesTitle} sources={content.sources} />

      <RelatedLessonsBlock
        locale={locale}
        title={relatedTitle}
        previous={content.relatedLessons.previous}
        next={content.relatedLessons.next}
        lessonHref={lessonHref}
        previousLabel={previousLabel}
        nextLabel={nextLabel}
      />
    </article>
  );
}
