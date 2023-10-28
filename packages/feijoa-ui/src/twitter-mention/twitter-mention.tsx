import { BaseLink } from "@recipes/link";

interface Props {
  children: string;
}

export function TwitterMention(props: Props) {
  return (
    <BaseLink
      is="a"
      href={`https://twitter.com/${props.children}`}
      target="_blank"
      rel="nooperner noreferrer"
      {...props}
    />
  );
}
