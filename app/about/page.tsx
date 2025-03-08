"use client"
import { useEffect } from 'react'
import type { Metadata } from "next"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"

// export const metadata: Metadata = {
//   title: "About Us",
//   description: "Learn more about Best Documentaries and our mission to bring you the best documentary content.",
// }

export default function AboutPage() {
  useEffect(() => {
    // Client-side only code
    window.analytics?.track('PageView')
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Best Documentaries</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-4">
            At Best Documentaries, we believe in the power of documentary films to educate, inspire, and transform. Our
            mission is to curate and provide access to the most compelling documentaries from around the world, making
            knowledge and diverse perspectives accessible to everyone.
          </p>
          <p className="text-muted-foreground">
            We strive to be the premier destination for documentary enthusiasts, offering a carefully selected
            collection that spans various topics, from nature and science to history and social issues.
          </p>
        </div>
        <div className="relative w-full h-64 md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dcrlnyd7n/image/upload/v1741413619/og_image_eudcpv.jpg"
            alt="About Best Documentaries"
            quality={90}
            fill
            className="object-cover"
            style={{ filter: "contrast(1.3) saturate(1.2) brightness(1.0) hue-rotate(0deg)" }}
          />
        </div>

      </div>

      <Separator className="my-8" />

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-muted-foreground mb-4">
          Best Documentaries was founded in 2023 by a group of documentary filmmakers and enthusiasts who recognized the
          need for a dedicated platform that celebrates the art of documentary filmmaking. What started as a small
          project has grown into a comprehensive library of documentaries across various genres and topics.
        </p>
        <p className="text-muted-foreground">
          Our team is passionate about the power of storytelling through documentaries and committed to bringing you
          content that matters. We continuously update our collection to include both classic documentaries and the
          latest releases, ensuring you always have access to relevant and engaging content.
        </p>
      </div>

      <Separator className="my-8" />

      <div>
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-6 bg-muted rounded-lg">
            <h3 className="text-xl font-medium mb-2">Education</h3>
            <p className="text-muted-foreground">
              We believe in the educational power of documentaries to expand knowledge and understanding.
            </p>
          </div>
          <div className="p-6 bg-muted rounded-lg">
            <h3 className="text-xl font-medium mb-2">Diversity</h3>
            <p className="text-muted-foreground">
              We value diverse perspectives and strive to represent a wide range of voices and viewpoints.
            </p>
          </div>
          <div className="p-6 bg-muted rounded-lg">
            <h3 className="text-xl font-medium mb-2">Accessibility</h3>
            <p className="text-muted-foreground">
              We are committed to making documentary content accessible to everyone, regardless of background.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

