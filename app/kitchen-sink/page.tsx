import { Container } from '@components/ui/container'
import { Heading } from '@components/ui/heading'
import { BaseLink, Link } from '@components/ui/link'
import { Stack } from '@components/ui/stack'
import { Text } from '@components/ui/text'

export default function KitchenSink() {
  return (
    <Stack gap={4}>
      <Container>
        <Text>Container and Text!</Text>
      </Container>
      <Container>
        <Stack gap={4}>
          <Heading is="h1">H1</Heading>
          <Heading is="h2">H2</Heading>
          <Heading is="h3">H3</Heading>
          <Heading is="h4">H4</Heading>
          <Heading is="h5">H5</Heading>
          <Heading is="h6">H6</Heading>
        </Stack>
      </Container>
      <Container>
        <Link href="/">Local Link</Link>
        <br />
        <BaseLink href="https://matthamlin.me" target="_blank">
          External Link!
        </BaseLink>
      </Container>
    </Stack>
  )
}
