import Link from "next/link"
import type { Locale } from "@/app/[lang]/dictionaries"
import { langSwitcherStyles } from "./lang-switcher.styles"

type LangSwitcherProps = {
  lang: Locale
  currentPath: string
}

export function LangSwitcher({ lang, currentPath }: LangSwitcherProps) {
  const pathWithoutLang = currentPath.replace(/^\/(es|en)/, "") || ""

  return (
    <div className={langSwitcherStyles.wrapper}>
      <Link
        href={`/es${pathWithoutLang}`}
        className={lang === "es" ? langSwitcherStyles.active : langSwitcherStyles.inactive}
        aria-label="Cambiar a Espa&ntilde;ol"
      >
        ES
      </Link>
      <span className={langSwitcherStyles.separator} aria-hidden="true">|</span>
      <Link
        href={`/en${pathWithoutLang}`}
        className={lang === "en" ? langSwitcherStyles.active : langSwitcherStyles.inactive}
        aria-label="Switch to English"
      >
        EN
      </Link>
    </div>
  )
}
