import type { RecipesMetadata } from "../../types";

export function distilDependencies({
  recipes,
  metadataCache,
}: {
  recipes: Array<string>;
  metadataCache: RecipesMetadata;
}) {
  let nodes = metadataCache.recipes.filter(rec => recipes.includes(rec.name));
  let internalDeps = [...recipes];
  let externalDeps: Array<string> = [];
  do {
    if (nodes[0].dependencies.internal.length) {
      internalDeps.push(...nodes[0].dependencies.internal);
      externalDeps.push(...nodes[0].dependencies.external);
      nodes.push(...metadataCache.recipes.filter(rec => nodes[0].dependencies.internal.includes(rec.name)));
    }
    nodes.shift();
  } while (nodes.length);

  return {
    internalDependencies: [...new Set(internalDeps)],
    externalDependencies: [...new Set(externalDeps)],
  };
}
