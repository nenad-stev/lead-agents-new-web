import type { Locale } from "@/lib/i18n";
import type { RichProofCard } from "@/types/rich-lesson";
import { ProofCard } from "@/components/playbook/lesson/ProofCard";

type ProofGridProps = {
  locale: Locale;
  cards: RichProofCard[];
};

export function ProofGrid({ locale, cards }: ProofGridProps) {
  return (
    <div className="playbook-lesson-proof-grid" role="list">
      {cards.map((card, index) => (
        <ProofCard
          key={`proof-${index}-${card.sourceUrl ?? card.title.sr}`}
          locale={locale}
          card={card}
          index={index}
        />
      ))}
    </div>
  );
}
