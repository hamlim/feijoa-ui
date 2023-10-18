import type { Component, ComponentPropsWithoutRef, JSX, ReactNode } from "react";

type JSXElementConstructor<P> =
  | ((
    props: P,
    /**
     * @deprecated https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-stateless-function-components
     */
    deprecatedLegacyContext?: any,
  ) => ReactNode)
  | (new(
    props: P,
    /**
     * @deprecated https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods
     */
    deprecatedLegacyContext?: any,
  ) => Component<any, any>);

export type GenericHTMLElementProps = ComponentPropsWithoutRef<
  keyof JSX.IntrinsicElements | JSXElementConstructor<any>
>;
