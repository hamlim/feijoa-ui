import { Box } from './box'
import { BaseLink } from './link'

export function FootnoteRef({ id }) {
  return (
    <Box id={`ref-${id}`} is="sup" className="text-xs target:ring-2">
      <BaseLink href={`#fn-${id}`}>[{id}]</BaseLink>
    </Box>
  )
}

export function Footnote({ id, children }) {
  return (
    <Box id={`fn-${id}`} className="target:ring-2 p-2">
      <BaseLink href={`#ref-${id}`}>[{id}]</BaseLink> - {children}
    </Box>
  )
}
