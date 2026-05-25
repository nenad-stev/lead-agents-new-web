"use client";

import { useState, type FormEvent } from "react";

import { useContentGate } from "@/hooks/useContentGate";
import type { Locale } from "@/lib/i18n";

type ContentLockerProps = {
  children: React.ReactNode;
  locale: Locale;
};

const copy = {
  sr: {
    title: "Otključaj kompletan Founder Led Growth kurs",
    description: "Upiši email i odmah dobijaš pristup svim lekcijama — besplatno.",
    placeholder: "tvoj@email.com",
    submit: "Otključaj sve lekcije →",
    disclaimer: "Bez spama. Odjavi se kad god hoćeš.",
    error: "Unesi ispravnu email adresu.",
  },
  en: {
    title: "Unlock the Full Founder Led Growth Course",
    description: "Enter your email for instant access to all 12 lessons — free.",
    placeholder: "your@email.com",
    submit: "Unlock all lessons →",
    disclaimer: "No spam. Unsubscribe anytime.",
    error: "Enter a valid email address.",
  },
} as const;

export function ContentLocker({ children, locale }: ContentLockerProps) {
  const { isUnlocked, unlock } = useContentGate();
  const [error, setError] = useState<string | null>(null);
  const labels = copy[locale];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();

    if (!unlock(email)) {
      setError(labels.error);
      return;
    }

    setError(null);
  }

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="relative mt-2">
      <div className="gated-blur">{children}</div>

      <div
        className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent from-0% via-background/90 via-[30%] to-background px-4 py-10"
        aria-hidden={false}
      >
        <div className="w-full max-w-md rounded-2xl border border-border bg-card/95 p-6 text-center shadow-xl backdrop-blur-sm md:p-8">
          <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
            {labels.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
            {labels.description}
          </p>

          <form className="mt-6 space-y-3 text-left" onSubmit={handleSubmit}>
            <label htmlFor="flg-email" className="sr-only">
              Email
            </label>
            <input
              id="flg-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder={labels.placeholder}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-subtle transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
            {error ? (
              <p className="text-sm text-red-400" role="alert">
                {error}
              </p>
            ) : null}
            <button
              type="submit"
              className="w-full rounded-full bg-accent px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-[var(--accent-hover)]"
            >
              {labels.submit}
            </button>
          </form>

          <small className="mt-4 block text-xs text-muted-subtle">{labels.disclaimer}</small>
        </div>
      </div>
    </div>
  );
}
