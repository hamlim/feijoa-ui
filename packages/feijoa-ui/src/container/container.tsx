import { cn } from "./cn";
import type { GenericHTMLElementProps } from "./types";

interface Props extends GenericHTMLElementProps {}

export function Container(props: Props) {
  return <div {...props} className={cn("container", props.className)} />;
}
