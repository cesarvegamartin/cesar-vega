import { formatInterval } from "@/lib/format-interval"
import type { Dictionary } from "@/app/[lang]/dictionaries"
import { cardStyles } from "./card.styles"

type CardProps = {
  title: string
  company: string
  startDate: string
  endDate?: string
  tasks?: string[]
  locale: string
  durationDict: Dictionary["dateFormat"]["duration"]
  isLast?: boolean
}

export function Card({
  title,
  company,
  startDate,
  endDate,
  tasks,
  locale,
  durationDict,
  isLast = false,
}: CardProps) {
  const formattedDate = formatInterval(startDate, endDate, locale, durationDict)

  return (
    <article className={`${cardStyles.wrapper} ${isLast ? cardStyles.wrapperLast : ""}`}>
      <h3 className={cardStyles.title}>{title}</h3>
      <p className={cardStyles.subtitle}>{company}</p>
      <p className={cardStyles.date}>{formattedDate}</p>
      {tasks && tasks.length > 0 && (
        <ul className={cardStyles.list}>
          {tasks.map((task, i) => (
            <li key={i} className={cardStyles.listItem}>{task}</li>
          ))}
        </ul>
      )}
    </article>
  )
}
