import type { ServicePage } from "@/types/service";

export const placeneReklame: ServicePage = {
  slug: "placene-reklame",
  meta: {
    title: {
      sr: "Plaćene reklame — Video oglasi koji konvertuju | Lead Agents",
      en: "Paid advertising — Video ads that convert | Lead Agents",
    },
    description: {
      sr: "Pravimo reklame koje konvertuju: ICP, scenariji, snimanje, optimizacija kampanja i landing stranica na više platformi.",
      en: "We create ads that convert: ICP, scripts, production, campaign optimization, and landing pages across platforms.",
    },
  },
  hero: {
    eyebrow: { sr: "Usluga", en: "Service" },
    title: {
      sr: "Pravimo reklame koje konvertuju",
      en: "We create ads that convert",
    },
    description: {
      sr: "Od savršenog hook-a, preko storytellinga, do kvalitetne montaže — pravimo reklame koje privlače pažnju i budu interesovanje za kupovinu tvog proizvoda ili usluge.",
      en: "From the perfect hook and storytelling to high-quality editing — we make ads that grab attention and drive interest in your product or service.",
    },
    primaryCta: { sr: "Zakaži konsultaciju", en: "Book a consultation" },
    secondaryCta: { sr: "Pogledaj proces", en: "See our process" },
  },
  bannerImage: "/images/services/placene-reklame-banner.png",
  deliverables: {
    title: { sr: "Šta dobijaš", en: "What you get" },
    items: [
      {
        title: { sr: "Definisanje ICP profila", en: "Ideal client profile (ICP)" },
        description: {
          sr: "Pre kreiranja oglasa detaljno analiziramo ko je tvoj idealan klijent — probleme, želje i ograničavajuća uverenja. Za nas je to ključni deo procesa.",
          en: "Before creating ads we analyze your ideal client in depth — problems, desires, and limiting beliefs. It is a core part of our process.",
        },
      },
      {
        title: { sr: "Pisanje scenarija za reklame", en: "Ad script writing" },
        description: {
          sr: "Svaki video zasniva se na unapred napisanom scenariju. Imamo sistem pisanja skripti koje ciljaju emocije koje podstiču kupovinu.",
          en: "Every video is built on a pre-written script. We use a system of scripts that target emotions that drive purchase decisions.",
        },
      },
      {
        title: { sr: "Snimanje i editovanje videa", en: "Video filming & editing" },
        description: {
          sr: "Savršen scenario prati kvalitetan vizuelni sadržaj — montaža je na najvišem nivou kvaliteta.",
          en: "A strong script is paired with quality visuals — editing at the highest production standard.",
        },
      },
      {
        title: { sr: "Optimizacija oglasa i landing stranica", en: "Ad & landing page optimization" },
        description: {
          sr: "Pratimo rezultate i menjamo oglase, kampanje i landing stranice — sve što je potrebno za bolje performanse.",
          en: "We track results and adjust ads, campaigns, and landing pages — everything needed for stronger performance.",
        },
      },
      {
        title: { sr: "Upravljanje reklamnim kampanjama", en: "Ad campaign management" },
        description: {
          sr: "Nadgledanje realizacije i performansi tvojih reklamnih kampanja na više platformi.",
          en: "Oversight of execution and performance of your ad campaigns across multiple platforms.",
        },
      },
      {
        title: { sr: "Testiranje različitih pristupa", en: "Testing different approaches" },
        description: {
          sr: "Eksperimentišemo sa različitim strategijama oglasa kako bismo pronašli najefikasniji pristup za tvoje ciljeve.",
          en: "We experiment with different ad strategies to find the most effective approach for your goals.",
        },
      },
    ],
  },
  audienceSection: {
    title: { sr: "Za koga je ova usluga", en: "Who is this for" },
    image: "/images/services/digital-course-audience.webp",
    groups: [
      {
        title: {
          sr: "Profesionalce sa proizvodom ili uslugom",
          en: "Professionals selling a product or service",
        },
        description: {
          sr: "Koji žele da predstave ponudu većem broju ljudi i pretvore interesovanje u prodaju.",
          en: "Who want to reach more people and turn interest into sales.",
        },
      },
      {
        title: { sr: "Kontent kreatore", en: "Content creators" },
        description: {
          sr: "Koji skaliraju promociju kroz plaćene kanale i video oglase.",
          en: "Who scale promotion through paid channels and video ads.",
        },
      },
      {
        title: { sr: "B2B kompanije", en: "B2B companies" },
        description: {
          sr: "Koje targetiraju odlučioce i žele merljive kampanje sa jasnim ROI-jem.",
          en: "Who target decision-makers and want measurable campaigns with clear ROI.",
        },
      },
    ],
    description: {
      sr: "Ova usluga je namenjena svima koji imaju proizvod (digitalni ili fizički) ili uslugu (npr. coaching) i žele da ga predstave što većem broju ljudi i pretvore interesovanje u prodaju.",
      en: "This service is for anyone with a product (digital or physical) or service (e.g. coaching) who wants to reach more people and turn interest into purchases.",
    },
  },
  highlight: {
    sr: "Nikada nije bilo lakše doći do pravih ljudi.",
    en: "It has never been easier to reach the right people.",
  },
  process: {
    title: { sr: "Naš proces — korak po korak", en: "Our process — step by step" },
    items: [
      {
        step: "01",
        title: { sr: "Upoznavanje i analiza", en: "Discovery & analysis" },
        description: {
          sr: "Razgovaramo o ciljevima, definišemo ciljnu publiku (ICP) i kreiramo plan usklađen sa tvojim konkretnim ciljevima.",
          en: "We discuss your goals, define your audience (ICP), and build a plan aligned with your specific objectives.",
        },
      },
      {
        step: "02",
        title: { sr: "Kreiranje kontenta", en: "Content creation" },
        description: {
          sr: "Pišemo scenarije na osnovu ICP-a, snimamo sadržaj i montiramo finalni oglas u skladu sa trendovima u industriji.",
          en: "We write scripts based on your ICP, film content, and edit the final ad following current industry trends.",
        },
      },
      {
        step: "03",
        title: { sr: "Podešavanje kampanja", en: "Campaign setup" },
        description: {
          sr: "Vodimo kampanje na različitim platformama i optimizujemo oglase i landing stranice po CTR-u, konverziji i ROI-ju.",
          en: "We run campaigns across platforms and optimize ads and landing pages by CTR, conversion, and ROI.",
        },
      },
      {
        step: "04",
        title: { sr: "Vođenje i praćenje kampanja", en: "Campaign management & tracking" },
        description: {
          sr: "Obezbeđujemo kontinuitet rezultata i maksimizujemo povraćaj investicije, uz preporuke za buduće kampanje.",
          en: "We ensure consistent results and maximize return on ad spend, with recommendations for future campaigns.",
        },
      },
    ],
  },
  consultation: {
    title: { sr: "Dižemo tvoj biznis na sledeći nivo", en: "Take your business to the next level" },
    ctaSubtitle: {
      sr: "Spremni za reklame koje konvertuju?",
      en: "Ready for ads that convert?",
    },
    ctaTitle: {
      sr: "Zakažite besplatnu strategijsku sesiju",
      en: "Book your free strategy session",
    },
    ctaButton: { sr: "Zakaži sastanak", en: "Book a meeting" },
  },
};
