"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ExternalLink,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { projectsData, type Project } from "@/config";
import { TechBadge } from "../components/tech-badge";
import { GithubIcon } from "@/components/social-icons";
import { buttonVariants } from "@/components/ui/button";

const categories = [
  "Todos",
  "Enterprise",
  "Fintech",
  "Frontend",
  "Full Stack",
] as const;

function ProjectShowcaseRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);

  const gallery =
    project.images && project.images.length > 0
      ? project.images
      : [project.image];

  const currentImg = gallery[activeImageIndex] || gallery[0];
  const isEven = index % 2 === 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border-border/40 border-b py-10 first:pt-0 last:border-b-0 last:pb-0"
    >
      <div
        className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14 ${
          isEven ? "" : "lg:grid-flow-dense"
        }`}
      >
        {/* Visual Browser Window Preview (Free-floating, no outer card box) */}
        <div
          className={`space-y-3 lg:col-span-7 ${
            isEven ? "" : "lg:col-start-6"
          }`}
        >
          <div className="group/preview relative overflow-hidden rounded-2xl bg-[#0d1117] shadow-xl ring-1 shadow-black/5 ring-black/10 transition-transform duration-500 hover:-translate-y-1 dark:ring-white/10">
            {/* macOS Title Bar */}
            <div className="flex items-center justify-between border-b border-white/10 bg-[#161b22] px-4 py-2.5 select-none">
              <div className="flex items-center gap-1.5">
                <span className="inline-block size-2.5 rounded-full bg-rose-500/80" />
                <span className="inline-block size-2.5 rounded-full bg-amber-500/80" />
                <span className="inline-block size-2.5 rounded-full bg-emerald-500/80" />
              </div>

              <div className="flex items-center gap-1.5 rounded-md bg-white/5 px-3 py-0.5 font-mono text-[10px] text-slate-400">
                <Globe className="size-3 text-orange-400" />
                <span className="max-w-[200px] truncate">
                  {project.links.live
                    ? project.links.live.replace("https://", "")
                    : `${project.id}.dev`}
                </span>
              </div>

              <div className="w-10" />
            </div>

            {/* Main Screenshot Preview */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImg}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative size-full"
                >
                  <Image
                    src={currentImg}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover/preview:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority={index === 0}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next Chevrons */}
              {gallery.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveImageIndex(
                        (prev) => (prev - 1 + gallery.length) % gallery.length,
                      )
                    }
                    className="absolute top-1/2 left-2.5 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur-xs transition-opacity group-hover/preview:opacity-100 hover:bg-black/80"
                    aria-label="Imagen previa"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) => (prev + 1) % gallery.length)
                    }
                    className="absolute top-1/2 right-2.5 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur-xs transition-opacity group-hover/preview:opacity-100 hover:bg-black/80"
                    aria-label="Siguiente imagen"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Dots Indicator */}
          {gallery.length > 1 && (
            <div className="flex items-center justify-center gap-1.5 pt-1">
              {gallery.map((_, idx) => {
                const isActive = idx === activeImageIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      isActive
                        ? "w-6 bg-orange-500"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/60 w-1.5"
                    }`}
                    aria-label={`Ver imagen ${idx + 1}`}
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* Content Column (Open editorial layout) */}
        <div
          className={`space-y-4 lg:col-span-5 ${
            isEven ? "" : "lg:col-start-1"
          }`}
        >
          {/* Header Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-600 dark:text-orange-400">
              {project.category}
            </span>
            {project.metrics && (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <Sparkles className="size-3" />
                {project.metrics.value}
              </span>
            )}
          </div>

          {/* Project Title & Tagline */}
          <div className="space-y-1.5">
            <h3 className="text-foreground text-2xl font-black tracking-tight sm:text-3xl">
              {project.title.split(" - ")[0]}
            </h3>
            <p className="text-xs font-semibold text-orange-600 sm:text-sm dark:text-orange-400">
              {project.tagline}
            </p>
          </div>

          <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="space-y-1.5 pt-1">
            <h4 className="text-muted-foreground text-[11px] font-bold tracking-wider uppercase">
              Arquitectura & Aportes
            </h4>
            <div className="text-foreground/90 space-y-2 text-xs">
              {project.highlights.slice(0, 3).map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-orange-500" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.map((tag) => (
              <TechBadge key={tag} name={tag} />
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <Link
              href={`/proyectos/${project.id}`}
              className={buttonVariants({
                size: "default",
                className:
                  "rounded-xl bg-orange-500 px-5 text-xs font-bold text-white shadow-sm transition-all hover:scale-105 hover:bg-orange-600 sm:text-sm",
              })}
            >
              Ver Caso de Estudio <ArrowRight className="ml-1.5 size-4" />
            </Link>
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: "secondary",
                  size: "default",
                  className: "rounded-xl px-4 text-xs font-semibold sm:text-sm",
                })}
              >
                <ExternalLink className="mr-1.5 size-4" /> Demo en Vivo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: "ghost",
                  size: "default",
                  className:
                    "text-muted-foreground hover:text-foreground rounded-xl px-3 text-xs font-semibold sm:text-sm",
                })}
                aria-label={`Ver código fuente de ${project.title}`}
              >
                <GithubIcon className="size-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface ProjectsSectionProps {
  limit?: number;
  showViewAll?: boolean;
}

export function ProjectsSection({
  limit = 3,
  showViewAll = true,
}: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = React.useState<string>("Todos");

  const filteredProjects = React.useMemo(() => {
    const list =
      activeCategory === "Todos"
        ? projectsData
        : projectsData.filter((p) => p.category === activeCategory);

    return limit ? list.slice(0, limit) : list;
  }, [activeCategory, limit]);

  return (
    <section id="proyectos" className="bg-background relative py-24">
      <Container className="space-y-12">
        {/* Section Header */}
        <MotionReveal className="mx-auto max-w-2xl space-y-3 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3.5 py-1 text-xs font-bold text-orange-600 dark:text-orange-400">
            <span>Portfolio</span>
          </div>
          <h2 className="text-foreground text-3xl font-black tracking-tight sm:text-5xl">
            Proyectos Destacados
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl text-xs leading-relaxed sm:text-sm">
            Sistemas empresariales, plataformas fintech y arquitecturas full
            stack construidas con rigor técnico y alto impacto.
          </p>
        </MotionReveal>

        {/* Category Filters Bar */}
        <MotionReveal
          delay={0.1}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                  isActive
                    ? "scale-105 bg-orange-500 text-white shadow-sm"
                    : "bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </MotionReveal>

        {/* Projects Rows with open spacing */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectShowcaseRow
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* View All Projects Button */}
        {showViewAll && limit && projectsData.length > limit && (
          <div className="pt-8 text-center">
            <Link
              href="/proyectos"
              className={buttonVariants({
                size: "default",
                className:
                  "rounded-full bg-orange-500 px-7 text-xs font-bold text-white shadow-sm transition-all hover:scale-105 hover:bg-orange-600 sm:text-sm",
              })}
            >
              Ver Todos los Proyectos ({projectsData.length}){" "}
              <ArrowRight className="ml-1.5 size-4" />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
