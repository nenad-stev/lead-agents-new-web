"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { homeFeaturedTestimonialVideo, homeTestimonials } from "@/data/home";
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

function PlayIcon() {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="drop-shadow-lg"
    >
      <circle cx="36" cy="36" r="36" fill="rgba(0,0,0,0.5)" />
      <path d="M29 22L51 36L29 50V22Z" fill="#FFCC00" />
    </svg>
  );
}

function FeaturedTestimonialVideo({ locale }: { locale: Locale }) {
  const video = homeFeaturedTestimonialVideo;
  const [playing, setPlaying] = useState(false);
  const embedTitle = `Video testimonial — ${video.name}`;
  const playLabel =
    locale === "sr" ? `Pusti video: ${video.name}` : `Play video: ${video.name}`;

  return (
    <div className="mb-12 md:mb-14">
      <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-2xl border border-border bg-card/50 p-2 sm:max-w-[320px] sm:p-3">
        <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-black">
          {playing ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
              title={embedTitle}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 h-full w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label={playLabel}
            >
              <Image
                src={video.image}
                alt=""
                fill
                className="object-cover object-center transition group-hover:scale-[1.02]"
                sizes="320px"
              />
              <span className="absolute inset-0 bg-black/25 transition group-hover:bg-black/35" />
              <span className="absolute inset-0 flex items-center justify-center">
                <PlayIcon />
              </span>
            </button>
          )}
        </div>
      </div>

      <blockquote className="mx-auto mt-6 max-w-2xl text-center">
        <p className="text-base leading-relaxed text-muted md:text-lg">
          &ldquo;{video.quote[locale]}&rdquo;
        </p>
        <footer className="mt-5 flex items-center justify-center gap-3">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-border/80">
            <Image
              src={video.image}
              alt={video.name}
              fill
              className="object-cover object-center"
              sizes="48px"
            />
          </div>
          <cite className="not-italic text-left">
            <p className="font-semibold text-foreground">{video.name}</p>
            <p className="text-sm text-muted">{video.role[locale]}</p>
          </cite>
        </footer>
      </blockquote>
    </div>
  );
}

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
      <FeaturedTestimonialVideo locale={locale} />

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
