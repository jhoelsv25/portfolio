import Link from "next/link";
import { ArrowLeft, Home, FileQuestion } from "lucide-react";
import { Container } from "@/components/container";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="bg-background flex min-h-[80vh] items-center justify-center py-20">
      <Container className="max-w-md space-y-6 text-center">
        <div className="mx-auto flex size-20 items-center justify-center rounded-3xl bg-orange-500/10 text-orange-500 shadow-sm">
          <FileQuestion className="size-10" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs font-bold tracking-wider text-orange-600 uppercase dark:text-orange-400">
            Error 404
          </span>
          <h1 className="text-foreground text-3xl font-black tracking-tight sm:text-4xl">
            Página No Encontrada
          </h1>
          <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
            La página o recurso que buscas no existe o ha sido movido. Puedes
            volver al inicio o revisar los proyectos.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className={buttonVariants({
              size: "default",
              className:
                "rounded-xl bg-orange-500 px-5 text-xs font-bold text-white shadow-sm hover:bg-orange-600 sm:text-sm",
            })}
          >
            <Home className="mr-1.5 size-4" /> Ir al Inicio
          </Link>
          <Link
            href="/proyectos"
            className={buttonVariants({
              variant: "secondary",
              size: "default",
              className: "rounded-xl px-4 text-xs font-semibold sm:text-sm",
            })}
          >
            <ArrowLeft className="mr-1.5 size-4" /> Ver Proyectos
          </Link>
        </div>
      </Container>
    </main>
  );
}
