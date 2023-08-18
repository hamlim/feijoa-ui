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

export default function KitchenSink() {
  return (
    <Stack gap={4}>
      <Container>
        <Heading is="h3">Text:</Heading>
        <Separator />
        <Text>Container and Text!</Text>
      </Container>
      <Container>
        <Heading is="h3">Headings:</Heading>
        <Separator />
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
        <Heading is="h3">Links:</Heading>
        <Separator />
        <Link href="/">Local Link</Link>
        <br />
        <BaseLink href="https://matthamlin.me" target="_blank">
          External Link!
        </BaseLink>
      </Container>
      <Container>
        <Heading is="h3">Box:</Heading>
        <Separator />
        <Box is="marquee">Box (as marquee)</Box>
        <Box is={Text}>Box as Text!</Box>
      </Container>
      <Container>
        <Heading is="h3">Code Blocks:</Heading>
        <Separator />
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
      </Container>
      <Container>
        <Heading is="h3">Inline Code:</Heading>
        <Separator />
        <Code>feijoa-ui</Code>
      </Container>
      <Container>
        <Heading is="h3">Blockquote:</Heading>
        <Separator />
        <Blockquote>
          Some important quote here!
          <br />- Some Person
        </Blockquote>
      </Container>
      <Container>
        <Heading is="h3">Lists:</Heading>
        <Separator />
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
      </Container>
      <Container>
        <Heading is="h3">Table:</Heading>
        <Separator />
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
      </Container>
    </Stack>
  )
}
