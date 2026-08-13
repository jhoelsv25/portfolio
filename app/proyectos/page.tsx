import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Container } from "@/components/container";
import { projectsData } from "@/config";
import { ProjectsSection } from "@/features/portfolio/sections/projects";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Proyectos & Casos de Estudio | Jhoel Silvestre",
  description:
    "Catálogo completo de sistemas empresariales, plataformas fintech, herramientas de IA y aplicaciones full stack desarrolladas por Jhoel Silvestre.",
};

export default function ProyectosPage() {
  return (
    <main className="bg-background min-h-screen pt-28 pb-20">
      <Container className="space-y-10">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
              className:
                "rounded-full text-xs font-semibold hover:text-orange-500",
            })}
          >
            <ArrowLeft className="mr-1.5 size-3.5" /> Volver al Inicio
          </Link>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3.5 py-1 text-xs font-bold text-orange-600 dark:text-orange-400">
            <Sparkles className="size-3" /> {projectsData.length} Proyectos
            Registrados
          </span>
        </div>

        {/* Render projects showcase without limit */}
        <ProjectsSection limit={undefined} showViewAll={false} />
      </Container>
    </main>
  );
}
