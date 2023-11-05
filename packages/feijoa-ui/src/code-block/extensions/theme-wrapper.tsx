"use client";
import { useTheme } from "next-themes";

export function ThemeWrapper(props: any) {
  let theme = useTheme();
  return <div {...props} data-theme={theme} />;
}
