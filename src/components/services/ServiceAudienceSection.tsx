import Image from "next/image";

import { Section } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n";
import type { LocalizedText, ServicePage } from "@/types/service";

type AudienceSection = NonNullable<ServicePage["audienceSection"]>;

function t(text: LocalizedText, locale: Locale) {
  return text[locale];
}

function CheckIcon() {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden
        className="text-accent"
      >
        <path
          d="M2.5 7.2L5.4 10.1L11.5 3.9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function SimpleAudienceList({
  section,
  locale,
}: {
  section: AudienceSection;
  locale: Locale;
}) {
  return (
    <ul className="max-w-3xl space-y-4">
      {section.items?.map((item) => (
        <li
          key={item[locale].slice(0, 48)}
          className="flex gap-4 rounded-2xl border border-border/80 bg-card p-5 md:p-6"
        >
          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
          <p className="leading-relaxed text-muted">{t(item, locale)}</p>
        </li>
      ))}
    </ul>
  );
}

function RichAudienceLayout({
  section,
  locale,
}: {
  section: AudienceSection;
  locale: Locale;
}) {
  const titleParts =
    locale === "sr"
      ? { highlight: "Za koga", rest: " je ova usluga" }
      : { highlight: "Who", rest: " is this for" };

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <div className="order-2 lg:order-1">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          <span className="text-accent">{titleParts.highlight}</span>
          {titleParts.rest}
        </h2>

        {section.groups?.length ? (
          <ul className="mt-8 space-y-3">
            {section.groups.map((group) => (
              <li
                key={group.title[locale]}
                className="flex items-start gap-4 rounded-xl border border-border/60 bg-card/50 px-4 py-4 transition hover:border-accent/30 hover:bg-card"
              >
                <CheckIcon />
                <div>
                  <p className="text-lg font-bold text-foreground">{t(group.title, locale)}</p>
                  {group.description ? (
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {t(group.description, locale)}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        ) : null}

        {section.description ? (
          <div className="mt-8 rounded-2xl border border-border/60 border-l-4 border-l-accent bg-background/80 p-6 md:p-7">
            <p className="text-base leading-relaxed text-muted md:text-[1.05rem] md:leading-7">
              {t(section.description, locale)}
            </p>
          </div>
        ) : null}
      </div>

      {section.image ? (
        <div className="relative order-1 aspect-[11/14] overflow-hidden rounded-2xl border border-border/80 bg-card lg:order-2">
          <Image
            src={section.image}
            alt={t(section.title, locale)}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={false}
          />
        </div>
      ) : null}
    </div>
  );
}

export function ServiceAudienceSection({
  section,
  locale,
}: {
  section: AudienceSection;
  locale: Locale;
}) {
  const isRichLayout = Boolean(section.image && (section.groups?.length || section.description));

  return (
    <Section className="border-b border-border/60 bg-card/20">
      {isRichLayout ? (
        <RichAudienceLayout section={section} locale={locale} />
      ) : (
        <>
          <header className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t(section.title, locale)}
            </h2>
          </header>
          <SimpleAudienceList section={section} locale={locale} />
        </>
      )}
    </Section>
  );
}
