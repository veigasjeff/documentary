import { NextResponse } from "next/server"

export async function GET() {
  const robotsTxt = `
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://bestdocumentaries.vercel.app/sitemap.xml
`

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  })
}

