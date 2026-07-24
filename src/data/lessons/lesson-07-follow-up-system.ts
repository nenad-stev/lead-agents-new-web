import type { RichLessonContent } from "@/types/rich-lesson";

const L = (sr: string, en: string) => ({ sr, en });
const P = (sr: string[], en: string[]) => ({ sr, en });

export const lesson07RichContent: RichLessonContent = {
  meta: {
    stage: L("Outreach", "Outreach"),
    readingTime: L("14–18 min", "14–18 min"),
    difficulty: L("Početnik–srednji", "Beginner–intermediate"),
    outcome: L(
      "Follow-up nije „samo proveravam“ — to je sistem koji dodaje novi razlog za odgovor i ostaje prisutan dok timing ne postane pravi.",
      "Follow-up isn’t “just checking in” — it’s a system that adds a new reason to reply and stays present until timing is right.",
    ),
    recommendedTools: L(
      "CRM, LinkedIn, nurture sekvence",
      "CRM, LinkedIn, nurture sequences",
    ),
  },
  hero: {
    eyebrow: L("Lekcija 7", "Lesson 7"),
    title: L(
      "Follow up sistem: zašto većina prodaje ne dolazi iz prve poruke",
      "Follow-Up System: Why Most Sales Don’t Come From the First Message",
    ),
    paragraphs: P(
      [
        "Većina firmi se ponaša kao da će prodaja doći iz prve poruke. Pošalju outreach, sačekaju par dana, pošalju još jednu — pa pređu na sledećeg i kažu: „Ljudi nisu zainteresovani.“",
        "Mnogo češće problem nije interesovanje. Problem je što nisu ostali dovoljno dugo prisutni.",
      ],
      [
        "Most companies act as if sales will come from the first message. They send outreach, wait a few days, send one more — then move on and say: “People aren’t interested.”",
        "More often the problem isn’t interest. It’s that they didn’t stay present long enough.",
      ],
    ),
    callout: L(
      "Znaju da follow-up treba da postoji. Ali nemaju sistem koji može da ga izdrži — bez da zvuče očajno.",
      "They know follow-up should exist. But they don’t have a system that can sustain it — without sounding desperate.",
    ),
  },
  toc: [
    { id: "gde-se-gubi", title: L("Gde se gubi pipeline", "Where pipeline is lost") },
    { id: "nije-podsetnik", title: L("Nije podsetnik", "Not a reminder") },
    { id: "edukativna-sekvenca", title: L("Edukativna sekvenca", "Educational sequence") },
    { id: "tisina", title: L("Tišina nije ne", "Silence isn’t no") },
    { id: "faza-kupca", title: L("Prati fazu kupca", "Follow the buyer’s stage") },
    { id: "content-alat", title: L("Content kao follow-up alat", "Content as a follow-up tool") },
    { id: "sistem", title: L("Zašto ručni propadne", "Why manual fails") },
    { id: "nivoi", title: L("Tri nivoa follow-upa", "Three levels of follow-up") },
    { id: "posle-calla", title: L("Posle sales call-a", "After the sales call") },
    { id: "brzina", title: L("Brzina", "Speed") },
    { id: "merenje", title: L("Šta meriti", "What to measure") },
    { id: "checklist", title: L("Mini checklist", "Mini checklist") },
  ],
  blocks: [
    {
      type: "section",
      id: "gde-se-gubi",
      title: L("Gde se gubi pipeline", "Where pipeline is lost"),
      blocks: [
        {
          type: "stat-row",
          items: [
            {
              value: L("~80%", "~80%"),
              label: L("prodaje", "of sales"),
              description: L(
                "često se citira između 6. i 12. follow-upa",
                "often cited between the 6th and 12th follow-up",
              ),
            },
            {
              value: L("~44%", "~44%"),
              label: L("sales ljudi", "of salespeople"),
              description: L(
                "odustane već posle prvog follow-upa",
                "give up after the first follow-up",
              ),
            },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Čak i kada se brojke razlikuju od istraživanja do istraživanja, poenta ostaje: većina firmi odustane mnogo ranije nego što ozbiljna B2B prodaja zahteva.",
            ],
            [
              "Even when the numbers differ from study to study, the point stays: most companies quit much earlier than serious B2B sales requires.",
            ],
          ),
        },
        {
          type: "cascade",
          title: L("Kako sekvenca umire", "How the sequence dies"),
          trigger: L("Prvi follow-up još nekako pošalju.", "They still somehow send the first follow-up."),
          steps: [
            L("Drugi isto.", "The second one too."),
            L("Kod trećeg više ne znaju šta novo da kažu.", "By the third they don’t know what new to say."),
            L("Četvrti počne da deluje neprijatno.", "The fourth starts to feel awkward."),
            L("Peti se zaboravi.", "The fifth gets forgotten."),
            L("Šesti nikada ne dođe.", "The sixth never arrives."),
          ],
          punchline: L(
            "Tu se izgubi veliki deo pipeline-a — ne zato što kupac nikada ne bi kupio, nego zato što firma nije imala način da ostane prisutna.",
            "That’s where a large part of pipeline is lost — not because the buyer would never buy, but because the company had no way to stay present.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "nije-podsetnik",
      title: L("Nije podsetnik", "Not a reminder"),
      blocks: [
        {
          type: "fork-paths",
          versus: L("vs", "vs"),
          left: {
            label: L("Podsetnik", "Reminder"),
            title: L("„Samo proveravam…“", "“Just checking in…”"),
            body: L(
              "Ne daje novi razlog. Samo podseća da vam već nije odgovorio.",
              "Gives no new reason. Just reminds them they already didn’t reply.",
            ),
            tone: "danger",
          },
          right: {
            label: L("Pravi follow-up", "Real follow-up"),
            title: L("Novi ugao, dokaz, primer", "New angle, proof, example"),
            body: L(
              "Dodaje nešto novo. Pomeri kupca korak dalje — ne samo ponavlja isto drugim rečima.",
              "Adds something new. Moves the buyer one step further — doesn’t just repeat the same thing in different words.",
            ),
            tone: "accent",
          },
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "„Da li ste imali priliku da pogledate?“ i „Vraćam ovu poruku na vrh inbox-a“ nisu follow-up. To su podsetnici. Ako prva poruka nije pokrenula razgovor, sledeća treba da pomeri kupca — ne da ga podseti da ćuti.",
            ],
            [
              "“Did you get a chance to look?” and “Bringing this back to the top of your inbox” aren’t follow-up. They’re reminders. If the first message didn’t start a conversation, the next one should move the buyer — not remind them they’re silent.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "edukativna-sekvenca",
      title: L("Edukativna sekvenca", "Educational sequence"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Dobra follow-up sekvenca nije niz podsetnika. To je niz razloga zašto tema možda ima smisla.",
            ],
            [
              "A good follow-up sequence isn’t a string of reminders. It’s a string of reasons why the topic might make sense.",
            ],
          ),
        },
        {
          type: "workflow",
          title: L("Primer logike kroz poruke", "Example logic across messages"),
          steps: P(
            [
              "Problem — identifikujte ga",
              "Cena neaktivnosti",
              "Relevantan case study",
              "Signal iz njihove firme / industrije",
              "Razbijte objection",
              "Webinar / guide / edukacija",
              "Novi ugao za razgovor",
            ],
            [
              "Problem — identify it",
              "Cost of inaction",
              "Relevant case study",
              "Signal from their company / industry",
              "Break an objection",
              "Webinar / guide / education",
              "A new angle for conversation",
            ],
          ),
          highlight: L(
            "Ne pritiskate ga da odgovori. Pomažete mu da bolje razume problem. To je prirodniji način da se gradi interesovanje.",
            "You’re not pressuring them to reply. You’re helping them understand the problem better. That’s a more natural way to build interest.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "tisina",
      title: L("Tišina nije ne", "Silence isn’t no"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Kada neko ne odgovori, sales to često tumači kao odbijanje. Ali tišina može da znači: loš trenutak, zauzetost, relevantno ali nije prioritet, nema dovoljno razloga, treba još dokaza, mora interno da pokrene temu, budžet nije otvoren, ima interesovanje ali nema urgency.",
              "U kompleksnoj B2B prodaji mnogo razgovora se otvori tek kada se promeni timing. Firma koja se javila samo jednom više nije prisutna kada se taj timing promeni.",
            ],
            [
              "When someone doesn’t reply, sales often reads it as rejection. But silence can mean: bad timing, busy, relevant but not a priority, not enough reason yet, needs more proof, must raise it internally, budget isn’t open, interest without urgency.",
              "In complex B2B sales, many conversations only open when timing changes. The company that only reached out once is no longer present when that timing shifts.",
            ],
          ),
        },
        {
          type: "lead",
          text: L(
            "Tišina nije isto što i ne. Zato sistem mora da ostane prisutan dok se kontekst ne promeni.",
            "Silence isn’t the same as no. That’s why the system has to stay present until the context changes.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "faza-kupca",
      title: L("Prati fazu kupca", "Follow the buyer’s stage"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Nije svaki lead u istoj fazi — prvi put čuje za problem, razume ga ali ne zna koliko košta, istražuje, poredi vendore, ranije pričao ali nije bio spreman, skoro dobio budžet. Ista poruka ne može da radi za sve.",
            ],
            [
              "Not every lead is in the same stage — hearing about the problem for the first time, understanding it but not the cost, researching, comparing vendors, talked before but wasn’t ready, just got budget. The same message can’t work for everyone.",
            ],
          ),
        },
        {
          type: "table",
          caption: L(
            "Faza određuje sledeći korak",
            "Stage determines the next step",
          ),
          headers: [
            L("Lead", "Lead"),
            L("Šta treba", "What they need"),
          ],
          rows: [
            {
              cells: [
                L("Potpuno hladan", "Completely cold"),
                L("Edukacija", "Education"),
              ],
            },
            {
              cells: [
                L("Pogledao case study", "Viewed a case study"),
                L("Relevantan primer", "A relevant example"),
              ],
            },
            {
              cells: [
                L("Bio na webinaru", "Attended a webinar"),
                L("Direktan razgovor", "Direct conversation"),
              ],
            },
            {
              cells: [
                L("„Javite se kasnije“", "“Reach out later”"),
                L("Poruka povezana sa prethodnim razgovorom", "A message tied to the previous conversation"),
              ],
            },
          ],
        },
        {
          type: "big-statement",
          variant: "quiet",
          statement: L(
            "Ne pitajte samo: „Kada ponovo da se javimo?“",
            "Don’t only ask: “When should we reach out again?”",
          ),
          support: L(
            "Pitajte: „Šta ova osoba treba sledeće da vidi da bi joj razgovor imao više smisla?“",
            "Ask: “What should this person see next so a conversation makes more sense?”",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "content-alat",
      title: L("Content kao follow-up alat", "Content as a follow-up tool"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Founder content ne služi samo za organski reach. Može da bude deo follow-up sistema: relevantan post, video o čestoj grešci, case study iz slične industrije, poziv na webinar, guide za interno obrazloženje.",
              "Tako content dobija veću vrednost — nije samo objava, postaje sales asset. Svaki dobar komad može da bude novi razlog za follow-up.",
            ],
            [
              "Founder content isn’t only for organic reach. It can be part of the follow-up system: a relevant post, a video on a common mistake, a case study from a similar industry, a webinar invite, a guide for internal justification.",
              "That gives content more value — not just a post, a sales asset. Every strong piece can be a new reason to follow up.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "sistem",
      title: L("Zašto ručni propadne", "Why manual fails"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Ručni follow-up zavisi od memorije i discipline. Sales ima nove leadove, sastanke, ponude, CRM, klijente — pa follow-up sa osobom koja nije odgovorila pre dve nedelje lako padne na dno liste. To nije problem karaktera. To je problem sistema.",
              "CRM mora da zna: kada ide sledeći kontakt, koji je bio prethodni ugao, šta je lead video, koji signal postoji, koji sadržaj je već poslat, šta ide sledeće, kada lead vraća u aktivan pipeline.",
            ],
            [
              "Manual follow-up depends on memory and discipline. Sales has new leads, meetings, proposals, CRM, clients — so follow-up with someone who didn’t reply two weeks ago easily falls to the bottom of the list. That’s not a character problem. It’s a system problem.",
              "CRM needs to know: when the next contact goes, what the previous angle was, what the lead has seen, which signal exists, which content was already sent, what’s next, when the lead returns to active pipeline.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "Automatizacija kreira task, podsetnik, predlaže sadržaj, označi reaktivaciju, pokrene nurture. Čovek i dalje odlučuje kada treba pravi razgovor. Sistem pamti. Sales razume kontekst.",
            "Automation creates the task, reminder, suggests content, flags reactivation, starts nurture. A human still decides when a real conversation is needed. The system remembers. Sales understands context.",
          ),
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Ne automatizujte lošu sekvencu. Ako poruke ne dodaju vrednost, automatizacija samo ubrzava iritiranje tržišta. Svaki korak treba da ima razlog — ne samo „prošlo je pet dana“.",
            "Don’t automate a bad sequence. If messages don’t add value, automation only speeds up irritating the market. Every step needs a reason — not just “five days have passed.”",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "nivoi",
      title: L("Tri nivoa follow-upa", "Three levels of follow-up"),
      blocks: [
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("Kratkoročni", "Short-term"),
              subtitle: L("Momentum posle kontakta", "Momentum after contact"),
              variant: "accent",
              items: P(
                [
                  "Posle prve poruke, odgovora, sastanka ili ponude",
                  "Cilj: razgovor ne izgubi momentum",
                  "Bitni: brzina, kontekst, jasan sledeći korak",
                ],
                [
                  "After first message, reply, meeting, or proposal",
                  "Goal: conversation doesn’t lose momentum",
                  "What matters: speed, context, clear next step",
                ],
              ),
            },
            {
              title: L("Srednjoročni", "Mid-term"),
              subtitle: L("Nurture dok timing nije pravi", "Nurture until timing is right"),
              variant: "muted",
              items: P(
                [
                  "Problem relevantan, timing nije",
                  "Content, case study, webinar, novi ugao",
                  "Cilj: ostati relevantan, ne pritiskati",
                ],
                [
                  "Problem relevant, timing isn’t",
                  "Content, case study, webinar, new angle",
                  "Goal: stay relevant, don’t pressure",
                ],
              ),
            },
            {
              title: L("Dugoročna", "Long-term"),
              subtitle: L("Reaktivacija starih leadova", "Reactivating old leads"),
              variant: "muted",
              items: P(
                [
                  "Ranije dobri, ali nisu kupili",
                  "Provera: rast, nova osoba, budžet, veći problem",
                  "Stari lead ≠ mrtav lead",
                ],
                [
                  "Previously good, but didn’t buy",
                  "Check: growth, new hire, budget, bigger problem",
                  "Old lead ≠ dead lead",
                ],
              ),
            },
          ],
        },
        {
          type: "lead",
          text: L(
            "Stari lead često nije mrtav — samo je imao pogrešan timing.",
            "An old lead often isn’t dead — they just had the wrong timing.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "posle-calla",
      title: L("Posle sales call-a", "After the sales call"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Veliki broj prilika ne propadne pre call-a. Propadne posle: sastanak dobar, tema ima smisla, pošalje se ponuda — pa tišina. Opet: „Da li ste imali priliku da pogledate ponudu?“",
            ],
            [
              "A large number of opportunities don’t die before the call. They die after: good meeting, topic makes sense, proposal sent — then silence. Again: “Did you get a chance to look at the proposal?”",
            ],
          ),
        },
        {
          type: "big-statement",
          variant: "accent",
          eyebrow: L("Bolji follow-up", "Better follow-up"),
          statement: L(
            "Vratite kupca na ono što je sam rekao — ne samo na dokument.",
            "Bring the buyer back to what they said themselves — not only to the document.",
          ),
          support: L(
            "„Pomenuli ste da vam najveći problem pravi X zbog Y. U ponudi smo fokus stavili na Z. Šaljem i primer slične situacije.“",
            "“You mentioned X is your biggest problem because of Y. In the proposal we focused on Z. I’m also sending an example of a similar situation.”",
          ),
        },
        {
          type: "callout",
          variant: "default",
          text: L(
            "CRM treba da sačuva: šta je kupac rekao, koji problem je najvažniji, ko je u odluci, koji rizik vidi, šta mora interno da proveri, dogovoreni sledeći korak. Bez toga follow-up postaje generički.",
            "CRM should store: what the buyer said, which problem matters most, who’s in the decision, which risk they see, what they must check internally, the agreed next step. Without that, follow-up becomes generic.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "brzina",
      title: L("Brzina", "Speed"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Kod inbound leadova timing je posebno važan. Kada neko popuni formu ili pokaže jak intent, interesovanje je najjače tada — ne sutra, ne kada sales stigne.",
            ],
            [
              "For inbound leads, timing matters especially. When someone fills a form or shows strong intent, interest is strongest then — not tomorrow, not when sales gets to it.",
            ],
          ),
        },
        {
          type: "workflow",
          title: L("Od signala do kontakta", "From signal to contact"),
          steps: P(
            [
              "Forma / jak intent",
              "Podaci u CRM",
              "Obaveštenje timu",
              "Task + odgovorna osoba",
              "Kontekst + brz kontakt",
            ],
            [
              "Form / strong intent",
              "Data into CRM",
              "Team notified",
              "Task + owner",
              "Context + fast contact",
            ],
          ),
          highlight: L(
            "Sistem ne treba samo da donese signal. Treba da omogući reakciju dok signal još vredi.",
            "The system shouldn’t only deliver the signal. It should enable a response while the signal still matters.",
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
              "posle kog kontakta ljudi najčešće odgovaraju,",
              "koji tip follow-upa i sadržaja otvara razgovor,",
              "koliko leadova se reaktivira,",
              "koliko prilika se izgubi zbog slabog sledećeg koraka,",
              "vreme od signala do reakcije,",
              "koliko sastanaka dolazi iz follow-upa, a ne iz prve poruke,",
              "koliko starih leadova ulazi u pipeline.",
            ],
            [
              "after which touch people most often reply,",
              "which follow-up type and content opens conversations,",
              "how many leads reactivate,",
              "how many opportunities are lost to a weak next step,",
              "time from signal to response,",
              "how many meetings come from follow-up, not the first message,",
              "how many old leads enter pipeline.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "Često najveća prilika nije u većoj listi — nego u boljoj obradi ljudi koje već imate.",
            "Often the biggest opportunity isn’t a bigger list — it’s better handling of the people you already have.",
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
            "Pre nego što pustite kampanju",
            "Before you launch a campaign",
          ),
          items: P(
            [
              "Koliko follow-up poruka imamo?",
              "Da li svaka dodaje nešto novo?",
              "Koji problem / objection / dokaz gradimo kroz sekvencu?",
              "Koji content možemo da pošaljemo?",
              "Kada lead prelazi u nurture — i kada se vraća u aktivan follow-up?",
              "Da li CRM kreira sledeći task?",
              "Da li sales dobija obaveštenje na jak signal?",
              "Da li znamo posle kog kontakta najčešće dolazi odgovor?",
              "Da li postoji proces za reaktivaciju starih leadova?",
            ],
            [
              "How many follow-up messages do we have?",
              "Does each one add something new?",
              "Which problem / objection / proof do we build through the sequence?",
              "Which content can we send?",
              "When does a lead move to nurture — and when back to active follow-up?",
              "Does CRM create the next task?",
              "Does sales get notified on a strong signal?",
              "Do we know after which touch replies most often come?",
              "Is there a process to reactivate old leads?",
            ],
          ),
        },
        {
          type: "big-statement",
          variant: "accent",
          eyebrow: L("Sistem, ne motivacija", "System, not motivation"),
          statement: L(
            "Veliki deo B2B prodaje ne dobije firma sa najboljom prvom porukom — nego firma sa sistemom da ostane prisutna.",
            "A large share of B2B sales doesn’t go to the company with the best first message — but to the one with a system to stay present.",
          ),
          support: L(
            "Dobar follow-up ne znači da dosadite kupcu. Znači da ostanete relevantni dovoljno dugo da vas zapamti kada timing postane pravi.",
            "Good follow-up doesn’t mean annoying the buyer. It means staying relevant long enough that they remember you when timing becomes right.",
          ),
        },
      ],
    },
  ],
  faq: [
    {
      question: L(
        "Koliko follow-up poruka je dovoljno?",
        "How many follow-up messages is enough?",
      ),
      answer: L(
        "Bolje imati 5–7 poruka sa jasnom logikom nego 12 podsetnika. Važnije je da svaka dodaje vrednost i da CRM drži ritam — nego magičan broj.",
        "Better to have 5–7 messages with clear logic than 12 reminders. What matters more is that each adds value and CRM holds the rhythm — not a magic number.",
      ),
    },
    {
      question: L(
        "Kada prestati da šaljemo?",
        "When should we stop sending?",
      ),
      answer: L(
        "Kada je jasan „ne“, ili kada lead nije ICP fit. Inače — prebacite u nurture / reaktivaciju umesto da zauvek ćutite ili zauvek spamujete.",
        "When there’s a clear “no,” or when the lead isn’t an ICP fit. Otherwise — move to nurture / reactivation instead of going forever silent or forever spamming.",
      ),
    },
    {
      question: L(
        "Da li follow-up može biti potpuno automatizovan?",
        "Can follow-up be fully automated?",
      ),
      answer: L(
        "Taskovi, ritam i nurture — da. Odluka o pravom razgovoru i poruke sa jakim kontekstom — ne. Najbolja kombinacija: sistem pamti, sales razume.",
        "Tasks, rhythm, and nurture — yes. Deciding on a real conversation and high-context messages — no. Best combo: system remembers, sales understands.",
      ),
    },
  ],
  sources: [],
  relatedLessons: {
    previous: {
      slug: "signal-based-outreach",
      title: L(
        "Outreach po signalima: kako prilazite pravim ljudima u pravom trenutku",
        "Signal-Based Outreach: Reaching the Right People at the Right Time",
      ),
    },
    next: {
      slug: "webinars-for-unready-buyers",
      title: L(
        "Webinari: kako da edukujete kupce koji još nisu spremni za sales razgovor",
        "Webinars: How to Educate Buyers Who Aren’t Ready for a Sales Call",
      ),
      note: L(
        "Sledeće: kako edukujete tržište pre nego što je spremno za call.",
        "Next: how you educate the market before it’s ready for a call.",
      ),
    },
    related: [
      {
        slug: "founder-content-trust-before-message",
        title: L(
          "Founder content: kako gradite poverenje pre poruke",
          "Founder Content: How You Build Trust Before the Message",
        ),
      },
      {
        slug: "crm-and-buying-signals",
        title: L(
          "CRM i buying signals: kako da znate ko se zagreva",
          "CRM and Buying Signals: How to Know Who Is Warming Up",
        ),
      },
    ],
  },
  cta: {
    title: L(
      "Želiš follow-up koji ne umire posle druge poruke?",
      "Want follow-up that doesn’t die after the second message?",
    ),
    body: L(
      "Možemo da povežemo sekvencu, content i CRM tako da sales ostane prisutan bez da zvuči očajno.",
      "We can connect sequence, content, and CRM so sales stays present without sounding desperate.",
    ),
    primaryLabel: L("Zakaži konsultaciju", "Book a consultation"),
    secondaryLabel: L("Sledeća lekcija", "Next lesson"),
  },
  seoKeywords: P(
    [
      "follow up sistem B2B",
      "follow up sekvenca",
      "nurture leadova",
      "reaktivacija starih leadova",
      "follow up posle sales call-a",
    ],
    [
      "B2B follow-up system",
      "follow-up sequence",
      "lead nurture",
      "old lead reactivation",
      "follow-up after sales call",
    ],
  ),
};
