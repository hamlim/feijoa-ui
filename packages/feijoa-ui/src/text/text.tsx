import { cn } from "@recipes/cn";

interface Props {
  className?: string;
}

export function Text(props: Props) {
  return <p {...props} className={cn("leading-7", props.className)} />;
}
