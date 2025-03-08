import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getFeaturedDocumentaries, getRecentDocumentaries } from "@/lib/documentaries"
import { DocumentaryCard } from "@/components/documentary-card"
import { CategoryList } from "@/components/category-list"
import { HeroSection } from "@/components/hero-section"

export default async function Home() {
  const featuredDocumentaries = await getFeaturedDocumentaries(4)
  const recentDocumentaries = await getRecentDocumentaries(8)

  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />

      <section className="my-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Featured Documentaries</h2>
          <Link href="/documentaries">
            <Button variant="outline">View All</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDocumentaries.map((documentary) => (
            <DocumentaryCard key={documentary.id} documentary={documentary} />
          ))}
        </div>
      </section>

      <section className="my-12 bg-muted rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-6">Browse by Category</h2>
        <CategoryList />
      </section>

      <section className="my-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Recently Added</h2>
          <Link href="/documentaries">
            <Button variant="outline">View All</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentDocumentaries.map((documentary) => (
            <DocumentaryCard key={documentary.id} documentary={documentary} />
          ))}
        </div>
      </section>

      <section className="my-12 bg-primary/5 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Discover the World Through Documentaries</h2>
        <p className="text-lg mb-6 max-w-3xl mx-auto">
          Expand your knowledge and perspective with our curated collection of thought-provoking documentaries.
        </p>
        <Link href="/documentaries">
          <Button size="lg">Explore All Documentaries</Button>
        </Link>
      </section>
    </div>
  )
}

