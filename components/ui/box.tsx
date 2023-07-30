import { GenericHTMLElementProps } from '@lib/types'
import { ComponentType } from 'react'

interface Props extends GenericHTMLElementProps {
  is?: string | ComponentType<GenericHTMLElementProps>
}

export function Box({ is: El = 'div', ...props }: Props) {
  return <El {...props} />
}
