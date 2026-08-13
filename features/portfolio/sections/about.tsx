import {
  GraduationCap,
  MapPin,
  Code2,
  Compass,
  Award,
  BookOpen,
} from "lucide-react";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { siteConfig } from "@/config";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="bg-muted/30 relative py-20">
      <Container className="space-y-12">
        {/* Section Header */}
        <MotionReveal className="mx-auto max-w-2xl space-y-3 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3.5 py-1 text-xs font-bold text-orange-600 dark:text-orange-400">
            <span>Perfil</span>
          </div>
          <h2 className="text-foreground text-2xl font-black tracking-tight sm:text-4xl">
            Sobre Mí & Formación Profesional
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm">
            Conoce mi formación como Ingeniero de Sistemas, trayectoria
            profesional y principios al construir software.
          </p>
        </MotionReveal>

        {/* Content Layout without borders */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Main Bio Card */}
          <MotionReveal
            delay={0.1}
            className="bg-card space-y-4 rounded-3xl p-6 shadow-sm sm:p-8 lg:col-span-2"
          >
            <h3 className="text-foreground flex items-center gap-2 text-lg font-bold sm:text-xl">
              <Code2 className="size-5 text-orange-500" />
              Hola, soy {siteConfig.author.name}
            </h3>

            <div className="text-muted-foreground space-y-3 text-xs leading-relaxed sm:text-sm">
              <p>
                Soy{" "}
                <strong className="text-foreground font-semibold">
                  Bachiller en Ingeniería de Sistemas
                </strong>{" "}
                graduado de la Universidad Nacional de Huancavelica,
                especializado en el desarrollo full stack de aplicaciones web
                modernas, integración de{" "}
                <strong className="text-foreground font-semibold">
                  Inteligencia Artificial
                </strong>{" "}
                y extracción masiva de datos.
              </p>
              <p>
                En mi trayectoria profesional he trabajado como Desarrollador
                Full Stack en empresas como{" "}
                <strong className="text-foreground font-semibold">
                  JLH Corredores de Seguros
                </strong>{" "}
                y{" "}
                <strong className="text-foreground font-semibold">
                  JHUNO SAC
                </strong>
                , además de liderar proyectos freelance para clínicas, entidades
                educativas y fintechs.
              </p>
              <p>
                Domino{" "}
                <strong className="text-foreground font-semibold">
                  Angular, React y Next.js
                </strong>{" "}
                en frontend, así como{" "}
                <strong className="text-foreground font-semibold">
                  NestJS, Supabase, PostgreSQL y MongoDB
                </strong>{" "}
                en backend, siempre con buenas prácticas, tipado estricto en
                TypeScript y metodologías ágiles (Scrum).
              </p>
            </div>

            <div className="border-border/40 text-muted-foreground flex flex-wrap gap-4 border-t pt-4 text-xs font-medium">
              <div className="flex items-center gap-1.5 font-semibold">
                <MapPin className="size-3.5 text-orange-500" /> Huancayo, Perú
              </div>
              <div className="flex items-center gap-1.5 font-semibold">
                <GraduationCap className="size-3.5 text-orange-500" /> Univ.
                Nacional de Huancavelica
              </div>
              <div className="flex items-center gap-1.5 font-semibold">
                <Award className="size-3.5 text-emerald-500" /> Bach. Ing. de
                Sistemas
              </div>
            </div>
          </MotionReveal>

          {/* Core Values Card */}
          <MotionReveal
            delay={0.2}
            className="bg-card flex flex-col justify-between space-y-4 rounded-3xl p-6 shadow-sm sm:p-8"
          >
            <div className="space-y-3">
              <h3 className="text-foreground flex items-center gap-2 text-base font-bold">
                <Compass className="size-4 text-orange-500" />
                Mis Principios
              </h3>

              <div className="text-muted-foreground space-y-2.5 text-xs">
                <div className="bg-muted/40 rounded-2xl p-3">
                  <span className="text-foreground mb-0.5 block font-bold">
                    Tipado Estricto & Seguridad
                  </span>
                  TypeScript y validación rigurosa con Zod de punta a punta.
                </div>
                <div className="bg-muted/40 rounded-2xl p-3">
                  <span className="text-foreground mb-0.5 block font-bold">
                    Arquitectura Limpia & Modular
                  </span>
                  Desacoplamiento claro por módulos y servicios escalables.
                </div>
                <div className="bg-muted/40 rounded-2xl p-3">
                  <span className="text-foreground mb-0.5 block font-bold">
                    IA & Automatización de Procesos
                  </span>
                  Agentes, RAG y pipelines para optimizar flujos reales.
                </div>
              </div>
            </div>

            <div className="border-border/40 border-t pt-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-orange-600 dark:text-orange-400">
                <BookOpen className="size-3.5" /> Aprendizaje Continuo & Scrum
              </div>
              <span className="text-muted-foreground text-[11px] font-medium">
                Disponible para roles full-time y proyectos a medida
              </span>
            </div>
          </MotionReveal>
        </div>
      </Container>
    </section>
  );
}
