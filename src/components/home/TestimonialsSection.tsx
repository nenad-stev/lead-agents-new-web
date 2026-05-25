import Image from "next/image";

import { homeTestimonials } from "@/data/home";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n";

type TestimonialsSectionProps = {
  locale: Locale;
  title: string;
  subtitle: string;
};

export function TestimonialsSection({ locale, title, subtitle }: TestimonialsSectionProps) {
  return (
    <Section
      title={title}
      description={subtitle}
      className="home-section home-section--alt"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {homeTestimonials.map((item, index) => (
          <blockquote
            key={item.id}
            className="home-card-hover flex h-full flex-col rounded-2xl border border-border bg-card p-6"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(homeTestimonials.length).padStart(2, "0")}
            </span>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
              &ldquo;{item.quote[locale]}&rdquo;
            </p>
            <footer className="mt-6 flex items-center gap-4 border-t border-border/60 pt-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border/80">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover object-center"
                  sizes="56px"
                />
              </div>
              <cite className="not-italic">
                <p className="font-semibold text-foreground">{item.name}</p>
              </cite>
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
