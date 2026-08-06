export type ClientService =
  | "LinkedIn outreach"
  | "LinkedIn outreach systems"
  | "Meta ads"
  | "Meta ads & LinkedIn outreach"
  | "Multichannel outreach"
  | "Multichannel Outreach"
  | "Founder Led Growth"
  | "GTM Strategy & Systems"
  | "Sales audit & LinkedIn outreach systems";

export type ClientLogo = {
  name: string;
  /** Preporuka: 320×80 PNG, transparentna pozadina, light-gray mark */
  logo?: string;
  logoAlt?: string;
  /** Opciono: eksterni link */
  href?: string;
  /** Slug case study-ja na sajtu (SR/EN ruta se gradi automatski) */
  caseStudySlug?: string;
  /**
   * Internal only for now — what we delivered.
   * Do not render in UI until product asks for it.
   */
  service?: ClientService | string;
};

/** Ukupan broj klijenata za prikaz u sekciji (npr. „40+“) */
export const TOTAL_CLIENT_COUNT = 40;

/**
 * Brendovi prikazani u gridu / marqueeu.
 * Fajlovi: public/clients/{slug}.png (320×80, light gray on transparent)
 */
export const clientLogos: ClientLogo[] = [
  {
    name: "iDecide",
    logo: "/clients/idecide.png",
    logoAlt: "iDecide",
    caseStudySlug: "i-decide",
  },
  {
    name: "Two Trails Partners",
    logo: "/clients/two-trails-partners.png",
    logoAlt: "Two Trails Partners",
    href: "https://www.twotrailspartners.com/",
    service: "LinkedIn outreach",
  },
  {
    name: "Top Dollar Exits",
    logo: "/clients/top-dollar-exits.png",
    logoAlt: "Top Dollar Exits",
    href: "https://topdollarexits.com/",
    service: "Meta ads",
  },
  {
    name: "Deal Prospectors",
    logo: "/clients/deal-prospectors.png",
    logoAlt: "Deal Prospectors",
    href: "https://dealprospectors.com/",
    service: "Meta ads & LinkedIn outreach",
  },
  {
    name: "Portsfield Health",
    logo: "/clients/portsfield-health.png",
    logoAlt: "Portsfield Health",
    href: "https://portsfield.com/",
    service: "Multichannel outreach",
  },
  {
    name: "Edgewood Legacy",
    logo: "/clients/edgewood-legacy.png",
    logoAlt: "Edgewood Legacy",
    href: "https://www.edgewoodlegacy.com/",
    service: "LinkedIn outreach",
  },
  {
    name: "Tarifexperts",
    logo: "/clients/tarifexperts.png",
    logoAlt: "Tarifexperts",
    href: "https://www.tarifexperts.de/",
    service: "Meta ads",
  },
  {
    name: "Cemety",
    logo: "/clients/cemety.png",
    logoAlt: "Cemety",
    href: "https://cemety.lt/",
    service: "Founder Led Growth",
  },
  {
    name: "Dawiso",
    logo: "/clients/dawiso.png",
    logoAlt: "Dawiso",
    href: "https://www.dawiso.com/",
    service: "GTM Strategy & Systems",
  },
  {
    name: "AppAgent",
    logo: "/clients/appagent.png",
    logoAlt: "AppAgent",
    href: "https://appagent.com/",
    service: "Multichannel Outreach",
  },
  {
    name: "Uniio",
    logo: "/clients/uniio.png",
    logoAlt: "Uniio",
    href: "https://uniio.co/",
    service: "LinkedIn outreach systems",
  },
  {
    name: "Bakk",
    logo: "/clients/bakk.png",
    logoAlt: "Bakk",
    href: "https://bakk.com/en/",
    service: "LinkedIn outreach systems",
  },
  {
    name: "Niwart",
    logo: "/clients/niwart.png",
    logoAlt: "Niwart",
    href: "https://niwart.io/",
    service: "LinkedIn outreach systems",
  },
  {
    name: "Striggers",
    logo: "/clients/striggers.png",
    logoAlt: "Striggers",
    href: "https://www.striggers.com/",
    service: "Sales audit & LinkedIn outreach systems",
  },
  {
    name: "Cultivate Empathy",
    logo: "/clients/cultivate-empathy.png",
    logoAlt: "Cultivate Empathy",
    href: "https://cultivate-empathy.com/",
    service: "LinkedIn outreach systems",
  },
  {
    name: "OnGo Energy",
    logo: "/clients/ongo-energy.png",
    logoAlt: "OnGo Energy",
    href: "https://ongoenergy.com/",
    service: "Founder Led Growth",
  },
  {
    name: "CM4C",
    logo: "/clients/cm4c.png",
    logoAlt: "CM4C",
    href: "https://www.cm4c.co/",
    service: "Founder Led Growth",
  },
  {
    name: "CaseScribe",
    logo: "/clients/casescribe.png",
    logoAlt: "CaseScribe",
    href: "https://casescribe.ai/",
    service: "Founder Led Growth",
  },
  {
    name: "Rejigg",
    logo: "/clients/rejigg.png",
    logoAlt: "Rejigg",
    href: "https://rejigg.com/",
    service: "Meta ads",
  },
  { name: "Quaaant", logo: "/clients/quaaant.png", logoAlt: "Quaaant" },
  { name: "Lisa Cox", logo: "/clients/lisa-cox.png", logoAlt: "Lisa Cox" },
  { name: "Shane Morand", logo: "/clients/shane-morand.png", logoAlt: "Shane Morand" },
  {
    name: "Nicolas Martinez",
    logo: "/clients/nicolas-martinez.png",
    logoAlt: "Nicolas Martinez",
  },
  {
    name: "Mladen Vojković",
    logo: "/clients/mladen-vojkovic.png",
    logoAlt: "Mladen Vojković",
  },
];

/** Logos with files ready for marquee / grid display */
export const visibleClientLogos = clientLogos.filter((client) => Boolean(client.logo));

/** @deprecated Koristi clientLogos iz @/data/clients */
export const homeClients = clientLogos;
