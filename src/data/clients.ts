export type ClientLogo = {
  name: string;
  /** Preporuka: 256×256 PNG, transparentna pozadina — public/clients/square/{slug}.png */
  logo?: string;
  logoAlt?: string;
  /** Opciono: eksterni link */
  href?: string;
  /** Slug case study-ja na sajtu (SR/EN ruta se gradi automatski) */
  caseStudySlug?: string;
};

/** Ukupan broj klijenata za prikaz u sekciji (npr. „30+“) */
export const TOTAL_CLIENT_COUNT = 30;

/**
 * Brendovi prikazani u gridu. Dodaj nove stavke ovde kada pošalješ square logoe.
 * Fajlovi: public/clients/square/{slug}.png (256×256) ili postojeći /clients/{slug}.png
 */
export const clientLogos: ClientLogo[] = [
  {
    name: "iDecide",
    logo: "/clients/idecide.png",
    logoAlt: "iDecide",
    caseStudySlug: "i-decide",
  },
  { name: "Dawiso", logo: "/clients/dawiso.png", logoAlt: "Dawiso" },
  { name: "Niwart", logo: "/clients/niwart.png", logoAlt: "Niwart" },
  { name: "AppAgent", logo: "/clients/appagent.png", logoAlt: "AppAgent" },
  { name: "Quaaant", logo: "/clients/quaaant.png", logoAlt: "Quaaant" },
  { name: "Uniio", logo: "/clients/uniio.png", logoAlt: "Uniio" },
  { name: "Lisa Cox", logo: "/clients/lisa-cox.png", logoAlt: "Lisa Cox" },
  { name: "Shane Morand", logo: "/clients/shane-morand.png", logoAlt: "Shane Morand" },
  { name: "Nicolas Martinez", logo: "/clients/nicolas-martinez.png", logoAlt: "Nicolas Martinez" },
  { name: "Mladen Vojković", logo: "/clients/mladen-vojkovic.png", logoAlt: "Mladen Vojković" },
];

/** @deprecated Koristi clientLogos iz @/data/clients */
export const homeClients = clientLogos;
