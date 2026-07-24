import type { Metadata } from "next";

import { routes, siteConfig } from "@/data/site";
import type { Locale } from "@/lib/i18n";

export type LocalizedPathPair = {
  sr: string;
  en: string;
};

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}

export function localizedAlternates(
  paths: LocalizedPathPair,
  locale: Locale,
): NonNullable<Metadata["alternates"]> {
  return {
    canonical: absoluteUrl(paths[locale]),
    languages: {
      sr: absoluteUrl(paths.sr),
      en: absoluteUrl(paths.en),
      "x-default": absoluteUrl(paths.sr),
    },
  };
}

export function pageMetadata(options: {
  locale: Locale;
  paths: LocalizedPathPair;
  title: string;
  description: string;
  keywords?: string | string[];
  robots?: Metadata["robots"];
}): Metadata {
  return {
    title: options.title,
    description: options.description,
    keywords: options.keywords,
    robots: options.robots,
    alternates: localizedAlternates(options.paths, options.locale),
  };
}

export function servicePaths(slug: string): LocalizedPathPair {
  return {
    sr: routes.sr.service(slug),
    en: routes.en.service(slug),
  };
}

export function salesToolPaths(slug: string): LocalizedPathPair {
  return {
    sr: routes.sr.salesTool(slug),
    en: routes.en.salesTool(slug),
  };
}

export function caseStudyPaths(slug: string): LocalizedPathPair {
  return {
    sr: routes.sr.caseStudy(slug),
    en: routes.en.caseStudy(slug),
  };
}

export const staticPaths = {
  home: { sr: routes.sr.home, en: routes.en.home },
  contact: { sr: routes.sr.contact, en: routes.en.contact },
  caseStudies: { sr: routes.sr.caseStudies, en: routes.en.caseStudies },
  salesTools: { sr: routes.sr.salesTools, en: routes.en.salesTools },
  growthPlaybook: { sr: routes.sr.growthPlaybook, en: routes.en.growthPlaybook },
  webinars: { sr: routes.sr.webinars, en: routes.en.webinars },
  webinarLinkedIn2026: {
    sr: routes.sr.webinar("kako-prodati-usluge-na-linkedin-u-2026"),
    en: routes.en.webinar("how-to-sell-your-services-on-linkedin-in-2026"),
  },
  leadGenerationMaleFirme: {
    sr: routes.sr.leadGenerationMaleFirme,
    en: routes.en.leadGenerationMaleFirme,
  },
  leadGenerationSrednjeFirme: {
    sr: routes.sr.leadGenerationSrednjeFirme,
    en: routes.en.leadGenerationSrednjeFirme,
  },
  leadGenerationEnterprise: {
    sr: routes.sr.leadGenerationEnterprise,
    en: routes.en.leadGenerationEnterprise,
  },
} as const satisfies Record<string, LocalizedPathPair>;
