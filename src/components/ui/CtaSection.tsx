import Link from "next/link";

import { Button } from "@/components/ui/Button";
import type { Locale } from "@/lib/i18n";

export type CtaSectionVariant = "band" | "contained" | "compact";

type CtaSectionProps = {
  locale: Locale;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  eyebrow?: string;
  highlights?: string[];
  variant?: CtaSectionVariant;
  align?: "center" | "left";
  className?: string;
  prepend?: React.ReactNode;
};

const defaultHighlights: Record<Locale, string[]> = {
  sr: ["Besplatno", "30 minuta", "Bez obaveza"],
  en: ["Free", "30 minutes", "No obligation"],
};

export function CtaSection({
  locale,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  eyebrow,
  highlights,
  variant = "band",
  align = "center",
  className,
  prepend,
}: CtaSectionProps) {
  const pills = highlights ?? (variant === "compact" ? [] : defaultHighlights[locale]);
  const showDecor = variant === "band";
  const rootClass = [
    "cta-section",
    `cta-section--${variant}`,
    align === "left" ? "cta-section--align-left" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={rootClass}>
      {showDecor ? (
        <>
          <div className="cta-section__glow cta-section__glow--top" aria-hidden />
          <div className="cta-section__glow cta-section__glow--side" aria-hidden />
        </>
      ) : null}

      {prepend ? <div className="cta-section__prepend">{prepend}</div> : null}

      <div className="cta-section__inner">
        <div className={variant === "compact" ? "cta-section__copy" : undefined}>
          {eyebrow ? <p className="cta-section__eyebrow">{eyebrow}</p> : null}

          <h2 className="cta-section__title">{title}</h2>
          <p className="cta-section__text">{description}</p>

          {pills.length > 0 ? (
            <ul
              className="cta-section__highlights"
              aria-label={locale === "sr" ? "Prednosti" : "Benefits"}
            >
              {pills.map((item) => (
                <li key={item} className="cta-section__pill">
                  <span className="cta-section__pill-dot" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="cta-section__actions">
          <Button href={primaryHref} variant="primary" className="cta-section__btn">
            {primaryLabel}
          </Button>
          {secondaryHref && secondaryLabel ? (
            <Button
              href={secondaryHref}
              variant="secondary"
              className="cta-section__btn cta-section__btn--secondary"
            >
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/** Inline service upsell strip (case study mid-page) */
export function CtaServiceStrip({
  label,
  href,
  buttonLabel,
  className,
}: {
  label: string;
  href: string;
  buttonLabel: string;
  className?: string;
}) {
  return (
    <section className={["cta-service-strip", className].filter(Boolean).join(" ")}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:px-8 lg:flex-row lg:justify-between lg:text-left">
        <p className="cta-service-strip__label">{label}</p>
        <Link href={href} className="cta-service-strip__btn shrink-0">
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
