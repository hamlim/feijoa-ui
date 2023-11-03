import { execSync } from "child_process";
import { readdir, readFile, writeFile } from "fs/promises";
import path from "path";
import type { RecipesMetadata } from "./packages/cli/types";

let recipesDir = "./packages/feijoa-ui/src/";

let dir = await readdir(recipesDir);

dir = dir.filter((hunk) => !path.extname(hunk));

let metadata: RecipesMetadata = {
  version: execSync(`git rev-parse HEAD`).toString().replace("\n", ""),
  recipes: [],
};

for (let recipeFileName of dir) {
  let recipeConfigPath = path.join("./", recipesDir, recipeFileName, "recipe.json");
  let recipeConfig = JSON.parse((await readFile(recipeConfigPath)).toString());

  metadata.recipes.push({
    name: recipeFileName,
    rootPaths: {
      relative: path.join(recipesDir, recipeFileName) + "/",
      absolute: path.join(recipesDir.replace("./", ""), recipeFileName) + "/",
      github: `https://raw.githubusercontent.com/hamlim/feijoa-ui/main/${
        recipesDir.replace(
          "./",
          "",
        )
      }${recipeFileName}/`,
    },
    dependencies: recipeConfig.dependencies,
    files: recipeConfig.files || [`./${recipeFileName}.tsx`],
  });
}

writeFile(`./site/public/metadata.json`, JSON.stringify(metadata, null, 2));
