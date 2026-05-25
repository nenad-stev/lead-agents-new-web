"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/Button";
import { getRoutes } from "@/data/site";
import { getDictionary, getLocaleFromPathname } from "@/lib/i18n";

const STORAGE_KEY = "lead-agents-exit-intent-dismissed";
const DISMISS_DAYS = 14;
const ARM_DELAY_MS = 4000;
const DESKTOP_MIN_WIDTH = 1024;

function isDesktopViewport() {
  if (typeof window === "undefined") return false;
  return window.matchMedia(`(min-width: ${DESKTOP_MIN_WIDTH}px)`).matches;
}

function isDismissed() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const dismissedAt = Number(raw);
    if (Number.isNaN(dismissedAt)) return false;
    const expiresAt = dismissedAt + DISMISS_DAYS * 24 * 60 * 60 * 1000;
    return Date.now() < expiresAt;
  } catch {
    return false;
  }
}

function persistDismiss() {
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    /* ignore */
  }
}

function isContactPage(pathname: string) {
  return pathname === "/kontakt" || pathname === "/en/contact";
}

export function ExitIntentPopup() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(locale);
  const routes = getRoutes(locale);
  const copy = dictionary.exitIntent;
  const titleId = useId();

  const [open, setOpen] = useState(false);
  const armedRef = useRef(false);
  const triggeredRef = useRef(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  const dismiss = useCallback(() => {
    persistDismiss();
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!isDesktopViewport() || isDismissed() || isContactPage(pathname)) {
      return;
    }

    const armTimer = window.setTimeout(() => {
      armedRef.current = true;
    }, ARM_DELAY_MS);

    const handleMouseOut = (event: MouseEvent) => {
      if (!armedRef.current || triggeredRef.current) return;
      if (event.clientY > 8) return;
      if (event.relatedTarget !== null) return;

      triggeredRef.current = true;
      setOpen(true);
    };

    document.documentElement.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.clearTimeout(armTimer);
      document.documentElement.removeEventListener("mouseout", handleMouseOut);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };

    window.addEventListener("keydown", handleKeyDown);
    dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, dismiss]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
        aria-label={copy.closeLabel}
        onClick={dismiss}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-accent/30 bg-card shadow-[0_0_80px_-16px_rgba(255,204,0,0.35)] outline-none"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 0%, rgb(255 204 0 / 16%), transparent 45%)",
          }}
          aria-hidden
        />

        <div className="relative p-7 md:p-9">
          <button
            type="button"
            onClick={dismiss}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/50 hover:text-foreground"
            aria-label={copy.closeLabel}
          >
            ×
          </button>

          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Lead Agents
          </p>

          <h2 id={titleId} className="mt-3 pr-8 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            {copy.title}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {copy.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={routes.contact} className="w-full sm:w-auto" onClick={dismiss}>
              {copy.primaryCta}
            </Button>
            <Button
              type="button"
              variant="secondary"
              className="w-full sm:w-auto"
              onClick={dismiss}
            >
              {copy.dismissCta}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
