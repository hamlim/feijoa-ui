import { BaseLink } from "./link";
import { GenericHTMLElementProps } from "./types";

interface Props extends GenericHTMLElementProps {
  children: string;
}

export function GitHubMention(props: Props) {
  return (
    <BaseLink
      is="a"
      href={`https://github.com/${props.children}`}
      target="_blank"
      rel="nooperner noreferrer"
      {...props}
    />
  );
}
