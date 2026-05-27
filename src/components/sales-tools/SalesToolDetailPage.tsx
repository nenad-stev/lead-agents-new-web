import Link from "next/link";

import { SalesToolLogo } from "@/components/sales-tools/SalesToolLogo";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { DataTable } from "@/components/ui/DataTable";
import { Disclosure, DisclosureList } from "@/components/ui/Disclosure";
import { getSalesToolBySlug } from "@/data/sales-tools";
import { getRoutes } from "@/data/site";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { LocalizedText, SalesTool } from "@/types/sales-tool";

type SalesToolDetailPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  tool: SalesTool;
};

function t(text: LocalizedText, locale: Locale) {
  return text[locale];
}

export function SalesToolDetailPage({ locale, dictionary, tool }: SalesToolDetailPageProps) {
  const routes = getRoutes(locale);
  const labels = dictionary.pages.salesToolDetail;

  const planHeaders = [
    labels.tableFeature,
    ...tool.pricing.plans.map((plan) => t(plan.name, locale)),
  ];

  const comparisonRows = tool.pricing.comparison.map((row) => [
    t(row.feature, locale),
    ...tool.pricing.plans.map((plan) => t(row.values[plan.id] ?? { sr: ", ", en: ", " }, locale)),
  ]);

  const alternativeHeaders = [
    labels.tableTool,
    labels.tableStartingPrice,
    labels.tableTrial,
    labels.tableCategory,
  ];

  const alternativeRows = tool.alternatives.map((alt) => {
    const hasPage = Boolean(getSalesToolBySlug(alt.slug));

    return [
      hasPage ? (
        <Link
          href={routes.salesTool(alt.slug)}
          className="inline-flex items-center gap-1 font-semibold text-accent transition-colors hover:text-[var(--accent-hover)] hover:underline"
        >
          {alt.name}
          <span aria-hidden className="text-xs opacity-80">
            →
          </span>
        </Link>
      ) : (
        alt.name
      ),
      t(alt.startingPrice, locale),
      t(alt.trial, locale),
      t(alt.category, locale),
    ];
  });

  const quickFactRows = tool.quickFacts.map((fact) => [
    t(fact.label, locale),
    t(fact.value, locale),
  ]);

  return (
    <>
      <Header locale={locale} dictionary={dictionary} />

      <main className="border-b border-border/60">
        {/* Hero */}
        <section className="glow-page-top relative overflow-hidden border-b border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-16">
            <Link
              href={routes.salesTools}
              className="text-sm font-medium text-accent hover:underline"
            >
              ← {labels.back}
            </Link>

            <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex max-w-2xl flex-col gap-6 sm:flex-row sm:items-start">
                <SalesToolLogo name={tool.name} logo={tool.logo} size="lg" />
                <div className="min-w-0 flex-1">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                    {t(tool.category, locale)}
                  </span>
                  {tool.recommended ? (
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-black">
                      {labels.recommended}
                    </span>
                  ) : null}
                  {tool.rating ? (
                    <span className="text-sm text-muted">
                      G2 {tool.rating.g2}/5
                    </span>
                  ) : null}
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  {tool.name}
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-muted">{t(tool.tagline, locale)}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {tool.categories[locale].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/80 px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                </div>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
                <Button href={tool.websiteUrl} target="_blank" rel="noopener noreferrer">
                  {labels.visitWebsite}
                </Button>
                <Button href={routes.contact} variant="secondary">
                  {labels.getHelp}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content + sidebar */}
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-12 md:px-8 lg:grid-cols-[1fr_300px] lg:py-16">
          <div className="space-y-14">
            {/* What is */}
            <section id="overview">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">{labels.whatIs}</h2>
              <p className="mt-4 leading-relaxed text-muted">{t(tool.overview, locale)}</p>
              {tool.overviewExtended ? (
                <p className="mt-4 leading-relaxed text-muted">{t(tool.overviewExtended, locale)}</p>
              ) : null}
            </section>

            {/* Ideal for */}
            <section id="ideal-for">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">{labels.idealFor}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {tool.idealFor[locale].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            {/* Key features */}
            <section id="features">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">{labels.keyFeatures}</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {tool.keyFeatures[locale].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm text-muted"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            {/* Pricing plans */}
            <section id="pricing">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">{labels.pricing}</h2>
              <p className="mt-2 text-sm text-muted">
                {t(tool.pricing.billing, locale)} · {t(tool.pricing.trial, locale)}
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {tool.pricing.plans.map((plan) => (
                  <article
                    key={plan.id}
                    className="rounded-2xl border border-border bg-card p-5"
                  >
                    <h3 className="text-lg font-bold text-foreground">{t(plan.name, locale)}</h3>
                    <p className="mt-2 text-2xl font-bold text-accent">{t(plan.price, locale)}</p>
                    <p className="mt-1 text-xs text-muted">{t(plan.billingNote, locale)}</p>
                    <ul className="mt-4 space-y-2 border-t border-border/60 pt-4 text-sm text-muted">
                      {plan.highlights[locale].map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-accent">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <h3 className="mt-10 text-lg font-semibold text-foreground">
                {labels.pricingComparison}
              </h3>
              <div className="mt-4">
                <DataTable
                  caption={`${tool.name} ${labels.pricingComparison}`}
                  headers={planHeaders}
                  rows={comparisonRows}
                />
              </div>
            </section>

            {/* Pros & cons */}
            <section id="pros-cons" className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="text-lg font-bold text-foreground">{labels.pros}</h2>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {tool.pros[locale].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-accent">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="text-lg font-bold text-foreground">{labels.cons}</h2>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {tool.cons[locale].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-muted">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Setup */}
            <section id="setup">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">{labels.setup}</h2>
              <p className="mt-4 leading-relaxed text-muted">{t(tool.setup.description, locale)}</p>
            </section>

            {/* Integrations */}
            <section id="integrations">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">{labels.integrations}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {tool.integrations[locale].map((name) => (
                  <span
                    key={name}
                    className="rounded-lg border border-border bg-card px-3 py-2 text-sm text-muted"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </section>

            {/* Alternatives table */}
            <section id="alternatives">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">{labels.alternatives}</h2>
              <div className="mt-4">
                <DataTable
                  caption={labels.alternatives}
                  headers={alternativeHeaders}
                  rows={alternativeRows}
                />
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">{labels.faq}</h2>
              <p className="mt-3 max-w-2xl text-base text-muted">
                {locale === "sr"
                  ? "Kliknite na pitanje da pročitate odgovor."
                  : "Click a question to read the answer."}
              </p>
              <DisclosureList className="mt-8">
                {tool.faq.map((item, index) => (
                  <Disclosure
                    key={t(item.question, locale)}
                    variant="joined"
                    index={index}
                    title={t(item.question, locale)}
                  >
                    <p>{t(item.answer, locale)}</p>
                  </Disclosure>
                ))}
              </DisclosureList>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                {labels.quickFacts}
              </h3>
              <table className="mt-4 w-full text-sm">
                <tbody>
                  {quickFactRows.map(([label, value]) => (
                    <tr key={label} className="border-b border-border/60 last:border-0">
                      <th scope="row" className="py-2 pr-4 text-left font-medium text-muted">
                        {label}
                      </th>
                      <td className="py-2 text-right text-foreground">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6">
              <p className="text-sm font-semibold text-foreground">{labels.needHelp}</p>
              <p className="mt-2 text-sm text-muted">{labels.needHelpText}</p>
              <div className="mt-4">
                <Button href={routes.contact} className="w-full justify-center">
                  {labels.getHelp}
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}

