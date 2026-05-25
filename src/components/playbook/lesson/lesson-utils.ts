import type { Locale } from "@/lib/i18n";
import type { LocalizedList, LocalizedText } from "@/types/playbook";

export function lt(text: LocalizedText, locale: Locale): string {
  return text[locale];
}

export function ll(text: LocalizedList, locale: Locale): string[] {
  return text[locale];
}

export function lessonSectionClass(...parts: string[]): string {
  return ["playbook-lesson-section", ...parts].filter(Boolean).join(" ");
}
