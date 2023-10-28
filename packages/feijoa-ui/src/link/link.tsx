import { cn } from "@recipes/cn";
import NextLink, { LinkProps } from "next/link";

interface BaseLinkProps {
  className?: string;
}

let linkClass = "font-medium text-primary underline underline-offset-4";

export function BaseLink(props: BaseLinkProps) {
  return <a {...props} className={cn(linkClass, props.className)} />;
}

export function Link(props: LinkProps<string> & { className?: string }) {
  return <NextLink {...props} className={cn(linkClass, props.className)} />;
}
