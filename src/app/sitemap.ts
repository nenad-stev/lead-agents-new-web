import type { MetadataRoute } from "next";

import { caseStudies, routes, siteConfig } from "@/data/site";
import { getAllSalesToolSlugs } from "@/data/sales-tools";
import { getAllServiceSlugs } from "@/data/services";

const BASE_URL = siteConfig.url;

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

function absoluteUrl(path: string) {
  return `${BASE_URL}${path}`;
}

function makeLocalizedEntry(
  srPath: string,
  enPath: string,
  changeFrequency: ChangeFrequency,
  priority: number,
): MetadataRoute.Sitemap[number] {
  return {
    url: absoluteUrl(srPath),
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: {
        sr: absoluteUrl(srPath),
        en: absoluteUrl(enPath),
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    makeLocalizedEntry(routes.sr.home, routes.en.home, "weekly", 1),
    makeLocalizedEntry(routes.sr.contact, routes.en.contact, "monthly", 0.8),
    makeLocalizedEntry(routes.sr.caseStudies, routes.en.caseStudies, "weekly", 0.9),
    makeLocalizedEntry(routes.sr.salesTools, routes.en.salesTools, "weekly", 0.85),
    makeLocalizedEntry(routes.sr.growthPlaybook, routes.en.growthPlaybook, "weekly", 0.9),
    makeLocalizedEntry(routes.sr.webinars, routes.en.webinars, "weekly", 0.85),
    makeLocalizedEntry(
      routes.sr.webinar("kako-prodati-usluge-na-linkedin-u-2026"),
      routes.en.webinar("how-to-sell-your-services-on-linkedin-in-2026"),
      "monthly",
      0.85,
    ),
  ];

  const serviceEntries: MetadataRoute.Sitemap = getAllServiceSlugs().map((slug) =>
    makeLocalizedEntry(routes.sr.service(slug), routes.en.service(slug), "weekly", 0.8),
  );

  const salesToolEntries: MetadataRoute.Sitemap = getAllSalesToolSlugs().map((slug) =>
    makeLocalizedEntry(routes.sr.salesTool(slug), routes.en.salesTool(slug), "weekly", 0.75),
  );

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies
    .filter((study) => study.hasDetailPage)
    .map((study) =>
      makeLocalizedEntry(
        routes.sr.caseStudy(study.slug),
        routes.en.caseStudy(study.slug),
        "monthly",
        0.8,
      ),
    );

  return [...staticEntries, ...serviceEntries, ...salesToolEntries, ...caseStudyEntries];
}
