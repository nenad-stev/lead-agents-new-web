import { licniBrandingShowreel } from "./licni-branding-videos";
import { sharedClientResults } from "./shared-results";

import type { ServicePage } from "@/types/service";

export const licniBranding: ServicePage = {
  slug: "licni-branding",
  meta: {
    title: {
      sr: "Lični branding - Izgradnja ličnog brenda | Lead Agents",
      en: "Personal Branding - Build your personal brand | Lead Agents",
    },
    description: {
      sr: "20+ objava mesečno uz 2-3 sata snimanja. Identitet, sadržaj, podkast, kampanje i krizni menadžment za preduzetnike i kreatore.",
      en: "20+ posts per month with just 2-3 hours of filming. Identity, content, podcast, campaigns, and crisis support for founders and creators.",
    },
  },
  hero: {
    eyebrow: { sr: "Usluga", en: "Service" },
    title: {
      sr: "Pomoći ćemo ti da izgradiš lični brend",
      en: "We will help you build your personal brand",
    },
    description: {
      sr: "Dobijaćeš 20+ objava za društvene mreže svakog meseca, uz samo 2-3 sata ulaganja mesečno u snimanje sadržaja. Idealno za osnivače, koučeve i konsultante koji razumeju moć video sadržaja i kvalitetnog ličnog brenda, ali nemaju vremena da sami proizvode sadržaj. Ljudi sa jakim ličnim brendom mogu da naplate i do 11× više za svoje usluge.",
      en: "You get 20+ social posts every month with just 2-3 hours of filming per month. Built for founders, coaches, and consultants who understand video and personal brand, but do not have time to produce it themselves. People with a strong personal brand can charge up to 11× more for their services.",
    },
    primaryCta: { sr: "Zakaži konsultaciju", en: "Book a consultation" },
    secondaryCta: { sr: "Pogledaj rezultate", en: "See results" },
  },
  showreel: {
    videos: licniBrandingShowreel,
  },
  deliverables: {
    title: { sr: "Šta dobijaš", en: "What you get" },
    items: [
      {
        title: { sr: "Izgradnja identiteta", en: "Brand identity" },
        description: {
          sr: "Kreiranje autentičnog i upečatljivog ličnog brenda koji odražava tvoje vrednosti i povezuje te sa pravom publikom.",
          en: "An authentic, memorable personal brand that reflects your values and connects you with the right audience.",
        },
      },
      {
        title: { sr: "Kreiranje sadržaja", en: "Content creation" },
        description: {
          sr: "Kvalitetan sadržaj za različite platforme kako bi izgradio prisustvo i pokazao stručnost u onome što radiš.",
          en: "Quality content across platforms to build your presence and demonstrate expertise in what you do.",
        },
      },
      {
        title: { sr: "Saradnja sa kreatorima", en: "Creator collaborations" },
        description: {
          sr: "Saradnja sa KOL i kreatorima sadržaja kako bi proširio domet i ostvario nove kontakte i prilike.",
          en: "Partnerships with KOLs and creators to expand reach and unlock new connections and opportunities.",
        },
      },
      {
        title: { sr: "Vođenje podkasta", en: "Podcast management" },
        description: {
          sr: "Preuzimamo kompletan proces produkcije podkasta, od snimanja do promocije, kako bismo podigli vidljivost brenda.",
          en: "We handle the full podcast production process, from recording to promotion, to grow your brand visibility.",
        },
      },
      {
        title: { sr: "Kampanje za prepoznatljivost", en: "Awareness campaigns" },
        description: {
          sr: "Ciljane kampanje koje povećavaju prepoznatljivost brenda i privlače novu publiku i pratioce.",
          en: "Targeted campaigns that boost brand recognition and attract new audiences and followers.",
        },
      },
      {
        title: { sr: "Upravljanje kriznim situacijama", en: "Crisis management" },
        description: {
          sr: "Stručna podrška i smernice kako bi prevazišao izazove i zaštitio reputaciju svog brenda.",
          en: "Expert support and guidance to navigate challenges and protect your brand reputation.",
        },
      },
    ],
  },
  results: {
    title: { sr: "Rezultati naših klijenata", en: "Our clients' results" },
    items: sharedClientResults,
    layout: "slider",
  },
  audienceSection: {
    title: { sr: "Za koga je ova usluga", en: "Who is this for" },
    image: "/images/services/licni-branding-audience.jpg",
    groups: [
      {
        title: { sr: "Preduzetnike", en: "Entrepreneurs" },
        description: {
          sr: "Koji žele snažno online prisustvo bez da sami vode produkciju sadržaja.",
          en: "Who want a strong online presence without running content production themselves.",
        },
      },
      {
        title: { sr: "Kontent kreatore", en: "Content creators" },
        description: {
          sr: "Koji žele da skaliraju objave i fokusiraju se na ono što najbolje rade.",
          en: "Who want to scale posts and focus on what they do best.",
        },
      },
      {
        title: { sr: "Eksperte iz raznih industrija", en: "Experts across industries" },
        description: {
          sr: "Koji grade autoritet i žele da se izdvoje u digitalnom svetu.",
          en: "Who build authority and want to stand out online.",
        },
      },
    ],
    description: {
      sr: "Naša usluga ličnog brenda namenjena je pojedincima i kompanijama koji žele da unaprede svoje online prisustvo i izgrade snažan identitet brenda. Bilo da si zauzet preduzetnik, kreator sadržaja ili stručnjak u svojoj industriji, tu smo da pojednostavimo tvoju strategiju za društvene mreže, osmislimo sadržaj koji privlači pažnju i profesionalno vodimo tvoj podkast. Od snimanja kvalitetnih intervjua do promocije tvog brenda na različitim platformama, pružamo ti podršku, sistem i ekspertizu koji su potrebni da se izdvojiš u današnjem digitalnom svetu, bilo da tek gradiš svoj brend ili želiš da podigneš postojeći na viši nivo.",
      en: "Our personal branding service is for individuals and companies who want to strengthen their online presence and build a powerful brand identity. Whether you are a busy entrepreneur, content creator, or industry expert, we simplify your social strategy, craft attention-grabbing content, and professionally run your podcast. From quality interviews to cross-platform promotion, we provide the support, systems, and expertise you need to stand out in today's digital world, whether you are just starting out or leveling up an existing brand.",
    },
  },
  highlight: {
    sr: "Nikada nije bilo lakše da se tvoj brend izdvoji.",
    en: "It has never been easier for your brand to stand out.",
  },
  process: {
    title: { sr: "Naš proces, korak po korak", en: "Our process, step by step" },
    items: [
      {
        step: "01",
        title: { sr: "Upoznavanje i analiza", en: "Discovery & analysis" },
        description: {
          sr: "Razgovaramo o idealnim klijentima, potencijalu tržišta i bolje upoznajemo tebe i tvoj brend.",
          en: "We discuss your ideal clients, market potential, and get to know you and your brand in depth.",
        },
      },
      {
        step: "02",
        title: { sr: "Kreiranje strategije", en: "Strategy creation" },
        description: {
          sr: "Razvijamo strategiju koja predstavlja tvoj brend na pravi način kroz različite kanale i platforme.",
          en: "We develop a strategy that presents your brand the right way across channels and platforms.",
        },
      },
      {
        step: "03",
        title: { sr: "Kreiranje kontenta", en: "Content creation" },
        description: {
          sr: "Kreiramo sadržaj koji jasno prenosi autentičan glas tvog brenda i povezuje se sa publikom.",
          en: "We create content that carries your authentic voice and connects with your audience.",
        },
      },
      {
        step: "04",
        title: { sr: "Promocija", en: "Promotion" },
        description: {
          sr: "Delimo tvoj sadržaj na platformama kako bismo maksimizovali vidljivost i angažovanje, uz ciljane oglase.",
          en: "We distribute your content across platforms to maximize visibility and engagement, with targeted ads.",
        },
      },
      {
        step: "05",
        title: { sr: "Praćenje rasta", en: "Growth tracking" },
        description: {
          sr: "Aktivno komuniciramo sa publikom i pratimo metrike rasta radi kontinuiranog razvoja brenda.",
          en: "We engage with your audience and track growth metrics for continuous brand development.",
        },
      },
    ],
  },
  consultation: {
    title: { sr: "Dižemo tvoj biznis na sledeći nivo", en: "Take your business to the next level" },
    ctaSubtitle: {
      sr: "Imate potrebu za novim leadovima?",
      en: "Need new leads?",
    },
    ctaTitle: {
      sr: "Zakažite besplatnu strategijsku sesiju",
      en: "Book your free strategy session",
    },
    ctaButton: { sr: "Zakaži sastanak", en: "Book a meeting" },
  },
};
