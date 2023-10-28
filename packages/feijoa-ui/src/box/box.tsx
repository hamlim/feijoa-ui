import { ComponentType } from "react";

interface Props {
  is?: string | ComponentType<{}>;
}

export function Box({ is: El = "div", ...props }: Props) {
  return <El {...props} />;
}
