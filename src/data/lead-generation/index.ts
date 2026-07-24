import type { LgComparisonRow, LgSlug, LeadGenerationPageContent } from "./types";
import { enterpriseContent } from "./enterprise";
import { maleFirmeContent } from "./male-firme";
import { srednjeFirmeContent } from "./srednje-firme";

export const leadGenerationPages: Record<LgSlug, LeadGenerationPageContent> = {
  "male-firme": maleFirmeContent,
  "srednje-firme": srednjeFirmeContent,
  enterprise: enterpriseContent,
};

export const leadGenerationPageList = Object.values(leadGenerationPages);

export function getLeadGenerationPage(slug: LgSlug): LeadGenerationPageContent {
  return leadGenerationPages[slug];
}

export const comparisonRows: LgComparisonRow[] = [
  {
    label: { sr: "Veličina firme", en: "Company size" },
    male: { sr: "1 do 30 zaposlenih", en: "1 to 30 employees" },
    mid: { sr: "31 do 100 zaposlenih", en: "31 to 100 employees" },
    enterprise: { sr: "Više od 100 zaposlenih", en: "More than 100 employees" },
  },
  {
    label: { sr: "Glavno lice kanala", en: "Main channel face" },
    male: { sr: "Founder", en: "Founder" },
    mid: { sr: "Sales lider ili stručnjak", en: "Sales leader or specialist" },
    enterprise: { sr: "Više senior eksperata", en: "Multiple senior experts" },
  },
  {
    label: { sr: "Metodologija", en: "Methodology" },
    male: { sr: "Founder Led Growth", en: "Founder Led Growth" },
    mid: { sr: "Expert Led Growth", en: "Expert Led Growth" },
    enterprise: {
      sr: "Expert Led Growth i multi channel sistem",
      en: "Expert Led Growth and multi channel system",
    },
  },
  {
    label: { sr: "Broj članova dedicated tima", en: "Dedicated team size" },
    male: { sr: "2 člana", en: "2 people" },
    mid: { sr: "4 člana", en: "4 people" },
    enterprise: { sr: "6 članova", en: "6 people" },
  },
  {
    label: { sr: "Glavni kanali", en: "Primary channels" },
    male: { sr: "LinkedIn content i outreach", en: "LinkedIn content and outreach" },
    mid: { sr: "Content, outreach i buying signals", en: "Content, outreach, and buying signals" },
    enterprise: {
      sr: "LinkedIn, outbound, paid media, CRM i retargeting",
      en: "LinkedIn, outbound, paid media, CRM, and retargeting",
    },
  },
  {
    label: { sr: "Početna analiza", en: "Starting analysis" },
    male: { sr: "ICP i positioning analiza", en: "ICP and positioning analysis" },
    mid: { sr: "GTM analiza", en: "GTM analysis" },
    enterprise: { sr: "Kompletan sales process audit", en: "Full sales process audit" },
  },
  {
    label: { sr: "CRM kompleksnost", en: "CRM complexity" },
    male: { sr: "Google Sheet ili jednostavan CRM", en: "Google Sheets or simple CRM" },
    mid: { sr: "CRM i sales feedback loop", en: "CRM and sales feedback loop" },
    enterprise: { sr: "Napredni RevOps i attribution", en: "Advanced RevOps and attribution" },
  },
  {
    label: { sr: "Glavni cilj", en: "Primary goal" },
    male: { sr: "Stabilniji tok sastanaka", en: "A more stable meeting flow" },
    mid: { sr: "Novi pipeline kanal", en: "A new pipeline channel" },
    enterprise: { sr: "Optimizovan revenue sistem", en: "An optimized revenue system" },
  },
];

export const comparisonColumns = {
  male: {
    slug: "male-firme" as const,
    title: {
      sr: "Male firme",
      en: "Small companies",
    },
  },
  mid: {
    slug: "srednje-firme" as const,
    title: {
      sr: "Srednje firme",
      en: "Mid market",
    },
  },
  enterprise: {
    slug: "enterprise" as const,
    title: {
      sr: "Enterprise firme",
      en: "Enterprise",
    },
  },
};

export type { LgSlug, LeadGenerationPageContent } from "./types";
