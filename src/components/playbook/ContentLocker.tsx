"use client";

import { useState, type FormEvent } from "react";

import type { Locale } from "@/lib/i18n";

type ContentLockerProps = {
  children?: React.ReactNode;
  locale: Locale;
};

const copy = {
  sr: {
    title: "Founder Led Growth playbook uskoro ide live",
    description:
      "Ostavi email i obavestićemo te čim otvorimo pristup. Dobićeš prvi pristup lekcijama i praktične šablone koje možeš odmah da primeniš.",
    placeholder: "tvoj@email.com",
    submit: "Sačuvaj mi mesto na listi čekanja",
    submitting: "Šaljem...",
    success: "Hvala, upisan si. Javljamo ti se čim playbook bude live.",
    disclaimer: "Samo relevantna obaveštenja, bez spama.",
    error: "Unesi ispravnu email adresu.",
    networkError: "Slanje nije uspelo. Pokušaj ponovo za minut.",
  },
  en: {
    title: "Founder Led Growth playbook is going live soon",
    description:
      "Leave your email and we will notify you the moment access opens. You will get first access to lessons and practical templates you can apply right away.",
    placeholder: "your@email.com",
    submit: "Save my spot on the waitlist",
    submitting: "Submitting...",
    success: "Thanks, you are on the list. We will email you when the playbook is live.",
    disclaimer: "Only relevant updates, no spam.",
    error: "Enter a valid email address.",
    networkError: "Submission failed. Please try again in a minute.",
  },
} as const;

export function ContentLocker({ children, locale }: ContentLockerProps) {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const labels = copy[locale];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(labels.error);
      setSuccess(null);
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/flg-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          locale,
          page: typeof window !== "undefined" ? window.location.pathname : "",
        }),
      });

      if (!response.ok) {
        setError(labels.networkError);
        return;
      }

      localStorage.setItem("flg_waitlist_email", email);
      setSuccess(labels.success);
      form.reset();
    } catch {
      setError(labels.networkError);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={children ? "relative mt-2" : "mt-2"}>
      {children ? <div className="gated-blur">{children}</div> : null}

      <div
        className={`${children ? "absolute inset-0" : ""} flex items-center justify-center bg-gradient-to-b from-transparent from-0% via-background/90 via-[30%] to-background px-4 py-10`}
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
              disabled={isSubmitting || Boolean(success)}
              placeholder={labels.placeholder}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-subtle transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-60"
            />
            {error ? (
              <p className="text-sm text-red-400" role="alert">
                {error}
              </p>
            ) : null}
            {success ? (
              <p className="text-sm text-emerald-300" role="status">
                {success}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={isSubmitting || Boolean(success)}
              className="w-full rounded-full bg-accent px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? labels.submitting : labels.submit}
            </button>
          </form>

          <small className="mt-4 block text-xs text-muted-subtle">{labels.disclaimer}</small>
        </div>
      </div>
    </div>
  );
}
