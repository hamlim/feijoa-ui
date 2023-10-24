import { Box, Container, Link, Text } from "feijoa-ui";

export const dynamic = "force-dynamic";

export default function Docs() {
  return (
    <Container className="max-w-prose">
      <Box className="py-16">
        <Text className="text-xl text-muted-foreground">
          <Box is="strong" className="font-bold">feijoa-ui</Box>{" "}
          is an all-in-one React component recipe-kit. You can use it to build out a simple landing page, a professional
          personal site, and even a fully featured web application!
        </Text>
        <Text className="py-10">
          Check the <Link href="/docs/installation">Installation docs</Link> or{" "}
          <Link href="/docs/components">See Components</Link>.
        </Text>
      </Box>
    </Container>
  );
}
