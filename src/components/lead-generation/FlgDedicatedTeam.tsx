import Image from "next/image";

import { AnimateInView } from "@/components/ui/AnimateInView";
import { homeTeam } from "@/data/home";
import type { LgTeamMember } from "@/data/lead-generation/types";
import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  title: { sr: string; en: string };
  note: { sr: string; en: string };
  members: LgTeamMember[];
};

function t(value: { sr: string; en: string }, locale: Locale) {
  return value[locale];
}

const founderFocus: Record<string, { sr: string; en: string }> = {
  "Nenad Stevanović": {
    sr: "Radi sisteme i strategiju.",
    en: "Owns systems and strategy.",
  },
  "Tihomir Mijailović": {
    sr: "Radi intervjue i strategiju.",
    en: "Owns interviews and strategy.",
  },
};

export function FlgDedicatedTeam({ locale, title, note, members }: Props) {
  const opCount = members.length;

  return (
    <section id="tim" className="flg-team flg-preview-section scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <AnimateInView className="flg-team__header">
          <p className="flg-team__eyebrow">Dedicated team</p>
          <h2 className="flg-team__title">{t(title, locale)}</h2>
          <p className="flg-team__lede">{t(note, locale)}</p>
          <p className="flg-team__meta">
            <span>
              {opCount}{" "}
              {locale === "sr"
                ? opCount === 1
                  ? "operativac"
                  : "operativca"
                : opCount === 1
                  ? "operator"
                  : "operators"}
            </span>
            <span className="flg-team__meta-dot" aria-hidden="true" />
            <span>
              2 {locale === "sr" ? "co-foundera na oversight-u" : "co-founders on oversight"}
            </span>
          </p>
        </AnimateInView>

        <div
          className={`flg-team__squad ${
            members.length >= 5
              ? "flg-team__squad--hexa"
              : members.length >= 4
                ? "flg-team__squad--quad"
                : "flg-team__squad--duo"
          }`}
        >
          {members.map((member, index) => (
            <AnimateInView
              key={t(member.title, locale)}
              delay={90 + index * 100}
              className="flg-team__card-wrap"
            >
              <article className="flg-team__card">
                <div className="flg-team__card-media">
                  <span className="flg-team__card-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {member.person ? (
                    <Image
                      src={member.person.image}
                      alt={member.person.name}
                      fill
                      className="flg-team__card-img object-cover object-top"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 280px"
                    />
                  ) : (
                    <div className="flg-team__card-fallback" aria-hidden="true">
                      <span>{t(member.title, locale).slice(0, 1)}</span>
                    </div>
                  )}
                  <div className="flg-team__card-shade" aria-hidden="true" />
                </div>
                <div className="flg-team__card-body">
                  {member.person ? (
                    <>
                      <h3 className="flg-team__name">{member.person.name}</h3>
                      <p className="flg-team__role">{t(member.title, locale)}</p>
                    </>
                  ) : (
                    <h3 className="flg-team__name">{t(member.title, locale)}</h3>
                  )}
                  <ul className="flg-team__duties">
                    {member.responsibilities.map((item) => (
                      <li key={t(item, locale)}>{t(item, locale)}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </AnimateInView>
          ))}
        </div>

        <AnimateInView delay={120 + members.length * 90} className="flg-team__oversight">
          <div className="flg-team__oversight-head">
            <p className="flg-team__oversight-label">
              {locale === "sr" ? "Co-founder oversight" : "Co-founder oversight"}
            </p>
            <p className="flg-team__oversight-note">
              {locale === "sr"
                ? "Uključeni na strategiju, ne na dnevni execution."
                : "Involved in strategy — not day-to-day execution."}
            </p>
          </div>
          <div className="flg-team__oversight-grid">
            {homeTeam.leadership.map((person) => (
              <article key={person.name} className="flg-team__founder">
                <div className="flg-team__founder-photo">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 40vw, 160px"
                  />
                </div>
                <div className="flg-team__founder-copy">
                  <h3 className="flg-team__name">{person.name}</h3>
                  <p className="flg-team__role">{t(person.role, locale)}</p>
                  <p className="flg-team__founder-note">
                    {t(founderFocus[person.name] ?? founderFocus["Nenad Stevanović"], locale)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
