import { cn } from '@lib/utils'
import { Box } from './box'
import type { GenericHTMLElementProps } from '@lib/types'

interface ListProps extends GenericHTMLElementProps {
  is?: 'ul' | 'ol'
}

export function List({ is = 'ul', ...props }: ListProps) {
  return (
    <Box
      is={is}
      {...props}
      className={cn(
        'my-6 ml-6 [&>li]:mt-2',
        is === 'ul' && 'list-disc',
        is === 'ol' && 'list-decimal',
        props.className,
      )}
    />
  )
}

interface ListItemProps extends GenericHTMLElementProps {}

export function ListItem(props: ListItemProps) {
  return <Box is="li" {...props} />
}
