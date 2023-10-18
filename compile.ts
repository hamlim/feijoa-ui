import { execSync } from "child_process";
import { readdir, readFile, writeFile } from "fs/promises";
import path from "path";

let componentsDir = "./packages/feijoa-ui/src/";

let dir = await readdir(componentsDir);

dir = dir.filter((hunk) => path.extname(hunk));

type Metadata = {
  version: string;
  components: Array<{
    name: string;
    paths: {
      relative: string;
      absolute: string;
      github: string;
    };
    content: string;
  }>;
};

let metadata: Metadata = {
  version: execSync(`git rev-parse HEAD`).toString().replace("\n", ""),
  components: [],
};

for (let componentFileName of dir) {
  let extension = path.extname(componentFileName);

  metadata.components.push({
    name: componentFileName.replace(extension, ""),
    paths: {
      relative: `${componentsDir}${componentFileName}`,
      absolute: `${componentsDir.replace("./", "")}${componentFileName}`,
      github: `https://raw.githubusercontent.com/hamlim/feijoa-ui/main/${
        componentsDir.replace(
          "./",
          "",
        )
      }${componentFileName}`,
    },
    content: (
      await readFile(path.join(componentsDir, componentFileName))
    ).toString(),
  });
}

writeFile(`./site/public/metadata.json`, JSON.stringify(metadata, null, 2));
