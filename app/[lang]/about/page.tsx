import { getDictionary, hasLocale } from "../dictionaries"
import type { Locale } from "../dictionaries"
import { notFound } from "next/navigation"
import { Section } from "@/components/ui/section"
import { Blockquote } from "@/components/ui/blockquote"
import { aboutStyles } from "@/components/ui/about.styles"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang as Locale)
  return { title: dict.about.title }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang as Locale)
  const t = dict.about

  return (
    <Section>
      <h1
        className={aboutStyles.title}
        style={{ viewTransitionName: "page-title" }}
      >
        {t.title}
      </h1>
      <Blockquote>{t.quote}</Blockquote>
      {t.paragraphs.map((p, i) => (
        <p key={i} className={aboutStyles.paragraph}>{p}</p>
      ))}
    </Section>
  )
}
