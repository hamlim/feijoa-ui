import { CodeBlock, Tabs, TabsContent, TabsList, TabsTrigger } from "feijoa-ui";

export function InstallCLI() {
  return (
    <Tabs defaultValue="bun">
      <TabsList>
        <TabsTrigger value="bun">Bun</TabsTrigger>
        <TabsTrigger value="npm">Npm</TabsTrigger>
        <TabsTrigger value="pnpm">Pnpm</TabsTrigger>
        <TabsTrigger value="yarn">Yarn</TabsTrigger>
      </TabsList>
      <TabsContent value="bun">
        <CodeBlock lang="sh">{`bun install @feijoa-ui/cli`}</CodeBlock>
      </TabsContent>
      <TabsContent value="npm">
        <CodeBlock lang="sh">{`npm install @feijoa-ui/cli`}</CodeBlock>
      </TabsContent>
      <TabsContent value="pnpm">
        <CodeBlock lang="sh">{`pnpm install @feijoa-ui/cli`}</CodeBlock>
      </TabsContent>
      <TabsContent value="yarn">
        <CodeBlock lang="sh">{`yarn add @feijoa-ui/cli`}</CodeBlock>
      </TabsContent>
    </Tabs>
  );
}

export function InstallLib() {
  return (
    <Tabs defaultValue="bun">
      <TabsList>
        <TabsTrigger value="bun">Bun</TabsTrigger>
        <TabsTrigger value="npm">Npm</TabsTrigger>
        <TabsTrigger value="pnpm">Pnpm</TabsTrigger>
        <TabsTrigger value="yarn">Yarn</TabsTrigger>
      </TabsList>
      <TabsContent value="bun">
        <CodeBlock lang="sh">{`bun install feijoa-ui`}</CodeBlock>
      </TabsContent>
      <TabsContent value="npm">
        <CodeBlock lang="sh">{`npm install feijoa-ui`}</CodeBlock>
      </TabsContent>
      <TabsContent value="pnpm">
        <CodeBlock lang="sh">{`pnpm install feijoa-ui`}</CodeBlock>
      </TabsContent>
      <TabsContent value="yarn">
        <CodeBlock lang="sh">{`yarn add feijoa-ui`}</CodeBlock>
      </TabsContent>
    </Tabs>
  );
}
