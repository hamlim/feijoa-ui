import { readFile, readdir, writeFile } from 'fs/promises'
import { execSync } from 'child_process'
import path from 'path'

let componentsDir = './components/ui/'

let dir = await readdir(componentsDir)

dir = dir.filter((hunk) => path.extname(hunk))

let metadata = {
  version: execSync(`git rev-parse HEAD`).toString().replace('\\n', ''),
  components: [],
}

for (let componentFileName of dir) {
  let extension = path.extname(componentFileName)

  metadata.components.push({
    name: componentFileName.replace(extension, ''),
    paths: {
      relative: `${componentsDir}${componentFileName}`,
      absolute: `${componentsDir.replace('./', '')}${componentFileName}`,
      github: `https://raw.githubusercontent.com/hamlim/feijoa-ui/main/${componentsDir.replace(
        './',
        '',
      )}${componentFileName}`,
    },
    content: (
      await readFile(path.join(componentsDir, componentFileName))
    ).toString(),
  })
}

writeFile(`./public/metadata.json`, JSON.stringify(metadata, null, 2))
