import swc, { ImportDeclaration } from "@swc/core";
import { execSync } from "child_process";
import { readdir, readFile, writeFile } from "fs/promises";
import path from "path";
import type { RecipesMetadata } from "./packages/cli/types";

async function parseImports(content): Promise<RecipesMetadata["recipes"][number]["dependencies"]> {
  let ast = (await swc.parse(content, {
    syntax: "typescript",
    tsx: true,
    comments: false,
    script: true,
    // Defaults to es3
    target: "es3",
  })).body;

  let importDecls = ast.filter(node => {
    return node.type === "ImportDeclaration";
  }) as Array<ImportDeclaration>;

  function justNames(decl: ImportDeclaration): string {
    return decl.source.value;
  }

  function dedupe(arr: Array<string>): Array<string> {
    return [...new Set(arr)];
  }

  return {
    all: importDecls.map(justNames),
    external: dedupe(
      // Very naive
      // Assumes the `foo/bar` means that the underlying dependency is `foo`
      // but overlooks `@foo/bar/baz`!
      importDecls.filter(decl => !decl.source.value.startsWith("./")).map(decl => {
        let name = justNames(decl);
        if (!name.startsWith("@") && name.includes("/")) {
          return name.split("/")[0];
        }
        return name;
      }),
    ),
    internal: dedupe(importDecls.filter(decl => decl.source.value.startsWith("./")).map(justNames)),
  };
}

let recipesDir = "./packages/feijoa-ui/src/";

let dir = await readdir(recipesDir);

dir = dir.filter((hunk) => !path.extname(hunk));

console.log(dir);

// let metadata: RecipesMetadata = {
//   version: execSync(`git rev-parse HEAD`).toString().replace("\n", ""),
//   recipes: [],
// };

// for (let recipeFileName of dir) {
//   let extension = path.extname(recipeFileName);

//   let content = (
//     await readFile(path.join(recipesDir, recipeFileName))
//   ).toString();

//   let deps = await parseImports(content);

//   metadata.recipes.push({
//     name: recipeFileName.replace(extension, ""),
//     paths: {
//       relative: `${recipesDir}${recipeFileName}`,
//       absolute: `${recipesDir.replace("./", "")}${recipeFileName}`,
//       github: `https://raw.githubusercontent.com/hamlim/feijoa-ui/main/${
//         recipesDir.replace(
//           "./",
//           "",
//         )
//       }${recipeFileName}`,
//     },
//     content,
//     dependencies: deps,
//   });
// }

// writeFile(`./site/public/metadata.json`, JSON.stringify(metadata, null, 2));
