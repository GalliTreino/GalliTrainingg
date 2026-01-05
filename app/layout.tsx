import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Poppins } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const poppins = Poppins({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Galli Training - Consultoria Online de Treinos",
  description:
    "Consultoria online para formação de treinos personalizados. Acompanhamento dedicado para você alcançar seus objetivos.",
  keywords: "treino, consultoria, fitness, personal trainer, exercícios, musculação",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${poppins.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
