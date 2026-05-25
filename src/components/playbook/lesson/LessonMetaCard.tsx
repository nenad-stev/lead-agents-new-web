import type { Locale } from "@/lib/i18n";
import type { RichLessonMeta } from "@/types/rich-lesson";
import { ll, lt } from "@/components/playbook/lesson/lesson-utils";

type LessonMetaCardProps = {
  locale: Locale;
  meta: RichLessonMeta;
  lessonNumber: number;
  lessonNumberLabel: string;
};

const labels = {
  stage: { sr: "Faza", en: "Stage" },
  readingTime: { sr: "Vreme čitanja", en: "Reading time" },
  difficulty: { sr: "Nivo", en: "Difficulty" },
  outcome: { sr: "Glavni ishod", en: "Main outcome" },
  tools: { sr: "Preporučeni alati", en: "Recommended tools" },
};

export function LessonMetaCard({
  locale,
  meta,
  lessonNumber,
  lessonNumberLabel,
}: LessonMetaCardProps) {
  const items = [
    { label: lessonNumberLabel, value: String(lessonNumber) },
    { label: labels.stage[locale], value: lt(meta.stage, locale) },
    { label: labels.readingTime[locale], value: lt(meta.readingTime, locale) },
    { label: labels.difficulty[locale], value: lt(meta.difficulty, locale) },
    { label: labels.outcome[locale], value: lt(meta.outcome, locale) },
    { label: labels.tools[locale], value: lt(meta.recommendedTools, locale) },
  ];

  return (
    <div className="playbook-lesson-meta">
      <div className="playbook-lesson-meta__grid">
        {items.map((item) => (
          <div key={item.label} className="playbook-lesson-meta__item">
            <dt className="playbook-lesson-meta__label">{item.label}</dt>
            <dd className="playbook-lesson-meta__value">{item.value}</dd>
          </div>
        ))}
      </div>
    </div>
  );
}
