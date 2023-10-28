export type Config = {
  /**
   * The package root path
   *
   * Components, utils, etc will be installed under `<rootPath>/feijoa-ui/`
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
