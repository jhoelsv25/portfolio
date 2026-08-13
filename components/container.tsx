import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = ComponentProps<"div">;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-6", className)}
      {...props}
    />
  );
}
