import { Blockquote } from 'feijoa-ui/blockquote'
import { Box } from 'feijoa-ui/box'
import { Code } from 'feijoa-ui/code'
import { CodeBlock } from 'feijoa-ui/code-block'
import { Container } from 'feijoa-ui/container'
import { Footnote, FootnoteRef } from 'feijoa-ui/footnote'
import { Heading } from 'feijoa-ui/heading'
import { BaseLink, Link } from 'feijoa-ui/link'
import { List, ListItem } from 'feijoa-ui/list'
import { Separator } from 'feijoa-ui/separator'
import { Stack } from 'feijoa-ui/stack'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'feijoa-ui/table'
import { Text } from 'feijoa-ui/text'
import { Image } from 'feijoa-ui/image'
import { Figure } from 'feijoa-ui/figure'

function Example({ title, children }) {
  return (
    <Container>
      <Heading is="h3">{title}:</Heading>
      <Separator />
      {children}
    </Container>
  )
}

export default function KitchenSink() {
  return (
    <Stack gap={4}>
      <Example title="Text">
        <Text>Container and Text!</Text>
      </Example>
      <Example title="Headings">
        <Stack gap={4}>
          <Heading is="h1">H1</Heading>
          <Heading is="h2">H2</Heading>
          <Heading is="h3">H3</Heading>
          <Heading is="h4">H4</Heading>
          <Heading is="h5">H5</Heading>
          <Heading is="h6">H6</Heading>
        </Stack>
      </Example>
      <Example title="Links">
        <Link href="/">Local Link</Link>
        <br />
        <BaseLink href="https://matthamlin.me" target="_blank">
          External Link!
        </BaseLink>
      </Example>
      <Example title="Box">
        <Box is="marquee">Box (as marquee)</Box>
        <Box is={Text}>Box as Text!</Box>
      </Example>
      <Example title="Code Blocks">
        <Box>
          <Heading is="h3">Dark Theme:</Heading>
          <CodeBlock lang="tsx">{`import {CodeBlock} from '@components/ui/code-block'

// collapse(1:6)
export default function Page() {
  return (
    <main data-theme="light">
      <CodeBlock lang="tsx">{\`<div>foo</div>\`}</CodeBlock>
    </main>
  )
}`}</CodeBlock>
        </Box>
        <Box data-theme="light">
          <Heading is="h3">Light Theme:</Heading>
          <CodeBlock lang="tsx">{`import {CodeBlock} from '@components/ui/code-block'

export default function Page() {
  return (
    <main data-theme="light">
      <CodeBlock lang="tsx">{\`<div>foo</div>\`}</CodeBlock>
    </main>
  )
}`}</CodeBlock>
        </Box>
      </Example>
      <Example title="Inline Code">
        <Code>feijoa-ui</Code>
      </Example>
      <Example title="Blockquote">
        <Blockquote>
          Some important quote here!
          <br />- Some Person
        </Blockquote>
      </Example>
      <Example title="Lists">
        <List>
          <ListItem>Lists</ListItem>
          <ListItem>Are</ListItem>
          <ListItem>Fun</ListItem>
        </List>
        <List is="ol">
          <ListItem>Lists</ListItem>
          <ListItem>Are</ListItem>
          <ListItem>Fun</ListItem>
        </List>
      </Example>
      <Example title="Table">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>First column</TableHead>
              <TableHead>Second column</TableHead>
              <TableHead>Third column</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>first row</TableCell>
              <TableCell>first row</TableCell>
              <TableCell>first row</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>first row</TableCell>
              <TableCell>first row</TableCell>
              <TableCell>first row</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>first row</TableCell>
              <TableCell>first row</TableCell>
              <TableCell>first row</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Example>
      <Example title="Footnotes">
        <Text>
          Some text here with an <FootnoteRef id="1" /> inline footnote!
        </Text>
        <div className="mb-10" />
        <Footnote id="1">Some content within the footnote!</Footnote>
      </Example>
      <Example title="Image">
        <Text>Here is an image with built-in aspect ratio too!</Text>
        <Image
          src="https://images.unsplash.com/photo-1693856757413-637345a5e2ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3610&q=80"
          objectFit="cover"
          fill
          alt="a snowy rooftop"
        />
      </Example>
      <Example title="Figure">
        <Figure
          caption="A nice looking snowy rooftop"
          src="https://images.unsplash.com/photo-1693856757413-637345a5e2ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3610&q=80"
          objectFit="cover"
          fill
          alt="a snowy rooftop"
        />
      </Example>
    </Stack>
  )
}
