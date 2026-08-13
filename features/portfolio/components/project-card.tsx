"use client";

import * as React from "react";
import Image from "next/image";
import { ExternalLink, Sparkles, CheckCircle2, Eye } from "lucide-react";
import type { Project } from "@/config";
import { TechBadge } from "./tech-badge";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "@/components/social-icons";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group bg-card relative flex flex-col justify-between overflow-hidden rounded-3xl border-0 p-0 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Project Image Header */}
      {project.image && (
        <div className="bg-muted/60 relative aspect-video w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-orange-500 px-3 py-1 text-[11px] font-bold text-white shadow-md transition-colors hover:bg-orange-600"
              >
                <Eye className="size-3" /> Ver Demo
              </a>
            )}
          </div>
        </div>
      )}

      <div className="p-5 pb-2">
        <CardHeader className="space-y-2 p-0 pb-3">
          <div className="flex items-center justify-between gap-2">
            <span className="rounded-full bg-orange-500/10 px-2.5 py-0.5 text-[10px] font-bold text-orange-600 uppercase dark:text-orange-400">
              {project.category}
            </span>
            {project.metrics && (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                <Sparkles className="size-3" />
                {project.metrics.value}
              </span>
            )}
          </div>

          <div>
            <h3 className="text-foreground text-base font-bold transition-colors group-hover:text-orange-500">
              {project.title.split(" - ")[0]}
            </h3>
            <p className="text-muted-foreground mt-1 line-clamp-1 text-xs">
              {project.tagline}
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-3 p-0 pt-1">
          <p className="text-muted-foreground line-clamp-2 text-xs leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1 pt-1">
            {project.tags.slice(0, 4).map((tag) => (
              <TechBadge key={tag} name={tag} />
            ))}
            {project.tags.length > 4 && (
              <span className="bg-muted text-muted-foreground inline-flex items-center rounded-lg px-2 py-0.5 text-[10px] font-bold">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </CardContent>
      </div>

      <CardFooter className="flex items-center justify-between gap-2 p-5 pt-3">
        <div className="flex items-center gap-2">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "secondary",
                size: "sm",
                className: "rounded-xl px-2.5 text-xs font-semibold",
              })}
              aria-label={`Ver código fuente de ${project.title}`}
            >
              <GithubIcon className="size-3.5" />
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "secondary",
                size: "sm",
                className:
                  "rounded-xl px-2.5 text-xs font-semibold text-orange-600 dark:text-orange-400",
              })}
              aria-label={`Visitar sitio de ${project.title}`}
            >
              <ExternalLink className="size-3.5" />
            </a>
          )}
        </div>

        {/* Modal Dialog for Deep Details */}
        <Dialog>
          <DialogTrigger
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
              className:
                "rounded-xl text-xs font-bold text-orange-600 hover:bg-orange-50 hover:text-orange-700 dark:text-orange-400 dark:hover:bg-orange-950/30",
            })}
          >
            Detalles
          </DialogTrigger>
          <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto rounded-3xl p-6">
            <DialogHeader className="space-y-2 text-left">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-orange-500/10 px-2.5 py-0.5 text-[10px] font-bold text-orange-600 uppercase dark:text-orange-400">
                  {project.category}
                </span>
                {project.metrics && (
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                    {project.metrics.value}
                  </span>
                )}
              </div>
              <DialogTitle className="text-xl font-black">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-xs font-semibold text-orange-600 dark:text-orange-400">
                {project.tagline}
              </DialogDescription>
            </DialogHeader>

            {project.image && (
              <div className="bg-muted/60 relative aspect-video w-full overflow-hidden rounded-2xl shadow-xs">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="600px"
                />
              </div>
            )}

            <div className="space-y-4 py-2 text-xs">
              <div className="space-y-1">
                <h4 className="text-foreground font-bold">Descripción</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-foreground font-bold">
                  Aspectos Clave & Arquitectura
                </h4>
                <ul className="text-muted-foreground space-y-1.5">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-orange-500" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-foreground font-bold">Stack Tecnológico</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <TechBadge key={tag} name={tag} />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 border-t pt-4">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: "outline",
                    size: "sm",
                    className: "rounded-xl text-xs",
                  })}
                >
                  <GithubIcon className="mr-1.5 size-3.5" /> GitHub
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    size: "sm",
                    className:
                      "rounded-xl bg-orange-500 text-xs font-bold text-white hover:bg-orange-600",
                  })}
                >
                  <ExternalLink className="mr-1.5 size-3.5" /> Live Demo
                </a>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
