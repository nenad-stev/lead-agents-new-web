"use client";

import Image from "next/image";
import { useState } from "react";

import type { Locale } from "@/lib/i18n";
import type { LocalizedText, ServiceResult } from "@/types/service";

function t(text: LocalizedText, locale: Locale) {
  return text[locale];
}

type FlgResultsSliderProps = {
  locale: Locale;
  title: string;
  results: ServiceResult[];
};

export function FlgResultsSlider({ locale, title, results }: FlgResultsSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = results[activeIndex];

  if (!active) return null;

  function goTo(index: number) {
    setActiveIndex((index + results.length) % results.length);
  }

  return (
    <div className="flg-preview-slider">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        {title}
      </p>

      <div className="flg-preview-slider__track mt-8">
        <div
          className="flg-preview-slider__panel"
          role="tabpanel"
          id={`flg-result-panel-${active.id}`}
          aria-labelledby={`flg-result-tab-${active.id}`}
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
            <blockquote className="flg-preview-quote">
              <p className="text-lg leading-relaxed text-foreground md:text-xl">
                &ldquo;{t(active.quote, locale)}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-4">
                {active.image ? (
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border">
                    <Image
                      src={active.image}
                      alt={active.name}
                      fill
                      className="object-cover object-top"
                      sizes="56px"
                    />
                  </div>
                ) : null}
                <div>
                  <p className="font-bold text-foreground">{active.name}</p>
                  <p className="text-sm text-muted">{t(active.role, locale)}</p>
                </div>
              </footer>
            </blockquote>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {active.stats.map((stat) => (
                <div key={`${active.id}-${stat.value}`} className="flg-preview-metric">
                  <p className="flg-preview-metric__value">{stat.value}</p>
                  <p className="flg-preview-metric__label">{t(stat.label, locale)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flg-preview-slider__controls">
          <button
            type="button"
            className="flg-preview-slider__arrow"
            onClick={() => goTo(activeIndex - 1)}
            aria-label={locale === "sr" ? "Prethodni rezultat" : "Previous result"}
          >
            ←
          </button>

          <div className="flg-preview-slider__tabs" role="tablist" aria-label={title}>
            {results.map((result, index) => (
              <button
                key={result.id}
                type="button"
                role="tab"
                id={`flg-result-tab-${result.id}`}
                aria-selected={index === activeIndex}
                aria-controls={`flg-result-panel-${result.id}`}
                className={
                  index === activeIndex
                    ? "flg-preview-slider__tab flg-preview-slider__tab--active"
                    : "flg-preview-slider__tab"
                }
                onClick={() => setActiveIndex(index)}
              >
                {result.name}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="flg-preview-slider__arrow"
            onClick={() => goTo(activeIndex + 1)}
            aria-label={locale === "sr" ? "Sledeći rezultat" : "Next result"}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
