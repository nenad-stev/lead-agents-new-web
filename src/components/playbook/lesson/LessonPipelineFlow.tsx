import type { Locale } from "@/lib/i18n";
import type { LocalizedText } from "@/types/playbook";
import { lt } from "@/components/playbook/lesson/lesson-utils";

type LessonPipelineFlowProps = {
  locale: Locale;
  title?: LocalizedText;
  subtitle?: LocalizedText;
  stages: LocalizedText[];
};

export function LessonPipelineFlow({
  locale,
  title,
  subtitle,
  stages,
}: LessonPipelineFlowProps) {
  const labels = stages.map((stage) => lt(stage, locale));

  return (
    <div className="playbook-lesson-pipeline-flow" role="img" aria-label={labels.join(" → ")}>
      {title ? (
        <h3 className="playbook-lesson-pipeline-flow__title">{lt(title, locale)}</h3>
      ) : null}
      {subtitle ? (
        <p className="playbook-lesson-pipeline-flow__subtitle">{lt(subtitle, locale)}</p>
      ) : null}
      <div className="playbook-lesson-pipeline-flow__track">
        {labels.map((label, index) => (
          <div key={label} className="playbook-lesson-pipeline-flow__step">
            <span className="playbook-lesson-pipeline-flow__node">
              <span className="playbook-lesson-pipeline-flow__num">{index + 1}</span>
            </span>
            <span className="playbook-lesson-pipeline-flow__label">{label}</span>
            {index < labels.length - 1 ? (
              <span className="playbook-lesson-pipeline-flow__arrow" aria-hidden>
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
