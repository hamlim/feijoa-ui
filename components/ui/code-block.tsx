import { Code } from 'bright'
import type { BrightProps, Extension } from 'bright'
import { collapse } from './extensions/collapse-extension'

Code.theme = {
  dark: 'github-dark-dimmed',
  light: 'github-light',
}

interface Props extends Partial<BrightProps> {
  children?: string
}

let defaultExtensions: Array<Extension> = [collapse]

export function CodeBlock(props: Props) {
  return <Code extensions={defaultExtensions} {...props} />
}
