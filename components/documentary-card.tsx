import Link from "next/link"
import Image from "next/image"
import { PlayCircle, Clock, Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { formatDuration, formatViews } from "@/lib/utils"

interface DocumentaryCardProps {
  documentary: {
    id: string
    slug: string
    title: string
    description: string
    thumbnailUrl: string
    duration: number
    views: number
    category: string
    releaseDate: string
  }
  featured?: boolean
}

export function DocumentaryCard({ documentary, featured = false }: DocumentaryCardProps) {
  const { slug, title, thumbnailUrl, duration, views, category } = documentary

  return (
    <Link href={`/documentary/${slug}`}>
      <Card className="overflow-hidden group h-full transition-all duration-300 hover:shadow-lg">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={thumbnailUrl || "/placeholder.svg"}
            alt={title}
            quality={90}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ filter: "contrast(1.3) saturate(1.2) brightness(1.0) hue-rotate(0deg)" }}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-primary/90 rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
              <PlayCircle className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>

          <Badge className="absolute top-3 left-3 bg-primary/80">{category}</Badge>

          <div className="absolute bottom-3 right-3 flex items-center space-x-3">
            <div className="flex items-center space-x-1 bg-black/60 text-white text-xs px-2 py-1 rounded-md">
              <Clock className="h-3 w-3" />
              <span>{formatDuration(duration)}</span>
            </div>
            <div className="flex items-center space-x-1 bg-black/60 text-white text-xs px-2 py-1 rounded-md">
              <Eye className="h-3 w-3" />
              <span>{formatViews(views)}</span>
            </div>
          </div>
        </div>

        <CardContent className="p-4">
          <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">{title}</h3>
          {featured && <p className="text-muted-foreground text-sm mt-2 line-clamp-2">{documentary.description}</p>}
        </CardContent>
      </Card>
    </Link>
  )
}

