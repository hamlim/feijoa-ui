export type Config = {
  /**
   * The package root path
   *
   * Recipes will be installed under `<rootPath>/feijoa-ui/`
   * Example file tree:
   * ```
   * /<rootPath>/
   *   app/
   *     page.tsx
   *   feijoa-ui/
   *     button.tsx
   *   tsconfig.json
   *   tailwindcss.config.js
   *   next.config.js
   * ```
   */
  rootPath: string;
  /**
   * The preferred package manager for installing 3rd party dependencies
   *
   * This will be executed to install the dependencies
   * needed for specific recipes!
   */
  packageManager: "yarn" | "npm" | "pnpm" | "bun";
};

export type RecipesMetadata = {
  version: string;
  recipes: Array<{
    name: string;
    rootPaths: {
      relative: string;
      absolute: string;
      github: string;
    };
    dependencies: RecipeConfig["dependencies"];
    files: Array<string>;
  }>;
};

export type RecipeConfig = {
  name: string;
  dependencies: {
    internal: Array<string>;
    external: Array<string>;
  };
  files?: Array<string>;
};
