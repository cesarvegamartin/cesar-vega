import Image from "next/image"
import { getDictionary, hasLocale } from "@/locales"
import type { Locale } from "@/locales"
import { notFound } from "next/navigation"
import { Section } from "@/components/ui/section"
import { Blockquote } from "@/components/ui/blockquote"
import { contactStyles } from "@/components/ui/contact.styles"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang as Locale)
  return { title: dict.contact.title }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang as Locale)
  const t = dict.contact

  return (
    <Section variant="grey">
      <h1
        className={contactStyles.title}
        style={{ viewTransitionName: "page-title" }}
      >
        {t.title}
      </h1>
      <Blockquote>{t.quote}</Blockquote>

      <div className={contactStyles.contactRow}>
        <Image
          src="/images/icon-google.png"
          alt={t.googleIconAlt}
          width={24}
          height={24}
          className={contactStyles.icon}
        />
        <a
          href={`mailto:${t.email}`}
          target="_blank"
          rel="noopener noreferrer"
          title={t.emailLabel}
          className={contactStyles.link}
        >
          {t.email}
        </a>
      </div>

      <div className={contactStyles.contactRow}>
        <Image
          src="/images/icon-linkedin.png"
          alt={t.linkedinIconAlt}
          width={24}
          height={24}
          className={contactStyles.icon}
        />
        <a
          href={t.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={t.linkedinLabel}
          className={contactStyles.link}
        >
          {t.linkedin}
        </a>
      </div>
    </Section>
  )
}
