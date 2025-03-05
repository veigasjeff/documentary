import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | Best Documentaries",
    default: "Best Documentaries - Watch the World's Best Documentary Films",
  },
  description:
    "Discover and watch the world's best documentary films across various categories including nature, science, history, and more.",
  keywords: [
    "documentaries",
    "documentary films",
    "watch documentaries",
    "best documentaries",
    "documentary streaming",
  ],
  authors: [{ name: "Best Documentaries Team" }],
  creator: "Best Documentaries",
  publisher: "Best Documentaries",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bestdocumentaries.vercel.app",
    siteName: "Best Documentaries",
    title: "Best Documentaries - Watch the World's Best Documentary Films",
    description: "Discover and watch the world's best documentary films across various categories.",
    images: [
      {
        url: "https://bestdocumentaries.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Best Documentaries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Documentaries - Watch the World's Best Documentary Films",
    description: "Discover and watch the world's best documentary films across various categories.",
    images: ["https://bestdocumentaries.vercel.app/og_image.jpg"],
    creator: "@bestdocumentaries",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google9a97f9b3a43f6609",
    yandex: "b09707947ff1686d",
    bing: "695BD01C3BC615AB69B7E9C3B718EB74",
  },
    generator: 'drtrailer'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
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
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'