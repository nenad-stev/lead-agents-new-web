import { founderLedGrowthLessons } from "@/data/founderLedGrowthLessons";
import type { PlaybookCluster, PlaybookLesson, PlaybookPhase } from "@/types/playbook";

export const FOUNDER_LED_GROWTH_SLUG = "founder-led-growth";

export const founderLedGrowthPhases: PlaybookPhase[] = [
  {
    id: "foundation",
    order: 1,
    title: { sr: "Temelj", en: "Foundation" },
    description: {
      sr: "Zašto referral-i i outbound sami nisu dovoljni — i zašto treba sistem.",
      en: "Why referrals and outbound alone aren’t enough — and why you need a system.",
    },
  },
  {
    id: "strategy",
    order: 2,
    title: { sr: "Strategija", en: "Strategy" },
    description: {
      sr: "ICP i positioning pre nego što skalirate kanale.",
      en: "ICP and positioning before you scale channels.",
    },
  },
  {
    id: "content",
    order: 3,
    title: { sr: "Content", en: "Content" },
    description: {
      sr: "Founder content koji gradi poverenje pre poruke.",
      en: "Founder content that builds trust before the message.",
    },
  },
  {
    id: "outreach",
    order: 4,
    title: { sr: "Outreach", en: "Outreach" },
    description: {
      sr: "Outreach po signalima i follow-up sistem.",
      en: "Signal-based outreach and a follow-up system.",
    },
  },
  {
    id: "nurture",
    order: 5,
    title: { sr: "Nurture", en: "Nurture" },
    description: {
      sr: "Webinari za kupce koji još nisu spremni za sales razgovor.",
      en: "Webinars for buyers who aren’t ready for a sales conversation yet.",
    },
  },
  {
    id: "systems",
    order: 6,
    title: { sr: "Sistemi", en: "Systems" },
    description: {
      sr: "CRM, buying signals i AI workflow-i.",
      en: "CRM, buying signals, and AI workflows.",
    },
  },
  {
    id: "scale",
    order: 7,
    title: { sr: "Skala", en: "Scale" },
    description: {
      sr: "LinkedIn Ads i retargeting koji skaliraju ono što već radi.",
      en: "LinkedIn Ads and retargeting that scale what already works.",
    },
  },
  {
    id: "system",
    order: 8,
    title: { sr: "Ceo sistem", en: "Full system" },
    description: {
      sr: "Kako svi delovi rade zajedno u praksi.",
      en: "How all the parts work together in practice.",
    },
  },
];

export const founderLedGrowthCluster: PlaybookCluster = {
  slug: FOUNDER_LED_GROWTH_SLUG,
  phases: founderLedGrowthPhases,
  lessons: founderLedGrowthLessons,
  audience: {
    sr: "B2B founder-i, vlasnici agencija i SaaS kompanija sa 5-50 zaposlenih koji prodaju usluge ili softver sa dužim sales ciklusom.",
    en: "B2B founders, agency owners, and SaaS companies with 5-50 employees selling services or software with longer sales cycles.",
  },
  outcome: {
    sr: "Sales sistem u kom content gradi poverenje, outreach testira tržište, webinari edukuju, CRM prati ko se zagreva, follow-up održava prisutnost, AI uklanja ručni haos, a Ads skaliraju ono što već radi.",
    en: "A sales system where content builds trust, outreach tests the market, webinars educate, CRM tracks who’s warming up, follow-up keeps presence, AI removes manual chaos, and ads scale what already works.",
  },
  relatedCaseStudySlugs: [],
  meta: {
    title: {
      sr: "Founder-Led Growth Playbook | Lead Agents",
      en: "Founder-Led Growth Playbook | Lead Agents",
    },
    description: {
      sr: "12 lekcija: od referral zavisnosti i ICP-a, preko founder contenta, signal outreach-a i follow-upa, do webinara, CRM-a, AI workflow-a i LinkedIn Ads-a — kao jedan sales sistem.",
      en: "12 lessons: from referral dependency and ICP, through founder content, signal outreach and follow-up, to webinars, CRM, AI workflows, and LinkedIn Ads — as one sales system.",
    },
  },
  hero: {
    title: {
      sr: "Founder-Led Growth Playbook",
      en: "Founder-Led Growth Playbook",
    },
    subtitle: {
      sr: "12 lekcija koje povezuju founder content, outreach po signalima, follow-up, webinare, CRM, AI i Ads — da referral-i ostanu bonus, ne osnova pipeline-a.",
      en: "12 lessons that connect founder content, signal-based outreach, follow-up, webinars, CRM, AI, and ads — so referrals stay a bonus, not the foundation of pipeline.",
    },
    primaryCta: { sr: "Pogledaj 12 lekcija", en: "Browse 12 lessons" },
    secondaryCta: { sr: "Zakaži konsultaciju", en: "Book a consultation" },
  },
  intro: {
    title: {
      sr: "Zašto ovaj guide postoji",
      en: "Why this guide exists",
    },
    paragraphs: {
      sr: [
        "Većina B2B firmi ne kreće da gradi sales sistem zato što ima plan. Krene zato što mora — veliki klijent ode, referral-i stanu, pipeline se isprazni.",
        "Referral-i su odlični. Ali ako su vam referral-i glavni sales kanal, nemate sales sistem. Imate zavisnost od tuđeg tajminga.",
        "Ovaj playbook nije još jedna LinkedIn taktika. Kroz 12 lekcija pokazuje Founder-Led Growth sistem: od temelja (zašto referral-i i outbound sami nisu dovoljni), preko ICP-a i positioning-a, do contenta, outreach-a, follow-upa, webinara, CRM-a, AI-a i Ads-a.",
        "Cilj nije da founder postane influenser. Cilj je da kupac, pre sales razgovora, već ima osećaj: znam ko su, razumem šta rade, deluju relevantno — i da tim ima sistem koji to gradi iz ciklusa u ciklus.",
      ],
      en: [
        "Most B2B companies don’t start building a sales system because they have a plan. They start because they have to — a big client leaves, referrals stall, the pipeline empties.",
        "Referrals are great. But if referrals are your main sales channel, you don’t have a sales system. You have a dependency on someone else’s timing.",
        "This playbook isn’t another LinkedIn tactic. Across 12 lessons it shows a Founder-Led Growth system: from the foundation (why referrals and outbound alone aren’t enough), through ICP and positioning, to content, outreach, follow-up, webinars, CRM, AI, and ads.",
        "The goal isn’t to turn the founder into an influencer. The goal is that before a sales conversation, the buyer already feels: I know who they are, I understand what they do, they feel relevant — and that the team has a system that builds that cycle after cycle.",
      ],
    },
  },
  framework: {
    title: {
      sr: "Kako 12 lekcija grade sistem",
      en: "How 12 lessons build the system",
    },
    description: {
      sr: "Temelj → ICP & positioning → content → outreach & follow-up → webinari → CRM & AI → Ads → ceo sistem. Svaka lekcija priprema sledeću.",
      en: "Foundation → ICP & positioning → content → outreach & follow-up → webinars → CRM & AI → ads → full system. Each lesson prepares the next.",
    },
  },
  roadmap: {
    title: {
      sr: "Sve lekcije",
      en: "All lessons",
    },
    description: {
      sr: "Počni od Lekcije 1 — zašto referral-i nisu sales sistem — pa idi redom. Faza po faza, do celog sistema u Lekciji 12.",
      en: "Start with Lesson 1 — why referrals aren’t a sales system — then go in order. Phase by phase, through to the full system in Lesson 12.",
    },
  },
  toolsSection: {
    title: {
      sr: "Preporučeni alati",
      en: "Recommended tools",
    },
    description: {
      sr: "Alati koje koristimo uz lekcije o CRM-u, outreach-u, contentu i AI workflow-ima — više detalja u direktorijumu prodajnih alata.",
      en: "Tools we use alongside the CRM, outreach, content, and AI workflow lessons — more detail in the sales tools directory.",
    },
  },
  cta: {
    title: {
      sr: "Želiš da implementiramo Founder-Led Growth sistem za tvoju firmu?",
      en: "Want us to implement Founder-Led Growth for your company?",
    },
    text: {
      sr: "Lead Agents pomaže B2B kompanijama da spoje ICP, founder content, outreach po signalima, follow-up, webinare, CRM i Ads u jedan pipeline sistem — ne u odvojene taktike.",
      en: "Lead Agents helps B2B companies connect ICP, founder content, signal-based outreach, follow-up, webinars, CRM, and ads into one pipeline system — not separate tactics.",
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
        sr: "Email sekvence za nurture leadova koji još nisu spremni za sales razgovor.",
        en: "Email sequences to nurture leads not yet ready for a sales conversation.",
      },
    },
    {
      slug: "taplio",
      name: "Taplio",
      category: { sr: "LinkedIn content", en: "LinkedIn content" },
      description: {
        sr: "Planiranje i analitika founder contenta koji greje kupce pre outreach-a.",
        en: "Planning and analytics for founder content that warms buyers before outreach.",
      },
    },
    {
      slug: "shield-analytics",
      name: "Shield Analytics",
      category: { sr: "LinkedIn analytics", en: "LinkedIn analytics" },
      description: {
        sr: "Analitika postova i teme koje privlače pravi ICP — laboratorija pre Ads-a.",
        en: "Analytics on posts and themes that attract the right ICP — the lab before ads.",
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
