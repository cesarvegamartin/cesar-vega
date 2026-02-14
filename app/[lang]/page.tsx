import Image from "next/image"
import { getDictionary, hasLocale } from "@/locales"
import type { Locale } from "@/locales"
import { notFound } from "next/navigation"
import { landingStyles } from "@/components/ui/landing.styles"

export default async function LandingPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang as Locale)
  const t = dict.landing

  return (
    <main className={landingStyles.wrapper}>
      <Image
        src="/images/avatar.png"
        alt={t.avatarAlt}
        width={160}
        height={160}
        priority
        className={landingStyles.avatar}
      />
      <h1
        className={landingStyles.title}
        style={{ viewTransitionName: "page-title" }}
      >
        {t.title}
      </h1>
      <p className={landingStyles.subtitle}>{t.subtitle}</p>
    </main>
  )
}
