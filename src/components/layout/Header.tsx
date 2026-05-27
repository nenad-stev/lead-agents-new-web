"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { getRoutes, siteConfig } from "@/data/site";
import type { Dictionary } from "@/lib/i18n";
import { getAlternateLocale, type Locale } from "@/lib/i18n";

import { MainNav } from "./MainNav";

type HeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

function getLanguageSwitchPath(pathname: string, targetLocale: Locale): string {
  const routes = getRoutes(targetLocale);

  if (pathname === "/" || pathname === "/en") {
    return routes.home;
  }

  if (pathname.startsWith("/en/case-studies/")) {
    const slug = pathname.replace("/en/case-studies/", "");
    return targetLocale === "sr"
      ? `/case-studies/${slug}`
      : `/en/case-studies/${slug}`;
  }

  if (pathname.startsWith("/case-studies/")) {
    const slug = pathname.replace("/case-studies/", "");
    return targetLocale === "en"
      ? `/en/case-studies/${slug}`
      : `/case-studies/${slug}`;
  }

  if (pathname === "/case-studies") {
    return routes.caseStudies;
  }

  if (pathname === "/en/case-studies") {
    return routes.caseStudies;
  }

  if (pathname.startsWith("/en/sales-tools/")) {
    const slug = pathname.replace("/en/sales-tools/", "");
    return targetLocale === "sr"
      ? `/prodajni-alati/${slug}`
      : `/en/sales-tools/${slug}`;
  }

  if (pathname.startsWith("/prodajni-alati/")) {
    const slug = pathname.replace("/prodajni-alati/", "");
    return targetLocale === "en"
      ? `/en/sales-tools/${slug}`
      : `/prodajni-alati/${slug}`;
  }

  if (pathname === "/prodajni-alati") {
    return routes.salesTools;
  }

  if (pathname === "/en/sales-tools") {
    return routes.salesTools;
  }

  if (pathname.startsWith("/en/services/")) {
    const slug = pathname.replace("/en/services/", "");
    return targetLocale === "sr" ? `/usluge/${slug}` : `/en/services/${slug}`;
  }

  if (pathname.startsWith("/usluge/")) {
    const slug = pathname.replace("/usluge/", "");
    return targetLocale === "en" ? `/en/services/${slug}` : `/usluge/${slug}`;
  }

  if (pathname === "/kontakt") {
    return routes.contact;
  }

  if (pathname === "/en/contact") {
    return routes.contact;
  }

  if (pathname === "/webinar") {
    return targetLocale === "en" ? "/en/webinar" : "/webinar";
  }

  if (pathname === "/en/webinar") {
    return routes.webinars;
  }

  if (pathname === "/webinar/kako-prodati-usluge-na-linkedin-u-2026") {
    return targetLocale === "en"
      ? "/en/webinar/how-to-sell-your-services-on-linkedin-in-2026"
      : pathname;
  }

  if (pathname === "/en/webinar/how-to-sell-your-services-on-linkedin-in-2026") {
    return targetLocale === "sr"
      ? "/webinar/kako-prodati-usluge-na-linkedin-u-2026"
      : pathname;
  }

  if (pathname.startsWith("/en/webinar/")) {
    const slug = pathname.replace("/en/webinar/", "");
    return targetLocale === "sr" ? `/webinar/${slug}` : `/en/webinar/${slug}`;
  }

  if (pathname.startsWith("/webinar/")) {
    const slug = pathname.replace("/webinar/", "");
    return targetLocale === "en" ? `/en/webinar/${slug}` : `/webinar/${slug}`;
  }

  if (pathname.startsWith("/en/growth-playbook/founder-led-growth/")) {
    const lesson = pathname.replace("/en/growth-playbook/founder-led-growth/", "");
    return targetLocale === "sr"
      ? `/growth-playbook/founder-led-growth/${lesson}`
      : `/en/growth-playbook/founder-led-growth/${lesson}`;
  }

  if (pathname.startsWith("/growth-playbook/founder-led-growth/")) {
    const lesson = pathname.replace("/growth-playbook/founder-led-growth/", "");
    return targetLocale === "en"
      ? `/en/growth-playbook/founder-led-growth/${lesson}`
      : `/growth-playbook/founder-led-growth/${lesson}`;
  }

  if (pathname === "/growth-playbook/founder-led-growth") {
    return targetLocale === "en"
      ? "/en/growth-playbook/founder-led-growth"
      : "/growth-playbook/founder-led-growth";
  }

  if (pathname === "/en/growth-playbook/founder-led-growth") {
    return routes.growthPlaybook;
  }

  return routes.home;
}

export function Header({ locale, dictionary }: HeaderProps) {
  const pathname = usePathname();
  const routes = getRoutes(locale);
  const alternateLocale = getAlternateLocale(locale);
  const languageHref = getLanguageSwitchPath(pathname, alternateLocale);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-8">
        <Link
          href={routes.home}
          className="inline-flex shrink-0 items-center"
          aria-label={siteConfig.name}
        >
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={1000}
            height={200}
            className="h-9 w-auto sm:h-10 md:h-11"
            priority
          />
        </Link>

        <MainNav locale={locale} dictionary={dictionary} languageHref={languageHref} />
      </div>
    </header>
  );
}
