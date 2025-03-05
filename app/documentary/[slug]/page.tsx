
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Share2, Bookmark, Star } from "lucide-react"
import VideoPlayer from "@/components/video-player"
import { getDocumentaryBySlug, getDocumentaries, getDocumentariesByCategory } from "@/app/lib/data"
import DocumentaryCard from "@/components/documentary-card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const documentary = getDocumentaryBySlug(params.slug)

  if (!documentary) {
    return {
      title: "Documentary Not Found",
    }
  }

  return {
    title: `${documentary.title} | Best Documentaries`,
    description: documentary.description,
    openGraph: {
      title: documentary.title,
      description: documentary.description,
      type: "video.movie",
      url: `https://bestdocumentaries.vercel.app/documentary/${documentary.slug}`,
      images: [
        {
          url: documentary.thumbnailUrl,
          width: 1200,
          height: 630,
          alt: documentary.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: documentary.title,
      description: documentary.description,
      images: [documentary.thumbnailUrl],
    },
  }
}

export async function generateStaticParams() {
  const documentaries = getDocumentaries()
  return documentaries.map((doc) => ({
    slug: doc.slug,
  }))
}

export default function DocumentaryPage({ params }: PageProps) {
  const documentary = getDocumentaryBySlug(params.slug)

  if (!documentary) {
    notFound()
  }

  const hasMultipleVideos = !!documentary.videoUrl1 || !!documentary.videoUrl2 || !!documentary.videoUrl3 || !!documentary.videoUrl4 || !!documentary.videoUrl5 || !!documentary.videoUrl6 || !!documentary.videoUrl7 || !!documentary.videoUrl8 || !!documentary.videoUrl9 || !!documentary.videoUrl0 
  const relatedDocs = getDocumentariesByCategory(documentary.category).filter((doc) => doc.slug !== documentary.slug)

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/"
            className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">{documentary.title}</h1>
            {hasMultipleVideos ? (
              <Tabs defaultValue="part1" className="mb-8">
                <TabsList className="mb-4 flex space-x-2 p-1 rounded-lg">
                  <TabsTrigger value="part1" className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                    Part 1
                  </TabsTrigger>
                  {documentary.videoUrl1 && (
                    <TabsTrigger
                      value="part2"
                      className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                    >
                      Part 2
                    </TabsTrigger>
                  )}
                  {documentary.videoUrl2 && (
                    <TabsTrigger
                      value="part3"
                      className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                    >
                      Part 3
                    </TabsTrigger>
                  )}
                  {documentary.videoUrl3 && (
                    <TabsTrigger
                      value="part4"
                      className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                    >
                      Part 4
                    </TabsTrigger>
                  )}
                  {documentary.videoUrl4 && (
                    <TabsTrigger
                      value="part5"
                      className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                    >
                      Part 5
                    </TabsTrigger>
                  )}
                  {documentary.videoUrl5 && (
                    <TabsTrigger
                      value="part6"
                      className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                    >
                      Part 6
                    </TabsTrigger>
                  )}
                  {documentary.videoUrl6 && (
                    <TabsTrigger
                      value="part7"
                      className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                    >
                      Part 7
                    </TabsTrigger>
                  )}
                  {documentary.videoUrl7 && (
                    <TabsTrigger
                      value="part8"
                      className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                    >
                      Part 8
                    </TabsTrigger>
                  )}
                  {documentary.videoUrl8 && (
                    <TabsTrigger
                      value="part9"
                      className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                    >
                      Part 9
                    </TabsTrigger>
                  )}
                  {documentary.videoUrl9 && (
                    <TabsTrigger
                      value="part10"
                      className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                    >
                      Part 10
                    </TabsTrigger>
                  )}
                </TabsList> */}
                {/* <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden p-4 md:p-8">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-2xl font-bold mb-4">{documentary.title}</h1>
    {hasMultipleVideos ? (
      <Tabs defaultValue="part1" className="mb-8">
        <TabsList className="mb-4 grid grid-cols-4 gap-2 p-1 md:flex md:space-x-2 md:justify-center">
     
          <TabsTrigger 
            value="part1" 
            className="w-full px-2 py-1.5 md:px-4 md:py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 text-sm md:text-base"
          >
            Part 1
          </TabsTrigger>

        
          {[...Array(9)].map((_, index) => {
            const videoUrl = documentary[`videoUrl${index + 1}`];
            if (!videoUrl) return null;

            return (
              <TabsTrigger
                key={`part${index + 2}`}
                value={`part${index + 2}`}
                className="w-full px-2 py-1.5 md:px-4 md:py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 text-sm md:text-base"
              >
                Part {index + 2}
              </TabsTrigger>
            );
          })}
        </TabsList>
                <TabsContent value="part1"> */}
                  {/* <div className="video-container rounded-lg overflow-hidden shadow-xl">
                    <iframe
                      src={documentary.videoUrl}
                      title={`${documentary.title} - Part 1`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="w-full h-full"
                      style={{ filter: "contrast(1.3) saturate(1.2) brightness(1.0) hue-rotate(0deg)" }}
                    ></iframe>
                  </div> */}
                  {/* <div className="video-container rounded-lg overflow-hidden shadow-xl">
                    <VideoPlayer
                      src={documentary.videoUrl}
                      title={`${documentary.title} - Part 1`}
                    />
                  </div>
                </TabsContent>

                {documentary.videoUrl1 && (
                  <TabsContent value="part2">
                    <div className="video-container rounded-lg overflow-hidden shadow-xl">
                      <iframe
                        src={documentary.videoUrl1}
                        title={`${documentary.title} - Part 2`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full"
                        style={{ filter: "contrast(1.3) saturate(1.2) brightness(1.0) hue-rotate(0deg)" }}
                      ></iframe>
                    </div>
                  </TabsContent>
                )}

                {documentary.videoUrl2 && (
                  <TabsContent value="part3">
                    <div className="video-container rounded-lg overflow-hidden shadow-xl">
                      <iframe
                        src={documentary.videoUrl2}
                        title={`${documentary.title} - Part 3`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full"
                        style={{ filter: "contrast(1.3) saturate(1.2) brightness(1.0) hue-rotate(0deg)" }}
                      ></iframe>
                    </div>
                  </TabsContent>
                )}

                {documentary.videoUrl3 && (
                  <TabsContent value="part4">
                    <div className="video-container rounded-lg overflow-hidden shadow-xl">
                      <iframe
                        src={documentary.videoUrl3}
                        title={`${documentary.title} - Part 4`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full"
                        style={{ filter: "contrast(1.3) saturate(1.2) brightness(1.0) hue-rotate(0deg)" }}
                      ></iframe>
                    </div>
                  </TabsContent>
                )}

                {documentary.videoUrl4 && (
                  <TabsContent value="part5">
                    <div className="video-container rounded-lg overflow-hidden shadow-xl">
                      <iframe
                        src={documentary.videoUrl4}
                        title={`${documentary.title} - Part 5`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full"
                        style={{ filter: "contrast(1.3) saturate(1.2) brightness(1.0) hue-rotate(0deg)" }}
                      ></iframe>
                    </div>
                  </TabsContent>
                )}

                {documentary.videoUrl5 && (
                  <TabsContent value="part6">
                    <div className="video-container rounded-lg overflow-hidden shadow-xl">
                      <iframe
                        src={documentary.videoUrl5}
                        title={`${documentary.title} - Part 6`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full"
                        style={{ filter: "contrast(1.3) saturate(1.2) brightness(1.0) hue-rotate(0deg)" }}
                      ></iframe>
                    </div>
                  </TabsContent>
                )}

                {documentary.videoUrl6 && (
                  <TabsContent value="part7">
                    <div className="video-container rounded-lg overflow-hidden shadow-xl">
                      <iframe
                        src={documentary.videoUrl6}
                        title={`${documentary.title} - Part 7`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full"
                        style={{ filter: "contrast(1.3) saturate(1.2) brightness(1.0) hue-rotate(0deg)" }}
                      ></iframe>
                    </div>
                  </TabsContent>
                )}

                {documentary.videoUrl7 && (
                  <TabsContent value="part8">
                    <div className="video-container rounded-lg overflow-hidden shadow-xl">
                      <iframe
                        src={documentary.videoUrl7}
                        title={`${documentary.title} - Part 8`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full"
                        style={{ filter: "contrast(1.3) saturate(1.2) brightness(1.0) hue-rotate(0deg)" }}
                      ></iframe>
                    </div>
                  </TabsContent>
                )}

                {documentary.videoUrl8 && (
                  <TabsContent value="part9">
                    <div className="video-container rounded-lg overflow-hidden shadow-xl">
                      <iframe
                        src={documentary.videoUrl8}
                        title={`${documentary.title} - Part 9`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full"
                        style={{ filter: "contrast(1.3) saturate(1.2) brightness(1.0) hue-rotate(0deg)" }}
                      ></iframe>
                    </div>
                  </TabsContent>
                )}

                {documentary.videoUrl9 && (
                  <TabsContent value="part10">
                    <div className="video-container rounded-lg overflow-hidden shadow-xl">
                      <iframe
                        src={documentary.videoUrl9}
                        title={`${documentary.title} - Part 10`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full"
                        style={{ filter: "contrast(1.3) saturate(1.2) brightness(1.0) hue-rotate(0deg)" }}
                      ></iframe>
                    </div>
                  </TabsContent>
                )}
              </Tabs>
            ) : (
              <div className="video-container rounded-lg overflow-hidden shadow-xl">
                <iframe
                  src={documentary.videoUrl}
                  title={documentary.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full"
                  style={{ filter: "contrast(1.3) saturate(1.2) brightness(1.0) hue-rotate(0deg)" }}
                ></iframe>
              </div>
            )} */}
<div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden p-4 md:p-8">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-2xl font-bold mb-4">{documentary.title}</h1>

    {hasMultipleVideos ? (
      <Tabs defaultValue="part1" className="mb-8">
        {/* 🚀 Increased gap on mobile (mb-10) */}
        <TabsList className="mb-12 md:mb-6 grid grid-cols-4 gap-2 p-1 md:flex md:space-x-2 md:justify-center bg-transparent relative z-20">
          {Array(10).fill().map((_, index) => {
            const partNumber = index + 1;
            const videoUrl = documentary[`videoUrl${index === 0 ? '' : index}`];
            if (index > 0 && !videoUrl) return null;

            return (
              <TabsTrigger
                key={`part${partNumber}`}
                value={`part${partNumber}`}
                className="w-full px-2 py-1.5 md:px-4 md:py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 text-sm md:text-base"
              >
                Part {partNumber}
              </TabsTrigger>
            );
          })}
        </TabsList>

        {/* 🚀 Increased gap on mobile (mt-10) */}
        <div className="relative z-10 mt-12 md:mt-6">
          {Array(10).fill().map((_, index) => {
            const partNumber = index + 1;
            const videoUrl = documentary[`videoUrl${index === 0 ? '' : index}`];
            if (index > 0 && !videoUrl) return null;

            return (
              <TabsContent key={`content${partNumber}`} value={`part${partNumber}`}>
                <div className="video-container rounded-lg overflow-hidden shadow-xl relative z-10">
                  {index === 0 ? (
                    <VideoPlayer
                      src={videoUrl}
                      title={`${documentary.title} - Part ${partNumber}`}
                    />
                  ) : (
                    <iframe
                      src={videoUrl}
                      title={`${documentary.title} - Part ${partNumber}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="w-full h-full"
                      style={{ filter: "contrast(1.3) saturate(1.2) brightness(1.0) hue-rotate(0deg)" }}
                    />
                  )}
                </div>
              </TabsContent>
            );
          })}
        </div>
      </Tabs>
    ) : (
      <div className="video-container rounded-lg overflow-hidden shadow-xl">
        <VideoPlayer
          src={documentary.videoUrl}
          title={documentary.title}
        />
      </div>
    )}

            <div className="prose dark:prose-invert max-w-none mb-8">
              <h2 className="text-xl font-bold mb-4">About this Documentary</h2>
              <p className="text-gray-700 dark:text-gray-300">{documentary.longDescription}</p>
            </div>

            {documentary.tags && documentary.tags.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {documentary.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/tag/${tag}`}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-4 justify-between items-center border-t dark:border-gray-700 pt-6">
              <div className="flex gap-2">
                <div className="relative">
                  {/* <button
                    className="btn-primary bg-primary-600 hover:bg-primary-700 flex items-center gap-2"
                    onClick={() => document.getElementById("share-dropdown")?.classList.toggle("hidden")}
                  > */}
                    {/* <Share2 size={16} />
                    Share */}
                  {/* </button> */}
                  <button className="btn-primary bg-primary-600 hover:bg-primary-700">Share</button>
                  <div
                    id="share-dropdown"
                    className="absolute hidden z-10 mt-2 bg-white dark:bg-gray-800 rounded-md shadow-lg p-2 w-48"
                  >
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://bestdocumentaries.vercel.app/documentary/${documentary.slug}`)}&text=${encodeURIComponent(documentary.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md w-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                      Twitter
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://bestdocumentaries.vercel.app/documentary/${documentary.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md w-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      Facebook
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://bestdocumentaries.vercel.app/documentary/${documentary.slug}`)}&title=${encodeURIComponent(documentary.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md w-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"  
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      LinkedIn
                    </a>
                    <a
                      href={`mailto:?subject=${encodeURIComponent(`Check out this documentary: ${documentary.title}`)}&body=${encodeURIComponent(`I thought you might enjoy this documentary: ${documentary.title}\n\nhttps://bestdocumentaries.vercel.app/documentary/${documentary.slug}`)}`}
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md w-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      Email
                    </a>
                  </div>
                </div>
                {/* <button className="btn-primary bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 flex items-center gap-2">
                  <Bookmark size={16} />
                  Save for Later
                </button> */}
              </div>

              <div className="flex items-center">
                <span className="mr-2 text-gray-600 dark:text-gray-300">Rate this documentary:</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} className="text-yellow-400 hover:text-yellow-500">
                      <Star className="h-6 w-6" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Documentaries */}
        {relatedDocs.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Documentaries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedDocs.slice(0, 3).map((doc) => (
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
          </div>
        )}
      </div>
    </div>
  )
}

