import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BadgeCheck,
  Check,
  ClipboardList,
  Inbox,
  ListFilter,
  MessageCircle,
  MessageSquareText,
  Mic2,
  Radar,
  Send,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

import { ClientLogoMarquee } from "@/components/home/ClientLogoMarquee";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FlgDedicatedTeam } from "@/components/lead-generation/FlgDedicatedTeam";
import { JsonLd } from "@/components/seo/JsonLd";
import { FlgResultsSlider } from "@/components/services/FlgResultsSlider";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/components/ui/CtaSection";
import { Disclosure, DisclosureList } from "@/components/ui/Disclosure";
import {
  comparisonColumns,
  comparisonRows,
  getLeadGenerationPage,
  leadGenerationPages,
} from "@/data/lead-generation";
import { sharedClientResults } from "@/data/services/shared-results";
import { getRoutes } from "@/data/site";
import { getDictionary, type Locale } from "@/lib/i18n";
import { breadcrumbSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/seo";

type Props = {
  locale: Locale;
};

function t(value: { sr: string; en: string }, locale: Locale) {
  return value[locale];
}

const DELIVERABLE_ICONS: LucideIcon[] = [
  BadgeCheck,
  Target,
  Mic2,
  MessageSquareText,
  Send,
  Users,
  Inbox,
  BarChart3,
  ListFilter,
];

const DELIVERABLE_GROUP_META: Array<{
  label: { sr: string; en: string };
  icon: LucideIcon;
  slice: [number, number];
}> = [
  { label: { sr: "GTM", en: "GTM" }, icon: ClipboardList, slice: [0, 3] },
  { label: { sr: "Content", en: "Content" }, icon: MessageSquareText, slice: [3, 5] },
  { label: { sr: "Outreach", en: "Outreach" }, icon: Send, slice: [5, 8] },
  { label: { sr: "Kontrola", en: "Control" }, icon: BarChart3, slice: [8, 9] },
];

const OUTCOME_META: Array<{
  icon: LucideIcon;
  kicker: { sr: string; en: string };
}> = [
  { icon: BadgeCheck, kicker: { sr: "Tržište", en: "Market" } },
  { icon: MessageSquareText, kicker: { sr: "Content", en: "Content" } },
  { icon: Radar, kicker: { sr: "Sales", en: "Sales" } },
  { icon: MessageCircle, kicker: { sr: "Pipeline", en: "Pipeline" } },
];

export function SrednjeFirmeLeadGenerationPage({ locale }: Props) {
  const dictionary = getDictionary(locale);
  const routes = getRoutes(locale);
  const content = getLeadGenerationPage("srednje-firme");
  const path = content.paths[locale];
  const otherPages = Object.values(leadGenerationPages).filter(
    (page) => page.slug !== "srednje-firme",
  );
  const sliderResults = sharedClientResults.filter(
    (result) => result.id === "lisa-cox" || result.id === "mladen-vojkovic",
  );

  const breadcrumbs = breadcrumbSchema([
    { name: dictionary.nav.home, path: routes.home },
    { name: t(content.navLabel, locale), path },
  ]);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t(content.seo.title, locale).replace(" | Lead Agents", ""),
    description: t(content.seo.description, locale),
    provider: {
      "@type": "Organization",
      name: "Lead Agents",
      url: "https://lead-agents.com",
    },
    url: absoluteUrl(path),
    areaServed: "Worldwide",
  };

  return (
    <>
      <JsonLd data={[breadcrumbs, serviceJsonLd]} />
      <Header locale={locale} dictionary={dictionary} />

      <main className="flg-preview flg-page">
        {/* Hero */}
        <section className="flg-preview-hero">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:px-8 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <span className="flg-preview-badge">
                {locale === "sr" ? "31 do 100 zaposlenih" : "31 to 100 employees"}
              </span>
              <h1 className="flg-preview-hero__title mt-5">{t(content.hero.title, locale)}</h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
                {t(content.hero.subtitle, locale)}
              </p>

              <ul className="flg-preview-stats mt-8">
                {content.proof.stats.map((stat) => (
                  <li key={stat.value + t(stat.label, locale)}>
                    <span className="flg-preview-stats__value">{stat.value}</span>
                    <span className="flg-preview-stats__label">{t(stat.label, locale)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href={routes.contact}>{t(content.hero.primaryCta, locale)}</Button>
                <Button href="#kolaboracija" variant="secondary">
                  {t(content.hero.secondaryCta, locale)}
                </Button>
              </div>
            </div>

            <div className="flg-preview-hero__media">
              <Image
                src="/images/nenad-and-tika.png"
                alt={
                  locale === "sr"
                    ? "Nenad Stevanović i Tihomir Mijailović, co-founders Lead Agents"
                    : "Nenad Stevanović and Tihomir Mijailović, co-founders of Lead Agents"
                }
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 560px"
                priority
              />
              <div className="flg-preview-hero__media-card">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Expert Led Growth
                </p>
                <p className="mt-1 text-lg font-bold leading-snug text-foreground">
                  {locale === "sr"
                    ? "Ekspertiza tima → pipeline"
                    : "Team expertise → pipeline"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Logos */}
        <section className="flg-page__clients">
          <AnimateInView>
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {locale === "sr" ? "Radili smo sa" : "Trusted by"}
            </p>
            <ClientLogoMarquee />
          </AnimateInView>
        </section>

        {/* Fit audience */}
        <section className="flg-fit flg-preview-section">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="flg-fit__layout">
              <AnimateInView className="flg-fit__intro">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  {locale === "sr" ? "Prepoznavanje" : "Recognition"}
                </p>
                <h2 className="flg-fit__title">
                  {locale === "sr" ? (
                    <>
                      <span className="flg-fit__title-accent">Za koga</span> je ova usluga
                    </>
                  ) : (
                    <>
                      <span className="flg-fit__title-accent">Who</span> this is for
                    </>
                  )}
                </h2>
                <p className="flg-fit__lede">
                  {locale === "sr"
                    ? "Ako se prepoznajete — Expert Led Growth ima smisla."
                    : "If this sounds like you — Expert Led Growth fits."}
                </p>
              </AnimateInView>

              <AnimateInView delay={140} className="flg-fit__panel">
                <div className="flg-fit__panel-head">
                  <span className="flg-fit__count-num" aria-hidden="true">
                    {content.audience.items.length}
                  </span>
                  <div className="flg-fit__panel-copy">
                    <p className="flg-fit__panel-label">
                      {locale === "sr" ? "Signala" : "Signals"}
                    </p>
                    <p className="flg-fit__panel-title">
                      {locale === "sr"
                        ? "da ste u pravom segmentu"
                        : "that you’re in the right segment"}
                    </p>
                  </div>
                </div>

                <ul className="flg-fit__list">
                  {content.audience.items.map((item) => (
                    <li key={t(item, locale)} className="flg-fit__item">
                      <span className="flg-fit__check" aria-hidden="true">
                        <Check size={16} strokeWidth={2.5} />
                      </span>
                      <p className="flg-fit__text">{t(item, locale)}</p>
                    </li>
                  ))}
                </ul>
              </AnimateInView>
            </div>

            <AnimateInView delay={220} className="flg-fit__footer">
              <p className="flg-fit__footer-copy">
                {locale === "sr" ? (
                  <>
                    Ako vam zvuči poznato <span>4 od {content.audience.items.length}</span> — razgovor
                    ima smisla.
                  </>
                ) : (
                  <>
                    If <span>4 of {content.audience.items.length}</span> feel familiar — a conversation
                    is worth it.
                  </>
                )}
              </p>
              <Button href={routes.contact}>
                {locale === "sr" ? "Zakažite konsultaciju" : "Book a consultation"}
              </Button>
            </AnimateInView>
          </div>
        </section>

        {/* Problems — diagnosis → system */}
        <section className="flg-gap flg-preview-section">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <AnimateInView>
              <header className="flg-gap__header">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  {locale === "sr" ? "Dijagnoza" : "Diagnosis"}
                </p>
                <h2 className="flg-gap__title">
                  {locale === "sr" ? (
                    <>
                      <span className="flg-gap__title-muted">Sales postoji. </span>
                      <span className="flg-gap__title-strong">Pipeline još nije predvidljiv.</span>
                    </>
                  ) : (
                    <>
                      <span className="flg-gap__title-muted">Sales exists. </span>
                      <span className="flg-gap__title-strong">Pipeline still isn’t predictable.</span>
                    </>
                  )}
                </h2>
              </header>
            </AnimateInView>

            <AnimateInView delay={160}>
              <div className="flg-gap__board">
                <div className="flg-gap__panel flg-gap__panel--pain">
                  <p className="flg-gap__panel-label">
                    <span className="flg-gap__panel-label-mark" aria-hidden>
                      ×
                    </span>
                    {locale === "sr" ? "Šta vas koči" : "What holds you back"}
                  </p>
                  <ul className="flg-gap__list">
                    {content.problems.cards.map((card) => (
                      <li key={t(card.title, locale)} className="flg-gap__row">
                        <span className="flg-gap__row-icon" aria-hidden>
                          ×
                        </span>
                        <span>{t(card.title, locale)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flg-gap__pivot" aria-hidden>
                  <span className="flg-gap__pivot-badge">
                    <span className="flg-gap__pivot-text">
                      {locale === "sr" ? "Sistem" : "System"}
                    </span>
                    <span className="flg-gap__pivot-arrow">→</span>
                  </span>
                </div>

                <div className="flg-gap__panel flg-gap__panel--system">
                  <p className="flg-gap__panel-label">
                    <span className="flg-gap__panel-label-mark" aria-hidden>
                      ✓
                    </span>
                    {locale === "sr" ? "Šta sistem radi" : "What the system does"}
                  </p>
                  <ul className="flg-gap__list">
                    {(locale === "sr"
                      ? [
                          "Ekspert postaje jasno lice kompanije",
                          "Content gradi poverenje pre sastanka",
                          "Outreach ide ka pravim decision makerima",
                          "Sales tim vodi razgovore, mi vodimo sistem",
                        ]
                      : [
                          "The expert becomes a clear company face",
                          "Content builds trust before the meeting",
                          "Outreach reaches the right decision makers",
                          "Sales leads conversations, we run the system",
                        ]
                    ).map((item) => (
                      <li key={item} className="flg-gap__row">
                        <span className="flg-gap__row-icon" aria-hidden>
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateInView>
          </div>
        </section>

        {/* Collaboration timeline */}
        <section id="kolaboracija" className="flg-timeline scroll-mt-24">
          <div className="flg-timeline__inner mx-auto max-w-6xl px-6 md:px-8">
            <AnimateInView className="flg-timeline__header">
              <p className="flg-timeline__eyebrow">
                {locale === "sr" ? "Kolaboracija" : "Collaboration"}
              </p>
              <h2 className="flg-timeline__title">
                {content.collaboration
                  ? t(content.collaboration.title, locale)
                  : locale === "sr"
                    ? "Kako ide kolaboracija"
                    : "How collaboration works"}
              </h2>
              {content.collaboration?.intro ? (
                <p className="flg-timeline__lede">{t(content.collaboration.intro, locale)}</p>
              ) : null}
            </AnimateInView>

            <ol className="flg-timeline__list">
              {(content.collaboration?.steps ?? []).map((step, index) => {
                const isOngoing = index === (content.collaboration?.steps.length ?? 0) - 1;
                return (
                  <li
                    key={t(step.title, locale)}
                    className={`flg-timeline__item${isOngoing ? " flg-timeline__item--ongoing" : ""}`}
                  >
                    <AnimateInView
                      delay={100 + index * 110}
                      className={`flg-timeline__row ${
                        index % 2 === 0
                          ? "flg-timeline__row--from-left"
                          : "flg-timeline__row--from-right"
                      }`}
                    >
                      <div className="flg-timeline__rail" aria-hidden="true">
                        <span className="flg-timeline__dot" />
                      </div>
                      <div className="flg-timeline__card">
                        <div className="flg-timeline__meta">
                          <span className="flg-timeline__week">{t(step.title, locale)}</span>
                          <span className="flg-timeline__phase">{t(step.description, locale)}</span>
                        </div>
                        <ul className="flg-timeline__items">
                          {(step.items ?? []).map((item) => (
                            <li key={t(item, locale)}>{t(item, locale)}</li>
                          ))}
                        </ul>
                      </div>
                    </AnimateInView>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* Deliverables */}
        <section className="flg-get flg-preview-section">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="flg-get__layout">
              <AnimateInView className="flg-get__intro">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  {locale === "sr" ? "Šta dobijate" : "What you get"}
                </p>
                <h2 className="flg-get__title">{t(content.deliverables.title, locale)}</h2>
              </AnimateInView>

              <AnimateInView delay={160}>
                <div className="flg-get__groups">
                  {DELIVERABLE_GROUP_META.map((group) => {
                    const GroupIcon = group.icon;
                    const items = content.deliverables.items.slice(group.slice[0], group.slice[1]);
                    return (
                      <div key={group.label.sr} className="flg-get__group">
                        <div className="flg-get__group-head">
                          <span className="flg-get__group-icon" aria-hidden>
                            <GroupIcon size={16} strokeWidth={2} />
                          </span>
                          <p className="flg-get__group-label">{group.label[locale]}</p>
                        </div>
                        <ul className="flg-get__list">
                          {items.map((item, index) => {
                            const itemIndex = group.slice[0] + index;
                            const ItemIcon = DELIVERABLE_ICONS[itemIndex] ?? ListFilter;
                            return (
                              <li key={t(item, locale)} className="flg-get__item">
                                <span className="flg-get__icon" aria-hidden>
                                  <ItemIcon size={16} strokeWidth={1.85} />
                                </span>
                                <p className="flg-get__text">{t(item, locale)}</p>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </AnimateInView>
            </div>
          </div>
        </section>

        <FlgDedicatedTeam
          locale={locale}
          title={content.team.title}
          note={content.team.note}
          members={content.team.members}
        />

        {/* Expected outcome */}
        <section className="flg-outcome" aria-labelledby="results-heading">
          <svg
            className="flg-outcome__chart"
            viewBox="0 0 1440 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="flg-outcome-fill-mid" x1="0" y1="0" x2="0.15" y2="1">
                <stop offset="0%" stopColor="#ffcc00" stopOpacity="0.045" />
                <stop offset="50%" stopColor="#ffcc00" stopOpacity="0.015" />
                <stop offset="100%" stopColor="#ffcc00" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="flg-outcome-stroke-mid" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffcc00" stopOpacity="0" />
                <stop offset="25%" stopColor="#ffcc00" stopOpacity="0.05" />
                <stop offset="60%" stopColor="#ffcc00" stopOpacity="0.14" />
                <stop offset="100%" stopColor="#ffcc00" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path
              d="M-60 820 C 140 740, 280 640, 430 540 S 720 340, 920 240 S 1220 100, 1500 28 L 1500 940 L -60 940 Z"
              fill="url(#flg-outcome-fill-mid)"
            />
            <path
              className="flg-outcome__chart-line"
              d="M-60 820 C 140 740, 280 640, 430 540 S 720 340, 920 240 S 1220 100, 1500 28"
              stroke="url(#flg-outcome-stroke-mid)"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
            <path
              d="M20 850 C 200 770, 340 670, 490 560 S 780 340, 980 230 S 1260 95, 1480 18"
              stroke="#ffcc00"
              strokeOpacity="0.04"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
          </svg>

          <div className="flg-outcome__inner mx-auto max-w-6xl px-6 md:px-8">
            <div className="flg-outcome__layout">
              <AnimateInView className="flg-outcome__intro">
                <p className="flg-outcome__eyebrow">
                  {locale === "sr" ? "Ishod" : "Outcome"}
                </p>
                <h2 id="results-heading" className="flg-outcome__title">
                  {t(content.results.title, locale)}
                </h2>
              </AnimateInView>

              <ol className="flg-outcome__list">
                {content.results.items.map((item, index) => {
                  const meta = OUTCOME_META[index] ?? {
                    icon: TrendingUp,
                    kicker: { sr: "Ishod", en: "Outcome" },
                  };
                  const Icon = meta.icon;
                  const step = String(index + 1).padStart(2, "0");
                  return (
                    <li
                      key={t(item, locale)}
                      className="flg-outcome__item"
                      style={
                        {
                          "--flg-i": index,
                        } as React.CSSProperties
                      }
                    >
                      <AnimateInView delay={120 + index * 130} className="flg-outcome__card">
                        <span className="flg-outcome__index" aria-hidden="true">
                          {step}
                        </span>
                        <div className="flg-outcome__copy">
                          <span className="flg-outcome__kicker">{t(meta.kicker, locale)}</span>
                          <p className="flg-outcome__text">{t(item, locale)}</p>
                        </div>
                        <span className="flg-outcome__icon" aria-hidden="true">
                          <Icon size={22} strokeWidth={2} />
                        </span>
                      </AnimateInView>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>

        <section className="flg-preview-section">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <AnimateInView>
              <FlgResultsSlider
                locale={locale}
                title={t(content.proof.title, locale)}
                results={sliderResults}
              />
              <div className="mt-8">
                <Button href={routes.caseStudies} variant="secondary">
                  {locale === "sr" ? "Pogledajte case studije" : "View case studies"}
                </Button>
              </div>
            </AnimateInView>
          </div>
        </section>

        {/* Comparison */}
        <section className="flg-compare">
          <div className="flg-compare__inner mx-auto max-w-6xl px-6 md:px-8">
            <AnimateInView className="flg-compare__header">
              <p className="flg-compare__eyebrow">
                {locale === "sr" ? "Poređenje" : "Comparison"}
              </p>
              <h2 className="flg-compare__title">
                {locale === "sr" ? (
                  <>
                    Koje rešenje <span className="flg-compare__title-accent">odgovara</span> vašoj
                    firmi
                  </>
                ) : (
                  <>
                    Which solution <span className="flg-compare__title-accent">fits</span> your
                    company
                  </>
                )}
              </h2>
              <p className="flg-compare__lede">
                {locale === "sr"
                  ? "Isti princip — drugačiji nivo kompleksnosti."
                  : "Same principle — different complexity."}
              </p>
            </AnimateInView>

            <AnimateInView delay={160} className="flg-compare__matrix">
              <div
                className="flg-compare__grid"
                role="table"
                aria-label={locale === "sr" ? "Poređenje rešenja" : "Solution comparison"}
              >
                <div className="flg-compare__row flg-compare__row--head" role="row">
                  <div className="flg-compare__cell flg-compare__cell--criterion" role="columnheader">
                    <span className="flg-compare__criterion-label">
                      {locale === "sr" ? "Kriterijum" : "Criteria"}
                    </span>
                  </div>
                  {(
                    [
                      {
                        column: comparisonColumns.male,
                        size: { sr: "1–30", en: "1–30" },
                        featured: false,
                      },
                      {
                        column: comparisonColumns.mid,
                        size: { sr: "31–100", en: "31–100" },
                        featured: true,
                      },
                      {
                        column: comparisonColumns.enterprise,
                        size: { sr: "100+", en: "100+" },
                        featured: false,
                      },
                    ] as const
                  ).map(({ column, size, featured }) => (
                    <div
                      key={column.slug}
                      className={`flg-compare__cell flg-compare__cell--plan${
                        featured ? " flg-compare__cell--featured" : ""
                      }`}
                      role="columnheader"
                    >
                      {featured ? (
                        <span className="flg-compare__badge">
                          {locale === "sr" ? "Vi ste ovde" : "You are here"}
                        </span>
                      ) : null}
                      <Link
                        href={leadGenerationPages[column.slug].paths[locale]}
                        className="flg-compare__plan-link"
                      >
                        <span className="flg-compare__plan-size">{size[locale]}</span>
                        <span className="flg-compare__plan-name">
                          {t(column.title, locale)}
                          <span className="flg-compare__plan-arrow" aria-hidden="true">
                            →
                          </span>
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>

                {comparisonRows.map((row, rowIndex) => (
                  <div
                    key={t(row.label, locale)}
                    className={`flg-compare__row${
                      rowIndex === comparisonRows.length - 1 ? " flg-compare__row--goal" : ""
                    }`}
                    role="row"
                  >
                    <div className="flg-compare__cell flg-compare__cell--criterion" role="rowheader">
                      {t(row.label, locale)}
                    </div>
                    <div className="flg-compare__cell flg-compare__cell--value" role="cell">
                      {t(row.male, locale)}
                    </div>
                    <div
                      className="flg-compare__cell flg-compare__cell--value flg-compare__cell--featured"
                      role="cell"
                    >
                      {t(row.mid, locale)}
                    </div>
                    <div className="flg-compare__cell flg-compare__cell--value" role="cell">
                      {t(row.enterprise, locale)}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateInView>

            <div className="flg-compare__mobile">
              {(
                [
                  {
                    column: comparisonColumns.male,
                    valueKey: "male" as const,
                    featured: false,
                  },
                  {
                    column: comparisonColumns.mid,
                    valueKey: "mid" as const,
                    featured: true,
                  },
                  {
                    column: comparisonColumns.enterprise,
                    valueKey: "enterprise" as const,
                    featured: false,
                  },
                ] as const
              ).map(({ column, valueKey, featured }) => (
                <article
                  key={column.slug}
                  className={`flg-compare__card${featured ? " flg-compare__card--featured" : ""}`}
                >
                  {featured ? (
                    <span className="flg-compare__badge">
                      {locale === "sr" ? "Vi ste ovde" : "You are here"}
                    </span>
                  ) : null}
                  <h3 className="flg-compare__card-title">
                    <Link href={leadGenerationPages[column.slug].paths[locale]}>
                      {t(column.title, locale)}
                      <span className="flg-compare__plan-arrow" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </h3>
                  <ul className="flg-compare__card-list">
                    {comparisonRows.map((row) => (
                      <li key={t(row.label, locale)}>
                        <p className="flg-compare__card-label">{t(row.label, locale)}</p>
                        <p className="flg-compare__card-value">{t(row[valueKey], locale)}</p>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="flg-preview-section scroll-mt-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <AnimateInView>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">FAQ</p>
              <h2 className="flg-preview-heading mt-3">{t(content.faq.title, locale)}</h2>
            </AnimateInView>
            <AnimateInView delay={140} className="mt-10">
              <DisclosureList>
                {content.faq.items.map((item, index) => (
                  <Disclosure
                    key={t(item.question, locale)}
                    title={t(item.question, locale)}
                    variant="joined"
                    index={index}
                  >
                    <p>{t(item.answer, locale)}</p>
                  </Disclosure>
                ))}
              </DisclosureList>
            </AnimateInView>
          </div>
        </section>

        {/* Other solutions */}
        <section className="flg-preview-section">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <AnimateInView>
              <h2 className="flg-preview-heading">{t(content.otherSolutions.title, locale)}</h2>
              <p className="mt-4 max-w-2xl text-lg text-muted">
                {t(content.otherSolutions.description, locale)}
              </p>
            </AnimateInView>
            <AnimateInView delay={140} className="mt-8 grid gap-4 md:grid-cols-2">
              {otherPages.map((page) => (
                <Link
                  key={page.slug}
                  href={page.paths[locale]}
                  className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:p-8"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                    {t(page.navLabel, locale)}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {t(page.navDesc, locale)}
                  </p>
                  <p className="mt-6 text-sm font-semibold text-foreground">
                    {locale === "sr" ? "Pogledajte rešenje" : "View solution"} →
                  </p>
                </Link>
              ))}
            </AnimateInView>
          </div>
        </section>

        <CtaSection
          locale={locale}
          variant="band"
          title={t(content.cta.title, locale)}
          description={t(content.cta.description, locale)}
          primaryHref={routes.contact}
          primaryLabel={t(content.cta.primaryCta, locale)}
          secondaryHref={routes.caseStudies}
          secondaryLabel={locale === "sr" ? "Pogledajte case studije" : "View case studies"}
        />
      </main>

      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
