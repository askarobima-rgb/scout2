import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "./components/navbar" // Menggunakan named import untuk Navbar

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SeiScout – AI Wallet Radar",
  description:
    "SeiScout – AI Wallet Radar: Insight ≦ 3s - Alert < 1s. Analyze Sei Network wallets and monitor network activity with AI-powered insights.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex flex-col min-h-[calc(100vh-64px)] pt-16">
            {" "}
            {/* Adjust pt-16 for navbar height */}
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
