export const homeFlagshipService = {
  slug: "founder-led-growth",
  title: { sr: "Founder Led Growth", en: "Founder Led Growth" },
  headline: {
    sr: "Kompletno B2B rešenje za rast na LinkedIn-u",
    en: "A complete B2B growth system on LinkedIn",
  },
  description: {
    sr: "Jedan integrisani sistem koji spaja outbound, sadržaj koji gradi autoritet i LinkedIn Ads, umesto fragmentisanih agencija i alata. Mi vodimo celu strategiju, implementaciju i optimizaciju dok vi zatvarate sastanke.",
    en: "One integrated system combining outbound, authority-building content, and LinkedIn Ads, instead of fragmented agencies and tools. We run strategy, implementation, and optimization while you close deals.",
  },
  pillars: [
    {
      step: "01",
      title: { sr: "Outbound mašina", en: "Outbound engine" },
      description: {
        sr: "Personalizovane kampanje koje pune kalendar kvalifikovanim leadovima.",
        en: "Personalized campaigns that fill your calendar with qualified leads.",
      },
    },
    {
      step: "02",
      title: { sr: "LinkedIn autoritet", en: "LinkedIn authority" },
      description: {
        sr: "Sadržaj koji edukuje idealne kupce i gradi poverenje pre prodaje.",
        en: "Content that educates ideal buyers and builds trust before the sale.",
      },
    },
    {
      step: "03",
      title: { sr: "LinkedIn Ads (ABM)", en: "LinkedIn Ads (ABM)" },
      description: {
        sr: "Targetirane kampanje koje pretvaraju hladne account-e u zainteresovane kupce.",
        en: "Targeted campaigns that turn cold accounts into interested buyers.",
      },
    },
  ],
} as const;

export const homeSupportingServices = [
  {
    slug: "cold-sales-outreach",
    title: { sr: "Cold Sales Outreach", en: "Cold Sales Outreach" },
    description: {
      sr: "Gradimo sisteme koji pune vaš kalendar sastancima.",
      en: "We build systems that fill your calendar with meetings.",
    },
  },
  {
    slug: "kreiranje-digitalnih-kurseva",
    title: { sr: "Kreacija digitalnih kurseva", en: "Digital course creation" },
    description: {
      sr: "Vaše znanje pretvaramo u digitalni proizvod spreman za monetizaciju.",
      en: "We turn your expertise into a digital product ready to monetize.",
    },
  },
  {
    slug: "placene-reklame",
    title: { sr: "Plaćene reklame", en: "Paid advertising" },
    description: {
      sr: "Podizanje svesti i skaliranje profita kroz targetirane kampanje.",
      en: "Build awareness and scale profit through targeted campaigns.",
    },
  },
  {
    slug: "licni-branding",
    title: { sr: "Lični branding", en: "Personal branding" },
    description: {
      sr: "Sve počinje ovde. Postajete referentno ime u svojoj industriji.",
      en: "It all starts here. Become a trusted name in your industry.",
    },
  },
] as const;

/** All services for footer anchors and listings */
export const homeServices = [
  {
    slug: homeFlagshipService.slug,
    title: homeFlagshipService.title,
    description: homeFlagshipService.headline,
  },
  ...homeSupportingServices,
] as const;

export type { ClientLogo as HomeClient } from "./clients";
export { clientLogos as homeClients, TOTAL_CLIENT_COUNT } from "./clients";

export const homeTestimonials = [
  {
    id: "lisa-cox",
    name: "Lisa Cox",
    image: "/images/testimonials/lisa-cox.png",
    quote: {
      sr: "Nikada u životu nisam osećala toliku sigurnost da sam pronašla pravu kompaniju i prave ljude koji će me odvesti na sledeći nivo. Lead Agents tačno razumeju šta treba da implementiram da bih postigla uspeh.",
      en: "I have never felt so confident that I found the right company and the right people to take me to the next level. Lead Agents understand exactly what I need to implement to succeed.",
    },
  },
  {
    id: "nicolas-martinez",
    name: "Nicolás Martínez",
    image: "/images/testimonials/nicolas-martinez.png",
    quote: {
      sr: "Saradnja sa Lead Agents je apsolutno neverovatna. Kada sve automatizacije počnu da rade... WOW, nema vremena ni za kafu! Moj Google kalendar je sada pun sastanaka sa novim ljudima svake nedelje.",
      en: "Working with Lead Agents is absolutely incredible. When all the automations kick in... WOW, no time even for coffee! My Google calendar is now full of meetings with new people every week.",
    },
  },
  {
    id: "mladen-vojkovic",
    name: "Mladen Vojkovic",
    image: "/images/testimonials/mladen-vojkovic.png",
    quote: {
      sr: "U poslednjih 6 meseci saradnje, moram istaći da su u potpunosti ispunili moja očekivanja! Broj sastanaka se uvećao desetostruko, otvarajući fantastične prodajne prilike na svetskom tržištu.",
      en: "Over the last 6 months of collaboration, they fully met my expectations! The number of meetings increased tenfold, opening fantastic sales opportunities in global markets.",
    },
  },
] as const;

export type TeamMember = {
  name: string;
  role: { sr: string; en: string };
  image: string;
};

export const homeTeam = {
  leadership: [
    {
      name: "Nenad Stevanović",
      role: { sr: "Co-Founder", en: "Co-Founder" },
      image: "/images/team/nenad-stevanovic.png",
    },
    {
      name: "Tihomir Mijailović",
      role: { sr: "Co-Founder", en: "Co-Founder" },
      image: "/images/team/tihomir-mijailovic.png",
    },
  ] satisfies TeamMember[],
  members: [
    {
      name: "Stefan Rakić",
      role: { sr: "GTM Expert", en: "GTM Expert" },
      image: "/images/team/stefan-rakic.png",
    },
    {
      name: "Nikola Kecman",
      role: { sr: "GTM Engineer", en: "GTM Engineer" },
      image: "/images/team/nikola-kecman.png",
    },
    {
      name: "Milica Mihić",
      role: { sr: "Growth engineer", en: "Growth engineer" },
      image: "/images/team/milica-mihic.png",
    },
    {
      name: "Aida Piro",
      role: {
        sr: "Content manager & Video editor",
        en: "Content manager & Video editor",
      },
      image: "/images/team/aida-piro.png",
    },
    {
      name: "Katarina Mijailović",
      role: { sr: "Content manager", en: "Content manager" },
      image: "/images/team/katarina-mijailovic.png",
    },
    {
      name: "Luka Radovanović",
      role: {
        sr: "AI Agent & Workflows specialist",
        en: "AI Agent & Workflows specialist",
      },
      image: "/images/team/luka-radovanovic.png",
    },
  ] satisfies TeamMember[],
  expertise: [
    { sr: "Founder Led Growth", en: "Founder Led Growth" },
    { sr: "GTM & outbound", en: "GTM & outbound" },
    { sr: "LinkedIn outreach", en: "LinkedIn outreach" },
    { sr: "Content & video", en: "Content & video" },
    { sr: "AI agenti & workflow-i", en: "AI agents & workflows" },
    { sr: "Growth engineering", en: "Growth engineering" },
  ],
} as const;

export const homeDifferentiators = {
  image: {
    src: "/images/nenad-and-tika.png",
    alt: {
      sr: "Nenad Stevanović i Tihomir Mijailović, co-founders Lead Agents",
      en: "Nenad Stevanović and Tihomir Mijailović, co-founders of Lead Agents",
    },
  },
  paragraphs: {
    sr: [
      "Iskreno, baš ništa. Ali volimo da mislimo da smo opušteni ljudi, pa bi trebalo da bude zabavno raditi sa nama.",
      "Šalu na stranu, svaki projekat tretiramo kao da je naš sopstveni. Videli smo mnogo toga u prodaji i marketingu tokom poslednjih 12 godina, a cela industrija se baš dosta promenila.",
      "Ono što nas izdvaja jeste naš pristup Founder Led Growth-u. Fokusiramo se na izgradnju autoriteta vlasnika i vaših top ljudi kroz sadržaj koji gradi poverenje, povezujemo ih sa drugim ekspertima u industriji i koristimo pametni, AI-driven LinkedIn outreach da angažujemo idealne klijente i punimo vaš pipeline.",
    ],
    en: [
      "Honestly, nothing at all. But we like to think we're easygoing people, so working with us should be fun.",
      "Jokes aside, we treat every project as if it were our own. We've seen a lot in sales and marketing over the last 12 years, and the industry has changed dramatically.",
      "What sets us apart is our Founder Led Growth approach. We build authority for founders and top team members through trust-building content, connect them with industry experts, and use smart, AI-driven LinkedIn outreach to engage ideal clients and fill your pipeline.",
    ],
  },
  motto: {
    sr: "Ako ne uživaš u poslu, koja je onda poenta?, naš moto koji živimo svaki dan.",
    en: "If you do not enjoy your work, what is the point?, our motto we live by every day.",
  },
} as const;

export function getServiceAnchor(slug: string) {
  return `#usluga-${slug}`;
}
