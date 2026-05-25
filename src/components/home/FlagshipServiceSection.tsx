import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { GrowthArrowIcon, GrowthArrows } from "@/components/home/GrowthArrows";
import { homeFlagshipService } from "@/data/home";
import type { Locale } from "@/lib/i18n";
import type { LocalizedText } from "@/types/service";

type FlagshipServiceSectionProps = {
  locale: Locale;
  href: string;
  contactHref: string;
  labels: {
    badge: string;
    learnMore: string;
    cta: string;
    includes: string;
  };
};

function t(text: LocalizedText, locale: Locale) {
  return text[locale];
}

export function FlagshipServiceSection({
  locale,
  href,
  contactHref,
  labels,
}: FlagshipServiceSectionProps) {
  const service = homeFlagshipService;

  return (
    <div
      id={`usluga-${service.slug}`}
      className="scroll-mt-28 relative overflow-hidden rounded-3xl border border-accent/35 bg-card shadow-[0_0_80px_-20px_rgba(255,204,0,0.2)]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 20%, rgb(255 204 0 / 14%), transparent 42%), radial-gradient(circle at 88% 80%, rgb(255 204 0 / 8%), transparent 38%)",
        }}
        aria-hidden
      />
      <GrowthArrows variant="section" />

      <div className="relative grid gap-10 p-6 md:p-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12 lg:p-12">
        <div>
          <span className="inline-flex rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-black">
            {labels.badge}
          </span>

          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {t(service.title, locale)}
          </p>

          <h3 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]">
            {t(service.headline, locale)}
          </h3>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {t(service.description, locale)}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={contactHref}>{labels.cta}</Button>
            <Link
              href={href}
              className="inline-flex items-center justify-center rounded-full border border-accent/60 px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/10 hover:text-foreground"
            >
              {labels.learnMore} →
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {labels.includes}
          </p>
          <ul className="grid gap-3 sm:grid-cols-1">
            {service.pillars.map((pillar) => (
              <li
                key={pillar.step}
                className="home-pillar-hover rounded-2xl border border-border/80 bg-background/50 p-4 md:p-5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold tracking-widest text-accent">
                    {pillar.step}
                  </span>
                  <GrowthArrowIcon className="opacity-70" />
                </div>
                <p className="mt-2 text-base font-bold text-foreground">
                  {t(pillar.title, locale)}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {t(pillar.description, locale)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
