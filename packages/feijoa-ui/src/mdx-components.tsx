// @ts-expect-error - createServerContext, need to remove eventually
import { useContext, createServerContext } from 'react'
import { BaseLink, Link as LocalLink } from './link'
import { Box } from './box'
import { List, ListItem } from './list'
import { Blockquote } from './blockquote'
import { Code } from './code'
import { CodeBlock } from './code-block'
import { Heading } from './heading'
import { Image } from './image'
import { Text } from './text'
import { Tweet } from './tweet'
import { TLDR } from './tldr'

type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

type Props<InferredType extends (...args) => any> = Prettify<
  Parameters<InferredType>[0]
>

export function a(props: Props<typeof BaseLink>) {
  return <BaseLink {...props} />
}

export function Link(props: Props<typeof LocalLink>) {
  return <LocalLink {...props} />
}

export function ul(props: Props<typeof List>) {
  return <List {...props} is="ul" />
}

export function ol(props: Props<typeof List>) {
  return <List {...props} is="ol" />
}

export function li(props: Props<typeof ListItem>) {
  return <ListItem {...props} />
}

export function del(props: Props<typeof Box>) {
  return <Box {...props} is="del" />
}

export function em(props: Props<typeof Box>) {
  return <Box {...props} is="em" />
}

export function strong(props: Props<typeof Box>) {
  return <Box {...props} is="strong" />
}

export function p(props: Props<typeof Text>) {
  return <Text {...props} />
}

export function h1(props: Props<typeof Heading>) {
  return <Heading {...props} is="h1" />
}

export function h2(props: Props<typeof Heading>) {
  return <Heading {...props} is="h2" />
}

export function h3(props: Props<typeof Heading>) {
  return <Heading {...props} is="h3" />
}

export function h4(props: Props<typeof Heading>) {
  return <Heading {...props} is="h4" />
}

export function h5(props: Props<typeof Heading>) {
  return <Heading {...props} is="h5" />
}

export function h6(props: Props<typeof Heading>) {
  return <Heading {...props} is="h6" />
}

export function blockquote(props: Props<typeof Blockquote>) {
  return <Blockquote {...props} />
}

if (!globalThis.__preContext) {
  globalThis.__preContext = createServerContext<boolean>('preContext', false)
}

export function pre(props) {
  return (
    <globalThis.__preContext.Provider value={true}>
      <Box className="not-prose" {...props} />
    </globalThis.__preContext.Provider>
  )
}

export function code(props: Props<typeof Code> | Props<typeof CodeBlock>) {
  let isPre = useContext(globalThis.__preContext)
  if (isPre) {
    return <CodeBlock {...props} />
  }
  return (
    <Box is="span" className="not-prose">
      <Code {...props} />
    </Box>
  )
}

export function img(props: Props<typeof Image>) {
  return <Image {...props} />
}

export function Time(props: Props<typeof Box>) {
  return <Box {...props} is="time" />
}

export { Tweet, TLDR }
