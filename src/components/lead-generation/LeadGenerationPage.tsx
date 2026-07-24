import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/components/ui/CtaSection";
import { Disclosure, DisclosureList } from "@/components/ui/Disclosure";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  comparisonColumns,
  comparisonRows,
  getLeadGenerationPage,
  leadGenerationPages,
  type LgSlug,
} from "@/data/lead-generation";
import { getRoutes } from "@/data/site";
import { getDictionary, type Locale } from "@/lib/i18n";
import { breadcrumbSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/seo";

type LeadGenerationPageProps = {
  locale: Locale;
  slug: LgSlug;
};

function t(value: { sr: string; en: string }, locale: Locale) {
  return value[locale];
}

function SectionShell({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`border-b border-border/60 py-16 md:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">{children}</div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h2" | "h3";
}) {
  const TitleTag = as;
  return (
    <header className="mb-10 max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <TitleTag className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </TitleTag>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
      ) : null}
    </header>
  );
}

export function LeadGenerationPage({ locale, slug }: LeadGenerationPageProps) {
  const dictionary = getDictionary(locale);
  const routes = getRoutes(locale);
  const content = getLeadGenerationPage(slug);
  const path = content.paths[locale];
  const otherPages = Object.values(leadGenerationPages).filter((page) => page.slug !== slug);

  const breadcrumbs = breadcrumbSchema([
    { name: dictionary.nav.home, path: routes.home },
    { name: t(content.navLabel, locale), path },
  ]);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t(content.seo.title, locale).replace(" | Lead Agents", ""),
    description: t(content.seo.description, locale),
    provider: {
      "@type": "Organization",
      name: "Lead Agents",
      url: "https://lead-agents.com",
    },
    url: absoluteUrl(path),
    areaServed: "Worldwide",
  };

  return (
    <>
      <JsonLd data={[breadcrumbs, serviceJsonLd]} />
      <Header locale={locale} dictionary={dictionary} />

      <main>
        {/* Hero */}
        <section className="glow-service-hero border-b border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {t(content.hero.eyebrow, locale)}
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {t(content.hero.title, locale)}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              {t(content.hero.subtitle, locale)}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={routes.contact}>{t(content.hero.primaryCta, locale)}</Button>
              <Button href={content.hero.secondaryHref} variant="secondary">
                {t(content.hero.secondaryCta, locale)}
              </Button>
            </div>
          </div>
        </section>

        {/* Audience */}
        <AnimateInView>
          <SectionShell>
            <SectionHeading title={t(content.audience.title, locale)} />
            <ul className="grid gap-4 sm:grid-cols-2">
              {content.audience.items.map((item) => (
                <li
                  key={t(item, locale)}
                  className="rounded-2xl border border-border/80 bg-card p-5 text-base leading-relaxed text-foreground md:p-6"
                >
                  {t(item, locale)}
                </li>
              ))}
            </ul>
          </SectionShell>
        </AnimateInView>

        {/* Enterprise highlight */}
        {content.highlight ? (
          <AnimateInView>
            <SectionShell className="bg-card/20">
              <div className="rounded-2xl border border-accent/30 bg-card p-6 md:p-10">
                <SectionHeading title={t(content.highlight.title, locale)} />
                <p className="max-w-3xl text-lg leading-relaxed text-muted">
                  {t(content.highlight.description, locale)}
                </p>
                <p className="mt-8 mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  {locale === "sr" ? "Želimo da razumemo" : "We want to understand"}
                </p>
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {content.highlight.bullets.map((bullet) => (
                    <li
                      key={t(bullet, locale)}
                      className="rounded-xl border border-border/70 bg-background/40 px-4 py-3 text-sm leading-relaxed text-foreground"
                    >
                      {t(bullet, locale)}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-base font-medium text-foreground">
                  {t(content.highlight.closing, locale)}
                </p>
              </div>
            </SectionShell>
          </AnimateInView>
        ) : null}

        {/* Problems */}
        <AnimateInView>
          <SectionShell>
            <SectionHeading title={t(content.problems.title, locale)} />
            <div
              className={`grid gap-4 ${
                content.problems.cards.length > 4
                  ? "sm:grid-cols-2 lg:grid-cols-3"
                  : "sm:grid-cols-2"
              }`}
            >
              {content.problems.cards.map((card, index) => (
                <article
                  key={t(card.title, locale)}
                  className="rounded-2xl border border-border/80 bg-card p-6 md:p-7"
                >
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-xl font-semibold leading-snug text-foreground">
                    {t(card.title, locale)}
                  </h3>
                </article>
              ))}
            </div>
          </SectionShell>
        </AnimateInView>

        {/* Audit diagram */}
        {content.auditDiagram ? (
          <AnimateInView>
            <SectionShell id="audit" className="bg-card/20">
              <SectionHeading
                title={t(content.auditDiagram.title, locale)}
                description={t(content.auditDiagram.description, locale)}
              />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {content.auditDiagram.areas.map((area, index) => (
                  <article
                    key={t(area.title, locale)}
                    className="rounded-2xl border border-border/80 bg-card p-6"
                  >
                    <p className="mb-3 text-sm font-semibold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground">
                      {t(area.title, locale)}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {t(area.description, locale)}
                    </p>
                  </article>
                ))}
              </div>
            </SectionShell>
          </AnimateInView>
        ) : null}

        {/* Approach */}
        <AnimateInView>
          <SectionShell id="pristup">
            <SectionHeading title={t(content.approach.title, locale)} />
            <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
              {content.approach.paragraphs.map((paragraph) => (
                <p key={t(paragraph, locale)}>{t(paragraph, locale)}</p>
              ))}
            </div>
            {content.approach.listItems ? (
              <div className="mt-10">
                {content.approach.listTitle ? (
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                    {t(content.approach.listTitle, locale)}
                  </p>
                ) : null}
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {content.approach.listItems.map((item) => (
                    <li
                      key={t(item, locale)}
                      className="rounded-xl border border-border/70 bg-card px-4 py-3 text-sm text-foreground"
                    >
                      {t(item, locale)}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {content.approach.note ? (
              <p className="mt-8 max-w-3xl rounded-2xl border border-accent/25 bg-accent/5 p-5 text-base leading-relaxed text-foreground">
                {t(content.approach.note, locale)}
              </p>
            ) : null}
          </SectionShell>
        </AnimateInView>

        {/* Process */}
        <AnimateInView>
          <SectionShell id="proces" className="bg-card/20">
            <SectionHeading title={t(content.process.title, locale)} />
            <ol className="grid gap-4 md:grid-cols-2">
              {content.process.steps.map((step, index) => (
                <li
                  key={t(step.title, locale)}
                  className="rounded-2xl border border-border/80 bg-card p-6 md:p-7"
                >
                  <p className="mb-3 text-sm font-semibold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-xl font-semibold text-foreground">
                    {t(step.title, locale)}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {t(step.description, locale)}
                  </p>
                </li>
              ))}
            </ol>
          </SectionShell>
        </AnimateInView>

        {/* Deliverables */}
        <AnimateInView>
          <SectionShell>
            <SectionHeading title={t(content.deliverables.title, locale)} />
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {content.deliverables.items.map((item) => (
                <li
                  key={t(item, locale)}
                  className="rounded-xl border border-border/70 bg-card px-4 py-3 text-sm leading-relaxed text-foreground"
                >
                  {t(item, locale)}
                </li>
              ))}
            </ul>
          </SectionShell>
        </AnimateInView>

        {/* Team */}
        <AnimateInView>
          <SectionShell className="bg-card/20">
            <SectionHeading title={t(content.team.title, locale)} />
            <div
              className={`grid gap-4 ${
                content.team.members.length >= 4
                  ? "sm:grid-cols-2 lg:grid-cols-3"
                  : "sm:grid-cols-2"
              }`}
            >
              {content.team.members.map((member, index) => (
                <article
                  key={t(member.title, locale)}
                  className="rounded-2xl border border-border/80 bg-card p-6 md:p-7"
                >
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-xl font-semibold text-foreground">
                    {t(member.title, locale)}
                  </h3>
                  <p className="mt-4 mb-3 text-sm font-medium text-muted">
                    {locale === "sr" ? "Odgovoran za" : "Responsible for"}
                  </p>
                  <ul className="space-y-2">
                    {member.responsibilities.map((item) => (
                      <li key={t(item, locale)} className="text-sm leading-relaxed text-foreground">
                        {t(item, locale)}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-3xl rounded-2xl border border-accent/25 bg-accent/5 p-5 text-base leading-relaxed text-foreground md:text-lg">
              {t(content.team.note, locale)}
            </p>
          </SectionShell>
        </AnimateInView>

        {/* Collaboration (if separate from process for non-enterprise) */}
        {content.collaboration ? (
          <AnimateInView>
            <SectionShell>
              <SectionHeading title={t(content.collaboration.title, locale)} />
              <ol className="grid gap-4 md:grid-cols-3">
                {content.collaboration.steps.map((step, index) => (
                  <li
                    key={t(step.title, locale)}
                    className="rounded-2xl border border-border/80 bg-card p-6"
                  >
                    <p className="mb-3 text-sm font-semibold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground">
                      {t(step.title, locale)}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {t(step.description, locale)}
                    </p>
                  </li>
                ))}
              </ol>
            </SectionShell>
          </AnimateInView>
        ) : null}

        {/* Results */}
        <AnimateInView>
          <SectionShell className="bg-card/20">
            <SectionHeading title={t(content.results.title, locale)} />
            {content.results.intro ? (
              <div className="mb-8 max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
                {content.results.intro.map((paragraph) => (
                  <p key={t(paragraph, locale)}>{t(paragraph, locale)}</p>
                ))}
              </div>
            ) : null}
            <div className="grid gap-4 sm:grid-cols-2">
              {content.results.items.map((item, index) => (
                <article
                  key={t(item, locale)}
                  className="rounded-2xl border border-border/80 bg-card p-6"
                >
                  <p className="mb-3 text-sm font-semibold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-lg font-semibold text-foreground">{t(item, locale)}</h3>
                </article>
              ))}
            </div>
          </SectionShell>
        </AnimateInView>

        {/* Proof */}
        <AnimateInView>
          <SectionShell>
            <SectionHeading
              title={t(content.proof.title, locale)}
              description={t(content.proof.description, locale)}
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {content.proof.stats.map((stat) => (
                <article
                  key={stat.value + t(stat.label, locale)}
                  className="rounded-2xl border border-border/80 bg-card p-6 text-center md:p-8"
                >
                  <p className="text-3xl font-bold tracking-tight text-accent md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{t(stat.label, locale)}</p>
                </article>
              ))}
            </div>
            <div className="mt-8">
              <Button href={routes.caseStudies} variant="secondary">
                {locale === "sr" ? "Pogledajte case studije" : "View case studies"}
              </Button>
            </div>
          </SectionShell>
        </AnimateInView>

        {/* Comparison */}
        <AnimateInView>
          <SectionShell className="bg-card/20">
            <SectionHeading
              title={
                locale === "sr"
                  ? "Koje rešenje odgovara vašoj firmi"
                  : "Which solution fits your company"
              }
              description={
                locale === "sr"
                  ? "Ista vizuelna logika, jasno različita dubina sistema."
                  : "The same visual system, with clearly different depth."
              }
            />

            {/* Desktop table */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr>
                    <th className="border-b border-border/70 px-4 py-4 text-sm font-semibold text-muted">
                      {locale === "sr" ? "Kriterijum" : "Criteria"}
                    </th>
                    {(
                      [
                        comparisonColumns.male,
                        comparisonColumns.mid,
                        comparisonColumns.enterprise,
                      ] as const
                    ).map((column) => (
                      <th
                        key={column.slug}
                        className={`border-b border-border/70 px-4 py-4 text-sm font-semibold ${
                          column.slug === slug ? "text-accent" : "text-foreground"
                        }`}
                      >
                        <Link
                          href={leadGenerationPages[column.slug].paths[locale]}
                          className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                          {t(column.title, locale)}
                        </Link>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={t(row.label, locale)}>
                      <th className="border-b border-border/50 px-4 py-4 text-sm font-medium text-muted">
                        {t(row.label, locale)}
                      </th>
                      <td
                        className={`border-b border-border/50 px-4 py-4 text-sm text-foreground ${
                          slug === "male-firme" ? "bg-accent/5" : ""
                        }`}
                      >
                        {t(row.male, locale)}
                      </td>
                      <td
                        className={`border-b border-border/50 px-4 py-4 text-sm text-foreground ${
                          slug === "srednje-firme" ? "bg-accent/5" : ""
                        }`}
                      >
                        {t(row.mid, locale)}
                      </td>
                      <td
                        className={`border-b border-border/50 px-4 py-4 text-sm text-foreground ${
                          slug === "enterprise" ? "bg-accent/5" : ""
                        }`}
                      >
                        {t(row.enterprise, locale)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="grid gap-4 md:hidden">
              {(
                [
                  comparisonColumns.male,
                  comparisonColumns.mid,
                  comparisonColumns.enterprise,
                ] as const
              ).map((column) => {
                const valueKey =
                  column.slug === "male-firme"
                    ? "male"
                    : column.slug === "srednje-firme"
                      ? "mid"
                      : "enterprise";
                return (
                  <article
                    key={column.slug}
                    className={`rounded-2xl border p-5 ${
                      column.slug === slug
                        ? "border-accent/40 bg-accent/5"
                        : "border-border/80 bg-card"
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-foreground">
                      <Link
                        href={leadGenerationPages[column.slug].paths[locale]}
                        className="hover:text-accent"
                      >
                        {t(column.title, locale)}
                      </Link>
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {comparisonRows.map((row) => (
                        <li key={t(row.label, locale)}>
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-subtle">
                            {t(row.label, locale)}
                          </p>
                          <p className="mt-1 text-sm text-foreground">
                            {t(row[valueKey], locale)}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </SectionShell>
        </AnimateInView>

        {/* FAQ */}
        <AnimateInView>
          <SectionShell id="faq">
            <SectionHeading title={t(content.faq.title, locale)} />
            <DisclosureList>
              {content.faq.items.map((item, index) => (
                <Disclosure
                  key={t(item.question, locale)}
                  title={t(item.question, locale)}
                  variant="joined"
                  index={index}
                >
                  <p>{t(item.answer, locale)}</p>
                </Disclosure>
              ))}
            </DisclosureList>
          </SectionShell>
        </AnimateInView>

        {/* Other solutions */}
        <AnimateInView>
          <SectionShell>
            <SectionHeading
              title={t(content.otherSolutions.title, locale)}
              description={t(content.otherSolutions.description, locale)}
            />
            <div className="grid gap-4 md:grid-cols-2">
              {otherPages.map((page) => (
                <Link
                  key={page.slug}
                  href={page.paths[locale]}
                  className="group rounded-2xl border border-border/80 bg-card p-6 transition-colors hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:p-8"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                    {t(page.navLabel, locale)}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {t(page.navDesc, locale)}
                  </p>
                  <p className="mt-6 text-sm font-semibold text-foreground group-hover:text-accent">
                    {locale === "sr" ? "Pogledajte rešenje" : "View solution"} →
                  </p>
                </Link>
              ))}
            </div>
          </SectionShell>
        </AnimateInView>

        <CtaSection
          locale={locale}
          title={t(content.cta.title, locale)}
          description={t(content.cta.description, locale)}
          primaryHref={routes.contact}
          primaryLabel={t(content.cta.primaryCta, locale)}
          secondaryHref={routes.caseStudies}
          secondaryLabel={locale === "sr" ? "Pogledajte case studije" : "View case studies"}
        />
      </main>

      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
