import { Section } from "@/components/ui/Section";
import { TOTAL_CLIENT_COUNT } from "@/data/clients";
import type { Locale } from "@/lib/i18n";

import { ClientLogoMarquee } from "./ClientLogoMarquee";

type ClientsSectionProps = {
  locale: Locale;
  title: string;
  subtitle: string;
  impact: string;
};

export function ClientsSection({ locale, title, subtitle, impact }: ClientsSectionProps) {
  return (
    <Section className="home-section relative overflow-hidden py-14 md:py-20">
      <div className="relative mx-auto max-w-6xl px-6 text-center md:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {locale === "sr" ? "Poverenje" : "Trust"}
        </p>
        <div className="mt-4 flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8">
          <p
            className="font-bold leading-none text-accent"
            style={{ fontSize: "clamp(3.5rem, 12vw, 6rem)" }}
            aria-hidden
          >
            {TOTAL_CLIENT_COUNT}+
          </p>
          <div className="max-w-xl text-left md:text-left">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              {title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">{subtitle}</p>
          </div>
        </div>
      </div>

      <div className="relative mt-10 md:mt-12">
        <ClientLogoMarquee />
      </div>

      <p className="relative mx-auto mt-8 max-w-2xl px-6 text-center text-sm leading-relaxed text-muted md:mt-10 md:text-base">
        {impact}
      </p>
    </Section>
  );
}
