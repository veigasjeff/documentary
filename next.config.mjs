// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: [
//       'res.cloudinary.com',
//       'i.ytimg.com',
//       'resizing.flixster.com',
//       'whatsondisneyplus.b-cdn.net',
//       'assets.fxnetworks.com',
//       'ichef.bbci.co.uk',
//       'ntvb.tmsimg.com',
//       'm.media-amazon.com',
//       'images.gem.cbc.ca',
//       'akm-img-a-in.tosshub.com',
//       'images.moneycontrol.com',
//       'occ-0-8407-116.1.nflxso.net'
//     ],
//   },
//   webpack: (config) => {
//     // Fixes npm packages that depend on `fs` module
//     config.resolve.fallback = {
//       ...config.resolve.fallback,
//       fs: false,
//       path: false,
//       os: false,
//     };

//     return config;
//   },
// }

// export default nextConfig



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       { protocol: "https", hostname: "res.cloudinary.com" },
//       { protocol: "https", hostname: "i.ytimg.com" },
//       { protocol: "https", hostname: "resizing.flixster.com" },
//       { protocol: "https", hostname: "whatsondisneyplus.b-cdn.net" },
//       { protocol: "https", hostname: "assets.fxnetworks.com" },
//       { protocol: "https", hostname: "ichef.bbci.co.uk" },
//       { protocol: "https", hostname: "ntvb.tmsimg.com" },
//       { protocol: "https", hostname: "m.media-amazon.com" },
//       { protocol: "https", hostname: "images.gem.cbc.ca" },
//       { protocol: "https", hostname: "akm-img-a-in.tosshub.com" },
//       { protocol: "https", hostname: "images.moneycontrol.com" },
//       { protocol: "https", hostname: "occ-0-8407-116.1.nflxso.net" },
//     ],
//   },
//   webpack: (config) => {
//     // Fixes npm packages that depend on `fs` module
//     config.resolve.fallback = {
//       ...config.resolve.fallback,
//       fs: false,
//       path: false,
//       os: false,
//     };

//     return config;
//   },
// };

// export default nextConfig;


// const nextConfig = {
//   images: {
//     remotePatterns: [
//       { protocol: "https", hostname: "**" }, // Simplified pattern
//     ],
//   },
//   experimental: {
//     outputFileTracingRoot: path.join(__dirname, '../../'),
//   },

//   webpack: (config) => {
//     config.resolve.fallback = { 
//       ...config.resolve.fallback,
//       fs: false,
//       path: false,
//       os: false,
//     }
//     return config
//   },
// }

// export default nextConfig


// import { fileURLToPath } from 'url'
// import path from 'path'

// const __dirname = path.dirname(fileURLToPath(import.meta.url))

// const nextConfig = {
//   images: {
//     remotePatterns: [
//       { protocol: "https", hostname: "**" },
//     ],
//   },
//   webpack: (config) => {
//     config.resolve.fallback = { 
//       ...config.resolve.fallback,
//       fs: false,
//       os: false,
//     }
//     return config
//   },
// }

// export default nextConfig









// import { fileURLToPath } from 'url'
// import path from 'path'

// const __dirname = path.dirname(fileURLToPath(import.meta.url))

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       { protocol: "https", hostname: "res.cloudinary.com" },
//       { protocol: "https", hostname: "i.ytimg.com" },
//       { protocol: "https", hostname: "resizing.flixster.com" },
//       { protocol: "https", hostname: "whatsondisneyplus.b-cdn.net" },
//       { protocol: "https", hostname: "assets.fxnetworks.com" },
//       { protocol: "https", hostname: "ichef.bbci.co.uk" },
//       { protocol: "https", hostname: "ntvb.tmsimg.com" },
//       { protocol: "https", hostname: "m.media-amazon.com" },
//       { protocol: "https", hostname: "images.gem.cbc.ca" },
//       { protocol: "https", hostname: "akm-img-a-in.tosshub.com" },
//       { protocol: "https", hostname: "images.moneycontrol.com" },
//       { protocol: "https", hostname: "occ-0-8407-116.1.nflxso.net" },
//     ],
//   },
//   webpack: (config) => {
//     // Fixes npm packages that depend on `fs` module
//     config.resolve.fallback = {
//       ...config.resolve.fallback,
//       fs: false,
//       path: false,
//       os: false,
//     };

//     return config;
//   },
// };
























































// // export default nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       { protocol: "https", hostname: "res.cloudinary.com" },
//       { protocol: "https", hostname: "i.ytimg.com" },
//       { protocol: "https", hostname: "resizing.flixster.com" },
//       { protocol: "https", hostname: "whatsondisneyplus.b-cdn.net" },
//       { protocol: "https", hostname: "assets.fxnetworks.com" },
//       { protocol: "https", hostname: "ichef.bbci.co.uk" },
//       { protocol: "https", hostname: "ntvb.tmsimg.com" },
//       { protocol: "https", hostname: "m.media-amazon.com" },
//       { protocol: "https", hostname: "images.gem.cbc.ca" },
//       { protocol: "https", hostname: "akm-img-a-in.tosshub.com" },
//       { protocol: "https", hostname: "images.moneycontrol.com" },
//       { protocol: "https", hostname: "occ-0-8407-116.1.nflxso.net" },
//     ],
//   },
//   webpack: (config) => {
//     config.resolve.fallback = {
//       ...config.resolve.fallback,
//       fs: false,
//       path: false,
//       os: false
//     }
//     return config
//   },
// }

// module.exports = nextConfig



/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // ✅ Added from original config
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "resizing.flixster.com" },
      { protocol: "https", hostname: "whatsondisneyplus.b-cdn.net" },
      { protocol: "https", hostname: "assets.fxnetworks.com" },
      { protocol: "https", hostname: "ichef.bbci.co.uk" },
      { protocol: "https", hostname: "ntvb.tmsimg.com" },
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "images.gem.cbc.ca" },
      { protocol: "https", hostname: "akm-img-a-in.tosshub.com" },
      { protocol: "https", hostname: "images.moneycontrol.com" },
      { protocol: "https", hostname: "occ-0-8407-116.1.nflxso.net" },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      os: false,
    };
    return config;
  },
};

module.exports = nextConfig;
