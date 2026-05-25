import type { Locale } from "@/lib/i18n";
import type { RichFrameworkStep } from "@/types/rich-lesson";
import { lt } from "@/components/playbook/lesson/lesson-utils";

const fieldLabels = {
  whatToDo: { sr: "Šta uraditi", en: "What to do" },
  whyItMatters: { sr: "Zašto je važno", en: "Why it matters" },
  example: { sr: "Primer", en: "Example" },
  commonMistake: { sr: "Česta greška", en: "Common mistake" },
  tryThis: { sr: "Probaj ovo", en: "Try this" },
};

type FrameworkStepCardProps = {
  locale: Locale;
  step: RichFrameworkStep;
};

export function FrameworkStepCard({ locale, step }: FrameworkStepCardProps) {
  return (
    <article className="playbook-lesson-framework-step">
      <div className="playbook-lesson-framework-step__header">
        <span className="playbook-lesson-framework-step__number">{step.step}</span>
        <h3 className="playbook-lesson-framework-step__title">{lt(step.title, locale)}</h3>
      </div>
      <dl className="playbook-lesson-framework-step__fields">
        {(
          [
            ["whatToDo", step.whatToDo],
            ["whyItMatters", step.whyItMatters],
            ["example", step.example],
            ["commonMistake", step.commonMistake],
            ["tryThis", step.tryThis],
          ] as const
        ).map(([key, value]) => (
          <div key={key} className="playbook-lesson-framework-step__field">
            <dt>{fieldLabels[key][locale]}</dt>
            <dd>{lt(value, locale)}</dd>
          </div>
        ))}
      </dl>
      <p className="playbook-lesson-callout playbook-lesson-callout--tip playbook-lesson-framework-step__highlight">
        {lt(step.highlight, locale)}
      </p>
    </article>
  );
}
