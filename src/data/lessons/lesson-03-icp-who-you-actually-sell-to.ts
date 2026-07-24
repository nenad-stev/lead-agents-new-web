import type { RichLessonContent } from "@/types/rich-lesson";

const L = (sr: string, en: string) => ({ sr, en });
const P = (sr: string[], en: string[]) => ({ sr, en });

export const lesson03RichContent: RichLessonContent = {
  meta: {
    stage: L("Strategija", "Strategy"),
    readingTime: L("14–18 min", "14–18 min"),
    difficulty: L("Početnik–srednji", "Beginner–intermediate"),
    outcome: L(
      "Definišeš ICP kroz pet slojeva — firmografija, problem, timing, buyer i kanal — umesto „radimo sa B2B firmama“.",
      "You’ll define ICP through five layers — firmographics, problem, timing, buyer, and channel — instead of “we work with B2B companies.”",
    ),
    recommendedTools: L(
      "CRM, LinkedIn Sales Navigator, lista segmenata",
      "CRM, LinkedIn Sales Navigator, segment list",
    ),
  },
  hero: {
    eyebrow: L("Lekcija 3", "Lesson 3"),
    title: L(
      "ICP: kome zapravo prodajete",
      "ICP: Who You Actually Sell To",
    ),
    paragraphs: P(
      [
        "Većina B2B firmi kaže da zna kome prodaje. Ali kada ih pitaš da opišu idealnog kupca, odgovor često bude preširok.",
        "„Radimo sa SME firmama.“ „Ciljamo B2B kompanije.“ „Naš kupac je svaka firma koja ima sales tim.“",
      ],
      [
        "Most B2B companies say they know who they sell to. But when you ask them to describe the ideal buyer, the answer is often too broad.",
        "“We work with SMEs.” “We target B2B companies.” “Our buyer is any company with a sales team.”",
      ],
    ),
    callout: L(
      "To zvuči logično. Ali za sales sistem je preširoko. Jer ako prodajete svima, poruka nikome ne pogađa dovoljno jako.",
      "It sounds logical. But for a sales system it’s too broad. Because if you sell to everyone, the message doesn’t hit anyone hard enough.",
    ),
  },
  toc: [
    { id: "previroko", title: L("Preširok ICP", "An ICP that’s too broad") },
    { id: "pravo-pitanje", title: L("Pravo pitanje", "The real question") },
    { id: "pet-slojeva", title: L("Pet slojeva", "Five layers") },
    { id: "firmografija", title: L("1. Firmografski fit", "1. Firmographic fit") },
    { id: "problem", title: L("2. Problem fit", "2. Problem fit") },
    { id: "timing", title: L("3. Timing fit", "3. Timing fit") },
    { id: "buyer", title: L("4. Buyer fit", "4. Buyer fit") },
    { id: "kanal", title: L("5. Channel fit", "5. Channel fit") },
    { id: "segmenti", title: L("Jedna poruka ≠ ceo ICP", "One message ≠ the whole ICP") },
    { id: "flg-icp", title: L("ICP u Founder-Led Growth-u", "ICP in Founder-Led Growth") },
    { id: "checklist", title: L("Mini checklist", "Mini checklist") },
  ],
  blocks: [
    {
      type: "section",
      id: "previroko",
      title: L("Preširok ICP", "An ICP that’s too broad"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "ICP nije samo industrija. Nije samo veličina firme. Nije samo job title.",
            ],
            [
              "ICP isn’t just industry. It isn’t just company size. It isn’t just job title.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "pravo-pitanje",
      title: L("Pravo pitanje", "The real question"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Dobar ICP odgovara na mnogo konkretnije pitanje od „ko bi mogao da koristi našu uslugu?“",
            ],
            [
              "A good ICP answers a much more concrete question than “who could use our service?”",
            ],
          ),
        },
        {
          type: "big-statement",
          variant: "accent",
          eyebrow: L("Definicija", "Definition"),
          statement: L(
            "Koja firma trenutno ima problem koji mi najbolje rešavamo, ima razlog da ga rešava sada i ima kapacitet da plati rešenje?",
            "Which company currently has a problem we solve best, has a reason to solve it now, and has the capacity to pay for the solution?",
          ),
          support: L(
            "Mnogo firmi bi moglo da koristi vašu uslugu. To ne znači da su dobri kupci.",
            "Many companies could use your service. That doesn’t mean they’re good buyers.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "pet-slojeva",
      title: L("Pet slojeva", "Five layers"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Dobar ICP ima nekoliko slojeva. Firmografija je samo početak.",
            ],
            [
              "A good ICP has several layers. Firmographics are only the start.",
            ],
          ),
        },
        {
          type: "pipeline-flow",
          title: L("Slojevi ICP-a", "ICP layers"),
          stages: [
            L("Firmografija", "Firmographics"),
            L("Problem", "Problem"),
            L("Timing", "Timing"),
            L("Buyer", "Buyer"),
            L("Kanal", "Channel"),
          ],
        },
      ],
    },
    {
      type: "section",
      id: "firmografija",
      title: L("1. Firmografski fit", "1. Firmographic fit"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Ovo je osnovni nivo: industrija, veličina, geografija, broj zaposlenih, revenue, tip kupaca, B2B ili B2C, high-ticket ili low-ticket, da li imaju sales ili marketing tim, da li founder još uvek vodi prodaju.",
              "Korisno — ali nije dovoljno.",
              "„B2B firma od 11–200 zaposlenih“ može biti dobar filter za početak. Ali među njima nisu isti kupci:",
            ],
            [
              "This is the base layer: industry, size, geography, headcount, revenue, customer type, B2B or B2C, high-ticket or low-ticket, whether they have a sales or marketing team, whether the founder still runs sales.",
              "Useful — but not enough.",
              "“B2B company with 11–200 employees” can be a good starting filter. But inside that bucket, buyers aren’t the same:",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "rastu brzo ili stagniraju,",
              "zavise od referral-a ili imaju jak inbound,",
              "nemaju sales sistem ili imaju tim sa lošim podacima,",
              "imaju dobar proizvod ali lošu distribuciju,",
              "imaju founder-a aktivnog na LinkedIn-u — ili onog koji ne želi da bude vidljiv.",
            ],
            [
              "growing fast or stagnating,",
              "dependent on referrals or strong on inbound,",
              "no sales system, or a team with bad data,",
              "a good product but weak distribution,",
              "a founder active on LinkedIn — or one who doesn’t want to be visible.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "default",
          text: L(
            "To nisu isti kupci. I ne treba da dobiju istu poruku.",
            "These aren’t the same buyers. And they shouldn’t get the same message.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "problem",
      title: L("2. Problem fit", "2. Problem fit"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Ovo je mnogo važnije. Ne tražimo samo firmu koja može da kupi. Tražimo firmu koja ima problem koji dovoljno boli.",
              "Za Founder-Led Growth, dobar problem fit može biti:",
            ],
            [
              "This matters much more. We’re not only looking for a company that can buy. We’re looking for a company with a problem that hurts enough.",
              "For Founder-Led Growth, strong problem fit can look like:",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "firma zavisi od referral-a,",
              "nema predvidiv pipeline,",
              "outbound im ne radi,",
              "founder je i dalje glavni sales kanal,",
              "sales tim nema dovoljno kvalitetnih razgovora,",
              "imaju dobar delivery ali slabu distribuciju,",
              "imaju expertise ali tržište to ne vidi,",
              "objavljuju content koji nije povezan sa prodajom,",
              "CRM postoji, ali ne pokazuje buying signals.",
            ],
            [
              "the company depends on referrals,",
              "no predictable pipeline,",
              "outbound isn’t working,",
              "the founder is still the main sales channel,",
              "the sales team doesn’t get enough quality conversations,",
              "strong delivery but weak distribution,",
              "expertise the market doesn’t see,",
              "content that isn’t connected to sales,",
              "CRM exists but doesn’t show buying signals.",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Ovo su jači signali od same industrije. Firma može biti u „idealnoj“ industriji bez urgentnog problema — i teško će kupiti. Ili van „savršenog“ segmenta, ali sa jakim problemom i timingom — i biti odličan kupac.",
            ],
            [
              "These are stronger signals than industry alone. A company can sit in the “ideal” industry without an urgent problem — and still be hard to sell. Or sit outside the “perfect” segment with a sharp problem and timing — and be an excellent buyer.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "timing",
      title: L("3. Timing fit", "3. Timing fit"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Ovo većina firmi preskoči. Nije dovoljno da neko ima problem. Pitanje je: zašto bi ga rešavao sada?",
            ],
            [
              "Most companies skip this. It’s not enough that someone has a problem. The question is: why would they solve it now?",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "otišao veliki klijent,",
              "novi Head of Sales,",
              "investicija ili širenje tima,",
              "ulazak na novo tržište,",
              "referral-i više nisu dovoljni,",
              "outbound je stao,",
              "founder više ne može sam da nosi sales,",
              "razočaranje u agenciju,",
              "novi proizvod koji treba da se komercijalizuje.",
            ],
            [
              "a big client left,",
              "a new Head of Sales,",
              "investment or team expansion,",
              "entering a new market,",
              "referrals aren’t enough anymore,",
              "outbound stalled,",
              "the founder can’t carry sales alone,",
              "disappointment with an agency,",
              "a new product that needs commercialization.",
            ],
          ),
        },
        {
          type: "lead",
          text: L(
            "To su buying signals.",
            "Those are buying signals.",
          ),
        },
        {
          type: "fork-paths",
          versus: L("vs", "vs"),
          left: {
            label: L("Obična lista", "Ordinary list"),
            title: L(
              "„Firme koje liče na naš ICP.“",
              "“Companies that look like our ICP.”",
            ),
            body: L(
              "Fit postoji. Timing je nagađanje.",
              "Fit exists. Timing is a guess.",
            ),
            tone: "danger",
          },
          right: {
            label: L("Dobra lista", "Good list"),
            title: L(
              "„Liče na ICP — i verovatno imaju razlog da pričaju sada.“",
              "“They look like the ICP — and likely have a reason to talk now.”",
            ),
            body: L(
              "Fit + signal. Outreach ima kontekst.",
              "Fit + signal. Outreach has context.",
            ),
            tone: "accent",
          },
        },
      ],
    },
    {
      type: "section",
      id: "buyer",
      title: L("4. Buyer fit", "4. Buyer fit"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Čak i kada je firma dobar fit, morate znati ko unutar nje ima smisla za prvi kontakt — founder, CEO, Head of Sales, CMO, Head of Growth, Operations, ili osoba koja ne donosi finalnu odluku ali oseća problem svakog dana.",
              "U B2B-u često ne prodajete jednoj osobi. Prodajete buying committee-ju: neko oseća bol, neko kontroliše budžet, neko koristi rešenje, neko može da kaže „ne“.",
            ],
            [
              "Even when the company is a good fit, you need to know who inside it makes sense for first contact — founder, CEO, Head of Sales, CMO, Head of Growth, Operations, or someone who doesn’t make the final call but feels the problem every day.",
              "In B2B you often don’t sell to one person. You sell to a buying committee: someone feels the pain, someone controls budget, someone uses the solution, someone can say “no.”",
            ],
          ),
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "ICP nije „targetiramo CEO-e.“ Bolje pitanje: ko prvi oseća problem, ko ga može interno pokrenuti, ko odobrava budžet, ko će koristiti rešenje, ko može da kaže ne.",
            "ICP isn’t “we target CEOs.” Better question: who feels the problem first, who can champion it internally, who approves budget, who will use the solution, who can say no.",
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Kada to znate, outreach postaje precizniji. Isti offer — drugačiji ugao:",
            ],
            [
              "Once you know that, outreach gets more precise. Same offer — different angle:",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "Founder-u: rast i kontrola pipeline-a",
              "Head of Sales-u: kvalitet razgovora i follow-up sistem",
              "Marketing-u: content koji podržava sales",
              "Operations-u: proces i vidljivost",
            ],
            [
              "Founder: growth and pipeline control",
              "Head of Sales: conversation quality and follow-up system",
              "Marketing: content that supports sales",
              "Operations: process and visibility",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "kanal",
      title: L("5. Channel fit", "5. Channel fit"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Posebno važno za LinkedIn. Pitanje nije samo „da li je naš ICP na LinkedIn-u?“ Bolje: kako se ponaša tamo?",
              "Neko je aktivan svaki dan. Neko čita, ali nikad ne lajkuje. Neko ne objavljuje, ali proverava profile. Neko ne odgovara na prvu poruku, ali zapamti ime ako mu content više puta iskoči.",
              "Neko je bolji za outreach. Neko za content nurture. Neko za webinar. Neko nije dovoljno aktivan na LinkedIn-u — pa email, ads, eventi ili partneri imaju više smisla.",
              "Ako je kupac aktivan na LinkedIn-u, founder content i outreach brže rade zajedno. Ako nije, oslonite se na druge kanale. LinkedIn nije isti za svaku industriju — ali za većinu B2B firmi bar deo buying committee-ja jeste tamo.",
            ],
            [
              "Especially important for LinkedIn. The question isn’t only “is our ICP on LinkedIn?” Better: how do they behave there?",
              "Someone is active every day. Someone reads but never likes. Someone doesn’t post but checks profiles. Someone doesn’t reply to the first message, but remembers the name if your content shows up a few times.",
              "Someone is better for outreach. Someone for content nurture. Someone for a webinar. Someone isn’t active enough on LinkedIn — so email, ads, events, or partners make more sense.",
              "If the buyer is active on LinkedIn, founder content and outreach work together faster. If not, lean on other channels. LinkedIn isn’t the same in every industry — but for most B2B companies, at least part of the buying committee is there.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "segmenti",
      title: L(
        "Jedna poruka ≠ ceo ICP",
        "One message ≠ the whole ICP",
      ),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Najveća greška: jedna poruka za ceo ICP. Kada je ICP preširok, poruka postaje generička — „Pomažemo B2B firmama da povećaju prodaju.“ To može da znači sve. Zato ne pogađa nikoga.",
              "Bolje je manje segmenata, sa jasnim uglom:",
            ],
            [
              "The biggest mistake: one message for the whole ICP. When ICP is too broad, the message goes generic — “We help B2B companies increase sales.” That can mean anything. So it hits no one.",
              "Better: fewer segments, with a clear angle:",
            ],
          ),
        },
        {
          type: "table",
          caption: L(
            "Isti sistem — drugačija poruka",
            "Same system — different message",
          ),
          headers: [
            L("Segment", "Segment"),
            L("Ugao poruke", "Message angle"),
          ],
          rows: [
            {
              cells: [
                L(
                  "B2B uslužne firme zavisne od referral-a",
                  "B2B service firms dependent on referrals",
                ),
                L(
                  "Pipeline koji ne zavisi od preporuka",
                  "A pipeline that doesn’t depend on referrals",
                ),
              ],
            },
            {
              cells: [
                L(
                  "SaaS / product bez distribucije",
                  "SaaS / product without distribution",
                ),
                L(
                  "Product postoji — tržište još ne razume zašto da kupi",
                  "The product exists — the market still doesn’t get why to buy",
                ),
              ],
            },
            {
              cells: [
                L(
                  "IT custom development koji zvuči kao svi",
                  "IT custom development that sounds like everyone else",
                ),
                L(
                  "Pozicioniranje kao ekspert, ne još jedan vendor",
                  "Position as an expert, not another vendor",
                ),
              ],
            },
            {
              cells: [
                L(
                  "Sales tim koji radi ručno",
                  "A sales team that works manually",
                ),
                L(
                  "Outreach, CRM i follow-up u sistem — ne disciplina pojedinca",
                  "Outreach, CRM, and follow-up as a system — not one person’s discipline",
                ),
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "Isti Founder-Led Growth sistem može biti relevantan za sve ove firme. Ali ne kroz istu poruku.",
            "The same Founder-Led Growth system can be relevant for all of these firms. Just not through the same message.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "flg-icp",
      title: L(
        "ICP u Founder-Led Growth-u",
        "ICP in Founder-Led Growth",
      ),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Kada gradimo FLG sistem, ICP ne definišemo samo da bismo znali kome da šaljemo poruke. Definišemo ga da bismo znali šta kupac ne razume, šta ga sprečava da kupi, koji problem boli, koji dokaz mu treba, koji content treba da vidi, koji outreach angle ima smisla, koji webinar bi ga privukao, koji follow-up dodaje vrednost, i koji signal pokazuje da se zagreva.",
            ],
            [
              "When we build an FLG system, we don’t define ICP only to know who to message. We define it to know what the buyer doesn’t understand, what blocks the purchase, which problem hurts, which proof they need, which content they should see, which outreach angle makes sense, which webinar would attract them, which follow-up adds value, and which signal shows they’re warming up.",
            ],
          ),
        },
        {
          type: "big-statement",
          variant: "quiet",
          eyebrow: L("Zašto je početak", "Why it’s the start"),
          statement: L(
            "Ako je ICP nejasan, content, outreach, CRM i sales troše energiju na pogrešne razgovore.",
            "If ICP is unclear, content, outreach, CRM, and sales burn energy on the wrong conversations.",
          ),
          support: L(
            "Dobar ICP ne sužava tržište. Fokusira energiju. Ne znači da nikada nećete raditi sa drugim firmama — znači da znate gde prvo imate najveću šansu za kvalitetne razgovore.",
            "A good ICP doesn’t shrink the market. It focuses energy. It doesn’t mean you’ll never work with other companies — it means you know where you first have the best shot at quality conversations.",
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
          type: "paragraphs",
          paragraphs: P(
            [
              "Pre nego što pokrenete content ili outreach, odgovorite na ova pitanja:",
            ],
            [
              "Before you launch content or outreach, answer these:",
            ],
          ),
        },
        {
          type: "checklist",
          title: L(
            "Da li je ICP spreman?",
            "Is the ICP ready?",
          ),
          items: P(
            [
              "Koji tip firme nam je najbolji kupac?",
              "Koji problem kod njih najčešće rešavamo?",
              "Šta se desilo zbog čega bi sada rešavali taj problem?",
              "Ko unutar firme prvi oseća bol?",
              "Ko odobrava odluku — i ko može da blokira?",
              "Koji dokaz im treba da bi nam verovali?",
              "Koji content bi im pomogao da razumeju problem?",
              "Koji outreach angle bi im zvučao relevantno?",
              "Koji signal pokazuje fit + timing?",
            ],
            [
              "What type of company is our best buyer?",
              "Which problem do we most often solve for them?",
              "What happened that would make them solve it now?",
              "Who inside the company feels the pain first?",
              "Who approves the decision — and who can block it?",
              "What proof do they need to trust us?",
              "What content would help them understand the problem?",
              "What outreach angle would feel relevant?",
              "What signal shows fit + timing?",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Ako ne možete jasno da odgovorite — nije vreme da skalirate outreach. Vreme je da prvo sredite ICP.",
            ],
            [
              "If you can’t answer clearly — it’s not time to scale outreach. It’s time to fix ICP first.",
            ],
          ),
        },
        {
          type: "lead",
          text: L(
            "Najveći problem u outbound-u često nije poruka. Nego publika kojoj je šaljete.",
            "The biggest problem in outbound often isn’t the message. It’s the audience you send it to.",
          ),
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Najskuplja greška u sales-u nije kada neko kaže „ne“. Najskuplja greška je kada mesecima pričate sa pogrešnim ljudima i mislite da tržište ne radi.",
            "The most expensive mistake in sales isn’t when someone says “no.” It’s when you spend months talking to the wrong people and conclude the market doesn’t work.",
          ),
        },
      ],
    },
  ],
  faq: [
    {
      question: L(
        "Da li ICP znači da odbijamo sve van segmenta?",
        "Does ICP mean we reject everyone outside the segment?",
      ),
      answer: L(
        "Ne. ICP pokazuje gde prvo imate najveću šansu. Drugi kupci i dalje mogu da dođu — ali ne trošite glavnu energiju na njih dok sistem ne radi.",
        "No. ICP shows where you first have the best shot. Other buyers can still arrive — but you don’t spend primary energy on them until the system works.",
      ),
    },
    {
      question: L(
        "Koliko segmenata je dovoljno na početku?",
        "How many segments are enough at the start?",
      ),
      answer: L(
        "Često 1–2 jaka segmenta. Bolje usko i jasno, pa proširiti kada vidite šta radi, nego pet generičkih poruka odjednom.",
        "Often 1–2 strong segments. Better narrow and clear, then expand once you see what works, than five generic messages at once.",
      ),
    },
    {
      question: L(
        "Šta ako firmografija odgovara, a problem fit ne?",
        "What if firmographics match but problem fit doesn’t?",
      ),
      answer: L(
        "Ne forsirajte isti ugao. Ili tražite jači problem signal, ili pomerite prioritet na firme gde bol već postoji — čak i ako nisu „savršen“ filter na papiru.",
        "Don’t force the same angle. Either look for a stronger problem signal, or prioritize companies where the pain already exists — even if they aren’t the “perfect” filter on paper.",
      ),
    },
  ],
  sources: [],
  relatedLessons: {
    previous: {
      slug: "why-outbound-cant-work-alone",
      title: L(
        "Zašto outbound više ne može da radi sam",
        "Why Outbound Can’t Work Alone Anymore",
      ),
    },
    next: {
      slug: "positioning-in-five-seconds",
      title: L(
        "Positioning: šta kupac mora da razume za 5 sekundi",
        "Positioning: What Buyers Must Understand in 5 Seconds",
      ),
      note: L(
        "Sledeće: šta kupac mora da razume odmah.",
        "Next: what the buyer must understand immediately.",
      ),
    },
    related: [
      {
        slug: "signal-based-outreach",
        title: L("Outreach po signalima", "Signal-Based Outreach"),
      },
      {
        slug: "why-referrals-are-not-a-sales-system",
        title: L(
          "Zašto referral-i nisu sales sistem",
          "Why Referrals Are Not a Sales System",
        ),
      },
    ],
  },
  cta: {
    title: L(
      "Želiš ICP koji vodi content i outreach, ne samo listu?",
      "Want an ICP that drives content and outreach — not just a list?",
    ),
    body: L(
      "Možemo da vam pomognemo da slojeve ICP-a pretvorite u segmente, poruke i signale.",
      "We can help you turn ICP layers into segments, messages, and signals.",
    ),
    primaryLabel: L("Zakaži konsultaciju", "Book a consultation"),
    secondaryLabel: L("Sledeća lekcija", "Next lesson"),
  },
  seoKeywords: P(
    [
      "ICP B2B",
      "ideal customer profile",
      "problem fit timing fit",
      "founder led growth ICP",
      "segmentacija outbound liste",
    ],
    [
      "B2B ICP",
      "ideal customer profile",
      "problem fit timing fit",
      "founder led growth ICP",
      "outbound list segmentation",
    ],
  ),
};
