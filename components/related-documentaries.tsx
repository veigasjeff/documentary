import Link from "next/link"
import Image from "next/image"
import { Clock, Eye } from "lucide-react"
import { formatDuration, formatViews } from "@/lib/utils"
import type { Documentary } from "@/lib/documentaries"

interface RelatedDocumentariesProps {
  documentaries: Documentary[]
}

export function RelatedDocumentaries({ documentaries }: RelatedDocumentariesProps) {
  return (
    <div className="space-y-4">
      {documentaries.map((doc) => (
        <Link
          key={doc.id}
          href={`/documentary/${doc.slug}`}
          className="flex gap-3 group hover:bg-muted p-2 rounded-lg transition-colors"
        >
          <div className="relative w-24 h-16 flex-shrink-0 rounded-md overflow-hidden">
            <Image
              src={doc.thumbnailUrl || "/placeholder.svg"}
              alt={doc.title}
              quality={90}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              style={{ filter: "contrast(1.3) saturate(1.2) brightness(1.0) hue-rotate(0deg)" }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">{doc.title}</h3>
            <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{formatDuration(doc.duration)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-3 w-3" />
                <span>{formatViews(doc.views)}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

