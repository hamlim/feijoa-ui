import type { ReactNode } from 'react'
import { Box } from './box'
import { BaseLink } from './link'

export function FootnoteRef({ id }: {id: string}) {
  return (
    <Box id={`ref-${id}`} is="sup" className="text-xs target:ring-2">
      <BaseLink href={`#fn-${id}`}>[{id}]</BaseLink>
    </Box>
  )
}

export function Footnote({ ref, children }: {ref: string, children: ReactNode}) {
  return (
    <Box id={`fn-${ref}`} className="target:ring-2 p-2">
      <BaseLink href={`#ref-${ref}`}>[{ref}]</BaseLink> - {children}
    </Box>
  )
}
