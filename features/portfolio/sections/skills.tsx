"use client";

import * as React from "react";
import {
  Bot,
  Search,
  Server,
  Layout,
  Database,
  ShieldCheck,
  Check,
  Zap,
} from "lucide-react";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { skillsData } from "@/config";

const categoryIcons = {
  bot: <Bot className="size-5 text-orange-500" />,
  "database-search": <Search className="size-5 text-amber-500" />,
  server: <Server className="size-5 text-orange-600 dark:text-orange-400" />,
  layout: <Layout className="size-5 text-rose-500" />,
  database: <Database className="size-5 text-emerald-500" />,
  "shield-check": <ShieldCheck className="size-5 text-cyan-500" />,
};

export function SkillsSection() {
  return (
    <section
      id="habilidades"
      className="bg-muted/20 border-border/30 relative border-t py-24"
    >
      <Container className="space-y-16">
        {/* Section Header */}
        <MotionReveal className="mx-auto max-w-2xl space-y-3 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3.5 py-1 text-xs font-bold text-orange-600 dark:text-orange-400">
            <span>Stack Tecnológico</span>
          </div>
          <h2 className="text-foreground text-3xl font-black tracking-tight sm:text-5xl">
            Habilidades & Tecnologías
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl text-xs leading-relaxed sm:text-sm">
            Dominio de herramientas modernas para desarrollo de software full
            stack, agentes autónomos de IA y extracción masiva de datos.
          </p>
        </MotionReveal>

        {/* Clean Open Skills Grid */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category, index) => (
            <MotionReveal
              key={category.title}
              delay={0.08 * (index + 1)}
              className="space-y-4"
            >
              <div className="border-border/40 flex items-center gap-3 border-b pb-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-orange-500/10">
                  {categoryIcons[category.iconName]}
                </div>
                <div>
                  <h3 className="text-foreground text-base font-black">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-[11px]">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skill pills list */}
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-background/80 flex items-center justify-between gap-2 rounded-xl px-3 py-2 text-xs shadow-2xs transition-colors hover:bg-orange-50/40 dark:hover:bg-orange-950/20"
                  >
                    <span className="text-foreground flex items-center gap-2 font-semibold">
                      <Check className="size-3.5 text-orange-500" />
                      {skill.name}
                    </span>
                    <span className="text-muted-foreground text-[10px] font-bold">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </MotionReveal>
          ))}
        </div>

        {/* Tech Ecosystem Ticker Bar */}
        <MotionReveal delay={0.2} className="border-border/40 border-t pt-4">
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-2">
            <span className="text-muted-foreground mr-2 flex items-center gap-1 text-xs font-bold">
              <Zap className="size-3.5 text-orange-500" /> Ecosistema:
            </span>
            {[
              "NestJS",
              "Next.js 15",
              "Angular",
              "React 19",
              "Playwright",
              "OpenAI API",
              "PostgreSQL",
              "Prisma ORM",
              "TypeORM",
              "TypeScript",
              "Tailwind CSS v4",
              "pgvector",
            ].map((tech) => (
              <span
                key={tech}
                className="text-foreground bg-background rounded-full px-3 py-1 text-[11px] font-semibold shadow-2xs transition-colors hover:text-orange-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
