import { iDecideCaseStudy } from "./i-decide";

import type { CaseStudyDetail, CaseStudyListing } from "@/types/case-study";

const caseStudyDetails: CaseStudyDetail[] = [iDecideCaseStudy];

export const caseStudies: CaseStudyListing[] = [
  {
    slug: iDecideCaseStudy.slug,
    title: iDecideCaseStudy.title,
    excerpt: iDecideCaseStudy.excerpt,
    image: iDecideCaseStudy.image,
    imageAlt: iDecideCaseStudy.imageAlt,
    hasDetailPage: true,
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudyListing | undefined {
  return caseStudies.find((item) => item.slug === slug);
}

export function getCaseStudyDetailBySlug(slug: string): CaseStudyDetail | undefined {
  return caseStudyDetails.find((item) => item.slug === slug);
}

export function hasCaseStudyDetailPage(slug: string): boolean {
  return caseStudyDetails.some((item) => item.slug === slug);
}

/** @deprecated Use caseStudies from @/data/case-studies */
export const placeholderCaseStudies = caseStudies;
