import Image from "next/image";
import Link from "next/link";

import { CaseStudyHighlight } from "@/components/home/CaseStudyHighlight";
import { ClientLogoMarquee } from "@/components/home/ClientLogoMarquee";
import { FlgResultsSlider } from "@/components/services/FlgResultsSlider";
import { ServiceAudienceSection } from "@/components/services/ServiceAudienceSection";
import { ServiceShowreel } from "@/components/services/ServiceShowreel";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/components/ui/CtaSection";
import { Section } from "@/components/ui/Section";
import { getRoutes } from "@/data/site";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { LocalizedText, ServiceBenefit, ServicePage } from "@/types/service";

type ServiceDetailPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  service: ServicePage;
};

function t(text: LocalizedText, locale: Locale) {
  return text[locale];
}

function ClientAvatar({ name, image }: { name: string; image: string }) {
  return (
    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border/80 bg-background">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover object-top"
        sizes="56px"
      />
    </div>
  );
}

function BenefitGrid({
  items,
  locale,
  columns = 2,
}: {
  items: ServiceBenefit[];
  locale: Locale;
  columns?: 2 | 3;
}) {

  const gridClass =
    columns === 3
      ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      : "grid gap-5 sm:grid-cols-2";

  return (
    <ul className={gridClass}>
      {items.map((item, index) => (
        <li
          key={item.title[locale]}
          className="rounded-2xl border border-border/80 bg-card p-6 md:p-7"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
            {index + 1}
          </span>
          <h3 className="mt-4 text-lg font-bold text-foreground">{t(item.title, locale)}</h3>
          <p className="mt-2 text-base leading-relaxed text-muted">
            {t(item.description, locale)}
          </p>
        </li>
      ))}
    </ul>
  );
}

function StepGrid({
  items,
  locale,
  columns = 3,
}: {
  items: NonNullable<ServicePage["steps"]>["items"];
  locale: Locale;
  columns?: 3 | 4;
}) {
  const gridClass =
    columns === 4
      ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      : "grid gap-6 md:grid-cols-3";

  return (
    <ol className={gridClass}>
      {items.map((step) => (
        <li
          key={step.step}
          className="flex flex-col rounded-2xl border border-border/80 bg-card p-6 md:p-8"
        >
          <span className="text-sm font-bold tracking-widest text-accent">{step.step}</span>
          <h3 className="mt-4 text-xl font-bold text-foreground">{t(step.title, locale)}</h3>
          <p className="mt-3 flex-1 text-base leading-relaxed text-muted">
            {t(step.description, locale)}
          </p>
        </li>
      ))}
    </ol>
  );
}

function ResultsBlock({
  results,
  locale,
}: {
  results: NonNullable<ServicePage["results"]>;
  locale: Locale;
}) {
  return (
    <Section
      id="rezultati"
      title={t(results.title, locale)}
      className="border-b border-border/60 bg-card/30"
    >
      <div className="flex flex-col gap-8">
        {results.items.map((result, index) => (
          <article
            key={result.id}
            className="overflow-hidden rounded-2xl border border-border/80 bg-card"
          >
            <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
              <div className="border-b border-border/60 p-6 md:p-8 lg:border-b-0 lg:border-r">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {locale === "sr" ? `Klijent ${index + 1}` : `Client ${index + 1}`}
                </p>
                <div className="mt-4 flex items-center gap-4">
                  {result.image ? (
                    <ClientAvatar name={result.name} image={result.image} />
                  ) : null}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{result.name}</h3>
                    <p className="mt-1 text-sm text-muted">{t(result.role, locale)}</p>
                  </div>
                </div>

                <dl className="mt-8 grid grid-cols-2 gap-4">
                  {result.stats.map((stat) => (
                    <div key={stat.label[locale]} className="rounded-xl bg-background/60 p-4">
                      <dt className="text-2xl font-bold text-accent md:text-3xl">
                        {stat.value}
                      </dt>
                      <dd className="mt-1 text-xs leading-snug text-muted md:text-sm">
                        {t(stat.label, locale)}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <blockquote className="flex flex-col justify-center p-6 md:p-8">
                <p className="text-base leading-relaxed text-foreground md:text-lg">
                  &ldquo;{t(result.quote, locale)}&rdquo;
                </p>
                <footer className="mt-6 text-sm font-semibold text-muted">
                  — {result.name}
                </footer>
              </blockquote>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function ServiceDetailPage({ locale, dictionary, service }: ServiceDetailPageProps) {
  const routes = getRoutes(locale);
  const labels = dictionary.pages.serviceDetail;
  const contactHref = routes.contact;
  const ctaSubtitle =
    service.consultation.ctaSubtitle?.[locale] ??
    (locale === "sr"
      ? "Pokreni rast svoje firme — bez obaveza, samo jasan plan."
      : "Start growing your business — no obligation, just a clear plan.");

  return (
    <>
      <Header locale={locale} dictionary={dictionary} />

      <main>
        <section className="glow-service-hero relative overflow-hidden border-b border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 md:py-20">
            <Link
              href={routes.home}
              className="text-sm font-medium text-accent hover:underline"
            >
              ← {labels.back}
            </Link>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {t(service.hero.eyebrow, locale)}
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              {t(service.hero.title, locale)}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              {t(service.hero.description, locale)}
            </p>

            {service.hero.audience ? (
              <p className="mt-6 inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground">
                {t(service.hero.audience, locale)}
              </p>
            ) : null}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={contactHref}>{t(service.hero.primaryCta, locale)}</Button>
              <Button
                href={
                  service.caseStudyHighlight
                    ? routes.caseStudy(service.caseStudyHighlight.slug)
                    : service.process
                      ? "#proces"
                      : "#rezultati"
                }
                variant="secondary"
              >
                {t(service.hero.secondaryCta, locale)}
              </Button>
            </div>
          </div>
        </section>

        {service.bannerImage ? (
          <section className="border-b border-border/60 bg-card/20">
            <div className="mx-auto max-w-6xl px-6 py-8 md:px-8 md:py-10">
              <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border border-border/80 bg-card md:aspect-[2.4/1]">
                <Image
                  src={service.bannerImage}
                  alt={t(service.hero.title, locale)}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1280px) 100vw, 1152px"
                  priority
                />
              </div>
            </div>
          </section>
        ) : null}

        {service.showreel ? <ServiceShowreel videos={service.showreel.videos} /> : null}

        {service.deliverables ? (
          <Section
            title={t(service.deliverables.title, locale)}
            className="border-b border-border/60"
          >
            <BenefitGrid
              items={service.deliverables.items}
              locale={locale}
              columns={service.deliverables.items.length >= 6 ? 3 : 2}
            />
          </Section>
        ) : null}

        {service.steps ? (
          <Section
            eyebrow={locale === "sr" ? "Kako radimo" : "How it works"}
            title={t(service.steps.title, locale)}
            className="border-b border-border/60"
          >
            <StepGrid items={service.steps.items} locale={locale} columns={3} />
          </Section>
        ) : null}

        {service.results ? (
          service.results.layout === "slider" ? (
            <section
              id="rezultati"
              className="scroll-mt-28 border-b border-border/60 bg-card/30 py-12 md:py-16"
            >
              <div className="mx-auto max-w-6xl px-6 md:px-8">
                <FlgResultsSlider
                  locale={locale}
                  title={t(service.results.title, locale)}
                  results={service.results.items}
                />
              </div>
            </section>
          ) : (
            <ResultsBlock results={service.results} locale={locale} />
          )
        ) : null}

        {service.caseStudyHighlight ? (
          <CaseStudyHighlight
            title={t(service.caseStudyHighlight.title, locale)}
            description={t(service.caseStudyHighlight.description, locale)}
            cta={t(service.caseStudyHighlight.cta, locale)}
            href={routes.caseStudy(service.caseStudyHighlight.slug)}
            image={service.caseStudyHighlight.image}
            imageAlt={t(service.caseStudyHighlight.imageAlt, locale)}
          />
        ) : null}

        {service.audienceSection ? (
          <ServiceAudienceSection section={service.audienceSection} locale={locale} />
        ) : null}

        {service.highlight ? (
          <section className="border-b border-border/60 bg-accent/10 py-10 md:py-12">
            <div className="mx-auto max-w-6xl px-6 text-center md:px-8">
              <p className="text-xl font-semibold text-foreground md:text-2xl">
                {t(service.highlight, locale)}
              </p>
              {service.highlightLink ? (
                <Link
                  href={
                    service.highlightLink.href.startsWith("/en")
                      ? service.highlightLink.href
                      : locale === "en"
                        ? `/en${service.highlightLink.href}`
                        : service.highlightLink.href
                  }
                  className="mt-4 inline-block text-sm font-semibold text-accent hover:underline"
                >
                  {t(service.highlightLink.label, locale)}
                </Link>
              ) : null}
            </div>
          </section>
        ) : null}

        {service.process ? (
          <Section
            id="proces"
            title={t(service.process.title, locale)}
            className="scroll-mt-28 border-b border-border/60 bg-card/20"
          >
            <StepGrid
              items={service.process.items}
              locale={locale}
              columns={service.process.items.length > 4 ? 3 : 4}
            />
          </Section>
        ) : null}

        {service.testimonials ? (
          <Section
            title={t(service.testimonials.title, locale)}
            className="border-b border-border/60"
          >
            <div className="grid gap-6 md:grid-cols-3">
              {service.testimonials.items.map((item) => (
                <blockquote
                  key={item.id}
                  className="flex h-full flex-col rounded-2xl border border-border bg-card p-6"
                >
                  <p className="flex-1 text-sm leading-relaxed text-muted">
                    &ldquo;{t(item.quote, locale)}&rdquo;
                  </p>
                  <footer className="mt-6 flex items-center gap-4 border-t border-border/60 pt-4">
                    {item.image ? (
                      <ClientAvatar name={item.name} image={item.image} />
                    ) : null}
                    <div>
                      <p className="font-semibold text-foreground">{item.name}</p>
                      <p className="mt-1 text-sm text-muted">{t(item.role, locale)}</p>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </Section>
        ) : null}

        {service.consultation.items ? (
          <Section
            title={t(service.consultation.title, locale)}
            description={
              service.consultation.subtitle
                ? t(service.consultation.subtitle, locale)
                : undefined
            }
          >
            <BenefitGrid items={service.consultation.items} locale={locale} columns={2} />
          </Section>
        ) : null}

        <section className="border-t border-border/60 bg-background py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              {locale === "sr" ? "Neki od naših klijenata" : "Some of our clients"}
            </p>
            <ClientLogoMarquee />
          </div>
        </section>

        <CtaSection
          locale={locale}
          variant="band"
          eyebrow={locale === "sr" ? "Besplatna strategijska sesija" : "Free strategy session"}
          title={t(service.consultation.ctaTitle, locale)}
          description={ctaSubtitle}
          primaryHref={contactHref}
          primaryLabel={t(service.consultation.ctaButton, locale)}
        />
      </main>

      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
