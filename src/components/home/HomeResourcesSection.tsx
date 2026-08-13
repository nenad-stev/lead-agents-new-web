import Link from "next/link";

import { caseStudies } from "@/data/case-studies";
import { getRoutes } from "@/data/site";
import type { Locale } from "@/lib/i18n";

type HomeResourcesSectionProps = {
  locale: Locale;
};

const copy = {
  sr: {
    eyebrow: "Edukacija",
    title: "Besplatni resursi za B2B rast na LinkedIn-u",
    subtitle:
      "Prodajni alati, webinari i case studije — sve na jednom mestu, bez registracije za pregled.",
    toolsTitle: "Prodajni alati",
    toolsDescription:
      "Pregledi, cene i alternative alata koje koristimo u B2B kampanjama.",
    webinarTitle: "Webinari",
    webinarDescription:
      "Replay stranice sa taktikama za LinkedIn prodaju i B2B outreach.",
    caseStudiesTitle: "Case studije",
    allCaseStudies: "Pogledaj sve case studije",
    readCaseStudy: "Pročitaj case study",
  },
  en: {
    eyebrow: "Education",
    title: "Free resources for B2B growth on LinkedIn",
    subtitle:
      "Sales tools, webinars, and case studies — all in one place, no signup required to browse.",
    toolsTitle: "Sales tools",
    toolsDescription:
      "Reviews, pricing, and alternatives for tools we use in B2B campaigns.",
    webinarTitle: "Webinars",
    webinarDescription:
      "Replay pages with tactics for LinkedIn sales and B2B outreach.",
    caseStudiesTitle: "Case studies",
    allCaseStudies: "View all case studies",
    readCaseStudy: "Read case study",
  },
} as const;

export function HomeResourcesSection({ locale }: HomeResourcesSectionProps) {
  const routes = getRoutes(locale);
  const t = copy[locale];
  const webinarSlug =
    locale === "sr"
      ? "kako-prodati-usluge-na-linkedin-u-2026"
      : "how-to-sell-your-services-on-linkedin-in-2026";

  const resourceCards = [
    {
      href: routes.salesTools,
      title: t.toolsTitle,
      description: t.toolsDescription,
    },
    {
      href: routes.webinar(webinarSlug),
      title: t.webinarTitle,
      description: t.webinarDescription,
    },
  ];

  const featuredCaseStudies = caseStudies.filter((item) => item.hasDetailPage).slice(0, 3);

  return (
    <section className="home-section border-t border-border/40">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{t.eyebrow}</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold text-foreground md:text-4xl">{t.title}</h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">{t.subtitle}</p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {resourceCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="home-card-hover group flex h-full flex-col rounded-2xl border border-border/80 bg-card/80 p-6"
            >
              <h3 className="text-lg font-bold text-foreground group-hover:text-accent">{card.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{card.description}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:underline">
                →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="text-2xl font-bold text-foreground">{t.caseStudiesTitle}</h3>
            <Link href={routes.caseStudies} className="text-sm font-semibold text-accent hover:underline">
              {t.allCaseStudies}
            </Link>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {featuredCaseStudies.map((item) => (
              <Link
                key={item.slug}
                href={routes.caseStudy(item.slug)}
                className="home-card-hover group flex h-full flex-col rounded-2xl border border-border/80 bg-card/80 p-5"
              >
                <h4 className="text-lg font-bold text-foreground group-hover:text-accent">
                  {item.title[locale]}
                </h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.excerpt[locale]}</p>
                <span className="mt-4 text-sm font-semibold text-accent group-hover:underline">
                  {t.readCaseStudy}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
