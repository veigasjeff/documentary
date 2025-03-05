import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import {
  getFeaturedDocumentaries,
  getPopularDocumentaries,
  getRecentDocumentaries,
  getAllCategories,
} from "@/app/lib/data"
import DocumentaryCard from "@/components/documentary-card"

export const metadata: Metadata = {
  title: "Best Documentaries - Watch the World's Best Documentary Films",
  description:
    "Discover and watch the world's best documentary films across various categories including nature, science, history, and more.",
}

export default function HomePage() {
  const featuredDocs = getFeaturedDocumentaries().slice(0, 4)
  const popularDocs = getPopularDocumentaries().slice(0, 6)
  const recentDocs = getRecentDocumentaries().slice(0, 6)
  // const categories = getAllCategories().slice(0, 6)
  const categories = getAllCategories().slice()

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative">
        {featuredDocs.length > 0 && (
          <>
            <div className="relative h-[70vh] min-h-[500px]">
              <Image
                src={featuredDocs[0].thumbnailUrl || "/placeholder.svg"}
                alt={featuredDocs[0].title}
                fill
                priority
                className="object-cover"
                style={{ filter: "contrast(1.3) saturate(1.2) brightness(0.7) hue-rotate(0deg)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-2xl">
                    <span className="inline-block bg-primary-600 text-white text-sm px-3 py-1 rounded-full mb-4">
                      Featured
                    </span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                      {featuredDocs[0].title}
                    </h1>
                    <p className="text-gray-200 text-lg mb-6">{featuredDocs[0].description}</p>
                    <div className="flex flex-wrap gap-4">
                      <Link
                        href={`/documentary/${featuredDocs[0].slug}`}
                        className="btn-primary bg-primary-600 hover:bg-primary-700"
                      >
                        Watch Now
                      </Link>
                      <Link href="/categories" className="btn-primary bg-gray-800/80 hover:bg-gray-800 text-white">
                        Browse Categories
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Browse by Category</h2>
            <Link
              href="/categories"
              className="text-primary-600 dark:text-primary-400 hover:underline flex items-center"
            >
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/category/${category.toLowerCase()}`}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow hover:shadow-md transition-shadow"
              >
                <div className="font-medium text-lg mb-1">{category}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Explore {category}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Documentaries Section */}
      <section className="py-12 md:py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Popular Documentaries</h2>
            <Link href="/popular" className="text-primary-600 dark:text-primary-400 hover:underline flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDocs.map((doc) => (
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
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Documentaries Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Recent Additions</h2>
            <Link href="/recent" className="text-primary-600 dark:text-primary-400 hover:underline flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-16 bg-primary-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Subscribe to our newsletter to receive updates on new documentaries, exclusive content, and more.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                required
              />
              <button type="submit" className="btn-primary bg-primary-600 hover:bg-primary-700 whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

