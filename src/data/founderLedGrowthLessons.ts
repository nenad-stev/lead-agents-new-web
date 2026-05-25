import { lesson1RichContent } from "@/data/lessons/lesson-1-what-founder-led-growth";
import { lesson2RichContent } from "@/data/lessons/lesson-2-how-to-define-your-icp";
import { lesson3RichContent } from "@/data/lessons/lesson-3-linkedin-profile-optimization-founder";
import { lesson4RichContent } from "@/data/lessons/lesson-4-linkedin-content-strategy-founder";
import { lesson5RichContent } from "@/data/lessons/lesson-5-write-educational-linkedin-posts";
import { lesson6RichContent } from "@/data/lessons/lesson-6-linkedin-commenting-strategy";
import { lesson7RichContent } from "@/data/lessons/lesson-7-linkedin-engagement-outreach-list";
import { lesson8RichContent } from "@/data/lessons/lesson-8-webinars-founder-led-growth";
import { lesson9RichContent } from "@/data/lessons/lesson-9-linkedin-ads-thought-leader-ads";
import { lesson10RichContent } from "@/data/lessons/lesson-10-crm-pipeline-tracking";
import { lesson11RichContent } from "@/data/lessons/lesson-11-buying-signals-b2b-sales";
import { lesson12RichContent } from "@/data/lessons/lesson-12-inbound-to-outbound-system";
import { buildStandardLessonSections } from "@/data/playbook-sections";
import type { PlaybookLesson } from "@/types/playbook";

const L = {
  problem: { sr: "Problem", en: "Problem" },
  why: { sr: "Zašto je važno", en: "Why it matters" },
  framework: { sr: "Okvir", en: "Framework" },
  steps: { sr: "Korak po korak", en: "Step-by-step process" },
  example: { sr: "Primer", en: "Example" },
  tools: { sr: "Preporučeni alati", en: "Recommended tools" },
  checklist: { sr: "Čeklista", en: "Checklist" },
  next: { sr: "Sledeći korak", en: "Next step" },
} as const;

function lessonMeta(
  title: { sr: string; en: string },
  description: { sr: string; en: string },
): PlaybookLesson["meta"] {
  return {
    title: {
      sr: `${title.sr} | Lead Agents`,
      en: `${title.en} | Lead Agents`,
    },
    description,
  };
}

export const founderLedGrowthLessons: PlaybookLesson[] = [
  {
    slug: "what-founder-led-growth-is",
    order: 1,
    phaseId: "strategy-positioning",
    estimatedReadTime: 20,
    title: {
      sr: "Šta je Founder-Led Growth i zašto radi za B2B firme",
      en: "What Founder-Led Growth Is and Why It Works for B2B Companies",
    },
    description: {
      sr: "Kako Founder-Led Growth povezuje LinkedIn, content, engagement, webinare, outreach, CRM, ads i intent signale u jedan predvidljiv B2B pipeline sistem.",
      en: "How Founder-Led Growth connects LinkedIn, content, engagement, webinars, outreach, CRM, ads, and intent signals into one predictable B2B pipeline system.",
    },
    recommendedToolSlugs: ["hubspot", "taplio", "n8n"],
    meta: {
      title: {
        sr: "Šta je Founder-Led Growth i zašto radi za B2B firme | Lead Agents",
        en: "What Founder-Led Growth Is and Why It Works for B2B Companies | Lead Agents",
      },
      description: {
        sr: "Nauči kako Founder-Led Growth koristi LinkedIn, content, engagement, webinare, outreach, CRM, ads i intent signale za predvidljiv B2B pipeline.",
        en: "Learn how Founder-Led Growth uses LinkedIn, content, engagement, webinars, outreach, CRM, ads, and intent signals to build predictable B2B pipeline.",
      },
      keywords: {
        sr: [
          "founder-led growth",
          "founder-led sales",
          "LinkedIn lead generation za founder-e",
          "B2B founder marketing",
          "founder-led content",
          "B2B pipeline generation",
          "LinkedIn outbound",
          "B2B buying signals",
        ],
        en: [
          "founder-led growth",
          "founder-led sales",
          "LinkedIn lead generation for founders",
          "B2B founder marketing",
          "founder-led content",
          "B2B pipeline generation",
          "LinkedIn outbound",
          "B2B buying signals",
        ],
      },
    },
    sections: [],
    richContent: lesson1RichContent,
  },
  {
    slug: "how-to-define-your-icp",
    order: 2,
    phaseId: "strategy-positioning",
    estimatedReadTime: 18,
    title: {
      sr: "Kako definisati ICP za Founder-Led Growth",
      en: "How to Define Your ICP for Founder-Led Growth",
    },
    description: {
      sr: "Praktičan okvir za idealnog klijenta koji usmerava content, outreach, webinare, CRM i prodaju.",
      en: "A practical framework for defining the ideal customer profile that guides content, outreach, webinars, CRM, and sales.",
    },
    recommendedToolSlugs: ["hubspot", "apollo", "clay"],
    meta: {
      title: {
        sr: "Kako definisati ICP za Founder-Led Growth | Lead Agents",
        en: "How to Define Your ICP for Founder-Led Growth | Lead Agents",
      },
      description: {
        sr: "Nauči kako da definišeš Ideal Customer Profile za Founder-Led Growth i koristi ga za LinkedIn content, outreach, webinare, CRM i pipeline.",
        en: "Learn how to define an Ideal Customer Profile for Founder-Led Growth and use it to guide LinkedIn content, outreach, webinars, CRM, and pipeline.",
      },
      keywords: {
        sr: [
          "ICP za founder-led growth",
          "ideal customer profile",
          "B2B ICP",
          "ICP za LinkedIn outreach",
          "founder-led sales ICP",
          "B2B customer profile",
          "ICP framework",
          "B2B lead generation targeting",
          "sales targeting strategy",
          "LinkedIn Sales Navigator ICP",
        ],
        en: [
          "ICP for founder-led growth",
          "ideal customer profile",
          "B2B ICP",
          "ICP for LinkedIn outreach",
          "founder-led sales ICP",
          "B2B customer profile",
          "ICP framework",
          "B2B lead generation targeting",
          "sales targeting strategy",
          "LinkedIn Sales Navigator ICP",
        ],
      },
    },
    sections: [],
    richContent: lesson2RichContent,
  },
  {
    slug: "linkedin-profile-optimization-founder",
    order: 3,
    phaseId: "linkedin-profile",
    estimatedReadTime: 16,
    title: {
      sr: "Kako optimizovati LinkedIn profil founder-a za B2B lead generation",
      en: "How to Optimize a Founder's LinkedIn Profile for B2B Lead Generation",
    },
    description: {
      sr: "Pretvori LinkedIn profil founder-a u konverzionu landing stranicu sa jasnom ponudom, dokazom i CTA-om.",
      en: "Turn the founder's LinkedIn profile into a conversion-focused landing page with a clear offer, proof, and CTA.",
    },
    recommendedToolSlugs: ["taplio", "hubspot"],
    meta: {
      title: {
        sr: "Kako optimizovati LinkedIn profil founder-a za B2B lead generation | Lead Agents",
        en: "How to Optimize a Founder's LinkedIn Profile for B2B Lead Generation | Lead Agents",
      },
      description: {
        sr: "Nauči kako da pretvoriš LinkedIn profil founder-a u B2B lead generation asset sa jasnim pozicioniranjem, dokazom, content-om i CTA-om.",
        en: "Learn how to turn a founder's LinkedIn profile into a B2B lead generation asset with clear positioning, proof, content, and CTA.",
      },
      keywords: {
        sr: [
          "LinkedIn profil optimizacija za founder-e",
          "founder LinkedIn profil",
          "LinkedIn profil za lead generation",
          "B2B LinkedIn profil optimizacija",
          "LinkedIn profil landing stranica",
          "founder-led sales LinkedIn",
          "LinkedIn headline za founder-e",
          "LinkedIn About sekcija šablon",
          "LinkedIn profil CTA",
          "B2B social selling profil",
        ],
        en: [
          "LinkedIn profile optimization for founders",
          "founder LinkedIn profile",
          "LinkedIn profile for lead generation",
          "B2B LinkedIn profile optimization",
          "LinkedIn profile landing page",
          "founder-led sales LinkedIn",
          "LinkedIn headline for founders",
          "LinkedIn about section template",
          "LinkedIn profile CTA",
          "B2B social selling profile",
        ],
      },
    },
    sections: [],
    richContent: lesson3RichContent,
  },
  {
    slug: "linkedin-content-strategy-founder",
    order: 4,
    phaseId: "content-engine",
    estimatedReadTime: 20,
    title: {
      sr: "Kako napraviti LinkedIn content strategiju za founder-a",
      en: "How to Build a LinkedIn Content Strategy for a Founder",
    },
    description: {
      sr: "Teme, ritam i formati koji grade autoritet kod ICP-a bez burnout-a founder-a.",
      en: "Topics, rhythm, and formats that build authority with your ICP without burning out the founder.",
    },
    recommendedToolSlugs: ["taplio", "hubspot"],
    meta: {
      title: {
        sr: "Kako napraviti LinkedIn content strategiju za founder-a | Lead Agents",
        en: "How to Build a LinkedIn Content Strategy for a Founder | Lead Agents",
      },
      description: {
        sr: "Nauči kako da izgradiš LinkedIn content strategiju za founder-e sa jasnim pilarima, ritmom objava, formatima, repurposing-om i pipeline CTA-ovima.",
        en: "Learn how to build a LinkedIn content strategy for founders with clear content pillars, posting rhythm, formats, repurposing, and pipeline-focused CTAs.",
      },
      keywords: {
        sr: [
          "LinkedIn content strategija za founder-e",
          "founder LinkedIn content strategija",
          "B2B LinkedIn content strategija",
          "founder-led content",
          "LinkedIn content pilari",
          "LinkedIn content kalendar za founder-e",
          "B2B thought leadership strategija",
          "LinkedIn posting strategija",
          "founder-led growth content",
          "LinkedIn content bez burnout-a",
          "B2B content strategija",
        ],
        en: [
          "LinkedIn content strategy for founders",
          "founder LinkedIn content strategy",
          "B2B LinkedIn content strategy",
          "founder-led content",
          "LinkedIn content pillars",
          "LinkedIn content calendar for founders",
          "B2B thought leadership strategy",
          "LinkedIn posting strategy",
          "founder-led growth content",
          "LinkedIn content without burnout",
          "B2B content strategy",
        ],
      },
    },
    sections: [],
    richContent: lesson4RichContent,
  },
  {
    slug: "write-educational-linkedin-posts",
    order: 5,
    phaseId: "content-engine",
    estimatedReadTime: 18,
    title: {
      sr: "Kako pisati edukativne LinkedIn postove koji grade autoritet",
      en: "How to Write Educational LinkedIn Posts That Build Authority",
    },
    description: {
      sr: "Struktura posta, hook-ovi i CTA koji vode čitaoca ka sledećem koraku u prodajnom putu.",
      en: "Post structure, hooks, and CTAs that guide the reader toward the next step in the sales journey.",
    },
    recommendedToolSlugs: ["taplio", "hubspot"],
    meta: {
      title: {
        sr: "Kako pisati edukativne LinkedIn postove koji grade autoritet | Lead Agents",
        en: "How to Write Educational LinkedIn Posts That Build Authority | Lead Agents",
      },
      description: {
        sr: "Nauči kako da pišeš edukativne LinkedIn postove sa jakim hook-ovima, praktičnom strukturom, dokazom i CTA-ovima koji grade autoritet i pomeraju B2B kupce ka akciji.",
        en: "Learn how to write educational LinkedIn posts with strong hooks, practical structure, proof, and CTAs that build authority and move B2B buyers toward action.",
      },
      keywords: {
        sr: [
          "edukativni LinkedIn postovi",
          "LinkedIn struktura posta",
          "LinkedIn hook-ovi",
          "B2B LinkedIn postovi",
          "founder LinkedIn postovi",
          "LinkedIn thought leadership postovi",
          "LinkedIn CTA primeri",
          "LinkedIn post šabloni",
          "B2B thought leadership content",
          "LinkedIn authority building",
          "founder-led content",
        ],
        en: [
          "educational LinkedIn posts",
          "LinkedIn post structure",
          "LinkedIn hooks",
          "B2B LinkedIn posts",
          "founder LinkedIn posts",
          "LinkedIn thought leadership posts",
          "LinkedIn CTA examples",
          "LinkedIn post templates",
          "B2B thought leadership content",
          "LinkedIn authority building",
          "founder-led content",
        ],
      },
    },
    sections: [],
    richContent: lesson5RichContent,
  },
  {
    slug: "linkedin-commenting-strategy",
    order: 6,
    phaseId: "engagement-engine",
    estimatedReadTime: 16,
    title: {
      sr: "Kako koristiti LinkedIn komentarisanje za vidljivost kod ICP-a",
      en: "How to Use LinkedIn Commenting for Visibility With Your ICP",
    },
    description: {
      sr: "Strategija komentarisanja koja gradi odnose pre nego što pošalješ prvu poruku.",
      en: "A commenting strategy that builds relationships before you send the first message.",
    },
    recommendedToolSlugs: ["taplio", "hubspot"],
    meta: {
      title: {
        sr: "Kako koristiti LinkedIn komentarisanje za vidljivost kod ICP-a | Lead Agents",
        en: "How to Use LinkedIn Commenting for Visibility With Your ICP | Lead Agents",
      },
      description: {
        sr: "Nauči kako strateško LinkedIn komentarisanje gradi vidljivost, odnose i tople outreach prilike kod idealnih kupaca pre prve poruke.",
        en: "Learn how to use strategic LinkedIn commenting to build visibility, relationships, and warm outreach opportunities with your ideal customers before sending the first message.",
      },
      keywords: {
        sr: [
          "LinkedIn strategija komentarisanja",
          "LinkedIn komentari za B2B",
          "LinkedIn strategija angažmana",
          "B2B social selling LinkedIn",
          "LinkedIn komentari za vidljivost",
          "founder LinkedIn angažman",
          "LinkedIn ICP angažman",
          "LinkedIn social selling strategija",
          "gradnja odnosa na LinkedInu",
          "topli LinkedIn outreach",
          "Founder-Led Growth komentarisanje",
        ],
        en: [
          "LinkedIn commenting strategy",
          "LinkedIn commenting for B2B",
          "LinkedIn engagement strategy",
          "B2B social selling LinkedIn",
          "LinkedIn comments for visibility",
          "founder LinkedIn engagement",
          "LinkedIn ICP engagement",
          "LinkedIn social selling strategy",
          "LinkedIn relationship building",
          "LinkedIn warm outreach",
          "Founder-Led Growth commenting",
        ],
      },
    },
    sections: [],
    richContent: lesson6RichContent,
  },
  {
    slug: "linkedin-engagement-outreach-list",
    order: 7,
    phaseId: "outreach-engine",
    estimatedReadTime: 20,
    title: {
      sr: "Kako pretvoriti LinkedIn engagement u outreach listu",
      en: "How to Turn LinkedIn Engagement Into an Outreach List",
    },
    description: {
      sr: "Od lajkova i komentara do kvalifikovane liste za personalizovan DM i email.",
      en: "From likes and comments to a qualified list for personalized DM and email.",
    },
    recommendedToolSlugs: ["clay", "apollo", "heyreach", "lemlist", "lagrowthmachine", "hubspot"],
    meta: {
      title: {
        sr: "Kako pretvoriti LinkedIn engagement u outreach listu | Lead Agents",
        en: "How to Turn LinkedIn Engagement Into an Outreach List | Lead Agents",
      },
      description: {
        sr: "Nauči kako da pretvoriš LinkedIn lajkove, komentare, profile view-ove i engagement u kvalifikovanu outreach listu za personalizovane DM-ove i email.",
        en: "Learn how to turn LinkedIn likes, comments, profile views, and post engagement into a qualified outreach list for personalized LinkedIn DMs and email.",
      },
      keywords: {
        sr: [
          "LinkedIn engagement outreach list",
          "LinkedIn engagement u outreach listu",
          "topli LinkedIn outreach",
          "gradnja LinkedIn lead liste",
          "LinkedIn outreach lista",
          "LinkedIn engagement signali",
          "personalizovani LinkedIn outreach",
          "Clay lead enrichment",
          "multichannel outreach",
          "Founder-Led Growth outreach",
        ],
        en: [
          "LinkedIn engagement outreach list",
          "LinkedIn engagement to outreach",
          "LinkedIn warm outreach",
          "LinkedIn lead list building",
          "LinkedIn outreach list",
          "LinkedIn engagement signals",
          "personalized LinkedIn outreach",
          "Clay lead enrichment",
          "multichannel outreach",
          "Founder-Led Growth outreach",
        ],
      },
    },
    sections: [],
    richContent: lesson7RichContent,
  },
  {
    slug: "webinars-founder-led-growth",
    order: 8,
    phaseId: "webinar-engine",
    estimatedReadTime: 14,
    title: {
      sr: "Kako koristiti webinare kao deo Founder-Led Growth sistema",
      en: "How to Use Webinars as Part of Founder-Led Growth",
    },
    description: {
      sr: "Struktura, promocija i follow-up koji pretvaraju učesnike u pipeline.",
      en: "Structure, promotion, and follow-up that turn attendees into pipeline.",
    },
    recommendedToolSlugs: ["hubspot", "unbounce", "n8n"],
    meta: {
      title: {
        sr: "Kako koristiti webinare u Founder-Led Growth | Lead Agents",
        en: "How to Use Webinars as Part of Founder-Led Growth | Lead Agents",
      },
      description: {
        sr: "Nauči kako da koristiš webinare u Founder-Led Growth-u: struktura, LinkedIn promocija, segmentacija učesnika i follow-up koji pretvara intent u pipeline.",
        en: "Learn how to use webinars in Founder-Led Growth to structure valuable sessions, promote them through LinkedIn, segment attendees, and turn follow-up into pipeline.",
      },
      keywords: {
        sr: [
          "webinari za founder-led growth",
          "B2B webinar strategija",
          "webinar lead generation",
          "webinar follow-up strategija",
          "founder-led webinar",
          "LinkedIn webinar promocija",
          "webinar pipeline",
          "webinar CRM follow-up",
          "B2B webinar funnel",
          "webinar conversion strategija",
          "webinar segmentacija učesnika",
        ],
        en: [
          "webinars for founder-led growth",
          "B2B webinar strategy",
          "webinar lead generation",
          "webinar follow-up strategy",
          "founder-led webinar",
          "LinkedIn webinar promotion",
          "webinar pipeline",
          "webinar CRM follow-up",
          "B2B webinar funnel",
          "webinar conversion strategy",
          "webinar attendee segmentation",
        ],
      },
    },
    sections: [],
    richContent: lesson8RichContent,
  },
  {
    slug: "linkedin-ads-thought-leader-ads",
    order: 9,
    phaseId: "linkedin-ads-boost",
    estimatedReadTime: 16,
    title: {
      sr: "Kako koristiti LinkedIn Ads da pojačaš Founder-Led Growth",
      en: "How to Use LinkedIn Ads to Boost Founder-Led Growth",
    },
    description: {
      sr: "Kada i kako dodati paid boost founder content-u, webinarima i lead magnetima — sa fokusom na Thought Leader Ads.",
      en: "When and how to add paid boost to founder content, webinars, and lead magnets — with a focus on Thought Leader Ads.",
    },
    recommendedToolSlugs: ["hubspot", "taplio", "n8n"],
    meta: {
      title: {
        sr: "Kako koristiti LinkedIn Ads da pojačaš Founder-Led Growth | Lead Agents",
        en: "How to Use LinkedIn Ads to Boost Founder-Led Growth | Lead Agents",
      },
      description: {
        sr: "Nauči kako koristiti LinkedIn Thought Leader Ads, paid boost, promociju webinara i lead magnet kampanje da pojačaš Founder-Led Growth.",
        en: "Learn how to use LinkedIn Thought Leader Ads, paid boosts, webinar promotion, and lead magnet campaigns to amplify Founder-Led Growth.",
      },
      keywords: {
        sr: [
          "LinkedIn Thought Leader Ads",
          "LinkedIn Ads za founder-led growth",
          "LinkedIn thought leadership ads",
          "LinkedIn paid boost",
          "LinkedIn ads za webinare",
          "LinkedIn lead magnet ads",
          "founder LinkedIn ads",
          "B2B LinkedIn ads strategija",
          "LinkedIn sponsored content",
          "LinkedIn ad languages",
          "LinkedIn profile ads",
        ],
        en: [
          "LinkedIn Thought Leader Ads",
          "LinkedIn Ads for founder-led growth",
          "LinkedIn thought leadership ads",
          "LinkedIn paid boost",
          "LinkedIn ads for webinars",
          "LinkedIn lead magnet ads",
          "founder LinkedIn ads",
          "B2B LinkedIn ads strategy",
          "LinkedIn sponsored content",
          "LinkedIn ad languages",
          "LinkedIn profile ads",
        ],
      },
    },
    sections: [],
    richContent: lesson9RichContent,
  },
  {
    slug: "crm-pipeline-tracking",
    order: 10,
    phaseId: "crm-pipeline",
    estimatedReadTime: 20,
    title: {
      sr: "Kako pratiti Founder-Led Growth aktivnosti u CRM-u",
      en: "How to Track Founder-Led Growth Activities in Your CRM",
    },
    description: {
      sr: "Pipeline stage-ovi, tagovi i izveštaji koji povezuju LinkedIn aktivnost sa revenue.",
      en: "Pipeline stages, tags, and reports that connect LinkedIn activity to revenue.",
    },
    recommendedToolSlugs: ["hubspot", "attio", "clay", "heyreach", "lemlist", "n8n"],
    meta: {
      title: {
        sr: "Kako pratiti Founder-Led Growth aktivnosti u CRM-u | Lead Agents",
        en: "How to Track Founder-Led Growth Activities in Your CRM | Lead Agents",
      },
      description: {
        sr: "Nauči kako pratiti Founder-Led Growth aktivnosti u CRM-u: pipeline stage-ovi, tagovi, custom polja i izveštaji koji povezuju LinkedIn sa revenue.",
        en: "Learn how to track Founder-Led Growth activities in your CRM with pipeline stages, tags, custom fields, and reports that connect LinkedIn activity to revenue.",
      },
      keywords: {
        sr: [
          "Founder-Led Growth CRM tracking",
          "CRM pipeline stage-ovi",
          "LinkedIn CRM tracking",
          "B2B CRM attribution",
          "founder-led sales CRM",
          "CRM custom polja",
          "pipeline reporting",
          "LinkedIn to CRM workflow",
          "CRM tagovi za LinkedIn leadove",
          "HubSpot pipeline tracking",
          "Pipedrive pipeline tracking",
          "CRM revenue attribution",
        ],
        en: [
          "Founder-Led Growth CRM tracking",
          "CRM pipeline stages",
          "LinkedIn CRM tracking",
          "B2B CRM attribution",
          "founder-led sales CRM",
          "CRM custom fields",
          "pipeline reporting",
          "LinkedIn to CRM workflow",
          "CRM tags for LinkedIn leads",
          "HubSpot pipeline tracking",
          "Pipedrive pipeline tracking",
          "CRM revenue attribution",
        ],
      },
    },
    sections: [],
    richContent: lesson10RichContent,
  },
  {
    slug: "buying-signals-b2b-sales",
    order: 11,
    phaseId: "intent-signals",
    estimatedReadTime: 18,
    title: {
      sr: "Šta su buying signali i kako ih koristiti u B2B prodaji",
      en: "What Buying Signals Are and How to Use Them in B2B Sales",
    },
    description: {
      sr: "Prepoznaj intent pre nego što konkurent pošalje ponudu.",
      en: "Recognize intent before your competitor sends the proposal.",
    },
    recommendedToolSlugs: ["clay", "hubspot", "apollo", "rb2b", "n8n"],
    meta: {
      title: {
        sr: "Šta su buying signali i kako ih koristiti u B2B prodaji | Lead Agents",
        en: "What Buying Signals Are and How to Use Them in B2B Sales | Lead Agents",
      },
      description: {
        sr: "Nauči kako identifikovati, score-ovati i delovati na B2B buying signale sa LinkedIn-a, website poseta, webinara, CRM-a, hiring trigger-a, intent data platformi i sales razgovora.",
        en: "Learn how to identify, score, and act on B2B buying signals from LinkedIn, website visits, webinars, CRM, hiring triggers, intent data, and sales engagement.",
      },
      keywords: {
        sr: [
          "B2B buying signals",
          "buyer intent signals",
          "B2B intent data",
          "LinkedIn intent signals",
          "buying intent data",
          "sales intent signals",
          "website intent signals",
          "webinar intent signals",
          "B2B sales triggers",
          "account intent scoring",
          "signal-based selling",
          "Founder-Led Growth buying signals",
        ],
        en: [
          "B2B buying signals",
          "buyer intent signals",
          "B2B intent data",
          "LinkedIn intent signals",
          "buying intent data",
          "sales intent signals",
          "website intent signals",
          "webinar intent signals",
          "B2B sales triggers",
          "account intent scoring",
          "signal-based selling",
          "Founder-Led Growth buying signals",
        ],
      },
    },
    sections: [],
    richContent: lesson11RichContent,
  },
  {
    slug: "inbound-to-outbound-system",
    order: 12,
    phaseId: "intent-signals",
    estimatedReadTime: 20,
    title: {
      sr: "Kako napraviti inbound-to-outbound sistem",
      en: "How to Build an Inbound-to-Outbound System",
    },
    description: {
      sr: "Poveži content, webinar, CRM i outreach u jedan predvidljiv pipeline motor.",
      en: "Connect content, webinars, CRM, and outreach into one predictable pipeline engine.",
    },
    recommendedToolSlugs: ["hubspot", "attio", "clay", "heyreach", "lemlist", "n8n"],
    meta: {
      title: {
        sr: "Kako napraviti inbound-to-outbound sistem | Lead Agents",
        en: "How to Build an Inbound-to-Outbound System | Lead Agents",
      },
      description: {
        sr: "Nauči kako povezati LinkedIn content, webinare, CRM, buying signale i outreach u jedan predvidljiv inbound-to-outbound B2B pipeline sistem.",
        en: "Learn how to connect LinkedIn content, webinars, CRM, buying signals, and outreach into one predictable inbound-to-outbound B2B pipeline system.",
      },
      keywords: {
        sr: [
          "inbound-to-outbound system",
          "Founder-Led Growth system",
          "inbound outbound sales system",
          "B2B pipeline engine",
          "LinkedIn to outbound workflow",
          "inbound lead follow-up",
          "signal-based outbound",
          "content to pipeline",
          "webinar to pipeline",
          "CRM sales workflow",
          "B2B revenue engine",
          "inbound lead management",
        ],
        en: [
          "inbound-to-outbound system",
          "Founder-Led Growth system",
          "inbound outbound sales system",
          "B2B pipeline engine",
          "LinkedIn to outbound workflow",
          "inbound lead follow-up",
          "signal-based outbound",
          "content to pipeline",
          "webinar to pipeline",
          "CRM sales workflow",
          "B2B revenue engine",
          "inbound lead management",
        ],
      },
    },
    sections: [],
    richContent: lesson12RichContent,
  },
];

export function getFounderLedGrowthLessonSlugs(): string[] {
  return founderLedGrowthLessons.map((lesson) => lesson.slug);
}
