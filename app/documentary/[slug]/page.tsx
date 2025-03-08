// import { notFound } from "next/navigation"
// import { getDocumentaryBySlug, getRelatedDocumentaries } from "@/lib/documentaries"
// import { VideoPlayer } from "@/components/video-player"
// import { DocumentaryMeta } from "@/components/documentary-meta"
// import { ShareButtons } from "@/components/share-buttons"
// import { RelatedDocumentaries } from "@/components/related-documentaries"
// import { Separator } from "@/components/ui/separator"
// import { formatDate } from "@/lib/utils"

// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const documentary = await getDocumentaryBySlug(params.slug)

//   if (!documentary) {
//     return {}
//   }

//   return {
//     title: documentary.title,
//     description: documentary.description,
//     openGraph: {
//       title: documentary.title,
//       description: documentary.description,
//       type: "video.movie",
//       url: `${process.env.NEXT_PUBLIC_APP_URL || "https://bestdocumentaries.vercel.app"}/documentary/${documentary.slug}`,
//       images: [
//         {
//           url: documentary.thumbnailUrl,
//           width: 1200,
//           height: 630,
//           alt: documentary.title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: documentary.title,
//       description: documentary.description,
//       images: [documentary.thumbnailUrl],
//     },
//   }
// }

// export default async function DocumentaryPage({ params }: { params: { slug: string } }) {
//   const documentary = await getDocumentaryBySlug(params.slug)

//   if (!documentary) {
//     notFound()
//   }

//   const relatedDocumentaries = await getRelatedDocumentaries(documentary.id, documentary.category, 4)

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2">
//           <VideoPlayer
//             videoUrl={documentary.videoUrl}
//             thumbnailUrl={documentary.thumbnailUrl}
//             title={documentary.title}
//           />

//           <div className="mt-6">
//             <h1 className="text-3xl font-bold mb-2">{documentary.title}</h1>
//             <DocumentaryMeta
//               views={documentary.views}
//               duration={documentary.duration}
//               releaseDate={documentary.releaseDate}
//               category={documentary.category}
//             />

//             <div className="flex items-center justify-between mt-4">
//               <div className="flex items-center space-x-4">
//                 <span className="text-sm text-muted-foreground">Released: {formatDate(documentary.releaseDate)}</span>
//                 <span className="text-sm text-muted-foreground">Director: {documentary.director}</span>
//               </div>
//               <ShareButtons
//                 url={`${process.env.NEXT_PUBLIC_APP_URL || "https://bestdocumentaries.vercel.app"}/documentary/${documentary.slug}`}
//                 title={documentary.title}
//                 description={documentary.description}
//               />
//             </div>

//             <Separator className="my-6" />

//             <div className="prose dark:prose-invert max-w-none">
//               <h2 className="text-2xl font-semibold mb-4">About this Documentary</h2>
//               <p className="text-base leading-relaxed">{documentary.description}</p>
//             </div>
//           </div>
//         </div>

//         <div className="lg:col-span-1">
//           <h2 className="text-2xl font-semibold mb-4">Related Documentaries</h2>
//           <RelatedDocumentaries documentaries={relatedDocumentaries} />
//         </div>
//       </div>
//     </div>
//   )
// }










// import { notFound } from "next/navigation"
// import { getDocumentaryBySlug, getRelatedDocumentaries } from "@/lib/documentaries"
// import { VideoPlayer } from "@/components/video-player"
// import { DocumentaryMeta } from "@/components/documentary-meta"
// import { ShareButtons } from "@/components/share-buttons"
// import { RelatedDocumentaries } from "@/components/related-documentaries"
// import { Separator } from "@/components/ui/separator"
// import { formatDate } from "@/lib/utils"

// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const documentary = await getDocumentaryBySlug(params.slug)

//   if (!documentary) {
//     return {}
//   }

//   return {
//     title: documentary.title,
//     description: documentary.description,
//     openGraph: {
//       title: documentary.title,
//       description: documentary.description,
//       type: "video.movie",
//       url: `${process.env.NEXT_PUBLIC_APP_URL || "https://bestdocumentaries.vercel.app"}/documentary/${documentary.slug}`,
//       images: [
//         {
//           url: documentary.thumbnailUrl,
//           width: 1200,
//           height: 630,
//           alt: documentary.title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: documentary.title,
//       description: documentary.description,
//       images: [documentary.thumbnailUrl],
//     },
//   }
// }

// export default async function DocumentaryPage({ params }: { params: { slug: string } }) {
//   const documentary = await getDocumentaryBySlug(params.slug)

//   if (!documentary) {
//     notFound()
//   }

//   const relatedDocumentaries = await getRelatedDocumentaries(documentary.id, documentary.category, 4)

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2">
//           <VideoPlayer
//             videoUrl={documentary.videoUrl}
//             thumbnailUrl={documentary.thumbnailUrl}
//             title={documentary.title}
//           />

//           <div className="mt-6">
//             <h1 className="text-3xl font-bold mb-2">{documentary.title}</h1>
//             <DocumentaryMeta
//               views={documentary.views}
//               duration={documentary.duration}
//               releaseDate={documentary.releaseDate}
//               category={documentary.category}
//             />

//             <div className="flex items-center justify-between mt-4">
//               <div className="flex items-center space-x-4">
//                 <span className="text-sm text-muted-foreground">Released: {formatDate(documentary.releaseDate)}</span>
//                 <span className="text-sm text-muted-foreground">Director: {documentary.director}</span>
//               </div>
//               <ShareButtons
//                 url={`${process.env.NEXT_PUBLIC_APP_URL || "https://bestdocumentaries.vercel.app"}/documentary/${documentary.slug}`}
//                 title={documentary.title}
//                 description={documentary.description}
//               />
//             </div>

//             <Separator className="my-6" />

//             <div className="prose dark:prose-invert max-w-none">
//               <h2 className="text-2xl font-semibold mb-4">About this Documentary</h2>
//               <p className="text-base leading-relaxed">{documentary.description}</p>
//             </div>
//           </div>
//         </div>

//         <div className="lg:col-span-1">
//           <h2 className="text-2xl font-semibold mb-4">Related Documentaries</h2>
//           <RelatedDocumentaries documentaries={relatedDocumentaries} />
//         </div>
//       </div>
//     </div>
//   )
// }



























































































// import { notFound } from "next/navigation"
// import { getDocumentaryBySlug, getRelatedDocumentaries } from "@/lib/documentaries"
// import { VideoPlayer } from "@/components/video-player"
// import { DocumentaryMeta } from "@/components/documentary-meta"
// import { ShareButtons } from "@/components/share-buttons"
// import { RelatedDocumentaries } from "@/components/related-documentaries"
// import { Separator } from "@/components/ui/separator"
// import { formatDate } from "@/lib/utils"
// import type { Metadata } from "next"

// export async function generateMetadata({ 
//   params 
// }: { 
//   params: { slug: string }
// }): Promise<Metadata> {
//   const documentary = await getDocumentaryBySlug(params.slug)

//   if (!documentary) {
//     return {}
//   }

//   return {
//     title: documentary.title,
//     description: documentary.description,
//     openGraph: {
//       title: documentary.title,
//       description: documentary.description,
//       type: "video.movie",
//       url: `${process.env.NEXT_PUBLIC_APP_URL || "https://bestdocumentaries.vercel.app"}/documentary/${documentary.slug}`,
//       images: [{
//         url: documentary.thumbnailUrl,
//         width: 1200,
//         height: 630,
//         alt: documentary.title,
//       }],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: documentary.title,
//       description: documentary.description,
//       images: [documentary.thumbnailUrl],
//     },
//     alternates: {
//       canonical: canonicalUrl,  // ✅ Adds a canonical URL dynamically for each page
//     },

//   }
// }

// export default async function DocumentaryPage({ 
//   params 
// }: { 
//   params: { slug: string }
// }) {
//   const documentary = await getDocumentaryBySlug(params.slug)

//   if (!documentary) {
//     notFound()
//   }

//   const relatedDocumentaries = await getRelatedDocumentaries(
//     documentary.id, 
//     documentary.category, 
//     4
//   )

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2">
//           <VideoPlayer
//             videoUrl={documentary.videoUrl}
//             thumbnailUrl={documentary.thumbnailUrl}
//             title={documentary.title}
//           />

//           <div className="mt-6">
//             <h1 className="text-3xl font-bold mb-2">{documentary.title}</h1>
//             <DocumentaryMeta
//               views={documentary.views}
//               duration={documentary.duration}
//               releaseDate={documentary.releaseDate}
//               category={documentary.category}
//             />

//             <div className="flex items-center justify-between mt-4">
//               <div className="flex items-center space-x-4">
//                 <span className="text-sm text-muted-foreground">Released: {formatDate(documentary.releaseDate)}</span>
//                 <span className="text-sm text-muted-foreground">Director: {documentary.director}</span>
//               </div>
//               <ShareButtons
//                 url={`${process.env.NEXT_PUBLIC_APP_URL || "https://bestdocumentaries.vercel.app"}/documentary/${documentary.slug}`}
//                 title={documentary.title}
//                 description={documentary.description}
//               />
//             </div>

//             <Separator className="my-6" />

//             <div className="prose dark:prose-invert max-w-none">
//               <h2 className="text-2xl font-semibold mb-4">About this Documentary</h2>
//               <p className="text-base leading-relaxed">{documentary.description}</p>
//             </div>
//           </div>
//         </div>

//         <div className="lg:col-span-1">
//           <h2 className="text-2xl font-semibold mb-4">Related Documentaries</h2>
//           <RelatedDocumentaries documentaries={relatedDocumentaries} />
//         </div>
//       </div>
//     </div>
//   )
// }

import { notFound } from "next/navigation";
import { getDocumentaryBySlug, getRelatedDocumentaries } from "@/lib/documentaries";
import { VideoPlayer } from "@/components/video-player";
import { DocumentaryMeta } from "@/components/documentary-meta";
import { ShareButtons } from "@/components/share-buttons";
import { RelatedDocumentaries } from "@/components/related-documentaries";
import { Separator } from "@/components/ui/separator";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const documentary = await getDocumentaryBySlug(params.slug);

  if (!documentary) {
    return {};
  }

  return {
    title: documentary.title,
    description: documentary.description,
    openGraph: {
      title: documentary.title,
      description: documentary.description,
      type: "video.movie",
      url: `${process.env.NEXT_PUBLIC_APP_URL || "https://bestdocumentaries.vercel.app"}/documentary/${documentary.slug}`,
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
    alternates: {
      canonical: `https://documentaries.vercel.app/watch/${params.slug}`, // ✅ Fixed this property
    },
  };
}

export default async function DocumentaryPage({ params }: { params: { slug: string } }) {
  const documentary = await getDocumentaryBySlug(params.slug);

  if (!documentary) {
    notFound();
  }

  const relatedDocumentaries = await getRelatedDocumentaries(
    documentary.id, 
    documentary.category, 
    4
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <VideoPlayer
            videoUrl={documentary.videoUrl}
            thumbnailUrl={documentary.thumbnailUrl}
            title={documentary.title}
          />

          <div className="mt-6">
            <h1 className="text-3xl font-bold mb-2">{documentary.title}</h1>
            <DocumentaryMeta
              views={documentary.views}
              duration={documentary.duration}
              releaseDate={documentary.releaseDate}
              category={documentary.category}
            />

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">Released: {formatDate(documentary.releaseDate)}</span>
                <span className="text-sm text-muted-foreground">Director: {documentary.director}</span>
              </div>
              <ShareButtons
                url={`${process.env.NEXT_PUBLIC_APP_URL || "https://bestdocumentaries.vercel.app"}/documentary/${documentary.slug}`}
                title={documentary.title}
                description={documentary.description}
              />
            </div>

            <Separator className="my-6" />

            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">About this Documentary</h2>
              <p className="text-base leading-relaxed">{documentary.description}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <h2 className="text-2xl font-semibold mb-4">Related Documentaries</h2>
          <RelatedDocumentaries documentaries={relatedDocumentaries} />
        </div>
      </div>
    </div>
  );
}
