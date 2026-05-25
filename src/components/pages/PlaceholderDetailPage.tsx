import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Section } from "@/components/ui/Section";
import type { Dictionary, Locale } from "@/lib/i18n";

type PlaceholderDetailPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  title: string;
  backLabel: string;
  backHref: string;
  placeholder: string;
  excerpt?: string;
  image?: string;
  imageAlt?: string;
  meta?: { label: string; value: string };
};

export function PlaceholderDetailPage({
  locale,
  dictionary,
  title,
  backLabel,
  backHref,
  placeholder,
  excerpt,
  image,
  imageAlt,
  meta,
}: PlaceholderDetailPageProps) {
  return (
    <>
      <Header locale={locale} dictionary={dictionary} />
      <main>
        <Section>
          <Link href={backHref} className="text-sm font-medium text-accent hover:underline">
            ← {backLabel}
          </Link>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {title}
          </h1>
          {excerpt ? <p className="mt-4 max-w-2xl text-lg text-muted">{excerpt}</p> : null}
          {meta ? (
            <p className="mt-4 text-sm text-muted">
              <span className="font-semibold text-foreground">{meta.label}:</span> {meta.value}
            </p>
          ) : null}

          {image ? (
            <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-card md:aspect-[2/1]">
              <Image
                src={image}
                alt={imageAlt ?? title}
                fill
                className="object-contain object-center p-6 md:p-10"
                sizes="(max-width: 1200px) 100vw, 1152px"
                priority
              />
            </div>
          ) : null}

          <div className="mt-10 rounded-2xl border border-border bg-card p-8">
            <p className="text-base leading-relaxed text-muted">{placeholder}</p>
          </div>
        </Section>
      </main>
      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
