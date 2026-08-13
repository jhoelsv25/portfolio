"use client";

import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Sparkles,
  Bot,
  Code2,
  Database,
  Zap,
} from "lucide-react";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { CopyEmailButton } from "@/components/copy-email-button";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";
import { HeroTerminal } from "../components/hero-terminal";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="bg-background relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-28 pb-16"
    >
      <Container className="flex flex-col items-center text-center">
        {/* Status Pill with friendly green pulse */}
        <MotionReveal delay={0.1}>
          <div className="bg-secondary text-muted-foreground inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs shadow-xs">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-foreground font-semibold">
              Disponible para proyectos & roles
            </span>
            <span className="text-border">|</span>
            <span className="flex items-center gap-1 text-[11px] font-semibold text-orange-600 dark:text-orange-400">
              <MapPin className="size-3" /> Huancayo, Perú
            </span>
          </div>
        </MotionReveal>

        {/* Main Headline */}
        <MotionReveal delay={0.2} className="mt-6 max-w-3xl space-y-4">
          <h1 className="text-foreground text-3xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Hola, soy <span className="text-orange-500">Jhoel Silvestre</span>
          </h1>
          <p className="flex items-center justify-center gap-1.5 text-sm font-bold text-orange-600 sm:text-base dark:text-orange-400">
            <Zap className="size-4 fill-orange-500 text-orange-500" />
            Ingeniero de Sistemas • Full Stack & AI Solutions Developer
          </p>
          <p className="text-muted-foreground mx-auto max-w-2xl text-sm leading-relaxed sm:text-base">
            Transformo ideas en software de alto impacto: desde{" "}
            <strong className="text-foreground font-semibold">
              Agentes de IA, Chatbots con RAG
            </strong>{" "}
            y{" "}
            <strong className="text-foreground font-semibold">
              Web Scraping automatizado
            </strong>
            , hasta{" "}
            <strong className="text-foreground font-semibold">
              Sistemas Empresariales
            </strong>{" "}
            con NestJS, Next.js, Angular, React y PostgreSQL.
          </p>
        </MotionReveal>

        {/* Cheerful Feature Badges */}
        <MotionReveal
          delay={0.25}
          className="mt-5 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="bg-secondary inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold text-orange-600 dark:text-orange-400">
            <Bot className="size-3.5" /> Agentes de IA & Chatbots
          </span>
          <span className="bg-secondary inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold text-orange-600 dark:text-orange-400">
            <Database className="size-3.5" /> Web Scraping & Extracción
          </span>
          <span className="bg-secondary inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold text-orange-600 dark:text-orange-400">
            <Code2 className="size-3.5" /> Full Stack (NestJS + Next.js)
          </span>
        </MotionReveal>

        {/* CTAs & Actions */}
        <MotionReveal
          delay={0.3}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="#proyectos"
            className={buttonVariants({
              size: "default",
              className:
                "rounded-full bg-orange-500 px-6 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:scale-105 hover:bg-orange-600 sm:text-sm",
            })}
          >
            Ver Proyectos Destacados <ArrowRight className="ml-1.5 size-4" />
          </Link>

          <Link
            href="#servicios"
            className={buttonVariants({
              variant: "secondary",
              size: "default",
              className:
                "rounded-full px-5 py-2.5 text-xs font-semibold sm:text-sm",
            })}
          >
            <Sparkles className="mr-1.5 size-3.5 text-orange-500" /> Servicios &
            Soluciones
          </Link>

          <CopyEmailButton variant="secondary" className="rounded-full px-4" />
        </MotionReveal>

        {/* Social Links */}
        <MotionReveal
          delay={0.35}
          className="text-muted-foreground mt-6 flex items-center justify-center gap-4"
        >
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold transition-colors hover:text-orange-500"
          >
            <GithubIcon className="size-3.5" />
            <span>github.com/jhoelsv25</span>
          </a>
          <span>•</span>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold transition-colors hover:text-orange-500"
          >
            <LinkedinIcon className="size-3.5" />
            <span>LinkedIn</span>
          </a>
        </MotionReveal>

        {/* Interactive Code Terminal Widget */}
        <MotionReveal delay={0.4} className="mt-10 w-full">
          <HeroTerminal />
        </MotionReveal>
      </Container>
    </section>
  );
}
