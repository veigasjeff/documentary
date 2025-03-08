// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { PlayCircle } from "lucide-react"
// import { SearchBar } from "@/components/search-bar"

// interface FeaturedDoc {
//   id: string
//   slug: string
//   title: string
//   description: string
//   thumbnailUrl: string
//   category: string
// }

// const featuredDocs: FeaturedDoc[] = [
//   {
//     id: "1",
//     slug: "planet-earth",
//     title: "Planet Earth",
//     description: "Experience the wonders of our planet through breathtaking footage of wildlife and landscapes.",
//     thumbnailUrl: "/images/planet-earth.jpg",
//     category: "Nature",
//   },
//   {
//     id: "2",
//     slug: "the-social-dilemma",
//     title: "The Social Dilemma",
//     description: "Explore how social media is reprogramming civilization with tech experts sounding the alarm.",
//     thumbnailUrl: "/images/social-dilemma.jpg",
//     category: "Technology",
//   },
//   {
//     id: "3",
//     slug: "free-solo",
//     title: "Free Solo",
//     description: "Follow Alex Honnold as he becomes the first person to ever free solo climb Yosemite's El Capitan.",
//     thumbnailUrl: "/images/free-solo.jpg",
//     category: "Adventure",
//   },
// ]

// export function HeroSection() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const currentDoc = featuredDocs[currentIndex]

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredDocs.length)
//     }, 8000)

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <section className="relative h-[600px] overflow-hidden rounded-2xl">
//       {/* Background image with gradient overlay */}
//       <div className="absolute inset-0 w-full h-full">
//         <Image
//           src={currentDoc.thumbnailUrl || "/placeholder.svg"}
//           alt={currentDoc.title}
//           fill
//           className="object-cover transition-opacity duration-1000"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
//       </div>

//       {/* Content */}
//       <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
//         <div className="max-w-3xl mb-8">
//           <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/80 text-primary-foreground">
//             Featured Documentary
//           </span>
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{currentDoc.title}</h1>
//           <p className="text-lg text-gray-200 mb-6">{currentDoc.description}</p>
//           <div className="flex flex-wrap gap-4">
//             <Link href={`/documentary/${currentDoc.slug}`}>
//               <Button size="lg" className="gap-2">
//                 <PlayCircle className="h-5 w-5" />
//                 Watch Now
//               </Button>
//             </Link>
//             <Link href="/documentaries">
//               <Button size="lg" variant="outline" className="bg-black/50 text-white border-white hover:bg-black/70">
//                 Explore More
//               </Button>
//             </Link>
//           </div>
//         </div>

//         {/* Dots navigation */}
//         <div className="flex justify-center space-x-2 mt-auto">
//           {featuredDocs.map((_, index) => (
//             <button
//               key={index}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 index === currentIndex ? "bg-primary scale-125" : "bg-gray-400/50"
//               }`}
//               onClick={() => setCurrentIndex(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Search bar overlay */}
//       <div className="absolute top-8 left-0 right-0 px-8 md:px-12">
//         <SearchBar />
//       </div>
//     </section>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PlayCircle } from "lucide-react"
import { SearchBar } from "@/components/search-bar"

interface FeaturedDoc {
  id: string
  slug: string
  title: string
  description: string
  thumbnailUrl: string
  category: string
}

const featuredDocs: FeaturedDoc[] = [
  {
    id: "1",
    slug: "uncovering-the-rise-of-extremism-in-australia",
    title: "Uncovering the rise of extremism in Australia",
    description: "'Our sister brought home a Nazi’: Uncovering the rise of extremism in Australia | Four Corners",
    thumbnailUrl: "https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741349002/extremism_in_Australia_enlzf7.jpg",
    category: "Society",
  },
  {
    id: "2",
    slug: "virgin-girl-sold-to-a-aillionaire-husband",
    title: "Virgin Girl Sold To a Billionaire Husband",
    description: "VIRGIN GIRL SOLD TO A BILLIONAIRE HUSBAND TO PAY HER FATHER’S LOAN",
    thumbnailUrl: "https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741342444/VIRGIN_GIRL_xtb3lw.jpg",
    category: "Crime",
  },
  {
    id: "3",
    slug: "how-the-beatles-changed-the-world",
    title: "How the Beatles Changed the World",
    description: "A fascinating story of the cultural, social, spiritual, and musical revolution ignited by The Beatles, with revealing interviews and rarely-seen archival footage of the band.",
    thumbnailUrl: "https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741349861/How_the_Beatles_Changed_the_World_kxy30n.jpg",
    category: "Movies",
  },
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentDoc = featuredDocs[currentIndex]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredDocs.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[600px] overflow-hidden rounded-2xl">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={currentDoc.thumbnailUrl || "/placeholder.svg"}
          alt={currentDoc.title}
          quality={90}
          fill
          className="object-cover transition-opacity duration-1000"
          priority
          style={{ filter: "contrast(1.3) saturate(1.2) brightness(1.0) hue-rotate(0deg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
        <div className="max-w-3xl mb-8">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/80 text-primary-foreground">
            Featured Documentary
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{currentDoc.title}</h1>
          <p className="text-lg text-gray-200 mb-6">{currentDoc.description}</p>
          <div className="flex flex-wrap gap-4">
            <Link href={`/documentary/${currentDoc.slug}`}>
              <Button size="lg" className="gap-2">
                <PlayCircle className="h-5 w-5" />
                Watch Now
              </Button>
            </Link>
            <Link href="/documentaries">
              <Button size="lg" variant="outline" className="bg-black/50 text-white border-white hover:bg-black/70">
                Explore More
              </Button>
            </Link>
          </div>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center space-x-2 mt-auto">
          {featuredDocs.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-primary scale-125" : "bg-gray-400/50"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Search bar overlay */}
      <div className="absolute top-8 left-0 right-0 px-8 md:px-12">
        <SearchBar />
      </div>
    </section>
  )
}

