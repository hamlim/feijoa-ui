import { cn } from './cn'
import NextImage from 'next/image'
import { AspectRatio } from './aspect-ratio'

type ImageProps = React.ComponentPropsWithoutRef<typeof NextImage>

export function Image(props: ImageProps) {
  return (
    <AspectRatio ratio={16 / 9}>
      <NextImage
        {...props}
        className={cn('rounded-md object-cover', props.className)}
      />
    </AspectRatio>
  )
}
