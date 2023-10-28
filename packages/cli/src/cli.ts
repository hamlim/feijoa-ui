import "./utils/console-table-shim";
import { exists, mkdir, readFile, writeFile } from "fs/promises";
import k from "kleur";
import path from "node:path";
import type { Config, RecipesMetadata } from "../types";
import mergeDeep from "./utils/merge-deep";
import stripJsonComments from "./utils/strip-json-comments";

interface Args {
  "--help"?: boolean;
  "--silent"?: boolean;
  "--config-path"?: string;
  "--debug"?: boolean;
}

type Pit = {
  recipes: {
    // mapping of name to version for that component
    [recipeName: string]: string;
  };
};

type Cmd = "help" | "add" | "update" | "diff" | "list" | "init-config" | "setup";

export default async function cli() {
  let argv = process.argv.slice(2);
  let args = argv.reduce((acc, arg) => {
    if (arg.includes("=")) {
      let [key, ...val] = arg.split("=");
      return {
        ...acc,
        [key]: val.join("="),
      };
    }
    return {
      ...acc,
      [arg]: true,
    };
  }, {}) as Args;
  let cmd = argv.find(hunk => !hunk.startsWith("--")) as Cmd;

  if (args["--debug"]) {
    console.log(k.gray("Args: "));
    console.log(k.gray(JSON.stringify(args, null, 2)));
    console.log(k.gray("Cmd: "));
    console.log(k.gray(cmd));
  }

  if (!cmd) {
    console.log(`feijoa-ui called without a valid command, the supported commands are:
- help
- add
- update
- diff
- list
- init-config
- setup

You provided the following arguments: ${argv.join(" ")}`);
    return;
  }

  let optionalArg = ` <component-name> `;

  // === before config loading ===
  switch (cmd) {
    case "help": {
      console.log(`[feijoa-ui] 👋 Welcome to the Feijoa UI CLI \n`);
      console.log(`[feijoa-ui] Usage:\n`);
      console.log(`feijoa-ui ...`);
      console.log(
        ` - ${k.yellow(`list`)}     ${
          Array.from({ length: optionalArg.length }).join(
            " ",
          )
        }List available components`,
      );
      console.log(
        ` - ${k.yellow(`download`)}${optionalArg}Download an optional single component, or download all`,
      );
      console.log(` - ${k.yellow(`update`)}  ${optionalArg}Update a specific component`);
      console.log(
        ` - ${
          k.yellow(`diff`)
        }    ${optionalArg}Generate a diff of the local component to the latest version of the component`,
      );
      console.log(
        ` - ${k.yellow(`help`)}     ${
          Array.from({ length: optionalArg.length }).join(
            " ",
          )
        }Print this dialog!`,
      );
      return;
    }

    case "setup": {
      if (!args["--silent"]) {
        console.log(`Setting up feijoa-ui locally. This command will do the following:

- Create './feijoa-ui.config.ts'
- Create a './feijoa-ui' directory
- Add './feijoa-ui/.pit' to gitignore
- Add import alias to tsconfig.json
- Configure Tailwind`);
      }
      // Create config file
      try {
        await writeFile(
          path.join(process.cwd(), "feijoa-ui.config.ts"),
          `import type { Config } from "@feijoa-ui/cli";

export default {
  rootPath: "./",
} satisfies Config;
`,
        );
      } catch (e) {
        console.log(`Failed to create './feijoa-ui.config.ts' file, see below for the raw error:`);
        console.log(e);
        return;
      }

      // stub new config
      let config: Config = {
        rootPath: process.cwd(),
      };

      // Create directory
      try {
        await mkdir(path.join(config.rootPath, "feijoa-ui"), { recursive: true });
      } catch (e) {
        console.log(`Encountered an error creating the './feijoa-ui/' directory, raw error below:`);
        console.log(e);
        return;
      }

      // Create .pit file
      try {
        await writeFile(path.join(config.rootPath, "feijoa-ui", ".pit"), JSON.stringify({}, null, 2));
      } catch (e) {
        console.log(`Failed to create ./feijoa-ui/.pit file, raw error below:`);
        console.log(e);
      }

      // Add .pit to gitignore
      let gitIgnoreExists = await exists(path.join(config.rootPath, ".gitignore"));
      try {
        if (gitIgnoreExists) {
          let contents = (await readFile(path.join(config.rootPath, ".gitignore"))).toString();
          await writeFile(
            path.join(config.rootPath, ".gitignore"),
            `${contents}\n# Feijoa UI recipe version metadata:\n.pit`,
          );
        } else {
          await writeFile(path.join(config.rootPath, ".gitignore"), `# Feijoa UI recipe version metadata:\n.pit`);
        }
      } catch (e) {
        console.log(`Failed to add .pit pattern to .gitignore, raw error below:`);
        console.log(e);
        return;
      }

      // Update tsconfig with import paths:
      let tsconfigExists = await exists(path.join(config.rootPath, "tsconfig.json"));
      try {
        if (tsconfigExists) {
          let rawTsconfig = (await readFile(path.join(config.rootPath, "tsconfig.json"))).toString();
          let tsconfigStr = stripJsonComments(rawTsconfig);
          let tsconfig = JSON.parse(tsconfigStr);
          tsconfig = {
            ...tsconfig,
            compilerOptions: {
              ...tsconfig.compilerOptions,
              paths: {
                ...tsconfig.compilerOptions?.paths,
                "@recipes/*": ["./feijoa-ui/*"],
              },
            },
          };
          await writeFile(
            path.join(config.rootPath, "tsconfig.json"),
            JSON.stringify(tsconfig, null, 2),
          );
        } else {
          await writeFile(
            path.join(config.rootPath, "tsconfig.json"),
            JSON.stringify(
              {
                compilerOptions: {
                  paths: {
                    "@recipes/*": ["./feijoa-ui/*"],
                  },
                },
              },
              null,
              2,
            ),
          );
        }
      } catch (e) {
        console.log(`Failed to update tsconfig.json, raw error below:`);
        console.log(e);
        return;
      }

      // Update tailwind config
      let tailwindConfigExists = await exists(path.join(config.rootPath, "tailwind.config.js"));
      try {
        if (tailwindConfigExists) {
          let tailwindConfig = await import(path.join(config.rootPath, "tailwind.config.js"));
          let newConfig = mergeDeep(tailwindConfig, {
            content: ["./feijoa-ui/**/*.{ts,tsx}"],
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
          });
          await writeFile(
            path.join(config.rootPath, "tailwind.config.js"),
            `/** @type {import('tailwindcss').Config} */
module.exports = {
  ${Object.entries(newConfig).map(([key, val]) => `"${key}": ${JSON.stringify(val, null, 2)},`)}
  plugins: [require("tailwindcss-animate")],
};
`,
          );
        } else {
          await writeFile(
            path.join(config.rootPath, "tailwind.config.js"),
            `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './feijoa-ui/**/*.{ts,tsx}',
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
}
`,
          );
        }
      } catch (e) {
        console.log(`Failed to update tailwind.config.js, raw error below:`);
        console.log(e);
        return;
      }

      if (!args["--silent"]) {
        console.log(`🎉 Successfully setup local project for Feijoa UI!`);
      }
    }
  }
  // --- before config loading ---

  // === Config ===
  let configPath = args["--config-path"] ?? `${process.cwd()}/feijoa-ui.config.ts`;
  let config: Config;
  try {
    config = await loadConfig({ configPath, debug: args["--debug"] });
  } catch (e) {
    console.log(`Failed to load config from following path: ${configPath}. Raw error:`);
    console.log(e);
    return;
  }
  // --- config ---

  // === Pit ===
  let pitfile = path.join(config.rootPath, "feijoa-ui", ".pit");
  let pit: Pit;
  try {
    if (args["--debug"]) {
      console.log(k.gray(`Pit path: ${pitfile}`));
    }
    let pitStr = (await readFile(pitfile)).toString();
    if (args["--debug"]) {
      console.log(k.gray(`Pit contents: `));
      console.log(k.gray(pitStr));
    }
    pit = JSON.parse(pitStr);
  } catch (e) {
    console.log(`Failed to load feijoa-ui/.pit file!

This file shouldn't be deleted, assuming no known recipes are installed!`);
    pit = {
      recipes: {},
    };
  }
  // --- Pit ---

  let metadataCache = await (await fetch("https://feijoa-ui.vercel.app/api/recipes")).json() as RecipesMetadata;
  let latestRecipeVersion = metadataCache.version;
  let availableRecipes = metadataCache.recipes.map(recipe => recipe.name);
  let installedRecipes = pit.recipes || {};

  switch (cmd) {
    case "list": {
      let table = [...availableRecipes, ...Object.keys(installedRecipes)].reduce((acc, recipeName) => ({
        ...acc,
        [recipeName]: {
          installed: !!installedRecipes[recipeName],
        },
      }), {});

      if (!args["--silent"]) {
        console.log(`[feijoa-ui] Available recipes: \n`);
        console.table(table);
      } else {
        console.log(JSON.stringify(availableRecipes, null, 2));
      }
      return;
    }
    case "add": {
      let recipesRequested = Object.keys(args).filter(arg => !arg.startsWith("--"));
      let unknownRecipes = recipesRequested.filter(recipe => !availableRecipes.includes(recipe));
      let knownRecipes = recipesRequested.filter(recipe => availableRecipes.includes(recipe));
      if (!args["--silent"] && unknownRecipes.length) {
        console.log(
          `Attmpted to add the following recipes that aren't supported, check for typos and make sure the recipe exists by running \`feijoa-ui list\`!`,
        );
        unknownRecipes.forEach(recipe => console.log(`- ${recipe}`));
        if (!knownRecipes.length) {
          return;
        } else {
          console.log(`Adding recipes...`);
        }
      }
    }
  }
}

async function loadConfig({ configPath, debug }: { configPath: string; debug?: boolean }): Promise<Config> {
  let configExists = await exists(configPath);
  if (debug) {
    console.log(k.gray(`Config exists? ${configExists ? "yep" : "no"}`));
  }
  if (!configExists) {
    console.log(`Couldn't find config from current working directory,
  
Looked in: ${path.dirname(configPath)} for 'feijoa-ui.config.ts' file but found none.

Add a config file (via 'feijoa-ui setup') or pass in a --config-path to the cli!`);
    return;
  }
  return (await import(configPath)).default;
}
