import { BaseLink } from "@recipes/link";

interface Props {
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
