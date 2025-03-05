// import { NextResponse } from "next/server";
// import { getDocumentaries, getAllCategories } from "@/app/lib/data";

// export async function GET() {
//   const baseUrl = "https://bestdocumentaries.vercel.app";
//   const documentaries = getDocumentaries();
//   const categories = getAllCategories();

//   // Create URL entries for all documentaries
//   const documentaryUrls = documentaries
//     .map(
//       (doc) => `
//     <url>
//       <loc>${baseUrl}/documentary/${doc.slug}</loc>
//       <lastmod>${new Date().toISOString()}</lastmod>
//       <changefreq>daily</changefreq>
//       <priority>0.8</priority>
//       <image:image>
//         <image:loc>${doc.thumbnailUrl}</image:loc>
//         <image:title>${doc.title}</image:title>
//         <image:caption>${doc.description}</image:caption>
//       </image:image>
//     </url>
//   `
//     )
//     .join("");

//   // Create URL entries for all categories
//   const categoryUrls = categories
//     .map(
//       (category) => `
//     <url>
//       <loc>${baseUrl}/category/${category.toLowerCase()}</loc>
//       <lastmod>${new Date().toISOString()}</lastmod>
//       <changefreq>monthly</changefreq>
//       <priority>0.7</priority>
//     </url>
//   `
//     )
//     .join("");

//   // Create URL entries for main pages
//   const staticUrls = `
//     <url>
//       <loc>${baseUrl}</loc>
//       <lastmod>${new Date().toISOString()}</lastmod>
//       <changefreq>daily</changefreq>
//       <priority>1.0</priority>
//     </url>
//     <url>
//       <loc>${baseUrl}/categories</loc>
//       <lastmod>${new Date().toISOString()}</lastmod>
//       <changefreq>weekly</changefreq>
//       <priority>0.9</priority>
//     </url>
//     <url>
//       <loc>${baseUrl}/about</loc>
//       <lastmod>${new Date().toISOString()}</lastmod>
//       <changefreq>monthly</changefreq>
//       <priority>0.6</priority>
//     </url>
//     <url>
//       <loc>${baseUrl}/contact</loc>
//       <lastmod>${new Date().toISOString()}</lastmod>
//       <changefreq>monthly</changefreq>
//       <priority>0.6</priority>
//     </url>
//     <url>
//       <loc>${baseUrl}/privacy-policy</loc>
//       <lastmod>${new Date().toISOString()}</lastmod>
//       <changefreq>monthly</changefreq>
//       <priority>0.6</priority>
//     </url>
//     <url>
//       <loc>${baseUrl}/terms-of-service</loc>
//       <lastmod>${new Date().toISOString()}</lastmod>
//       <changefreq>monthly</changefreq>
//       <priority>0.6</priority>
//     </url>
//     <url>
//       <loc>${baseUrl}/cookie-policy</loc>
//       <lastmod>${new Date().toISOString()}</lastmod>
//       <changefreq>monthly</changefreq>
//       <priority>0.6</priority>
//     </url>
//     <url>
//       <loc>${baseUrl}/dmca</loc>
//       <lastmod>${new Date().toISOString()}</lastmod>
//       <changefreq>monthly</changefreq>
//       <priority>0.6</priority>
//     </url>
//   `;

//   const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
//   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
//   xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
//   xmlns:xhtml="http://www.w3.org/1999/xhtml"
//   xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
//   xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
//   xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
//     ${staticUrls}
//     ${categoryUrls}
//     ${documentaryUrls}
//   </urlset>`;

//   return new NextResponse(sitemapXml, {
//     headers: {
//       "Content-Type": "application/xml",
//       "Cache-Control": "public, max-age=3600, s-maxage=86400",
//     },
//   });
// }






import { NextResponse } from "next/server";
import { getDocumentaries, getAllCategories } from "@/app/lib/data";

const xmlEntities = new Map([
  ['&', '&amp;'],
  ['<', '&lt;'],
  ['>', '&gt;'],
  ['"', '&quot;'],
  ["'", '&apos;']
]);

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[&<>"']/g, (char) => xmlEntities.get(char) || char);
}

function safeCdata(content: string): string {
  const escaped = content
    .replace(/]]>/g, ']]]]><![CDATA[>')
    .replace(/[^\x09\x0A\x0D\x20-\uD7FF\uE000-\uFFFD]/g, '');
  return `<![CDATA[${escaped}]]>`;
}

export async function GET() {
  const baseUrl = "https://bestdocumentaries.vercel.app";
  const documentaries = getDocumentaries();
  const categories = getAllCategories();

  // Documentary URLs
  const documentaryUrls = documentaries.map((doc) => {
    const clean = {
      slug: encodeURIComponent(doc.slug),
      title: escapeXml(doc.title),
      description: safeCdata(escapeXml(doc.description)),
      thumbnail: escapeXml(doc.thumbnailUrl)
    };

    return `
    <url>
      <loc>${baseUrl}/documentary/${clean.slug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
      <image:image>
        <image:loc>${clean.thumbnail}</image:loc>
        <image:title>${clean.title}</image:title>
        <image:caption>${clean.description}</image:caption>
      </image:image>
    </url>`;
  }).join("\n");

  // Category URLs
  const categoryUrls = categories
    .filter(category => category) // Filter empty categories
    .map((category) => `
    <url>
      <loc>${baseUrl}/category/${encodeURIComponent(category.toLowerCase())}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>`)
    .join("\n");

  // Static URLs
  const staticUrls = `
    <url>
      <loc>${baseUrl}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>${baseUrl}/categories</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>${baseUrl}/about</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>
    <url>
      <loc>${baseUrl}/contact</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>
    <url>
      <loc>${baseUrl}/privacy-policy</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>
    <url>
      <loc>${baseUrl}/terms-of-service</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>
    <url>
      <loc>${baseUrl}/cookie-policy</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>
    <url>
      <loc>${baseUrl}/dmca</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>`;

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    ${staticUrls}
    ${categoryUrls}
    ${documentaryUrls}
  </urlset>`;

  return new NextResponse(sitemapXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}