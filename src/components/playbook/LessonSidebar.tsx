"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import type { Locale } from "@/lib/i18n";
import { t, type LocalizedText, type PlaybookLesson } from "@/types/playbook";

export type SidebarSection = {
  id: string;
  title: LocalizedText;
};

type LessonSidebarProps = {
  variant?: "mobile" | "desktop" | "all";
  locale: Locale;
  lesson: PlaybookLesson;
  phaseTitle: LocalizedText;
  sections: SidebarSection[];
  tableOfContentsLabel: LocalizedText;
  phaseLabel: LocalizedText;
  readTimeLabel: LocalizedText;
  minutesLabel: LocalizedText;
  lessonNumberLabel: LocalizedText;
  previous?: PlaybookLesson;
  next?: PlaybookLesson;
  previousLabel: LocalizedText;
  nextLabel: LocalizedText;
  clusterHref: string;
};

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function LessonSidebar({
  variant = "all",
  locale,
  lesson,
  phaseTitle,
  sections,
  tableOfContentsLabel,
  phaseLabel,
  readTimeLabel,
  minutesLabel,
  lessonNumberLabel,
  previous,
  next,
  previousLabel,
  nextLabel,
  clusterHref,
}: LessonSidebarProps) {
  const lessonHref = (slug: string) => `${clusterHref}/${slug}`;
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const [progress, setProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sectionElements.forEach((el) => observer.observe(el));

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [sections]);

  const handleSectionClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
      setMobileOpen(false);
    }
  };

  const sidebarContent = (
    <>
      <div className="mb-1 h-1 overflow-hidden rounded-full bg-border">
        <div
          className="h-full bg-accent transition-[width] duration-150"
          style={{ width: `${progress}%` }}
          aria-hidden
        />
      </div>
      <p className="text-xs font-semibold uppercase tracking-wider text-accent">
        {t(lessonNumberLabel, locale)} {lesson.order}
      </p>
      <p className="mt-2 text-sm font-bold leading-snug text-foreground">
        {t(lesson.title, locale)}
      </p>
      <p className="mt-2 text-xs text-muted-subtle">
        {t(phaseLabel, locale)}: {t(phaseTitle, locale)}
      </p>
      <p className="mt-1 text-xs text-muted-subtle">
        {t(readTimeLabel, locale)}: {lesson.estimatedReadTime} {t(minutesLabel, locale)}
      </p>
      <nav className="mt-6" aria-label={t(tableOfContentsLabel, locale)}>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-subtle">
          {t(tableOfContentsLabel, locale)}
        </p>
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => handleSectionClick(section.id)}
                className={cn(
                  "w-full rounded-lg px-3 py-2 text-left text-sm leading-snug transition-colors",
                  activeId === section.id
                    ? "bg-accent/15 font-semibold text-accent"
                    : "text-muted hover:bg-card hover:text-foreground",
                )}
              >
                {t(section.title, locale)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-8 space-y-3 border-t border-border pt-6 text-sm">
        {previous ? (
          <Link
            href={lessonHref(previous.slug)}
            className="block rounded-lg border border-border px-3 py-2 transition-colors hover:border-accent/40 hover:text-accent"
          >
            <span className="text-xs uppercase tracking-wider text-muted-subtle">
              ← {t(previousLabel, locale)}
            </span>
            <span className="mt-1 block font-medium text-foreground">
              {t(previous.title, locale)}
            </span>
          </Link>
        ) : null}
        {next ? (
          <Link
            href={lessonHref(next.slug)}
            className="block rounded-lg border border-border px-3 py-2 transition-colors hover:border-accent/40 hover:text-accent"
          >
            <span className="text-xs uppercase tracking-wider text-muted-subtle">
              {t(nextLabel, locale)} →
            </span>
            <span className="mt-1 block font-medium text-foreground">
              {t(next.title, locale)}
            </span>
          </Link>
        ) : null}
      </div>
    </>
  );

  const showMobile = variant === "all" || variant === "mobile";
  const showDesktop = variant === "all" || variant === "desktop";

  return (
    <>
      {showMobile ? (
        <div className="mb-6 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex w-full items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground"
            aria-expanded={mobileOpen}
          >
            {t(tableOfContentsLabel, locale)}
            <span className="text-accent">{mobileOpen ? "−" : "+"}</span>
          </button>
          {mobileOpen ? (
            <div className="mt-3 rounded-2xl border border-border bg-card/80 p-5 backdrop-blur">
              {sidebarContent}
            </div>
          ) : null}
        </div>
      ) : null}
      {showDesktop ? (
        <div className="playbook-lesson-sidebar-sticky hidden lg:block">
          {sidebarContent}
        </div>
      ) : null}
    </>
  );
}
