import type { Locale } from "@/lib/i18n";
import type { RichProofCard } from "@/types/rich-lesson";
import { lt } from "@/components/playbook/lesson/lesson-utils";

type ProofCardProps = {
  locale: Locale;
  card: RichProofCard;
  index: number;
};

function sourceHost(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function ProofCard({ locale, card, index }: ProofCardProps) {
  const host = sourceHost(card.sourceUrl);

  return (
    <article className="playbook-lesson-proof-card" role="listitem">
      <div className="playbook-lesson-proof-card__top">
        <span className="playbook-lesson-proof-card__index" aria-hidden>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="playbook-lesson-proof-card__quote" aria-hidden>
          “
        </span>
      </div>
      <h3 className="playbook-lesson-proof-card__title">{lt(card.title, locale)}</h3>
      <blockquote className="playbook-lesson-proof-card__body">
        <p>{lt(card.body, locale)}</p>
      </blockquote>
      <a
        href={card.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="playbook-lesson-proof-card__source"
      >
        <span className="playbook-lesson-proof-card__source-host">{host}</span>
        <span className="playbook-lesson-proof-card__source-label">
          {lt(card.sourceLabel, locale)}
        </span>
        <span className="playbook-lesson-proof-card__source-arrow" aria-hidden>
          ↗
        </span>
      </a>
    </article>
  );
}
