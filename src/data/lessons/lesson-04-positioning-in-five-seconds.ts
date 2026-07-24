import type { RichLessonContent } from "@/types/rich-lesson";

const L = (sr: string, en: string) => ({ sr, en });
const P = (sr: string[], en: string[]) => ({ sr, en });

export const lesson04RichContent: RichLessonContent = {
  meta: {
    stage: L("Strategija", "Strategy"),
    readingTime: L("16–20 min", "16–20 min"),
    difficulty: L("Početnik–srednji", "Beginner–intermediate"),
    outcome: L(
      "Napišeš positioning koji kupac razume za nekoliko sekundi — kome, koji problem, zašto sada, zašto vi, koji dokaz.",
      "You’ll write positioning a buyer understands in a few seconds — who, which problem, why now, why you, which proof.",
    ),
    recommendedTools: L(
      "LinkedIn profil, sajt, outreach template",
      "LinkedIn profile, website, outreach template",
    ),
  },
  hero: {
    eyebrow: L("Lekcija 4", "Lesson 4"),
    title: L(
      "Positioning: šta kupac mora da razume za 5 sekundi",
      "Positioning: What Buyers Must Understand in 5 Seconds",
    ),
    paragraphs: P(
      [
        "Dobar positioning nije lep slogan. Dobar positioning je kada kupac za nekoliko sekundi razume šta radite, za koga, koji problem rešavate, zašto je to važno i zašto niste isti kao svi ostali.",
        "To zvuči jednostavno. Ali većina B2B firmi ovde ozbiljno zapne — ne zato što nemaju dobru uslugu, nego zato što je objašnjavaju iz svog ugla.",
      ],
      [
        "Good positioning isn’t a nice slogan. Good positioning is when a buyer understands in a few seconds what you do, for whom, which problem you solve, why it matters, and why you aren’t like everyone else.",
        "That sounds simple. But most B2B companies get stuck here — not because they lack a good offer, but because they explain it from their own angle.",
      ],
    ),
    callout: L(
      "Kupac ne kupuje vaš unutrašnji proces. Kupuje rešenje za problem koji trenutno oseća. Positioning mora da krene iz njegove glave.",
      "Buyers don’t buy your internal process. They buy a solution to a problem they currently feel. Positioning has to start from their head.",
    ),
  },
  toc: [
    { id: "kao-svi", title: L("Zvučite kao svi ostali", "You sound like everyone else") },
    { id: "ne-sve", title: L("Nije „šta sve možemo“", "Not “everything we can do”") },
    { id: "prepoznavanje", title: L("Kupac mora da se prepozna", "The buyer must recognize themselves") },
    { id: "pet-pitanja", title: L("Pet pitanja", "Five questions") },
    { id: "vidi-se-svuda", title: L("Mora da se vidi svuda", "It has to show up everywhere") },
    { id: "slab-vs-jak", title: L("Slab vs jak primer", "Weak vs strong example") },
    { id: "product-vs-usluga", title: L("Product vs usluga", "Product vs service") },
    { id: "test", title: L("Najbolji test", "The best test") },
    { id: "flg", title: L("Positioning u FLG-u", "Positioning in FLG") },
    { id: "checklist", title: L("Mini checklist", "Mini checklist") },
  ],
  blocks: [
    {
      type: "section",
      id: "kao-svi",
      title: L("Zvučite kao svi ostali", "You sound like everyone else"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Ako otvorite 10 sajtova B2B firmi iz iste industrije, često vidite iste rečenice:",
            ],
            [
              "If you open 10 websites from B2B companies in the same industry, you often see the same lines:",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "„Helping companies grow.“",
              "„Driving digital transformation.“",
              "„End-to-end solutions.“",
              "„Your trusted partner.“",
              "„We help businesses improve efficiency.“",
            ],
            [
              "“Helping companies grow.”",
              "“Driving digital transformation.”",
              "“End-to-end solutions.”",
              "“Your trusted partner.”",
              "“We help businesses improve efficiency.”",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Sve to može biti tačno. Ali ništa od toga ne pravi razliku. Kupac ne zna za koga ste najbolji, koji problem stvarno rešavate, šta radite drugačije, zašto bi pričao sa vama — i zašto sada.",
            ],
            [
              "All of that can be true. But none of it creates difference. The buyer doesn’t know who you’re best for, which problem you actually solve, what you do differently, why they should talk to you — and why now.",
            ],
          ),
        },
        {
          type: "lead",
          text: L(
            "Ako kupac mora previše da razmišlja da bi shvatio zašto ste relevantni, uglavnom neće razmišljati. Samo će otići dalje.",
            "If the buyer has to think too hard to understand why you’re relevant, they usually won’t think. They’ll just move on.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "ne-sve",
      title: L(
        "Nije „šta sve možemo“",
        "Not “everything we can do”",
      ),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Ovo je posebno teško firmama sa dobrim delivery-jem. One stvarno mogu mnogo toga — više industrija, više problema, različiti kupci, prilagođavanje.",
              "Ali tržište ne pamti fleksibilnost. Pamti jasnoću.",
            ],
            [
              "This is especially hard for companies with strong delivery. They really can do a lot — more industries, more problems, different buyers, adaptation.",
              "But the market doesn’t remember flexibility. It remembers clarity.",
            ],
          ),
        },
        {
          type: "fork-paths",
          versus: L("vs", "vs"),
          left: {
            label: L("Tačno, ali slabo", "True, but weak"),
            title: L(
              "„Radimo custom software za različite industrije.“",
              "“We build custom software for different industries.”",
            ),
            body: L(
              "Tačno. Ali nije dovoljno jako.",
              "True. But not strong enough.",
            ),
            tone: "danger",
          },
          right: {
            label: L("Jasno", "Clear"),
            title: L(
              "„Pomažemo logističkim firmama da digitalizuju operacije koje se i dalje vode kroz Excel, email i ručne procese.“",
              "“We help logistics companies digitize operations still run through Excel, email, and manual processes.”",
            ),
            body: L(
              "Odmah znamo ko je kupac, koji problem ima i zašto razgovor ima smisla.",
              "We immediately know who the buyer is, which problem they have, and why a conversation makes sense.",
            ),
            tone: "accent",
          },
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "Dobar positioning ne mora da obuhvati sve što možete. Treba da otvori vrata sa najjačim problemom koji tržište razume. Kasnije na call-u možete širiti priču.",
            "Good positioning doesn’t have to cover everything you can do. It should open the door with the strongest problem the market understands. You can expand the story later on the call.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "prepoznavanje",
      title: L(
        "Kupac mora da se prepozna",
        "The buyer must recognize themselves",
      ),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Najbolji positioning često ne zvuči kao opis firme. Zvuči kao rečenica koju bi kupac rekao sam sebi.",
            ],
            [
              "The best positioning often doesn’t sound like a company description. It sounds like a sentence the buyer would say to themselves.",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Loše: „Pomažemo B2B firmama kroz integrisane growth strategije.“",
              "Bolje: „Pomažemo B2B firmama koje zavise od preporuka da naprave predvidiv sales pipeline.“",
            ],
            [
              "Weak: “We help B2B companies through integrated growth strategies.”",
              "Stronger: “We help B2B companies that depend on referrals build a predictable sales pipeline.”",
            ],
          ),
        },
        {
          type: "big-statement",
          variant: "accent",
          eyebrow: L("Cilj", "Goal"),
          statement: L(
            "Kupac odmah može da pomisli: „Da, to smo mi.“",
            "The buyer can immediately think: “Yes — that’s us.”",
          ),
          support: L(
            "Positioning ne treba samo da objasni šta radite. Treba da napravi prepoznavanje. Bez pažnje nema ni sales razgovora.",
            "Positioning shouldn’t only explain what you do. It should create recognition. Without attention, there’s no sales conversation.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "pet-pitanja",
      title: L("Pet pitanja", "Five questions"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Pre contenta, outreach-a ili ads-a, morate imati jasan odgovor na ovih pet pitanja.",
            ],
            [
              "Before content, outreach, or ads, you need a clear answer to these five questions.",
            ],
          ),
        },
        {
          type: "pipeline-flow",
          title: L("Okvir positioning-a", "Positioning framework"),
          stages: [
            L("Kome?", "Who?"),
            L("Problem?", "Problem?"),
            L("Zašto sada?", "Why now?"),
            L("Zašto mi?", "Why us?"),
            L("Dokaz?", "Proof?"),
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "1. Kome tačno pomažemo? — Ne „svim firmama“. Nego kom tipu firme ste najrelevantniji sada (npr. B2B SaaS bez stabilnog pipeline-a, IT custom development koji zvuči kao svi, uslužne firme zavisne od referral-a).",
              "2. Koji problem rešavamo? — Ne opis usluge. Problem. Ne „radimo LinkedIn content“, nego „kupac proveri profil i ne vidi dovoljno razloga da vam veruje“. Kupac ne kupuje aktivnost — kupuje rešavanje problema.",
              "3. Zašto je problem bitan sada? — Urgency. Bez nje: „zvuči zanimljivo, ali nije prioritet.“ Positioning mora da pokaže cenu neaktivnosti: šta se loše dešava ako ovo ne reše.",
              "4. Zašto smo drugačiji? — Ne mora biti revolucionarno, ali mora biti jasno zašto niste još jedna opcija. Fokus, metodologija ili integracija. Ako kupac ne vidi razliku, porediće vas po ceni.",
              "5. Koji dokaz imamo? — Case study, brojke, pre/posle, iskustvo sa sličnim firmama — ili insight koji pokazuje da razumete tržište. Dokaz kroz razumevanje često pogađa jače od prazne tvrdnje.",
            ],
            [
              "1. Who exactly do we help? — Not “all companies.” Which type of company you’re most relevant for now (e.g. B2B SaaS without a stable pipeline, IT custom development that sounds like everyone else, service firms dependent on referrals).",
              "2. Which problem do we solve? — Not a service description. A problem. Not “we do LinkedIn content,” but “the buyer checks the profile and doesn’t see enough reason to trust you.” Buyers don’t buy activity — they buy problem-solving.",
              "3. Why does the problem matter now? — Urgency. Without it: “interesting, but not a priority.” Positioning must show the cost of inaction: what goes wrong if they don’t fix this.",
              "4. Why are we different? — It doesn’t have to be revolutionary, but it must be clear why you aren’t just another option. Focus, methodology, or integration. If the buyer doesn’t see the difference, they’ll compare on price.",
              "5. What proof do we have? — Case study, numbers, before/after, experience with similar companies — or an insight that shows you understand the market. Proof through understanding often hits harder than an empty claim.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "vidi-se-svuda",
      title: L("Mora da se vidi svuda", "It has to show up everywhere"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Positioning nije samo rečenica na sajtu. Mora da se vidi u LinkedIn headline-u, About-u, founder contentu, outreach poruci, webinar temi, case study-ju, pitch deck-u, follow-up-u, sales call-u i CRM segmentima.",
              "Ako živi samo u jednom dokumentu, ne znači ništa. Kupac mora više puta da vidi istu jasnu poruku kroz različite touchpoint-e. Tek tada počinje da pamti.",
            ],
            [
              "Positioning isn’t just a line on the website. It has to show up in the LinkedIn headline, About, founder content, outreach message, webinar theme, case study, pitch deck, follow-up, sales call, and CRM segments.",
              "If it only lives in one document, it means nothing. The buyer needs to see the same clear message across touchpoints. Only then do they start to remember.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "slab-vs-jak",
      title: L("Slab vs jak primer", "Weak vs strong example"),
      blocks: [
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("Slabo", "Weak"),
              subtitle: L("Preširoko · kao svi", "Too broad · like everyone"),
              variant: "muted",
              items: P(
                [
                  "„Growth agencija koja pomaže firmama da povećaju prodaju kroz LinkedIn, content i automatizacije.“",
                  "Ne znamo za koga je",
                  "Ne znamo koji problem",
                  "Ne znamo zašto sada",
                ],
                [
                  "“A growth agency that helps companies increase sales through LinkedIn, content, and automation.”",
                  "We don’t know who it’s for",
                  "We don’t know which problem",
                  "We don’t know why now",
                ],
              ),
            },
            {
              title: L("Jače", "Stronger"),
              subtitle: L("Jasan kupac · jasan ishod", "Clear buyer · clear outcome"),
              variant: "accent",
              items: P(
                [
                  "„Pomažemo B2B firmama koje zavise od preporuka da naprave predvidiv sales pipeline kroz founder content, signal-based outreach i CRM.“",
                  "Jasno kome",
                  "Jasno koji problem",
                  "Jasno da je sistem, ne samo content",
                ],
                [
                  "“We help B2B companies that depend on referrals build a predictable sales pipeline through founder content, signal-based outreach, and CRM.”",
                  "Clear who",
                  "Clear which problem",
                  "Clear it’s a system, not just content",
                ],
              ),
            },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Još preciznije za jedan segment: „Pomažemo B2B uslužnim firmama od 10–50 ljudi da prestanu da zavise od referral-a i naprave sistem koji svaki mesec otvara razgovore sa pravim kupcima.“",
              "To možda ne pokriva sve što radite. Ali pogađa mnogo jače.",
            ],
            [
              "Even more precise for one segment: “We help B2B service firms with 10–50 people stop depending on referrals and build a system that opens conversations with the right buyers every month.”",
              "That may not cover everything you do. But it hits much harder.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "product-vs-usluga",
      title: L("Product vs usluga", "Product vs service"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Ako prodajete uslugu, kupac najviše kupuje poverenje — da razumete problem, imate proces i možete da isporučite. Positioning treba da naglasi za koga ste dobri, koji problem, kako razmišljate drugačije, koji proces i kakve rezultate.",
              "Ako prodajete product, kupac kupuje promenu ponašanja — mora da napusti stari način i uvede novi workflow. Positioning više naglašava zašto stari način ne radi, skrivenu cenu trenutnog procesa, zašto je sada trenutak, šta se menja pre/posle, i zašto je vaš product najjednostavniji put.",
            ],
            [
              "If you sell a service, the buyer mostly buys trust — that you understand the problem, have a process, and can deliver. Positioning should stress who you’re good for, which problem, how you think differently, which process, and what results.",
              "If you sell a product, the buyer buys a behavior change — they must leave the old way and adopt a new workflow. Positioning emphasizes why the old way fails, the hidden cost of the current process, why now, what changes before/after, and why your product is the simplest path.",
            ],
          ),
        },
        {
          type: "table",
          caption: L(
            "Različit put do razgovora",
            "Different path to the conversation",
          ),
          headers: [
            L("Tip", "Type"),
            L("Tok", "Flow"),
          ],
          rows: [
            {
              cells: [
                L("Usluga", "Service"),
                L("poverenje → problem → razgovor", "trust → problem → conversation"),
              ],
            },
            {
              cells: [
                L("Product", "Product"),
                L("problem → urgency → demo", "problem → urgency → demo"),
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "default",
          text: L(
            "Ako ovo pomešate, poruka deluje čudno. Product zvuči kao pitch bez konteksta. Usluga zvuči hladno i feature-driven.",
            "If you mix these up, the message feels odd. Product sounds like a pitch without context. Service sounds cold and feature-driven.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "test",
      title: L("Najbolji test", "The best test"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Najbolji test nije da li vama lepo zvuči. Najbolji test je da li kupac može da ponovi šta radite svojim rečima.",
            ],
            [
              "The best test isn’t whether it sounds nice to you. The best test is whether the buyer can repeat what you do in their own words.",
            ],
          ),
        },
        {
          type: "fork-paths",
          versus: L("vs", "vs"),
          left: {
            label: L("Nejasno", "Unclear"),
            title: L(
              "„Znači vi radite marketing?“ / „Znači ste LinkedIn agencija?“",
              "“So you do marketing?” / “So you’re a LinkedIn agency?”",
            ),
            body: L(
              "Positioning nije dovoljno jasan. Stalno objašnjavate od nule.",
              "Positioning isn’t clear enough. You keep explaining from scratch.",
            ),
            tone: "danger",
          },
          right: {
            label: L("Radi", "It works"),
            title: L(
              "„Vi pomažete firmama kao naša da reše X bez Y haosa.“",
              "“You help companies like ours solve X without Y chaos.”",
            ),
            body: L(
              "Kupac može da ponovi posle 30 sekundi. Pogrešna tumačenja padaju.",
              "The buyer can repeat it after 30 seconds. Misreadings drop.",
            ),
            tone: "accent",
          },
        },
      ],
    },
    {
      type: "section",
      id: "flg",
      title: L("Positioning u FLG-u", "Positioning in FLG"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "U Founder-Led Growth-u positioning nije izolovan branding zadatak. On diktira ceo sistem: content teme, outreach poruke, webinar naslove, case study uglove, follow-up sekvence, lead scoring i sales call strukturu.",
              "Ako je positioning slab, sve posle njega mora više da se muči — generički content, outreach kao pitch, webinar bez hook-a, follow-up bez novog razloga, sales koji stalno objašnjava zašto ste relevantni.",
            ],
            [
              "In Founder-Led Growth, positioning isn’t an isolated branding task. It drives the whole system: content themes, outreach messages, webinar titles, case study angles, follow-up sequences, lead scoring, and sales call structure.",
              "If positioning is weak, everything after it has to work harder — generic content, outreach as a pitch, a webinar without a hook, follow-up with nothing new, sales constantly explaining why you’re relevant.",
            ],
          ),
        },
        {
          type: "big-statement",
          variant: "quiet",
          eyebrow: L("Zašto pre skaliranja", "Why before scaling"),
          statement: L(
            "Loš positioning posle toga plaćate kroz svaki slab reply, svaki loš call i svaki izgubljen deal.",
            "Weak positioning is paid later through every weak reply, every bad call, and every lost deal.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "checklist",
      title: L("Mini checklist", "Mini checklist"),
      blocks: [
        {
          type: "checklist",
          title: L(
            "Pre sales kampanje",
            "Before a sales campaign",
          ),
          items: P(
            [
              "Kome tačno pomažemo?",
              "Koji konkretan problem rešavamo?",
              "Kako kupac danas opisuje taj problem svojim rečima?",
              "Šta se loše dešava ako problem ne reši?",
              "Zašto je sada pravi trenutak?",
              "Koja je pogrešna alternativa koju kupac trenutno koristi?",
              "Zašto je naš pristup drugačiji?",
              "Koji dokaz imamo?",
              "Da li se poruka vidi na profilu, sajtu, contentu, outreach-u i call-u?",
              "Da li kupac može da objasni šta radimo posle 30 sekundi?",
            ],
            [
              "Who exactly do we help?",
              "Which concrete problem do we solve?",
              "How does the buyer describe that problem in their own words today?",
              "What goes wrong if they don’t solve it?",
              "Why is now the right moment?",
              "What’s the wrong alternative the buyer currently uses?",
              "Why is our approach different?",
              "What proof do we have?",
              "Does the message show up on profile, site, content, outreach, and the call?",
              "Can the buyer explain what we do after 30 seconds?",
            ],
          ),
        },
        {
          type: "lead",
          text: L(
            "Više poruka neće popraviti nejasnu poziciju. Samo će više ljudi zbuniti brže.",
            "More messages won’t fix unclear positioning. They’ll just confuse more people faster.",
          ),
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Positioning nije kozmetika. Positioning je razlog zašto kupac uopšte odluči da obrati pažnju.",
            "Positioning isn’t cosmetics. Positioning is the reason a buyer decides to pay attention at all.",
          ),
        },
      ],
    },
  ],
  faq: [
    {
      question: L(
        "Da li positioning mora da pokrije sve što radimo?",
        "Does positioning have to cover everything we do?",
      ),
      answer: L(
        "Ne. Prvi kontakt treba da otvori vrata najjačim problemom. Na sales call-u možete širiti šta još radite.",
        "No. First contact should open the door with the strongest problem. On the sales call you can expand what else you do.",
      ),
    },
    {
      question: L(
        "Koliko duga treba da bude positioning rečenica?",
        "How long should the positioning line be?",
      ),
      answer: L(
        "Dovoljno kratka da kupac razume za nekoliko sekundi — i dovoljno konkretna da se prepozna. Ako mora da „dekodira“, skratite i suzite.",
        "Short enough for a few seconds of understanding — and concrete enough for recognition. If they have to “decode” it, shorten and narrow.",
      ),
    },
    {
      question: L(
        "Šta ako različiti segmenti trebaju drugačiji positioning?",
        "What if different segments need different positioning?",
      ),
      answer: L(
        "To je u redu — kao u ICP lekciji. Isti sistem, drugačiji ugao po segmentu. Nemojte jednu generičku rečenicu za sve.",
        "That’s fine — like in the ICP lesson. Same system, different angle per segment. Don’t use one generic line for everyone.",
      ),
    },
  ],
  sources: [],
  relatedLessons: {
    previous: {
      slug: "icp-who-you-actually-sell-to",
      title: L("ICP: kome zapravo prodajete", "ICP: Who You Actually Sell To"),
    },
    next: {
      slug: "founder-content-trust-before-message",
      title: L(
        "Founder content: poverenje pre poruke",
        "Founder Content: Trust Before the Message",
      ),
      note: L(
        "Sledeće: kako content gradi poverenje pre outreach-a.",
        "Next: how content builds trust before outreach.",
      ),
    },
    related: [
      {
        slug: "why-outbound-cant-work-alone",
        title: L(
          "Zašto outbound više ne može da radi sam",
          "Why Outbound Can’t Work Alone Anymore",
        ),
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
      "Želiš positioning koji kupac ponovi posle 30 sekundi?",
      "Want positioning a buyer can repeat after 30 seconds?",
    ),
    body: L(
      "Možemo da povežemo ICP, positioning i poruke kroz profil, content i outreach.",
      "We can connect ICP, positioning, and messaging across profile, content, and outreach.",
    ),
    primaryLabel: L("Zakaži konsultaciju", "Book a consultation"),
    secondaryLabel: L("Sledeća lekcija", "Next lesson"),
  },
  seoKeywords: P(
    [
      "B2B positioning",
      "value proposition 5 sekundi",
      "diferencijacija B2B",
      "founder led growth positioning",
      "slab vs jak positioning",
    ],
    [
      "B2B positioning",
      "5-second value proposition",
      "B2B differentiation",
      "founder led growth positioning",
      "weak vs strong positioning",
    ],
  ),
};
