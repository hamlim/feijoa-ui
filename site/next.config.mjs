/** @type {import('next').NextConfig} */
export default {
  experimental: {
    typedRoutes: true,
    serverActions: true,
    optimizePackageImports: ["feijoa-ui"],
  },
  transpilePackages: ["feijoa-ui"],
  images: {
    // Needed to let random src's work automatically with next/image
    unoptimized: true,
  },
};
