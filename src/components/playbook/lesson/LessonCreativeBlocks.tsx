import type { Locale } from "@/lib/i18n";
import type {
  RichBigStatementBlock,
  RichCascadeBlock,
  RichCostStampBlock,
  RichForkPathsBlock,
  RichUnknownGridBlock,
} from "@/types/rich-lesson";
import { lt } from "@/components/playbook/lesson/lesson-utils";

export function LessonBigStatement({
  locale,
  block,
}: {
  locale: Locale;
  block: RichBigStatementBlock;
}) {
  const variant = block.variant ?? "accent";
  return (
    <figure
      className={`playbook-lesson-statement playbook-lesson-statement--${variant}`}
    >
      {block.eyebrow ? (
        <p className="playbook-lesson-statement__eyebrow">{lt(block.eyebrow, locale)}</p>
      ) : null}
      <blockquote className="playbook-lesson-statement__text">
        {lt(block.statement, locale)}
      </blockquote>
      {block.support ? (
        <figcaption className="playbook-lesson-statement__support">
          {lt(block.support, locale)}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function LessonCascade({
  locale,
  block,
}: {
  locale: Locale;
  block: RichCascadeBlock;
}) {
  return (
    <div className="playbook-lesson-cascade">
      {block.title ? (
        <p className="playbook-lesson-cascade__title">{lt(block.title, locale)}</p>
      ) : null}
      <div className="playbook-lesson-cascade__trigger">
        <span className="playbook-lesson-cascade__spark" aria-hidden>
          ↓
        </span>
        <p>{lt(block.trigger, locale)}</p>
      </div>
      <ol className="playbook-lesson-cascade__list">
        {block.steps.map((step, index) => (
          <li key={`${index}-${lt(step, locale).slice(0, 24)}`}>
            <span className="playbook-lesson-cascade__num" aria-hidden>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{lt(step, locale)}</span>
          </li>
        ))}
      </ol>
      <p className="playbook-lesson-cascade__punch">{lt(block.punchline, locale)}</p>
    </div>
  );
}

export function LessonUnknownGrid({
  locale,
  block,
}: {
  locale: Locale;
  block: RichUnknownGridBlock;
}) {
  return (
    <div className="playbook-lesson-unknown">
      {block.title ? (
        <p className="playbook-lesson-unknown__title">{lt(block.title, locale)}</p>
      ) : null}
      <div className="playbook-lesson-unknown__grid">
        {block.items.map((item) => (
          <article
            key={lt(item.label, locale)}
            className="playbook-lesson-unknown__card"
          >
            <span className="playbook-lesson-unknown__mark" aria-hidden>
              {lt(item.mark, locale)}
            </span>
            <h3 className="playbook-lesson-unknown__label">{lt(item.label, locale)}</h3>
            <p className="playbook-lesson-unknown__detail">{lt(item.detail, locale)}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function LessonForkPaths({
  locale,
  block,
}: {
  locale: Locale;
  block: RichForkPathsBlock;
}) {
  const leftTone = block.left.tone ?? "danger";
  const rightTone = block.right.tone ?? "accent";
  return (
    <div className="playbook-lesson-fork">
      <article
        className={`playbook-lesson-fork__path playbook-lesson-fork__path--${leftTone}`}
      >
        <p className="playbook-lesson-fork__label">{lt(block.left.label, locale)}</p>
        <h3 className="playbook-lesson-fork__title">{lt(block.left.title, locale)}</h3>
        <p className="playbook-lesson-fork__body">{lt(block.left.body, locale)}</p>
      </article>
      <div className="playbook-lesson-fork__vs" aria-hidden>
        <span>{block.versus ? lt(block.versus, locale) : "vs"}</span>
      </div>
      <article
        className={`playbook-lesson-fork__path playbook-lesson-fork__path--${rightTone}`}
      >
        <p className="playbook-lesson-fork__label">{lt(block.right.label, locale)}</p>
        <h3 className="playbook-lesson-fork__title">{lt(block.right.title, locale)}</h3>
        <p className="playbook-lesson-fork__body">{lt(block.right.body, locale)}</p>
      </article>
    </div>
  );
}

export function LessonCostStamp({
  locale,
  block,
}: {
  locale: Locale;
  block: RichCostStampBlock;
}) {
  return (
    <div className="playbook-lesson-cost">
      <div className="playbook-lesson-cost__pair">
        <div className="playbook-lesson-cost__side playbook-lesson-cost__side--panic">
          <p className="playbook-lesson-cost__value">{lt(block.left.value, locale)}</p>
          <p className="playbook-lesson-cost__label">{lt(block.left.label, locale)}</p>
        </div>
        <span className="playbook-lesson-cost__slash" aria-hidden>
          /
        </span>
        <div className="playbook-lesson-cost__side playbook-lesson-cost__side--build">
          <p className="playbook-lesson-cost__value">{lt(block.right.value, locale)}</p>
          <p className="playbook-lesson-cost__label">{lt(block.right.label, locale)}</p>
        </div>
      </div>
      <p className="playbook-lesson-cost__note">{lt(block.note, locale)}</p>
    </div>
  );
}
