import { BaseLink } from "@recipes/link";

interface Props extends React.HTMLProps<HTMLAnchorElement> {
  children: string;
}

export function GitHubMention(props: Props) {
  return (
    <BaseLink
      href={`https://github.com/${props.children}`}
      target="_blank"
      rel="nooperner noreferrer"
      {...props}
    />
  );
}
