import type { Locale } from "@/lib/i18n";
import { lt } from "@/components/playbook/lesson/lesson-utils";

type LessonCalloutProps = {
  locale: Locale;
  text: { sr: string; en: string };
  variant?: "default" | "accent" | "tip";
};

export function LessonCallout({ locale, text, variant = "default" }: LessonCalloutProps) {
  return (
    <p className={`playbook-lesson-callout playbook-lesson-callout--${variant}`}>
      {lt(text, locale)}
    </p>
  );
}
