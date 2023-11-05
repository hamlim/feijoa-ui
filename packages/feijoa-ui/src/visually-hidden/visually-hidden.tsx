import { Box, type BoxProps } from "@recipes/box";
import { cn } from "@recipes/cn";

interface Props extends BoxProps {}

export function VisuallyHidden(props: Props) {
  return <Box {...props} className={cn("sr-only", props.className)} />;
}
