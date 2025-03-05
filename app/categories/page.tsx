import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getAllCategories, getDocumentaries } from "@/app/lib/data"

export const metadata: Metadata = {
  title: "Documentary Categories | Best Documentaries",
  description: "Browse documentaries by category. Find nature, science, history, and more documentary categories.",
}

export default function CategoriesPage() {
  const categories = getAllCategories()
  const documentaries = getDocumentaries()

  // Map each category to its count and first documentary's thumbnail
  const categoryData = categories.map((category) => {
    const docsInCategory = documentaries.filter((doc) => doc.category === category)
    return {
      category,
      count: docsInCategory.length,
      thumbnailUrl: docsInCategory.length > 0 ? docsInCategory[0].thumbnailUrl : "/images/default-thumbnail.jpg", // Fallback image
    }
  })

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4">
      <div className="mb-8">
          <Link
            href="/"
            className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Home
          </Link>
        </div>
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Documentary Categories</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Browse our collection of documentaries by category. Discover fascinating stories across a wide range of
            subjects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categoryData.map(({ category, count, thumbnailUrl }) => (
            <Link
              key={category}
              href={`/category/${category.toLowerCase()}`}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48">
                <Image
                  src={thumbnailUrl || "/placeholder.svg"}
                  alt={category}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={90}
                  style={{ filter: "contrast(1.3) saturate(1.2) brightness(1.0) hue-rotate(0deg)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{category}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {count} documentar{count === 1 ? "y" : "ies"}
                </p>
                <div className="text-primary-600 dark:text-primary-400 font-medium flex items-center">
                  Explore Category
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

