import { Code } from "bright";
import type { BrightProps, Extension } from "bright";
import { collapse } from "./extensions/collapse-extension";
import { CopyCode } from "./extensions/copy-code";
import { ThemeWrapper } from "./extensions/theme-wrapper";

Code.theme = {
  dark: "github-dark-dimmed",
  light: "github-light",
};

interface Props extends Partial<BrightProps> {
  children: string;
}

let defaultExtensions: Array<Extension> = [collapse];

export function CodeBlock(props: Props) {
  let lang;
  // This feels less than idea :thinkies:
  if (props.className?.includes("language-")) {
    lang = props.className.split(" ").find((hunk: string) => hunk.includes("language-"))?.replace("language-", "");
  }
  return (
    <ThemeWrapper className="relative overflow-scroll">
      <Code
        extensions={defaultExtensions}
        lineNumbers
        lang={lang}
        {...props}
        style={{ margin: 0, ...props.style }}
      />
      <CopyCode code={props.children} />
    </ThemeWrapper>
  );
}
