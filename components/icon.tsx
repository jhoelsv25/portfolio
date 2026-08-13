import { HugeiconsIcon, type HugeiconsIconProps } from "@hugeicons/react";

export function Icon({
  size = 24,
  color = "currentColor",
  strokeWidth = 1.5,
  ...props
}: HugeiconsIconProps) {
  return (
    <HugeiconsIcon
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      {...props}
    />
  );
}
