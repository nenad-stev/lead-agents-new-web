import type { MetadataRoute } from "next";

import { caseStudies, routes, siteConfig } from "@/data/site";
import { getAllSalesToolSlugs } from "@/data/sales-tools";
import { getAllServiceSlugs } from "@/data/services";

const BASE_URL = siteConfig.url;

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

function absoluteUrl(path: string) {
  return `${BASE_URL}${path}`;
}

function localizedPair(
  srPath: string,
  enPath: string,
  changeFrequency: ChangeFrequency,
  priority: number,
): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl(srPath),
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          sr: absoluteUrl(srPath),
          en: absoluteUrl(enPath),
          "x-default": absoluteUrl(srPath),
        },
      },
    },
    {
      url: absoluteUrl(enPath),
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          sr: absoluteUrl(srPath),
          en: absoluteUrl(enPath),
          "x-default": absoluteUrl(srPath),
        },
      },
    },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    ...localizedPair(routes.sr.home, routes.en.home, "weekly", 1),
    ...localizedPair(routes.sr.contact, routes.en.contact, "monthly", 0.8),
    ...localizedPair(routes.sr.caseStudies, routes.en.caseStudies, "weekly", 0.9),
    ...localizedPair(routes.sr.salesTools, routes.en.salesTools, "weekly", 0.85),
    ...localizedPair(routes.sr.growthPlaybook, routes.en.growthPlaybook, "weekly", 0.9),
    ...localizedPair(routes.sr.webinars, routes.en.webinars, "weekly", 0.85),
    ...localizedPair(
      routes.sr.webinar("kako-prodati-usluge-na-linkedin-u-2026"),
      routes.en.webinar("how-to-sell-your-services-on-linkedin-in-2026"),
      "monthly",
      0.85,
    ),
  ];

  const serviceEntries: MetadataRoute.Sitemap = getAllServiceSlugs().flatMap((slug) =>
    localizedPair(routes.sr.service(slug), routes.en.service(slug), "weekly", 0.8),
  );

  const salesToolEntries: MetadataRoute.Sitemap = getAllSalesToolSlugs().flatMap((slug) =>
    localizedPair(routes.sr.salesTool(slug), routes.en.salesTool(slug), "weekly", 0.75),
  );

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies
    .filter((study) => study.hasDetailPage)
    .flatMap((study) =>
      localizedPair(
        routes.sr.caseStudy(study.slug),
        routes.en.caseStudy(study.slug),
        "monthly",
        0.8,
      ),
    );

  return [...staticEntries, ...serviceEntries, ...salesToolEntries, ...caseStudyEntries];
}
