import mdx from "@next/mdx";

export default mdx()(
  /** @type {import('next').NextConfig} */
  {
    experimental: {
      typedRoutes: true,
      optimizePackageImports: ["feijoa-ui"],
      mdxRs: true,
    },
    // modularizeImports: {
    //   "feijoa-ui": {
    //     "transform": "feijoa-ui/dist/{{member}}",
    //   },
    // },
    transpilePackages: ["feijoa-ui"],
    images: {
      // Needed to let random src's work automatically with next/image
      unoptimized: true,
    },
  },
);
