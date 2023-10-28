import { Box } from "./box";
import { cn } from "./cn";
import type { GenericHTMLElementProps } from "./types";

interface Props extends GenericHTMLElementProps {}

export function Blockquote(props: Props) {
  return (
    <Box
      is="blockquote"
      {...props}
      className={cn("mt-6 border-l-2 pl-6 italic", props.className)}
    />
  );
}
