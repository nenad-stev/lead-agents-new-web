import type { RichLessonContent } from "@/types/rich-lesson";

const L = (sr: string, en: string) => ({ sr, en });
const P = (sr: string[], en: string[]) => ({ sr, en });

export const lesson01RichContent: RichLessonContent = {
  meta: {
    stage: L("Temelj", "Foundation"),
    readingTime: L("8–10 min", "8–10 min"),
    difficulty: L("Početnik", "Beginner"),
    outcome: L(
      "Videćeš razliku između referral kanala i referral zavisnosti — i zašto predvidiv pipeline ne može da čeka preporuku.",
      "You’ll see the difference between a referral channel and referral dependency — and why a predictable pipeline can’t wait for a recommendation.",
    ),
    recommendedTools: L(
      "CRM, LinkedIn, jasan ICP",
      "CRM, LinkedIn, a clear ICP",
    ),
  },
  hero: {
    eyebrow: L("Lekcija 1", "Lesson 1"),
    title: L(
      "Zašto referral-i nisu sales sistem",
      "Why Referrals Are Not a Sales System",
    ),
    paragraphs: P(
      [
        "Referral-i su verovatno najbolji leadovi koje možete da dobijete. Topli su. Dolaze sa poverenjem. Neko je već rekao dobru stvar o vama.",
        "Zato ih svaka B2B firma voli — i treba da ih voli.",
      ],
      [
        "Referrals are probably the best leads you can get. They’re warm. They come with trust. Someone already said something good about you.",
        "That’s why every B2B company loves them — and should.",
      ],
    ),
    callout: L(
      "Problem nastaje kada referral-i postanu glavni način na koji firma dolazi do novih klijenata. Tada više ne pričamo o kanalu. Pričamo o zavisnosti.",
      "The problem starts when referrals become the main way the company finds new clients. Then we’re no longer talking about a channel. We’re talking about a dependency.",
    ),
  },
  toc: [
    { id: "zasto-ih-voleti", title: L("Zašto ih treba voleti", "Why you should love them") },
    { id: "kanal-ili-zavisnost", title: L("Kanal ili zavisnost", "Channel or dependency") },
    { id: "sta-ne-kontrolisete", title: L("Šta ne kontrolišete", "What you don’t control") },
    { id: "stabilno-spolja", title: L("Stabilno spolja, krhko iznutra", "Stable outside, fragile inside") },
    { id: "skupi-trenutak", title: L("Najskuplji trenutak", "The most expensive moment") },
    { id: "bonus-ne-osnova", title: L("Bonus, ne osnova", "Bonus, not foundation") },
    { id: "sta-sistem-zna", title: L("Šta dobar sistem zna", "What a real system knows") },
    { id: "pravo-pitanje", title: L("Pravo pitanje", "The right question") },
  ],
  blocks: [
    {
      type: "section",
      id: "zasto-ih-voleti",
      title: L("Zašto ih treba voleti", "Why you should love them"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Sales razgovor često krene lakše. Manje morate da objašnjavate ko ste i zašto ima smisla da pričate. Neko je već uradio deo posla poverenja umesto vas.",
              "Referral-e treba da volite. Problem nije referral. Problem je kada su referral-i jedini plan.",
            ],
            [
              "The sales conversation often starts easier. You have to explain less who you are and why talking makes sense. Someone already did part of the trust work for you.",
              "You should love referrals. The problem isn’t referrals. The problem is when referrals are the only plan.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "kanal-ili-zavisnost",
      title: L("Kanal ili zavisnost", "Channel or dependency"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Kada referral-i postanu glavni način na koji firma dolazi do novih klijenata, menjate kategoriju.",
            ],
            [
              "When referrals become the main way the company finds new clients, you change category.",
            ],
          ),
        },
        {
          type: "fork-paths",
          versus: L("vs", "vs"),
          left: {
            label: L("Zavisnost", "Dependency"),
            title: L(
              "„Javiće nam se neko.“",
              "“Someone will reach out.”",
            ),
            body: L(
              "Pipeline stoji kada preporuke stanu. Rast zavisi od tuđeg tajminga. Sledeći mesec je nagađanje.",
              "Pipeline stalls when referrals stop. Growth depends on someone else’s timing. Next month is a guess.",
            ),
            tone: "danger",
          },
          right: {
            label: L("Kanal", "Channel"),
            title: L(
              "„Imamo sistem — referral je bonus.“",
              "“We have a system — referral is a bonus.”",
            ),
            body: L(
              "Referral radi pored outreach-a, contenta i CRM-a. Možete planirati i kada niko ne pošalje preporuku.",
              "Referrals work alongside outreach, content, and CRM. You can plan even when nobody sends a recommendation.",
            ),
            tone: "accent",
          },
        },
      ],
    },
    {
      type: "section",
      id: "sta-ne-kontrolisete",
      title: L("Šta ne kontrolišete", "What you don’t control"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Jer referral ne kontrolišete. I to je suština problema.",
            ],
            [
              "Because you don’t control referrals. And that’s the core of the problem.",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "Ne možete da znate kada će doći.",
              "Ne možete da znate ko će vas preporučiti.",
              "Ne možete da znate da li će preporuka biti dobar fit.",
              "Ne možete da znate da li će ih biti dovoljno kada vam stvarno trebaju.",
            ],
            [
              "You can’t know when it will arrive.",
              "You can’t know who will refer you.",
              "You can’t know whether the referral will be a good fit.",
              "You can’t know whether there will be enough when you really need them.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "default",
          text: L(
            "Ne možete planirati rast na osnovu „javiće nam se neko“.",
            "You can’t plan growth on “someone will reach out.”",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "stabilno-spolja",
      title: L(
        "Stabilno spolja, krhko iznutra",
        "Stable outside, fragile inside",
      ),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Zato mnoge B2B firme spolja izgledaju stabilno, a iznutra nemaju kontrolu nad pipeline-om.",
              "Imaju dobar delivery. Imaju zadovoljne klijente. Imaju nekoliko preporuka godišnje.",
              "Ali nemaju sistem koji svaki mesec otvara nove razgovore sa pravim kupcima.",
              "To radi dok stvari idu dobro. Ali čim jedan veći klijent ode, sve se promeni.",
            ],
            [
              "That’s why many B2B companies look stable from the outside, while inside they have no control over the pipeline.",
              "They have strong delivery. Happy clients. A few referrals a year.",
              "But they don’t have a system that opens new conversations with the right buyers every month.",
              "It works while things are going well. But the moment one bigger client leaves, everything changes.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "skupi-trenutak",
      title: L("Najskuplji trenutak", "The most expensive moment"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Odjednom referral-i nisu dovoljni. Founder mora da se uključi u sales. Sales tim nema jasnu listu. Content nije građen mesecima. LinkedIn profil ne pokazuje dovoljno ekspertize. CRM nema signale. Follow-up se radi ručno.",
            ],
            [
              "Suddenly referrals aren’t enough. The founder has to jump into sales. The sales team has no clear list. Content hasn’t been built for months. The LinkedIn profile doesn’t show enough expertise. The CRM has no signals. Follow-up is manual.",
            ],
          ),
        },
        {
          type: "cost-stamp",
          left: {
            value: L("30d", "30d"),
            label: L("panika", "panic"),
          },
          right: {
            value: L("12m", "12m"),
            label: L("gradnja sistema", "building the system"),
          },
          note: L(
            "Firma pokušava da za 30 dana napravi ono što je trebalo da gradi 12 meseci.",
            "The company tries to build in 30 days what should have been built over 12 months.",
          ),
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "To je najskuplji trenutak za početak sales sistema. Jer kada vam pipeline hitno treba, često zvučite kao da vam pipeline hitno treba. A kupac to oseti.",
            "That’s the most expensive moment to start a sales system. Because when you urgently need pipeline, you often sound like you urgently need pipeline. And the buyer feels it.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "bonus-ne-osnova",
      title: L("Bonus, ne osnova", "Bonus, not foundation"),
      blocks: [
        {
          type: "big-statement",
          variant: "accent",
          eyebrow: L("Teza", "Thesis"),
          statement: L(
            "Cilj nije da zamenite referral-e. Cilj je da postanu bonus — ne osnova.",
            "The goal isn’t to replace referrals. The goal is to make them a bonus — not the foundation.",
          ),
          support: L(
            "Dobar sales sistem treba da radi i kada niko ne pošalje preporuku.",
            "A good sales system should still work when nobody sends a recommendation.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "sta-sistem-zna",
      title: L("Šta dobar sistem zna", "What a real system knows"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Treba da znate koga targetirate, koji problem otvarate, koji content gradi poverenje, koji outreach angle radi — i ko je spreman za razgovor.",
              "To je razlika između firme koja čeka prilike i firme koja ih sistemski otvara.",
            ],
            [
              "You need to know who you’re targeting, which problem you open, which content builds trust, which outreach angle works — and who’s ready for a conversation.",
              "That’s the difference between a company that waits for opportunities and a company that opens them systematically.",
            ],
          ),
        },
        {
          type: "checklist",
          title: L(
            "Da li imate sistem — ili čekate preporuku?",
            "Do you have a system — or are you waiting for a referral?",
          ),
          items: P(
            [
              "Znamo koga targetiramo (ICP)",
              "Znamo koji problem otvaramo u prvom kontaktu",
              "Imamo content koji gradi poverenje pre poruke",
              "Imamo outreach angle koji radi",
              "Vidimo ko pokazuje signal interesovanja",
              "Znamo kome treba follow-up",
              "Znamo ko treba webinar ili case study",
              "Znamo ko je spreman za razgovor",
            ],
            [
              "We know who we target (ICP)",
              "We know which problem we open on first contact",
              "We have content that builds trust before the message",
              "We have an outreach angle that works",
              "We can see who shows interest signals",
              "We know who needs follow-up",
              "We know who needs a webinar or case study",
              "We know who is ready for a conversation",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "pravo-pitanje",
      title: L("Pravo pitanje", "The right question"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            ["Founder-Led Growth kreće baš odatle."],
            ["Founder-Led Growth starts right there."],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["Ne od pitanja:"],
            ["Not from the question:"],
          ),
        },
        {
          type: "lead",
          text: L(
            "„Kako da dobijemo više leadova?“",
            "“How do we get more leads?”",
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["Nego od pitanja:"],
            ["But from the question:"],
          ),
        },
        {
          type: "lead",
          text: L(
            "„Kako da napravimo sistem koji stalno gradi poverenje i otvara razgovore sa pravim kupcima?“",
            "“How do we build a system that constantly builds trust and opens conversations with the right buyers?”",
          ),
        },
        {
          type: "callout",
          variant: "default",
          text: L(
            "Referral-i su super. Ali predvidiv pipeline ne može da zavisi od toga da li će vas neko pomenuti u pravom trenutku.",
            "Referrals are great. But a predictable pipeline can’t depend on whether someone mentions you at the right moment.",
          ),
        },
      ],
    },
  ],
  faq: [
    {
      question: L(
        "Da li to znači da ne treba da tražimo referral-e?",
        "Does this mean we shouldn’t ask for referrals?",
      ),
      answer: L(
        "Naprotiv. Referral-i su odlični i treba ih aktivno tražiti. Poenta je da ne budu jedini način na koji pipeline nastaje.",
        "On the contrary. Referrals are excellent and you should actively ask for them. The point is they shouldn’t be the only way pipeline is created.",
      ),
    },
    {
      question: L(
        "Kako da znam da li smo zavisni od referral-a?",
        "How do I know if we’re dependent on referrals?",
      ),
      answer: L(
        "Ako bi pipeline stao kada bi prestale preporuke — ili ako ne možete da planirate sledeći kvartal bez „neko će nas pomenuti“ — onda ste u zavisnosti, ne u sistemu.",
        "If pipeline would stall when referrals stop — or you can’t plan the next quarter without “someone will mention us” — you’re in a dependency, not a system.",
      ),
    },
    {
      question: L(
        "Šta je prvi korak ako smo previše zavisni?",
        "What’s the first step if we’re too dependent?",
      ),
      answer: L(
        "Ne paničiti i ne graditi sve za 30 dana. Prvo jasno definišite ICP i problem koji otvarate — pa tek onda content, outreach i CRM. To je put koji sledi u narednim lekcijama.",
        "Don’t panic and don’t try to build everything in 30 days. First clearly define your ICP and the problem you open — then content, outreach, and CRM. That’s the path the next lessons follow.",
      ),
    },
  ],
  sources: [],
  relatedLessons: {
    next: {
      slug: "why-outbound-cant-work-alone",
      title: L(
        "Zašto outbound više ne može da radi sam",
        "Why Outbound Can’t Work Alone Anymore",
      ),
      note: L(
        "Sledeće: zašto jedna hladna poruka više nije dovoljna.",
        "Next: why one cold message is no longer enough.",
      ),
    },
    related: [
      {
        slug: "icp-who-you-actually-sell-to",
        title: L("ICP: kome zapravo prodajete", "ICP: Who You Actually Sell To"),
      },
      {
        slug: "flg-system-in-practice",
        title: L(
          "Ceo Founder Led Growth sistem u praksi",
          "The Full Founder Led Growth System in Practice",
        ),
      },
    ],
  },
  cta: {
    title: L(
      "Želiš sistem koji radi i bez preporuke?",
      "Want a system that works even without a referral?",
    ),
    body: L(
      "Možemo da ti pomognemo da pretvoriš Founder Led Growth playbook u konkretan pipeline sistem.",
      "We can help you turn the Founder Led Growth playbook into a concrete pipeline system.",
    ),
    primaryLabel: L("Zakaži konsultaciju", "Book a consultation"),
    secondaryLabel: L("Sledeća lekcija", "Next lesson"),
  },
  seoKeywords: P(
    [
      "referral sales sistem",
      "B2B referral zavisnost",
      "founder led growth",
      "predvidiv B2B pipeline",
      "zašto referral nije dovoljan",
    ],
    [
      "referral sales system",
      "B2B referral dependency",
      "founder led growth",
      "predictable B2B pipeline",
      "why referrals aren’t enough",
    ],
  ),
};
