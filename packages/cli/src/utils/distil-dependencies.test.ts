import { expect, test } from "bun:test";
import { distilDependencies } from "./distil-dependencies";

test("it correctly resolves the expected internal and external deps", () => {
  expect(distilDependencies({
    recipes: ["form", "dropdown-menu", "calendar"],
    metadataCache,
  })).toMatchObject({
    internalDependencies: ["form", "dropdown-menu", "calendar", "cn", "label", "button"],
    externalDependencies: [
      "@radix-ui/react-label",
      "@radix-ui/react-slot",
      "react",
      "react-hook-form",
      "lucide-react",
      "react-day-picker",
      "@radix-ui/react-dropdown-menu",
      "class-variance-authority",
    ],
  });
});

let metadataCache = {
  "version": "4d5a63d9e555377fb584ee6da499e619f5e5dc04",
  "recipes": [
    {
      "name": "tapable",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/tapable",
        "absolute": "packages/feijoa-ui/src/tapable",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/tapable",
      },
      "dependencies": {
        "internal": [
          "box",
        ],
        "external": [
          "react",
          "@ds-pack/use-refs",
        ],
      },
      "files": [
        "./tapable.tsx",
      ],
    },
    {
      "name": "tabs",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/tabs",
        "absolute": "packages/feijoa-ui/src/tabs",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/tabs",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "@radix-ui/react-tabs",
          "react",
        ],
      },
      "files": [
        "./tabs.tsx",
      ],
    },
    {
      "name": "tweet",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/tweet",
        "absolute": "packages/feijoa-ui/src/tweet",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/tweet",
      },
      "dependencies": {
        "internal": [
          "box",
        ],
        "external": [
          "react",
          "react-tweet",
        ],
      },
      "files": [
        "./tweet.tsx",
      ],
    },
    {
      "name": "toaster",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/toaster",
        "absolute": "packages/feijoa-ui/src/toaster",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/toaster",
      },
      "dependencies": {
        "internal": [
          "toast",
          "use-toast",
        ],
        "external": [],
      },
      "files": [
        "./toaster.tsx",
      ],
    },
    {
      "name": "form",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/form",
        "absolute": "packages/feijoa-ui/src/form",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/form",
      },
      "dependencies": {
        "internal": [
          "cn",
          "label",
        ],
        "external": [
          "@radix-ui/react-label",
          "@radix-ui/react-slot",
          "react",
          "react-hook-form",
        ],
      },
      "files": [
        "./form.tsx",
      ],
    },
    {
      "name": "tooltip",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/tooltip",
        "absolute": "packages/feijoa-ui/src/tooltip",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/tooltip",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "@radix-ui/react-tooltip",
          "react",
        ],
      },
      "files": [
        "./tooltip.tsx",
      ],
    },
    {
      "name": "portal",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/portal",
        "absolute": "packages/feijoa-ui/src/portal",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/portal",
      },
      "dependencies": {
        "internal": [],
        "external": [
          "react",
          "react-dom",
        ],
      },
      "files": [
        "./portal.tsx",
      ],
    },
    {
      "name": "box",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/box",
        "absolute": "packages/feijoa-ui/src/box",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/box",
      },
      "dependencies": {
        "internal": [],
        "external": [
          "react",
        ],
      },
      "files": [
        "./box.tsx",
      ],
    },
    {
      "name": "calendar",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/calendar",
        "absolute": "packages/feijoa-ui/src/calendar",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/calendar",
      },
      "dependencies": {
        "internal": [
          "button",
          "cn",
        ],
        "external": [
          "lucide-react",
          "react",
          "react-day-picker",
        ],
      },
      "files": [
        "./calendar.tsx",
      ],
    },
    {
      "name": "card",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/card",
        "absolute": "packages/feijoa-ui/src/card",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/card",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "react",
        ],
      },
      "files": [
        "./card.tsx",
      ],
    },
    {
      "name": "navigation-menu",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/navigation-menu",
        "absolute": "packages/feijoa-ui/src/navigation-menu",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/navigation-menu",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "@radix-ui/react-navigation-menu",
          "class-variance-authority",
          "lucide-react",
          "react",
        ],
      },
      "files": [
        "./navigation-menu.tsx",
      ],
    },
    {
      "name": "code-block",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/code-block",
        "absolute": "packages/feijoa-ui/src/code-block",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/code-block",
      },
      "dependencies": {
        "internal": [
          "button",
          "use-toast",
        ],
        "external": [
          "bright",
          "lucide-react",
          "react",
        ],
      },
      "files": [
        "./code-block.tsx",
        "./extensions/collapse-extension.tsx",
        "./extensions/collapse.tsx",
        "./extensions/copy-code.tsx",
      ],
    },
    {
      "name": "menubar",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/menubar",
        "absolute": "packages/feijoa-ui/src/menubar",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/menubar",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "@radix-ui/react-menubar",
          "lucide-react",
          "react",
        ],
      },
      "files": [
        "./menubar.tsx",
      ],
    },
    {
      "name": "progress",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/progress",
        "absolute": "packages/feijoa-ui/src/progress",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/progress",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "@radix-ui/react-progress",
          "react",
        ],
      },
      "files": [
        "./progress.tsx",
      ],
    },
    {
      "name": "alert-dialog",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/alert-dialog",
        "absolute": "packages/feijoa-ui/src/alert-dialog",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/alert-dialog",
      },
      "dependencies": {
        "internal": [
          "button",
          "cn",
        ],
        "external": [
          "@radix-ui/react-alert-dialog",
          "react",
        ],
      },
      "files": [
        "./alert-dialog.tsx",
      ],
    },
    {
      "name": "input",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/input",
        "absolute": "packages/feijoa-ui/src/input",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/input",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "react",
        ],
      },
      "files": [
        "./input.tsx",
      ],
    },
    {
      "name": "cn",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/cn",
        "absolute": "packages/feijoa-ui/src/cn",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/cn",
      },
      "dependencies": {
        "internal": [],
        "external": [
          "clsx",
          "tailwind-merge",
        ],
      },
      "files": [
        "./cn.tsx",
      ],
    },
    {
      "name": "alert",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/alert",
        "absolute": "packages/feijoa-ui/src/alert",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/alert",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "class-variance-authority",
          "react",
        ],
      },
      "files": [
        "./alert.tsx",
      ],
    },
    {
      "name": "accordion",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/accordion",
        "absolute": "packages/feijoa-ui/src/accordion",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/accordion",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "@radix-ui/react-accordion",
          "lucide-react",
          "react",
        ],
      },
      "files": [
        "./accordion.tsx",
      ],
    },
    {
      "name": "skeleton",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/skeleton",
        "absolute": "packages/feijoa-ui/src/skeleton",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/skeleton",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [],
      },
      "files": [
        "./skeleton.tsx",
      ],
    },
    {
      "name": "figure",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/figure",
        "absolute": "packages/feijoa-ui/src/figure",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/figure",
      },
      "dependencies": {
        "internal": [
          "aspect-ratio",
          "cn",
          "text",
        ],
        "external": [
          "next",
          "react",
        ],
      },
      "files": [
        "./figure.tsx",
      ],
    },
    {
      "name": "separator",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/separator",
        "absolute": "packages/feijoa-ui/src/separator",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/separator",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "@radix-ui/react-separator",
          "react",
        ],
      },
      "files": [
        "./separator.tsx",
      ],
    },
    {
      "name": "theme-provider",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/theme-provider",
        "absolute": "packages/feijoa-ui/src/theme-provider",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/theme-provider",
      },
      "dependencies": {
        "internal": [],
        "external": [
          "next-themes",
        ],
      },
      "files": [
        "./theme-provider.tsx",
      ],
    },
    {
      "name": "heading",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/heading",
        "absolute": "packages/feijoa-ui/src/heading",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/heading",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [],
      },
      "files": [
        "./heading.tsx",
      ],
    },
    {
      "name": "mdx-components",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/mdx-components",
        "absolute": "packages/feijoa-ui/src/mdx-components",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/mdx-components",
      },
      "dependencies": {
        "internal": [
          "blockquote",
          "box",
          "code",
          "code-block",
          "heading",
          "image",
          "link",
          "list",
          "text",
        ],
        "external": [],
      },
      "files": [
        "./mdx-components.tsx",
      ],
    },
    {
      "name": "toast",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/toast",
        "absolute": "packages/feijoa-ui/src/toast",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/toast",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "@radix-ui/react-toast",
          "class-variance-authority",
          "lucide-react",
          "react",
        ],
      },
      "files": [
        "./toast.tsx",
      ],
    },
    {
      "name": "hover-card",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/hover-card",
        "absolute": "packages/feijoa-ui/src/hover-card",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/hover-card",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "@radix-ui/react-hover-card",
          "react",
        ],
      },
      "files": [
        "./hover-card.tsx",
      ],
    },
    {
      "name": "checkbox",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/checkbox",
        "absolute": "packages/feijoa-ui/src/checkbox",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/checkbox",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "@radix-ui/react-checkbox",
          "lucide-react",
          "react",
        ],
      },
      "files": [
        "./checkbox.tsx",
      ],
    },
    {
      "name": "code",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/code",
        "absolute": "packages/feijoa-ui/src/code",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/code",
      },
      "dependencies": {
        "internal": [
          "box",
          "cn",
        ],
        "external": [],
      },
      "files": [
        "./code.tsx",
      ],
    },
    {
      "name": "label",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/label",
        "absolute": "packages/feijoa-ui/src/label",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/label",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "@radix-ui/react-label",
          "class-variance-authority",
          "react",
        ],
      },
      "files": [
        "./label.tsx",
      ],
    },
    {
      "name": "dropdown-menu",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/dropdown-menu",
        "absolute": "packages/feijoa-ui/src/dropdown-menu",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/dropdown-menu",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "@radix-ui/react-dropdown-menu",
          "lucide-react",
          "react",
        ],
      },
      "files": [
        "./dropdown-menu.tsx",
      ],
    },
    {
      "name": "slider",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/slider",
        "absolute": "packages/feijoa-ui/src/slider",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/slider",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "@radix-ui/react-slider",
          "react",
        ],
      },
      "files": [
        "./slider.tsx",
      ],
    },
    {
      "name": "image",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/image",
        "absolute": "packages/feijoa-ui/src/image",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/image",
      },
      "dependencies": {
        "internal": [
          "aspect-ratio",
          "cn",
        ],
        "external": [
          "next",
        ],
      },
      "files": [
        "./image.tsx",
      ],
    },
    {
      "name": "context-menu",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/context-menu",
        "absolute": "packages/feijoa-ui/src/context-menu",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/context-menu",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "@radix-ui/react-context-menu",
          "lucide-react",
          "react",
        ],
      },
      "files": [
        "./context-menu.tsx",
      ],
    },
    {
      "name": "toggle",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/toggle",
        "absolute": "packages/feijoa-ui/src/toggle",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/toggle",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "@radix-ui/react-toggle",
          "class-variance-authority",
          "react",
        ],
      },
      "files": [
        "./toggle.tsx",
      ],
    },
    {
      "name": "dialog",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/dialog",
        "absolute": "packages/feijoa-ui/src/dialog",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/dialog",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "@radix-ui/react-dialog",
          "lucide-react",
          "react",
        ],
      },
      "files": [
        "./dialog.tsx",
      ],
    },
    {
      "name": "popover",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/popover",
        "absolute": "packages/feijoa-ui/src/popover",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/popover",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "@radix-ui/react-popover",
          "react",
        ],
      },
      "files": [
        "./popover.tsx",
      ],
    },
    {
      "name": "container",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/container",
        "absolute": "packages/feijoa-ui/src/container",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/container",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [],
      },
      "files": [
        "./container.tsx",
      ],
    },
    {
      "name": "textarea",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/textarea",
        "absolute": "packages/feijoa-ui/src/textarea",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/textarea",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "react",
        ],
      },
      "files": [
        "./textarea.tsx",
      ],
    },
    {
      "name": "button",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/button",
        "absolute": "packages/feijoa-ui/src/button",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/button",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "@radix-ui/react-slot",
          "class-variance-authority",
          "react",
        ],
      },
      "files": [
        "./button.tsx",
      ],
    },
    {
      "name": "link",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/link",
        "absolute": "packages/feijoa-ui/src/link",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/link",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "next",
        ],
      },
      "files": [
        "./link.tsx",
      ],
    },
    {
      "name": "scroll-area",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/scroll-area",
        "absolute": "packages/feijoa-ui/src/scroll-area",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/scroll-area",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "@radix-ui/react-scroll-area",
          "react",
        ],
      },
      "files": [
        "./scroll-area.tsx",
      ],
    },
    {
      "name": "table",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/table",
        "absolute": "packages/feijoa-ui/src/table",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/table",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "react",
        ],
      },
      "files": [
        "./table.tsx",
      ],
    },
    {
      "name": "use-toast",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/use-toast",
        "absolute": "packages/feijoa-ui/src/use-toast",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/use-toast",
      },
      "dependencies": {
        "internal": [
          "toast",
        ],
        "external": [
          "react",
        ],
      },
      "files": [
        "./use-toast.tsx",
      ],
    },
    {
      "name": "blockquote",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/blockquote",
        "absolute": "packages/feijoa-ui/src/blockquote",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/blockquote",
      },
      "dependencies": {
        "internal": [
          "box",
          "cn",
        ],
        "external": [],
      },
      "files": [
        "./blockquote.tsx",
      ],
    },
    {
      "name": "collapsible",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/collapsible",
        "absolute": "packages/feijoa-ui/src/collapsible",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/collapsible",
      },
      "dependencies": {
        "internal": [],
        "external": [
          "@radix-ui/react-collapsible",
        ],
      },
      "files": [
        "./collapsible.tsx",
      ],
    },
    {
      "name": "list",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/list",
        "absolute": "packages/feijoa-ui/src/list",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/list",
      },
      "dependencies": {
        "internal": [
          "box",
          "cn",
        ],
        "external": [],
      },
      "files": [
        "./list.tsx",
      ],
    },
    {
      "name": "avatar",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/avatar",
        "absolute": "packages/feijoa-ui/src/avatar",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/avatar",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "@radix-ui/react-avatar",
          "react",
        ],
      },
      "files": [
        "./avatar.tsx",
      ],
    },
    {
      "name": "twitter-mention",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/twitter-mention",
        "absolute": "packages/feijoa-ui/src/twitter-mention",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/twitter-mention",
      },
      "dependencies": {
        "internal": [
          "link",
        ],
        "external": [],
      },
      "files": [
        "./twitter-mention.tsx",
      ],
    },
    {
      "name": "aspect-ratio",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/aspect-ratio",
        "absolute": "packages/feijoa-ui/src/aspect-ratio",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/aspect-ratio",
      },
      "dependencies": {
        "internal": [],
        "external": [
          "@radix-ui/react-aspect-ratio",
        ],
      },
      "files": [
        "./aspect-ratio.tsx",
      ],
    },
    {
      "name": "switch",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/switch",
        "absolute": "packages/feijoa-ui/src/switch",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/switch",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "@radix-ui/react-switch",
          "react",
        ],
      },
      "files": [
        "./switch.tsx",
      ],
    },
    {
      "name": "command",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/command",
        "absolute": "packages/feijoa-ui/src/command",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/command",
      },
      "dependencies": {
        "internal": [
          "cn",
          "dialog",
        ],
        "external": [
          "@radix-ui/react-dialog",
          "cmdk",
          "lucide-react",
          "react",
        ],
      },
      "files": [
        "./command.tsx",
      ],
    },
    {
      "name": "radio-group",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/radio-group",
        "absolute": "packages/feijoa-ui/src/radio-group",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/radio-group",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "@radix-ui/react-radio-group",
          "lucide-react",
          "react",
        ],
      },
      "files": [
        "./radio-group.tsx",
      ],
    },
    {
      "name": "text",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/text",
        "absolute": "packages/feijoa-ui/src/text",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/text",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [],
      },
      "files": [
        "./text.tsx",
      ],
    },
    {
      "name": "select",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/select",
        "absolute": "packages/feijoa-ui/src/select",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/select",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "@radix-ui/react-select",
          "lucide-react",
          "react",
        ],
      },
      "files": [
        "./select.tsx",
      ],
    },
    {
      "name": "stack",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/stack",
        "absolute": "packages/feijoa-ui/src/stack",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/stack",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [],
      },
      "files": [
        "./stack.tsx",
      ],
    },
    {
      "name": "tldr",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/tldr",
        "absolute": "packages/feijoa-ui/src/tldr",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/tldr",
      },
      "dependencies": {
        "internal": [
          "box",
        ],
        "external": [],
      },
      "files": [
        "./tldr.tsx",
      ],
    },
    {
      "name": "sheet",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/sheet",
        "absolute": "packages/feijoa-ui/src/sheet",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/sheet",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "@radix-ui/react-dialog",
          "class-variance-authority",
          "lucide-react",
          "react",
        ],
      },
      "files": [
        "./sheet.tsx",
      ],
    },
    {
      "name": "theme-toggle",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/theme-toggle",
        "absolute": "packages/feijoa-ui/src/theme-toggle",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/theme-toggle",
      },
      "dependencies": {
        "internal": [
          "button",
          "dropdown-menu",
        ],
        "external": [
          "lucide-react",
          "next-themes",
        ],
      },
      "files": [
        "./theme-toggle.tsx",
      ],
    },
    {
      "name": "footnote",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/footnote",
        "absolute": "packages/feijoa-ui/src/footnote",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/footnote",
      },
      "dependencies": {
        "internal": [
          "box",
          "link",
        ],
        "external": [
          "react",
        ],
      },
      "files": [
        "./footnote.tsx",
      ],
    },
    {
      "name": "github-mention",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/github-mention",
        "absolute": "packages/feijoa-ui/src/github-mention",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/github-mention",
      },
      "dependencies": {
        "internal": [
          "link",
        ],
        "external": [],
      },
      "files": [
        "./github-mention.tsx",
      ],
    },
    {
      "name": "badge",
      "rootPaths": {
        "relative": "packages/feijoa-ui/src/badge",
        "absolute": "packages/feijoa-ui/src/badge",
        "github": "https://raw.githubusercontent.com/hamlim/feijoa-ui/main/packages/feijoa-ui/src/badge",
      },
      "dependencies": {
        "internal": [
          "cn",
        ],
        "external": [
          "class-variance-authority",
          "react",
        ],
      },
      "files": [
        "./badge.tsx",
      ],
    },
  ],
};
