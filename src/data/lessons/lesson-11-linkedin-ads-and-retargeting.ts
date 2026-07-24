import type { RichLessonContent } from "@/types/rich-lesson";

const L = (sr: string, en: string) => ({ sr, en });
const P = (sr: string[], en: string[]) => ({ sr, en });

export const lesson11RichContent: RichLessonContent = {
  meta: {
    stage: L("Scale", "Scale"),
    readingTime: L("16–20 min", "16–20 min"),
    difficulty: L("Srednji", "Intermediate"),
    outcome: L(
      "Paid ne treba da izmišlja poruku — skalira ono što organski već dokazuje poverenje, uz retargeting i CRM.",
      "Paid shouldn’t invent the message — it scales what organic already proves builds trust, with retargeting and CRM.",
    ),
    recommendedTools: L(
      "LinkedIn Campaign Manager, CRM, retargeting publike",
      "LinkedIn Campaign Manager, CRM, retargeting audiences",
    ),
  },
  hero: {
    eyebrow: L("Lekcija 11", "Lesson 11"),
    title: L(
      "LinkedIn Ads i retargeting: kako skalirati ono što već radi",
      "LinkedIn Ads and Retargeting: How to Scale What Already Works",
    ),
    paragraphs: P(
      [
        "Paid Ads mogu brzo da potroše budžet — posebno u B2B-u: manja publika, skuplji klikovi, duži ciklus. Većina ljudi nije spremna da kupi u trenutku kada vidi oglas.",
        "Zato LinkedIn Ads ne treba da budu prva stvar koju firma pokrene. Ads ne popravljaju slab GTM — samo ga skaliraju.",
      ],
      [
        "Paid ads can burn budget fast — especially in B2B: smaller audience, more expensive clicks, longer cycle. Most people aren’t ready to buy the moment they see an ad.",
        "That’s why LinkedIn Ads shouldn’t be the first thing a company launches. Ads don’t fix a weak GTM — they only scale it.",
      ],
    ),
    callout: L(
      "U Founder-Led Growth-u oglase uvodimo tek kada znamo koji segment, problem, content, webinar, outreach angle i sledeći korak vode ka pipeline-u.",
      "In Founder-Led Growth we introduce ads only when we know which segment, problem, content, webinar, outreach angle, and next step lead to pipeline.",
    ),
  },
  toc: [
    { id: "laboratorija", title: L("Organski je laboratorija", "Organic is the lab") },
    { id: "uloge", title: L("Ads nisu samo lead gen", "Ads aren’t only lead gen") },
    { id: "hladno-vs-reto", title: L("Hladna publika vs retargeting", "Cold vs retargeting") },
    { id: "founder-ads", title: L("Founder content kao oglas", "Founder content as ads") },
    { id: "poverenje", title: L("Retargeting i poverenje", "Retargeting and trust") },
    { id: "outbound", title: L("Ads + outbound", "Ads + outbound") },
    { id: "abm", title: L("Account-based", "Account-based") },
    { id: "forme", title: L("Lead Gen forme", "Lead Gen forms") },
    { id: "webinar", title: L("Webinar promocija", "Webinar promotion") },
    { id: "offer", title: L("Pravi offer", "The right offer") },
    { id: "kreativa", title: L("Kreativa targetira", "Creative targets") },
    { id: "metrike", title: L("Ne samo CPC", "Not just CPC") },
    { id: "skaliranje", title: L("Kada skalirati", "When to scale") },
    { id: "budzet", title: L("Budžet", "Budget") },
    { id: "greske", title: L("Najčešće greške", "Common mistakes") },
    { id: "checklist", title: L("Mini checklist", "Mini checklist") },
  ],
  blocks: [
    {
      type: "section",
      id: "laboratorija",
      title: L("Organski je laboratorija", "Organic is the lab"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Pre budžeta, organski content pokazuje šta tržište razume. Ne gledajte samo lajkove — gledajte koji problem privlači prave ljude, koje objave target čuva, komentare iz industrije, posete profilu, šta sales koristi, šta kupci pominju na call-u, koji ugao diže reply u outreach-u.",
            ],
            [
              "Before budget, organic content shows what the market understands. Don’t only watch likes — watch which problem attracts the right people, which posts the target saves, industry comments, profile visits, what sales uses, what buyers mention on calls, which angle lifts outreach reply.",
            ],
          ),
        },
        {
          type: "big-statement",
          variant: "quiet",
          statement: L(
            "Organski content testira. Oglasi skaliraju.",
            "Organic content tests. Ads scale.",
          ),
          support: L(
            "Ne krećete naslepo — imate dokaz da određeni problem ili ugao izaziva pažnju. Neće svaki dobar post biti dobar oglas, ali niste na nuli.",
            "You don’t start blind — you have proof that a certain problem or angle gets attention. Not every good post becomes a good ad, but you’re not at zero.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "uloge",
      title: L("Ads nisu samo lead gen", "Ads aren’t only lead gen"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Većina firmi odmah traži lead: demo, forma, kontakt, ponuda. To može raditi kada kupac već razume problem i aktivno traži rešenje. U kompleksnom B2B-u većina publike nije tu — ne poznaju vas, ne razumeju problem, nemaju urgency, nemaju dovoljno poverenja da ostave podatke.",
            ],
            [
              "Most companies immediately ask for a lead: demo, form, contact, proposal. That can work when the buyer already understands the problem and is actively looking. In complex B2B most of the audience isn’t there — they don’t know you, don’t get the problem, have no urgency, don’t trust you enough to leave details.",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "poznatost i distribucija founder contenta,",
              "objašnjenje problema, webinar, case study,",
              "reaktivacija ljudi koji su već imali kontakt,",
              "podrška target account kampanji,",
              "ili kvalifikovan put do razgovora.",
            ],
            [
              "familiarity and distributing founder content,",
              "explaining the problem, webinar, case study,",
              "reactivating people who already touched you,",
              "supporting a target-account campaign,",
              "or a qualified path to a conversation.",
            ],
          ),
        },
        {
          type: "lead",
          text: L(
            "Ne mora svaki oglas odmah da traži sastanak. Nekad je posao samo da pomeri kupca jedan korak dalje.",
            "Not every ad has to ask for a meeting immediately. Sometimes its job is only to move the buyer one step further.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "hladno-vs-reto",
      title: L("Hladna publika vs retargeting", "Cold vs retargeting"),
      blocks: [
        {
          type: "fork-paths",
          versus: L("vs", "vs"),
          left: {
            label: L("Hladna", "Cold"),
            title: L("Prvi put vas vidi", "Sees you for the first time"),
            body: L(
              "Prvo pomozi da prepozna problem — ne traži odmah demo.",
              "First help them recognize the problem — don’t ask for a demo yet.",
            ),
            tone: "danger",
          },
          right: {
            label: L("Retargeting", "Retargeting"),
            title: L("Već imala interakciju", "Already had an interaction"),
            body: L(
              "Više dokaza i jasniji sledeći korak — video, sajt, webinar, content, outreach.",
              "More proof and a clearer next step — video, site, webinar, content, outreach.",
            ),
            tone: "accent",
          },
        },
        {
          type: "table",
          caption: L(
            "Ista firma — drugačiji nivo svesti",
            "Same company — different awareness level",
          ),
          headers: [
            L("Publika", "Audience"),
            L("Poruka", "Message"),
          ],
          rows: [
            {
              cells: [
                L("Hladna", "Cold"),
                L("Referral-i su najbolji leadovi — ali nisu predvidiv pipeline.", "Referrals are the best leads — but not a predictable pipeline."),
              ],
            },
            {
              cells: [
                L("Retargeting", "Retargeting"),
                L("Kako content, outreach, webinari i CRM signali grade jedan sistem.", "How content, outreach, webinars, and CRM signals build one system."),
              ],
            },
            {
              cells: [
                L("Topla", "Warm"),
                L("Zakažite GTM audit — gde vam trenutno curi pipeline.", "Book a GTM audit — where pipeline is leaking now."),
              ],
            },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "founder-ads",
      title: L("Founder content kao oglas", "Founder content as ads"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Jedna od najboljih primena LinkedIn Ads-a: distribucija contenta sa ličnih profila. Ljudi često više veruju osobi nego company page-u — posebno kada founder govori jasno i iz iskustva.",
              "Možete ciljati industrije, titule, odabrane firme, postojeće leadove ili ljude koji su već imali kontakt. Content ne zavisi samo od organskog reach-a.",
            ],
            [
              "One of the best LinkedIn Ads uses: distributing content from personal profiles. People often trust a person more than a company page — especially when the founder speaks clearly from experience.",
              "You can target industries, titles, selected companies, existing leads, or people who already touched the brand. Content doesn’t depend only on organic reach.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "accent",
          text: L(
            "Ako post zvuči kao reklama, plaćena distribucija ga neće popraviti. Ako objašnjava problem i daje vrednost, oglas deluje prirodnije od klasične company reklame.",
            "If a post sounds like an ad, paid distribution won’t fix it. If it explains a problem and gives value, the ad feels more natural than a classic company ad.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "poverenje",
      title: L("Retargeting i poverenje", "Retargeting and trust"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Kupac retko donosi ozbiljnu B2B odluku posle jednog touchpoint-a: post → outreach → profil → case study oglas → webinar → follow-up → razgovor. Nijedan touchpoint sam nije napravio prodaju — zajedno smanjuju rizik.",
            ],
            [
              "Buyers rarely make a serious B2B decision after one touchpoint: post → outreach → profile → case study ad → webinar → follow-up → conversation. No single touchpoint made the sale — together they reduce risk.",
            ],
          ),
        },
        {
          type: "pipeline-flow",
          title: L("Šta retargeting može da pokaže", "What retargeting can show"),
          stages: [
            L("Case study", "Case study"),
            L("Founder video", "Founder video"),
            L("Proces", "Process"),
            L("Objection", "Objection"),
            L("Webinar", "Webinar"),
            L("Sledeći korak", "Next step"),
          ],
        },
        {
          type: "lead",
          text: L(
            "Ne pokušavate da naterate hladnu osobu da odmah kupi. Pomažete ljudima koji su već pokazali pažnju da kroz vreme vide više konteksta i dokaza.",
            "You’re not trying to force a cold person to buy immediately. You’re helping people who already showed attention see more context and proof over time.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "outbound",
      title: L("Ads + outbound", "Ads + outbound"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Outreach i Ads ne treba da budu odvojeni. Lista target firmi + decision makeri + outreach sa više profila + content toj publici + webinar + posle webinara retargeting sa case study-jem i direktnijom ponudom.",
              "Kada sales pošalje poruku, kupac možda već prepoznaje founder-a. Kada ne odgovori odmah, oglasi nastavljaju kontekst. Kada se promeni timing, firma nije nepoznata.",
            ],
            [
              "Outreach and ads shouldn’t be separate. Target company list + decision makers + multi-profile outreach + content to that audience + webinar + after the webinar retargeting with case study and a more direct offer.",
              "When sales sends a message, the buyer may already recognize the founder. When they don’t reply right away, ads keep building context. When timing changes, the company isn’t unknown.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "To je jače od situacije u kojoj outreach šalje poruke, a marketing istim ljudima prikazuje potpuno nepovezane oglase.",
            "That’s stronger than outreach sending messages while marketing shows those same people completely unrelated ads.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "abm",
      title: L("Account-based", "Account-based"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Kod većih dealova često ne želite hiljade nasumičnih leadova — pažnju unutar ograničenog broja pravih firmi. Odaberete target kompanije, buying committee, content za različite uloge.",
              "CEO vidi poslovni rizik. Head of Sales proces. CMO content i trust. Operations ručni rad. Poruka se širi unutar firme — ne oslanjate se na jednu osobu da sve interno objasni.",
            ],
            [
              "On larger deals you often don’t want thousands of random leads — attention inside a limited set of the right companies. Pick target companies, buying committee, content for different roles.",
              "CEO sees business risk. Head of Sales sees process. CMO sees content and trust. Operations sees manual work. The message spreads inside the company — you don’t rely on one person to explain everything internally.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "forme",
      title: L("Lead Gen forme", "Lead Gen forms"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "LinkedIn forme smanjuju trenje — osoba ne napušta platformu, podaci se često popune. Manje trenja ≠ bolji lead. Neko lako preuzme guide bez ozbiljne namere.",
              "Forma treba da bude dovoljno jednostavna da prava osoba ne odustane, a da prikupi dovoljno konteksta (veličina, sales problem, način dolaska do kupaca, prioritet). Podaci automatski u CRM, izvor, enrichment, ICP check, obaveštenje na jak intent.",
            ],
            [
              "LinkedIn forms reduce friction — people don’t leave the platform, fields often autofill. Less friction ≠ better lead. Someone can easily download a guide with no serious intent.",
              "The form should be simple enough that the right person doesn’t quit, and still gather enough context (size, sales problem, how they get customers, priority). Data into CRM automatically, source, enrichment, ICP check, notification on strong intent.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "default",
          text: L(
            "Bez tog procesa forma samo puni još jednu tabelu.",
            "Without that process, the form just fills another spreadsheet.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "webinar",
      title: L("Webinar promocija", "Webinar promotion"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Webinar je dobar offer jer ne traži odmah sales razgovor. Više oglasa oko iste teme: problem, greška, primer, šta će naučiti, kratki founder video — gradite priču, ne samo događaj.",
              "Posle: retargeting sa snimkom, lekcijama, isečcima, case study-jem ili pozivom na razgovor. Webinar postaje kampanja koja traje nedeljama.",
            ],
            [
              "A webinar is a good offer because it doesn’t demand a sales conversation immediately. Multiple ads around the same theme: problem, mistake, example, what they’ll learn, short founder video — you build a story, not just an event.",
              "After: retargeting with recording, lessons, clips, case study, or a conversation invite. The webinar becomes a campaign that lasts weeks.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "offer",
      title: L("Pravi offer", "The right offer"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Najveća greška: ista ponuda svima. Hladna publika možda neće konsultaciju — možda video. Ko gleda content → guide. Ko je bio na webinaru → case study. Ko pokazuje jake signale → audit ili razgovor.",
            ],
            [
              "Biggest mistake: the same offer for everyone. Cold audience may not take a consultation — maybe a video. People watching content → guide. Webinar attendees → case study. Strong signals → audit or conversation.",
            ],
          ),
        },
        {
          type: "workflow",
          title: L("Nivo spremnosti", "Readiness levels"),
          steps: P(
            [
              "Pažnja — post, video, problem",
              "Edukacija — guide, webinar, detaljniji video",
              "Dokaz — case study, rezultat, proces",
              "Razgovor — audit, konsultacija, demo",
            ],
            [
              "Attention — post, video, problem",
              "Education — guide, webinar, deeper video",
              "Proof — case study, result, process",
              "Conversation — audit, consultation, demo",
            ],
          ),
          highlight: L(
            "Nije svaki kupac spreman za četvrti korak. Dobar paid sistem daje mu prirodan put do njega.",
            "Not every buyer is ready for step four. A good paid system gives them a natural path to it.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "kreativa",
      title: L("Kreativa targetira", "Creative targets"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Na LinkedIn-u ne targetira samo podešavanje kampanje — targetira i poruka. Savršena industrija i titula + generički oglas = pravi kupac ne oseća da je namenjen njemu.",
            ],
            [
              "On LinkedIn targeting isn’t only campaign settings — the message also targets. Perfect industry and title + generic ad = the right buyer doesn’t feel it’s for them.",
            ],
          ),
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("Slabo", "Weak"),
              subtitle: L("Za bilo koga", "For anyone"),
              variant: "muted",
              items: P(
                [
                  "„Povećajte prodaju uz našu modernu platformu.“",
                  "Nije jasno kome",
                  "Nije jasan problem",
                ],
                [
                  "“Increase sales with our modern platform.”",
                  "Unclear who it’s for",
                  "Unclear problem",
                ],
              ),
            },
            {
              title: L("Jače", "Stronger"),
              subtitle: L("Pravi kupac se prepozna", "The right buyer recognizes themselves"),
              variant: "accent",
              items: P(
                [
                  "„Sales timu ne treba još jedna lista — treba firme koje imaju razlog da pričaju sada.“",
                  "Jasno kome",
                  "Pogrešan kupac prolazi dalje — to je dobro",
                ],
                [
                  "“Your sales team doesn’t need another list — it needs companies that have a reason to talk now.”",
                  "Clear who it’s for",
                  "Wrong buyers move on — that’s good",
                ],
              ),
            },
          ],
        },
      ],
    },
    {
      type: "section",
      id: "metrike",
      title: L("Ne samo CPC", "Not just CPC"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "CPC, pregledi, CTR, cena registracije, broj leadova — korisno, ali ne govore celu priču. Jeftin lead može biti pogrešna osoba. Skup lead iz target firme može postati ozbiljan deal.",
            ],
            [
              "CPC, views, CTR, registration cost, lead count — useful, but not the whole story. A cheap lead can be the wrong person. An expensive lead from a target company can become a serious deal.",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "ko je ICP, ko je ušao u razgovor / kvalifikovanu priliku,",
              "koji segment je napravio pipeline,",
              "koja kampanja je ubrzala postojeći deal,",
              "koji content pomaže sales-u.",
            ],
            [
              "who is ICP, who entered conversation / qualified opportunity,",
              "which segment created pipeline,",
              "which campaign accelerated an existing deal,",
              "which content helps sales.",
            ],
          ),
        },
        {
          type: "big-statement",
          variant: "accent",
          statement: L(
            "Nije najvažnije koliko košta klik — već koliko košta kvalitetan razgovor i koliko pipeline-a nastaje.",
            "What matters most isn’t click cost — it’s what a quality conversation costs and how much pipeline is created.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "skaliranje",
      title: L("Kada skalirati", "When to scale"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Ne skalirajte samo zbog dobrog CTR-a. Gledajte kvalitet: pravi ICP klikće, target firme gledaju content, kvalitetne registracije, relevantni odgovori sales-u, prava webinar publika, pominjanje oglasa na call-u, više ljudi iz iste firme, uticaj na kvalifikovan pipeline.",
            ],
            [
              "Don’t scale only because of a good CTR. Watch quality: right ICP clicks, target companies view content, quality registrations, relevant replies to sales, right webinar audience, ads mentioned on calls, multiple people from the same company, impact on qualified pipeline.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "Više loših leadova nije skaliranje. To je samo veći problem. Organski i paid treba stalno da uče jedno od drugog — isti insight u content, Ads, outreach i follow-up.",
            "More bad leads isn’t scaling. It’s just a bigger problem. Organic and paid should constantly learn from each other — the same insight into content, ads, outreach, and follow-up.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "budzet",
      title: L("Budžet", "Budget"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Nema jednog broja za sve. Zavisi od publike, tržišta, vrednosti deal-a, cilja, formata, dužine ciklusa. Korisno pravilo: nemojte raspršiti mali budžet na deset kampanja i dvadeset oglasa — nećete dobiti podatak ni za jednu odluku.",
            ],
            [
              "There’s no single number for everyone. It depends on audience, market, deal value, goal, format, cycle length. Useful rule: don’t spread a small budget across ten campaigns and twenty ads — you won’t get data for a single decision.",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "jedan jasan ICP segment,",
              "jedan glavni problem,",
              "nekoliko dobrih kreativa,",
              "jasan sledeći korak,",
              "dovoljno vremena da kampanja pokaže obrazac.",
            ],
            [
              "one clear ICP segment,",
              "one main problem,",
              "a few strong creatives,",
              "a clear next step,",
              "enough time for the campaign to show a pattern.",
            ],
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
              "Prerano pokretanje — ICP, positioning i offer nisu potvrđeni.",
              "Svaki oglas traži demo — publika nije spremna.",
              "Generička kreativa — nije jasno kome je namenjena.",
              "Ista poruka za hladnu i toplu publiku.",
              "Odvajanje od outreach-a i CRM-a.",
              "Samo lead cena — bez kvaliteta i pipeline-a.",
              "Previše kampanja, premalo budžeta.",
              "Nema retargeting sistema.",
              "Skaliranje pre potvrde kvaliteta kupaca.",
            ],
            [
              "Starting too early — ICP, positioning, and offer not validated.",
              "Every ad asks for a demo — audience isn’t ready.",
              "Generic creative — unclear who it’s for.",
              "Same message for cold and warm audiences.",
              "Separated from outreach and CRM.",
              "Only lead cost — no quality and pipeline.",
              "Too many campaigns, too little budget.",
              "No retargeting system.",
              "Scaling before buyer quality is confirmed.",
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
            "Pre nego što pokrenete kampanju",
            "Before you launch a campaign",
          ),
          items: P(
            [
              "Da li imamo potvrđen ICP i problem koji privlači pažnju?",
              "Da li organski content već pokazuje koji uglovi rade?",
              "Cilj: pažnja, edukacija, dokaz ili razgovor?",
              "Koju poruku dobija hladna vs retargeting publika?",
              "Jasan offer za nivo spremnosti?",
              "Leadovi u CRM + ICP check + obaveštenje + follow-up?",
              "Da li sales zna koje oglase i content lead može da vidi?",
              "Pratimo kvalitet razgovora i pipeline, ne samo klikove?",
              "Dovoljno budžeta za smislen podatak — skaliramo samo što radi?",
            ],
            [
              "Confirmed ICP and a problem that gets attention?",
              "Does organic content already show which angles work?",
              "Goal: attention, education, proof, or conversation?",
              "Which message does cold vs retargeting get?",
              "Clear offer for readiness level?",
              "Leads into CRM + ICP check + notification + follow-up?",
              "Does sales know which ads and content the lead may have seen?",
              "Tracking conversation quality and pipeline, not only clicks?",
              "Enough budget for meaningful data — scaling only what works?",
            ],
          ),
        },
        {
          type: "big-statement",
          variant: "accent",
          eyebrow: L("Uloga paid-a", "Paid’s role"),
          statement: L(
            "Paid ne zamenjuje Founder-Led Growth sistem. Ubrzava ga.",
            "Paid doesn’t replace the Founder-Led Growth system. It accelerates it.",
          ),
          support: L(
            "Kada positioning, content, outreach, webinar, CRM i follow-up već rade zajedno, oglasi povećavaju poznatost i ubrzavaju put do ozbiljnog razgovora.",
            "When positioning, content, outreach, webinar, CRM, and follow-up already work together, ads increase familiarity and speed the path to a serious conversation.",
          ),
        },
      ],
    },
  ],
  faq: [
    {
      question: L(
        "Kada smo spremni za Ads?",
        "When are we ready for ads?",
      ),
      answer: L(
        "Kada imate potvrđen ICP, poruku koja organski privlači prave ljude, i CRM/follow-up koji može da obradi pažnju. Inače plaćate da skalirate nejasnoću.",
        "When you have a validated ICP, a message that organically attracts the right people, and CRM/follow-up that can handle the attention. Otherwise you’re paying to scale confusion.",
      ),
    },
    {
      question: L(
        "Thought Leader Ads ili company page?",
        "Thought Leader Ads or company page?",
      ),
      answer: L(
        "Za poverenje često bolje lični founder content sa plaćenom distribucijom. Company page može da podrži, ali retko gradi isti nivo poverenja kao osoba.",
        "For trust, personal founder content with paid distribution often works better. Company page can support, but rarely builds the same trust as a person.",
      ),
    },
    {
      question: L(
        "Koliko dugo testirati pre skaliranja?",
        "How long to test before scaling?",
      ),
      answer: L(
        "Dok ne vidite obrazac u kvalitetu ICP-a i sledećim koracima — ne samo CTR. Bolje jedan segment i nekoliko kreativa sa dovoljno budžeta nego deset kampanja bez zaključka.",
        "Until you see a pattern in ICP quality and next steps — not only CTR. Better one segment and a few creatives with enough budget than ten campaigns with no conclusion.",
      ),
    },
  ],
  sources: [],
  relatedLessons: {
    previous: {
      slug: "ai-workflows-for-sales-system",
      title: L(
        "AI workflow-i: kako povezati sales sistem bez ručnog haosa",
        "AI Workflows: Connecting the Sales System Without Manual Chaos",
      ),
    },
    next: {
      slug: "flg-system-in-practice",
      title: L(
        "Kako izgleda ceo Founder Led Growth sistem u praksi",
        "What the Full Founder Led Growth System Looks Like in Practice",
      ),
      note: L(
        "Sledeće: kako svi delovi rade zajedno kao jedan sistem.",
        "Next: how all the parts work together as one system.",
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
        slug: "webinars-for-unready-buyers",
        title: L(
          "Webinari: kako da edukujete kupce koji još nisu spremni",
          "Webinars: How to Educate Buyers Who Aren’t Ready Yet",
        ),
      },
    ],
  },
  cta: {
    title: L(
      "Želiš Ads koji skaliraju dokazanu poruku?",
      "Want ads that scale a proven message?",
    ),
    body: L(
      "Možemo da povežemo organski content, retargeting, outbound i CRM u jednu paid logiku.",
      "We can connect organic content, retargeting, outbound, and CRM into one paid logic.",
    ),
    primaryLabel: L("Zakaži konsultaciju", "Book a consultation"),
    secondaryLabel: L("Sledeća lekcija", "Next lesson"),
  },
  seoKeywords: P(
    [
      "LinkedIn Ads B2B",
      "LinkedIn retargeting",
      "Thought Leader Ads",
      "skaliranje outbound-a",
      "account based LinkedIn Ads",
    ],
    [
      "LinkedIn Ads B2B",
      "LinkedIn retargeting",
      "Thought Leader Ads",
      "scaling outbound",
      "account-based LinkedIn Ads",
    ],
  ),
};
