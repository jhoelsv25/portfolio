"use client";

import * as React from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import { Container } from "@/components/container";
import { buttonVariants } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error("App Error Boundary caught:", error);
  }, [error]);

  return (
    <main className="bg-background flex min-h-[80vh] items-center justify-center py-20">
      <Container className="max-w-md space-y-6 text-center">
        <div className="mx-auto flex size-20 items-center justify-center rounded-3xl bg-rose-500/10 text-rose-500 shadow-sm">
          <AlertTriangle className="size-10" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs font-bold tracking-wider text-rose-600 uppercase dark:text-rose-400">
            Algo salió mal
          </span>
          <h1 className="text-foreground text-3xl font-black tracking-tight sm:text-4xl">
            Error Inesperado
          </h1>
          <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
            Ha ocurrido un problema al cargar esta vista. Puedes intentar
            recargar el componente o volver a la portada.
          </p>
          {error.digest && (
            <p className="text-muted-foreground/60 pt-1 font-mono text-[10px]">
              Código de error: {error.digest}
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className={buttonVariants({
              size: "default",
              className:
                "cursor-pointer rounded-xl bg-orange-500 px-5 text-xs font-bold text-white shadow-sm hover:bg-orange-600 sm:text-sm",
            })}
          >
            <RotateCcw className="mr-1.5 size-4" /> Reintentar
          </button>
          <Link
            href="/"
            className={buttonVariants({
              variant: "secondary",
              size: "default",
              className: "rounded-xl px-4 text-xs font-semibold sm:text-sm",
            })}
          >
            <Home className="mr-1.5 size-4" /> Ir al Inicio
          </Link>
        </div>
      </Container>
    </main>
  );
}
