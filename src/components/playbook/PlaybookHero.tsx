import { Button } from "@/components/ui/Button";
import type { Locale } from "@/lib/i18n";
import { t, type LocalizedText } from "@/types/playbook";

type PlaybookHeroProps = {
  locale: Locale;
  title: LocalizedText;
  subtitle: LocalizedText;
  primaryCta: LocalizedText;
  secondaryCta: LocalizedText;
  primaryHref: string;
  secondaryHref: string;
  eyebrow?: string;
};

export function PlaybookHero({
  locale,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  primaryHref,
  secondaryHref,
  eyebrow,
}: PlaybookHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/50 bg-background pb-16 pt-12 md:pb-24 md:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,204,0,0.08)_0%,_transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        {eyebrow ? (
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]">
          {t(title, locale)}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {t(subtitle, locale)}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href={primaryHref}>{t(primaryCta, locale)}</Button>
          <Button href={secondaryHref} variant="secondary">
            {t(secondaryCta, locale)}
          </Button>
        </div>
      </div>
    </section>
  );
}
