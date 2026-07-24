import { lesson01RichContent } from "@/data/lessons/lesson-01-why-referrals-are-not-a-sales-system";
import { lesson02RichContent } from "@/data/lessons/lesson-02-why-outbound-cant-work-alone";
import { lesson03RichContent } from "@/data/lessons/lesson-03-icp-who-you-actually-sell-to";
import { lesson04RichContent } from "@/data/lessons/lesson-04-positioning-in-five-seconds";
import { lesson05RichContent } from "@/data/lessons/lesson-05-founder-content-trust-before-message";
import { lesson06RichContent } from "@/data/lessons/lesson-06-signal-based-outreach";
import { lesson07RichContent } from "@/data/lessons/lesson-07-follow-up-system";
import { lesson08RichContent } from "@/data/lessons/lesson-08-webinars-for-unready-buyers";
import { lesson09RichContent } from "@/data/lessons/lesson-09-crm-and-buying-signals";
import { lesson10RichContent } from "@/data/lessons/lesson-10-ai-workflows-for-sales-system";
import { lesson11RichContent } from "@/data/lessons/lesson-11-linkedin-ads-and-retargeting";
import { lesson12RichContent } from "@/data/lessons/lesson-12-flg-system-in-practice";
import type { PlaybookLesson } from "@/types/playbook";
import type { RichLessonContent } from "@/types/rich-lesson";

const richByOrder: RichLessonContent[] = [
  lesson01RichContent,
  lesson02RichContent,
  lesson03RichContent,
  lesson04RichContent,
  lesson05RichContent,
  lesson06RichContent,
  lesson07RichContent,
  lesson08RichContent,
  lesson09RichContent,
  lesson10RichContent,
  lesson11RichContent,
  lesson12RichContent,
];

const defs = [
  {
    "slug": "why-referrals-are-not-a-sales-system",
    "order": 1,
    "phaseId": "foundation",
    "title": {
      "sr": "Zašto referral-i nisu sales sistem",
      "en": "Why Referrals Are Not a Sales System"
    },
    "description": {
      "sr": "Referral-i su odlični leadovi — ali ako su vam glavni kanal, nemate sales sistem. Imate zavisnost.",
      "en": "Referrals are great leads — but if they’re your main channel, you don’t have a sales system. You have a dependency."
    },
    "estimatedReadTime": 10
  },
  {
    "slug": "why-outbound-cant-work-alone",
    "order": 2,
    "phaseId": "foundation",
    "title": {
      "sr": "Zašto outbound više ne može da radi sam",
      "en": "Why Outbound Can’t Work Alone Anymore"
    },
    "description": {
      "sr": "Outbound nije mrtav — ali jedna hladna poruka više ne može da uradi ceo posao poverenja.",
      "en": "Outbound isn’t dead — but one cold message can’t carry the full trust job anymore."
    },
    "estimatedReadTime": 10
  },
  {
    "slug": "icp-who-you-actually-sell-to",
    "order": 3,
    "phaseId": "strategy",
    "title": {
      "sr": "ICP: kome zapravo prodajete",
      "en": "ICP: Who You Actually Sell To"
    },
    "description": {
      "sr": "Firmografski fit, problem fit, timing, buyer i channel fit — konkretan okvir za idealnog kupca.",
      "en": "Firmographic, problem, timing, buyer, and channel fit — a concrete ideal-customer framework."
    },
    "estimatedReadTime": 14
  },
  {
    "slug": "positioning-in-five-seconds",
    "order": 4,
    "phaseId": "strategy",
    "title": {
      "sr": "Positioning: šta kupac mora da razume za 5 sekundi",
      "en": "Positioning: What Buyers Must Understand in 5 Seconds"
    },
    "description": {
      "sr": "Dobar positioning nije slogan — to je kada kupac odmah razume kome pomažete i koji problem rešavate.",
      "en": "Good positioning isn’t a slogan — it’s when buyers instantly understand who you help and which problem you solve."
    },
    "estimatedReadTime": 16
  },
  {
    "slug": "founder-content-trust-before-message",
    "order": 5,
    "phaseId": "content",
    "title": {
      "sr": "Founder content: kako gradite poverenje pre poruke",
      "en": "Founder Content: How You Build Trust Before the Message"
    },
    "description": {
      "sr": "Content nije lični brending. To je sloj poverenja koji outbound čini lakšim.",
      "en": "Content isn’t personal branding. It’s the trust layer that makes outbound easier."
    },
    "estimatedReadTime": 14
  },
  {
    "slug": "signal-based-outreach",
    "order": 6,
    "phaseId": "outreach",
    "title": {
      "sr": "Outreach po signalima: kako prilazite pravim ljudima u pravom trenutku",
      "en": "Signal-Based Outreach: Reaching the Right People at the Right Time"
    },
    "description": {
      "sr": "Umesto hladne liste — outreach na buying signale, timing i kontekst.",
      "en": "Instead of a cold list — outreach built on buying signals, timing, and context."
    },
    "estimatedReadTime": 14
  },
  {
    "slug": "follow-up-system",
    "order": 7,
    "phaseId": "outreach",
    "title": {
      "sr": "Follow up sistem: zašto većina prodaje ne dolazi iz prve poruke",
      "en": "Follow-Up System: Why Most Sales Don’t Come From the First Message"
    },
    "description": {
      "sr": "Follow-up nije “samo proveravam” — to je sistem koji dodaje novi razlog za odgovor.",
      "en": "Follow-up isn’t “just checking in” — it’s a system that adds a new reason to reply."
    },
    "estimatedReadTime": 14
  },
  {
    "slug": "webinars-for-unready-buyers",
    "order": 8,
    "phaseId": "nurture",
    "title": {
      "sr": "Webinari: kako da edukujete kupce koji još nisu spremni za sales razgovor",
      "en": "Webinars: How to Educate Buyers Who Aren’t Ready for a Sales Call"
    },
    "description": {
      "sr": "Webinar kao most između interesovanja i sastanka — za kupce kojima treba više poverenja.",
      "en": "Webinars as a bridge between interest and meetings — for buyers who need more trust first."
    },
    "estimatedReadTime": 16
  },
  {
    "slug": "crm-and-buying-signals",
    "order": 9,
    "phaseId": "systems",
    "title": {
      "sr": "CRM i buying signals: kako da znate ko se zagreva",
      "en": "CRM and Buying Signals: How to Know Who Is Warming Up"
    },
    "description": {
      "sr": "CRM nije arhiva prošlosti — to je sistem koji pokazuje ko se zagreva i šta je sledeći korak.",
      "en": "CRM isn’t an archive of the past — it’s the system that shows who’s warming up and what’s next."
    },
    "estimatedReadTime": 18
  },
  {
    "slug": "ai-workflows-for-sales-system",
    "order": 10,
    "phaseId": "systems",
    "title": {
      "sr": "AI workflow-i: kako povezati sales sistem bez ručnog haosa",
      "en": "AI Workflows: Connecting the Sales System Without Manual Chaos"
    },
    "description": {
      "sr": "AI nije zamena za sistem — povezuje liste, signale, follow-up i reporting bez ručnog haosa.",
      "en": "AI isn’t a system replacement — it connects lists, signals, follow-up, and reporting without manual chaos."
    },
    "estimatedReadTime": 16
  },
  {
    "slug": "linkedin-ads-and-retargeting",
    "order": 11,
    "phaseId": "scale",
    "title": {
      "sr": "LinkedIn Ads i retargeting: kako skalirati ono što već radi",
      "en": "LinkedIn Ads and Retargeting: How to Scale What Already Works"
    },
    "description": {
      "sr": "Paid ne treba da traži poruku — treba da skalira ono što organski već dokazuje poverenje.",
      "en": "Paid shouldn’t invent the message — it should scale what organic already proves builds trust."
    },
    "estimatedReadTime": 16
  },
  {
    "slug": "flg-system-in-practice",
    "order": 12,
    "phaseId": "system",
    "title": {
      "sr": "Kako izgleda ceo Founder Led Growth sistem u praksi",
      "en": "What the Full Founder Led Growth System Looks Like in Practice"
    },
    "description": {
      "sr": "Kako ICP, content, outreach, follow-up, webinari, CRM, AI i ads rade kao jedan sistem.",
      "en": "How ICP, content, outreach, follow-up, webinars, CRM, AI, and ads work as one system."
    },
    "estimatedReadTime": 18
  }
] as const;

export const founderLedGrowthLessons: PlaybookLesson[] = defs.map((def, index) => ({
  slug: def.slug,
  order: def.order,
  phaseId: def.phaseId,
  estimatedReadTime: def.estimatedReadTime,
  title: def.title,
  description: def.description,
  recommendedToolSlugs: [],
  meta: {
    title: {
      sr: `${def.title.sr} | Lead Agents`,
      en: `${def.title.en} | Lead Agents`,
    },
    description: def.description,
  },
  sections: [],
  richContent: richByOrder[index],
}));
