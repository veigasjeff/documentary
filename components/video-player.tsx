'use client'

import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

interface VideoPlayerProps {
  src: string
  title: string
}

export default function VideoPlayer({ src, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    let hls: Hls | null = null
    
    if (Hls.isSupported()) {
      if (src.endsWith('.m3u8')) {
        if (videoRef.current) {
          hls = new Hls()
          hls.loadSource(src)
          hls.attachMedia(videoRef.current)
        }
      }
    } else if (videoRef.current?.canPlayType('application/vnd.apple.mpegurl')) {
      // For native HLS support in Safari
      videoRef.current.src = src
    }

    return () => {
      if (hls) {
        hls.destroy()
      }
    }
  }, [src])

  if (src.endsWith('.m3u8')) {
    return (
      <video
        ref={videoRef}
        controls
        className="w-full h-full"
        style={{ filter: "contrast(1.3) saturate(1.2) brightness(1.0) hue-rotate(0deg)" }}
      >
        <source src={src} type="application/x-mpegURL" />
        Your browser does not support the video tag.
      </video>
    )
  }

  return (
    <iframe
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
      className="w-full h-full"
      style={{ filter: "contrast(1.3) saturate(1.2) brightness(1.0) hue-rotate(0deg)" }}
    ></iframe>
  )
}