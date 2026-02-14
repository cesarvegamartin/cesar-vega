import { getDictionary, hasLocale } from "@/locales"
import type { Locale } from "@/locales"
import { notFound } from "next/navigation"
import { Section } from "@/components/ui/section"
import { Blockquote } from "@/components/ui/blockquote"
import { Card } from "@/components/ui/card"
import { educationStyles } from "@/components/ui/education.styles"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang as Locale)
  return { title: dict.education.title }
}

export default async function EducationPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang as Locale)
  const t = dict.education
  const durationDict = dict.dateFormat.duration

  return (
    <Section>
      <h1
        className={educationStyles.title}
        style={{ viewTransitionName: "page-title" }}
      >
        {t.title}
      </h1>
      <Blockquote>{t.quote}</Blockquote>
      {t.entries.map((entry) => (
        <div key={entry.year}>
          <h2 className={educationStyles.yearHeading}>{entry.year}</h2>
          {entry.items.map((item, i) => (
            <Card
              key={`${entry.year}-${i}`}
              title={item.title}
              company={item.institution}
              startDate={item.startDate}
              endDate={item.endDate}
              locale={lang}
              durationDict={durationDict}
              isLast={i === entry.items.length - 1}
            />
          ))}
        </div>
      ))}
    </Section>
  )
}
