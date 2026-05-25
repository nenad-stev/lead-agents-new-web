import Image from "next/image";

import { homeDifferentiators } from "@/data/home";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n";

type DifferentiatorsSectionProps = {
  locale: Locale;
  title: string;
};

export function DifferentiatorsSection({ locale, title }: DifferentiatorsSectionProps) {
  const { image } = homeDifferentiators;

  return (
    <Section title={title} className="home-section">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/80 bg-card">
          <Image
            src={image.src}
            alt={image.alt[locale]}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={false}
          />
        </div>

        <div className="space-y-5">
          {homeDifferentiators.paragraphs[locale].map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
          <p className="border-l-4 border-accent pl-4 text-lg font-medium italic text-foreground">
            {homeDifferentiators.motto[locale]}
          </p>
        </div>
      </div>
    </Section>
  );
}
