import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles, GraduationCap } from "lucide-react";
import { Container } from "@/components/container";
import { experienceData } from "@/config";
import { ExperienceSection } from "@/features/portfolio/sections/experience";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Trayectoria & Experiencia Laboral | Jhoel Silvestre",
  description:
    "Historial profesional y experiencia en desarrollo de software, SaaS de Inteligencia Artificial, backend NestJS y frontend Angular/Next.js por Jhoel Silvestre.",
};

export default function ExperienciaPage() {
  return (
    <main className="bg-background min-h-screen pt-28 pb-20">
      <Container className="space-y-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/#experiencia"
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
            <Sparkles className="size-3" /> {experienceData.length} Posiciones
            Laborales
          </span>
        </div>

        {/* Full Experience Timeline without limit */}
        <ExperienceSection limit={undefined} showViewAll={false} />

        {/* Education Section */}
        <div className="border-border/40 mx-auto max-w-3xl space-y-6 border-t pt-8">
          <div className="flex items-center gap-2">
            <GraduationCap className="size-5 text-orange-500" />
            <h3 className="text-foreground text-xl font-bold">
              Educación Superior
            </h3>
          </div>

          <div className="bg-muted/20 space-y-2 rounded-3xl p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-foreground text-base font-bold">
                Bachiller en Ingeniería de Sistemas
              </h4>
              <span className="text-xs font-bold text-orange-600 dark:text-orange-400">
                2017 - 2021
              </span>
            </div>
            <p className="text-muted-foreground text-xs font-medium sm:text-sm">
              Universidad Nacional de Huancavelica
            </p>
            <p className="text-muted-foreground pt-1 text-xs leading-relaxed">
              Formación integral en ciencias de la computación, ingeniería de
              software, bases de datos relacionales, estructuras de datos y
              algoritmos.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
