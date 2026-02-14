import type esDict from "./dictionaries/es.json"

export type Dictionary = typeof esDict
export type Locale = "es" | "en"

const locales: Locale[] = ["es", "en"]
const defaultLocale: Locale = "es"

export function hasLocale(lang: string): lang is Locale {
  return locales.includes(lang as Locale)
}

export { locales, defaultLocale }

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  es: () => import("./dictionaries/es.json").then((m) => m.default),
  en: () => import("./dictionaries/en.json").then((m) => m.default),
}

export async function getDictionary(lang: Locale): Promise<Dictionary> {
  return dictionaries[lang]()
}
