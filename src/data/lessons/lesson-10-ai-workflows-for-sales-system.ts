import type { RichLessonContent } from "@/types/rich-lesson";

const L = (sr: string, en: string) => ({ sr, en });
const P = (sr: string[], en: string[]) => ({ sr, en });

export const lesson10RichContent: RichLessonContent = {
  meta: {
    stage: L("Sistemi", "Systems"),
    readingTime: L("16–20 min", "16–20 min"),
    difficulty: L("Srednji", "Intermediate"),
    outcome: L(
      "AI nije zamena za sistem — povezuje liste, signale, follow-up i CRM tako da tim donosi bolje odluke, ne samo više outputa.",
      "AI isn’t a system replacement — it connects lists, signals, follow-up, and CRM so the team makes better decisions, not just more output.",
    ),
    recommendedTools: L(
      "Make / n8n / Zapier, Clay, CRM, Fireflies / Fathom",
      "Make / n8n / Zapier, Clay, CRM, Fireflies / Fathom",
    ),
  },
  hero: {
    eyebrow: L("Lekcija 10", "Lesson 10"),
    title: L(
      "AI workflow-i: kako povezati sales sistem bez ručnog haosa",
      "AI Workflows: Connecting the Sales System Without Manual Chaos",
    ),
    paragraphs: P(
      [
        "Većina firmi koristi AI na najplićem nivou: napiši poruku, sažmi call, daj pet ideja za post, prepravi email. Korisno — ali nije transformacija.",
        "Prava vrednost nije još jedna poruka. Prava vrednost je kada AI poveže podatke, prepozna signal i pomogne timu da uradi pravi sledeći korak.",
      ],
      [
        "Most companies use AI at the shallowest level: write a message, summarize a call, give five post ideas, rewrite an email. Useful — but not transformative.",
        "Real value isn’t another message. Real value is when AI connects data, spots a signal, and helps the team take the right next step.",
      ],
    ),
    callout: L(
      "AI ne treba samo da proizvodi više outputa. Treba da pomogne sales sistemu da donosi bolje odluke.",
      "AI shouldn’t only produce more output. It should help the sales system make better decisions.",
    ),
  },
  toc: [
    { id: "los-proces", title: L("AI ne popravlja loš proces", "AI doesn’t fix a bad process") },
    { id: "gde-pomaze", title: L("Gde stvarno pomaže", "Where it actually helps") },
    { id: "connective", title: L("Connective tissue", "Connective tissue") },
    { id: "ljudi", title: L("Manje admina, više odnosa", "Less admin, more relationship") },
    { id: "sdr", title: L("SDR u automatizovanom sistemu", "SDR in an automated system") },
    { id: "content", title: L("Content workflow", "Content workflow") },
    { id: "reaktivacija", title: L("Reaktivacija baze", "Reactivating the base") },
    { id: "oprez", title: L("Gde biti oprezan", "Where to be careful") },
    { id: "sta-prvo", title: L("Šta prvo automatizovati", "What to automate first") },
    { id: "merenje", title: L("Šta meriti", "What to measure") },
    { id: "alati", title: L("Alati", "Tools") },
    { id: "checklist", title: L("Mini checklist", "Mini checklist") },
  ],
  blocks: [
    {
      type: "section",
      id: "los-proces",
      title: L("AI ne popravlja loš proces", "AI doesn’t fix a bad process"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Prvo pravilo: ako nemate jasan ICP, AI brže pronalazi pogrešne ljude. Nejasán positioning → više nejasnih poruka. Loša follow-up sekvenca → brže više loših follow-upa. Haotičan CRM → AI analizira haos.",
            ],
            [
              "First rule: without a clear ICP, AI finds the wrong people faster. Unclear positioning → more unclear messages. Bad follow-up sequence → more bad follow-ups, faster. Chaotic CRM → AI analyzes chaos.",
            ],
          ),
        },
        {
          type: "fork-paths",
          versus: L("vs", "vs"),
          left: {
            label: L("Pogrešno", "Wrong"),
            title: L("AI kao prvo rešenje", "AI as the first fix"),
            body: L(
              "Prikrije da proces ne postoji. Više outputa, isti haos.",
              "Hides that no process exists. More output, same chaos.",
            ),
            tone: "danger",
          },
          right: {
            label: L("Ispravno", "Right"),
            title: L("Prvo sistem, zatim AI", "System first, then AI"),
            body: L(
              "Kupac, problem, signali, sledeći korak, odgovornost — pa ubrzanje.",
              "Buyer, problem, signals, next step, ownership — then speed.",
            ),
            tone: "accent",
          },
        },
        {
          type: "lead",
          text: L(
            "AI treba da ubrza dobar proces. Ne da prikrije da proces ne postoji.",
            "AI should speed up a good process. Not hide that a process doesn’t exist.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "gde-pomaze",
      title: L("Gde stvarno pomaže", "Where it actually helps"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "FLG sistem ima mnogo delova: ICP, liste, content, outreach, follow-up, webinari, CRM, call-ovi, signali, reaktivacija. Ako sve zavisi od ručnog rada, sistem brzo postaje spor i nepouzdan.",
            ],
            [
              "An FLG system has many parts: ICP, lists, content, outreach, follow-up, webinars, CRM, calls, signals, reactivation. If everything depends on manual work, the system quickly becomes slow and unreliable.",
            ],
          ),
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("Istraživanje", "Research"),
              subtitle: L("Kratak pregled umesto 15 min", "A short brief instead of 15 min"),
              variant: "accent",
              items: P(
                [
                  "ICP fit, problem, signal",
                  "Najbolji prvi kontakt",
                  "Ugao poruke koji ima smisla",
                ],
                [
                  "ICP fit, problem, signal",
                  "Best first contact",
                  "Message angle that makes sense",
                ],
              ),
            },
            {
              title: L("ICP scoring", "ICP scoring"),
              subtitle: L("Prioritet, ne 800 istih", "Priority, not 800 identical names"),
              variant: "muted",
              items: P(
                [
                  "Tier 1: fit + timing + aktivnost",
                  "Tier 2: fit bez signala",
                  "Tier 3 / rejected: slab fit",
                ],
                [
                  "Tier 1: fit + timing + activity",
                  "Tier 2: fit without signal",
                  "Tier 3 / rejected: weak fit",
                ],
              ),
            },
            {
              title: L("Poruke i follow-up", "Messages & follow-up"),
              subtitle: L("Signal → problem, ne planinarenje", "Signal → problem, not hiking"),
              variant: "muted",
              items: P(
                [
                  "Kontekst iz signala",
                  "Novi ugao / case / webinar",
                  "Čovek bira šta šalje",
                ],
                [
                  "Context from the signal",
                  "New angle / case / webinar",
                  "A human chooses what to send",
                ],
              ),
            },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "AI može i da sažme sales call (problem, urgency, budžet, odluka, objection, sledeći korak) i da taj kontekst uđe u CRM — pa follow-up bude precizniji. Analiza objection-a kroz više call-ova vraća uvid u content, webinar, sajt, outreach i offer.",
            ],
            [
              "AI can also summarize a sales call (problem, urgency, budget, decision, objection, next step) and push that context into CRM — so follow-up is more precise. Analyzing objections across calls feeds insights back into content, webinars, site, outreach, and offer.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "Personalizacija nije „video sam da volite planinarenje.“ Personalizacija povezuje signal sa problemom — hiring sales, novi proizvod, pipeline problem, više ljudi iz firme.",
            "Personalization isn’t “I saw you like hiking.” Personalization connects a signal to a problem — hiring sales, new product, pipeline problem, multiple people from the company.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "connective",
      title: L("Connective tissue", "Connective tissue"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Najveći problem nije manjak alata — alati ne pričaju međusobno. LinkedIn, email, CRM, webinar, forme, call snimci, content analytics. Mnogo podataka, nema jedne slike.",
              "AI workflow može da bude vezivno tkivo između tih sistema.",
            ],
            [
              "The biggest problem isn’t lack of tools — tools don’t talk to each other. LinkedIn, email, CRM, webinar, forms, call recordings, content analytics. Lots of data, no single picture.",
              "An AI workflow can be the connective tissue between those systems.",
            ],
          ),
        },
        {
          type: "workflow",
          title: L("Primer puta kupca", "Example buyer path"),
          steps: P(
            [
              "Forma → enrichment + ICP check + score",
              "Kontakt u CRM + sales + Slack/Discord sa kontekstom",
              "Brz poziv → snimak → AI sažetak u CRM",
              "Nije spreman → nurture / webinar",
              "Jak signal ponovo → novo obaveštenje",
            ],
            [
              "Form → enrichment + ICP check + score",
              "Contact in CRM + sales + Slack/Discord with context",
              "Fast call → recording → AI summary into CRM",
              "Not ready → nurture / webinar",
              "Strong signal again → new notification",
            ],
          ),
          highlight: L(
            "To nije jedna automatizacija. To je povezivanje celog puta kupca.",
            "That isn’t one automation. It’s connecting the whole buyer journey.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "ljudi",
      title: L("Manje admina, više odnosa", "Less admin, more relationship"),
      blocks: [
        {
          type: "big-statement",
          variant: "quiet",
          statement: L(
            "AI treba da uklanja ručni rad, ne ljudski odnos.",
            "AI should remove manual work, not the human relationship.",
          ),
          support: L(
            "Automatizujte kopiranje, liste, CRM unos, taskove, sažetke, podsetnike. Ostavi ljudima nijansu, pitanja, politiku firme, pregovor i teške razgovore.",
            "Automate copying, lists, CRM entry, tasks, summaries, reminders. Leave nuance, questions, company politics, negotiation, and hard conversations to people.",
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Cilj nije manje ljudskog sales-a. Cilj je manje ljudskog vremena potrošenog na administraciju.",
            ],
            [
              "The goal isn’t less human sales. The goal is less human time spent on admin.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "sdr",
      title: L("SDR u automatizovanom sistemu", "SDR in an automated system"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Kada automatizujete research, enrichment, scoring, taskove i deo follow-upa, SDR više nije neko ko ceo dan kopira podatke i šalje iste poruke. Automatizacija ne ukida ulogu — podiže je.",
            ],
            [
              "When you automate research, enrichment, scoring, tasks, and part of follow-up, the SDR is no longer someone who copies data and sends the same messages all day. Automation doesn’t kill the role — it raises it.",
            ],
          ),
        },
        {
          type: "table",
          caption: L(
            "Šta meri model",
            "What the model measures",
          ),
          headers: [
            L("Loš SDR model", "Weak SDR model"),
            L("Dobar SDR model", "Strong SDR model"),
          ],
          rows: [
            {
              cells: [
                L("Broj poslatih poruka", "Messages sent"),
                L("Kvalitet otvorenih razgovora", "Quality of opened conversations"),
              ],
            },
            {
              cells: [
                L("Ručno čišćenje lista ceo dan", "Manual list cleaning all day"),
                L("Čitanje signala, ugao, multi-threading", "Reading signals, angle, multi-threading"),
              ],
            },
            {
              cells: [
                L("Isti pitch svima", "Same pitch to everyone"),
                L("Content + warm leadovi + kontekst", "Content + warm leads + context"),
              ],
            },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "content",
      title: L("Content workflow", "Content workflow"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Snimite intervju sa founder-om → AI transkript, ideje, stavovi, priče, objection-i, strukture postova, klipovi, veza sa ICP-om i oznake za outreach/follow-up.",
              "Finalni content i dalje mora da zvuči kao founder. AI ne izmišlja mišljenje — pomaže da se ono što founder već zna izvuče i distribuira.",
            ],
            [
              "Record a founder interview → AI transcript, ideas, stances, stories, objections, post structures, clips, ICP links, and tags for outreach/follow-up.",
              "Final content still has to sound like the founder. AI doesn’t invent the opinion — it helps extract and distribute what the founder already knows.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "AI generisan content bez iskustva zvuči prazno. AI podržan content iz realnog iskustva može biti veoma dobar.",
            "AI-generated content without experience sounds empty. AI-supported content from real experience can be very strong.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "reaktivacija",
      title: L("Reaktivacija baze", "Reactivating the base"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Jedna od najboljih primena AI-a: postojeća baza. Stotine kontakata koji su bili na call-u, rekli „kasnije“, preuzeli materijal, bili na webinaru, dobili ponudu — dobar fit, loš timing.",
              "AI pomaže da grupišete: ko je i dalje relevantan, promenio firmu, viša pozicija, firma raste, konkretan problem, dogovoreni period, nova aktivnost. Ne oslanjate se samo na nove leadove.",
            ],
            [
              "One of the best AI uses: the existing base. Hundreds of contacts who were on a call, said “later,” downloaded material, attended a webinar, got a proposal — good fit, bad timing.",
              "AI helps you group: who’s still relevant, changed companies, higher role, growing company, concrete problem, agreed period, new activity. You don’t rely only on new leads.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "oprez",
      title: L("Gde biti oprezan", "Where to be careful"),
      blocks: [
        {
          type: "bullets",
          items: P(
            [
              "Previše generičkih poruka — reputacija pada.",
              "Lažna personalizacija — slučajan detalj sa profila ≠ relevantnost.",
              "Loši podaci — pogrešna kvalifikacija i pogrešna osoba.",
              "Previše signala → taskova — buka za sales.",
              "Gubitak ljudskog tona — poverenje pada.",
              "Automatizacija bez vlasnika i kontrole kvaliteta.",
            ],
            [
              "Too many generic messages — reputation drops.",
              "Fake personalization — a random profile detail ≠ relevance.",
              "Bad data — wrong qualification and wrong person.",
              "Too many signals → tasks — noise for sales.",
              "Loss of human tone — trust drops.",
              "Automation without an owner and quality control.",
            ],
          ),
        },
        {
          type: "lead",
          text: L(
            "AI ne treba pustiti da sam vodi ceo sales proces. Treba mu dati jasne granice.",
            "AI shouldn’t be left to run the whole sales process alone. It needs clear boundaries.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "sta-prvo",
      title: L("Šta prvo automatizovati", "What to automate first"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Nemojte automatizovati sve odjednom. Počnite od dela koji uzima mnogo vremena, često se ponavlja, ima jasna pravila i ne zahteva mnogo ljudske procene.",
            ],
            [
              "Don’t automate everything at once. Start with the part that takes a lot of time, repeats often, has clear rules, and doesn’t need much human judgment.",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "forme → CRM + enrichment + obaveštenje + task,",
              "sažimanje call-a,",
              "praćenje follow-up datuma,",
              "reaktivacija „javite se kasnije“.",
            ],
            [
              "forms → CRM + enrichment + notification + task,",
              "call summarization,",
              "tracking follow-up dates,",
              "reactivating “reach out later.”",
            ],
          ),
        },
        {
          type: "big-statement",
          variant: "accent",
          statement: L(
            "Bolje tri jednostavna workflow-a koja rade nego dvadeset automatizacija koje stalno pucaju.",
            "Better three simple workflows that work than twenty automations that constantly break.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "merenje",
      title: L("Šta meriti", "What to measure"),
      blocks: [
        {
          type: "bullets",
          items: P(
            [
              "vreme ušteđeno sales timu,",
              "tačnost klasifikacije leadova,",
              "brzina reakcije na form lead,",
              "follow-up taskovi na vreme,",
              "reaktivirani stari leadovi,",
              "manje rupa u CRM podacima,",
              "sastanci iz warm signala,",
              "više vremena u stvarnim razgovorima.",
            ],
            [
              "time saved for the sales team,",
              "accuracy of lead classification,",
              "speed of response to form leads,",
              "follow-up tasks completed on time,",
              "old leads reactivated,",
              "fewer gaps in CRM data,",
              "meetings from warm signals,",
              "more time in real conversations.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "default",
          text: L(
            "AI workflow treba da poboljša poslovni rezultat — ne samo da izgleda impresivno na demo-u.",
            "An AI workflow should improve business results — not only look impressive in a demo.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "alati",
      title: L("Alati", "Tools"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Izbor zavisi od sistema koji već koristite. Često: Make, n8n, Zapier, Clay, HubSpot / Pipedrive / Attio, Apollo / enrichment, Fireflies / Fathom, LLM modeli. Ne treba vam svaki alat.",
              "Uvedite alat kada znate: koji podatak ulazi, šta sistem radi, koja odluka izlazi, ko dobija obaveštenje, kako merite rezultat. Ne zato što je popularan.",
            ],
            [
              "Choice depends on the system you already use. Often: Make, n8n, Zapier, Clay, HubSpot / Pipedrive / Attio, Apollo / enrichment, Fireflies / Fathom, LLM models. You don’t need every tool.",
              "Add a tool when you know: what data enters, what the system does, which decision comes out, who gets notified, how you measure the result. Not because it’s popular.",
            ],
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
            "Pre nego što automatizujete",
            "Before you automate",
          ),
          items: P(
            [
              "Da li je proces jasno definisan?",
              "Koji je početni signal i koji podaci ulaze — jesu li pouzdani?",
              "Šta AI procenjuje, a šta zahteva ljudsku odluku?",
              "Koja akcija se pokreće i gde se podatak čuva?",
              "Ko dobija obaveštenje?",
              "Šta ako automatizacija pogreši — kako proveravamo kvalitet?",
              "Ko je vlasnik workflow-a?",
              "Koju poslovnu metriku poboljšavamo?",
            ],
            [
              "Is the process clearly defined?",
              "What’s the starting signal and which data enters — is it reliable?",
              "What does AI assess, and what needs a human decision?",
              "Which action triggers and where is data stored?",
              "Who gets notified?",
              "What if automation is wrong — how do we check quality?",
              "Who owns the workflow?",
              "Which business metric are we improving?",
            ],
          ),
        },
        {
          type: "big-statement",
          variant: "accent",
          eyebrow: L("Stvarna vrednost", "Real value"),
          statement: L(
            "AI ne zamenjuje strategiju, poverenje ni dobar sales razgovor.",
            "AI doesn’t replace strategy, trust, or a good sales conversation.",
          ),
          support: L(
            "Povezuje delove sistema tako da prava osoba dobije pravi kontekst u pravom trenutku.",
            "It connects the parts of the system so the right person gets the right context at the right time.",
          ),
        },
      ],
    },
  ],
  faq: [
    {
      question: L(
        "Da li prvo biramo alate ili proces?",
        "Do we pick tools or process first?",
      ),
      answer: L(
        "Uvek proces. Alat bez jasnog ulaza, akcije i vlasnika samo dodaje još jedan kanal u haos.",
        "Always process. A tool without a clear input, action, and owner just adds another channel to the chaos.",
      ),
    },
    {
      question: L(
        "Koliko poruka sme AI da šalje sam?",
        "How many messages should AI send on its own?",
      ),
      answer: L(
        "Najbezbednije: AI predlaže, čovek šalje — dok nije dokazana kvalitetna logika. Generički volume brzo kvari reputaciju.",
        "Safest: AI proposes, a human sends — until quality logic is proven. Generic volume damages reputation fast.",
      ),
    },
    {
      question: L(
        "Da li AI zamenjuje SDR?",
        "Does AI replace the SDR?",
      ),
      answer: L(
        "Ne. Uklanja admin i digne ulogu na signale, ugao, multi-threading i kvalitet razgovora. Loš model meri volume; dobar meri otvorene razgovore.",
        "No. It removes admin and raises the role to signals, angle, multi-threading, and conversation quality. A weak model measures volume; a strong one measures opened conversations.",
      ),
    },
  ],
  sources: [],
  relatedLessons: {
    previous: {
      slug: "crm-and-buying-signals",
      title: L(
        "CRM i buying signals: kako da znate ko se zagreva",
        "CRM and Buying Signals: How to Know Who Is Warming Up",
      ),
    },
    next: {
      slug: "linkedin-ads-and-retargeting",
      title: L(
        "LinkedIn Ads i retargeting: kako skalirati ono što već radi",
        "LinkedIn Ads and Retargeting: How to Scale What Already Works",
      ),
      note: L(
        "Sledeće: paid skalira ono što organski već dokazuje — ne izmišlja poruku.",
        "Next: paid scales what organic already proves — it doesn’t invent the message.",
      ),
    },
    related: [
      {
        slug: "signal-based-outreach",
        title: L(
          "Outreach po signalima",
          "Signal-Based Outreach",
        ),
      },
      {
        slug: "founder-content-trust-before-message",
        title: L(
          "Founder content: kako gradite poverenje pre poruke",
          "Founder Content: How You Build Trust Before the Message",
        ),
      },
    ],
  },
  cta: {
    title: L(
      "Želiš AI koji povezuje sistem, ne samo piše poruke?",
      "Want AI that connects the system, not just writes messages?",
    ),
    body: L(
      "Možemo da automatizujemo repetitivne delove i ostavimo ljudima kontekst i razgovor.",
      "We can automate the repetitive parts and leave context and conversation to people.",
    ),
    primaryLabel: L("Zakaži konsultaciju", "Book a consultation"),
    secondaryLabel: L("Sledeća lekcija", "Next lesson"),
  },
  seoKeywords: P(
    [
      "AI sales workflow",
      "automatizacija sales sistema",
      "AI CRM workflow",
      "SDR automatizacija",
      "AI follow up",
    ],
    [
      "AI sales workflow",
      "sales system automation",
      "AI CRM workflow",
      "SDR automation",
      "AI follow-up",
    ],
  ),
};
