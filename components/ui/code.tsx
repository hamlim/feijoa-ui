import { cn } from '@lib/utils'
import type { GenericHTMLElementProps } from '@lib/types'
import { Box } from './box'

interface Props extends GenericHTMLElementProps {}

export function Code(props: Props) {
  return (
    <Box
      is="code"
      {...props}
      className={cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        props.className,
      )}
    />
  )
}
