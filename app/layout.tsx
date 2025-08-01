import type React from "react"
import type { Metadata } from "next"
import { Inter, Anton } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
})

export const metadata: Metadata = {
  title: "AMG Pro - Consultoria Online de Treinos",
  description:
    "Consultoria online para formação de treinos personalizados. Acompanhamento dedicado para você alcançar seus objetivos.",
  keywords: "treino, consultoria, fitness, personal trainer, exercícios, musculação",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${anton.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
