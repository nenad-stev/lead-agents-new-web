import Image from "next/image";

import { ClientLogoMarquee } from "@/components/home/ClientLogoMarquee";
import { FlgResultsSlider } from "@/components/services/FlgResultsSlider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/components/ui/CtaSection";
import { founderLedGrowth } from "@/data/services/founder-led-growth";
import { sharedClientResults } from "@/data/services/shared-results";
import { homeFlagshipService } from "@/data/home";
import { getRoutes } from "@/data/site";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { LocalizedText } from "@/types/service";

const PREVIEW_IMAGES = {
  hero: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80&auto=format&fit=crop",
  outbound:
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80&auto=format&fit=crop",
  content:
    "https://images.unsplash.com/photo-1611944212129-29977ae1390c?w=900&q=80&auto=format&fit=crop",
  ads: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&auto=format&fit=crop",
  playbook:
    "https://images.unsplash.com/photo-1432888498266-38ffec3eaf4a?w=900&q=80&auto=format&fit=crop",
} as const;

type FounderLedGrowthPreviewPageProps = {
  locale: Locale;
  dictionary: Dictionary;
};

function t(text: LocalizedText, locale: Locale) {
  return text[locale];
}

const stats = {
  sr: [
    { value: "30+", label: "B2B klijenata" },
    { value: "$120M", label: "Pipeline generisano" },
    { value: "5 god", label: "Iskustva na tržištu" },
  ],
  en: [
    { value: "30+", label: "B2B clients" },
    { value: "$120M", label: "Pipeline generated" },
    { value: "5 yrs", label: "In the market" },
  ],
};

const pillarBullets = {
  sr: [
    [
      "ICP lista i segmentacija pre prvog outreach-a",
      "Personalizovane LinkedIn sekvence (ne generički template)",
      "A/B testiranje poruka dok reply rate ne krene gore",
    ],
    [
      "Content kalendar vezan za faze prodajnog ciklusa",
      "Edukativni postovi koji privlače idealne kupce",
      "Repurposing sadržaja u newsletter i follow-up poruke",
    ],
    [
      "ABM lista kompanija + decision maker-a",
      "Retargeting ljudi koji su engage-ovali sa content-om",
      "Boost postova sa najviše ICP komentara i DM-ova",
    ],
  ],
  en: [
    [
      "ICP list and segmentation before the first outreach",
      "Personalized LinkedIn sequences (not generic templates)",
      "A/B testing messages until reply rate climbs",
    ],
    [
      "Content calendar tied to sales cycle stages",
      "Educational posts that attract ideal buyers",
      "Repurposing content into newsletters and follow-ups",
    ],
    [
      "ABM list of accounts and decision makers",
      "Retargeting people who engaged with your content",
      "Boosting posts with the most ICP comments and DMs",
    ],
  ],
} as const;

const compare = {
  sr: {
    title: "Zašto Founder Led Growth, a ne fragmentisane agencije?",
    old: ["Samo outbound ili samo content", "Više alata, nema sistema", "Founder nije u centru"],
    flg: [
      "Outbound + content + LinkedIn Ads u jednom toku",
      "Jedan tim, jedna strategija, jedan CRM",
      "Founder kao glavni kanal prodaje",
    ],
  },
  en: {
    title: "Why Founder Led Growth vs. fragmented agencies?",
    old: ["Outbound-only or content-only", "Many tools, no system", "Founder not at the center"],
    flg: [
      "Outbound + content + LinkedIn Ads in one flow",
      "One team, one strategy, one CRM",
      "Founder as the primary sales channel",
    ],
  },
};

export function FounderLedGrowthPreviewPage({
  locale,
  dictionary,
}: FounderLedGrowthPreviewPageProps) {
  const routes = getRoutes(locale);
  const service = founderLedGrowth;
  const flagship = homeFlagshipService;
  const contactHref = routes.contact;
  const playbookHref = routes.growthPlaybook;
  const compareCopy = compare[locale];
  const statItems = stats[locale];
  const sliderResults = sharedClientResults.filter(
    (r) => r.id === "lisa-cox" || r.id === "mladen-vojkovic",
  );
  const stepBullets = pillarBullets[locale];

  const pillarMedia = [
    { image: PREVIEW_IMAGES.outbound, accent: "01" },
    { image: PREVIEW_IMAGES.content, accent: "02" },
    { image: PREVIEW_IMAGES.ads, accent: "03" },
  ];

  return (
    <>
      <Header locale={locale} dictionary={dictionary} />

      <main className="flg-preview">
        {/* Hero */}
        <section className="flg-preview-hero">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:px-8 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <span className="flg-preview-badge">
                {locale === "sr" ? "Flagship usluga" : "Flagship service"}
              </span>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Founder Led Growth
              </p>
              <h1 className="flg-preview-hero__title">
                {t(flagship.headline, locale)}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
                {t(flagship.description, locale)}
              </p>

              <ul className="flg-preview-stats mt-8">
                {statItems.map((item) => (
                  <li key={item.label}>
                    <span className="flg-preview-stats__value">{item.value}</span>
                    <span className="flg-preview-stats__label">{item.label}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href={contactHref}>
                  {t(service.hero.primaryCta, locale)}
                </Button>
                <Button href="#metodologija" variant="secondary">
                  {locale === "sr" ? "Pogledaj sistem" : "See the system"}
                </Button>
              </div>
            </div>

            <div className="flg-preview-hero__media">
              <Image
                src={PREVIEW_IMAGES.hero}
                alt={locale === "sr" ? "B2B tim u saradnji" : "B2B team collaborating"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
                priority
              />
              <div className="flg-preview-hero__media-card">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {locale === "sr" ? "Rezultat klijenta" : "Client result"}
                </p>
                <p className="mt-1 text-2xl font-bold text-foreground">93</p>
                <p className="text-sm text-muted">
                  {locale === "sr" ? "sastanka u 2 meseca" : "meetings in 2 months"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Logos */}
        <section className="border-b border-border/50 py-10">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {locale === "sr" ? "Radili smo sa" : "Trusted by"}
          </p>
          <ClientLogoMarquee />
        </section>

        {/* System diagram */}
        <section id="metodologija" className="flg-preview-section scroll-mt-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {locale === "sr" ? "Jedan sistem" : "One system"}
            </p>
            <h2 className="flg-preview-heading mt-3">
              {t(service.steps!.title, locale)}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              {locale === "sr"
                ? "Tri stuba koji se hrane međusobno — ne tri odvojena projekta."
                : "Three pillars that feed each other — not three separate projects."}
            </p>

            <div className="flg-preview-flow mt-12" aria-hidden>
              <span>Outbound</span>
              <span className="flg-preview-flow__arrow">→</span>
              <span>Autoritet</span>
              <span className="flg-preview-flow__arrow">→</span>
              <span>LinkedIn Ads</span>
              <span className="flg-preview-flow__arrow">→</span>
              <span className="text-accent">Pipeline</span>
            </div>
          </div>
        </section>

        {/* Pillars — alternating editorial blocks */}
        <section className="border-t border-border/40">
          {service.steps!.items.map((step, index) => {
            const media = pillarMedia[index];
            const reversed = index % 2 === 1;

            return (
              <article
                key={step.step}
                className={`flg-preview-pillar ${reversed ? "flg-preview-pillar--reverse" : ""}`}
              >
                <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:px-8 lg:grid-cols-2 lg:items-center lg:gap-14">
                  <div className={reversed ? "lg:order-2" : ""}>
                    <span className="text-sm font-bold tracking-widest text-accent">
                      {step.step}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
                      {t(step.title, locale)}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                      {t(step.description, locale)}
                    </p>
                    <ul className="mt-6 space-y-2 text-sm text-muted">
                      {(stepBullets[index] ?? []).map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-accent">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`flg-preview-pillar__image ${reversed ? "lg:order-1" : ""}`}
                  >
                    <Image
                      src={media.image}
                      alt={t(step.title, locale)}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 540px"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* Compare */}
        <section className="flg-preview-section">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <h2 className="flg-preview-heading text-center">{compareCopy.title}</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="flg-preview-compare-card flg-preview-compare-card--muted">
                <h3 className="text-lg font-bold text-muted">
                  {locale === "sr" ? "Stari pristup" : "Old approach"}
                </h3>
                <ul className="mt-4 space-y-3">
                  {compareCopy.old.map((item) => (
                    <li key={item} className="flex gap-2 text-muted">
                      <span aria-hidden>×</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flg-preview-compare-card flg-preview-compare-card--accent">
                <h3 className="text-lg font-bold text-foreground">Founder Led Growth</h3>
                <ul className="mt-4 space-y-3">
                  {compareCopy.flg.map((item) => (
                    <li key={item} className="flex gap-2 text-foreground">
                      <span className="text-accent" aria-hidden>
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results slider — Lisa & Mladen */}
        <section className="flg-preview-section border-t border-border/40">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <FlgResultsSlider
              locale={locale}
              title={t(service.results!.title, locale)}
              results={sliderResults}
            />
          </div>
        </section>

        {/* Playbook promo */}
        <section className="flg-preview-section">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="flg-preview-playbook grid gap-8 overflow-hidden rounded-3xl border border-border lg:grid-cols-2">
              <div className="relative min-h-[240px] lg:min-h-full">
                <Image
                  src={PREVIEW_IMAGES.playbook}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 540px"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  Growth Playbook
                </p>
                <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
                  {locale === "sr"
                    ? "12 lekcija — besplatno, korak po korak"
                    : "12 lessons — free, step by step"}
                </h2>
                <p className="mt-4 text-muted">
                  {locale === "sr"
                    ? "Ista metodologija koju implementiramo za klijente, u formi playbook-a sa alatima i čeklistama."
                    : "The same methodology we implement for clients, as a playbook with tools and checklists."}
                </p>
                <div className="mt-6">
                  <Button href={playbookHref} variant="secondary">
                    {locale === "sr" ? "Otvori playbook" : "Open playbook"} →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation */}
        <section className="flg-preview-section border-t border-border/40 pb-8">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <h2 className="flg-preview-heading">{t(service.consultation.title, locale)}</h2>
            <p className="mt-3 max-w-2xl text-lg text-muted">
              {t(service.consultation.subtitle!, locale)}
            </p>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              {(service.consultation.items ?? []).map((item, index) => (
                <li key={item.title[locale]} className="flg-preview-benefit">
                  <span className="flg-preview-benefit__num">{index + 1}</span>
                  <h3 className="text-lg font-bold text-foreground">
                    {t(item.title, locale)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t(item.description, locale)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CtaSection
          locale={locale}
          variant="band"
          eyebrow={locale === "sr" ? "Besplatna strategijska sesija" : "Free strategy session"}
          title={t(service.consultation.ctaTitle, locale)}
          description={
            service.consultation.ctaSubtitle?.[locale] ??
            (locale === "sr"
              ? "Pokreni rast svoje firme — bez obaveza, samo jasan plan."
              : "Start growing your business — no obligation, just a clear plan.")
          }
          primaryHref={contactHref}
          primaryLabel={t(service.consultation.ctaButton, locale)}
          secondaryHref={playbookHref}
          secondaryLabel={
            locale === "sr" ? "Pogledaj Growth Playbook" : "View Growth Playbook"
          }
        />

        <section className="border-t border-border/60 bg-background py-12">
          <div className="mx-auto max-w-6xl px-6 text-center md:px-8">
            <p className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              {locale === "sr" ? "Neki od naših klijenata" : "Some of our clients"}
            </p>
            <ClientLogoMarquee />
          </div>
        </section>
      </main>

      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
