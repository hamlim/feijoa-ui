import swc, { ImportDeclaration } from "@swc/core";
import { execSync } from "child_process";
import { mkdir, readdir, readFile, writeFile } from "fs/promises";
import path from "path";

async function parseImports(content: string) {
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
    internal: dedupe(
      importDecls.filter(decl => decl.source.value.startsWith("@recipes")).map(decl =>
        decl.source.value.replace("@recipes/", "")
      ),
    ),
    external: dedupe(
      importDecls.filter(decl => !decl.source.value.startsWith("@recipes") && !decl.source.value.startsWith("./")).map(
        decl => {
          let name = justNames(decl);
          if (!name.startsWith("@") && name.includes("/")) {
            return name.split("/")[0];
          } else if (name.startsWith("@") && name.split("/").length > 2) {
            // @foo/bar/baz -> just do @foo/bar
            return name.split("/")[0] + "/" + name.split("/")[0];
          }
          return name;
        },
      ),
    ),
  };
}

let recipesDir = "./packages/feijoa-ui/src/";

let dir = await readdir(recipesDir);

dir = dir.filter((hunk) => !path.extname(hunk));

for (let recipeDirName of dir) {
  console.log(recipeDirName);
  let fullDirPath = path.join(recipesDir, recipeDirName);

  let contents = (await readFile(path.join(fullDirPath, recipeDirName + ".tsx"))).toString();

  await writeFile(
    path.join(fullDirPath, "recipe.json"),
    JSON.stringify({
      name: recipeDirName,
      dependencies: await parseImports(contents),
    }),
  );
}
