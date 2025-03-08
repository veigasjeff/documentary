// import { Clock, Eye, Calendar, Tag } from "lucide-react"
// import { Badge } from "@/components/ui/badge"
// import { formatDuration, formatViews, formatDate } from "@/lib/utils"

// interface DocumentaryMetaProps {
//   views: number
//   duration: number
//   releaseDate: string
//   category: string
// }

// export function DocumentaryMeta({ views, duration, releaseDate, category }: DocumentaryMetaProps) {
//   return (
//     <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
//       <div className="flex items-center gap-1">
//         <Clock className="h-4 w-4" />
//         <span>{formatDuration(duration)}</span>
//       </div>
//       <div className="flex items-center gap-1">
//         <Eye className="h-4 w-4" />
//         <span>{formatViews(views)} views</span>
//       </div>
//       <div className="flex items-center gap-1">
//         <Calendar className="h-4 w-4" />
//         <span>{formatDate(releaseDate)}</span>
//       </div>
//       <div className="flex items-center gap-1">
//         <Tag className="h-4 w-4" />
//         <Badge variant="secondary">{category}</Badge>
//       </div>
//     </div>
//   )
// }

import { Clock, Eye, Calendar, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { formatDuration, formatViews, formatDate } from "@/lib/utils"

interface DocumentaryMetaProps {
  views: number
  duration: number
  releaseDate: string
  category: string
}

export function DocumentaryMeta({ views, duration, releaseDate, category }: DocumentaryMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-1">
        <Clock className="h-4 w-4" />
        <span>{formatDuration(duration)}</span>
      </div>
      <div className="flex items-center gap-1">
        <Eye className="h-4 w-4" />
        <span>{formatViews(views)} views</span>
      </div>
      <div className="flex items-center gap-1">
        <Calendar className="h-4 w-4" />
        <span>{formatDate(releaseDate)}</span>
      </div>
      <div className="flex items-center gap-1">
        <Tag className="h-4 w-4" />
        <Badge variant="secondary">{category}</Badge>
      </div>
    </div>
  )
}

