import { founderLedGrowthLessons } from "@/data/founderLedGrowthLessons";
import type { PlaybookCluster, PlaybookLesson, PlaybookPhase } from "@/types/playbook";

export const FOUNDER_LED_GROWTH_SLUG = "founder-led-growth";

export const founderLedGrowthPhases: PlaybookPhase[] = [
  {
    id: "strategy-positioning",
    order: 1,
    title: { sr: "Strategy & Positioning", en: "Strategy & Positioning" },
    description: {
      sr: "ICP, ponuda i pozicioniranje pre aktivacije kanala.",
      en: "ICP, offer, and positioning before activating channels.",
    },
  },
  {
    id: "linkedin-profile",
    order: 2,
    title: { sr: "LinkedIn Profile", en: "LinkedIn Profile" },
    description: {
      sr: "Profil founder-a kao konverziona landing stranica.",
      en: "Founder profile as a conversion landing page.",
    },
  },
  {
    id: "content-engine",
    order: 3,
    title: { sr: "Content Engine", en: "Content Engine" },
    description: {
      sr: "Content iz intervjua (klipovi, carousel) koji pojačava outreach i poverenje.",
      en: "Interview-based content (clips, carousels) that strengthens outreach and trust.",
    },
  },
  {
    id: "engagement-engine",
    order: 4,
    title: { sr: "Engagement Engine", en: "Engagement Engine" },
    description: {
      sr: "Komentari i signali koji hrane outreach listu.",
      en: "Comments and signals that feed the outreach list.",
    },
  },
  {
    id: "outreach-engine",
    order: 5,
    title: { sr: "Outreach Engine", en: "Outreach Engine" },
    description: {
      sr: "Cold outreach (LGM, HeyReach, Instantly, Lemlist) i outreach na buying signale.",
      en: "Cold outreach (LGM, HeyReach, Instantly, Lemlist) and outreach on buying signals.",
    },
  },
  {
    id: "webinar-engine",
    order: 6,
    title: { sr: "Webinar Engine", en: "Webinar Engine" },
    description: {
      sr: "Webinari kao high-intent lead magnet.",
      en: "Webinars as a high-intent lead magnet.",
    },
  },
  {
    id: "linkedin-ads-boost",
    order: 7,
    title: { sr: "LinkedIn Ads Boost", en: "LinkedIn Ads Boost" },
    description: {
      sr: "Thought Leader Ads, skaliranje posta koji organski radi (indirektan napad).",
      en: "Thought Leader Ads, scaling posts that work organically (indirect attack).",
    },
  },
  {
    id: "crm-pipeline",
    order: 8,
    title: { sr: "CRM & Pipeline", en: "CRM & Pipeline" },
    description: {
      sr: "Praćenje aktivnosti i revenue u CRM-u.",
      en: "Tracking activity and revenue in CRM.",
    },
  },
  {
    id: "intent-signals",
    order: 9,
    title: { sr: "Intent Signals", en: "Intent Signals" },
    description: {
      sr: "Buying signals i inbound-to-outbound petlja.",
      en: "Buying signals and the inbound-to-outbound loop.",
    },
  },
];

export const founderLedGrowthCluster: PlaybookCluster = {
  slug: FOUNDER_LED_GROWTH_SLUG,
  phases: founderLedGrowthPhases,
  lessons: founderLedGrowthLessons,
  audience: {
    sr: "B2B founder-i, vlasnici agencija i SaaS kompanija sa 5–50 zaposlenih koji prodaju usluge ili softver sa dužim sales ciklusom.",
    en: "B2B founders, agency owners, and SaaS companies with 5–50 employees selling services or software with longer sales cycles.",
  },
  outcome: {
    sr: "Predvidljiv pipeline: ICP, outreach i value-based follow-up, content, signali, re-engagement u pravom trenutku, CRM sa lead scoring-om.",
    en: "A predictable pipeline: ICP, outreach and value-based follow-up, content, signals, re-engagement at the right moment, CRM with lead scoring.",
  },
  relatedCaseStudySlugs: [],
  meta: {
    title: {
      sr: "Founder-Led Growth Playbook | Lead Agents",
      en: "Founder-Led Growth Playbook | Lead Agents",
    },
    description: {
      sr: "Kompletan sistem za B2B founder-e koji žele da koriste LinkedIn, content, outreach, ads, CRM i intent signale za izgradnju pipeline-a.",
      en: "A complete system for B2B founders who want to use LinkedIn, content, outreach, ads, CRM and intent signals to build pipeline.",
    },
  },
  hero: {
    title: {
      sr: "Founder-Led Growth Playbook",
      en: "Founder-Led Growth Playbook",
    },
    subtitle: {
      sr: "Kompletan sistem za B2B founder-e koji žele da koriste LinkedIn, content, outreach i sales alate za izgradnju predvidivog pipeline-a.",
      en: "A complete system for B2B founders who want to use LinkedIn, content, outreach, and sales tools to build a predictable pipeline.",
    },
    primaryCta: { sr: "Kreni od prve lekcije", en: "Start the first lesson" },
    secondaryCta: { sr: "Zakaži konsultaciju", en: "Book a consultation" },
  },
  intro: {
    title: {
      sr: "Šta je Founder-Led Growth?",
      en: "What is Founder-Led Growth?",
    },
    paragraphs: {
      sr: [
        "Lead Agents Founder-Led Growth je sistem pravih LinkedIn konekcija sa ICP-om, ne spam liste.",
        "Prvo ICP dokument, zatim profil i cold outreach (direktna konekcija). Content iz intervjua gradi poverenje. Signali (komentar, view, webinar) pokreću re-engagement u pravom trenutku.",
        "Follow-up sistem u HeyReach, Lemlist ili La Growth Machine drži value-based dodire dok lead nije spreman, bez dosadnih „samo da proverim“ poruka.",
        "CRM i lead scoring povezuju outreach, content, signale i reklame u jednu listu sledećih koraka. 12 lekcija, jedan operativni proces.",
      ],
      en: [
        "Lead Agents Founder-Led Growth is a system for real LinkedIn connections with your ICP, not a spam list.",
        "Start with the ICP document, then profile and cold outreach (direct connection). Interview-based content builds trust. Signals (comment, view, webinar) trigger re-engagement at the right moment.",
        "A follow-up system in HeyReach, Lemlist, or La Growth Machine keeps value-based touches until the lead is ready, without annoying \"just checking in\" messages.",
        "CRM and lead scoring tie outreach, content, signals, and ads into one list of next actions. 12 lessons, one operating process.",
      ],
    },
  },
  framework: {
    title: {
      sr: "Lead Agents Founder-Led Growth okvir",
      en: "Lead Agents Founder-Led Growth framework",
    },
    description: {
      sr: "Devet faza koje povezujemo u implementaciji za klijente — svaka faza ima lekcije i preporučene alate.",
      en: "Nine phases we connect in client implementations — each phase has lessons and recommended tools.",
    },
  },
  roadmap: {
    title: {
      sr: "Roadmap lekcija",
      en: "Lesson roadmap",
    },
    description: {
      sr: "12 lekcija grupisanih po fazama. Pratite redosled ili skočite na temu koja vam je prioritet.",
      en: "12 lessons grouped by phase. Follow the order or jump to the topic that is your priority.",
    },
  },
  toolsSection: {
    title: {
      sr: "Preporučeni alati",
      en: "Recommended tools",
    },
    description: {
      sr: "Alati koje koristimo u Founder-Led Growth implementacijama — više detalja u našem direktorijumu prodajnih alata.",
      en: "Tools we use in Founder-Led Growth implementations — more details in our sales tools directory.",
    },
  },
  cta: {
    title: {
      sr: "Želiš da implementiramo Founder-Led Growth sistem za tvoju firmu?",
      en: "Want us to implement Founder-Led Growth for your company?",
    },
    text: {
      sr: "Lead Agents pomaže B2B kompanijama da povežu LinkedIn, content, outreach, intent signale i CRM u jedan sistem za pipeline.",
      en: "Lead Agents helps B2B companies connect LinkedIn, content, outreach, intent signals, and CRM into one pipeline system.",
    },
    button: { sr: "Zakaži konsultaciju", en: "Book a consultation" },
  },
  lessonCta: {
    title: {
      sr: "Želiš da ovo implementiramo za tvoju firmu?",
      en: "Want us to implement this for your company?",
    },
    text: {
      sr: "Možemo da ti pomognemo da pretvoriš ovaj playbook u konkretan pipeline sistem.",
      en: "We can help you turn this playbook into a concrete pipeline system.",
    },
    button: { sr: "Zakaži konsultaciju", en: "Book a consultation" },
  },
  labels: {
    growthPlaybook: { sr: "Growth Playbook", en: "Growth Playbook" },
    clusterName: { sr: "Founder-Led Growth", en: "Founder-Led Growth" },
    openLesson: { sr: "Otvori lekciju", en: "Open lesson" },
    lessonNumber: { sr: "Lekcija", en: "Lesson" },
    readTime: { sr: "Vreme čitanja", en: "Reading time" },
    phase: { sr: "Faza", en: "Phase" },
    previousLesson: { sr: "Prethodna lekcija", en: "Previous lesson" },
    nextLesson: { sr: "Sledeća lekcija", en: "Next lesson" },
    backToPlaybook: { sr: "Nazad na playbook", en: "Back to playbook" },
    tableOfContents: { sr: "Sadržaj lekcije", en: "Lesson contents" },
    recommendedTools: { sr: "Preporučeni alati", en: "Recommended tools" },
    minutes: { sr: "min", en: "min" },
  },
  recommendedTools: [
    {
      slug: "attio",
      name: "Attio",
      category: { sr: "CRM", en: "CRM" },
      description: {
        sr: "Moderni CRM za praćenje founder touchpoint-a, deal stage-ova i lead source-a.",
        en: "Modern CRM to track founder touchpoints, deal stages, and lead sources.",
      },
    },
    {
      slug: "clay",
      name: "Clay",
      category: { sr: "Enrichment & workflow", en: "Enrichment & workflow" },
      description: {
        sr: "Enrichment i signal workflow-i za warm liste i buying intent.",
        en: "Enrichment and signal workflows for warm lists and buying intent.",
      },
    },
    {
      slug: "apollo",
      name: "Apollo",
      category: { sr: "Prospecting", en: "Prospecting" },
      description: {
        sr: "Prospecting i trigger event-i za ABM i outbound segmentaciju.",
        en: "Prospecting and trigger events for ABM and outbound segmentation.",
      },
    },
    {
      slug: "smartlead",
      name: "Smartlead",
      category: { sr: "Email outreach", en: "Email outreach" },
      description: {
        sr: "Email sekvence za nurture leadova koji nisu spremni za SQL sastanak.",
        en: "Email sequences to nurture leads not yet ready for an SQL meeting.",
      },
    },
    {
      slug: "taplio",
      name: "Taplio",
      category: { sr: "LinkedIn content", en: "LinkedIn content" },
      description: {
        sr: "Planiranje i analitika LinkedIn content-a za founder-e.",
        en: "Planning and analytics for founder LinkedIn content.",
      },
    },
    {
      slug: "shield-analytics",
      name: "Shield Analytics",
      category: { sr: "LinkedIn analytics", en: "LinkedIn analytics" },
      description: {
        sr: "Dubinska analitika performansi profila i postova.",
        en: "Deep analytics for profile and post performance.",
      },
    },
  ],
};

export function getFounderLedGrowthLesson(
  lessonSlug: string,
): PlaybookLesson | undefined {
  return founderLedGrowthLessons.find((lesson) => lesson.slug === lessonSlug);
}

export function getLessonsByPhase(phaseId: string): PlaybookLesson[] {
  return founderLedGrowthLessons.filter((lesson) => lesson.phaseId === phaseId);
}

export function getAdjacentLessons(lessonSlug: string): {
  previous?: PlaybookLesson;
  next?: PlaybookLesson;
} {
  const index = founderLedGrowthLessons.findIndex((l) => l.slug === lessonSlug);
  if (index === -1) return {};
  return {
    previous: index > 0 ? founderLedGrowthLessons[index - 1] : undefined,
    next:
      index < founderLedGrowthLessons.length - 1
        ? founderLedGrowthLessons[index + 1]
        : undefined,
  };
}

export function getPhaseById(phaseId: string): PlaybookPhase | undefined {
  return founderLedGrowthPhases.find((phase) => phase.id === phaseId);
}
