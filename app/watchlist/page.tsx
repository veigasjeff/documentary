import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookmarkPlus } from "lucide-react"

export const metadata: Metadata = {
  title: "Your Watchlist",
  description: "Save documentaries to watch later in your personal watchlist.",
}

export default function WatchlistPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Your Watchlist</h1>
      <p className="text-muted-foreground mb-8">Save documentaries to watch later in your personal watchlist.</p>

      <div className="flex flex-col items-center justify-center py-12 text-center">
        <BookmarkPlus className="h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Your watchlist is empty</h2>
        <p className="text-muted-foreground max-w-md mb-6">
          Start adding documentaries to your watchlist to keep track of what you want to watch later.
        </p>
        <Link href="/documentaries">
          <Button>Browse Documentaries</Button>
        </Link>
      </div>
    </div>
  )
}

