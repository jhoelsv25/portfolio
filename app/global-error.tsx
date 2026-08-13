"use client";

import * as React from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error("Global Error Boundary caught:", error);
  }, [error]);

  return (
    <html lang="es">
      <body className="flex min-h-screen items-center justify-center bg-[#ffffff] p-6 font-sans text-[#0f172a]">
        <div className="w-full max-w-md space-y-6 text-center">
          <div className="mx-auto flex size-20 items-center justify-center rounded-3xl bg-rose-50 text-rose-600 shadow-sm">
            <AlertTriangle className="size-10" />
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs font-bold tracking-wider text-rose-600 uppercase">
              Error Crítico
            </span>
            <h1 className="text-3xl font-black tracking-tight text-slate-900">
              Error del Sistema
            </h1>
            <p className="text-sm leading-relaxed text-slate-600">
              Ocurrió un error inesperado al inicializar la aplicación.
            </p>
          </div>

          <div>
            <button
              onClick={() => reset()}
              className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-orange-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-700"
            >
              <RotateCcw className="mr-1.5 size-4" /> Recargar Aplicación
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
