import type { RichLessonContent } from "@/types/rich-lesson";

const L = (sr: string, en: string) => ({ sr, en });
const P = (sr: string[], en: string[]) => ({ sr, en });

export const lesson06RichContent: RichLessonContent = {
  meta: {
    stage: L("Outreach", "Outreach"),
    readingTime: L("14–18 min", "14–18 min"),
    difficulty: L("Početnik–srednji", "Beginner–intermediate"),
    outcome: L(
      "Umesto hladne liste — outreach na buying signale, timing i kontekst, sa jasnim sledećim korakom.",
      "Instead of a cold list — outreach on buying signals, timing, and context, with a clear next step.",
    ),
    recommendedTools: L(
      "Sales Navigator / Apollo, CRM, LinkedIn",
      "Sales Navigator / Apollo, CRM, LinkedIn",
    ),
  },
  hero: {
    eyebrow: L("Lekcija 6", "Lesson 6"),
    title: L(
      "Outreach po signalima: kako prilazite pravim ljudima u pravom trenutku",
      "Signal-Based Outreach: Reaching the Right People at the Right Time",
    ),
    paragraphs: P(
      [
        "Većina firmi radi outreach ovako: nađu listu, pošalju poruke, čekaju odgovore, pa pokušaju da zaključe da li kanal radi.",
        "Problem je što takav outreach kreće od pogrešnog pitanja: „Kome možemo da pošaljemo poruku?“ Mnogo bolje pitanje je: „Ko trenutno ima razlog da obrati pažnju?“",
      ],
      [
        "Most companies do outreach like this: find a list, send messages, wait for replies, then try to decide if the channel works.",
        "The problem is that outreach starts from the wrong question: “Who can we message?” A much better question is: “Who currently has a reason to pay attention?”",
      ],
    ),
    callout: L(
      "Ne šaljete poruku samo zato što neko ima pravu titulu. Šaljete je zato što postoji kontekst koji povećava šansu da je tema relevantna sada.",
      "You don’t send a message just because someone has the right title. You send it because there’s context that makes the topic more relevant now.",
    ),
  },
  toc: [
    { id: "pravo-pitanje", title: L("Pravo pitanje", "The right question") },
    { id: "lista", title: L("Lista nije outbound lista", "A list isn’t an outbound list") },
    { id: "sta-je-signal", title: L("Šta je signal", "What a signal is") },
    { id: "poruka", title: L("Signal menja poruku", "Signal changes the message") },
    { id: "sledeci-korak", title: L("Nije svaki signal pitch", "Not every signal is a pitch") },
    { id: "multi-profile", title: L("Multi-profile pristup", "Multi-profile approach") },
    { id: "content", title: L("Content pojačava outreach", "Content amplifies outreach") },
    { id: "proces", title: L("Kako izgleda proces", "What the process looks like") },
    { id: "feedback", title: L("Market feedback", "Market feedback") },
    { id: "greske", title: L("Najčešće greške", "Common mistakes") },
    { id: "merenje", title: L("Šta meriti", "What to measure") },
    { id: "checklist", title: L("Mini checklist", "Mini checklist") },
  ],
  blocks: [
    {
      type: "section",
      id: "pravo-pitanje",
      title: L("Pravo pitanje", "The right question"),
      blocks: [
        {
          type: "fork-paths",
          versus: L("vs", "vs"),
          left: {
            label: L("Pogrešno", "Wrong"),
            title: L("„Kome možemo da pošaljemo?“", "“Who can we message?”"),
            body: L(
              "Titula + filter. Ista poruka za sve. Timing nije deo odluke.",
              "Title + filter. Same message for everyone. Timing isn’t part of the decision.",
            ),
            tone: "danger",
          },
          right: {
            label: L("Bolje", "Better"),
            title: L("„Ko ima razlog da obrati pažnju?“", "“Who has a reason to pay attention?”"),
            body: L(
              "Fit + signal + kontekst. Poruka i sledeći korak zavise od toga.",
              "Fit + signal + context. Message and next step depend on that.",
            ),
            tone: "accent",
          },
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "U B2B-u nije svaki dobar fit spreman za razgovor. Neko je idealan na papiru, ali nema problem sada. Neko ima problem, ali nije prioritet. Neko ima budžet, ali nema internu podršku. Neko je video content, kliknuo case study i već razume problem.",
              "To nisu isti leadovi. I ne treba da dobiju istu poruku.",
            ],
            [
              "In B2B, not every good fit is ready for a conversation. Someone is ideal on paper but has no problem now. Someone has a problem but it isn’t a priority. Someone has budget but no internal support. Someone has seen content, clicked a case study, and already understands the problem.",
              "Those aren’t the same leads. And they shouldn’t get the same message.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "lista",
      title: L("Lista nije outbound lista", "A list isn’t an outbound list"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Sales Navigator, Apollo, Prospeo i slični alati mogu da daju dobar početak — industrija, veličina, lokacija, titula. Ali to još uvek nije prava outbound lista. To je sirov materijal.",
              "Filter može da kaže: „CEO firme od 50 zaposlenih u IT-u.“ Filter ne zna da li firma stvarno ima problem, da li raste, da li zapošljava sales, da li ulazi na novo tržište, da li je osoba pravi ulaz u buying committee.",
            ],
            [
              "Sales Navigator, Apollo, Prospeo and similar tools can give a good start — industry, size, location, title. But that still isn’t a real outbound list. It’s raw material.",
              "A filter can say: “CEO of a 50-person IT company.” The filter doesn’t know whether the company actually has the problem, is growing, hiring sales, entering a new market, or whether the person is the right entry into the buying committee.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "Lista mora da se obogati — ne zbog više podataka, nego da znate kome vredi prići prvo i iz kog ugla.",
            "The list has to be enriched — not for more data, but so you know who is worth approaching first and from which angle.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "sta-je-signal",
      title: L("Šta je signal", "What a signal is"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Signal je svaki podatak koji pomaže da razumete da li je osoba ili firma trenutno relevantnija za outreach. Ne mora da znači da je neko spreman da kupi — ali može da pokaže veću šansu za razgovor.",
            ],
            [
              "A signal is any data point that helps you understand whether a person or company is currently more relevant for outreach. It doesn’t mean they’re ready to buy — but it can show a higher chance of conversation.",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "firma raste / zapošljava sales ili marketing,",
              "novi proizvod, novo tržište, traže partnere,",
              "osoba je aktivna na LinkedIn-u ili priča o problemu koji rešavate,",
              "slab positioning ili content koji nije povezan sa prodajom,",
              "reakcija na vaš content, otvoren email, webinar, poseta profilu,",
              "stari lead koji se ponovo aktivira.",
            ],
            [
              "company is growing / hiring sales or marketing,",
              "new product, new market, looking for partners,",
              "person is active on LinkedIn or talking about the problem you solve,",
              "weak positioning or content disconnected from sales,",
              "reaction to your content, opened email, webinar, profile visit,",
              "an old lead becoming active again.",
            ],
          ),
        },
        {
          type: "lead",
          text: L(
            "Jedan signal sam po sebi ne mora da znači mnogo. Više signala zajedno menja prioritet — i ko ide prvi.",
            "One signal alone may not mean much. Multiple signals together change priority — and who goes first.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "poruka",
      title: L("Signal menja poruku", "Signal changes the message"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Bez signala poruka najčešće zvuči generički: „Vidim da ste CEO firme u IT industriji.“ Kupac zna da ste to našli iz filtera.",
              "Sa signalom možete otvoriti razgovor prirodnije — ne radi personalizacije radi personalizacije, nego da otvorite relevantan problem.",
            ],
            [
              "Without a signal, the message usually sounds generic: “I see you’re a CEO in IT.” The buyer knows you found that in a filter.",
              "With a signal you can open the conversation more naturally — not personalization for its own sake, but to open a relevant problem.",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "„Video sam da širite sales tim… često problem nije broj ljudi, nego sistem za ICP, outreach i follow-up.“",
              "„Sve više komunicirate novi proizvod… product postoji, ali tržište još ne razume zašto da menja način rada.“",
              "„Aktivni ste na LinkedIn-u, ali content deluje odvojen od sales procesa…“",
            ],
            [
              "“I saw you’re expanding the sales team… often the issue isn’t headcount, but the system for ICP, outreach, and follow-up.”",
              "“You’re communicating a new product more… the product exists, but the market doesn’t yet get why they should change how they work.”",
              "“You’re active on LinkedIn, but the content feels disconnected from the sales process…”",
            ],
          ),
        },
        {
          type: "big-statement",
          variant: "quiet",
          statement: L(
            "Personalizacija nije „video sam da ste bili na konferenciji.“",
            "Personalization isn’t “I saw you were at a conference.”",
          ),
          support: L(
            "Personalizacija je: „Video sam nešto što mi govori da bi ovaj problem možda bio relevantan za vas sada.“",
            "Personalization is: “I saw something that suggests this problem might be relevant for you now.”",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "sledeci-korak",
      title: L("Nije svaki signal pitch", "Not every signal is a pitch"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Ako neko klikne link ili lajkuje post, to ne znači agresivan sales pitch. Mnogo firmi pokvari warm signal jer reaguje prebrzo i previše direktno.",
              "Signal treba da odredi sledeći korak: direktna poruka, case study, webinar, edukativan follow-up, nurture — ili druga osoba iz iste firme.",
            ],
            [
              "If someone clicks a link or likes a post, that doesn’t mean an aggressive sales pitch. Many companies ruin a warm signal by reacting too fast and too directly.",
              "The signal should determine the next step: direct message, case study, webinar, educational follow-up, nurture — or another person in the same company.",
            ],
          ),
        },
        {
          type: "table",
          caption: L(
            "Signal određuje sledeći korak",
            "Signal determines the next step",
          ),
          headers: [
            L("Signal", "Signal"),
            L("Sledeći korak", "Next step"),
          ],
          rows: [
            {
              cells: [
                L("Samo video post", "Only saw a post"),
                L("Možda još nije za poruku", "Maybe not ready for a message yet"),
              ],
            },
            {
              cells: [
                L("Kliknuo case study", "Clicked a case study"),
                L("Follow-up sa relevantnim primerom", "Follow-up with a relevant example"),
              ],
            },
            {
              cells: [
                L("Webinar + 3 emaila", "Webinar + 3 emails"),
                L("Spremniji za direktan razgovor", "More ready for a direct conversation"),
              ],
            },
            {
              cells: [
                L("„Javite se kasnije“ + nova reakcija", "“Reach out later” + new reaction"),
                L("Drugačija poruka — ne isti pitch", "A different message — not the same pitch"),
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "default",
          text: L(
            "Outreach po signalima nije samo bolje targetiranje. To je bolja odluka o sledećem koraku.",
            "Signal-based outreach isn’t just better targeting. It’s a better decision about the next step.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "multi-profile",
      title: L("Multi-profile pristup", "Multi-profile approach"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "U ozbiljnoj B2B prodaji retko jedna osoba sama donosi odluku. Nije dovoljno da jedan profil šalje poruke jednoj osobi.",
              "Bolji pristup: više ljudi iz vaše firme gradi prisutnost kod više ljudi iz njihove — founder sa CEO-om, sales sa Head of Sales-om, marketing sa CMO-om. Ne napadate firmu nasumično. Gradite kontekst u buying committee-ju.",
            ],
            [
              "In serious B2B sales, rarely does one person decide alone. It isn’t enough for one profile to message one person.",
              "Better approach: more people from your company build presence with more people from theirs — founder with CEO, sales with Head of Sales, marketing with CMO. You’re not attacking the company at random. You’re building context in the buying committee.",
            ],
          ),
        },
        {
          type: "big-statement",
          variant: "accent",
          eyebrow: L("Momenat koji vredi", "The moment that matters"),
          statement: L(
            "„Video sam vas više puta. Pisali ste i kolegi. Iskakali ste nam na LinkedIn-u.“",
            "“I’ve seen you several times. You wrote to a colleague too. You kept showing up on LinkedIn.”",
          ),
          support: L(
            "Firma više ne deluje kao nepoznat vendor — nego kao neko ko je već prisutan u njihovom svetu.",
            "The company no longer feels like an unknown vendor — but like someone already present in their world.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "content",
      title: L("Content pojačava outreach", "Content amplifies outreach"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Outreach po signalima radi bolje kada osoba iza poruke ima content koji podržava temu. Ako pišete o referral zavisnosti, a profil ima objave o pipeline-u bez preporuka — poruka je jača.",
              "Content gradi kontekst. Outreach otvara razgovor. CRM prati signal. Follow-up nastavlja edukaciju. Kada su ti delovi povezani, outreach nije izolovana aktivnost — deo je sistema.",
            ],
            [
              "Signal-based outreach works better when the person behind the message has content that supports the topic. If you write about referral dependency and the profile has posts about a pipeline without referrals — the message is stronger.",
              "Content builds context. Outreach opens the conversation. CRM tracks the signal. Follow-up continues education. When those pieces connect, outreach isn’t an isolated activity — it’s part of a system.",
            ],
          ),
        },
      ],
    },
    {
      type: "section",
      id: "proces",
      title: L("Kako izgleda proces", "What the process looks like"),
      blocks: [
        {
          type: "workflow",
          title: L("Od ICP-a do poruke", "From ICP to message"),
          steps: P(
            [
              "Definišite ICP",
              "Početna lista firmi i ljudi",
              "Obogatite: fit, aktivnost, rast, hiring, problem, buying committee",
              "Rangirajte: ko prvi, ko nurture, ko nije prioritet",
              "Tek onda pišite poruke",
            ],
            [
              "Define ICP",
              "Initial list of companies and people",
              "Enrich: fit, activity, growth, hiring, problem, buying committee",
              "Rank: who first, who nurture, who isn’t a priority",
              "Only then write messages",
            ],
          ),
          highlight: L(
            "Dobra poruka dolazi iz dobrog konteksta. Ako ne znate zašto je osoba relevantna, teško ćete napisati poruku koja zvuči relevantno.",
            "A good message comes from good context. If you don’t know why the person is relevant, it’s hard to write a message that sounds relevant.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "feedback",
      title: L("Market feedback", "Market feedback"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Outreach ne služi samo da zakaže call. On je i market feedback mehanizam: koji segment reaguje, koja poruka otvara razgovor, koji problem ljudi prepoznaju, koje titule odgovaraju, koji objection se ponavlja, koji content i webinar ima smisla, koji ICP treba izbaciti.",
            ],
            [
              "Outreach isn’t only for booking a call. It’s also a market feedback mechanism: which segment responds, which message opens a conversation, which problem people recognize, which titles work, which objection repeats, which content and webinar make sense, which ICP to drop.",
            ],
          ),
        },
        {
          type: "lead",
          text: L(
            "Ako outreach ne vraća insight nazad u positioning, content, CRM i sales, sistem ne uči. Samo šalje. To je mnogo slabije.",
            "If outreach doesn’t feed insight back into positioning, content, CRM, and sales, the system doesn’t learn. It only sends. That’s much weaker.",
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
              "Preširoka lista — ako je lista loša, poruka mora da bude magija.",
              "Isti copy za sve — ignorišete razlike u problemu, ulozi i timing-u.",
              "Prebrz pitch — mali signal ≠ spreman za call.",
              "Slab follow-up — jedan-dva pa stane, jer nema sistema.",
              "Signali van CRM-a — izgubi se signal, izgubi se timing.",
            ],
            [
              "List too wide — if the list is bad, the message has to be magic.",
              "Same copy for everyone — you ignore differences in problem, role, and timing.",
              "Pitch too fast — a small signal ≠ ready for a call.",
              "Weak follow-up — one or two then stop, because there’s no system.",
              "Signals outside CRM — lose the signal, lose the timing.",
            ],
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
          type: "paragraphs",
          paragraphs: P(
            [
              "Ne merimo samo broj poslatih poruka. Merimo reply rate po segmentu i signalu, meeting rate, kvalitet sastanaka, koji buyer role i signal vode do razgovora, koji follow-up dobija odgovor, koliko leadova pređe iz cold u warm i iz warm u razgovor.",
            ],
            [
              "We don’t only measure messages sent. We measure reply rate by segment and signal, meeting rate, meeting quality, which buyer role and signal lead to conversations, which follow-up gets a reply, how many leads move from cold to warm and from warm to conversation.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "Ove metrike pokazuju da li sistem postaje pametniji — ne samo glasniji.",
            "These metrics show whether the system is getting smarter — not just louder.",
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
            "Pre nego što pošaljete poruku",
            "Before you send a message",
          ),
          items: P(
            [
              "Da li je firma stvarno ICP fit?",
              "Da li osoba ima pravu ulogu u buying procesu?",
              "Da li postoji timing signal?",
              "Da li znamo zašto bi tema bila relevantna sada?",
              "Da li imamo content koji podržava poruku?",
              "Koji je sledeći korak ako ne odgovori?",
              "Kada ide follow-up?",
              "Da li signal ulazi u CRM?",
              "Da li treba pitch, edukacija, webinar ili nurture?",
            ],
            [
              "Is the company a real ICP fit?",
              "Does the person have the right role in the buying process?",
              "Is there a timing signal?",
              "Do we know why the topic would be relevant now?",
              "Do we have content that supports the message?",
              "What’s the next step if they don’t reply?",
              "When does follow-up go out?",
              "Does the signal enter CRM?",
              "Is it pitch, education, webinar, or nurture?",
            ],
          ),
        },
        {
          type: "big-statement",
          variant: "accent",
          eyebrow: L("Razlika", "The difference"),
          statement: L(
            "Slanje poruka pokušava da dobije odgovor. Outreach po signalima pokušava da otvori pravi razgovor u pravom trenutku.",
            "Sending messages tries to get a reply. Signal-based outreach tries to open the right conversation at the right time.",
          ),
          support: L(
            "To je mnogo bolji način da se gradi pipeline.",
            "That’s a much better way to build pipeline.",
          ),
        },
      ],
    },
  ],
  faq: [
    {
      question: L(
        "Koliko signala nam treba pre poruke?",
        "How many signals do we need before messaging?",
      ),
      answer: L(
        "Jedan jak signal + jasan ICP fit često dovolji. Više slabih signala zajedno takođe. Važno je da znate zašto je tema relevantna sada — ne da sakupljate signale radi checkliste.",
        "One strong signal plus a clear ICP fit is often enough. Several weaker signals together can work too. What matters is knowing why the topic is relevant now — not collecting signals for a checklist.",
      ),
    },
    {
      question: L(
        "Da li to znači manje volume-a?",
        "Does this mean less volume?",
      ),
      answer: L(
        "Često da — manje poruka, bolji prioritet. Volume bez konteksta samo povećava buku. Bolje manje, ali sa jasnijim sledećim korakom i merenjem po signalu.",
        "Often yes — fewer messages, better priority. Volume without context just adds noise. Better fewer, but with a clearer next step and measurement by signal.",
      ),
    },
    {
      question: L(
        "Gde beležimo signale?",
        "Where do we log signals?",
      ),
      answer: L(
        "U CRM-u, uz lead i firmu — tip signala, datum, izvor. Ako signal ostane u inbox-u ili glavi, gubi se timing.",
        "In CRM, on the lead and company — signal type, date, source. If the signal stays in the inbox or in someone’s head, timing is lost.",
      ),
    },
  ],
  sources: [],
  relatedLessons: {
    previous: {
      slug: "founder-content-trust-before-message",
      title: L(
        "Founder content: kako gradite poverenje pre poruke",
        "Founder Content: How You Build Trust Before the Message",
      ),
    },
    next: {
      slug: "follow-up-system",
      title: L("Follow up sistem", "Follow-Up System"),
      note: L(
        "Sledeće: kako ne gubite warm leadove posle prve poruke.",
        "Next: how you don’t lose warm leads after the first message.",
      ),
    },
    related: [
      {
        slug: "icp-who-you-actually-sell-to",
        title: L(
          "ICP: kome zapravo prodajete",
          "ICP: Who You Actually Sell To",
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
      "Želiš outreach koji ide po signalima, ne po listi?",
      "Want outreach that follows signals, not just a list?",
    ),
    body: L(
      "Možemo da povežemo ICP, signale, poruke i CRM u jedan proces.",
      "We can connect ICP, signals, messages, and CRM into one process.",
    ),
    primaryLabel: L("Zakaži konsultaciju", "Book a consultation"),
    secondaryLabel: L("Sledeća lekcija", "Next lesson"),
  },
  seoKeywords: P(
    [
      "outreach po signalima",
      "signal based outreach",
      "buying signals B2B",
      "LinkedIn outreach timing",
      "outbound lista vs signal",
    ],
    [
      "signal-based outreach",
      "B2B buying signals",
      "LinkedIn outreach timing",
      "outbound list vs signal",
      "warm outreach",
    ],
  ),
};
