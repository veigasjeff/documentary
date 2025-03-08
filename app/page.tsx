import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getFeaturedDocumentaries, getRecentDocumentaries } from "@/lib/documentaries"
import { DocumentaryCard } from "@/components/documentary-card"
import { CategoryList } from "@/components/category-list"
import { HeroSection } from "@/components/hero-section"
import Script from "next/script"

export default async function Home() {
  const featuredDocumentaries = await getFeaturedDocumentaries(4)
  const recentDocumentaries = await getRecentDocumentaries(8)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Best Documentaries",
    "url": "https://bestdocumentaries.vercel.app",
    "description": "Discover and watch the best documentaries from around the world for free. Explore a curated collection of educational and entertaining documentaries.",
    "keywords": [
      "documentaries",
      "free documentaries",
      "watch documentaries",
      "documentary films",
      "educational videos"
    ],
    "publisher": {
      "@type": "Organization",
      "name": "Best Documentaries",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bestdocumentaries.vercel.app/favicon.ico"
      }
    },
    "author": {
      "@type": "Organization",
      "name": "Best Documentaries Team"
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://bestdocumentaries.vercel.app/og_image.jpg",
      "width": 1200,
      "height": 630,
      "caption": "Best Documentaries"
    },
    "sameAs": [
      "https://www.facebook.com/bestdocumentaries",
      "https://twitter.com/bestdocs",
      "https://www.instagram.com/bestdocumentaries"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://bestdocumentaries.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
            <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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

