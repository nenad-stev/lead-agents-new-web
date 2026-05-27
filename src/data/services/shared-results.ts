import type { ServiceResult } from "@/types/service";

export const clientTestimonialImages = {
  "lisa-cox": "/images/testimonials/lisa-cox.png",
  "nicolas-martinez": "/images/testimonials/nicolas-martinez.png",
  "mladen-vojkovic": "/images/testimonials/mladen-vojkovic.png",
} as const;

export const sharedClientResults: ServiceResult[] = [
  {
    id: "lisa-cox",
    name: "Lisa Cox",
    image: clientTestimonialImages["lisa-cox"],
    role: {
      sr: "Preduzetnik · Keynote speaker · Autor bestselera",
      en: "Entrepreneur · Keynote speaker · Bestselling author",
    },
    quote: {
      sr: "Nikada u životu se nisam osećala toliko sigurno da sam pronašla pravu kompaniju i prave ljude koji će me odvesti na sledeći nivo mog biznisa. Lead Agents tačno razumeju šta mi je potrebno da implementiram kako bih napredovala, a takođe su proširili moju viziju onoga što mogu da uradim da bih dostigla najviše nivoe uspeha.",
      en: "I have never felt so confident that I found the right company and the right people to take my business to the next level. Lead Agents understand exactly what I need to implement to progress, and they expanded my vision of what I can achieve at the highest levels of success.",
    },
    stats: [
      { value: "916", label: { sr: "Ljudi u kampanji", en: "People in campaign" } },
      { value: "38.1%", label: { sr: "Prihvaćenih konekcija", en: "Connections accepted" } },
      { value: "35.2%", label: { sr: "Odgovora", en: "Reply rate" } },
      { value: "48", label: { sr: "Organizovanih sastanaka", en: "Meetings booked" } },
    ],
  },
  {
    id: "nicolas-martinez",
    name: "Nicolas Martinez",
    image: clientTestimonialImages["nicolas-martinez"],
    role: { sr: "Co-founder", en: "Co-founder" },
    quote: {
      sr: "Moja saradnja sa Lead Agents je apsolutno neverovatna. Sve automatizacije koje postavljaju za biznis traže vreme na početku, ali kada krene da radi… WOW, nema vremena ni za kafu! Moj Google kalendar je sada pun sastanaka svake nedelje. Hvala vam, ekipo, na odlično odrađenom poslu!",
      en: "My collaboration with Lead Agents is absolutely incredible. The automations they set up take time at first, but when it kicks in… WOW, no time even for coffee! My Google calendar is now full of meetings every week. Thanks team for the great work!",
    },
    stats: [
      { value: "928", label: { sr: "Ljudi u kampanji", en: "People in campaign" } },
      { value: "63.9%", label: { sr: "Prihvaćenih konekcija", en: "Connections accepted" } },
      { value: "54.1%", label: { sr: "Odgovora", en: "Reply rate" } },
      { value: "93", label: { sr: "Organizovanih sastanaka", en: "Meetings booked" } },
    ],
  },
  {
    id: "mladen-vojkovic",
    name: "Mladen Vojkovic",
    image: clientTestimonialImages["mladen-vojkovic"],
    role: { sr: "Co-founder", en: "Co-founder" },
    quote: {
      sr: "U poslednjih 6 meseci saradnje sa Lead Agents, moram da istaknem da su u potpunosti ispunili moja očekivanja! Broj sastanaka se povećao desetostruko, otvarajući fantastične prodajne prilike na svetskom tržištu. Toplo bih preporučio Tiku i Nenada svakome ko se bavi prodajom!",
      en: "Over the last 6 months with Lead Agents, they fully met my expectations! Meetings increased tenfold, opening fantastic sales opportunities globally. I warmly recommend Tika and Nenad to anyone in sales!",
    },
    stats: [
      { value: "917", label: { sr: "Ljudi u kampanji", en: "People in campaign" } },
      { value: "70%", label: { sr: "Prihvaćenih konekcija", en: "Connections accepted" } },
      { value: "57.4%", label: { sr: "Odgovora", en: "Reply rate" } },
      { value: "119", label: { sr: "Organizovanih sastanaka", en: "Meetings booked" } },
    ],
  },
];
