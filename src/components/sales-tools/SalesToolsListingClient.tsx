"use client";

import { useMemo, useState } from "react";

import { salesToolCategories } from "@/data/sales-tools/categories";
import type { SalesToolListingItem } from "@/data/sales-tools/listing";
import type { Locale } from "@/lib/i18n";
import type { SalesToolCategoryId } from "@/types/sales-tool";

import { CtaSection } from "@/components/ui/CtaSection";

import { SalesToolCard } from "./SalesToolCard";

type CategoryOption = {
  id: SalesToolCategoryId | "all";
  label: string;
  description: string;
};

type SalesToolsListingClientProps = {
  locale: Locale;
  tools: SalesToolListingItem[];
  labels: {
    searchPlaceholder: string;
    filterCategories: string;
    allToolsTitle: string;
    resultsCount: string;
    noResults: string;
    recommended: string;
    startingFrom: string;
    viewTool: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  };
  contactHref: string;
};

function normalize(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

export function SalesToolsListingClient({
  locale,
  tools,
  labels,
  contactHref,
}: SalesToolsListingClientProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<SalesToolCategoryId | "all">("all");

  const categories: CategoryOption[] = useMemo(
    () =>
      salesToolCategories.map((cat) => ({
        id: cat.id,
        label: cat.label[locale],
        description: cat.description[locale],
      })),
    [locale],
  );

  const toolCounts = useMemo(() => {
    const counts: Record<string, number> = { all: tools.length };
    for (const tool of tools) {
      counts[tool.categoryId] = (counts[tool.categoryId] ?? 0) + 1;
    }
    return counts;
  }, [tools]);

  const allCategory = categories.find((c) => c.id === "all");
  const categoryFilters = categories.filter((c) => c.id !== "all");

  const filteredTools = useMemo(() => {
    const q = normalize(query.trim());

    const matches = tools.filter((tool) => {
      const matchesCategory =
        activeCategory === "all" || tool.categoryId === activeCategory;

      if (!matchesCategory) return false;
      if (!q) return true;

      const haystack = normalize(
        [tool.name, tool.tagline, tool.category, tool.startingPrice].join(" "),
      );
      return haystack.includes(q);
    });

    return [...matches].sort((a, b) => Number(b.recommended) - Number(a.recommended));
  }, [tools, query, activeCategory]);

  const cardLabels = {
    recommended: labels.recommended,
    startingFrom: labels.startingFrom,
    viewTool: labels.viewTool,
  };

  const resultsLabel = labels.resultsCount.replace(
    "{count}",
    String(filteredTools.length),
  );

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <div className="relative min-w-0 flex-1">
          <label htmlFor="tool-search" className="sr-only">
            {labels.searchPlaceholder}
          </label>
          <input
            id="tool-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={labels.searchPlaceholder}
            className="w-full rounded-2xl border border-border bg-card px-5 py-4 pl-12 text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted">
            ⌕
          </span>
        </div>
        <p className="shrink-0 text-sm text-muted sm:text-right lg:hidden">{resultsLabel}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,11.5rem)_1fr] lg:grid-rows-[auto_1fr] lg:gap-x-10 lg:gap-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent lg:col-start-1 lg:row-start-1">
          {labels.filterCategories}
        </p>

        <p className="hidden text-sm text-muted lg:col-start-2 lg:row-start-1 lg:block lg:text-right">
          {resultsLabel}
        </p>

        <nav
          className="sales-tools-filters lg:col-start-1 lg:row-start-2"
          aria-label={labels.filterCategories}
        >
          {allCategory ? (
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              aria-pressed={activeCategory === "all"}
              className={`sales-tools-filter-all ${
                activeCategory === "all" ? "sales-tools-filter-all--active" : ""
              }`}
            >
              <span className="sales-tools-filter-all__icon" aria-hidden>
                <span />
                <span />
                <span />
                <span />
              </span>
              <span className="sales-tools-filter-all__body">
                <span className="sales-tools-filter-all__title">
                  {labels.allToolsTitle}
                </span>
                <span className="sales-tools-filter-all__desc">
                  {allCategory.description}
                </span>
              </span>
              <span className="sales-tools-filter-all__count">{toolCounts.all}</span>
            </button>
          ) : null}

          <div className="sales-tools-filter-list" role="group">
            {categoryFilters.map((category) => {
              const isActive = activeCategory === category.id;
              const count = toolCounts[category.id] ?? 0;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  aria-pressed={isActive}
                  title={category.description}
                  className={`sales-tools-filter-item ${
                    isActive ? "sales-tools-filter-item--active" : ""
                  }`}
                >
                  <span className="sales-tools-filter-item__label">{category.label}</span>
                  <span className="sales-tools-filter-item__count">{count}</span>
                </button>
              );
            })}
          </div>
        </nav>

        <div className="lg:col-start-2 lg:row-start-2">
          {filteredTools.length === 0 ? (
            <div className="rounded-2xl border border-border bg-card p-10 text-center">
              <p className="text-muted">{labels.noResults}</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2">
              {filteredTools.map((tool) => (
                <SalesToolCard key={tool.slug} tool={tool} labels={cardLabels} />
              ))}
            </div>
          )}
        </div>
      </div>

      <CtaSection
        locale={locale}
        variant="contained"
        eyebrow={locale === "sr" ? "Pomoć pri izboru" : "Need help choosing?"}
        title={labels.ctaTitle}
        description={labels.ctaText}
        primaryHref={contactHref}
        primaryLabel={labels.ctaButton}
      />
    </div>
  );
}
