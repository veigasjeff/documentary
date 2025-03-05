import { NextResponse } from "next/server"

export async function GET() {
  const manifest = {
    name: "Best Documentaries",
    short_name: "BestDocs",
    description: "Watch the world's best documentary films",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0d8de3",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }

  return NextResponse.json(manifest)
}

