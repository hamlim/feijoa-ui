import { Blockquote } from '@components/ui/blockquote'
import { Box } from '@components/ui/box'
import { Code } from '@components/ui/code'
import { CodeBlock } from '@components/ui/code-block'
import { Container } from '@components/ui/container'
import { Heading } from '@components/ui/heading'
import { BaseLink, Link } from '@components/ui/link'
import { List, ListItem } from '@components/ui/list'
import { Separator } from '@components/ui/separator'
import { Stack } from '@components/ui/stack'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/ui/table'
import { Text } from '@components/ui/text'

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
    </Stack>
  )
}
