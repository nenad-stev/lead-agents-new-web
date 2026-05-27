import { iDecideCaseStudy } from "./i-decide";
import { cm4cCaseStudy } from "./cm4c";

import type { CaseStudyDetail, CaseStudyListing } from "@/types/case-study";

const caseStudyDetails: CaseStudyDetail[] = [cm4cCaseStudy, iDecideCaseStudy];

export const caseStudies: CaseStudyListing[] = [
  {
    slug: cm4cCaseStudy.slug,
    title: cm4cCaseStudy.title,
    excerpt: cm4cCaseStudy.excerpt,
    image: cm4cCaseStudy.image,
    imageAlt: cm4cCaseStudy.imageAlt,
    hasDetailPage: true,
  },
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
