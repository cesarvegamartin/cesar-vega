/* ------------------------------------------------------------------ */
/*  Locale types                                                      */
/* ------------------------------------------------------------------ */

export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

export function isLocale(value: string): value is Locale {
	return locales.includes(value as Locale);
}

/* ------------------------------------------------------------------ */
/*  Static imports – every JSON is bundled at build time               */
/* ------------------------------------------------------------------ */

import commonEs from "@locales/data/common/es.json";
import commonEn from "@locales/data/common/en.json";

import landingEs from "@locales/data/landing/es.json";
import landingEn from "@locales/data/landing/en.json";

import aboutEs from "@locales/data/about/es.json";
import aboutEn from "@locales/data/about/en.json";

import experienceEs from "@locales/data/experience/es.json";
import experienceEn from "@locales/data/experience/en.json";

import formationEs from "@locales/data/formation/es.json";
import formationEn from "@locales/data/formation/en.json";

import contactEs from "@locales/data/contact/es.json";
import contactEn from "@locales/data/contact/en.json";

import notFoundEs from "@locales/data/not-found/es.json";
import notFoundEn from "@locales/data/not-found/en.json";

/* ------------------------------------------------------------------ */
/*  Data types (inferred from the JSON structure)                     */
/* ------------------------------------------------------------------ */

export type CommonData = typeof commonEs;
export type LandingData = typeof landingEs;
export type AboutData = typeof aboutEs;
export type ExperienceData = typeof experienceEs;
export type FormationData = typeof formationEs;
export type ContactData = typeof contactEs;
export type NotFoundData = typeof notFoundEs;

export type DurationStrings = CommonData["duration"];

type PageKey =
	| "landing"
	| "about"
	| "experience"
	| "formation"
	| "contact"
	| "not-found";

/* ------------------------------------------------------------------ */
/*  Look-up maps                                                      */
/* ------------------------------------------------------------------ */

const commonMap: Record<Locale, CommonData> = {
	es: commonEs,
	en: commonEn,
};

const pageMap: Record<PageKey, Record<Locale, unknown>> = {
	landing: { es: landingEs, en: landingEn },
	about: { es: aboutEs, en: aboutEn },
	experience: { es: experienceEs, en: experienceEn },
	formation: { es: formationEs, en: formationEn },
	contact: { es: contactEs, en: contactEn },
	"not-found": { es: notFoundEs, en: notFoundEn },
};

/* ------------------------------------------------------------------ */
/*  Public helpers                                                    */
/* ------------------------------------------------------------------ */

export function getCommon(locale: Locale): CommonData {
	return commonMap[locale];
}

export function getPageData<T>(page: PageKey, locale: Locale): T {
	return pageMap[page][locale] as T;
}
