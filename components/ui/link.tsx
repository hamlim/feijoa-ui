import { cn } from '@lib/utils'
import type { GenericHTMLElementProps } from '@lib/types'
import NextLink, { LinkProps } from 'next/link'

interface BaseLinkProps extends GenericHTMLElementProps {}

let linkClass = 'font-medium text-primary underline underline-offset-4'

export function BaseLink(props: BaseLinkProps) {
  return <a {...props} className={cn(linkClass, props.className)} />
}

export function Link(props: LinkProps<string>) {
  return <NextLink {...props} className={cn(linkClass, props.className)} />
}
