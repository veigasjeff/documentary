// import { ImageResponse } from "next/og"
// import type { NextRequest } from "next/server"

// export const runtime = "edge"

// export async function GET(req: NextRequest) {
//   try {
//     const { searchParams } = new URL(req.url)

//     // Get title and category from query params
//     const title = searchParams.get("title") || "Best Documentaries"
//     const category = searchParams.get("category") || "Documentary"

//     // Font
//     const interSemiBold = await fetch(new URL("../../../public/fonts/Inter-SemiBold.ttf", import.meta.url)).then(
//       (res) => res.arrayBuffer(),
//     )

//     return new ImageResponse(
//       <div
//         style={{
//           height: "100%",
//           width: "100%",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           backgroundColor: "#030712",
//           backgroundImage:
//             "radial-gradient(circle at 25px 25px, #1e293b 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1e293b 2%, transparent 0%)",
//           backgroundSize: "100px 100px",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             backgroundColor: "rgba(0, 0, 0, 0.4)",
//             borderRadius: "24px",
//             padding: "40px 50px",
//             maxWidth: "80%",
//             border: "1px solid rgba(255, 255, 255, 0.1)",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               fontSize: "30px",
//               color: "white",
//               marginBottom: "10px",
//               backgroundColor: "#3b82f6",
//               padding: "8px 24px",
//               borderRadius: "9999px",
//             }}
//           >
//             {category}
//           </div>
//           <div
//             style={{
//               fontSize: "70px",
//               fontWeight: "bold",
//               color: "white",
//               textAlign: "center",
//               marginTop: "10px",
//               lineHeight: 1.2,
//             }}
//           >
//             {title}
//           </div>
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               marginTop: "30px",
//             }}
//           >
//             <div
//               style={{
//                 fontSize: "30px",
//                 fontWeight: "bold",
//                 color: "white",
//               }}
//             >
//               Best Documentaries
//             </div>
//           </div>
//         </div>
//       </div>,
//       {
//         width: 1200,
//         height: 630,
//         fonts: [
//           {
//             name: "Inter",
//             data: interSemiBold,
//             style: "normal",
//             weight: 600,
//           },
//         ],
//       },
//     )
//   } catch (e) {
//     console.error(e)
//     return new Response("Failed to generate OG image", { status: 500 })
//   }
// }







import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    // Get title and category from query params
    const title = searchParams.get("title") || "Best Documentaries"
    const category = searchParams.get("category") || "Documentary"

    // Font loading approach that works in edge runtime
    const interSemiBold = await fetch(new URL("../../../public/fonts/Inter-SemiBold.ttf", import.meta.url)).then(
      (res) => res.arrayBuffer(),
    )

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#030712",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #1e293b 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1e293b 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            borderRadius: "24px",
            padding: "40px 50px",
            maxWidth: "80%",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "30px",
              color: "white",
              marginBottom: "10px",
              backgroundColor: "#3b82f6",
              padding: "8px 24px",
              borderRadius: "9999px",
            }}
          >
            {category}
          </div>
          <div
            style={{
              fontSize: "70px",
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              marginTop: "10px",
              lineHeight: 1.2,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <div
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Best Documentaries
            </div>
          </div>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: interSemiBold,
            style: "normal",
            weight: 600,
          },
        ],
      },
    )
  } catch (e) {
    console.error(e)
    return new Response("Failed to generate OG image", { status: 500 })
  }
}

