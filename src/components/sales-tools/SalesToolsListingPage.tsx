import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getRoutes } from "@/data/site";
import { getSalesToolsListing } from "@/data/sales-tools/listing";
import type { Dictionary, Locale } from "@/lib/i18n";

import { SalesToolsListingClient } from "./SalesToolsListingClient";

type SalesToolsListingPageProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function SalesToolsListingPage({ locale, dictionary }: SalesToolsListingPageProps) {
  const routes = getRoutes(locale);
  const tools = getSalesToolsListing(locale);
  const labels = dictionary.pages.salesTools;

  return (
    <>
      <Header locale={locale} dictionary={dictionary} />

      <main>
        <section className="glow-page-top relative overflow-hidden border-b border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {labels.eyebrow}
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {labels.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
              {labels.description}
            </p>
            <p className="mt-3 text-sm text-muted">{labels.subtitle}</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-16">
          <SalesToolsListingClient
            locale={locale}
            tools={tools}
            contactHref={routes.contact}
            labels={{
              searchPlaceholder: labels.searchPlaceholder,
              filterCategories: labels.filterCategories,
              allToolsTitle: labels.allToolsTitle,
              resultsCount: labels.resultsCount,
              noResults: labels.noResults,
              recommended: dictionary.pages.salesToolDetail.recommended,
              startingFrom: dictionary.pages.salesToolDetail.tableStartingPrice,
              viewTool: labels.viewTool,
              ctaTitle: labels.ctaTitle,
              ctaText: labels.ctaText,
              ctaButton: labels.ctaButton,
            }}
          />
        </section>
      </main>

      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
