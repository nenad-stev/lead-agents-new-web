import Image from "next/image";

import { ClientLogoMarquee } from "@/components/home/ClientLogoMarquee";
import { FlgResultsSlider } from "@/components/services/FlgResultsSlider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/components/ui/CtaSection";
import { coldSalesOutreach } from "@/data/services/cold-sales-outreach";
import { sharedClientResults } from "@/data/services/shared-results";
import { getRoutes } from "@/data/site";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { LocalizedText } from "@/types/service";

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&q=80&auto=format&fit=crop",
  discovery:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80&auto=format&fit=crop",
  tools:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop",
  copy: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80&auto=format&fit=crop",
  campaigns:
    "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=900&q=80&auto=format&fit=crop",
  salesTools:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&auto=format&fit=crop",
} as const;

type ColdSalesOutreachPageProps = {
  locale: Locale;
  dictionary: Dictionary;
};

function t(text: LocalizedText, locale: Locale) {
  return text[locale];
}

const stats = {
  sr: [
    { value: "93", label: "Sastanaka u jednoj kampanji" },
    { value: "10+", label: "Alata testirano za vas" },
    { value: "30+", label: "B2B klijenata" },
  ],
  en: [
    { value: "93", label: "Meetings in one campaign" },
    { value: "10+", label: "Tools tested for you" },
    { value: "30+", label: "B2B clients" },
  ],
} as const;

const stepBullets = {
  sr: [
    [
      "ICP workshop i mapiranje TAM-a",
      "Analiza prodajnog ciklusa i trenutnih kanala",
      "Jasna definicija ko je „idealni“ lead",
    ],
    [
      "Stack prilagođen vašem budžetu i tržištu",
      "Integracija CRM-a, outreach i enrichment alata",
      "Obuka tima — ne samo „evo login-a“",
    ],
    [
      "Personalizacija u velikom obimu (ne spam)",
      "A/B testovi subject line i CTA poruka",
      "Sekvence za LinkedIn i email gde ima smisla",
    ],
    [
      "Pokretanje, monitoring i optimizacija kampanja",
      "Odgovori i follow-up umesto vas",
      "Vi idete na sastanke — mi punimo kalendar",
    ],
  ],
  en: [
    [
      "ICP workshop and TAM mapping",
      "Sales cycle and current channel audit",
      "Clear definition of the ideal lead",
    ],
    [
      "Stack matched to your budget and market",
      "CRM, outreach, and enrichment integrations",
      "Team training — not just handing over logins",
    ],
    [
      "Personalization at scale (not spam)",
      "A/B tests on subjects and message CTAs",
      "LinkedIn and email sequences where they fit",
    ],
    [
      "Launch, monitor, and optimize campaigns",
      "Replies and follow-ups handled for you",
      "You take meetings — we fill the calendar",
    ],
  ],
} as const;

const compare = {
  sr: {
    title: "Zašto sistem, a ne „samo alat“?",
    old: [
      "Kupite 3–4 alata, niko ih ne poveže",
      "Generičke poruke — nizak reply rate",
      "Founder ili prodavac radi sve ručno",
    ],
    next: [
      "ICP → baza → poruke → kampanje u jednom toku",
      "Testirani stack i vođenje kampanja",
      "Kalendar puni sastanaka — vi zatvarate",
    ],
  },
  en: {
    title: "Why a system, not “just a tool”?",
    old: [
      "Buy 3–4 tools, nobody connects them",
      "Generic messages — low reply rates",
      "Founder or rep does everything manually",
    ],
    next: [
      "ICP → list → copy → campaigns in one flow",
      "Proven stack and managed campaigns",
      "Calendar fills with meetings — you close",
    ],
  },
} as const;

const processMedia = [
  IMAGES.discovery,
  IMAGES.tools,
  IMAGES.copy,
  IMAGES.campaigns,
] as const;

export function ColdSalesOutreachPage({ locale, dictionary }: ColdSalesOutreachPageProps) {
  const routes = getRoutes(locale);
  const service = coldSalesOutreach;
  const contactHref = routes.contact;
  const salesToolsHref = routes.salesTools;
  const compareCopy = compare[locale];
  const statItems = stats[locale];
  const bullets = stepBullets[locale];
  const sliderResults = sharedClientResults.filter(
    (r) => r.id === "nicolas-martinez" || r.id === "mladen-vojkovic" || r.id === "lisa-cox",
  );
  const process = service.process!;
  const deliverables = service.deliverables!;
  const audienceSection = service.audienceSection!;
  const results = service.results!;
  const highlight = service.highlight!;
  const highlightLink = service.highlightLink!;

  return (
    <>
      <Header locale={locale} dictionary={dictionary} />

      <main className="flg-preview">
        <section className="flg-preview-hero">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:px-8 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <span className="flg-preview-badge">
                {locale === "sr" ? "Outbound & automatizacija" : "Outbound & automation"}
              </span>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Cold Sales Outreach
              </p>
              <h1 className="flg-preview-hero__title">{t(service.hero.title, locale)}</h1>
              <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
                {t(service.hero.description, locale)}
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
                <Button href={contactHref}>{t(service.hero.primaryCta, locale)}</Button>
                <Button href="#proces" variant="secondary">
                  {locale === "sr" ? "Pogledaj proces" : "See the process"}
                </Button>
              </div>
            </div>

            <div className="flg-preview-hero__media">
              <Image
                src={IMAGES.hero}
                alt={
                  locale === "sr"
                    ? "Prodajni tim i automatizacija"
                    : "Sales team and automation"
                }
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
                priority
              />
              <div className="flg-preview-hero__media-card">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {locale === "sr" ? "Rezultat kampanje" : "Campaign result"}
                </p>
                <p className="mt-1 text-2xl font-bold text-foreground">54%</p>
                <p className="text-sm text-muted">
                  {locale === "sr" ? "reply rate (klijent)" : "reply rate (client)"}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border/50 py-10">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {locale === "sr" ? "Radili smo sa" : "Trusted by"}
          </p>
          <ClientLogoMarquee />
        </section>

        <section className="flg-preview-section">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {locale === "sr" ? "Prodajna mašina" : "Sales engine"}
            </p>
            <h2 className="flg-preview-heading mt-3">
              {locale === "sr"
                ? "Od ICP-a do punog kalendara"
                : "From ICP to a full calendar"}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              {locale === "sr"
                ? "Četiri faze koje povezujemo u jedan automatizovani sistem — vi se fokusirate na zatvaranje."
                : "Four phases we connect into one automated system — you focus on closing."}
            </p>

            <div className="flg-preview-flow mt-12" aria-hidden>
              <span>ICP</span>
              <span className="flg-preview-flow__arrow">→</span>
              <span>{locale === "sr" ? "Baza" : "List"}</span>
              <span className="flg-preview-flow__arrow">→</span>
              <span>{locale === "sr" ? "Poruke" : "Copy"}</span>
              <span className="flg-preview-flow__arrow">→</span>
              <span className="text-accent">
                {locale === "sr" ? "Sastanci" : "Meetings"}
              </span>
            </div>
          </div>
        </section>

        <section id="proces" className="border-t border-border/40 scroll-mt-24">
          {process.items.map((step, index) => {
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
                      {(bullets[index] ?? []).map((item) => (
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
                      src={processMedia[index]}
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

        <section className="flg-preview-section border-t border-border/40">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <h2 className="flg-preview-heading">{t(deliverables.title, locale)}</h2>
            <p className="mt-3 max-w-2xl text-lg text-muted">
              {locale === "sr"
                ? "Kompletan outbound paket — od profila idealnog klijenta do vođenja kampanja."
                : "Full outbound package — from ideal client profile to campaign management."}
            </p>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {deliverables.items.map((item, index) => (
                <li key={item.title[locale]} className="flg-preview-benefit">
                  <span className="flg-preview-benefit__num">{index + 1}</span>
                  <h3 className="text-lg font-bold text-foreground">{t(item.title, locale)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t(item.description, locale)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="flg-preview-section">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <h2 className="flg-preview-heading text-center">{compareCopy.title}</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="flg-preview-compare-card flg-preview-compare-card--muted">
                <h3 className="text-lg font-bold text-muted">
                  {locale === "sr" ? "Ručni pristup" : "Manual approach"}
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
                <h3 className="text-lg font-bold text-foreground">Lead Agents</h3>
                <ul className="mt-4 space-y-3">
                  {compareCopy.next.map((item) => (
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

        <section className="flg-preview-section border-t border-border/40">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <FlgResultsSlider
              locale={locale}
              title={t(results.title, locale)}
              results={sliderResults}
            />
          </div>
        </section>

        <section className="flg-preview-section">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="flg-preview-playbook grid gap-8 overflow-hidden rounded-3xl border border-border lg:grid-cols-2">
              <div className="relative min-h-[240px] lg:min-h-full">
                <Image
                  src={IMAGES.salesTools}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 540px"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  {locale === "sr" ? "Prodajni alati" : "Sales tools"}
                </p>
                <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
                  {t(highlight, locale)}
                </h2>
                <p className="mt-4 text-muted">
                  {locale === "sr"
                    ? "Uporedite cene, funkcije i alternative — alati koje stvarno koristimo u kampanjama."
                    : "Compare pricing, features, and alternatives — tools we actually use in campaigns."}
                </p>
                <div className="mt-6">
                  <Button href={salesToolsHref} variant="secondary">
                    {t(highlightLink.label, locale)}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flg-preview-section border-t border-border/40 pb-8">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <h2 className="flg-preview-heading">{t(audienceSection.title, locale)}</h2>
            <ul className="mt-10 grid gap-5 lg:grid-cols-3">
              {audienceSection.items!.map((item, index) => (
                <li
                  key={index}
                  className="rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-muted"
                >
                  <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
                    {index + 1}
                  </span>
                  <p className="text-foreground">{item[locale]}</p>
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
          description={t(service.consultation.ctaSubtitle!, locale)}
          primaryHref={contactHref}
          primaryLabel={t(service.consultation.ctaButton, locale)}
          secondaryHref={salesToolsHref}
          secondaryLabel={t(highlightLink.label, locale)}
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
