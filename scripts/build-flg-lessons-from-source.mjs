/**
 * Builds prose-only RichLessonContent stubs from content/flg-playbook/source/*.txt
 * Run: node scripts/build-flg-lessons-from-source.mjs
 *
 * EN body mirrors SR for now — translate + design per lesson next.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const sourceDir = path.join(root, "content/flg-playbook/source");
const outDir = path.join(root, "src/data/lessons");

const LESSONS = [
  {
    file: "01-referrals-not-sales-system.txt",
    out: "lesson-01-why-referrals-are-not-a-sales-system.ts",
    exportName: "lesson01RichContent",
    slug: "why-referrals-are-not-a-sales-system",
    order: 1,
    phaseId: "foundation",
    title: {
      sr: "Zašto referral-i nisu sales sistem",
      en: "Why Referrals Are Not a Sales System",
    },
    description: {
      sr: "Referral-i su odlični leadovi — ali ako su vam glavni kanal, nemate sales sistem. Imate zavisnost.",
      en: "Referrals are great leads — but if they’re your main channel, you don’t have a sales system. You have a dependency.",
    },
    read: "8-10 min",
  },
  {
    file: "02-outbound-cant-work-alone.txt",
    out: "lesson-02-why-outbound-cant-work-alone.ts",
    exportName: "lesson02RichContent",
    slug: "why-outbound-cant-work-alone",
    order: 2,
    phaseId: "foundation",
    title: {
      sr: "Zašto outbound više ne može da radi sam",
      en: "Why Outbound Can’t Work Alone Anymore",
    },
    description: {
      sr: "Outbound nije mrtav — ali jedna hladna poruka više ne može da uradi ceo posao poverenja.",
      en: "Outbound isn’t dead — but one cold message can’t carry the full trust job anymore.",
    },
    read: "8-10 min",
  },
  {
    file: "03-icp-who-you-sell-to.txt",
    out: "lesson-03-icp-who-you-actually-sell-to.ts",
    exportName: "lesson03RichContent",
    slug: "icp-who-you-actually-sell-to",
    order: 3,
    phaseId: "strategy",
    title: {
      sr: "ICP: kome zapravo prodajete",
      en: "ICP: Who You Actually Sell To",
    },
    description: {
      sr: "Firmografski fit, problem fit, timing, buyer i channel fit — konkretan okvir za idealnog kupca.",
      en: "Firmographic, problem, timing, buyer, and channel fit — a concrete ideal-customer framework.",
    },
    read: "14-18 min",
  },
  {
    file: "04-positioning-five-seconds.txt",
    out: "lesson-04-positioning-in-five-seconds.ts",
    exportName: "lesson04RichContent",
    slug: "positioning-in-five-seconds",
    order: 4,
    phaseId: "strategy",
    title: {
      sr: "Positioning: šta kupac mora da razume za 5 sekundi",
      en: "Positioning: What Buyers Must Understand in 5 Seconds",
    },
    description: {
      sr: "Dobar positioning nije slogan — to je kada kupac odmah razume kome pomažete i koji problem rešavate.",
      en: "Good positioning isn’t a slogan — it’s when buyers instantly understand who you help and which problem you solve.",
    },
    read: "16-20 min",
  },
  {
    file: "05-founder-content-trust.txt",
    out: "lesson-05-founder-content-trust-before-message.ts",
    exportName: "lesson05RichContent",
    slug: "founder-content-trust-before-message",
    order: 5,
    phaseId: "content",
    title: {
      sr: "Founder content: kako gradite poverenje pre poruke",
      en: "Founder Content: How You Build Trust Before the Message",
    },
    description: {
      sr: "Content nije lični brending. To je sloj poverenja koji outbound čini lakšim.",
      en: "Content isn’t personal branding. It’s the trust layer that makes outbound easier.",
    },
    read: "14-18 min",
  },
  {
    file: "06-signal-based-outreach.txt",
    out: "lesson-06-signal-based-outreach.ts",
    exportName: "lesson06RichContent",
    slug: "signal-based-outreach",
    order: 6,
    phaseId: "outreach",
    title: {
      sr: "Outreach po signalima: kako prilazite pravim ljudima u pravom trenutku",
      en: "Signal-Based Outreach: Reaching the Right People at the Right Time",
    },
    description: {
      sr: "Umesto hladne liste — outreach na buying signale, timing i kontekst.",
      en: "Instead of a cold list — outreach built on buying signals, timing, and context.",
    },
    read: "14-18 min",
  },
  {
    file: "07-follow-up-system.txt",
    out: "lesson-07-follow-up-system.ts",
    exportName: "lesson07RichContent",
    slug: "follow-up-system",
    order: 7,
    phaseId: "outreach",
    title: {
      sr: "Follow up sistem: zašto većina prodaje ne dolazi iz prve poruke",
      en: "Follow-Up System: Why Most Sales Don’t Come From the First Message",
    },
    description: {
      sr: "Follow-up nije “samo proveravam” — to je sistem koji dodaje novi razlog za odgovor.",
      en: "Follow-up isn’t “just checking in” — it’s a system that adds a new reason to reply.",
    },
    read: "14-18 min",
  },
  {
    file: "08-webinars.txt",
    out: "lesson-08-webinars-for-unready-buyers.ts",
    exportName: "lesson08RichContent",
    slug: "webinars-for-unready-buyers",
    order: 8,
    phaseId: "nurture",
    title: {
      sr: "Webinari: kako da edukujete kupce koji još nisu spremni za sales razgovor",
      en: "Webinars: How to Educate Buyers Who Aren’t Ready for a Sales Call",
    },
    description: {
      sr: "Webinar kao most između interesovanja i sastanka — za kupce kojima treba više poverenja.",
      en: "Webinars as a bridge between interest and meetings — for buyers who need more trust first.",
    },
    read: "16-20 min",
  },
  {
    file: "09-crm-buying-signals.txt",
    out: "lesson-09-crm-and-buying-signals.ts",
    exportName: "lesson09RichContent",
    slug: "crm-and-buying-signals",
    order: 9,
    phaseId: "systems",
    title: {
      sr: "CRM i buying signals: kako da znate ko se zagreva",
      en: "CRM and Buying Signals: How to Know Who Is Warming Up",
    },
    description: {
      sr: "CRM nije arhiva prošlosti — to je sistem koji pokazuje ko se zagreva i šta je sledeći korak.",
      en: "CRM isn’t an archive of the past — it’s the system that shows who’s warming up and what’s next.",
    },
    read: "18-22 min",
  },
  {
    file: "10-ai-workflows.txt",
    out: "lesson-10-ai-workflows-for-sales-system.ts",
    exportName: "lesson10RichContent",
    slug: "ai-workflows-for-sales-system",
    order: 10,
    phaseId: "systems",
    title: {
      sr: "AI workflow-i: kako povezati sales sistem bez ručnog haosa",
      en: "AI Workflows: Connecting the Sales System Without Manual Chaos",
    },
    description: {
      sr: "AI nije zamena za sistem — povezuje liste, signale, follow-up i reporting bez ručnog haosa.",
      en: "AI isn’t a system replacement — it connects lists, signals, follow-up, and reporting without manual chaos.",
    },
    read: "16-20 min",
  },
  {
    file: "11-linkedin-ads-retargeting.txt",
    out: "lesson-11-linkedin-ads-and-retargeting.ts",
    exportName: "lesson11RichContent",
    slug: "linkedin-ads-and-retargeting",
    order: 11,
    phaseId: "scale",
    title: {
      sr: "LinkedIn Ads i retargeting: kako skalirati ono što već radi",
      en: "LinkedIn Ads and Retargeting: How to Scale What Already Works",
    },
    description: {
      sr: "Paid ne treba da traži poruku — treba da skalira ono što organski već dokazuje poverenje.",
      en: "Paid shouldn’t invent the message — it should scale what organic already proves builds trust.",
    },
    read: "16-20 min",
  },
  {
    file: "12-flg-system-in-practice.txt",
    out: "lesson-12-flg-system-in-practice.ts",
    exportName: "lesson12RichContent",
    slug: "flg-system-in-practice",
    order: 12,
    phaseId: "system",
    title: {
      sr: "Kako izgleda ceo Founder Led Growth sistem u praksi",
      en: "What the Full Founder Led Growth System Looks Like in Practice",
    },
    description: {
      sr: "Kako ICP, content, outreach, follow-up, webinari, CRM, AI i ads rade kao jedan sistem.",
      en: "How ICP, content, outreach, follow-up, webinars, CRM, AI, and ads work as one system.",
    },
    read: "18-22 min",
  },
];

function esc(s) {
  return s
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
}

function parseSource(raw) {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  // Drop first header line(s): LEKCIJA N or LEKCIJA N — title / title on next line
  let i = 0;
  while (i < lines.length && !lines[i].trim()) i++;
  if (i < lines.length && /^LEKCIJA\s+\d+/i.test(lines[i].trim())) i++;
  // If next line looks like a title-only leftover (short, no period), keep it as section/h1 via paragraphs

  const bodyLines = lines.slice(i);
  const sections = [];
  let current = { id: "intro", title: null, paras: [] };
  let buf = [];

  const flushBuf = () => {
    const text = buf.join(" ").replace(/\s+/g, " ").trim();
    buf = [];
    if (text) current.paras.push(text);
  };

  const headingRe = /^(?:\d+\.\s+.+|[A-ZČĆŽŠĐ].{3,80}:)$/;
  // Numbered section: "1. Firmografski fit"
  const numberedRe = /^\d+\.\s+.+/;

  for (const line of bodyLines) {
    const t = line.trim();
    if (!t) {
      flushBuf();
      continue;
    }
    // New section on numbered headings when buffer empty and previous paras exist
    if (numberedRe.test(t) && buf.length === 0) {
      flushBuf();
      if (current.paras.length || current.title) {
        sections.push(current);
      }
      const title = t.replace(/^\d+\.\s+/, "").trim();
      const id = slugify(title);
      current = { id, title, paras: [] };
      continue;
    }
    // Soft line breaks in source: join short consecutive lines into paragraphs
    buf.push(t);
    // If line ends with sentence punctuation, flush as paragraph
    if (/[.!?…”")\]]$/.test(t) || t.length > 160) {
      flushBuf();
    }
  }
  flushBuf();
  if (current.paras.length || current.title) sections.push(current);

  // Merge tiny intro if first section has no title
  if (sections.length === 0) {
    sections.push({ id: "body", title: null, paras: ["(prazno)"] });
  }
  return sections;
}

function slugify(s) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48) || "section";
}

function L(sr, en = sr) {
  return `{ sr: \`${esc(sr)}\`, en: \`${esc(en)}\` }`;
}

function P(srList, enList = srList) {
  const sr = srList.map((p) => `\`${esc(p)}\``).join(",\n        ");
  const en = enList.map((p) => `\`${esc(p)}\``).join(",\n        ");
  return `{
      sr: [
        ${sr},
      ],
      en: [
        ${en},
      ],
    }`;
}

function buildLesson(meta, sections, prev, next, all) {
  const heroParas = (sections[0]?.paras ?? []).slice(0, 3);
  const restSections = sections[0]?.title ? sections : sections.slice(1);
  const introParas = sections[0]?.title ? [] : sections[0]?.paras.slice(3) ?? [];

  const toc = [];
  const blockParts = [];

  if (introParas.length) {
    toc.push(`{ id: "nastavak", title: ${L("Nastavak", "Continued")} }`);
    blockParts.push(`{
      type: "section",
      id: "nastavak",
      title: ${L("Nastavak", "Continued")},
      blocks: [
        { type: "paragraphs", paragraphs: ${P(introParas)} },
      ],
    }`);
  }

  for (const sec of restSections.length ? restSections : sections.slice(1)) {
    if (!sec.paras.length) continue;
    const id = sec.id === "intro" ? "sadrzaj" : sec.id;
    const titleSr = sec.title ?? "Sadržaj";
    const titleEn = sec.title ?? "Content";
    toc.push(`{ id: "${id}", title: ${L(titleSr, titleEn)} }`);
    blockParts.push(`{
      type: "section",
      id: "${id}",
      title: ${L(titleSr, titleEn)},
      blocks: [
        { type: "paragraphs", paragraphs: ${P(sec.paras)} },
      ],
    }`);
  }

  // If only one untitled section with many paras, put all after hero into one section
  if (blockParts.length === 0 && sections[0]) {
    const remaining = sections[0].paras.slice(3);
    if (remaining.length) {
      toc.push(`{ id: "sadrzaj", title: ${L("Sadržaj", "Content")} }`);
      blockParts.push(`{
      type: "section",
      id: "sadrzaj",
      title: ${L("Sadržaj", "Content")},
      blocks: [
        { type: "paragraphs", paragraphs: ${P(remaining)} },
      ],
    }`);
    }
  }

  if (toc.length === 0) {
    toc.push(`{ id: "sadrzaj", title: ${L("Sadržaj", "Content")} }`);
    blockParts.push(`{
      type: "section",
      id: "sadrzaj",
      title: ${L("Sadržaj", "Content")},
      blocks: [
        { type: "callout", variant: "tip", text: ${L(
          "Draft sadržaj — dizajn sledi.",
          "Draft content — design coming next.",
        )} },
      ],
    }`);
  }

  const related = all
    .filter((l) => l.slug !== meta.slug)
    .slice(0, 3)
    .map(
      (l) =>
        `{ slug: "${l.slug}", title: ${L(l.title.sr, l.title.en)} }`,
    )
    .join(",\n      ");

  return `import type { RichLessonContent } from "@/types/rich-lesson";

/** Draft from FLG Lead Magnet.docx — design pass pending. EN body mirrors SR for now. */
export const ${meta.exportName}: RichLessonContent = {
  meta: {
    stage: ${L(
      meta.phaseId === "foundation"
        ? "Temelj"
        : meta.phaseId === "strategy"
          ? "Strategija"
          : meta.phaseId === "content"
            ? "Content"
            : meta.phaseId === "outreach"
              ? "Outreach"
              : meta.phaseId === "nurture"
                ? "Nurture"
                : meta.phaseId === "systems"
                  ? "Sistemi"
                  : meta.phaseId === "scale"
                    ? "Skala"
                    : "Sistem",
      meta.phaseId,
    )},
    readingTime: ${L(meta.read, meta.read)},
    difficulty: ${L("Početnik–srednji", "Beginner–intermediate")},
    outcome: ${L(meta.description.sr, meta.description.en)},
    recommendedTools: ${L("LinkedIn, CRM, AI workflow alati", "LinkedIn, CRM, AI workflow tools")},
  },
  hero: {
    eyebrow: ${L(`Lekcija ${meta.order}`, `Lesson ${meta.order}`)},
    title: ${L(meta.title.sr, meta.title.en)},
    paragraphs: ${P(heroParas.length ? heroParas : [meta.description.sr], heroParas.length ? heroParas : [meta.description.en])},
  },
  toc: [
    ${toc.join(",\n    ")}
  ],
  blocks: [
    ${blockParts.join(",\n    ")}
  ],
  faq: [],
  sources: [],
  relatedLessons: {
    previous: ${
      prev
        ? `{ slug: "${prev.slug}", title: ${L(prev.title.sr, prev.title.en)} }`
        : "undefined"
    },
    next: ${
      next
        ? `{ slug: "${next.slug}", title: ${L(next.title.sr, next.title.en)} }`
        : "undefined"
    },
    related: [
      ${related}
    ],
  },
  cta: {
    title: ${L(
      "Želiš da ovo implementiramo za tvoju firmu?",
      "Want us to implement this for your company?",
    )},
    body: ${L(
      "Možemo da pretvorimo ovaj playbook u konkretan Founder Led Growth sistem.",
      "We can turn this playbook into a concrete Founder Led Growth system.",
    )},
    primaryLabel: ${L("Zakaži konsultaciju", "Book a consultation")},
    secondaryLabel: ${L("Nazad na playbook", "Back to playbook")},
  },
  seoKeywords: ${P(
    [
      "founder led growth",
      meta.title.sr.toLowerCase(),
      "B2B sales sistem",
      "LinkedIn outbound",
    ],
    [
      "founder led growth",
      meta.title.en.toLowerCase(),
      "B2B sales system",
      "LinkedIn outbound",
    ],
  )},
};
`;
}

// Clean old numbered lesson files (keep referrals*)
for (const f of fs.readdirSync(outDir)) {
  if (/^lesson-\d+-/.test(f) || /^lesson-\d{1,2}-/.test(f)) {
    // keep nothing from old set; we'll rewrite
    if (
      f.startsWith("lesson-1-") ||
      f.startsWith("lesson-2-") ||
      f.startsWith("lesson-3-") ||
      f.startsWith("lesson-4-") ||
      f.startsWith("lesson-5-") ||
      f.startsWith("lesson-6-") ||
      f.startsWith("lesson-7-") ||
      f.startsWith("lesson-8-") ||
      f.startsWith("lesson-9-") ||
      f.startsWith("lesson-10-") ||
      f.startsWith("lesson-11-") ||
      f.startsWith("lesson-12-") ||
      f.startsWith("lesson-01-") ||
      f.startsWith("lesson-02-") ||
      f.startsWith("lesson-03-") ||
      f.startsWith("lesson-04-") ||
      f.startsWith("lesson-05-") ||
      f.startsWith("lesson-06-") ||
      f.startsWith("lesson-07-") ||
      f.startsWith("lesson-08-") ||
      f.startsWith("lesson-09-")
    ) {
      fs.unlinkSync(path.join(outDir, f));
      console.log("deleted", f);
    }
  }
}

const built = [];
for (let i = 0; i < LESSONS.length; i++) {
  const meta = LESSONS[i];
  const raw = fs.readFileSync(path.join(sourceDir, meta.file), "utf8");
  const sections = parseSource(raw);
  const prev = i > 0 ? LESSONS[i - 1] : null;
  const next = i < LESSONS.length - 1 ? LESSONS[i + 1] : null;
  const code = buildLesson(meta, sections, prev, next, LESSONS);
  fs.writeFileSync(path.join(outDir, meta.out), code);
  built.push(meta);
  console.log("wrote", meta.out, "sections:", sections.length, "paras:", sections.reduce((n, s) => n + s.paras.length, 0));
}

// Write curriculum manifest
fs.writeFileSync(
  path.join(root, "content/flg-playbook/curriculum.json"),
  JSON.stringify(
    {
      source: "FLG Lead Magnet.docx",
      introFile: "00-uvod.txt",
      lessons: LESSONS.map(({ slug, order, phaseId, title, description, file, out, exportName }) => ({
        slug,
        order,
        phaseId,
        title,
        description,
        source: file,
        module: out,
        exportName,
      })),
    },
    null,
    2,
  ),
);

// Write registry file
const registry = `import { lesson01RichContent } from "@/data/lessons/lesson-01-why-referrals-are-not-a-sales-system";
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

const defs = ${JSON.stringify(
  LESSONS.map(({ slug, order, phaseId, title, description, read }) => ({
    slug,
    order,
    phaseId,
    title,
    description,
    estimatedReadTime: parseInt(read, 10) || 15,
  })),
  null,
  2,
)} as const;

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
      sr: \`\${def.title.sr} | Lead Agents\`,
      en: \`\${def.title.en} | Lead Agents\`,
    },
    description: def.description,
  },
  sections: [],
  richContent: richByOrder[index],
}));
`;

fs.writeFileSync(path.join(root, "src/data/founderLedGrowthLessons.ts"), registry);
console.log("wrote founderLedGrowthLessons.ts");
