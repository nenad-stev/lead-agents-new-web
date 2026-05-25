import type { CaseStudyDetail } from "@/types/case-study";

const IMG = "/images/case-studies/i-decide";

export const iDecideCaseStudy: CaseStudyDetail = {
  slug: "i-decide",
  title: { sr: "iDecide", en: "iDecide" },
  excerpt: {
    sr: "Kako smo bestseler pretvorili u digitalni kurs.",
    en: "How we turned a bestseller into a digital course.",
  },
  image: "/images/case-studies/i-decide-book-to-course.png",
  imageAlt: {
    sr: "Od knjige I Decide do digitalnog kursa",
    en: "From the I Decide book to a digital course",
  },
  meta: {
    title: {
      sr: "iDecide Case Study | Lead Agents",
      en: "iDecide Case Study | Lead Agents",
    },
    description: {
      sr: "Kako smo Amazon bestseller „I Decide“ pretvorili u digitalni kurs, aplikaciju i premium brend pokret.",
      en: "How we turned the Amazon bestseller “I Decide” into a digital course, app, and premium brand movement.",
    },
  },
  hero: {
    title: {
      sr: "Kako smo pretvorili knjigu u digitalni kurs",
      en: "How we turned a book into a digital course",
    },
  },
  sections: [
    {
      id: "about",
      title: { sr: "O klijentu", en: "About the client" },
      paragraphs: [
        {
          sr: "Lisa i Erin su najbolje prijateljice i uspešne preduzetnice iz Springfilda i Hjustona. Izgradile su višemilionske biznise u beauty i direct sales industriji radeći sa ženama širom sveta i svetski poznatim influenserima.",
          en: "Lisa and Erin are best friends and successful entrepreneurs from Springfield and Houston. They built multi-million-dollar businesses in beauty and direct sales, working with women worldwide and globally recognized influencers.",
        },
        {
          sr: "Njihov Amazon bestseller „I Decide“ predstavljen je na Fox-u, ABC-u i u Forbes-u. Knjiga je ispunjena pričama ljudi koji su doneli onu jednu odluku koja im je promenila život iz negativnog u pozitivan, a kako same kažu: mali srećan vodič za život po sopstvenim pravilima.",
          en: "Their Amazon bestseller “I Decide” was featured on Fox, ABC, and Forbes. The book is filled with stories of people who made the one decision that shifted their lives from negative to positive — as they put it, a little happy guide to living life on your own terms.",
        },
        {
          sr: "Međutim, pojavio se jedan izazov...",
          en: "But then a challenge emerged...",
        },
      ],
      image: {
        src: `${IMG}/hero.jpg`,
        alt: {
          sr: "Lisa i Erin — I Decide",
          en: "Lisa and Erin — I Decide",
        },
        fit: "cover",
      },
    },
    {
      id: "challenge",
      title: { sr: "Izazov", en: "The challenge" },
      paragraphs: [
        {
          sr: "Napisati knjigu je jedno, ali promovisati je je nešto potpuno drugo. Monetizacija knjiga predstavlja veliki izazov za svakoga ko nije svetski poznata ličnost — a čak i njima prodaja knjiga može biti teška zbog visokih troškova promocije i malih profitnih marži.",
          en: "Writing a book is one thing; promoting it is entirely another. Book monetization is a major challenge for anyone who isn’t a global celebrity — and even for them, book sales can be tough due to high promotion costs and thin profit margins.",
        },
        {
          sr: "Pored toga, većina ljudi danas radije konzumira video sadržaj. Zato smo im predstavili jednu ideju...",
          en: "On top of that, most people today prefer video content. That’s why we pitched them one idea...",
        },
      ],
      image: {
        src: `${IMG}/book.png`,
        alt: { sr: "Knjiga I Decide", en: "The I Decide book" },
      },
    },
    {
      id: "solution",
      title: { sr: "Rešenje", en: "The solution" },
      paragraphs: [
        {
          sr: "„Hajde da stvorimo ceo ‘I Decide’ pokret.“ Da pretvorimo vašu knjigu u digitalni kurs sa konkretnim koracima za primenu i napravimo aplikaciju u kojoj ljudi mogu da gledaju kurs, ali i da se pretplate na premium community deo gde mogu međusobno da komuniciraju i dele korisne savete na različite teme.",
          en: "“Let’s build the entire ‘I Decide’ movement.” Turn your book into a digital course with actionable steps and build an app where people can watch the course and subscribe to a premium community to connect and share advice across topics.",
        },
        {
          sr: "Ideja im se odmah dopala, pa smo krenuli u realizaciju.",
          en: "They loved the idea immediately, and we got to work.",
        },
      ],
      list: {
        title: {
          sr: "Potencijal monetizacije:",
          en: "Monetization potential:",
        },
        items: [
          { sr: "Digitalni kurs", en: "Digital course" },
          { sr: "Plaćena zajednica", en: "Paid community" },
          { sr: "Speaking angažmani", en: "Speaking engagements" },
        ],
      },
      image: {
        src: `${IMG}/rocket.webp`,
        alt: { sr: "I Decide pokret", en: "I Decide movement" },
      },
    },
    {
      id: "implementation",
      title: {
        sr: "Implementacija I Decide pokreta",
        en: "Implementing the I Decide movement",
      },
      paragraphs: [
        {
          sr: "Prvo smo kreirali premium website sa wow efektom koji predstavlja njihov brend i ceo „I Decide“ pokret.",
          en: "First, we built a premium website with a strong wow factor that represents their brand and the entire “I Decide” movement.",
        },
        {
          sr: "Pogledajte šta smo napravili za njih:",
          en: "See what we built for them:",
        },
      ],
      image: {
        src: `${IMG}/website.png`,
        alt: { sr: "I Decide website", en: "I Decide website" },
      },
    },
    {
      id: "course",
      title: { sr: "Kreacija digitalnog kursa", en: "Digital course creation" },
      paragraphs: [
        {
          sr: "Dogovorili smo se da je najbolji pristup da njihovu knjigu „I Decide“ pretvorimo u konkretne, primenljive korake kroz program „Get Unstuck in 10 Days“. Ovaj kurs je namenjen svima koji se osećaju “zaglavljenim” u bilo kojoj oblasti života — bilo da su to zdravlje, finansije ili odnosi.",
          en: "We agreed the best approach was to turn their “I Decide” book into concrete, actionable steps through the “Get Unstuck in 10 Days” program. The course is for anyone who feels stuck in any area of life — health, finances, or relationships.",
        },
        {
          sr: "Kurs smo podelili u 10 modula, gde svaki modul predstavlja jedan dan sa strategijama za izlazak iz stagnacije. U okviru svakog modula polaznici dobijaju i konkretne vežbe koje mogu da preuzmu i rade. Cilj nije bio samo da ljudi slušaju Lisa & Erin, već da ih to zaista pokrene na akciju.",
          en: "We split the course into 10 modules — one day each with strategies to break out of stagnation. Each module includes exercises participants can download and complete. The goal wasn’t just for people to listen to Lisa & Erin, but to take real action.",
        },
        {
          sr: "Zajedno smo radili na skriptama za svaki modul, zatim smo snimili kompletan kurs i odradili montažu. Istovremeno smo počeli da rešavamo i izazov kreiranja aplikacije pod nazivom „I Decide Darlings“.",
          en: "We co-wrote scripts for each module, filmed the full course, and handled post-production. At the same time, we started tackling the “I Decide Darlings” app.",
        },
      ],
    },
    {
      id: "brand",
      title: {
        sr: "Svakom digitalnom kursu je neophodan jak lični brend",
        en: "Every digital course needs a strong personal brand",
      },
      paragraphs: [
        {
          sr: "Da bismo to ostvarili, radili smo intervjue kako bismo dobili dublji uvid u njihova iskustva. Zatim smo izmontirali najjače segmente i delili te kratke video klipove na njihovim društvenim mrežama.",
          en: "To make that happen, we ran interviews to go deeper into their experiences, edited the strongest segments, and shared short clips across their social channels.",
        },
        {
          sr: "Vremenom smo preuzeli i upravljanje njihovim podcastom „The I Decide Darlings“, gde se bavimo zakazivanjem gostiju i pomažemo gostima da se tehnički pripreme za intervju kako bi sve proteklo glatko od početka do kraja.",
          en: "Over time we also took over their “The I Decide Darlings” podcast — booking guests and helping them prepare technically so every episode runs smoothly start to finish.",
        },
      ],
    },
    {
      id: "app",
      title: {
        sr: 'Kreiranje "I Decide Darlings" aplikacije za iOS & Android',
        en: 'Building the "I Decide Darlings" app for iOS & Android',
      },
      paragraphs: [
        {
          sr: "Razlog zašto smo preporučili aplikaciju je sledeći:",
          en: "Why we recommended an app:",
        },
      ],
      list: {
        items: [
          {
            sr: "Tu mogu dodavati sve buduće kurseve",
            en: "They can add all future courses there",
          },
          {
            sr: "U okviru aplikacije mogu napraviti plaćen community",
            en: "They can run a paid community inside the app",
          },
          {
            sr: "Mogu slati push notifikacije svojim korisnicima",
            en: "They can send push notifications to users",
          },
          {
            sr: "Mogu deliti podcast epizode direktno na aplikaciji",
            en: "They can publish podcast episodes directly in the app",
          },
        ],
      },
    },
  ],
  appFeatures: {
    title: {
      sr: "Tako da smo napravili aplikaciju sa sledećim funkcionalnostima:",
      en: "We built the app with the following features:",
    },
    items: [
      { sr: "Video učenje", en: "Video learning" },
      { sr: "Live streaming", en: "Live streaming" },
      { sr: "Drip sadržaj", en: "Drip content" },
      { sr: "Interaktivne vežbe", en: "Interactive exercises" },
      { sr: "Zajednice", en: "Communities" },
      { sr: "Kvizovi / radni listovi", en: "Quizzes / worksheets" },
      { sr: "Automatizovani izazovi", en: "Automated challenges" },
      { sr: "Praćenje ciljeva", en: "Goal tracking" },
      { sr: "Audio podcasti", en: "Audio podcasts" },
      { sr: "Zakazivanje događaja", en: "Event scheduling" },
    ],
    image: {
      src: `${IMG}/app.png`,
      alt: {
        sr: "I Decide Darlings aplikacija",
        en: "I Decide Darlings app",
      },
    },
  },
  outlook: {
    title: { sr: "Sadašnjost i budućnost", en: "Present and future" },
    paragraphs: [
      {
        sr: "Ovu fazu nazivamo test faza, gde se isključivo fokusiramo na podatke. Naš cilj je da utvrdimo koje reklame daju najbolje rezultate i koja landing stranica najbolje konvertuje. Kada to otkrijemo, skaliramo naše reklamne kampanje kako bismo postigli maksimalni potencijal prihoda.",
        en: "We call this the test phase, focused purely on data. Our goal is to identify which ads perform best and which landing page converts highest — then scale campaigns to maximize revenue potential.",
      },
    ],
  },
  serviceCta: {
    label: {
      sr: "Saznajte više o usluzi kreiranja digitalnih kurseva",
      en: "Learn more about digital course creation",
    },
    serviceSlug: "kreiranje-digitalnih-kurseva",
  },
};
