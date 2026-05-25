import { getSalesToolBySlug, salesTools } from "@/data/sales-tools/index";
import type { RichLessonBlock, RichLessonContent } from "@/types/rich-lesson";
import type { PlaybookCluster, PlaybookLesson, PlaybookRecommendedTool } from "@/types/playbook";

/** Match tool names in lesson copy to on-site sales tool slugs. */
export function resolveSalesToolSlug(
  name: string,
  explicitSlug?: string,
): string | undefined {
  if (explicitSlug && getSalesToolBySlug(explicitSlug)) {
    return explicitSlug;
  }

  const normalized = name.toLowerCase();

  for (const tool of salesTools) {
    const toolName = tool.name.toLowerCase();
    if (
      normalized === toolName ||
      normalized.includes(toolName) ||
      normalized.includes(tool.slug)
    ) {
      return tool.slug;
    }
  }

  if (normalized.includes("make.com") || normalized.includes("zapier")) {
    return getSalesToolBySlug("n8n") ? "n8n" : undefined;
  }
  if (normalized.includes("pipedrive") && getSalesToolBySlug("hubspot")) {
    return "hubspot";
  }
  if (normalized.includes("authoredup") && getSalesToolBySlug("taplio")) {
    return "taplio";
  }

  return undefined;
}

function walkBlocks(blocks: RichLessonBlock[], slugs: Set<string>) {
  for (const block of blocks) {
    if (block.type === "tool-grid") {
      for (const tool of block.tools) {
        const slug = resolveSalesToolSlug(tool.name, tool.slug);
        if (slug) slugs.add(slug);
      }
    }
    if (block.type === "section") {
      walkBlocks(block.blocks, slugs);
    }
  }
}

export function collectRichLessonToolSlugs(content: RichLessonContent): string[] {
  const slugs = new Set<string>();
  walkBlocks(content.blocks, slugs);
  return [...slugs];
}

export function getOrderedLessonToolSlugs(lesson: PlaybookLesson): string[] {
  const ordered: string[] = [];
  const add = (slug: string | undefined) => {
    if (slug && !ordered.includes(slug) && getSalesToolBySlug(slug)) {
      ordered.push(slug);
    }
  };

  for (const slug of lesson.recommendedToolSlugs) {
    add(slug);
  }

  if (lesson.richContent) {
    for (const slug of collectRichLessonToolSlugs(lesson.richContent)) {
      add(slug);
    }
  }

  return ordered;
}

export function buildLessonRecommendedTools(
  lesson: PlaybookLesson,
  cluster: PlaybookCluster,
): PlaybookRecommendedTool[] {
  const slugs = getOrderedLessonToolSlugs(lesson);
  const tools: PlaybookRecommendedTool[] = [];

  for (const slug of slugs) {
    const fromCluster = cluster.recommendedTools.find((tool) => tool.slug === slug);
    if (fromCluster) {
      tools.push(fromCluster);
      continue;
    }

    const salesTool = getSalesToolBySlug(slug);
    if (salesTool) {
      tools.push({
        slug: salesTool.slug,
        name: salesTool.name,
        category: salesTool.category,
        description: salesTool.tagline,
      });
    }
  }

  return tools;
}

export function filterLessonToc<T extends { id: string }>(toc: T[]): T[] {
  return toc.filter((item) => item.id !== "visuals");
}
