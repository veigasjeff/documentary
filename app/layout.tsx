import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import { Suspense } from 'react'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://bestdocumentaries.vercel.app"),
  title: {
    default: "Best Documentaries - Watch Free Documentaries Online",
    template: "%s | Best Documentaries",
  },
  description:
    "Discover and watch the best documentaries from around the world for free. Explore a curated collection of educational and entertaining documentaries.",
  keywords: ["documentaries", "free documentaries", "watch documentaries", "documentary films", "educational videos"],
  authors: [{ name: "Best Documentaries Team" }],
  creator: "Best Documentaries",
  publisher: "Best Documentaries",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://bestdocumentaries.vercel.app",
    title: "Best Documentaries - Watch Free Documentaries Online",
    description: "Discover and watch the best documentaries from around the world for free.",
    siteName: "Best Documentaries",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL || "https://bestdocumentaries.vercel.app"}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Best Documentaries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Documentaries - Watch Free Documentaries Online",
    description: "Discover and watch the best documentaries from around the world for free.",
    images: [`${process.env.NEXT_PUBLIC_APP_URL || "https://bestdocumentaries.vercel.app"}/og_image.jpg`],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${process.env.NEXT_PUBLIC_APP_URL || "https://bestdocumentaries.vercel.app"}/site.webmanifest`,
    generator: 'bestdocumentaries',
      // Added canonical URL
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL || "https://bestdocumentaries.vercel.app",
  },
  verification: {
    google: "google9a97f9b3a43f6609",
    yandex: "b09707947ff1686d",
    bing: "695BD01C3BC615AB69B7E9C3B718EB74",
  },
    
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <Script
          id="google-analytics"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-C5TM2MD1CS"
        />
        <Script id="ga-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C5TM2MD1CS');
          `}
        </Script>
          </div>
          <Toaster />
          <Analytics />
        </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}



// import './globals.css'