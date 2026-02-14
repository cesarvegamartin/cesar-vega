import { sectionStyles } from "./section.styles"

type SectionProps = {
  children: React.ReactNode
  variant?: "white" | "grey"
}

export function Section({ children, variant = "white" }: SectionProps) {
  return (
    <main className={`${sectionStyles.base} ${sectionStyles[variant]}`}>
      <div
        className={sectionStyles.inner}
        style={{ viewTransitionName: "page-content" }}
      >
        {children}
      </div>
    </main>
  )
}
