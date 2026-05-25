import { en } from "@/dictionaries/en";
import { sr } from "@/dictionaries/sr";

export const locales = ["sr", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "sr";

const dictionaries = {
  sr,
  en,
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "sr";
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "sr" ? "en" : "sr";
}
