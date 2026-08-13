"use client";

import * as React from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config";

interface CopyEmailButtonProps {
  variant?: "default" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg" | "icon-sm" | "icon";
  showLabel?: boolean;
  className?: string;
}

export function CopyEmailButton({
  variant = "secondary",
  size = "sm",
  showLabel = true,
  className,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.author.email);
      setCopied(true);
      toast.success("¡Correo copiado al portapapeles!", {
        description: siteConfig.author.email,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("No se pudo copiar el correo");
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleCopy}
      className={`rounded-full font-sans ${className || ""}`}
      aria-label="Copiar correo electrónico de Jhoel"
      title="Copiar email al portapapeles"
    >
      {copied ? (
        <Check className="size-3.5 text-emerald-500 transition-transform" />
      ) : (
        <Copy className="size-3.5 text-orange-500 transition-transform" />
      )}
      {showLabel && (
        <span className="font-sans text-xs font-semibold tracking-normal">
          {copied ? "¡Copiado!" : siteConfig.author.email}
        </span>
      )}
    </Button>
  );
}
