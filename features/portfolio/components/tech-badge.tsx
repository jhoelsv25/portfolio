import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  className?: string;
}

export function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "bg-muted/60 text-foreground/80 inline-flex items-center rounded-lg px-2.5 py-1 text-[11px] font-semibold transition-colors hover:bg-orange-500/10 hover:text-orange-500",
        className,
      )}
    >
      {name}
    </span>
  );
}
