import mdx from "@next/mdx";

export default mdx()(
  /** @type {import('next').NextConfig} */
  {
    experimental: {
      typedRoutes: true,
      mdxRs: true,
      optimizePackageImports: ["feijoa-ui"],
    },
    transpilePackages: ["feijoa-ui"],
    images: {
      // Needed to let random src's work automatically with next/image
      unoptimized: true,
    },
  },
);
