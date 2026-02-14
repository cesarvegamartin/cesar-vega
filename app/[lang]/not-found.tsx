import Link from "next/link"
import { landingStyles } from "@/components/ui/landing.styles"

export default function NotFound() {
  return (
    <main className={landingStyles.wrapper}>
      <h1
        className="mb-20 font-serif text-6xl font-thin leading-tight text-coral md:text-7xl"
        style={{ viewTransitionName: "page-title" }}
      >
        {"404: No encontrado"}
      </h1>
      <p className="mb-20 font-sans text-2xl font-light text-dark md:text-[34px]">
        {"La pagina a la que intentas acceder no existe"}
      </p>
      <Link
        href="/"
        className="text-dark transition-colors hover:border-b hover:border-dark"
      >
        {"Ir al inicio / Go home"}
      </Link>
    </main>
  )
}
