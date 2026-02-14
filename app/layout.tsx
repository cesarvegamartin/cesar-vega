import type { Metadata } from 'next'
import React from "react"
import './globals.css'

export const metadata: Metadata = {}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body >  
          {children}
      </body>
    </html>
  )
}
