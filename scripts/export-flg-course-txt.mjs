import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { founderLedGrowthLessons } from "../src/data/founderLedGrowthLessons.ts";

const locale = "sr";
const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, "../exports/founder-led-growth-kurs-sr.txt");

const lines = [];

function push(...parts) {
  for (const part of parts) {
    if (part === undefined || part === null) continue;
    const text = String(part).trim();
    if (text) lines.push(text);
  }
}

function blank() {
  lines.push("");
}

function rule(char = "=", count = 80) {
  lines.push(char.repeat(count));
}

function lt(text) {
  return text?.[locale] ?? "";
}

function ll(list) {
  return list?.[locale] ?? [];
}

function renderBlock(block, depth = 0) {
  const heading = (text, level = 2) => {
    blank();
    push(`${"#".repeat(level)} ${text}`);
    blank();
  };

  switch (block.type) {
    case "section":
      if (block.id === "visuals") return;
      heading(lt(block.title), depth === 0 ? 2 : 3);
      for (const child of block.blocks) renderBlock(child, depth + 1);
      return;

    case "paragraphs":
      for (const paragraph of ll(block.paragraphs)) {
        push(paragraph);
        blank();
      }
      return;

    case "bullets":
      for (const item of ll(block.items)) push(`• ${item}`);
      blank();
      return;

    case "callout":
      push(`[NAPOMENA] ${lt(block.text)}`);
      blank();
      return;

    case "table": {
      if (block.caption) {
        push(lt(block.caption));
        blank();
      }
      const headers = block.headers.map(lt);
      push(headers.join(" | "));
      push(headers.map(() => "---").join(" | "));
      for (const row of block.rows) {
        push(row.cells.map(lt).join(" | "));
      }
      blank();
      return;
    }

    case "framework-intro":
      heading(lt(block.title), 3);
      push(lt(block.description));
      blank();
      return;

    case "framework-steps":
      for (const step of block.steps) {
        heading(`Korak ${step.step}: ${lt(step.title)}`, 4);
        push(`Šta uraditi: ${lt(step.whatToDo)}`);
        push(`Zašto je važno: ${lt(step.whyItMatters)}`);
        push(`Primer: ${lt(step.example)}`);
        push(`Česta greška: ${lt(step.commonMistake)}`);
        push(`Probaj ovo: ${lt(step.tryThis)}`);
        push(`Istaknuto: ${lt(step.highlight)}`);
        blank();
      }
      return;

    case "proof-grid":
      for (const card of block.cards) {
        heading(lt(card.title), 4);
        push(lt(card.body));
        push(`Izvor: ${lt(card.sourceLabel)} — ${card.sourceUrl}`);
        blank();
      }
      return;

    case "tool-grid":
      for (const tool of block.tools) {
        heading(tool.name, 4);
        push(`Za šta: ${lt(tool.usedFor)}`);
        push(`Zašto odgovara: ${lt(tool.whyItFits)}`);
        push(`Alternativa: ${lt(tool.alternative)}`);
        blank();
      }
      return;

    case "video":
      heading(lt(block.video.title), 4);
      push(`Kanal: ${lt(block.video.channel)}`);
      push(lt(block.video.description));
      push(`Napomena: ${lt(block.video.placementNote)}`);
      push(`Link: ${block.video.watchUrl}`);
      blank();
      return;

    case "checklist":
      heading(lt(block.title), 3);
      for (const item of ll(block.items)) push(`☐ ${item}`);
      blank();
      return;

    case "template":
      heading(lt(block.title), 3);
      push(lt(block.content));
      blank();
      return;

    case "workflow":
      heading(lt(block.title), 3);
      ll(block.steps).forEach((step, index) => push(`${index + 1}. ${step}`));
      if (block.highlight) {
        blank();
        push(`[ISTAKNUTO] ${lt(block.highlight)}`);
      }
      blank();
      return;

    case "story":
      heading(lt(block.title), 3);
      for (const paragraph of ll(block.paragraphs)) {
        push(paragraph);
        blank();
      }
      return;

    case "pipeline-flow":
      if (block.title) heading(lt(block.title), 3);
      if (block.subtitle) push(lt(block.subtitle));
      push(block.stages.map(lt).join(" → "));
      blank();
      return;

    case "stat-row":
      for (const item of block.items) {
        push(`${lt(item.value)} — ${lt(item.label)}`);
        if (item.description) push(lt(item.description));
      }
      blank();
      return;

    case "comparison-cards":
      for (const card of block.cards) {
        heading(lt(card.title), 4);
        if (card.subtitle) push(lt(card.subtitle));
        for (const item of ll(card.items)) push(`• ${item}`);
        blank();
      }
      return;

    case "illustration":
      push(`[SLIKA] ${lt(block.alt)}`);
      if (block.caption) push(lt(block.caption));
      if (block.credit) push(lt(block.credit));
      blank();
      return;

    case "zone-cards":
      if (block.title) heading(lt(block.title), 3);
      if (block.subtitle) push(lt(block.subtitle));
      for (const card of block.cards) {
        heading(`${lt(card.zone)}${card.eyebrow ? ` (${lt(card.eyebrow)})` : ""}`, 4);
        push(`Uloga: ${lt(card.job)}`);
        push(`Uradi: ${lt(card.doThis)}`);
        if (card.avoid) push(`Izbegavaj: ${lt(card.avoid)}`);
        blank();
      }
      return;

    case "visual-suggestions":
      return;

    default:
      return;
  }
}

function renderLesson(lesson) {
  const content = lesson.richContent;
  if (!content) return;

  rule("=");
  push(`LEKCIJA ${String(lesson.order).padStart(2, "0")}`);
  push(lt(lesson.title));
  rule("=");

  blank();
  push(`OPIS LEKCIJE: ${lt(lesson.description)}`);
  push(`FAZA: ${lt(content.meta.stage)}`);
  push(`VREME ČITANJA: ${lt(content.meta.readingTime)}`);
  push(`NIVO: ${lt(content.meta.difficulty)}`);
  push(`ISHOD: ${lt(content.meta.outcome)}`);
  push(`PREPORUČENI ALATI: ${lt(content.meta.recommendedTools)}`);
  blank();

  heading("UVOD", 2);
  push(lt(content.hero.eyebrow));
  push(lt(content.hero.title));
  blank();
  for (const paragraph of ll(content.hero.paragraphs)) {
    push(paragraph);
    blank();
  }
  if (content.hero.callout) {
    push(`[NAPOMENA] ${lt(content.hero.callout)}`);
    blank();
  }

  if (content.toc.length) {
    heading("SADRŽAJ LEKCIJE", 2);
    for (const item of content.toc) push(`- ${lt(item.title)}`);
    blank();
  }

  for (const block of content.blocks) renderBlock(block);

  if (content.faq?.length) {
    heading("ČESTA PITANJA", 2);
    for (const item of content.faq) {
      push(`P: ${lt(item.question)}`);
      push(`O: ${lt(item.answer)}`);
      blank();
    }
  }

  if (content.sources?.length) {
    heading("IZVORI", 2);
    for (const source of content.sources) {
      push(`- ${lt(source.title)} — ${source.url}`);
    }
    blank();
  }

  if (content.cta) {
    heading("ZAKLJUČAK / CTA", 2);
    push(lt(content.cta.title));
    push(lt(content.cta.body));
    blank();
  }

  blank();
  rule("-");
  blank();
}

function heading(text, level = 2) {
  blank();
  push(`${"#".repeat(level)} ${text}`);
  blank();
}

rule("=");
push("FOUNDER-LED GROWTH — KOMPLETAN KURS (SRPSKI)");
push("Lead Agents Growth Playbook — 12 lekcija");
push(`Generisano: ${new Date().toISOString().slice(0, 10)}`);
rule("=");
blank();

for (const lesson of founderLedGrowthLessons.sort((a, b) => a.order - b.order)) {
  renderLesson(lesson);
}

writeFileSync(outputPath, `${lines.join("\n")}\n`, "utf8");
console.log(`Exported ${founderLedGrowthLessons.length} lessons to ${outputPath}`);
