import Image from "next/image";
import Link from "next/link";

import { GrowthArrows } from "@/components/home/GrowthArrows";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Section } from "@/components/ui/Section";
import type { Dictionary, Locale } from "@/lib/i18n";

type CaseStudyListingItem = {
  href: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

type CaseStudiesListingPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  title: string;
  description: string;
  comingSoonLabel: string;
  items: CaseStudyListingItem[];
};

function CaseStudiesComingSoonGraphic() {
  return (
    <div className="case-studies-coming-soon-graphic relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden border-b border-border/60">
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 40%, rgb(255 204 0 / 22%), transparent 45%), radial-gradient(circle at 72% 58%, rgb(255 204 0 / 12%), transparent 40%)",
        }}
        aria-hidden
      />
      <GrowthArrows variant="section" className="opacity-100" />
      <div className="relative z-10 flex flex-col items-center gap-3 px-6" aria-hidden>
        <div className="flex items-end gap-2">
          {[0.55, 0.75, 1].map((scale, i) => (
            <div
              key={i}
              className="case-study-stack-bar w-10 rounded-md border border-accent/35 bg-background/60 backdrop-blur-sm md:w-12"
              style={{
                height: `${2.25 * scale}rem`,
                animationDelay: `${i * 0.35}s`,
              }}
            />
          ))}
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-dashed border-accent/50 bg-accent/10 text-lg font-bold text-accent">
          +
        </div>
      </div>
    </div>
  );
}

export function CaseStudiesListingPage({
  locale,
  dictionary,
  title,
  description,
  comingSoonLabel,
  items,
}: CaseStudiesListingPageProps) {
  return (
    <>
      <Header locale={locale} dictionary={dictionary} />
      <main>
        <Section title={title} description={description}>
          <div className="grid gap-6 md:grid-cols-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent/50"
              >
                {item.image ? (
                  <div className="relative aspect-[16/10] w-full border-b border-border/60 bg-background/40">
                    <Image
                      src={item.image}
                      alt={item.imageAlt ?? item.title}
                      fill
                      className="object-contain object-center p-4 transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ) : null}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-foreground group-hover:text-accent">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </Link>
            ))}

            <div className="case-studies-coming-soon overflow-hidden rounded-2xl border border-dashed border-accent/25 bg-card">
              <CaseStudiesComingSoonGraphic />
              <div className="flex min-h-[7.5rem] flex-col justify-center p-6">
                <p className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                  {comingSoonLabel}
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
