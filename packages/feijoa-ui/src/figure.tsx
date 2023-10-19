import NextImage from "next/image";
import type { ReactNode } from "react";
import { AspectRatio } from "./aspect-ratio";
import { cn } from "./cn";
import { Text } from "./text";

type NextImageProps = Parameters<typeof NextImage>[0];

interface Props extends NextImageProps {
  caption: ReactNode;
}

export function Figure({ caption, className, ...props }: Props) {
  return (
    <>
      <AspectRatio ratio={16 / 9}>
        <NextImage
          {...props}
          className={cn("rounded-md object-cover", className)}
        />
      </AspectRatio>
      <Text className="text-gray-500 text-center">{caption}</Text>
    </>
  );
}
