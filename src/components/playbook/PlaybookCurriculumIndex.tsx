import Link from "next/link";

import type { Locale } from "@/lib/i18n";
import { t, type PlaybookCluster } from "@/types/playbook";

type PlaybookCurriculumIndexProps = {
  locale: Locale;
  cluster: PlaybookCluster;
  lessonHref: (slug: string) => string;
};

export function PlaybookCurriculumIndex({
  locale,
  cluster,
  lessonHref,
}: PlaybookCurriculumIndexProps) {
  return (
    <ol className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card/40">
      {cluster.lessons.map((lesson) => {
        const phase = cluster.phases.find((item) => item.id === lesson.phaseId);

        return (
          <li key={lesson.slug}>
            <Link
              href={lessonHref(lesson.slug)}
              className="group flex items-start gap-4 px-5 py-4 transition-colors hover:bg-card/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent sm:gap-5 sm:px-6"
            >
              <span className="mt-0.5 font-mono text-sm font-semibold tabular-nums text-accent">
                {String(lesson.order).padStart(2, "0")}
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-semibold text-foreground transition-colors group-hover:text-accent">
                    {t(lesson.title, locale)}
                  </span>
                  {phase ? (
                    <span className="rounded-full border border-border px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-muted-subtle">
                      {t(phase.title, locale)}
                    </span>
                  ) : null}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-muted">
                  {t(lesson.description, locale)}
                </span>
              </span>
              <span
                aria-hidden
                className="mt-1 hidden text-accent opacity-0 transition-opacity group-hover:opacity-100 sm:inline"
              >
                →
              </span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
