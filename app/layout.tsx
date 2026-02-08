import type { Metadata } from "next"
import "./globals.css"
import Header from "./componentes/header/Header"
import Footer from "./componentes/footer/Footer"

export const metadata: Metadata = {
  title: "UpAcademia | Eleve seu treino ao próximo nível",

  description:
    "UpAcademia é uma academia moderna em Alegrete-RS, com equipamentos de qualidade e profissionais capacitados.",

  keywords: "academia, gym, musculação, treino, fitness, Alegrete RS",

  authors: [{ name: "UpAcademia" }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "UpAcademia | Eleve seu treino ao próximo nível",

    description:
      "Treine na UpAcademia com estrutura moderna e acompanhamento profissional.",

    url: "https://upacademia.com.br",

    siteName: "UpAcademia",

    locale: "pt_BR",

    type: "website",
  },

  category: "fitness",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col antialiased bg-slate-950 text-white">

        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  )
}

