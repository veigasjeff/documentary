import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getDocumentariesByCategory, getAllCategories } from "@/app/lib/data"
import DocumentaryCard from "@/components/documentary-card"

interface PageProps {
  params: {
    category: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = decodeURIComponent(params.category)
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1)

  return {
    title: `${formattedCategory} Documentaries | Best Documentaries`,
    description: `Watch the best ${formattedCategory.toLowerCase()} documentaries. Explore our collection of ${formattedCategory.toLowerCase()} documentary films.`,
  }
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((category) => ({
    category: category.toLowerCase(),
  }))
}

export default function CategoryPage({ params }: PageProps) {
  const category = decodeURIComponent(params.category)
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1)

  const allCategories = getAllCategories()
  const matchedCategory = allCategories.find((c) => c.toLowerCase() === formattedCategory.toLowerCase())

  if (!matchedCategory) {
    notFound()
  }

  const documentaries = getDocumentariesByCategory(matchedCategory)

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/categories"
            className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Categories
          </Link>
        </div>

        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{matchedCategory} Documentaries</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Explore our collection of {documentaries.length} {matchedCategory.toLowerCase()} documentaries.
          </p>
        </div>

        {documentaries.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {documentaries.map((doc) => (
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
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300 text-lg">No documentaries found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

