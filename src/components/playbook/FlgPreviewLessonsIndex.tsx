import Link from "next/link";

import { FlgPreviewBanner } from "@/components/playbook/FlgPreviewBanner";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Section } from "@/components/ui/Section";
import { founderLedGrowthLessons } from "@/data/founderLedGrowthLessons";
import type { Dictionary, Locale } from "@/lib/i18n";
import { t } from "@/types/playbook";

type FlgPreviewLessonsIndexProps = {
  locale: Locale;
  dictionary: Dictionary;
  paths: {
    cluster: string;
    lesson: (slug: string) => string;
    index: string;
  };
};

export function FlgPreviewLessonsIndex({
  locale,
  dictionary,
  paths,
}: FlgPreviewLessonsIndexProps) {
  return (
    <>
      <Header locale={locale} dictionary={dictionary} />
      <FlgPreviewBanner locale={locale} lessonsIndexHref={paths.index} />
      <main>
        <Section
          title={
            locale === "sr"
              ? "Pregled lekcija (Founder Led Growth)"
              : "Lesson preview (Founder Led Growth)"
          }
          description={
            locale === "sr"
              ? "Interna lista svih lekcija dok je playbook zaključan za javnost."
              : "Internal list of all lessons while the playbook stays locked for the public."
          }
        >
          <ol className="grid gap-3">
            {founderLedGrowthLessons.map((lesson) => (
              <li key={lesson.slug}>
                <Link
                  href={paths.lesson(lesson.slug)}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card/50 p-4 transition-colors hover:border-accent/40"
                >
                  <span className="font-mono text-xs font-semibold text-accent">
                    {String(lesson.order).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-semibold text-foreground">
                      {t(lesson.title, locale)}
                    </span>
                    <span className="mt-1 block text-sm text-muted">
                      {t(lesson.description, locale)}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-muted">
            <Link href={paths.cluster} className="text-accent hover:underline">
              {locale === "sr" ? "← Nazad na uvod playbook-a" : "← Back to playbook intro"}
            </Link>
          </p>
        </Section>
      </main>
      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
