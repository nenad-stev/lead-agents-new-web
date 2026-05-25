import type { Locale } from "@/lib/i18n";
import type { LocalizedText } from "@/types/playbook";
import type { PlaybookLesson } from "@/types/playbook";

type LessonCta = {
  primaryLabel: LocalizedText;
  secondaryLabel: LocalizedText;
};

type CtaAction = {
  href: string;
  label: LocalizedText;
};

const matchesAny = (text: LocalizedText, patterns: RegExp[]) =>
  patterns.some((pattern) => pattern.test(text.en) || pattern.test(text.sr));

const CONSULTATION_PATTERNS = [/konsultacij/i, /consultation/i];
const PLAYBOOK_OVERVIEW_PATTERNS = [/pregled playbook/i, /playbook overview/i];

/** Map CTA labels to the correct hrefs (continue vs consultation vs playbook home). */
export function resolveLessonCtaActions(
  cta: LessonCta,
  next: PlaybookLesson | undefined,
  paths: {
    contact: string;
    cluster: string;
    lesson: (slug: string) => string;
  },
): { primary: CtaAction; secondary: CtaAction } {
  const continueHref = next ? paths.lesson(next.slug) : paths.cluster;

  const primaryIsConsultation = matchesAny(cta.primaryLabel, CONSULTATION_PATTERNS);
  const secondaryIsPlaybookOverview = matchesAny(cta.secondaryLabel, PLAYBOOK_OVERVIEW_PATTERNS);

  if (primaryIsConsultation) {
    return {
      primary: { href: paths.contact, label: cta.primaryLabel },
      secondary: {
        href: secondaryIsPlaybookOverview ? paths.cluster : continueHref,
        label: cta.secondaryLabel,
      },
    };
  }

  return {
    primary: { href: continueHref, label: cta.primaryLabel },
    secondary: { href: paths.contact, label: cta.secondaryLabel },
  };
}

export function ltCtaLabel(label: LocalizedText, locale: Locale): string {
  return label[locale];
}
