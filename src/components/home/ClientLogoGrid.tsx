"use client";

import Image from "next/image";
import Link from "next/link";

import { clientLogos, TOTAL_CLIENT_COUNT } from "@/data/clients";
import { getRoutes } from "@/data/site";
import type { Locale } from "@/lib/i18n";

type ClientLogoGridProps = {
  locale: Locale;
  moreLabel: string;
};

function ClientTile({
  name,
  logo,
  logoAlt,
  href,
}: {
  name: string;
  logo?: string;
  logoAlt?: string;
  href?: string;
}) {
  const initial = name.trim().charAt(0).toUpperCase();

  const inner = (
    <>
      <div className="client-logo-tile__glow" aria-hidden />
      <div className="client-logo-tile__content">
        {logo ? (
          <Image
            src={logo}
            alt={logoAlt ?? name}
            width={128}
            height={128}
            className="client-logo-tile__image"
          />
        ) : (
          <span className="client-logo-tile__initial" aria-hidden>
            {initial}
          </span>
        )}
      </div>
      <p className="client-logo-tile__name">{name}</p>
    </>
  );

  const className =
    "client-logo-tile group" + (href ? " client-logo-tile--linked" : "");

  if (href) {
    return (
      <Link href={href} className={className} aria-label={name}>
        {inner}
      </Link>
    );
  }

  return <div className={className}>{inner}</div>;
}

export function ClientLogoGrid({ locale, moreLabel }: ClientLogoGridProps) {
  const routes = getRoutes(locale);
  const remaining = Math.max(0, TOTAL_CLIENT_COUNT - clientLogos.length);

  return (
    <div className="client-logo-grid mx-auto max-w-6xl px-6 md:px-8">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
        {clientLogos.map((client) => {
          const href = client.caseStudySlug
            ? routes.caseStudy(client.caseStudySlug)
            : client.href;

          return (
          <ClientTile
            key={client.name}
            name={client.name}
            logo={client.logo}
            logoAlt={client.logoAlt}
            href={href}
          />
          );
        })}

        {remaining > 0 ? (
          <div className="client-logo-tile client-logo-tile--more" aria-hidden>
            <div className="client-logo-tile__glow" />
            <div className="client-logo-tile__content client-logo-tile__content--more">
              <span className="text-3xl font-bold tracking-tight text-accent md:text-4xl">
                +{remaining}
              </span>
            </div>
            <p className="client-logo-tile__name text-accent/90">{moreLabel}</p>
          </div>
        ) : null}
      </div>

      <p className="mt-6 text-center text-xs text-muted-subtle md:text-sm">
        {locale === "sr"
          ? `${clientLogos.length} od ${TOTAL_CLIENT_COUNT}+ brendova prikazano javno`
          : `${clientLogos.length} of ${TOTAL_CLIENT_COUNT}+ brands shown publicly`}
      </p>
    </div>
  );
}
