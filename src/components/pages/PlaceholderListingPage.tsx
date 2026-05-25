import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Section } from "@/components/ui/Section";
import type { Dictionary, Locale } from "@/lib/i18n";

type ListingItem = {
  href: string;
  title: string;
  description: string;
  meta?: string;
  image?: string;
  imageAlt?: string;
};

type PlaceholderListingPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  title: string;
  description: string;
  items: ListingItem[];
  footerNote: string;
};

export function PlaceholderListingPage({
  locale,
  dictionary,
  title,
  description,
  items,
  footerNote,
}: PlaceholderListingPageProps) {
  return (
    <>
      <Header locale={locale} dictionary={dictionary} />
      <main>
        <Section title={title} description={description}>
          <div className="grid gap-6 md:grid-cols-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent/50"
              >
                {item.image ? (
                  <div className="relative aspect-[16/10] w-full border-b border-border/60 bg-background/40">
                    <Image
                      src={item.image}
                      alt={item.imageAlt ?? item.title}
                      fill
                      className="object-contain object-center p-4 transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ) : null}
                <div className="p-6">
                  {item.meta ? (
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {item.meta}
                    </span>
                  ) : null}
                  <h2 className="mt-3 text-xl font-bold text-foreground group-hover:text-accent">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted">{footerNote}</p>
        </Section>
      </main>
      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
