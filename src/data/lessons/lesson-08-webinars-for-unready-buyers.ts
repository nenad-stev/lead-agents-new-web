import type { RichLessonContent } from "@/types/rich-lesson";

const L = (sr: string, en: string) => ({ sr, en });
const P = (sr: string[], en: string[]) => ({ sr, en });

export const lesson08RichContent: RichLessonContent = {
  meta: {
    stage: L("Nurture", "Nurture"),
    readingTime: L("16–20 min", "16–20 min"),
    difficulty: L("Početnik–srednji", "Beginner–intermediate"),
    outcome: L(
      "Webinar kao most između interesovanja i sastanka — edukacija, kvalifikacija i prirodan razlog za follow-up.",
      "Webinars as a bridge between interest and meetings — education, qualification, and a natural reason to follow up.",
    ),
    recommendedTools: L(
      "LinkedIn, Zoom / webinar alat, CRM",
      "LinkedIn, Zoom / webinar tool, CRM",
    ),
  },
  hero: {
    eyebrow: L("Lekcija 8", "Lesson 8"),
    title: L(
      "Webinari: kako da edukujete kupce koji još nisu spremni za sales razgovor",
      "Webinars: How to Educate Buyers Who Aren’t Ready for a Sales Call",
    ),
    paragraphs: P(
      [
        "Neće svaki dobar kupac odmah pristati na sastanak — i to ne znači da nije zainteresovan. Možda problem nije prioritet, nema budžet, mora da uključi još ljudi, ili tek pokušava da razume šta mu treba.",
        "Direktan sales poziv tada često dolazi prerano. Ali možda jeste spreman da nauči nešto korisno. Tu webinar ima ogromnu vrednost.",
      ],
      [
        "Not every good buyer will agree to a meeting right away — and that doesn’t mean they aren’t interested. Maybe the problem isn’t a priority, there’s no budget, they need to involve more people, or they’re still figuring out what they need.",
        "A direct sales invite often comes too early then. But they may be ready to learn something useful. That’s where a webinar has huge value.",
      ],
    ),
    callout: L(
      "Webinar nije samo marketing događaj. U Founder-Led Growth-u to je mehanizam za edukaciju, kvalifikaciju i ubrzavanje prodaje.",
      "A webinar isn’t just a marketing event. In Founder-Led Growth it’s a mechanism for education, qualification, and accelerating sales.",
    ),
  },
  toc: [
    { id: "most", title: L("Most do razgovora", "Bridge to the conversation") },
    { id: "zasto-lakse", title: L("Zašto lakše od call-a", "Why easier than a call") },
    { id: "ne-usluga", title: L("Ne počinje uslugom", "Doesn’t start with your offer") },
    { id: "promena-pogleda", title: L("Promena pogleda na problem", "Changing how they see the problem") },
    { id: "tema", title: L("Kako izabrati temu", "How to choose the topic") },
    { id: "struktura", title: L("Struktura webinara", "Webinar structure") },
    { id: "signal", title: L("Kvalifikacioni signal", "Qualification signal") },
    { id: "vise-od-novih", title: L("Više od novih leadova", "More than new leads") },
    { id: "content-asset", title: L("Mesec dana contenta", "A month of content") },
    { id: "live-vs-snimak", title: L("Live vs snimak", "Live vs recording") },
    { id: "promocija", title: L("Promocija", "Promotion") },
    { id: "follow-up", title: L("Follow-up posle", "Follow-up after") },
    { id: "merenje", title: L("Šta meriti", "What to measure") },
    { id: "greske", title: L("Najčešće greške", "Common mistakes") },
    { id: "checklist", title: L("Mini checklist", "Mini checklist") },
  ],
  blocks: [
    {
      type: "section",
      id: "most",
      title: L("Most do razgovora", "Bridge to the conversation"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Webinar je most između pažnje i sales razgovora. Ne tražite od kupca da odmah donese odluku. Dajete mu priliku da bolje razume problem, vidi kako razmišljate i stekne poverenje bez pritiska.",
            ],
            [
              "A webinar is a bridge between attention and a sales conversation. You’re not asking the buyer to decide immediately. You’re giving them a chance to understand the problem better, see how you think, and build trust without pressure.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "zasto-lakse",
      title: L("Zašto lakše od call-a", "Why easier than a call"),
      blocks: [
        {
          type: "fork-paths",
          versus: L("vs", "vs"),
          left: {
            label: L("Sales call", "Sales call"),
            title: L("Očekuje prodaju", "Expects a pitch"),
            body: L(
              "Otpor: Da li mi treba? Koliko traje? Da li će me pritiskati? Da li sada imam vremena?",
              "Resistance: Do I need this? How long? Will they pressure me? Do I have time now?",
            ),
            tone: "danger",
          },
          right: {
            label: L("Webinar", "Webinar"),
            title: L("Dolazi zbog znanja", "Comes for knowledge"),
            body: L(
              "Ne mora da priča, donosi odluku ni da objašnjava situaciju. Može samo da sluša.",
              "Doesn’t have to talk, decide, or explain their situation. They can just listen.",
            ),
            tone: "accent",
          },
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "Webinar privlači ljude koji nikada ne bi odmah pristali na demo. Često su to veoma dobri budući kupci — samo još nisu spremni za direktan sales korak.",
            "A webinar attracts people who would never agree to a demo right away. They’re often very good future buyers — just not ready for a direct sales step yet.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "ne-usluga",
      title: L("Ne počinje uslugom", "Doesn’t start with your offer"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Najveća greška: webinar kao prikrivena prezentacija firme — ko ste, metodologija, usluge, pa „zakažite call“. To nije webinar. To je dugačak sales pitch.",
              "Dobar webinar kreće od problema koji kupac već oseća. Naslov opisuje rezultat ili problem koji želi da razume — ne ono što vi želite da mu prodate.",
            ],
            [
              "Biggest mistake: a webinar as a disguised company deck — who you are, methodology, services, then “book a call.” That isn’t a webinar. It’s a long sales pitch.",
              "A good webinar starts from a problem the buyer already feels. The title describes an outcome or problem they want to understand — not what you want to sell them.",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "Kako napraviti sales sistem koji ne zavisi od preporuka",
              "Zašto vam outbound ne radi iako pišete pravim ljudima",
              "Kako founder content pomaže sales-u da ne počinje od nule",
              "Kako povezati outreach, content i CRM u stabilan pipeline",
            ],
            [
              "How to build a sales system that doesn’t depend on referrals",
              "Why outbound doesn’t work even when you message the right people",
              "How founder content helps sales not start from zero",
              "How to connect outreach, content, and CRM into a stable pipeline",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "promena-pogleda",
      title: L("Promena pogleda na problem", "Changing how they see the problem"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Najbolji webinar nije onaj posle kog kupac ima najviše beležaka. Najbolji je onaj posle kog problem vidi drugačije.",
            ],
            [
              "The best webinar isn’t the one after which the buyer has the most notes. It’s the one after which they see the problem differently.",
            ],
          ),
        },
        {
          type: "table",
          caption: L(
            "Pre → posle",
            "Before → after",
          ),
          headers: [
            L("Pre webinara", "Before the webinar"),
            L("Posle webinara", "After the webinar"),
          ],
          rows: [
            {
              cells: [
                L("„Treba nam bolja outreach poruka.“", "“We need a better outreach message.”"),
                L("Problem nije samo poruka — nema ICP, content, follow-up, CRM signale.", "The problem isn’t just the message — missing ICP, content, follow-up, CRM signals."),
              ],
            },
            {
              cells: [
                L("„Treba još jedan sales čovek.“", "“We need one more salesperson.”"),
                L("Bez sistema nova osoba samo radi više istog ručno.", "Without a system, a new hire just does more of the same manually."),
              ],
            },
            {
              cells: [
                L("„Content je posao marketinga.“", "“Content is marketing’s job.”"),
                L("Content treba da pripremi kupca za sales razgovor.", "Content should prepare the buyer for a sales conversation."),
              ],
            },
          ],
        },
        {
          type: "lead",
          text: L(
            "Ako kupac prihvati vašu dijagnozu problema, mnogo lakše razume zašto mu treba vaš sistem — bez agresivne prodaje.",
            "If the buyer accepts your diagnosis of the problem, they much more easily understand why they need your system — without aggressive selling.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "tema",
      title: L("Kako izabrati temu", "How to choose the topic"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Dobra tema dolazi iz realnih sales razgovora: pitanja koja se ponavljaju, problem koji pogrešno razumeju, objection, gde odlažu odluku, šta moraju interno da objasne, greška pre nego što dođu kod vas.",
              "Ako na svakom call-u objašnjavate istu stvar — verovatno imate webinar temu. Dobar webinar rešava jednu veliku konfuziju. Ne pokušava da objasni sve što znate.",
            ],
            [
              "A good topic comes from real sales conversations: repeating questions, a problem they misunderstand, objections, where they delay decisions, what they must explain internally, the mistake before they come to you.",
              "If you explain the same thing on every call — you probably have a webinar topic. A good webinar solves one big confusion. It doesn’t try to explain everything you know.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "struktura",
      title: L("Struktura webinara", "Webinar structure"),
      blocks: [
        {
          type: "workflow",
          title: L("Pet delova", "Five parts"),
          steps: P(
            [
              "Problem koji kupac prepoznaje („Ovo zvuči kao mi.“)",
              "Zašto trenutni pristup ne radi",
              "Novi način razmišljanja (framework, ne lista usluga)",
              "Praktičan primer u realnosti",
              "Sledeći korak — kome call ima smisla",
            ],
            [
              "A problem the buyer recognizes (“This sounds like us.”)",
              "Why the current approach doesn’t work",
              "A new way of thinking (framework, not a service list)",
              "A practical real-world example",
              "Next step — for whom a call makes sense",
            ],
          ),
          highlight: L(
            "Na kraju nemojte samo „zakažite call“. Recite kome ima smisla. Ne treba vam svaki učesnik — treba vam nekoliko pravih.",
            "At the end don’t just say “book a call.” Say for whom it makes sense. You don’t need every attendee — you need a few of the right ones.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "signal",
      title: L("Kvalifikacioni signal", "Qualification signal"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Registracija nije isto što i lajk. Osoba je videla temu, ocenila da joj je važna, ostavila podatke, odvojila vreme — možda prisustvovala, postavila pitanje, ostala do kraja. Svaki korak je signal.",
              "Neko ko se samo registrovao nije isti kao osoba koja je ostala do kraja i postavila konkretno pitanje. Zato podatke treba povezati sa CRM-om.",
            ],
            [
              "Registration isn’t the same as a like. The person saw the topic, judged it important enough, left details, set aside time — maybe attended, asked a question, stayed to the end. Each step is a signal.",
              "Someone who only registered isn’t the same as someone who stayed to the end and asked a concrete question. That’s why the data needs to connect to CRM.",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "ko se registrovao / prisustvovao / koliko dugo,",
              "koje pitanje je postavio, na koju temu reagovao,",
              "da li je posle otvorio email ili kliknuo case study,",
              "da li je već bio u outreach-u,",
              "da li je neko drugi iz iste firme bio prisutan.",
            ],
            [
              "who registered / attended / how long,",
              "which question they asked, which topic they reacted to,",
              "whether they later opened email or clicked a case study,",
              "whether they were already in outreach,",
              "whether someone else from the same company attended.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "vise-od-novih",
      title: L("Više od novih leadova", "More than new leads"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Webinar možete koristiti za hladne leadove, reaktivaciju starih, ljude kojima nije bio prioritet, više osoba iz target firme, posle prvog call-a, postojeće klijente — ili kao razlog za follow-up.",
            ],
            [
              "You can use a webinar for cold leads, reactivating old ones, people for whom it wasn’t a priority, multiple people in a target company, after a first call, existing clients — or as a follow-up reason.",
            ],
          ),
        },
        {
          type: "big-statement",
          variant: "quiet",
          statement: L(
            "Umesto „samo proveravam…“ — „Organizujemo webinar o problemu koji ste pomenuli.“",
            "Instead of “just checking in…” — “We’re hosting a webinar on the problem you mentioned.”",
          ),
          support: L(
            "Vrednost nije samo u broju registracija. Vrednost je što sales dobija prirodan razlog da ponovo otvori razgovor.",
            "Value isn’t only in registration count. Value is that sales gets a natural reason to reopen the conversation.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "content-asset",
      title: L("Mesec dana contenta", "A month of content"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Webinar ne treba da umre posle sat vremena. Iz jednog dobrog snimka: short video, text postovi, carousel, newsletter, FAQ, odgovori na objection-e, follow-up materijal, delovi za sajt.",
              "Pre webinara objavljujete problem. Tokom promocije različite uglove. Posle — glavne lekcije. Sales koristi snimak u follow-up-u. Jedna tema dobija duži život.",
            ],
            [
              "A webinar shouldn’t die after an hour. From one good recording: short video, text posts, carousel, newsletter, FAQ, objection answers, follow-up material, site pieces.",
              "Before the webinar you publish the problem. During promotion, different angles. After — key lessons. Sales uses the recording in follow-up. One topic gets a longer life.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "live-vs-snimak",
      title: L("Live vs snimak", "Live vs recording"),
      blocks: [
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("Live", "Live"),
              subtitle: L("Hitnost + feedback", "Urgency + feedback"),
              variant: "accent",
              items: P(
                [
                  "Konkretan termin — razlog da se registruju sada",
                  "Pitanja uživo",
                  "Vidite koje teme izazivaju reakciju",
                ],
                [
                  "A concrete date — reason to register now",
                  "Live questions",
                  "You see which topics get reaction",
                ],
              ),
            },
            {
              title: L("Snimak", "Recording"),
              subtitle: L("Dugoročni nurture", "Long-term nurture"),
              variant: "muted",
              items: P(
                [
                  "Lead gleda kad njemu odgovara",
                  "Sales šalje tokom cele godine",
                  "Asset u outreach-u i CRM nurture-u",
                ],
                [
                  "Lead watches when it suits them",
                  "Sales sends it all year",
                  "Asset in outreach and CRM nurture",
                ],
              ),
            },
          ],
        },
        {
          type: "callout",
          variant: "default",
          text: L(
            "Najbolji sistem koristi oba: prvo live, zatim snimak kao asset u outreach-u, follow-up-u, contentu i nurture-u.",
            "The best system uses both: live first, then the recording as an asset in outreach, follow-up, content, and nurture.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "promocija",
      title: L("Promocija", "Promotion"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Nemojte se osloniti na jednu LinkedIn objavu. Founder content, direktan poziv leadova, email starim leadovima, više profila iz firme, više osoba u target firmi, retargeting, partneri.",
              "Najbolja promocija ne ponavlja samo „prijavite se“. Kroz više objava pokazuje zašto tema zaslužuje pažnju — problem, statistika, situacija sa klijentom, zabluda, šta će tačno naučiti. Promocija sama već edukuje tržište.",
            ],
            [
              "Don’t rely on one LinkedIn post. Founder content, direct invites to leads, email to old leads, multiple company profiles, multiple people in the target company, retargeting, partners.",
              "The best promotion doesn’t only repeat “register.” Across several posts it shows why the topic deserves attention — problem, statistic, client situation, misconception, what they’ll actually learn. Promotion itself already educates the market.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "follow-up",
      title: L("Follow-up posle", "Follow-up after"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Najveća greška: isti email svima — „Hvala. Evo snimka.“ To je minimum. Bolji follow-up zavisi od ponašanja.",
            ],
            [
              "Biggest mistake: the same email to everyone — “Thanks. Here’s the recording.” That’s the minimum. Better follow-up depends on behavior.",
            ],
          ),
        },
        {
          type: "table",
          caption: L(
            "Ponašanje → sledeći korak",
            "Behavior → next step",
          ),
          headers: [
            L("Šta su uradili", "What they did"),
            L("Šta dobijaju", "What they get"),
          ],
          rows: [
            {
              cells: [
                L("Prisustvovali do kraja", "Attended to the end"),
                L("Direktnije pitanje / razgovor", "More direct question / conversation"),
              ],
            },
            {
              cells: [
                L("Registrovali se, nisu došli", "Registered, didn’t show"),
                L("Snimak + glavne lekcije", "Recording + key lessons"),
              ],
            },
            {
              cells: [
                L("Postavili pitanje", "Asked a question"),
                L("Odgovor + relevantan case study", "Answer + relevant case study"),
              ],
            },
            {
              cells: [
                L("Više signala / target firma", "More signals / target company"),
                L("Personalizovan follow-up ili konsultacija", "Personalized follow-up or consultation"),
              ],
            },
            {
              cells: [
                L("Još nisu spremni", "Not ready yet"),
                L("Nurture", "Nurture"),
              ],
            },
          ],
        },
        {
          type: "lead",
          text: L(
            "Webinar nije kraj procesa. Često je tek početak ozbiljnijeg razgovora.",
            "A webinar isn’t the end of the process. Often it’s the start of a more serious conversation.",
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
              "prisustvo, trajanje, pitanja,",
              "koliko target firmi je bilo prisutno,",
              "otvoreni sastanci i reaktivirani stari leadovi,",
              "koji segment / tema je izazvala najviše interesovanja,",
              "koliko pipeline-a je webinar pomogao da se napravi ili ubrza.",
            ],
            [
              "attendance, duration, questions,",
              "how many target companies attended,",
              "meetings opened and old leads reactivated,",
              "which segment / topic drove the most interest,",
              "how much pipeline the webinar helped create or accelerate.",
            ],
          ),
        },
        {
          type: "big-statement",
          variant: "accent",
          statement: L(
            "50 pravih ljudi može biti vrednije od 500 pogrešnih.",
            "50 of the right people can be worth more than 500 of the wrong ones.",
          ),
          support: L(
            "Ne merimo samo publiku. Merimo kvalitet i sledeće korake.",
            "We don’t only measure audience size. We measure quality and next steps.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "greske",
      title: L("Najčešće greške", "Common mistakes"),
      blocks: [
        {
          type: "bullets",
          items: P(
            [
              "Preširoka tema („Kako povećati prodaju“) — nije dovoljno specifično.",
              "Previše prodaje — prvih 20 minuta o sebi.",
              "Previše teorije — treba framework + konkretan primer.",
              "Slab CTA — nije jasno kome sledeći korak ima smisla.",
              "Podaci ne ulaze u CRM.",
              "Nema follow-up sistema — pažnja bez pipeline-a.",
            ],
            [
              "Topic too broad (“How to increase sales”) — not specific enough.",
              "Too much selling — first 20 minutes about yourselves.",
              "Too much theory — need framework + a concrete example.",
              "Weak CTA — unclear for whom the next step makes sense.",
              "Data doesn’t enter CRM.",
              "No follow-up system — attention without pipeline.",
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
            "Pre nego što zakažete webinar",
            "Before you schedule a webinar",
          ),
          items: P(
            [
              "Koji konkretan problem obrađujemo — za koji ICP?",
              "Koju pogrešnu pretpostavku želimo da promenimo?",
              "Šta kupac treba da razume do kraja?",
              "Koji framework i primer pokazujemo?",
              "Ko promoviše — koje leadove direktno pozivamo?",
              "Kako registracije i signali ulaze u CRM?",
              "Koji follow-up dobija ko je došao / ko nije?",
              "Kako pretvaramo webinar u dodatni content?",
              "Koji je prirodan sledeći korak za kvalifikovanog kupca?",
            ],
            [
              "Which concrete problem — for which ICP?",
              "Which wrong assumption do we want to change?",
              "What should the buyer understand by the end?",
              "Which framework and example do we show?",
              "Who promotes — which leads do we invite directly?",
              "How do registrations and signals enter CRM?",
              "What follow-up does who attended / who didn’t get?",
              "How do we turn the webinar into more content?",
              "What’s the natural next step for a qualified buyer?",
            ],
          ),
        },
        {
          type: "big-statement",
          variant: "accent",
          eyebrow: L("Posao webinara", "The webinar’s job"),
          statement: L(
            "Da kupac pređe iz „ovo mi je zanimljivo“ u „ovo treba da rešimo.“",
            "That the buyer moves from “this is interesting” to “we need to solve this.”",
          ),
          support: L(
            "Edukacija, poverenje, ko ima pravi problem — i novi razlog za sales razgovor.",
            "Education, trust, who has the real problem — and a new reason for a sales conversation.",
          ),
        },
      ],
    },
  ],
  faq: [
    {
      question: L(
        "Koliko često raditi webinare?",
        "How often should we run webinars?",
      ),
      answer: L(
        "Bolje jedan jak mesečno/kvartalno sa jasnom temom i follow-up sistemom, nego česti događaji bez CRM-a i promocije. Kvalitet i obrada učesnika vrede više od frekvencije.",
        "Better one strong monthly/quarterly with a clear topic and follow-up system than frequent events without CRM and promotion. Quality and handling attendees matter more than frequency.",
      ),
    },
    {
      question: L(
        "Šta ako malo ljudi dođe uživo?",
        "What if few people show up live?",
      ),
      answer: L(
        "Snimak i dalje radi kao nurture i follow-up asset. Merite target firme i sledeće korake — ne samo live attendance.",
        "The recording still works as a nurture and follow-up asset. Measure target companies and next steps — not only live attendance.",
      ),
    },
    {
      question: L(
        "Da li webinar zamenjuje content?",
        "Does a webinar replace content?",
      ),
      answer: L(
        "Ne — pojačava ga. Jedan webinar može da hrani mesec dana objava, a content unapred greje registracije.",
        "No — it amplifies it. One webinar can feed a month of posts, and content beforehand warms up registrations.",
      ),
    },
  ],
  sources: [],
  relatedLessons: {
    previous: {
      slug: "follow-up-system",
      title: L(
        "Follow up sistem: zašto većina prodaje ne dolazi iz prve poruke",
        "Follow-Up System: Why Most Sales Don’t Come From the First Message",
      ),
    },
    next: {
      slug: "crm-and-buying-signals",
      title: L(
        "CRM i buying signals: kako da znate ko se zagreva",
        "CRM and Buying Signals: How to Know Who Is Warming Up",
      ),
      note: L(
        "Sledeće: kako CRM prati ko se zagreva — ne samo ko je u bazi.",
        "Next: how CRM tracks who’s warming up — not just who’s in the database.",
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
      "Želiš webinar koji priprema kupce, ne samo puni Zoom?",
      "Want a webinar that prepares buyers, not just fills Zoom?",
    ),
    body: L(
      "Možemo da povežemo temu, promociju, CRM signale i follow-up u jedan proces.",
      "We can connect topic, promotion, CRM signals, and follow-up into one process.",
    ),
    primaryLabel: L("Zakaži konsultaciju", "Book a consultation"),
    secondaryLabel: L("Sledeća lekcija", "Next lesson"),
  },
  seoKeywords: P(
    [
      "B2B webinar",
      "webinar za lead generisanje",
      "edukacija kupaca pre sales call-a",
      "webinar follow up",
      "founder led growth webinar",
    ],
    [
      "B2B webinar",
      "webinar lead generation",
      "educating buyers before sales call",
      "webinar follow-up",
      "founder led growth webinar",
    ],
  ),
};
