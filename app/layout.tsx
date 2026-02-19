import type { Metadata } from "next"
import "./globals.css"
import Header from "./componentes/header/Header"
import Footer from "./componentes/footer/Footer"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.upacademiafit.com.br"),

  title: {
    default: "UpAcademia | Academia em Alegrete-RS",
    template: "%s | UpAcademia",
  },

  description:
    "UpAcademia é uma academia moderna em Alegrete-RS, com musculação, treinos personalizados e profissionais qualificados. Estrutura completa para elevar seu treino.",

  keywords: [
    "academia em Alegrete",
    "academia Alegrete RS",
    "musculação Alegrete",
    "treino personalizado",
    "fitness Alegrete",
    "UpAcademia"
  ],

  authors: [{ name: "UpAcademia" }],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "UpAcademia | Academia em Alegrete-RS",
    description:
      "Treine na UpAcademia em Alegrete-RS com estrutura moderna e acompanhamento profissional.",
    url: "https://www.upacademiafit.com.br",
    siteName: "UpAcademia",
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "UpAcademia | Academia em Alegrete-RS",
    description:
      "Academia moderna em Alegrete-RS com treinos personalizados e estrutura completa.",
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
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}


