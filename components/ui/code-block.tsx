import { Code } from 'bright'
import type { BrightProps } from 'bright'

Code.theme = {
  dark: 'github-dark-dimmed',
  light: 'github-light',
}

interface Props extends Partial<BrightProps> {
  children?: string
}

export function CodeBlock(props: Props) {
  return <Code {...props} />
}
