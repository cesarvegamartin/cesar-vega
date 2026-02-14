import { NextRequest, NextResponse } from "next/server"

const locales = ["es", "en"]
const defaultLocale = "es"

function getPreferredLocale(request: NextRequest): string {
  const acceptLang = request.headers.get("accept-language")
  if (!acceptLang) return defaultLocale

  const preferred = acceptLang
    .split(",")
    .map((part) => {
      const [lang, q] = part.trim().split(";q=")
      return { lang: lang.split("-")[0].toLowerCase(), q: q ? parseFloat(q) : 1 }
    })
    .sort((a, b) => b.q - a.q)

  for (const { lang } of preferred) {
    if (locales.includes(lang)) return lang
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (hasLocale) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set("x-next-pathname", pathname)
    return NextResponse.next({
      request: { headers: requestHeaders },
    })
  }

  const locale = getPreferredLocale(request)
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname}`

  return NextResponse.redirect(url)
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
}
