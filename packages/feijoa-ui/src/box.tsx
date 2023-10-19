import { ComponentType } from "react";
import { GenericHTMLElementProps } from "./types";

interface Props extends GenericHTMLElementProps {
  is?: string | ComponentType<GenericHTMLElementProps>;
}

export function Box({ is: El = "div", ...props }: Props) {
  return <El {...props} />;
}
