import type { LessonSection, LocalizedList, LocalizedText } from "@/types/playbook";

type SectionInput = {
  problem: LocalizedText;
  problemBody: LocalizedList;
  why: LocalizedText;
  whyBody: LocalizedList;
  framework: LocalizedText;
  frameworkBody: LocalizedList;
  frameworkBullets?: LocalizedList;
  steps: LocalizedText;
  stepsBody: LocalizedList;
  stepsBullets: LocalizedList;
  example: LocalizedText;
  exampleBody: LocalizedList;
  tools: LocalizedText;
  toolsBody: LocalizedList;
  checklist: LocalizedText;
  checklistItems: LocalizedList;
  next: LocalizedText;
  nextBody: LocalizedList;
};

export function buildStandardLessonSections(input: SectionInput): LessonSection[] {
  return [
    {
      id: "problem",
      title: input.problem,
      paragraphs: input.problemBody,
    },
    {
      id: "why-it-matters",
      title: input.why,
      paragraphs: input.whyBody,
    },
    {
      id: "framework",
      title: input.framework,
      paragraphs: input.frameworkBody,
      bullets: input.frameworkBullets,
    },
    {
      id: "step-by-step",
      title: input.steps,
      paragraphs: input.stepsBody,
      bullets: input.stepsBullets,
      gated: true,
    },
    {
      id: "example",
      title: input.example,
      paragraphs: input.exampleBody,
      gated: true,
    },
    {
      id: "recommended-tools",
      title: input.tools,
      paragraphs: input.toolsBody,
      gated: true,
    },
    {
      id: "checklist",
      title: input.checklist,
      paragraphs: { sr: [], en: [] },
      bullets: input.checklistItems,
      gated: true,
    },
    {
      id: "next-step",
      title: input.next,
      paragraphs: input.nextBody,
      gated: true,
    },
  ];
}
