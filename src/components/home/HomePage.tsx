import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/components/ui/CtaSection";
import { Section } from "@/components/ui/Section";
import { getCaseStudyBySlug } from "@/data/case-studies";
import { homeFlagshipService, homeSupportingServices } from "@/data/home";
import { hasServicePage } from "@/data/services";
import { getRoutes } from "@/data/site";
import type { Dictionary, Locale } from "@/lib/i18n";

import { HomeAmbientBackground } from "./HomeAmbientBackground";
import { HomeResourcesSection } from "./HomeResourcesSection";
import { CaseStudyHighlight } from "./CaseStudyHighlight";
import { FlagshipServiceSection } from "./FlagshipServiceSection";
import { GrowthArrows } from "./GrowthArrows";
import { HeroParticleField } from "./HeroParticleField";
import { ClientsSection } from "./ClientsSection";
import { DifferentiatorsSection } from "./DifferentiatorsSection";
import { TeamSection } from "./TeamSection";
import { TestimonialsSection } from "./TestimonialsSection";

type HomePageProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function HomePage({ locale, dictionary }: HomePageProps) {
  const routes = getRoutes(locale);
  const home = dictionary.home;
  const iDecideCaseStudy = getCaseStudyBySlug("i-decide");

  return (
    <>
      <Header locale={locale} dictionary={dictionary} />

      <main className="home-main relative overflow-hidden">
        <HomeAmbientBackground />

        <section className="home-section home-hero relative overflow-hidden">
          <HeroParticleField />
          <div className="relative z-[1] mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
            <p className="home-hero-in home-hero-in-1 mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {dictionary.hero.eyebrow}
            </p>
            <h1 className="home-hero-in home-hero-in-2 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
              {dictionary.hero.title}
            </h1>
            <p className="home-hero-in home-hero-in-3 mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              {dictionary.hero.subtitle}
            </p>
            <div className="home-hero-in home-hero-in-4 mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={routes.contact}>{dictionary.hero.primaryCta}</Button>
              <Button href={routes.caseStudies} variant="secondary">
                {dictionary.hero.secondaryCta}
              </Button>
            </div>
          </div>
        </section>

        <AnimateInView>
          <ClientsSection
            locale={locale}
            title={home.clientsTitle}
            subtitle={home.clientsSubtitle}
            impact={home.clientsImpact}
          />
        </AnimateInView>

        <Section
          id="usluge"
          eyebrow="01"
          title={dictionary.services.title}
          description={dictionary.services.subtitle}
          className="home-section home-section--alt relative overflow-hidden"
        >
          <GrowthArrows variant="section" className="opacity-60" />

          <AnimateInView delay={80}>
            <FlagshipServiceSection
              locale={locale}
              href={routes.service(homeFlagshipService.slug)}
              contactHref={routes.contact}
              labels={{
                badge: home.flagshipBadge,
                learnMore: dictionary.pages.serviceDetail.learnMore,
                cta: dictionary.hero.primaryCta,
                includes: home.flagshipIncludes,
              }}
            />
          </AnimateInView>

          <AnimateInView delay={120} className="mt-14 md:mt-16">
            <h3 className="text-xl font-bold text-foreground md:text-2xl">
              {home.supportingServicesTitle}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
              {home.supportingServicesSubtitle}
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {homeSupportingServices.map((service, index) => {
                const serviceHref = hasServicePage(service.slug)
                  ? routes.service(service.slug)
                  : null;
                const cardClass =
                  "home-card-hover flex h-full flex-col rounded-2xl border border-border/80 bg-card/80 p-5 md:p-6";

                const cardContent = (
                  <>
                    <span className="flex items-center gap-2 text-xs font-semibold text-accent/80">
                      {String(index + 1).padStart(2, "0")}
                      <span className="text-accent/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </span>
                    <h4 className="mt-3 text-lg font-bold text-foreground">
                      {service.title[locale]}
                    </h4>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {service.description[locale]}
                    </p>
                    {serviceHref ? (
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:underline">
                        {dictionary.pages.serviceDetail.learnMore}
                        <span aria-hidden className="transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    ) : null}
                  </>
                );

                const wrappedCard = serviceHref ? (
                  <Link
                    key={service.slug}
                    id={`usluga-${service.slug}`}
                    href={serviceHref}
                    className={`${cardClass} group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`}
                  >
                    {cardContent}
                  </Link>
                ) : (
                  <article key={service.slug} id={`usluga-${service.slug}`} className={cardClass}>
                    {cardContent}
                  </article>
                );

                return (
                  <AnimateInView key={service.slug} delay={160 + index * 70}>
                    {wrappedCard}
                  </AnimateInView>
                );
              })}
            </div>
          </AnimateInView>

          <AnimateInView delay={200} className="mt-10 flex justify-center">
            <Button href={routes.contact}>{dictionary.cta.button}</Button>
          </AnimateInView>
        </Section>

        <AnimateInView>
          <HomeResourcesSection locale={locale} />
        </AnimateInView>

        {iDecideCaseStudy?.image ? (
          <AnimateInView>
            <CaseStudyHighlight
              eyebrow={home.caseStudyEyebrow}
              title={home.caseStudyTitle}
              description={home.caseStudyDescription}
              cta={home.caseStudyCta}
              href={routes.caseStudy("i-decide")}
              image={iDecideCaseStudy.image}
              imageAlt={iDecideCaseStudy.imageAlt?.[locale] ?? iDecideCaseStudy.title[locale]}
            />
          </AnimateInView>
        ) : null}

        <AnimateInView>
          <TestimonialsSection
            locale={locale}
            title={home.testimonialsTitle}
            subtitle={home.testimonialsSubtitle}
          />
        </AnimateInView>

        <AnimateInView>
          <DifferentiatorsSection locale={locale} title={home.differentiatorsTitle} />
        </AnimateInView>

        <AnimateInView>
          <TeamSection
            locale={locale}
            title={home.teamTitle}
            leadershipLabel={home.teamLeadership}
            membersLabel={home.teamMembers}
            expertiseLabel={home.teamExpertise}
          />
        </AnimateInView>

        <AnimateInView>
          <CtaSection
            locale={locale}
            variant="band"
            eyebrow={dictionary.cta.eyebrow}
            title={dictionary.cta.title}
            description={dictionary.cta.text}
            primaryHref={routes.contact}
            primaryLabel={dictionary.cta.button}
            secondaryHref={routes.caseStudies}
            secondaryLabel={dictionary.hero.secondaryCta}
          />
        </AnimateInView>
      </main>

      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
