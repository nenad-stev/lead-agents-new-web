import type { RichLessonContent } from "@/types/rich-lesson";

const L = (sr: string, en: string) => ({ sr, en });
const P = (sr: string[], en: string[]) => ({ sr, en });

export const lesson12RichContent: RichLessonContent = {
  meta: {
    stage: L("Sistem", "System"),
    readingTime: L("18–22 min", "18–22 min"),
    difficulty: L("Početnik–srednji", "Beginner–intermediate"),
    outcome: L(
      "Kako ICP, content, outreach, follow-up, webinari, CRM, AI i ads rade kao jedan sistem — i kako da počnete od osnove.",
      "How ICP, content, outreach, follow-up, webinars, CRM, AI, and ads work as one system — and how to start from the foundation.",
    ),
    recommendedTools: L(
      "LinkedIn, CRM, webinar alat, AI workflow",
      "LinkedIn, CRM, webinar tool, AI workflow",
    ),
  },
  hero: {
    eyebrow: L("Lekcija 12", "Lesson 12"),
    title: L(
      "Kako izgleda ceo Founder Led Growth sistem u praksi",
      "What the Full Founder Led Growth System Looks Like in Practice",
    ),
    paragraphs: P(
      [
        "Do sada smo pričali o svakom delu posebno: ICP, positioning, content, outreach, follow-up, webinari, CRM, AI, Ads. Svaki može pojedinačno da donese rezultat.",
        "Najveća vrednost nastaje tek kada počnu da rade zajedno. To je suština Founder-Led Growth-a — ne još jedan kanal ili alat, nego sistem u kome svaki deo pomaže sledećem.",
      ],
      [
        "So far we’ve talked about each part separately: ICP, positioning, content, outreach, follow-up, webinars, CRM, AI, ads. Each can deliver results on its own.",
        "The biggest value only appears when they work together. That’s the essence of Founder-Led Growth — not another channel or tool, but a system where each part helps the next.",
      ],
    ),
    callout: L(
      "Content gradi poverenje. Outreach testira. Webinar edukuje. CRM beleži. Follow-up održava. AI povezuje. Ads šire ono što radi. Sales dobija bolje pripremljenog kupca.",
      "Content builds trust. Outreach tests. Webinar educates. CRM records. Follow-up sustains. AI connects. Ads amplify what works. Sales gets a better-prepared buyer.",
    ),
  },
  toc: [
    { id: "bez-sistema", title: L("Firma bez sistema", "Company without a system") },
    { id: "sa-sistemom", title: L("Firma sa FLG sistemom", "Company with an FLG system") },
    { id: "koraci", title: L("12 koraka u praksi", "12 steps in practice") },
    { id: "ciklus", title: L("Jedan realan ciklus", "One real cycle") },
    { id: "vlasnik", title: L("Ko je vlasnik", "Who owns it") },
    { id: "signali", title: L("Znaci da radi", "Signs it’s working") },
    { id: "nije", title: L("Šta FLG nije", "What FLG is not") },
    { id: "checklist", title: L("Mini checklist", "Mini checklist") },
  ],
  blocks: [
    {
      type: "section",
      id: "bez-sistema",
      title: L("Firma bez sistema", "Company without a system"),
      blocks: [
        {
          type: "fork-paths",
          versus: L("vs", "vs"),
          left: {
            label: L("Bez sistema", "Without a system"),
            title: L("Mnogo aktivnosti, malo toka", "Lots of activity, little flow"),
            body: L(
              "Content po kalendaru, outreach po listi, webinar izolovan, forme u inboxu, CRM „kad se setiš“, Ads druga poruka od outreach-a.",
              "Content by calendar, outreach by list, isolated webinar, forms in inbox, CRM “when you remember,” ads with a different message than outreach.",
            ),
            tone: "danger",
          },
          right: {
            label: L("Sa sistemom", "With a system"),
            title: L("Zajednički tok", "A shared flow"),
            body: L(
              "Isti segment i problem. Isti positioning. Feedback se vraća. Signali ulaze u CRM. Ads skaliraju ono što radi.",
              "Same segment and problem. Same positioning. Feedback loops back. Signals enter CRM. Ads scale what works.",
            ),
            tone: "accent",
          },
        },
        {
          type: "lead",
          text: L(
            "Problem nije što nema dovoljno aktivnosti. Problem je što aktivnosti ne rade zajedno — zato firma može da radi mnogo, a da i dalje nema kontrolu nad pipeline-om.",
            "The problem isn’t lack of activity. It’s that activities don’t work together — so a company can do a lot and still have no control over pipeline.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "sa-sistemom",
      title: L("Firma sa FLG sistemom", "Company with an FLG system"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Firma zna koji segment testira i koji problem otvara. Founder i stručnjaci prave content iz više uglova. Outreach ide ka odabranim firmama — ista poruka kao content. Reakcije i objection-i se vraćaju u strategiju.",
              "Zainteresovani dobijaju case study, guide ili webinar. Aktivnosti ulaze u CRM. Jači signal → sales sa kontekstom. Nije spreman → nurture. Kada segment i poruka rade, Ads povećavaju distribuciju. AI povezuje podatke i taskove. Sistem kroz svaki ciklus uči nešto novo.",
            ],
            [
              "The company knows which segment it’s testing and which problem it’s opening. Founders and experts create content from multiple angles. Outreach goes to selected companies — same message as content. Reactions and objections feed back into strategy.",
              "Interested people get a case study, guide, or webinar. Activities enter CRM. Stronger signal → sales with context. Not ready → nurture. When segment and message work, ads increase distribution. AI connects data and tasks. Each cycle, the system learns something new.",
            ],
          ),
        },
        {
          type: "pipeline-flow",
          title: L("Tok sistema", "System flow"),
          stages: [
            L("ICP", "ICP"),
            L("Content", "Content"),
            L("Outreach", "Outreach"),
            L("Webinar", "Webinar"),
            L("CRM", "CRM"),
            L("Follow-up", "Follow-up"),
            L("Ads", "Ads"),
          ],
        },
      ],
    },
    {
      type: "section",
      id: "koraci",
      title: L("12 koraka u praksi", "12 steps in practice"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Sistem se gradi redosledom — ne sve odjednom. Svaki korak priprema sledeći.",
            ],
            [
              "The system is built in sequence — not all at once. Each step prepares the next.",
            ],
          ),
        },
        {
          type: "workflow",
          title: L("Koraci 1–4: osnova i test", "Steps 1–4: foundation and test"),
          steps: P(
            [
              "Jedan ICP segment — jak problem, budžet, decision makeri, razlog da reaguju sada",
              "Problem + positioning za nekoliko sekundi",
              "Content: šta kupac mora da razume pre razgovora",
              "Outreach testira fit, signal, ugao — i uči od tržišta",
            ],
            [
              "One ICP segment — strong problem, budget, decision makers, reason to react now",
              "Problem + positioning in a few seconds",
              "Content: what the buyer must understand before a conversation",
              "Outreach tests fit, signal, angle — and learns from the market",
            ],
          ),
        },
        {
          type: "workflow",
          title: L("Koraci 5–8: petlja i kontekst", "Steps 5–8: loop and context"),
          steps: P(
            [
              "Feedback → content i positioning",
              "Sledeći korak po spremnosti — ne svi na call",
              "Webinar produbljuje i kvalifikuje",
              "CRM spaja priču: fit, signal, istorija, sledeći korak",
            ],
            [
              "Feedback → content and positioning",
              "Next step by readiness — not everyone to a call",
              "Webinar deepens and qualifies",
              "CRM joins the story: fit, signal, history, next step",
            ],
          ),
        },
        {
          type: "workflow",
          title: L("Koraci 9–12: prisutnost i skala", "Steps 9–12: presence and scale"),
          steps: P(
            [
              "Follow-up dodaje vrednost, ne podsetnike",
              "AI uklanja ručni haos — čovek vodi razgovor",
              "Sales dobija kontekst, ne samo ime i email",
              "Skalirajte tek kada je potvrđen kvalitetan pipeline",
            ],
            [
              "Follow-up adds value, not reminders",
              "AI removes manual chaos — humans lead the conversation",
              "Sales gets context, not just name and email",
              "Scale only when quality pipeline is confirmed",
            ],
          ),
          highlight: L(
            "Skaliranje nije slanje više poruka. Skaliranje je povećavanje obima procesa koji već donosi kvalitetan pipeline.",
            "Scaling isn’t sending more messages. Scaling is increasing the volume of a process that already produces quality pipeline.",
          ),
        },
        {
          type: "big-statement",
          variant: "quiet",
          statement: L(
            "Ako nešto ne radi na malom broju pravih kupaca, veći budžet ga neće popraviti.",
            "If something doesn’t work with a small number of the right buyers, a bigger budget won’t fix it.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "ciklus",
      title: L("Jedan realan ciklus", "One real cycle"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Primer: B2B uslužne firme zavisne od preporuka. Segment + positioning oko predvidivog pipeline-a. Founder content o referral zavisnosti i follow-up-u. Lista founder-a i Head of Sales-a, obogaćena signalima. Outreach kroz više uglova.",
              "Neko odgovori odmah. Neko gleda profil. Neko reaguje na post. Neko se registruje za webinar. Sve u CRM. Spreman → razgovor. Nije → webinar i content. Posle webinara sales ide na najjače signale. Objection-i → nove teme. Najbolji postovi → Ads. Stari leadovi se reaktiviraju.",
            ],
            [
              "Example: B2B service firms dependent on referrals. Segment + positioning around predictable pipeline. Founder content on referral dependency and follow-up. List of founders and Heads of Sales, enriched with signals. Outreach through multiple angles.",
              "Someone replies immediately. Someone views the profile. Someone reacts to a post. Someone registers for a webinar. Everything into CRM. Ready → conversation. Not → webinar and content. After the webinar sales goes after the strongest signals. Objections → new topics. Best posts → ads. Old leads reactivate.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "tip",
          text: L(
            "Nakon nekoliko ciklusa firma više ne zavisi samo od preporuka. Ima sistem koji otkriva firme, gradi poverenje, otvara razgovore, prati signale i reaguje kada timing postane pravi.",
            "After a few cycles the company no longer depends only on referrals. It has a system that finds companies, builds trust, opens conversations, tracks signals, and reacts when timing is right.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "vlasnik",
      title: L("Ko je vlasnik", "Who owns it"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Jedan od najvećih problema: niko nije vlasnik celog procesa. Marketing gleda content, sales sastanke, operations CRM, founder daje ideje, agencija radi outreach — niko ne gleda kako sve zajedno utiče na pipeline.",
              "FLG sistem mora da ima vlasnika: founder, Head of Growth, GTM lider, revenue osoba ili mali tim. Prati ICP, učenje iz outreach-a, teme, objection-e, signale do sastanka, gde leadovi ispadaju, šta menja u sledećem ciklusu.",
            ],
            [
              "One of the biggest problems: nobody owns the whole process. Marketing watches content, sales meetings, operations CRM, founder drops ideas, agency runs outreach — nobody watches how it all affects pipeline together.",
              "The FLG system needs an owner: founder, Head of Growth, GTM lead, revenue person, or a small team. They track ICP, learning from outreach, topics, objections, signals to meetings, where leads drop, what changes next cycle.",
            ],
          ),
        },
        {
          type: "lead",
          text: L(
            "Bez vlasnika, delovi će se ponovo razdvojiti.",
            "Without an owner, the parts will separate again.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "signali",
      title: L("Znaci da radi", "Signs it’s working"),
      blocks: [
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Prvi signal nije nužno eksplozija broja leadova. Često prvo vidite druge promene.",
            ],
            [
              "The first signal isn’t necessarily an explosion in lead count. Often you see other changes first.",
            ],
          ),
        },
        {
          type: "bullets",
          items: P(
            [
              "kupci pominju content na sastancima,",
              "outreach odgovori postaju relevantniji,",
              "razgovori brže dolaze do konkretnog problema,",
              "više ljudi iz iste firme ulazi u kontakt,",
              "stari leadovi se vraćaju,",
              "founder ne objašnjava sve od nule svaki put,",
              "CRM pokazuje prioritete; tim zna sledeći korak,",
              "content teme dolaze iz realnih razgovora,",
              "marketing i sales koriste isti jezik.",
            ],
            [
              "buyers mention content in meetings,",
              "outreach replies become more relevant,",
              "conversations reach the concrete problem faster,",
              "more people from the same company enter contact,",
              "old leads return,",
              "the founder doesn’t explain everything from zero every time,",
              "CRM shows priorities; the team knows the next step,",
              "content topics come from real conversations,",
              "marketing and sales use the same language.",
            ],
          ),
        },
        {
          type: "callout",
          variant: "default",
          text: L(
            "To su znaci da više ne radite nasumične aktivnosti. Gradite infrastrukturu za prihod.",
            "Those are signs you’re no longer doing random activities. You’re building revenue infrastructure.",
          ),
        },
      ],
    },
    {
      type: "section",
      id: "nije",
      title: L("Šta FLG nije", "What FLG is not"),
      blocks: [
        {
          type: "comparison-cards",
          cards: [
            {
              title: L("Nije", "Not"),
              subtitle: L("Odvojene aktivnosti", "Separate activities"),
              variant: "muted",
              items: P(
                [
                  "Objavljivanje bez strategije",
                  "Masovne generičke poruke",
                  "Lični brend radi popularnosti",
                  "CRM bez sledećih koraka",
                  "AI generički content",
                  "Webinar bez follow-upa",
                  "Ads koji „popravljaju“ slab positioning",
                ],
                [
                  "Posting without strategy",
                  "Mass generic messages",
                  "Personal brand for popularity",
                  "CRM without next steps",
                  "AI generic content",
                  "Webinar without follow-up",
                  "Ads that “fix” weak positioning",
                ],
              ),
            },
            {
              title: L("Jeste", "Is"),
              subtitle: L("Sistem od ekspertize", "A system from expertise"),
              variant: "accent",
              items: P(
                [
                  "Ekspertiza founder-a i tima",
                  "Poverenje pre poruke",
                  "Učenje od tržišta",
                  "Kvalitetniji sales razgovori",
                  "Signali + sledeći korak",
                  "Skaliranje onoga što radi",
                ],
                [
                  "Founder and team expertise",
                  "Trust before the message",
                  "Learning from the market",
                  "Higher-quality sales conversations",
                  "Signals + next step",
                  "Scaling what works",
                ],
              ),
            },
          ],
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
            "Ceo sistem",
            "The full system",
          ),
          items: P(
            [
              "Jasan ICP segment i problem koji testiramo?",
              "Positioning jasan za nekoliko sekundi?",
              "Founder content priprema kupca za razgovor?",
              "Outreach testira — feedback ulazi u content?",
              "Sledeći korak za one koji nisu spremni za call?",
              "Webinar za edukaciju i kvalifikaciju?",
              "CRM povezuje aktivnosti; signal pokreće akciju?",
              "Follow-up dodaje vrednost; postoji reaktivacija?",
              "AI uklanja ručni rad; sales dobija kontekst?",
              "Ads skaliraju potvrđene poruke?",
              "Postoji vlasnik sistema?",
              "Merimo kvalitet pipeline-a, ne samo aktivnost?",
            ],
            [
              "Clear ICP segment and problem we’re testing?",
              "Positioning clear in a few seconds?",
              "Founder content preparing the buyer for conversation?",
              "Outreach testing — feedback into content?",
              "Next step for people not ready for a call?",
              "Webinar for education and qualification?",
              "CRM connecting activities; signal triggers action?",
              "Follow-up adding value; reactivation exists?",
              "AI removing manual work; sales getting context?",
              "Ads scaling validated messages?",
              "Is there a system owner?",
              "Measuring pipeline quality, not only activity?",
            ],
          ),
        },
        {
          type: "paragraphs",
          paragraphs: P(
            [
              "Ako na većinu pitanja odgovarate sa „ne“, ne morate sve odjednom. Počnite od osnove: jedan ICP, jedan problem, jedan positioning, jedan founder profil, jedna outreach kampanja, jedan CRM tok, jedan follow-up sistem. Zatim dodajte sledeći sloj.",
            ],
            [
              "If you answer “no” to most questions, you don’t have to do everything at once. Start from the foundation: one ICP, one problem, one positioning, one founder profile, one outreach campaign, one CRM flow, one follow-up system. Then add the next layer.",
            ],
          ),
        },
        {
          type: "big-statement",
          variant: "accent",
          eyebrow: L("Krajnji cilj", "The end goal"),
          statement: L(
            "Ne da izbacite preporuke. Ne da automatizujete svaki razgovor. Ne da founder postane influenser.",
            "Not to eliminate referrals. Not to automate every conversation. Not to turn the founder into an influencer.",
          ),
          support: L(
            "Nego da napravite sales sistem koji gradi poverenje, prepoznaje timing i otvara razgovore sa pravim kupcima. Referral-i ostaju odličan kanal — ali više nisu jedini plan.",
            "But to build a sales system that builds trust, recognizes timing, and opens conversations with the right buyers. Referrals stay an excellent channel — but they’re no longer the only plan.",
          ),
        },
      ],
    },
  ],
  faq: [
    {
      question: L(
        "Odakle da krenemo ako nemamo ništa?",
        "Where do we start if we have nothing?",
      ),
      answer: L(
        "Jedan ICP, jedan problem, jasan positioning, founder content oko toga, mala outreach kampanja i CRM koji beleži signal i sledeći korak. Sve ostalo dolazi posle.",
        "One ICP, one problem, clear positioning, founder content around that, a small outreach campaign, and CRM that logs signal and next step. Everything else comes after.",
      ),
    },
    {
      question: L(
        "Koliko traje dok sistem „radi“?",
        "How long until the system “works”?",
      ),
      answer: L(
        "Ne preko noći. Prve znakove često vidite u kvalitetu razgovora i feedback petlji, pre eksplozije leadova. Merite cikluse učenja, ne samo volume.",
        "Not overnight. You often see first signs in conversation quality and feedback loops before a lead explosion. Measure learning cycles, not only volume.",
      ),
    },
    {
      question: L(
        "Da li founder mora sve da radi?",
        "Does the founder have to do everything?",
      ),
      answer: L(
        "Ne — ali mora da postoji vlasnik sistema i da ekspertiza izlazi kroz content i pozicioniranje. Tim i AI nose operativu; founder nosi stav i poverenje.",
        "No — but there must be a system owner, and expertise must come through content and positioning. Team and AI carry operations; the founder carries stance and trust.",
      ),
    },
  ],
  sources: [],
  relatedLessons: {
    previous: {
      slug: "linkedin-ads-and-retargeting",
      title: L(
        "LinkedIn Ads i retargeting: kako skalirati ono što već radi",
        "LinkedIn Ads and Retargeting: How to Scale What Already Works",
      ),
    },
    related: [
      {
        slug: "why-referrals-are-not-a-sales-system",
        title: L(
          "Zašto referral-i nisu sales sistem",
          "Why Referrals Aren’t a Sales System",
        ),
      },
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
          "CRM i buying signals",
          "CRM and Buying Signals",
        ),
      },
    ],
  },
  cta: {
    title: L(
      "Želiš da povežemo delove u jedan FLG sistem?",
      "Want us to connect the parts into one FLG system?",
    ),
    body: L(
      "Možemo da krenemo od jednog ICP-a i problema — pa da sloj po sloj sastavimo content, outreach, CRM i follow-up.",
      "We can start from one ICP and problem — then layer by layer assemble content, outreach, CRM, and follow-up.",
    ),
    primaryLabel: L("Zakaži konsultaciju", "Book a consultation"),
    secondaryLabel: L("Nazad na playbook", "Back to playbook"),
  },
  seoKeywords: P(
    [
      "founder led growth sistem",
      "FLG u praksi",
      "B2B sales sistem",
      "pipeline bez referral zavisnosti",
      "GTM sistem LinkedIn",
    ],
    [
      "founder led growth system",
      "FLG in practice",
      "B2B sales system",
      "pipeline without referral dependency",
      "LinkedIn GTM system",
    ],
  ),
};
