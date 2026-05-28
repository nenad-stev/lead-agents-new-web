"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { homeTestimonials } from "@/data/home";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n";

const VISIBLE_COUNT = 3;
const AUTO_ADVANCE_MS = 3000;
const TRANSITION_MS = 500;

type Testimonial = (typeof homeTestimonials)[number];

type TestimonialsSectionProps = {
  locale: Locale;
  title: string;
  subtitle: string;
};

function TestimonialCard({
  item,
  locale,
  position,
  total,
}: {
  item: Testimonial;
  locale: Locale;
  position: number;
  total: number;
}) {
  return (
    <blockquote className="home-card-hover flex h-full flex-col rounded-2xl border border-border bg-card p-6">
      <span className="text-xs font-semibold uppercase tracking-wider text-accent">
        {String(position).padStart(2, "0")} / {String(total).padStart(2, "0")}
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
  );
}

export function TestimonialsSection({ locale, title, subtitle }: TestimonialsSectionProps) {
  const total = homeTestimonials.length;
  const trackItems: Testimonial[] = [
    ...homeTestimonials,
    ...homeTestimonials.slice(0, VISIBLE_COUNT),
  ];
  const trackLength = trackItems.length;

  const [slideIndex, setSlideIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlideIndex((current) => current + 1);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (slideIndex !== total) {
      return;
    }

    const resetTimer = window.setTimeout(() => {
      setTransitionEnabled(false);
      setSlideIndex(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setTransitionEnabled(true));
      });
    }, TRANSITION_MS);

    return () => window.clearTimeout(resetTimer);
  }, [slideIndex, total]);

  const trackWidthPercent = (trackLength * 100) / VISIBLE_COUNT;
  const slideOffsetPercent = (slideIndex * 100) / trackLength;

  return (
    <Section
      title={title}
      description={subtitle}
      className="home-section home-section--alt"
    >
      <div
        className="overflow-hidden"
        role="region"
        aria-roledescription="carousel"
        aria-label={title}
      >
        <div
          className={`flex gap-6 ${transitionEnabled ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{
            width: `${trackWidthPercent}%`,
            transform: `translateX(-${slideOffsetPercent}%)`,
          }}
        >
          {trackItems.map((item, index) => {
            const sourceIndex = index % total;

            return (
              <div
                key={`${item.id}-${index}`}
                className="shrink-0"
                style={{ flexBasis: `${100 / trackLength}%` }}
              >
                <TestimonialCard
                  item={item}
                  locale={locale}
                  position={sourceIndex + 1}
                  total={total}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {homeTestimonials.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              setTransitionEnabled(true);
              setSlideIndex(index);
            }}
            className={`h-2 rounded-full transition-all ${
              slideIndex % total === index ? "w-6 bg-accent" : "w-2 bg-border"
            }`}
            aria-label={`${index + 1} / ${total}`}
            aria-current={slideIndex % total === index}
          />
        ))}
      </div>
    </Section>
  );
}
