import type { MetadataRoute } from "next"
import { getAllDocumentaries } from "@/lib/documentaries"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const documentaries = await getAllDocumentaries()

  const documentaryUrls = documentaries.map((doc) => ({
    url: `${process.env.NEXT_PUBLIC_APP_URL || "https://bestdocumentaries.vercel.app"}/documentary/${doc.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }))

  return [
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL || "https://bestdocumentaries.vercel.app"}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL || "https://bestdocumentaries.vercel.app"}/documentaries`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    ...documentaryUrls,
  ]
}

