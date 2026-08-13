"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon-sm"
        className="border-border/50 text-muted-foreground size-9 rounded-full border"
        aria-label="Cambiar tema"
      >
        <Sun className="size-4 opacity-70" />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      className="border-border/50 bg-background/50 hover:bg-accent/40 size-9 rounded-full border backdrop-blur-sm transition-transform hover:scale-105"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Activar modo claro" : "Activar modo oscuro"}
    >
      {isDark ? (
        <Sun className="size-4 text-amber-400 transition-all" />
      ) : (
        <Moon className="size-4 text-slate-700 transition-all" />
      )}
    </Button>
  );
}
