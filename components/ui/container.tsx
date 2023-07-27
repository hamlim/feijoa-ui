import { cn } from '@lib/utils'
import type { GenericHTMLElementProps } from '@lib/types'

interface Props extends GenericHTMLElementProps {}

export function Container(props: Props) {
  return <div {...props} className={cn('container', props.className)} />
}
