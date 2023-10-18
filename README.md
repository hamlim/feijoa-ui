# Feijoa UI

A barebones UI component recipe-kit! Like shadcn/ui++!

## Usage:

The package can be installed both via a recipe-kit like flow using the custom
CLI, or can be managed via your favorite node package manager
(npm/yarn/pnpm/bun).

### CLI:

Using the CLI, you can download the components you want to use, inlining them
directly into your code base allowing you to customize them as you see fit!

First, install the `feijoa-ui` cli:

```sh
# bun:
bun install @feijoa-ui/cli
# pnpm:
pnpm install @feijoa-ui/cli
# yarn:
yarn add @feijoa-ui/cli
# npm
npm install @feijoa-ui/cli
```

This will add the `feijoa-ui` binary, which you can interact with directly:

```sh
# To print help information
feijoa-ui help
```

> TODO - Downloading components...

### Package Manager:

Install the package:

```sh
# bun:
bun install feijoa-ui
# pnpm:
pnpm install feijoa-ui
# yarn:
yarn add feijoa-ui
# npm
npm install feijoa-ui
```

When installing the package like a normal dependency, you'll need to also:

- Install peerDependencies (see
  [package.json#peerDependencies](./packages/feijoa-ui/package.json))
- Configure Next
- Configure Tailwind

#### Configuring Next.js:

You'll want to include the following within your Next.js config:

```js
/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    optimizePackageImports: ["feijoa-ui"],
  },
  transpilePackages: ["feijoa-ui"],
};
```

#### Configuring Tailwind:

To ensure styles work as expected, you'll need to configure tailwind (if you
haven't already, follow the
[tailwind Next.js docs](https://tailwindcss.com/docs/guides/nextjs) to get
started):

```js
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
```

## Local Development:

### Getting Started:

```sh
bun install
```

```sh
bun dev
```

## Inspiration / Dependencies:

This project wouldn't be possible without the following:

- [shadcn/ui](https://ui.shadcn.com/)
  - This project is itself a thin wrapper around shadcn/ui - with a few more
    components added in
  - We'll try to remain as up to date as possible with the work being done
    within shadcn/ui, but if we're missing anything that exists there feel free
    to open an issue or a PR to address!
- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Bright](https://bright.codehike.org/)
