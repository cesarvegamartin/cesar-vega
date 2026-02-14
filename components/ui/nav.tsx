import Link from "next/link"
import type { Dictionary, Locale } from "@/app/[lang]/dictionaries"
import { LangSwitcher } from "./lang-switcher"
import { navStyles } from "./nav.styles"

type NavProps = {
  lang: Locale
  dict: Dictionary["nav"]
  currentPath: string
}

const routes = [
  { key: "home" as const, href: "" },
  { key: "about" as const, href: "/about" },
  { key: "experience" as const, href: "/experience" },
  { key: "education" as const, href: "/education" },
  { key: "contact" as const, href: "/contact" },
]

export function Nav({ lang, dict, currentPath }: NavProps) {
  return (
    <header className={navStyles.header}>
      <nav className={navStyles.inner} aria-label="Main navigation">
        <ul className={navStyles.linkList}>
          {routes.map(({ key, href }) => {
            const fullHref = `/${lang}${href}`
            const isActive = currentPath === fullHref
            return (
              <li key={key}>
                <Link
                  href={fullHref}
                  className={isActive ? navStyles.linkActive : navStyles.link}
                  aria-current={isActive ? "page" : undefined}
                >
                  {dict[key]}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className={navStyles.right}>
          <LangSwitcher lang={lang} currentPath={currentPath} />
        </div>
      </nav>
    </header>
  )
}
