"use client";

import { useEffect, useId, useRef } from "react";

import { calBooking } from "@/data/contact";

declare global {
  interface Window {
    Cal?: CalApi;
  }
}

type CalApi = ((...args: unknown[]) => void) & {
  loaded?: boolean;
  ns?: Record<string, CalApi>;
  q?: unknown[][];
};

function bootstrapCalLoader() {
  if (typeof window === "undefined" || window.Cal?.loaded) {
    return;
  }

  const scriptUrl = calBooking.embedScript;

  (function (C, A, L) {
    const p = function (a: CalApi, ar: unknown[]) {
      a.q = a.q || [];
      a.q.push(ar);
    };
    const d = C.document;
    C.Cal =
      C.Cal ||
      function (...ar: unknown[]) {
        const cal = C.Cal as CalApi;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          const script = d.createElement("script");
          script.src = A;
          script.async = true;
          d.head.appendChild(script);
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function (...args: unknown[]) {
            p(api, args);
          } as CalApi;
          api.q = api.q || [];
          const namespace = ar[1];
          if (typeof namespace === "string") {
            cal.ns![namespace] = api;
            p(api, ar);
          } else {
            p(cal, ar);
          }
          return;
        }
        p(cal, ar);
      };
  })(window, scriptUrl, "init");
}

type CalBookingEmbedProps = {
  calLink?: string;
};

export function CalBookingEmbed({ calLink = calBooking.calLink }: CalBookingEmbedProps) {
  const containerId = useId().replace(/:/g, "");
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) {
      return;
    }
    initialized.current = true;

    bootstrapCalLoader();

    const Cal = window.Cal;
    if (!Cal) {
      return;
    }

    Cal("init", { origin: calBooking.embedOrigin });
    Cal("inline", {
      elementOrSelector: `#${containerId}`,
      calLink,
      layout: "month_view",
    });
    Cal("ui", {
      theme: "dark",
      styles: {
        branding: {
          brandColor: calBooking.brandColor,
        },
      },
      cssVarsPerTheme: {
        dark: {
          "cal-brand": calBooking.brandColor,
          "cal-brand-emphasis": "#e6b800",
          "cal-brand-text": "#000000",
          "cal-bg": "#2c2e32",
          "cal-bg-emphasis": "#36373d",
          "cal-bg-muted": "#1c1d20",
          "cal-text": "#ffffff",
          "cal-text-emphasis": "#ffffff",
          "cal-text-muted": "#c1c1c1",
          "cal-border": "#36373d",
          "cal-border-subtle": "#36373d",
        },
      },
    });
  }, [calLink, containerId]);

  return (
    <div
      id={containerId}
      className="cal-embed-container min-h-[min(75vh,720px)] w-full"
      aria-label="Calendar booking"
    />
  );
}
