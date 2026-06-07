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
      sr: "Content iz intervjua koji gradi poverenje paralelno sa outreach-om.",
      en: "Interview-based content that builds trust in parallel with outreach.",
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
      sr: "Outreach validira ICP i ponudu, paralelno sa content-om; buying signali pokreću topliji follow-up.",
      en: "Outreach validates ICP and offer, in parallel with content; buying signals trigger warmer follow-up.",
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
      sr: "Skaliranje onoga što organski već daje kvalitetan ICP engagement (Thought Leader Ads, ABM).",
      en: "Scaling what already drives quality ICP engagement organically (Thought Leader Ads, ABM).",
    },
  },
  {
    id: "crm-pipeline",
    order: 8,
    title: { sr: "CRM & Pipeline", en: "CRM & Pipeline" },
    description: {
      sr: "CRM od starta: lead source, signali, faze i merljiv pipeline.",
      en: "CRM from day one: lead source, signals, stages, and measurable pipeline.",
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
    sr: "B2B founder-i, vlasnici agencija i SaaS kompanija sa 5-50 zaposlenih koji prodaju usluge ili softver sa dužim sales ciklusom.",
    en: "B2B founders, agency owners, and SaaS companies with 5-50 employees selling services or software with longer sales cycles.",
  },
  outcome: {
    sr: "Operativni B2B revenue sistem: ICP i profil, outreach + content paralelno, engagement, webinari, ads, CRM i buying signali koji pokreću pravovremen topliji outreach.",
    en: "An operational B2B revenue system: ICP and profile, outreach + content in parallel, engagement, webinars, ads, CRM, and buying signals that trigger timely warmer outreach.",
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
      sr: "Operativni B2B sistem: ICP → profil → outreach + content paralelno → engagement → CRM → buying signali → sastanci.",
      en: "An operational B2B system: ICP → profile → outreach + content in parallel → engagement → CRM → buying signals → meetings.",
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
        "Founder-Led Growth nije lični brending. To je operativni B2B revenue sistem u kom founder ili drugo relevantno lice kompanije gradi poverenje kod idealnih kupaca i povezuje outreach, content, engagement, webinare, oglase, CRM i buying signale.",
        "Redosled implementacije: ICP i LinkedIn profil prvo, zatim outreach i content paralelno. Outreach validira ponudu i širi mrežu. Content gradi poverenje pre sastanka. Engagement povećava vidljivost kod ICP-a.",
        "Kako sistem skalira: cold outreach testira poruke, content gradi poverenje, ads pojačavaju ono što organski radi, CRM prati signale i lead scoring, buying signali pokreću pravovremen topliji outreach.",
        "Cilj nije viralnost. Cilj je kvalifikovani sastanci i stabilniji pipeline. 12 lekcija vode od strategije do inbound-to-outbound petlje.",
      ],
      en: [
        "Founder-Led Growth is not personal branding. It is an operational B2B revenue system where the founder or another relevant company expert builds trust with ideal buyers and connects outreach, content, engagement, webinars, ads, CRM, and buying signals.",
        "Implementation order: ICP and LinkedIn profile first, then outreach and content in parallel. Outreach validates the offer and expands the network. Content builds trust before the meeting. Engagement increases visibility with your ICP.",
        "How the system scales: cold outreach tests messaging, content builds trust, ads amplify what works organically, CRM tracks signals and lead scoring, buying signals trigger timely warmer outreach.",
        "The goal is not virality. The goal is qualified meetings and a more stable pipeline. Twelve lessons walk you from strategy to the inbound-to-outbound loop.",
      ],
    },
  },
  framework: {
    title: {
      sr: "Lead Agents Founder-Led Growth okvir",
      en: "Lead Agents Founder-Led Growth framework",
    },
    description: {
      sr: "ICP → profil → outreach + content (paralelno) → engagement → webinari → ads → CRM → signali. Devet faza, 12 lekcija, jedan revenue sistem.",
      en: "ICP → profile → outreach + content (in parallel) → engagement → webinars → ads → CRM → signals. Nine phases, twelve lessons, one revenue system.",
    },
  },
  roadmap: {
    title: {
      sr: "Roadmap lekcija",
      en: "Lesson roadmap",
    },
    description: {
      sr: "12 lekcija grupisanih po fazama. Počni od Lekcije 1 (sistem i buyer journey), zatim ICP i profil, pa outreach + content paralelno.",
      en: "12 lessons grouped by phase. Start with Lesson 1 (system and buyer journey), then ICP and profile, then outreach + content in parallel.",
    },
  },
  toolsSection: {
    title: {
      sr: "Preporučeni alati",
      en: "Recommended tools",
    },
    description: {
      sr: "Alati koje koristimo u Founder-Led Growth implementacijama, više detalja u našem direktorijumu prodajnih alata.",
      en: "Tools we use in Founder-Led Growth implementations, more details in our sales tools directory.",
    },
  },
  cta: {
    title: {
      sr: "Želiš da implementiramo Founder-Led Growth sistem za tvoju firmu?",
      en: "Want us to implement Founder-Led Growth for your company?",
    },
    text: {
      sr: "Lead Agents pomaže B2B kompanijama da implementiraju ceo Founder-Led Growth sistem: outreach + content paralelno, CRM, buying signali i ads koji skaliraju ono što već radi.",
      en: "Lead Agents helps B2B companies implement the full Founder-Led Growth system: outreach + content in parallel, CRM, buying signals, and ads that scale what already works.",
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
