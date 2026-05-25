import { sharedClientResults } from "./shared-results";

import type { ServicePage } from "@/types/service";

export const coldSalesOutreach: ServicePage = {
  slug: "cold-sales-outreach",
  meta: {
    title: {
      sr: "Cold Sales Outreach — Automatizovani prodajni sistem | Lead Agents",
      en: "Cold Sales Outreach — Automated sales system | Lead Agents",
    },
    description: {
      sr: "Postavljamo automatizovani cold sales outreach: ICP, baze leadova, alati, poruke i vođenje kampanja koje pune kalendar sastancima.",
      en: "We build automated cold sales outreach: ICP, lead databases, tools, messaging, and campaign management that fill your calendar.",
    },
  },
  hero: {
    eyebrow: { sr: "Usluga", en: "Service" },
    title: {
      sr: "Automatizovani sistem za cold sales outreach",
      en: "An automated cold sales outreach system",
    },
    description: {
      sr: "Dobićeš savet o najboljim alatima na tržištu i kako da ih integrišeš kako bi ostvario svoje konkretne prodajne ciljeve.",
      en: "Get advice on the best tools on the market and how to integrate them to hit your specific sales goals.",
    },
    primaryCta: { sr: "Zakaži konsultaciju", en: "Book a consultation" },
    secondaryCta: { sr: "Pogledaj rezultate", en: "See results" },
  },
  deliverables: {
    title: { sr: "Šta dobijaš", en: "What you get" },
    items: [
      {
        title: { sr: "Definisanje ICP profila", en: "Ideal client profile (ICP)" },
        description: {
          sr: "Identifikujemo i profilišemo idealne klijente kako bi outreach bio precizan i efikasan.",
          en: "We identify and profile your ideal clients so outreach stays precise and effective.",
        },
      },
      {
        title: { sr: "Baza idealnih leadova", en: "Ideal lead database" },
        description: {
          sr: "Kreiramo sveobuhvatne baze potencijalnih leadova koji odgovaraju tvom ICP-u.",
          en: "We build comprehensive lead lists that match your ICP.",
        },
      },
      {
        title: { sr: "Optimizacija LinkedIn profila", en: "LinkedIn profile optimization" },
        description: {
          sr: "Unapređujemo tvoje LinkedIn prisustvo da privuče leadove i poveća angažovanje.",
          en: "We improve your LinkedIn presence to attract leads and boost engagement.",
        },
      },
      {
        title: { sr: "Implementacija prodajnih alata", en: "Sales tool implementation" },
        description: {
          sr: "Postavljamo alate koji pojednostavljuju prodajni proces i povećavaju produktivnost.",
          en: "We set up tools that streamline your sales process and boost productivity.",
        },
      },
      {
        title: { sr: "Pisanje prodajnih tekstova", en: "Sales copywriting" },
        description: {
          sr: "Kreiramo ubedljive poruke koje se povezuju sa ciljanom publikom i podstiču akciju.",
          en: "We craft compelling messages that connect with your audience and drive action.",
        },
      },
      {
        title: { sr: "Vođenje kampanja", en: "Campaign management" },
        description: {
          sr: "Strateški pokrećemo i vodimo outreach kampanje — leadovi, follow-up i konverzije.",
          en: "We strategically launch and manage outreach — leads, follow-ups, and conversions.",
        },
      },
    ],
  },
  results: {
    title: { sr: "Rezultati naših klijenata", en: "Our clients' results" },
    items: sharedClientResults,
  },
  audienceSection: {
    title: { sr: "Za koga je ova usluga?", en: "Who is this for?" },
    items: [
      {
        sr: "Za sve sa većim ciljnim tržištem (TAM > 1000 ljudi) koji imaju poteškoća da zakažu sastanke sa idealnim klijentima.",
        en: "For anyone with a large target market (TAM > 1000 people) who struggles to book meetings with ideal clients.",
      },
      {
        sr: "Za one koji ne vole prospecting ili nemaju prodavca koji može da kontaktira idealne klijente.",
        en: "For those who dislike prospecting or lack a salesperson who can reach ideal clients.",
      },
      {
        sr: "Za timove koji razumeju da su prodaja i brojevi povezani — i žele prilagođen automatizovani sistem koji zakazuje sastanke umesto njih.",
        en: "For teams who know sales and numbers go together — and want a tailored automated system that books meetings for them.",
      },
    ],
  },
  highlight: {
    sr: "Testirali smo desetine prodajnih alata — kako ti ne bi morao.",
    en: "We have tested dozens of sales tools — so you do not have to.",
  },
  highlightLink: {
    label: { sr: "Pogledaj prodajne alate →", en: "Browse sales tools →" },
    href: "/prodajni-alati",
  },
  process: {
    title: { sr: "Naš proces — korak po korak", en: "Our process — step by step" },
    items: [
      {
        step: "01",
        title: { sr: "Upoznavanje i analiza", en: "Discovery & analysis" },
        description: {
          sr: "Razgovaramo o idealnim klijentima, veličini tržišta, prodajnom ciklusu i trenutnim prodajnim aktivnostima.",
          en: "We discuss ideal clients, market size, sales cycle, and your current sales activities.",
        },
      },
      {
        step: "02",
        title: { sr: "Postavljanje alata", en: "Tool setup" },
        description: {
          sr: "Savetujemo i pomažemo da implementiraš alate koji najbolje odgovaraju tvom slučaju.",
          en: "We advise and help you implement the tools that best fit your case.",
        },
      },
      {
        step: "03",
        title: { sr: "Pisanje poruka", en: "Message writing" },
        description: {
          sr: "Kreiramo personalizovane poruke u velikom obimu, sa ponudom koja motiviše ljude da zakažu poziv.",
          en: "We create personalized messages at scale with offers that motivate people to book a call.",
        },
      },
      {
        step: "04",
        title: { sr: "Vođenje kampanja", en: "Running campaigns" },
        description: {
          sr: "Prodajna mašina radi za tebe — odgovaramo na poruke, vodimo follow-up. Ti ideš na sastanke.",
          en: "Your sales engine runs for you — we reply, manage follow-ups. You take the meetings.",
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
