import { Roboto_Slab, Quicksand } from "next/font/google"
import { getDictionary, hasLocale, locales } from "./dictionaries"
import type { Locale } from "./dictionaries"
import { Nav } from "@/components/ui/nav"
import { headers } from "next/headers"
import { notFound } from "next/navigation"

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["100"],
  display: "swap",
  variable: "--font-serif",
})

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-sans",
})

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) return {}

  const dict = await getDictionary(lang as Locale)
  return {
    title: {
      default: dict.meta.title,
      template: `%s | ${dict.meta.title}`,
    },
    description: dict.meta.description,
    authors: [{ name: "César Vega", url: "https://cesarvega.dev" }],
    icons: { icon: "/images/favicon.png" },
    metadataBase: new URL("https://cesarvega.dev"),
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: "website",
      locale: lang,
    },
  }
}

export const viewport = {
  themeColor: "#EC6544",
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang as Locale)
  const headersList = await headers()
  const pathname = headersList.get("x-next-pathname") || `/${lang}`

  return (
    <html lang={lang} className={`${robotoSlab.variable} ${quicksand.variable}`}>
      <body className="font-sans text-dark">
        <Nav lang={lang as Locale} dict={dict.nav} currentPath={pathname} />
        {children}
      </body>
    </html>
  )
}
