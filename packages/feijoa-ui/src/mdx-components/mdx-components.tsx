// import { createServerContext, useContext } from "react";
import { Blockquote } from "./blockquote";
import { Box } from "./box";
import { Code } from "./code";
import { CodeBlock } from "./code-block";
import { Heading } from "./heading";
import { Image } from "./image";
import { BaseLink, Link as LocalLink } from "./link";
import { List, ListItem } from "./list";
import { Text } from "./text";

type Prettify<T> =
  & {
    [K in keyof T]: T[K];
  }
  & {};

type Props<InferredType extends (...args: Array<any>) => any> = Prettify<
  Parameters<InferredType>[0]
>;

export function a(props: Props<typeof BaseLink>) {
  return <BaseLink {...props} />;
}

export function Link(props: Props<typeof LocalLink>) {
  return <LocalLink {...props} />;
}

export function ul(props: Props<typeof List>) {
  return <List {...props} is="ul" />;
}

export function ol(props: Props<typeof List>) {
  return <List {...props} is="ol" />;
}

export function li(props: Props<typeof ListItem>) {
  return <ListItem {...props} />;
}

export function del(props: Props<typeof Box>) {
  return <Box {...props} is="del" />;
}

export function em(props: Props<typeof Box>) {
  return <Box {...props} is="em" />;
}

export function strong(props: Props<typeof Box>) {
  return <Box {...props} is="strong" />;
}

export function p(props: Props<typeof Text>) {
  return <Text {...props} />;
}

export function h1(props: Props<typeof Heading>) {
  return <Heading {...props} is="h1" />;
}

export function h2(props: Props<typeof Heading>) {
  return <Heading {...props} is="h2" />;
}

export function h3(props: Props<typeof Heading>) {
  return <Heading {...props} is="h3" />;
}

export function h4(props: Props<typeof Heading>) {
  return <Heading {...props} is="h4" />;
}

export function h5(props: Props<typeof Heading>) {
  return <Heading {...props} is="h5" />;
}

export function h6(props: Props<typeof Heading>) {
  return <Heading {...props} is="h6" />;
}

export function blockquote(props: Props<typeof Blockquote>) {
  return <Blockquote {...props} />;
}

declare global {
  var __preContext: any;
}

// if (!globalThis.__preContext) {
//   globalThis.__preContext = createServerContext<boolean>("preContext", false);
// }

export function pre(props: Props<typeof CodeBlock>) {
  return <CodeBlock {...props} />;
  // return (
  //   <globalThis.__preContext.Provider value={true}>
  //     <Box {...props} />
  //   </globalThis.__preContext.Provider>
  // );
}

export function code(props: Props<typeof Code>) {
  // let isPre = useContext(globalThis.__preContext);
  // if (isPre) {
  //   let codeBlockProps = props as Props<typeof CodeBlock>;
  //   return <CodeBlock {...codeBlockProps} />;
  // }
  return (
    <Box is="span">
      <Code {...props} />
    </Box>
  );
}

export function img(props: Props<typeof Image>) {
  return <Image {...props} />;
}

export function Time(props: Props<typeof Box>) {
  return <Box {...props} is="time" />;
}

export * from "./accordion";
export * from "./alert";
export * from "./alert-dialog";
export * from "./aspect-ratio";
export * from "./avatar";
export * from "./badge";
export * from "./blockquote";
export * from "./box";
export * from "./button";
export * from "./calendar";
export * from "./card";
export * from "./checkbox";
export * from "./cn";
export * from "./code";
export * from "./code-block";
export * from "./collapsible";
export * from "./command";
export * from "./container";
export * from "./context-menu";
export * from "./dialog";
export * from "./dropdown-menu";
export * from "./figure";
export * from "./footnote";
export * from "./form";
export * from "./github-mention";
export * from "./heading";
export * from "./hover-card";
export * from "./image";
export * from "./input";
export * from "./label";
export * from "./link";
export * from "./list";
export * from "./menubar";
export * from "./navigation-menu";
export * from "./popover";
export * from "./portal";
export * from "./progress";
export * from "./radio-group";
export * from "./scroll-area";
export * from "./select";
export * from "./separator";
export * from "./sheet";
export * from "./skeleton";
export * from "./slider";
export * from "./stack";
export * from "./switch";
export * from "./table";
export * from "./tabs";
export * from "./tapable";
export * from "./text";
export * from "./textarea";
export * from "./theme-provider";
export * from "./theme-toggle";
export * from "./tldr";
export * from "./toast";
export * from "./toaster";
export * from "./toggle";
export * from "./tooltip";
export * from "./tweet";
export * from "./twitter-mention";
export * from "./use-toast";
