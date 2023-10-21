import { Container, Stack } from "feijoa-ui";
import Installation from "./installation.mdx";

export default async function InstallationPage() {
  return (
    <Container className="max-w-prose">
      <Stack gap={4}>
        <Installation />
      </Stack>
    </Container>
  );
}
