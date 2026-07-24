import type { Locale } from "@/lib/i18n";

export const siteConfig = {
  name: "Lead Agents",
  logo: "/images/lead-agents-logo.png",
  description:
    "Sales & marketing agencija koja pomaže B2B kompanijama da prodaju usluge na LinkedIn-u.",
  url: "https://lead-agents.com",
  email: "hi@lead-agents.com",
} as const;

export const routes = {
  sr: {
    home: "/",
    caseStudies: "/case-studies",
    caseStudy: (slug: string) => `/case-studies/${slug}`,
    salesTools: "/prodajni-alati",
    salesTool: (slug: string) => `/prodajni-alati/${slug}`,
    service: (slug: string) => `/usluge/${slug}`,
    contact: "/kontakt",
    growthPlaybook: "/growth-playbook/founder-led-growth",
    growthPlaybookLesson: (lessonSlug: string) =>
      `/growth-playbook/founder-led-growth/${lessonSlug}`,
    webinars: "/webinar",
    webinar: (slug: string) => `/webinar/${slug}`,
    leadGenerationMaleFirme: "/lead-generation-male-firme",
    leadGenerationSrednjeFirme: "/lead-generation-srednje-firme",
    leadGenerationEnterprise: "/lead-generation-enterprise",
  },
  en: {
    home: "/en",
    caseStudies: "/en/case-studies",
    caseStudy: (slug: string) => `/en/case-studies/${slug}`,
    salesTools: "/en/sales-tools",
    salesTool: (slug: string) => `/en/sales-tools/${slug}`,
    service: (slug: string) => `/en/services/${slug}`,
    contact: "/en/contact",
    growthPlaybook: "/en/growth-playbook/founder-led-growth",
    growthPlaybookLesson: (lessonSlug: string) =>
      `/en/growth-playbook/founder-led-growth/${lessonSlug}`,
    webinars: "/en/webinar",
    webinar: (slug: string) => `/en/webinar/${slug}`,
    leadGenerationMaleFirme: "/en/lead-generation-small-companies",
    leadGenerationSrednjeFirme: "/en/lead-generation-mid-market",
    leadGenerationEnterprise: "/en/lead-generation-enterprise",
  },
} as const;

export function getRoutes(locale: Locale) {
  return routes[locale];
}

export { caseStudies, getCaseStudyBySlug, placeholderCaseStudies } from "@/data/case-studies";

export const placeholderSalesTools = [
  {
    slug: "attio",
    name: "Attio",
    category: { sr: "CRM", en: "CRM" },
    excerpt: {
      sr: "Moderni CRM za brze prodajne timove.",
      en: "A modern CRM built for fast-moving sales teams.",
    },
  },
  {
    slug: "apollo",
    name: "Apollo",
    category: { sr: "Prospecting", en: "Prospecting" },
    excerpt: {
      sr: "Alat za pronalaženje i kontaktiranje leadova.",
      en: "Find and engage leads at scale.",
    },
  },
  {
    slug: "prospeo",
    name: "Prospeo",
    category: { sr: "Prospecting", en: "Prospecting" },
    excerpt: {
      sr: "Verifikovani B2B emailovi i enrichment podataka.",
      en: "Verified B2B emails and data enrichment.",
    },
  },
  {
    slug: "clay",
    name: "Clay",
    category: { sr: "Prospecting", en: "Prospecting" },
    excerpt: {
      sr: "GTM enrichment i workflow-i iz 150+ izvora podataka.",
      en: "GTM enrichment and workflows from 150+ data sources.",
    },
  },
  {
    slug: "lagrowthmachine",
    name: "La Growth Machine",
    category: { sr: "LinkedIn outreach", en: "LinkedIn outreach" },
    excerpt: {
      sr: "LinkedIn i email automatizacija za B2B outbound.",
      en: "LinkedIn and email automation for B2B outbound.",
    },
  },
  {
    slug: "lemlist",
    name: "Lemlist",
    category: { sr: "Email outreach", en: "Email outreach" },
    excerpt: {
      sr: "Personalizovane cold email kampanje.",
      en: "Personalized cold email campaigns.",
    },
  },
  {
    slug: "taplio",
    name: "Taplio",
    category: { sr: "LinkedIn content", en: "LinkedIn content" },
    excerpt: {
      sr: "AI LinkedIn content, scheduling i analitika za founder-e.",
      en: "AI LinkedIn content, scheduling, and analytics for founders.",
    },
  },
  {
    slug: "smartlead",
    name: "Smartlead",
    category: { sr: "Email outreach", en: "Email outreach" },
    excerpt: {
      sr: "Cold email sa neograničenim inbox-ovima i AI warmup-om.",
      en: "Cold email with unlimited inboxes and AI warmup.",
    },
  },
  {
    slug: "instantly",
    name: "Instantly",
    category: { sr: "Email outreach", en: "Email outreach" },
    excerpt: {
      sr: "Cold email na skali sa neograničenim inbox-ovima.",
      en: "High-volume cold email with unlimited inboxes.",
    },
  },
  {
    slug: "unbounce",
    name: "Unbounce",
    category: { sr: "Landing stranice", en: "Landing pages" },
    excerpt: {
      sr: "No-code landing stranice sa AI optimizacijom konverzija.",
      en: "No-code landing pages with AI conversion optimization.",
    },
  },
] as const;
