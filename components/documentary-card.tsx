
import Image from "next/image"
import Link from "next/link"
import { Clock, Calendar, Eye } from "lucide-react"

interface DocumentaryCardProps {
  id: string
  title: string
  slug: string
  description: string
  thumbnailUrl: string
  duration: string
  releaseDate: string
  category: string
  views: number
}

export default function DocumentaryCard({
  id,
  title,
  slug,
  description,
  thumbnailUrl,
  duration,
  releaseDate,
  category,
  views,
}: DocumentaryCardProps) {
  // Format the release date
  const formattedDate = new Date(releaseDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  })

  // Format the duration to hours and minutes
  const hours = Math.floor(Number.parseInt(duration) / 60)
  const minutes = Number.parseInt(duration) % 60
  const formattedDuration = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`

  return (
    <Link href={`/documentary/${slug}`} className="group">
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <div className="relative h-48 md:h-56">
          <Image
            src={thumbnailUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ filter: "contrast(1.3) saturate(1.2) brightness(1.0) hue-rotate(0deg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex justify-between items-center">
              <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">{category}</span>
              <span className="bg-black/60 text-white text-xs px-2 py-1 rounded-full flex items-center">
                <Clock size={12} className="mr-1" />
                {formattedDuration}
              </span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{description}</p>
          <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              {formattedDate}
            </div>
            <div className="flex items-center">
              <Eye size={14} className="mr-1" />
              {views.toLocaleString()} views
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

