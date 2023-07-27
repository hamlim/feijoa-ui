import { Container } from '@components/ui/container'
import { Heading } from '@components/ui/heading'
import { BaseLink, Link } from '@components/ui/link'

export default function KitchenSink() {
  return (
    <div>
      <Container>Container!</Container>
      <Container>
        <Heading is="h1">H1</Heading>
        <Heading is="h2">H2</Heading>
        <Heading is="h3">H3</Heading>
        <Heading is="h4">H4</Heading>
        <Heading is="h5">H5</Heading>
        <Heading is="h6">H6</Heading>
      </Container>
      <Container>
        <Link href="/">Local Link</Link>
        <br />
        <BaseLink href="https://matthamlin.me" target="_blank">
          External Link!
        </BaseLink>
      </Container>
    </div>
  )
}
