export type LocalizedText = {
  sr: string;
  en: string;
};

export type ServiceStat = {
  value: string;
  label: LocalizedText;
};

export type ServiceStep = {
  step: string;
  title: LocalizedText;
  description: LocalizedText;
};

export type ServiceResult = {
  id: string;
  name: string;
  role: LocalizedText;
  quote: LocalizedText;
  stats: ServiceStat[];
  image?: string;
};

export type ServiceBenefit = {
  title: LocalizedText;
  description: LocalizedText;
};

export type ServiceTestimonial = {
  id: string;
  name: string;
  role: LocalizedText;
  quote: LocalizedText;
  image?: string;
};

export type ServiceShowreelVideo = {
  id: string;
  preview: string;
  youtubeId: string;
};

export type ServicePage = {
  slug: string;
  meta: {
    title: LocalizedText;
    description: LocalizedText;
  };
  hero: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    audience?: LocalizedText;
    primaryCta: LocalizedText;
    secondaryCta: LocalizedText;
  };
  /** Metodologija / koraci (npr. FLG - 3 koraka) */
  steps?: {
    title: LocalizedText;
    items: ServiceStep[];
  };
  /** Široka slika ispod hero sekcije (npr. plaćene reklame) */
  bannerImage?: string;
  /** Video showreel ispod hero sekcije (npr. lični branding) */
  showreel?: {
    videos: ServiceShowreelVideo[];
  };
  /** Šta klijent dobija, lista benefita */
  deliverables?: {
    title: LocalizedText;
    items: ServiceBenefit[];
  };
  results?: {
    title: LocalizedText;
    items: ServiceResult[];
    /** Podrazumevano: stack (sve kartice jedna ispod druge) */
    layout?: "slider" | "stack";
  };
  /** Istaknuti case study (npr. iDecide knjiga → kurs) */
  caseStudyHighlight?: {
    slug: string;
    title: LocalizedText;
    description: LocalizedText;
    cta: LocalizedText;
    image: string;
    imageAlt: LocalizedText;
  };
  /** Za koga je usluga */
  audienceSection?: {
    title: LocalizedText;
    image?: string;
    /** Istaknute grupe (npr. Preduzetnike, Kreatori…) */
    groups?: {
      title: LocalizedText;
      description?: LocalizedText;
    }[];
    /** Duži uvodni/opisni pasus */
    description?: LocalizedText;
    /** Jednostavna lista (fallback za ostale usluge) */
    items?: LocalizedText[];
  };
  /** Istaknuti banner (npr. alati) */
  highlight?: LocalizedText;
  /** Opcioni link ispod highlight bannera */
  highlightLink?: {
    label: LocalizedText;
    href: string;
  };
  /** Proces korak po korak */
  process?: {
    title: LocalizedText;
    items: ServiceStep[];
  };
  testimonials?: {
    title: LocalizedText;
    items: ServiceTestimonial[];
  };
  consultation: {
    title: LocalizedText;
    subtitle?: LocalizedText;
    items?: ServiceBenefit[];
    ctaTitle: LocalizedText;
    ctaButton: LocalizedText;
    ctaSubtitle?: LocalizedText;
  };
};
