import { Box, Container, Link, Text } from "feijoa-ui";

export default function Docs() {
  return (
    <Container>
      <Box className="flex flex-col justify-center py-16">
        <Text className="text-xl text-muted-foreground w-3/4">
          <Box is="strong" className="font-bold">feijoa-ui</Box>{" "}
          is an all-in-one React component recipe-kit. You can use it to build out a simple landing page, a professional
          personal site, and even a fully featured web application!
        </Text>
        <Box className="py-10">
          <Link href="/docs/installation">Installation</Link>
          <br />
          <Link href="/docs/components">See Components</Link>
        </Box>
      </Box>
    </Container>
  );
}
