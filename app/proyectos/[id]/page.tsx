import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Server,
  Code2,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/container";
import { projectsData } from "@/config";
import { TechBadge } from "@/features/portfolio/components/tech-badge";
import { ProjectGallery } from "@/features/portfolio/components/project-gallery";
import { GithubIcon } from "@/components/social-icons";
import { buttonVariants } from "@/components/ui/button";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: `${project.title} | Caso de Estudio - Jhoel Silvestre`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Jhoel Silvestre`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const gallery =
    project.images && project.images.length > 0
      ? project.images
      : [project.image];

  // Find adjacent projects for pagination
  const currentIndex = projectsData.findIndex((p) => p.id === id);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <main className="bg-background min-h-screen pt-28 pb-24">
      <Container className="max-w-5xl space-y-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/#proyectos"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
              className:
                "rounded-full text-xs font-semibold hover:text-orange-500",
            })}
          >
            <ArrowLeft className="mr-1.5 size-3.5" /> Volver a Proyectos
          </Link>

          <span className="rounded-full bg-orange-500/10 px-3.5 py-1 text-xs font-bold text-orange-600 dark:text-orange-400">
            {project.category}
          </span>
        </div>

        {/* Project Header */}
        <div className="space-y-4 text-left">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-foreground text-3xl font-black tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            {project.metrics && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <Sparkles className="size-3.5" />
                {project.metrics.label}: {project.metrics.value}
              </span>
            )}
          </div>

          <p className="text-base font-semibold text-orange-600 sm:text-lg dark:text-orange-400">
            {project.tagline}
          </p>

          <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed sm:text-base">
            {project.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  size: "default",
                  className:
                    "rounded-xl bg-orange-500 px-6 text-xs font-bold text-white shadow-sm hover:bg-orange-600 sm:text-sm",
                })}
              >
                <ExternalLink className="mr-1.5 size-4" /> Visitar Proyecto en
                Vivo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: "secondary",
                  size: "default",
                  className: "rounded-xl px-4 text-xs font-semibold sm:text-sm",
                })}
              >
                <GithubIcon className="mr-1.5 size-4" /> Ver Código en GitHub
              </a>
            )}
          </div>
        </div>

        {/* High Resolution Gallery with Modal Lightbox */}
        <ProjectGallery images={gallery} projectTitle={project.title} />

        {/* Architecture & Engineering Highlights */}
        <div className="border-border/40 grid grid-cols-1 gap-8 border-t pt-4 md:grid-cols-12">
          <div className="space-y-6 md:col-span-7">
            <h2 className="text-foreground flex items-center gap-2 text-xl font-bold">
              <Code2 className="size-5 text-orange-500" />
              Aspectos Clave de Ingeniería & Arquitectura
            </h2>

            <div className="space-y-3">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="bg-muted/30 text-foreground/90 flex items-start gap-3 rounded-2xl p-3.5 text-xs leading-relaxed sm:text-sm"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-orange-500" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 md:col-span-5">
            <h2 className="text-foreground flex items-center gap-2 text-xl font-bold">
              <Server className="size-5 text-orange-500" />
              Stack Tecnológico
            </h2>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <TechBadge
                  key={tag}
                  name={tag}
                  className="rounded-xl px-3 py-1.5 text-xs"
                />
              ))}
            </div>

            <div className="space-y-2 rounded-2xl bg-orange-500/10 p-4">
              <span className="block text-xs font-bold text-orange-600 dark:text-orange-400">
                ¿Interesado en una solución similar?
              </span>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Puedo diseñar e implementar sistemas con esta misma arquitectura
                y rendimiento para tu organización.
              </p>
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-1.5 pt-1 text-xs font-bold text-orange-600 hover:underline dark:text-orange-400"
              >
                Hablemos de tu proyecto <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Next Project Footer Card */}
        <div className="border-border/40 flex items-center justify-between border-t pt-8">
          <Link
            href="/#proyectos"
            className="text-muted-foreground hover:text-foreground text-xs font-semibold"
          >
            ← Volver a todos los proyectos
          </Link>

          <Link
            href={`/proyectos/${nextProject.id}`}
            className="text-foreground group flex items-center gap-2 text-xs font-bold transition-colors hover:text-orange-500"
          >
            <span>Siguiente: {nextProject.title.split(" - ")[0]}</span>
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </main>
  );
}
