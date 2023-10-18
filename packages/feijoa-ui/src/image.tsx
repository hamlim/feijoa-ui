import { cn } from './cn'
import NextImage from 'next/image'
import { AspectRatio } from './aspect-ratio'

export function Image(props) {
  return (
    <AspectRatio ratio={16 / 9}>
      <NextImage
        {...props}
        className={cn('rounded-md object-cover', props.className)}
      />
    </AspectRatio>
  )
}
