import { cn } from './cn'
import type { GenericHTMLElementProps } from './types'

interface Props extends GenericHTMLElementProps {}

export function Text(props: Props) {
  return <p {...props} className={cn('leading-7', props.className)} />
}
