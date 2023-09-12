import { GenericHTMLElementProps } from '@lib/types'
import { BaseLink } from './link'

interface Props extends GenericHTMLElementProps {
  children: string
}

export function GitHubMention(props: Props) {
  return (
    <BaseLink
      is="a"
      href={`https://github.com/${props.children}`}
      target="_blank"
      rel="nooperner noreferrer"
      {...props}
    />
  )
}
