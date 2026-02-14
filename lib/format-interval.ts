import type { Dictionary } from "@/app/[lang]/dictionaries"

function formatMonth(date: Date, locale: string): string {
  return new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" })
    .format(date)
    .toUpperCase()
}

function computeDuration(start: Date, end: Date, dict: Dictionary["dateFormat"]["duration"]): string {
  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1
  const years = Math.floor(months / 12)
  months = months % 12

  const parts: string[] = []
  if (years > 0) parts.push(`${years} ${years === 1 ? dict.year : dict.years}`)
  if (months > 0) parts.push(`${months} ${months === 1 ? dict.month : dict.months}`)

  return parts.join(` ${dict.and} `)
}

export function formatInterval(
  startDate: string,
  endDate: string | undefined,
  locale: string,
  durationDict: Dictionary["dateFormat"]["duration"]
): string {
  const start = new Date(startDate + "-01")
  const formattedStart = formatMonth(start, locale)

  if (!endDate) return formattedStart

  const end = endDate === "now" ? new Date() : new Date(endDate + "-01")
  const formattedEnd = endDate === "now"
    ? locale === "es" ? "ACTUALIDAD" : "PRESENT"
    : formatMonth(end, locale)

  const duration = computeDuration(start, end, durationDict)

  return `${formattedStart} - ${formattedEnd}    (${duration})`
}
