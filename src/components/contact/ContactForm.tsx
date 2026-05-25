"use client";

import { useState } from "react";

import type { Dictionary, Locale } from "@/lib/i18n";

type ContactFormProps = {
  locale: Locale;
  labels: Dictionary["pages"]["contact"];
};

type FormState = "idle" | "submitting" | "success" | "error";

const inputClassName =
  "w-full rounded-xl border border-border bg-background px-4 py-3.5 text-base text-foreground placeholder:text-muted-subtle transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

export function ContactForm({ locale, labels }: ContactFormProps) {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState("submitting");

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
      locale,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setState("error");
        return;
      }

      form.reset();
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center">
        <p className="text-lg font-semibold text-foreground">{labels.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="sr-only">
          {labels.namePlaceholder}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder={labels.namePlaceholder}
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="sr-only">
          {labels.emailPlaceholder}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={labels.emailPlaceholder}
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="sr-only">
          {labels.messagePlaceholder}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder={labels.messagePlaceholder}
          className={`${inputClassName} min-h-[140px] resize-y`}
        />
      </div>

      {state === "error" ? (
        <p className="text-sm text-red-400" role="alert">
          {labels.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {state === "submitting" ? labels.submitting : labels.submit}
      </button>
    </form>
  );
}
