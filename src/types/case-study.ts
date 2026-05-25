import type { LocalizedText } from "@/types/service";

export type CaseStudyImage = {
  src: string;
  alt: LocalizedText;
  /** cover for photos, contain for product/UI shots */
  fit?: "cover" | "contain";
};

export type CaseStudySection = {
  id: string;
  title: LocalizedText;
  paragraphs: LocalizedText[];
  image?: CaseStudyImage;
  list?: {
    title?: LocalizedText;
    items: LocalizedText[];
  };
  link?: {
    label: LocalizedText;
    href: { sr: string; en: string };
  };
};

export type CaseStudyDetail = {
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  meta: {
    title: LocalizedText;
    description: LocalizedText;
  };
  hero: {
    title: LocalizedText;
  };
  sections: CaseStudySection[];
  outlook: {
    title: LocalizedText;
    paragraphs: LocalizedText[];
  };
  appFeatures?: {
    title: LocalizedText;
    items: LocalizedText[];
    image?: CaseStudyImage;
  };
  serviceCta: {
    label: LocalizedText;
    serviceSlug: string;
  };
};

export type CaseStudyListing = {
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  image?: string;
  imageAlt?: LocalizedText;
  hasDetailPage: boolean;
};
