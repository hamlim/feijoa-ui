import { cn } from '@lib/utils'
import type { GenericHTMLElementProps } from '@lib/types'

interface Props extends GenericHTMLElementProps {}

export function Text(props: Props) {
  return <p {...props} className={cn('leading-7', props.className)} />
}
