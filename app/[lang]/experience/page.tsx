import { getDictionary, hasLocale } from "@/locales"
import type { Locale } from "@/locales"
import { notFound } from "next/navigation"
import { Section } from "@/components/ui/section"
import { Blockquote } from "@/components/ui/blockquote"
import { Card } from "@/components/ui/card"
import { experienceStyles } from "@/components/ui/experience.styles"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang as Locale)
  return { title: dict.experience.title }
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang as Locale)
  const t = dict.experience
  const durationDict = dict.dateFormat.duration

  return (
    <Section variant="grey">
      <h1
        className={experienceStyles.title}
        style={{ viewTransitionName: "page-title" }}
      >
        {t.title}
      </h1>
      <Blockquote>{t.quote}</Blockquote>
      {t.years.map((yearGroup) => (
        <div key={yearGroup.year}>
          <h2 className={experienceStyles.yearHeading}>{yearGroup.year}</h2>
          {yearGroup.jobs.map((job, i) => (
            <Card
              key={`${yearGroup.year}-${i}`}
              title={job.title}
              company={job.company}
              startDate={job.startDate}
              endDate={job.endDate}
              tasks={job.tasks}
              locale={lang}
              durationDict={durationDict}
              isLast={i === yearGroup.jobs.length - 1}
            />
          ))}
        </div>
      ))}
    </Section>
  )
}
