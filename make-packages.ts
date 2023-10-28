import { execSync } from "child_process";
import { mkdir, readdir, writeFile } from "fs/promises";
import path from "path";

let recipesDir = "./packages/feijoa-ui/src/";

let dir = await readdir(recipesDir);

dir = dir.filter((hunk) => path.extname(hunk)).filter(name => ((name !== "index.ts") && (name !== "types.ts")));

for (let recipeFileName of dir) {
  let extension = path.extname(recipeFileName);

  let filePath = path.join(recipesDir, recipeFileName);

  let dirPath = filePath.replace(extension, "");

  await mkdir(dirPath);
  execSync(`mv ${filePath} ${path.join(dirPath, recipeFileName)}`);
  await writeFile(path.join(dirPath, "index.ts"), `export * from './${recipeFileName.replace(extension, "")}';`);
}
