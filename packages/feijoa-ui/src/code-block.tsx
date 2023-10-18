import { Code } from 'bright'
import type { BrightProps, Extension } from 'bright'
import { collapse } from './extensions/collapse-extension'
import { CopyCode } from './extensions/copy-code'

Code.theme = {
  dark: 'github-dark-dimmed',
  light: 'github-light',
}

interface Props extends Partial<BrightProps> {
  children: string
}

let defaultExtensions: Array<Extension> = [collapse]

export function CodeBlock(props: Props) {
  return (
    <div className="relative overflow-scroll">
      <Code
        extensions={defaultExtensions}
        lineNumbers
        {...props}
        style={{ margin: 0, ...props.style }}
      />
      <CopyCode code={props.children} />
    </div>
  )
}
