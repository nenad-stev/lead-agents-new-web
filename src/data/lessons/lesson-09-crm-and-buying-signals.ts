import type { RichLessonContent } from "@/types/rich-lesson";

const L = (sr: string, en: string) => ({ sr, en });
const P = (sr: string[], en: string[]) => ({ sr, en });

export const lesson09RichContent: RichLessonContent = {
  meta: {
    stage: L("Sistemi", "Systems"),
    readingTime: L("18–22 min", "18–22 min"),
    difficulty: L("Početnik–srednji", "Beginner–intermediate"),
    outcome: L(
      "CRM nije arhiva prošlosti — to je radar koji pokazuje ko se zagreva i šta je sledeći korak.",
      "CRM isn’t an archive of the past — it’s a radar that shows who’s warming up and what’s next.",
    ),
    recommendedTools: L(
      "HubSpot / Pipedrive / Breakcold, webinar + email sync",
      "HubSpot / Pipedrive / Breakcold, webinar + email sync",
    ),
  },
  hero: {
    eyebrow: L("Lekcija 9", "Lesson 9"),
    title: L(
      "CRM i buying signals: kako da znate ko se zagreva",
      "CRM and Buying Signals: How to Know Who Is Warming Up",
    ),
    paragraphs: P(
      [
        "Većina firmi koristi CRM da beleži šta se već desilo: sastanak, ponuda, faza, „nije zainteresovan“, prestao da odgovara. To jeste korisno — ali je samo mali deo posla.",
        "Dobar CRM ne pokazuje samo prošlost. Pomaže da odlučite šta da uradite sledeće: ko se zagreva, kome case study, ko je spreman za razgovor, ko ide u nurture, ko se ponovo aktivira.",
      ],
      [
        "Most companies use CRM to log what already happened: meeting, proposal, stage, “not interested,” stopped replying. That’s useful — but only a small part of the job.",
        "A good CRM doesn’t only show the past. It helps you decide what to do next: who’s warming up, who needs a case study, who’s ready to talk, who goes to nurture, who’s reactivating.",
      ],
    ),
    callout: L(
      "Ako CRM ne pomaže da odgovorite na ta pitanja, nije sales sistem. Samo je urednija baza kontakata.",
      "If CRM doesn’t help you answer those questions, it isn’t a sales system. It’s just a tidier contact database.",
    ),
  },
  toc: [
    { id: "kontakti", title: L("Kontakti nisu pipeline", "Contacts aren’t pipeline") },
    { id: "signal", title: L("Šta je buying signal", "What a buying signal is") },
    { id: "nije-intent", title: L("Jedan signal nije intent", "One signal isn’t intent") },
    { id: "povezivanje", title: L("CRM povezuje signale", "CRM connects signals") },
    { id: "radar", title: L("CRM kao radar", "CRM as a radar") },
    { id: "scoring", title: L("Lead scoring sa smislom", "Lead scoring that makes sense") },
    { id: "committee", title: L("Buying committee", "Buying committee") },
    { id: "multi-threading", title: L("Multi-threading", "Multi-threading") },
    { id: "akcija", title: L("Signal → akcija", "Signal → action") },
    { id: "brzina", title: L("Brzina reakcije", "Speed of response") },
    { id: "stari", title: L("Stari leadovi", "Old leads") },
    { id: "automatizacija", title: L("Automatizacija i AI", "Automation and AI") },
    { id: "faze", title: L("CRM faze", "CRM stages") },
    { id: "merenje", title: L("Šta meriti", "What to measure") },
    { id: "greske", title: L("Najčešće greške", "Common mistakes") },
    { id: "checklist", title: L("Mini checklist", "Mini checklist") },
  ],
  blocks: [
    {
      type: "section",
      id: "kontakti",
      title: L("Kontakti nisu pipeline", "Contacts aren’t pipeline"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Firma može imati deset hiljada kontakata u CRM-u i opet nemati pipeline. Kontakt sam po sebi ne znači mnogo — guide, stari webinar, odgovor od pre osam meseci, sastanak sa lošim timingom, poseta sajtu, unos iz Sales Navigatora.",
            ],
            [
              "A company can have ten thousand contacts in CRM and still have no pipeline. A contact alone doesn’t mean much — a guide download, an old webinar, a reply from eight months ago, a meeting with bad timing, a site visit, an import from Sales Navigator.",
            ],
          ),
        },
        {
          type: "big-statement",
          variant: "quiet",
          statement: L(
            "Pipeline nastaje tek kada se spoje: ICP fit, problem, poverenje, signal, timing i jasan sledeći korak.",
            "Pipeline only appears when you combine: ICP fit, problem, trust, signal, timing, and a clear next step.",
          ),
          support: L(
            "Zadatak CRM-a je da vam pomogne da tu kombinaciju prepoznate.",
            "CRM’s job is to help you recognize that combination.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "signal",
      title: L("Šta je buying signal", "What a buying signal is"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Buying signal je ponašanje ili promena koja može da pokaže da kupac postaje spremniji za razgovor. Ne znači da želi da kupi — znači da se nešto promenilo.",
            ],
            [
              "A buying signal is behavior or a change that can show the buyer is becoming more ready for a conversation. It doesn’t mean they want to buy — it means something changed.",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "otvoreni emailovi, case study klik, webinar (registracija / prisustvo / pitanje),",
              "reakcija na content, poseta profilu ili ključnoj stranici,",
              "ponovna aktivacija posle dužeg ćutanja,",
              "firma zapošljava, investicija, novo tržište, novi proizvod, promena rukovodstva,",
              "neko iz firme priča o problemu koji rešavate.",
            ],
            [
              "opened emails, case study click, webinar (registration / attendance / question),",
              "reaction to content, profile or key page visit,",
              "reactivation after a long silence,",
              "company hiring, investment, new market, new product, leadership change,",
              "someone in the company talking about the problem you solve.",
            ],
          ),
        },
        {
          type: "lead",
          text: L(
            "Jedan signal ne mora da znači mnogo. Više signala zajedno može da pokaže ozbiljan momentum.",
            "One signal alone may not mean much. Several together can show real momentum.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "nije-intent",
      title: L("Jedan signal nije intent", "One signal isn’t intent"),
      blocks: [
        {
          type: "fork-paths",
          versus: L("vs", "vs"),
          left: {
            label: L("Greška", "Mistake"),
            title: L("Svaki klik = pitch", "Every click = pitch"),
            body: L(
              "Lajk, otvoren email, poseta sajtu — odmah agresivan call. Kupac oseća da ga pratite.",
              "Like, opened email, site visit — immediate aggressive call. The buyer feels watched.",
            ),
            tone: "danger",
          },
          right: {
            label: L("Bolje", "Better"),
            title: L("Signal = kontekst", "Signal = context"),
            body: L(
              "Procena: fit + istorija + više signala + promena u firmi. Tek onda pažnja sales-a.",
              "Assess: fit + history + multiple signals + company change. Only then sales attention.",
            ),
            tone: "accent",
          },
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Ako osoba odgovara ICP-u, bila je u outreach-u, pogledala relevantne postove, kliknula case study, registrovala se za webinar i firma širi sales tim — to više nije običan cold lead. Postoji kontekst, poznatost i razlog da sales obrati pažnju.",
            ],
            [
              "If the person matches ICP, was in outreach, viewed relevant posts, clicked a case study, registered for a webinar, and the company is expanding sales — that’s no longer a plain cold lead. There’s context, familiarity, and a reason for sales to pay attention.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "povezivanje",
      title: L("CRM povezuje signale", "CRM connects signals"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "U većini firmi podaci postoje, ali su razbacani: outreach, email, LinkedIn, webinar, forme na emailu, beleške u CRM-u, sheet, Slack, glava sales osobe. Problem nije manjak podataka — niko ne vidi celu sliku.",
              "Kada sales otvori kontakt, treba da vidi: ko je, firma, zašto ICP fit, mogući problem, koje poruke, šta otvoreno/kliknuto, content, webinar, prethodni razgovor, poslednji signal i preporučeni sledeći korak.",
            ],
            [
              "In most companies the data exists but is scattered: outreach, email, LinkedIn, webinar, forms in email, notes in CRM, a sheet, Slack, a salesperson’s head. The problem isn’t lack of data — nobody sees the full picture.",
              "When sales opens a contact, they should see: who, company, why ICP fit, possible problem, which messages, what opened/clicked, content, webinar, prior conversation, latest signal, and recommended next step.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "To je kontekst. A kontekst menja kvalitet sales razgovora.",
            "That’s context. And context changes the quality of the sales conversation.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "radar",
      title: L("CRM kao radar", "CRM as a radar"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Najbolji način da razmišljate o CRM-u je kao o radaru. Ne pravi prilike sam — pokazuje gde se nešto dešava.",
            ],
            [
              "The best way to think about CRM is as a radar. It doesn’t create opportunities alone — it shows where something is happening.",
            ],
          ),
        },
        {
          type: "pipeline-flow",
          title: L("Šta radar razlikuje", "What the radar separates"),
          stages: [
            L("Hladan kontakt", "Cold contact"),
            L("ICP fit", "ICP fit"),
            L("Zagreva se", "Warming up"),
            L("Intent", "Intent"),
            L("Aktivna prilika", "Active opportunity"),
            L("Reaktivacija", "Reactivation"),
          ],
        },
        {
          type: "lead",
          text: L(
            "Bez radara sales reaguje nasumično — poslednji lead, ono čega se seti, najglasnija prilika. Sa radarom prioritet dolazi iz podataka i konteksta.",
            "Without a radar, sales reacts randomly — latest lead, whatever they remember, the loudest opportunity. With a radar, priority comes from data and context.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "scoring",
      title: L("Lead scoring sa smislom", "Lead scoring that makes sense"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Mnoge firme dodaju poene na svaku aktivnost — otvoren email 2, klik 5, webinar 10. Korisno, ali lako pravi lažne signale: loš fit koji klikće puno, ili savršen ICP koji skoro ne klikće a interno istražuje.",
              "Scoring ne treba da gleda samo ponašanje. Treba da spoji tri elementa.",
            ],
            [
              "Many companies add points to every activity — email open 2, click 5, webinar 10. Useful, but easy to create false signals: a bad fit who clicks a lot, or a perfect ICP who barely clicks while researching internally.",
              "Scoring shouldn’t look only at behavior. It should combine three elements.",
            ],
          ),
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("ICP fit", "ICP fit"),
              subtitle: L("Pravi kupac?", "Right buyer?"),
              variant: "accent",
              items: P(
                [
                  "Tip firme, veličina, industrija",
                  "Geografija, budžetski kapacitet",
                  "Relevantna uloga osobe",
                ],
                [
                  "Company type, size, industry",
                  "Geography, budget capacity",
                  "Relevant role of the person",
                ],
              ),
            },
            {
              title: L("Problem i timing", "Problem & timing"),
              subtitle: L("Zašto sada?", "Why now?"),
              variant: "muted",
              items: P(
                [
                  "Signal da firma ima problem",
                  "Rast, hiring, nova ponuda",
                  "Promena procesa / tržišta",
                ],
                [
                  "Signal the company has the problem",
                  "Growth, hiring, new offer",
                  "Process / market change",
                ],
              ),
            },
            {
              title: L("Ponašanje", "Behavior"),
              subtitle: L("Šta rade?", "What are they doing?"),
              variant: "muted",
              items: P(
                [
                  "Content, klikovi, webinari",
                  "Odgovori na poruke",
                  "Više ljudi iz iste firme",
                ],
                [
                  "Content, clicks, webinars",
                  "Replies to messages",
                  "More people from the same company",
                ],
              ),
            },
          ],
        },
        {
          type: "callout",
          variant: "default",
          text: L(
            "Ne pokušavate da pogodite ko će sigurno kupiti. Pokušavate da odlučite gde sales prvo uloži vreme.",
            "You’re not trying to guess who will definitely buy. You’re deciding where sales should invest time first.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "committee",
      title: L("Buying committee", "Buying committee"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "U ozbiljnoj B2B prodaji često nije dovoljna aktivnost jedne osobe. Mnogo jači signal: više ljudi iz iste firme reaguje — webinar, profil, outreach, guide, pricing/case study. Pojedinačno slabo; zajedno — tema se možda interno širi.",
              "CRM treba da gleda i account nivo: koje funkcije, ko oseća problem, ko kontroliše budžet, ko može da pokrene ili blokira odluku.",
            ],
            [
              "In serious B2B sales, one person’s activity often isn’t enough. A much stronger signal: more people from the same company reacting — webinar, profile, outreach, guide, pricing/case study. Weak alone; together — the topic may be spreading internally.",
              "CRM should also look at account level: which functions, who feels the problem, who controls budget, who can start or block the decision.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "multi-threading",
      title: L("Multi-threading", "Multi-threading"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Ako jedna osoba prestane da odgovara, deal ne mora da bude mrtav — možda nije vlasnik problema, nema uticaj, nije prioritet. CRM treba da pokaže ko je kontaktiran, sa kog profila, koji angle, ko je odgovorio / video content / bio na webinaru, ko još nije uključen.",
              "Tako ne šaljete pet istih poruka istoj firmi. Koordinisano gradite prisutnost — founder sa CEO-om, sales sa Head of Sales-om — a podaci se vraćaju u isti sistem.",
            ],
            [
              "If one person stops replying, the deal doesn’t have to be dead — maybe they aren’t the problem owner, lack influence, or it’s not a priority. CRM should show who’s been contacted, from which profile, which angle, who replied / saw content / attended a webinar, who isn’t involved yet.",
              "That way you don’t send five identical messages to the same company. You build presence in a coordinated way — founder with CEO, sales with Head of Sales — and data returns to the same system.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "akcija",
      title: L("Signal → akcija", "Signal → action"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Podatak bez akcije nema veliku vrednost. Ako CRM pokaže klik, a niko ne zna šta dalje — signal se gubi. Svaki važan signal treba da ima logiku sledećeg koraka.",
            ],
            [
              "Data without action has little value. If CRM shows a click and nobody knows what’s next — the signal is lost. Every important signal needs next-step logic.",
            ],
          ),
        },
        {
          type: "table",
          caption: L(
            "Primeri logike",
            "Logic examples",
          ),
          headers: [
            L("Signal", "Signal"),
            L("Sledeći korak", "Next step"),
          ],
          rows: [
            {
              cells: [
                L("Dobar fit + registracija za webinar", "Good fit + webinar registration"),
                L("Personalizovan poziv", "Personalized invite"),
              ],
            },
            {
              cells: [
                L("Prisustvo do kraja", "Attended to the end"),
                L("Task za follow-up sales-u", "Follow-up task for sales"),
              ],
            },
            {
              cells: [
                L("Klik na case study iz industrije", "Click on industry case study"),
                L("Još jedan relevantan primer", "Another relevant example"),
              ],
            },
            {
              cells: [
                L("Više ljudi iz iste firme", "Multiple people from same company"),
                L("Account više na prioritetu", "Raise account priority"),
              ],
            },
            {
              cells: [
                L("Stari lead ponovo otvara poruke", "Old lead reopening emails"),
                L("Obaveštenje sales-u", "Notify sales"),
              ],
            },
            {
              cells: [
                L("„Javite se za 3 meseca“", "“Reach out in 3 months”"),
                L("Automatski task u CRM-u", "Automatic CRM task"),
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "CRM ne treba samo da beleži signal. Treba da ga pretvori u akciju.",
            "CRM shouldn’t only log the signal. It should turn it into action.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "brzina",
      title: L("Brzina reakcije", "Speed of response"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Slab signal ne zahteva trenutnu reakciju. Jak signal — forma, demo, cena, odgovor na outreach, više osoba iz firme, konkretno pitanje na webinaru, reaktivacija ozbiljnog leada — zahteva brzinu.",
            ],
            [
              "A weak signal doesn’t require an instant reaction. A strong signal — form, demo, pricing, outreach reply, multiple people from the company, a concrete webinar question, reactivation of a serious lead — requires speed.",
            ],
          ),
        },
        {
          type: "workflow",
          title: L("Od jakog signala do kontakta", "From strong signal to contact"),
          steps: P(
            [
              "Lead u CRM + odgovorna osoba",
              "Obaveštenje sales-u",
              "Kontekst: izvor, šta video, problem, istorija",
              "Brz i relevantan kontakt",
            ],
            [
              "Lead in CRM + owner",
              "Notify sales",
              "Context: source, what they saw, problem, history",
              "Fast and relevant contact",
            ],
          ),
          highlight: L(
            "Cilj nije samo reagovati brzo. Cilj je reagovati brzo i relevantno.",
            "The goal isn’t only to react fast. It’s to react fast and relevantly.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "stari",
      title: L("Stari leadovi", "Old leads"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Većina firmi stalno traži nove leadove, a u CRM-u već ima ljude koji su nekada pokazali interesovanje — loš timing, budžet, kapacitet, drugi prioritet, drugo rešenje. To ne znači da zauvek nisu kupci.",
              "Pratite: promena posla, rast firme, nova osoba, ponovni content, nova potreba, prošao period koji su pomenuli. Reaktivacija je često lakša od hladnog outreach-a — kontekst i poznatost već postoje.",
            ],
            [
              "Most companies constantly chase new leads while CRM already holds people who once showed interest — bad timing, budget, capacity, other priority, another solution. That doesn’t mean they’re never buyers.",
              "Watch for: job change, company growth, new hire, returning to content, new need, the period they mentioned has passed. Reactivation is often easier than cold outreach — context and familiarity already exist.",
            ],
          ),
        },
        {
          type: "big-statement",
          variant: "accent",
          eyebrow: L("Potcenjeno", "Underrated"),
          statement: L(
            "Stari leadovi su često najpotcenjeniji deo CRM sistema.",
            "Old leads are often the most underrated part of the CRM system.",
          ),
          support: L(
            "Već znaju ko ste. Već su razmišljali o problemu. Samo timing ranije nije bio dobar.",
            "They already know who you are. They already thought about the problem. Only the timing wasn’t right before.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "automatizacija",
      title: L("Automatizacija i AI", "Automation and AI"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Ako sales mora ručno da unosi sve, sistem postaje netačan. Što više podataka treba automatski: forme, outreach, email, webinar, kalendar, call snimci, enrichment.",
              "Automatizacija kreira kontakt, povezuje firmu, beleži izvor i aktivnost, score, task, obaveštenje, predlog sledećeg koraka. Sales unosi ono što automatizacija ne razume dobro: pravi problem, interna dinamika, rizici, objection, budžet, način odluke.",
            ],
            [
              "If sales has to enter everything manually, the system becomes inaccurate. More data should enter automatically: forms, outreach, email, webinar, calendar, call recordings, enrichment.",
              "Automation creates the contact, links the company, logs source and activity, score, task, notification, next-step suggestion. Sales enters what automation doesn’t understand well: the real problem, internal dynamics, risks, objections, budget, decision process.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "Automatizacija čuva podatke. Čovek dodaje značenje. AI može da sažme call, izdvoji objection-e, predloži korak ili content, upozori na deal bez aktivnosti — ali samo ako su podaci i struktura dobri. Haotičan CRM + AI = brži haos.",
            "Automation stores data. Humans add meaning. AI can summarize a call, extract objections, suggest a step or content, flag a deal with no activity — but only if data and structure are good. Chaotic CRM + AI = faster chaos.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "faze",
      title: L("CRM faze", "CRM stages"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Faze treba da prate realan kupovni proces, ne samo interne aktivnosti. „Novi → kontaktiran → follow-up → call → ponuda → dobijen/izgubljen“ je previše grubo.",
            ],
            [
              "Stages should follow the real buying process, not only internal activities. “New → contacted → follow-up → call → proposal → won/lost” is too crude.",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "ICP fit bez aktivnosti / u outreach procesu,",
              "prvi signal → warm lead → kvalifikovan razgovor,",
              "aktivna prilika → ponuda / poslovni slučaj → odluka,",
              "nurture / reaktivacija,",
              "dobijen / izgubljen.",
            ],
            [
              "ICP fit with no activity / in outreach,",
              "first signal → warm lead → qualified conversation,",
              "active opportunity → proposal / business case → decision,",
              "nurture / reactivation,",
              "won / lost.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "default",
          text: L(
            "Faze moraju da pomognu timu da zna gde je kupac, šta je sledeće, i kada prilika više nije aktivna. Ako ih ljudi različito tumače, podaci brzo gube vrednost.",
            "Stages must help the team know where the buyer is, what’s next, and when an opportunity is no longer active. If people interpret them differently, data quickly loses value.",
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
              "leadovi po izvoru i segmentu,",
              "koji signal najčešće prethodi sastanku,",
              "vreme od kontakta do odgovora / od jakog signala do reakcije,",
              "zagrevanje kroz content i webinar → razgovor,",
              "reaktivacija starih leadova,",
              "prilike bez sledećeg koraka, gde se dealovi zaustavljaju,",
              "pipeline iz warm signala.",
            ],
            [
              "leads by source and segment,",
              "which signal most often precedes a meeting,",
              "time from contact to reply / from strong signal to response,",
              "warming through content and webinar → conversation,",
              "old lead reactivation,",
              "opportunities with no next step, where deals stall,",
              "pipeline from warm signals.",
            ],
          ),
        },
        {
          type: "lead",
          text: L(
            "CRM treba da vam pomogne da vidite obrasce u celom GTM sistemu — ne samo da broji dealove.",
            "CRM should help you see patterns across the whole GTM system — not only count deals.",
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
              "CRM kao administrativna obaveza — sales ne vidi vrednost, podaci loši.",
              "Previše polja — ljudi preskaču.",
              "Svaki klik = intent — buka.",
              "Samo pojedinac, ne firma — nestaje buying committee.",
              "Nema jasnog sledećeg koraka.",
              "Nije povezan sa drugim kanalima — fragmentacija.",
              "Nema procesa za reaktivaciju starih leadova.",
              "Samo reporting za management — umesto pomoći sales osobi.",
            ],
            [
              "CRM as admin duty — sales sees no value, data is bad.",
              "Too many fields — people skip them.",
              "Every click = intent — noise.",
              "Only the individual, not the company — buying committee disappears.",
              "No clear next step.",
              "Not connected to other channels — fragmentation.",
              "No process to reactivate old leads.",
              "Only reporting for management — instead of helping the salesperson.",
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
            "CRM i buying signals",
            "CRM and buying signals",
          ),
          items: P(
            [
              "Da li svaki kontakt ima jasno poreklo i zašto je ICP fit?",
              "Da li pratimo signale iz outreach-a, contenta, webinara i sajta?",
              "Da li vidimo sve kontakte iz iste firme?",
              "Da li scoring kombinuje fit, timing i ponašanje?",
              "Da li važan signal pokreće akciju + obaveštenje sa kontekstom?",
              "Da li postoji nurture i reaktivacija starih leadova?",
              "Da li CRM automatski kreira zadatke?",
              "Da li su faze jasne celom timu?",
              "Da li merimo vreme od signala do reakcije i koji signali vode do pipeline-a?",
            ],
            [
              "Does every contact have a clear source and why it’s an ICP fit?",
              "Do we track signals from outreach, content, webinars, and the site?",
              "Can we see all contacts from the same company?",
              "Does scoring combine fit, timing, and behavior?",
              "Does an important signal trigger action + a notification with context?",
              "Is there nurture and old-lead reactivation?",
              "Does CRM create tasks automatically?",
              "Are stages clear to the whole team?",
              "Do we measure time from signal to response and which signals lead to pipeline?",
            ],
          ),
        },
        {
          type: "big-statement",
          variant: "accent",
          eyebrow: L("CRM alat vs CRM sistem", "CRM tool vs CRM system"),
          statement: L(
            "Ako nemate odgovore — imate CRM alat. Još nemate pravi CRM sistem.",
            "If you don’t have the answers — you have a CRM tool. You don’t yet have a real CRM system.",
          ),
          support: L(
            "U Founder-Led Growth-u CRM nije mesto gde se čuvaju kontakti. To je mesto gde se pažnja pretvara u sledeću sales akciju.",
            "In Founder-Led Growth, CRM isn’t where contacts are stored. It’s where attention turns into the next sales action.",
          ),
        },
      ],
    },
  ],
  faq: [
    {
      question: L(
        "Koji CRM da koristimo?",
        "Which CRM should we use?",
      ),
      answer: L(
        "Manje važno koji alat — više da li povezuje kanale, beleži signale i pokreće sledeći korak. Počnite jednostavno, pa komplikujte samo kada tim stvarno koristi podatke.",
        "Less important which tool — more whether it connects channels, logs signals, and triggers the next step. Start simple, then complicate only when the team actually uses the data.",
      ),
    },
    {
      question: L(
        "Koliko signala treba pre nego što sales zove?",
        "How many signals before sales calls?",
      ),
      answer: L(
        "Zavisi od jačine. Jak intent (forma, demo, cena) — odmah. Slabiji (lajk, jedan otvoren email) — sačekajte kontekst ili više signala. Fit + timing + ponašanje zajedno odlučuju.",
        "Depends on strength. Strong intent (form, demo, pricing) — immediately. Weaker (like, one email open) — wait for context or more signals. Fit + timing + behavior together decide.",
      ),
    },
    {
      question: L(
        "Da li scoring mora biti automatski?",
        "Does scoring have to be automatic?",
      ),
      answer: L(
        "Pomaže, ali nije uslov. Važnije je da tim deli istu definiciju prioriteta. Automatizacija pojačava dobru logiku — ne zamenjuje je.",
        "It helps, but it isn’t required. More important is that the team shares the same priority definition. Automation amplifies good logic — it doesn’t replace it.",
      ),
    },
  ],
  sources: [],
  relatedLessons: {
    previous: {
      slug: "webinars-for-unready-buyers",
      title: L(
        "Webinari: kako da edukujete kupce koji još nisu spremni za sales razgovor",
        "Webinars: How to Educate Buyers Who Aren’t Ready for a Sales Call",
      ),
    },
    next: {
      slug: "ai-workflows-for-sales-system",
      title: L(
        "AI workflow-i: kako povezati sales sistem bez ručnog haosa",
        "AI Workflows: Connecting the Sales System Without Manual Chaos",
      ),
      note: L(
        "Sledeće: gde AI pomaže — i gde ne sme da zameni kontekst.",
        "Next: where AI helps — and where it mustn’t replace context.",
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
        slug: "follow-up-system",
        title: L(
          "Follow up sistem",
          "Follow-Up System",
        ),
      },
    ],
  },
  cta: {
    title: L(
      "Želiš CRM koji pokazuje ko se zagreva?",
      "Want a CRM that shows who’s warming up?",
    ),
    body: L(
      "Možemo da povežemo signale, scoring i sledeće korake tako da sales reaguje na kontekst, ne na osećaj.",
      "We can connect signals, scoring, and next steps so sales reacts to context, not gut feel.",
    ),
    primaryLabel: L("Zakaži konsultaciju", "Book a consultation"),
    secondaryLabel: L("Sledeća lekcija", "Next lesson"),
  },
  seoKeywords: P(
    [
      "CRM buying signals",
      "lead scoring B2B",
      "CRM kao radar",
      "buying committee signali",
      "reaktivacija starih leadova",
    ],
    [
      "CRM buying signals",
      "B2B lead scoring",
      "CRM as radar",
      "buying committee signals",
      "old lead reactivation",
    ],
  ),
};
