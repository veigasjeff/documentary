import type { Metadata } from "next"
import { getRecentDocumentaries } from "@/app/lib/data"
import DocumentaryCard from "@/components/documentary-card"

export const metadata: Metadata = {
  title: "Recent Documentaries | Best Documentaries",
  description: "Discover our latest documentary additions. Stay updated with the newest documentary films.",
}

export default function RecentPage() {
  // Get recent documentaries
  const recentDocs = getRecentDocumentaries()

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Recently Added</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Our latest documentary additions, sorted by release date.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentDocs.map((doc) => (
            <DocumentaryCard
              key={doc.id}
              id={doc.id}
              title={doc.title}
              slug={doc.slug}
              description={doc.description}
              thumbnailUrl={doc.thumbnailUrl}
              duration={doc.duration}
              releaseDate={doc.releaseDate}
              category={doc.category}
              views={doc.views}
              featured={doc.featured}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

