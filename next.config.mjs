/** @type {import('next').NextConfig} */
export default {
  experimental: {
    typedRoutes: true,
    serverActions: true,
  },
  images: {
    // Needed to let random src's work automatically with next/image
    unoptimized: true,
  },
  modularizeImports: {},
}
