import type { RichLessonContent } from "@/types/rich-lesson";

const L = (sr: string, en: string) => ({ sr, en });
const P = (sr: string[], en: string[]) => ({ sr, en });

export const lesson02RichContent: RichLessonContent = {
  meta: {
    stage: L("Temelj", "Foundation"),
    readingTime: L("8–10 min", "8–10 min"),
    difficulty: L("Početnik", "Beginner"),
    outcome: L(
      "Razumećeš zašto outbound nije mrtav — ali zašto jedna hladna poruka više ne može da uradi ceo posao poverenja.",
      "You’ll understand why outbound isn’t dead — but why one cold message can’t carry the full trust job anymore.",
    ),
    recommendedTools: L(
      "LinkedIn, CRM, content sistem",
      "LinkedIn, CRM, content system",
    ),
  },
  hero: {
    eyebrow: L("Lekcija 2", "Lesson 2"),
    title: L(
      "Zašto outbound više ne može da radi sam",
      "Why Outbound Can’t Work Alone Anymore",
    ),
    paragraphs: P(
      [
        "Pre nekoliko godina, outbound je bio mnogo jednostavniji. Nađete listu. Pošaljete poruku. Uradi se par follow-up-ova. Neko odgovori. Zakaže se call.",
        "Naravno, nikada nije bilo baš lako. Ali tržište nije bilo ovoliko zagušeno.",
      ],
      [
        "A few years ago, outbound was much simpler. Find a list. Send a message. Do a few follow-ups. Someone replies. A call gets booked.",
        "Of course, it was never exactly easy. But the market wasn’t this crowded.",
      ],
    ),
    callout: L(
      "Danas kupac više ne čita većinu poruka kao ponudu. Čita ih kao šum.",
      "Today, buyers don’t read most messages as an offer. They read them as noise.",
    ),
  },
  toc: [
    { id: "kako-je-bilo", title: L("Kako je nekad radilo", "How it used to work") },
    { id: "sum", title: L("Zašto je sada šum", "Why it’s noise now") },
    { id: "previše-za-jednu-poruku", title: L("Previše za jednu poruku", "Too much for one message") },
    { id: "deo-sistema", title: L("Outbound kao deo sistema", "Outbound as part of a system") },
    { id: "nastavak-konteksta", title: L("Poruka kao nastavak konteksta", "The message as continued context") },
    { id: "pravo-pitanje", title: L("Pravo pitanje", "The right question") },
  ],
  blocks: [
    {
      type: "section",
      id: "kako-je-bilo",
      title: L("Kako je nekad radilo", "How it used to work"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Model je bio linearan i dovoljno čist da radi.",
            ],
            [
              "The model was linear — and clean enough to work.",
            ],
          ),
        },
        {
          type: "workflow",
          title: L("Stari outbound ritam", "The old outbound rhythm"),
          steps: P(
            [
              "Nađete listu",
              "Pošaljete poruku",
              "Uradite par follow-up-ova",
              "Neko odgovori",
              "Zakaže se call",
            ],
            [
              "Find a list",
              "Send a message",
              "Do a few follow-ups",
              "Someone replies",
              "A call gets booked",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "sum",
      title: L("Zašto je sada šum", "Why it’s noise now"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Danas svaki decision maker dobija previše poruka. Svi nude nešto.",
            ],
            [
              "Today every decision maker gets too many messages. Everyone is offering something.",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "Svi imaju „AI solution“.",
              "Svi „pomažu firmama da rastu“.",
              "Svi „povećavaju efikasnost“.",
              "Svi „štede vreme“.",
              "Svi traže „quick call“.",
            ],
            [
              "Everyone has an “AI solution.”",
              "Everyone “helps companies grow.”",
              "Everyone “increases efficiency.”",
              "Everyone “saves time.”",
              "Everyone asks for a “quick call.”",
            ],
          ),
        },
        {
          type: "lead",
          text: L(
            "Kupac više ne čita većinu poruka kao ponudu. Čita ih kao šum.",
            "Buyers don’t read most messages as an offer. They read them as noise.",
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Zato outbound sam sve teže radi. Ne zato što je outbound mrtav — nego zato što jedna poruka više ne može da uradi ceo posao.",
            ],
            [
              "That’s why outbound alone is getting harder. Not because outbound is dead — but because one message can no longer do the whole job.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "previše-za-jednu-poruku",
      title: L("Previše za jednu poruku", "Too much for one message"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Ako kupac nikada nije čuo za vas, outreach poruka mora da uradi sve odjednom:",
            ],
            [
              "If the buyer has never heard of you, the outreach message has to do everything at once:",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "objasni ko ste,",
              "objasni problem,",
              "dokaže da ste relevantni,",
              "izgradi poverenje,",
              "diferencira vas od konkurencije,",
              "i pokrene razgovor.",
            ],
            [
              "explain who you are,",
              "explain the problem,",
              "prove you’re relevant,",
              "build trust,",
              "differentiate you from competitors,",
              "and start a conversation.",
            ],
          ),
        },
        {
          type: "big-statement",
          variant: "danger",
          eyebrow: L("Realnost", "Reality"),
          statement: L(
            "Sve u nekoliko rečenica. To je previše.",
            "All in a few sentences. That’s too much.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "deo-sistema",
      title: L("Outbound kao deo sistema", "Outbound as part of a system"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Zato mi outbound ne gledamo kao izolovan kanal. Gledamo ga kao deo šireg sistema.",
            ],
            [
              "That’s why we don’t treat outbound as an isolated channel. We treat it as part of a wider system.",
            ],
          ),
        },
        {
          type: "checklist",
          title: L(
            "Šta treba da podrži poruku",
            "What needs to support the message",
          ),
          items: P(
            [
              "Founder content gradi poverenje pre poruke",
              "LinkedIn profil potvrđuje ono što piše u poruci",
              "Case study smanjuje rizik",
              "Webinar edukuje ljude koji nisu spremni odmah",
              "CRM prati ko se zagreva",
              "Follow-up dodaje novi razlog za odgovor — ne „samo proveravam“",
            ],
            [
              "Founder content builds trust before the message",
              "The LinkedIn profile confirms what the message says",
              "A case study reduces risk",
              "A webinar educates people who aren’t ready yet",
              "CRM tracks who’s warming up",
              "Follow-up adds a new reason to reply — not “just checking in”",
            ],
          ),
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "Tada outbound ima mnogo veću šansu. Jer poruka više nije prvi i jedini kontakt — ona je nastavak konteksta.",
            "Then outbound has a much better chance. Because the message is no longer the first and only contact — it’s a continuation of context.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "nastavak-konteksta",
      title: L(
        "Poruka kao nastavak konteksta",
        "The message as continued context",
      ),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Kupac možda već zna ime founder-a. Možda je video post. Možda je pogledao video. Možda je bio na webinaru. Možda je neko iz njegovog tima već dobio poruku. Možda ste mu već nekoliko puta iskočili sa relevantnim temama.",
              "I onda kada poruka stigne, ne deluje kao potpuno hladan pitch. Deluje poznatije.",
              "To je velika razlika.",
            ],
            [
              "The buyer may already know the founder’s name. Maybe they saw a post. Maybe they watched a video. Maybe they attended a webinar. Maybe someone on their team already got a message. Maybe you’ve shown up a few times with relevant themes.",
              "And then when the message arrives, it doesn’t feel like a completely cold pitch. It feels more familiar.",
              "That’s a big difference.",
            ],
          ),
        },
        {
          type: "big-statement",
          variant: "accent",
          eyebrow: L("Teza", "Thesis"),
          statement: L(
            "Outbound nije mrtav.",
            "Outbound isn’t dead.",
          ),
          support: L(
            "Ali outbound bez poverenja, bez jasnog ICP-a, bez contenta, bez follow-up sistema i bez CRM signala postaje sve skuplji i sve teži.",
            "But outbound without trust, without a clear ICP, without content, without a follow-up system, and without CRM signals gets more expensive and harder.",
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
            ["Zato pitanje nije:"],
            ["So the question isn’t:"],
          ),
        },
        {
          type: "lead",
          text: L(
            "„Da li outbound radi?“",
            "“Does outbound work?”",
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            ["Pitanje je:"],
            ["The question is:"],
          ),
        },
        {
          type: "lead",
          text: L(
            "„Da li imate sistem koji pomaže outbound-u da radi?“",
            "“Do you have a system that helps outbound work?”",
          ),
        },
      ],
    },
  ],
  faq: [
    {
      question: L(
        "Da li to znači da treba da prestanemo sa outreach-om?",
        "Does this mean we should stop doing outreach?",
      ),
      answer: L(
        "Ne. Outreach i dalje otvara razgovore. Poenta je da ga ne šaljete kao jedini kontakt u prazan prostor — nego kao deo sistema koji već gradi poverenje.",
        "No. Outreach still opens conversations. The point is not to send it as the only contact into empty space — but as part of a system that already builds trust.",
      ),
    },
    {
      question: L(
        "Šta prvo da dodamo oko outbound-a?",
        "What should we add around outbound first?",
      ),
      answer: L(
        "Najčešće: jasan ICP, LinkedIn profil koji potvrđuje poruku, i content koji kupcu daje razlog da vas zapamti pre nego što stigne outreach.",
        "Most often: a clear ICP, a LinkedIn profile that confirms the message, and content that gives the buyer a reason to remember you before outreach arrives.",
      ),
    },
    {
      question: L(
        "Kako znamo da sistem pomaže outbound-u?",
        "How do we know the system is helping outbound?",
      ),
      answer: L(
        "Kada reply-evi više ne zavise samo od „srećne“ prve poruke — nego vidite da ljudi prepoznaju ime, otvaraju profil, reaguju na content ili dolaze topliji u razgovor.",
        "When replies no longer depend only on a “lucky” first message — and you see people recognizing the name, opening the profile, engaging with content, or entering conversations warmer.",
      ),
    },
  ],
  sources: [],
  relatedLessons: {
    previous: {
      slug: "why-referrals-are-not-a-sales-system",
      title: L(
        "Zašto referral-i nisu sales sistem",
        "Why Referrals Are Not a Sales System",
      ),
    },
    next: {
      slug: "icp-who-you-actually-sell-to",
      title: L("ICP: kome zapravo prodajete", "ICP: Who You Actually Sell To"),
      note: L(
        "Sledeće: kome zapravo prodajete — ne „svima“.",
        "Next: who you actually sell to — not “everyone.”",
      ),
    },
    related: [
      {
        slug: "founder-content-trust-before-message",
        title: L(
          "Founder content: poverenje pre poruke",
          "Founder Content: Trust Before the Message",
        ),
      },
      {
        slug: "signal-based-outreach",
        title: L(
          "Outreach po signalima",
          "Signal-Based Outreach",
        ),
      },
    ],
  },
  cta: {
    title: L(
      "Želiš outbound koji radi uz sistem, ne protiv šuma?",
      "Want outbound that works with a system, not against the noise?",
    ),
    body: L(
      "Možemo da povežemo content, profil, follow-up i CRM tako da poruka više nije usamljena.",
      "We can connect content, profile, follow-up, and CRM so the message isn’t alone anymore.",
    ),
    primaryLabel: L("Zakaži konsultaciju", "Book a consultation"),
    secondaryLabel: L("Sledeća lekcija", "Next lesson"),
  },
  seoKeywords: P(
    [
      "outbound nije mrtav",
      "B2B outreach šum",
      "founder led growth outbound",
      "outbound + content sistem",
      "zašto cold outreach ne radi sam",
    ],
    [
      "outbound is not dead",
      "B2B outreach noise",
      "founder led growth outbound",
      "outbound + content system",
      "why cold outreach can’t work alone",
    ],
  ),
};
