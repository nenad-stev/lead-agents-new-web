import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

type CaseStudyHighlightProps = {
  title: string;
  description: string;
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
  eyebrow?: string;
};

export function CaseStudyHighlight({
  title,
  description,
  cta,
  href,
  image,
  imageAlt,
  eyebrow = "Case study",
}: CaseStudyHighlightProps) {
  return (
    <Section className="home-section">
      <article className="home-case-study group relative overflow-hidden rounded-3xl border border-accent/20">
        <div className="home-case-study__glow pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch">
          <div className="home-case-study__media relative min-h-[280px] sm:min-h-[320px] lg:min-h-[400px]">
            <div className="home-case-study__media-bg pointer-events-none absolute inset-0" aria-hidden />
            <div className="home-case-study__media-fade pointer-events-none absolute inset-0" aria-hidden />
            <div className="relative flex h-full min-h-[inherit] items-center justify-center p-8 sm:p-10 lg:p-12">
              <Image
                src={image}
                alt={imageAlt}
                width={560}
                height={560}
                className="home-case-study__image relative z-[1] h-auto w-full max-w-[min(100%,22rem)] object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.45)]"
                sizes="(max-width: 1024px) 90vw, 360px"
                priority={false}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center border-t border-border/50 p-8 sm:p-10 lg:border-t-0 lg:border-l lg:p-12 lg:pl-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              {eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl lg:text-[2rem]">
              {title}
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              {description}
            </p>
            <div className="mt-8">
              <Button href={href}>{cta}</Button>
            </div>
          </div>
        </div>
      </article>
    </Section>
  );
}
