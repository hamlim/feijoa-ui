import { useContext, createServerContext } from 'react'
import { BaseLink } from './link'
import { Box } from './box'
import { List, ListItem } from './list'
import { Blockquote } from './blockquote'
import { Code } from './code'
import { CodeBlock } from './code-block'
import { Heading } from './heading'
import { Image } from './image'

type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

type Props<InferredType extends (...args) => any> = Prettify<
  Parameters<InferredType>[0]
>

export function a(props: Props<typeof BaseLink>) {
  return <BaseLink {...props} />
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

let preContext = createServerContext<boolean>('preContext', false)

export function pre(props) {
  return (
    <preContext.Provider value={true}>
      <Box className="not-prose" {...props} />
    </preContext.Provider>
  )
}

export function code(props: Props<typeof Code> | Props<typeof CodeBlock>) {
  let isPre = useContext(preContext)
  if (isPre) {
    return <CodeBlock {...props} />
  }
  return (
    <Box is="span" className="not-prose">
      <Code {...props} />
    </Box>
  )
}

export { Image }
