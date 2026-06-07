import Image from "next/image";
import Link from "next/link";

import { ClientLogoMarquee } from "@/components/home/ClientLogoMarquee";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CtaSection, CtaServiceStrip } from "@/components/ui/CtaSection";
import { getRoutes } from "@/data/site";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { CaseStudyDetail, CaseStudySection } from "@/types/case-study";
import type { LocalizedText } from "@/types/service";

type CaseStudyDetailPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  caseStudy: CaseStudyDetail;
};

function t(text: LocalizedText, locale: Locale) {
  return text[locale];
}

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function SectionIndex({ index }: { index: number }) {
  return (
    <span className="font-mono text-xs font-medium tracking-widest text-accent/80">
      {String(index + 1).padStart(2, "0")}
    </span>
  );
}

function MonetizationList({
  title,
  items,
  locale,
}: {
  title: string;
  items: LocalizedText[];
  locale: Locale;
}) {
  return (
    <div className="mt-8 rounded-2xl border border-border/80 bg-background/40 p-6 md:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground">
        {title}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item[locale]}
            className="rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-sm font-medium text-foreground"
          >
            {t(item, locale)}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeatureGrid({ items, locale }: { items: LocalizedText[]; locale: Locale }) {
  return (
    <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li
          key={item[locale]}
          className="rounded-xl border border-border/70 bg-card/80 px-4 py-3.5 text-sm font-medium leading-snug text-foreground"
        >
          {t(item, locale)}
        </li>
      ))}
    </ul>
  );
}

function SectionImage({
  image,
  locale,
  priority = false,
  wide = false,
}: {
  image: NonNullable<CaseStudySection["image"]>;
  locale: Locale;
  priority?: boolean;
  wide?: boolean;
}) {
  const isCover = image.fit === "cover";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border shadow-[0_24px_48px_-24px_rgba(0,0,0,0.55)]",
        "border-border/80 bg-card",
        wide
          ? "aspect-[16/10] min-h-[280px] md:min-h-[420px]"
          : isCover
            ? "aspect-[3/4] min-h-[320px] lg:aspect-[4/5]"
            : "aspect-[4/3]",
      )}
    >
      <Image
        src={image.src}
        alt={t(image.alt, locale)}
        fill
        className={
          isCover
            ? "object-cover object-center"
            : cn(
                "object-contain object-center",
                wide ? "p-4 md:p-6 lg:p-8" : "p-5 md:p-8",
              )
        }
        sizes={wide ? "(max-width: 1024px) 100vw, 1152px" : "(max-width: 1024px) 100vw, 520px"}
        priority={priority}
      />
    </div>
  );
}

function ExternalLinkButtons({
  links,
  locale,
}: {
  links: NonNullable<CaseStudyDetail["hero"]["links"]>;
  locale: Locale;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((item) => (
        <a
          key={item.href[locale]}
          href={item.href[locale]}
          target="_blank"
          rel="noreferrer"
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
            item.primary
              ? "case-study-link-primary bg-accent text-background hover:bg-[var(--accent-hover)]"
              : "border border-border/80 bg-card/80 text-foreground hover:border-accent/40 hover:bg-card",
          )}
        >
          {t(item.label, locale)}
          <span aria-hidden>↗</span>
        </a>
      ))}
    </div>
  );
}

function ContentSection({
  section,
  locale,
  index,
  reverse = false,
}: {
  section: CaseStudySection;
  locale: Locale;
  index: number;
  reverse?: boolean;
}) {
  const hasImage = Boolean(section.image);
  const hasEmbeds = Boolean(section.embeds?.length);
  const paragraphs = section.paragraphs;
  const leadParagraphs = paragraphs.slice(0, -1);
  const closingParagraph = paragraphs.length > 1 ? paragraphs.at(-1) : null;
  const isAbout = section.id === "about";
  const isFullImage = section.imageLayout === "full" && hasImage;

  return (
    <section
      id={section.id}
      className={cn(
        "scroll-mt-28 border-b border-border/60 py-16 md:py-24",
        index % 2 === 1 && "bg-card/15",
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="mb-10 max-w-2xl">
          <SectionIndex index={index} />
          <h2 className="case-study-display mt-3 text-3xl text-foreground md:text-4xl">
            {t(section.title, locale)}
          </h2>
        </div>

        <div
          className={cn(
            hasImage && !isFullImage && "grid items-start gap-10 lg:grid-cols-2 lg:gap-16",
            (!hasImage || isFullImage) && !hasEmbeds && !isFullImage && "max-w-3xl",
            reverse && hasImage && !isFullImage && "lg:[&>*:first-child]:order-2",
          )}
        >
          <div className={cn(hasImage && !reverse && "lg:pt-2", reverse && hasImage && "lg:pt-2")}>
            <div className="case-study-prose space-y-5">
              {leadParagraphs.map((paragraph) => (
                <p key={paragraph[locale]}>{t(paragraph, locale)}</p>
              ))}
            </div>

            {closingParagraph && isAbout ? (
              <p className="mt-8 border-l-2 border-accent pl-5 text-lg font-medium italic leading-relaxed text-foreground">
                {t(closingParagraph, locale)}
              </p>
            ) : closingParagraph ? (
              <p className="case-study-prose mt-5">{t(closingParagraph, locale)}</p>
            ) : null}

            {section.list?.title ? (
              <MonetizationList
                title={t(section.list.title, locale)}
                items={section.list.items}
                locale={locale}
              />
            ) : section.list ? (
              <ul className="mt-8 space-y-3">
                {section.list.items.map((item) => (
                  <li
                    key={item[locale]}
                    className="flex items-start gap-3 case-study-prose text-foreground"
                  >
                    <span
                      className="mt-2.5 h-1 w-4 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    {t(item, locale)}
                  </li>
                ))}
              </ul>
            ) : null}

            {section.link ? (
              <div className="mt-6">
                <a
                  href={section.link.href[locale]}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-accent/20"
                >
                  {t(section.link.label, locale)} ↗
                </a>
              </div>
            ) : null}

            {section.links?.length ? (
              <div className="mt-6">
                <ExternalLinkButtons
                  links={section.links.map((item, linkIndex) => ({
                    ...item,
                    primary: linkIndex === 0,
                  }))}
                  locale={locale}
                />
              </div>
            ) : null}

            {section.stats?.length ? (
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {section.stats.map((stat) => (
                  <div
                    key={`${stat.value}-${stat.label[locale]}`}
                    className={cn(
                      "rounded-xl border px-4 py-4",
                      stat.featured
                        ? "border-accent/60 bg-accent/20 sm:col-span-2 md:px-6 md:py-5"
                        : "border-accent/25 bg-accent/10",
                    )}
                  >
                    <p className={cn("font-bold text-foreground", stat.featured ? "text-3xl md:text-4xl" : "text-2xl")}>
                      {stat.value}
                    </p>
                    <p className={cn("mt-1", stat.featured ? "text-base font-medium text-foreground/90" : "text-sm text-muted")}>
                      {t(stat.label, locale)}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}

            {section.embeds?.length ? (
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {section.embeds.map((embed) => (
                  <article
                    key={`${embed.type}-${embed.src}`}
                    className="overflow-hidden rounded-2xl border border-border/80 bg-card/60"
                  >
                    <div
                      className={cn(
                        "relative mx-auto w-full sm:w-[80%]",
                        embed.type === "youtube" ? "aspect-[9/16]" : "aspect-[4/5]",
                      )}
                    >
                      <iframe
                        src={embed.src}
                        title={t(embed.title, locale)}
                        className="absolute inset-0 h-full w-full"
                        allow={
                          embed.type === "youtube"
                            ? "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            : undefined
                        }
                        allowFullScreen={embed.type === "youtube"}
                      />
                    </div>
                    <p className="px-4 py-3 text-sm font-medium text-foreground">
                      {t(embed.title, locale)}
                    </p>
                  </article>
                ))}
              </div>
            ) : null}
          </div>

          {section.image && !isFullImage ? (
            <SectionImage
              image={section.image}
              locale={locale}
              priority={isAbout}
            />
          ) : null}
        </div>

        {isFullImage && section.image ? (
          <div className="mt-12">
            <SectionImage
              image={section.image}
              locale={locale}
              wide
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function CaseStudyDetailPage({
  locale,
  dictionary,
  caseStudy,
}: CaseStudyDetailPageProps) {
  const routes = getRoutes(locale);
  const labels = dictionary.pages.caseStudyDetail;
  const contactHref = routes.contact;
  const serviceHref = routes.service(caseStudy.serviceCta.serviceSlug);
  const sectionCount = caseStudy.sections.length;

  return (
    <>
      <Header locale={locale} dictionary={dictionary} />

      <main className="case-study-page">
        <section className="glow-case-study-hero relative overflow-hidden border-b border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24 lg:py-28">
            <Link
              href={routes.caseStudies}
              className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-accent transition-colors hover:text-[var(--accent-hover)]"
            >
              <span aria-hidden>←</span>
              {labels.back}
            </Link>

            <div className="mt-10 max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                Case study · {t(caseStudy.title, locale)}
              </p>

              <h1 className="case-study-display mt-5 text-[2.5rem] text-foreground sm:text-5xl md:text-6xl lg:text-[3.75rem]">
                {t(caseStudy.hero.title, locale)}
              </h1>

              {caseStudy.hero.tags?.length ? (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {caseStudy.hero.tags.map((tag) => (
                    <li
                      key={tag[locale]}
                      className="rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold text-foreground md:text-sm"
                    >
                      {t(tag, locale)}
                    </li>
                  ))}
                </ul>
              ) : caseStudy.hero.highlight ? (
                <p className="mt-5 inline-flex rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold text-foreground md:text-base">
                  {t(caseStudy.hero.highlight, locale)}
                </p>
              ) : null}

              <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-muted md:text-xl md:leading-8">
                {t(caseStudy.excerpt, locale)}
              </p>

              {caseStudy.hero.links?.length ? (
                <div className="mt-8">
                  <ExternalLinkButtons links={caseStudy.hero.links} locale={locale} />
                </div>
              ) : null}
            </div>

            {caseStudy.hero.image ? (
              <div className="mt-12 md:mt-14">
                <SectionImage
                  image={caseStudy.hero.image}
                  locale={locale}
                  priority
                  wide
                />
              </div>
            ) : null}

            <nav
              className="mt-12 flex flex-wrap gap-2 border-t border-border/50 pt-8"
              aria-label={locale === "sr" ? "Sadržaj case study-ja" : "Case study contents"}
            >
              {caseStudy.sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-full border border-border/80 bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/40 hover:text-foreground"
                >
                  <span className="mr-1.5 font-mono text-[10px] text-accent/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {t(section.title, locale)}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {caseStudy.sections.map((section, index) => (
          <ContentSection
            key={section.id}
            section={section}
            locale={locale}
            index={index}
            reverse={index % 2 === 1}
          />
        ))}

        {caseStudy.appFeatures ? (
          <section className="border-b border-border/60 bg-card/15 py-16 md:py-24">
            <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
              <SectionIndex index={sectionCount} />
              <p className="case-study-display mt-3 max-w-3xl text-2xl text-foreground md:text-3xl">
                {t(caseStudy.appFeatures.title, locale)}
              </p>
              <FeatureGrid items={caseStudy.appFeatures.items} locale={locale} />
              {caseStudy.appFeatures.image ? (
                <div className="mt-12">
                  <SectionImage image={caseStudy.appFeatures.image} locale={locale} />
                </div>
              ) : null}
            </div>
          </section>
        ) : null}

        <section className="border-b border-border/60 py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              {locale === "sr" ? "Zaključak" : "Outlook"}
            </p>
            <h2 className="case-study-display mt-4 text-3xl text-foreground md:text-4xl lg:text-5xl">
              {t(caseStudy.outlook.title, locale)}
            </h2>
            <div className="case-study-prose mx-auto mt-6 max-w-2xl space-y-4 text-center md:text-lg">
              {caseStudy.outlook.paragraphs.map((paragraph) => (
                <p key={paragraph[locale]}>{t(paragraph, locale)}</p>
              ))}
            </div>
          </div>
        </section>

        <CtaServiceStrip
          label={t(caseStudy.serviceCta.label, locale)}
          href={serviceHref}
          buttonLabel={locale === "sr" ? "Pogledaj uslugu" : "View service"}
        />

        <section className="border-t border-border/60 bg-background py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.28em] text-muted">
              {locale === "sr" ? "Neki od naših klijenata" : "Some of our clients"}
            </p>
            <ClientLogoMarquee />
          </div>
        </section>

        <CtaSection
          locale={locale}
          variant="band"
          eyebrow={dictionary.cta.eyebrow}
          title={
            locale === "sr"
              ? "Imate potrebu za novim leadovima?"
              : "Need more qualified leads?"
          }
          description={
            locale === "sr"
              ? "Zakažite besplatnu konsultaciju i saznajte kako možemo pomoći vašem timu."
              : "Book a free consultation and see how we can help your team grow."
          }
          primaryHref={contactHref}
          primaryLabel={dictionary.nav.scheduleMeeting}
        />
      </main>

      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
