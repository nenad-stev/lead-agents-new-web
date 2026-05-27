"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { founderLedGrowthLessons } from "@/data/founderLedGrowthLessons";
import { getServiceAnchor, homeServices } from "@/data/home";
import { hasServicePage } from "@/data/services";
import { getRoutes } from "@/data/site";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

type MainNavProps = {
  locale: Locale;
  dictionary: Dictionary;
  languageHref: string;
};

type OpenMenu = "services" | "education" | null;

function ChevronIcon() {
  return (
    <svg
      className="nav-dropdown__chevron"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M5 7.5L10 12.5L15 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 16l4-6 4 3 5-8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
      <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const MENU_CLOSE_DELAY_MS = 320;

function NavDropdownPanel({
  id,
  label,
  isOpen,
  onOpen,
  onScheduleClose,
  onCloseNow,
  panelClassName,
  children,
}: {
  id: OpenMenu;
  label: string;
  isOpen: boolean;
  onOpen: (menu: OpenMenu) => void;
  onScheduleClose: () => void;
  onCloseNow: () => void;
  panelClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="nav-dropdown"
      onPointerEnter={() => onOpen(id)}
      onPointerLeave={onScheduleClose}
    >
      <button
        type="button"
        className="nav-dropdown__trigger"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => (isOpen ? onCloseNow() : onOpen(id))}
      >
        {label}
        <ChevronIcon />
      </button>
      {isOpen ? (
        <div
          className={`nav-dropdown__flyout ${panelClassName ?? ""}`}
          role="menu"
        >
          <div className="nav-mega">
            <div className="nav-mega__inner">{children}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function MainNav({ locale, dictionary, languageHref }: MainNavProps) {
  const pathname = usePathname();
  const routes = getRoutes(locale);
  const nav = dictionary.nav;
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<OpenMenu>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelScheduledClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const closeMenus = useCallback(() => {
    cancelScheduledClose();
    setOpenMenu(null);
  }, [cancelScheduledClose]);

  const openMenuNow = useCallback(
    (menu: OpenMenu) => {
      cancelScheduledClose();
      setOpenMenu(menu);
    },
    [cancelScheduledClose],
  );

  const scheduleCloseMenu = useCallback(() => {
    cancelScheduledClose();
    closeTimerRef.current = setTimeout(() => {
      setOpenMenu(null);
      closeTimerRef.current = null;
    }, MENU_CLOSE_DELAY_MS);
  }, [cancelScheduledClose]);

  useEffect(() => {
    closeMenus();
    setMobileOpen(false);
    setMobileGroup(null);
  }, [pathname, closeMenus]);

  useEffect(() => () => cancelScheduledClose(), [cancelScheduledClose]);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!navRef.current?.contains(event.target as Node)) {
        closeMenus();
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [closeMenus]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const [featuredService, ...otherServices] = homeServices;
  const lessonCount = founderLedGrowthLessons.length;
  const servicesAnchor = `${routes.home}#usluge`;
  const webinarSlug =
    locale === "en"
      ? "how-to-sell-your-services-on-linkedin-in-2026"
      : "kako-prodati-usluge-na-linkedin-u-2026";

  function serviceHref(slug: string) {
    return hasServicePage(slug) ? routes.service(slug) : `${routes.home}${getServiceAnchor(slug)}`;
  }

  const servicesPanel = (
    <>
      <Link href={serviceHref(featuredService.slug)} className="nav-mega__featured" role="menuitem">
        <span className="nav-mega__badge">{nav.servicesFeatured}</span>
        <div className="flex items-start gap-3">
          <span className="nav-mega__index">01</span>
          <div className="min-w-0 flex-1">
            <p className="text-base font-bold text-foreground">{featuredService.title[locale]}</p>
            <p className="nav-mega__item-desc mt-1 text-sm">{featuredService.description[locale]}</p>
          </div>
          <span className="nav-mega__arrow">
            <ArrowIcon />
          </span>
        </div>
      </Link>

      <div className="nav-mega__grid">
        {otherServices.map((service, index) => (
          <Link
            key={service.slug}
            href={serviceHref(service.slug)}
            className="nav-mega__item"
            role="menuitem"
          >
            <span className="nav-mega__index">{String(index + 2).padStart(2, "0")}</span>
            <div className="min-w-0 flex-1">
              <p className="nav-mega__item-title">{service.title[locale]}</p>
              <p className="nav-mega__item-desc">{service.description[locale]}</p>
            </div>
            <span className="nav-mega__arrow">
              <ArrowIcon />
            </span>
          </Link>
        ))}
      </div>

      <div className="nav-mega__footer">
        <span className="text-xs text-muted-subtle">
          {locale === "sr" ? "5 usluga · jedan Founder Led Growth sistem" : "5 services · one Founder Led Growth system"}
        </span>
        <Link href={servicesAnchor} className="nav-mega__footer-link" role="menuitem">
          {nav.viewAllServices} →
        </Link>
      </div>
    </>
  );

  const educationPanel = (
    <div className="nav-mega__edu-grid">
      <Link href={routes.growthPlaybook} className="nav-mega__edu-card" role="menuitem">
        <span className="nav-mega__edu-icon">
          <BookIcon />
        </span>
        <span className="nav-mega__edu-meta">
          {lessonCount} {nav.lessonsCount}
        </span>
        <p className="nav-mega__edu-title">{nav.growthPlaybook}</p>
        <p className="nav-mega__edu-desc">{nav.educationPlaybookDesc}</p>
        <span className="nav-mega__arrow mt-auto">
          <ArrowIcon />
        </span>
      </Link>

      <Link href={routes.caseStudies} className="nav-mega__edu-card" role="menuitem">
        <span className="nav-mega__edu-icon">
          <ChartIcon />
        </span>
        <span className="nav-mega__edu-meta">
          {locale === "sr" ? "Studije slučaja" : "Success stories"}
        </span>
        <p className="nav-mega__edu-title">{nav.caseStudies}</p>
        <p className="nav-mega__edu-desc">{nav.educationCaseStudiesDesc}</p>
        <span className="nav-mega__arrow mt-auto">
          <ArrowIcon />
        </span>
      </Link>

      <Link
        href={routes.webinar(webinarSlug)}
        className="nav-mega__edu-card"
        role="menuitem"
      >
        <span className="nav-mega__edu-icon">
          <PlayIcon />
        </span>
        <span className="nav-mega__edu-meta">
          {locale === "sr" ? "Webinar replay" : "Webinar replay"}
        </span>
        <p className="nav-mega__edu-title">{nav.webinars}</p>
        <p className="nav-mega__edu-desc">{nav.educationWebinarsDesc}</p>
        <span className="nav-mega__arrow mt-auto">
          <ArrowIcon />
        </span>
      </Link>
    </div>
  );

  return (
    <div ref={navRef}>
      <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
        <NavDropdownPanel
          id="services"
          label={nav.services}
          isOpen={openMenu === "services"}
          onOpen={openMenuNow}
          onScheduleClose={scheduleCloseMenu}
          onCloseNow={closeMenus}
        >
          {servicesPanel}
        </NavDropdownPanel>

        <NavDropdownPanel
          id="education"
          label={nav.education}
          isOpen={openMenu === "education"}
          onOpen={openMenuNow}
          onScheduleClose={scheduleCloseMenu}
          onCloseNow={closeMenus}
          panelClassName="nav-dropdown__flyout--education"
        >
          {educationPanel}
        </NavDropdownPanel>

        <Link
          href={routes.salesTools}
          className="nav-dropdown__trigger text-sm font-medium"
        >
          {nav.salesTools}
        </Link>

        <Link href={languageHref} className="rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-accent hover:text-accent">
          {nav.languageSwitch}
        </Link>

        <Link href={routes.contact} className="nav-cta">
          {nav.scheduleMeeting}
        </Link>
      </nav>

      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md border border-border px-3 py-2 text-sm font-medium text-foreground md:hidden"
        aria-expanded={mobileOpen}
        aria-controls="mobile-nav"
        onClick={() => setMobileOpen((open) => !open)}
      >
        {mobileOpen ? nav.menuClose : nav.menuOpen}
      </button>

      {mobileOpen ? (
        <nav
          id="mobile-nav"
          className="fixed inset-x-0 top-[4.25rem] z-40 max-h-[calc(100dvh-4.25rem)] overflow-y-auto border-t border-border/60 bg-background/95 px-6 py-5 backdrop-blur-xl md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            <li className="nav-mobile-group">
              <button
                type="button"
                className="nav-mobile-group__trigger"
                aria-expanded={mobileGroup === "services"}
                onClick={() =>
                  setMobileGroup((g) => (g === "services" ? null : "services"))
                }
              >
                {nav.services}
                <ChevronIcon />
              </button>
              {mobileGroup === "services" ? (
                <div className="nav-mobile-group__panel">
                  <Link
                    href={serviceHref(featuredService.slug)}
                    className="nav-mobile-link nav-mobile-link--featured"
                    onClick={() => setMobileOpen(false)}
                  >
                    {featuredService.title[locale]}
                  </Link>
                  {otherServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={serviceHref(service.slug)}
                      className="nav-mobile-link"
                      onClick={() => setMobileOpen(false)}
                    >
                      {service.title[locale]}
                    </Link>
                  ))}
                  <Link
                    href={servicesAnchor}
                    className="nav-mobile-link text-accent"
                    onClick={() => setMobileOpen(false)}
                  >
                    {nav.viewAllServices}
                  </Link>
                </div>
              ) : null}
            </li>

            <li className="nav-mobile-group">
              <button
                type="button"
                className="nav-mobile-group__trigger"
                aria-expanded={mobileGroup === "education"}
                onClick={() =>
                  setMobileGroup((g) => (g === "education" ? null : "education"))
                }
              >
                {nav.education}
                <ChevronIcon />
              </button>
              {mobileGroup === "education" ? (
                <div className="nav-mobile-group__panel">
                  <Link
                    href={routes.growthPlaybook}
                    className="nav-mobile-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {nav.growthPlaybook}
                  </Link>
                  <Link
                    href={routes.caseStudies}
                    className="nav-mobile-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {nav.caseStudies}
                  </Link>
                  <Link
                    href={routes.webinar(webinarSlug)}
                    className="nav-mobile-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {nav.webinars}
                  </Link>
                </div>
              ) : null}
            </li>

            <li>
              <Link
                href={routes.salesTools}
                className="nav-mobile-group__trigger"
                onClick={() => setMobileOpen(false)}
              >
                {nav.salesTools}
              </Link>
            </li>

            <li className="pt-3">
              <Link
                href={routes.contact}
                className="nav-cta w-full"
                onClick={() => setMobileOpen(false)}
              >
                {nav.scheduleMeeting}
              </Link>
            </li>

            <li className="pt-2">
              <Link
                href={languageHref}
                className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                onClick={() => setMobileOpen(false)}
              >
                {nav.languageSwitch}
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
