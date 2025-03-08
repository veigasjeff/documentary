import type { Metadata } from "next"
import { getAllDocumentaries } from "@/lib/documentaries"
import { DocumentaryCard } from "@/components/documentary-card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "All Documentaries",
  description: "Browse our complete collection of documentaries from around the world.",
}

export default async function DocumentariesPage() {
  const documentaries = await getAllDocumentaries()

  // Group documentaries by category
  const categorizedDocs = documentaries.reduce(
    (acc, doc) => {
      if (!acc[doc.category]) {
        acc[doc.category] = []
      }
      acc[doc.category].push(doc)
      return acc
    },
    {} as Record<string, typeof documentaries>,
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">All Documentaries</h1>
      <p className="text-muted-foreground mb-8">
        Browse our complete collection of documentaries from around the world.
      </p>

      {Object.entries(categorizedDocs).map(([category, docs]) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {docs.map((documentary) => (
              <DocumentaryCard key={documentary.id} documentary={documentary} />
            ))}
          </div>
          <Separator className="mt-8" />
        </div>
      ))}
    </div>
  )
}

