import { siteConfig } from "@/data/site";
import type { Locale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/seo";
import type { CaseStudyDetail, CaseStudyListing } from "@/types/case-study";
import type { SalesTool } from "@/types/sales-tool";
import type { ServicePage } from "@/types/service";

const ORGANIZATION_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

type BreadcrumbItem = {
  name: string;
  path: string;
};

function localizedLanguage(locale: Locale) {
  return locale === "sr" ? "sr-RS" : "en";
}

function textFromPrice(price: string) {
  const match = price.match(/(\d+(?:[.,]\d+)?)/);
  return match?.[1]?.replace(",", ".");
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORGANIZATION_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    email: siteConfig.email,
    description: siteConfig.description,
    founder: [
      { "@type": "Person", name: "Nenad Stevanović" },
      { "@type": "Person", name: "Tihomir Mijailović" },
    ],
    areaServed: ["RS", "EU", "US", "GB"],
    knowsAbout: [
      "Founder-Led Growth",
      "B2B lead generation",
      "LinkedIn outreach",
      "Cold sales outreach",
      "LinkedIn content strategy",
      "Sales automation",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: ["sr-RS", "en"],
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema(service: ServicePage, locale: Locale, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: service.hero.title[locale],
    serviceType: service.hero.title[locale],
    description: service.meta.description[locale],
    url: absoluteUrl(path),
    provider: { "@id": ORGANIZATION_ID },
    areaServed: ["RS", "EU", "US", "GB"],
    audience: service.hero.audience?.[locale],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(path),
    },
  };
}

export function courseSchema(options: {
  name: string;
  description: string;
  locale: Locale;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${absoluteUrl(options.path)}#course`,
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.path),
    inLanguage: localizedLanguage(options.locale),
    provider: { "@id": ORGANIZATION_ID },
  };
}

export function softwareApplicationSchema(
  tool: SalesTool,
  locale: Locale,
  path: string,
) {
  const price = textFromPrice(tool.pricing.startingPrice[locale]);

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${absoluteUrl(path)}#software`,
    name: tool.name,
    applicationCategory: tool.category[locale],
    operatingSystem: "Web",
    url: absoluteUrl(path),
    image: absoluteUrl(tool.logo),
    description: tool.overview[locale],
    offers: price
      ? {
          "@type": "Offer",
          price,
          priceCurrency: tool.pricing.startingPrice[locale].includes("$")
            ? "USD"
            : "EUR",
          availability: "https://schema.org/InStock",
          url: tool.websiteUrl,
        }
      : undefined,
    aggregateRating: tool.rating
      ? {
          "@type": "AggregateRating",
          ratingValue: tool.rating.g2,
          reviewCount: tool.rating.g2Reviews,
          bestRating: 5,
          worstRating: 1,
        }
      : undefined,
  };
}

export function caseStudyArticleSchema(
  caseStudy: CaseStudyDetail | CaseStudyListing,
  locale: Locale,
  path: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl(path)}#article`,
    headline: caseStudy.title[locale],
    description: caseStudy.excerpt[locale],
    image: caseStudy.image ? absoluteUrl(caseStudy.image) : undefined,
    mainEntityOfPage: absoluteUrl(path),
    inLanguage: localizedLanguage(locale),
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
  };
}
