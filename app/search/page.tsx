import type { Metadata } from "next"
import { searchDocumentaries } from "@/lib/documentaries"
import { DocumentaryCard } from "@/components/documentary-card"
import { SearchBar } from "@/components/search-bar"
import { Search } from "lucide-react"

interface SearchPageProps {
  searchParams: { q?: string }
}

export const metadata: Metadata = {
  title: "Search Documentaries",
  description: "Search for documentaries by title, category, or keywords.",
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || ""
  const documentaries = query ? await searchDocumentaries(query) : []

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Documentaries</h1>

      <div className="max-w-2xl mx-auto mb-8">
        <SearchBar />
      </div>

      {query ? (
        <>
          <h2 className="text-xl font-medium mb-6">
            {documentaries.length > 0
              ? `Found ${documentaries.length} result${documentaries.length === 1 ? "" : "s"} for "${query}"`
              : `No results found for "${query}"`}
          </h2>

          {documentaries.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {documentaries.map((documentary) => (
                <DocumentaryCard key={documentary.id} documentary={documentary} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No documentaries found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Try searching with different keywords or browse our categories to find documentaries that interest you.
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">Search for documentaries</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Enter keywords in the search bar above to find documentaries by title, category, or topic.
          </p>
        </div>
      )}
    </div>
  )
}

