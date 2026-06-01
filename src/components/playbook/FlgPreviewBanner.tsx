import Link from "next/link";

import type { Locale } from "@/lib/i18n";

type FlgPreviewBannerProps = {
  locale: Locale;
  lessonsIndexHref: string;
};

const copy = {
  sr: {
    label: "Preview režim",
    text: "Ove lekcije su skrivene za javnost. Pregled je dostupan samo timu.",
    index: "Sve lekcije",
  },
  en: {
    label: "Preview mode",
    text: "These lessons are hidden from the public site. Preview access is team-only.",
    index: "All lessons",
  },
} as const;

export function FlgPreviewBanner({ locale, lessonsIndexHref }: FlgPreviewBannerProps) {
  const labels = copy[locale];

  return (
    <div className="border-b border-accent/35 bg-accent/10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-3 text-sm md:px-8">
        <p className="text-foreground/90">
          <span className="mr-2 font-semibold uppercase tracking-[0.12em] text-accent">
            {labels.label}
          </span>
          {labels.text}
        </p>
        <Link href={lessonsIndexHref} className="font-semibold text-accent hover:underline">
          {labels.index}
        </Link>
      </div>
    </div>
  );
}
