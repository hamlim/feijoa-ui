import { evaluate } from "@mdx-js/mdx";
import { Container, mdxComponents, Stack } from "feijoa-ui";
import * as runtime from "react/jsx-runtime";
import { InstallCLI, InstallLib } from "./install-snippets";

let jsxRuntime = runtime as {
  Fragment: any;
  jsx: any;
  jsxs: any;
};

let extendedRuntime = {
  ...jsxRuntime,
  jsxDEV: jsxRuntime.jsx,
} as {
  Fragment: any;
  jsx: any;
  jsxs: any;
  jsxDEV: any;
};

let md = `The package can be installed both via a recipe-kit like flow using the custom
CLI, or can be managed via your favorite node package manager
(npm/yarn/pnpm/bun).

### CLI:

Using the CLI, you can download the components you want to use, inlining them
directly into your code base allowing you to customize them as you see fit!

First, install the \`feijoa-ui\` cli:

<InstallCLI />

This will add the \`feijoa-ui\` binary, which you can interact with directly:

\`\`\`sh
# To print help information
feijoa-ui help
\`\`\`

> TODO - Downloading components...

### Package Manager:

Install the package:

<InstallLib />

When installing the package like a normal dependency, you'll need to also:

- Install peerDependencies (see [package.json#peerDependencies](https://github.com/hamlim/feijoa-ui/blob/main/packages/feijoa-ui/package.json))
- Configure Next
- Configure Tailwind

#### Configuring Next.js:

You'll want to include the following within your Next.js config:

\`\`\`js
/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    optimizePackageImports: ["feijoa-ui"],
  },
  transpilePackages: ["feijoa-ui"],
};
\`\`\`

#### Configuring Tailwind:

To ensure styles work as expected, you'll need to configure tailwind (if you
haven't already, follow the
[tailwind Next.js docs](https://tailwindcss.com/docs/guides/nextjs) to get
started):

\`\`\`ts
let path = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    // IMPORTANT! This is needed to ensure the styles are resolved correctly
    path.join(path.dirname(require.resolve("feijoa-ui")), "**/*.js"),
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
\`\`\`
`;

export default async function Installation() {
  let { default: Content } = await evaluate(md, extendedRuntime);
  return (
    <Container>
      <Stack gap={4}>
        {Content({
          // @ts-expect-error - img types don't line up, but that's fine
          components: { ...mdxComponents, InstallLib, InstallCLI },
        })}
      </Stack>
    </Container>
  );
}
