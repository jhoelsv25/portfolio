"use client";

import * as React from "react";
import Link from "next/link";
import {
  Bot,
  Sparkles,
  Database,
  Code2,
  Server,
  Layout,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { servicesData } from "@/config";

const serviceIcons = {
  bot: <Bot className="size-6 text-orange-500" />,
  sparkles: <Sparkles className="size-6 text-amber-500" />,
  database: <Database className="size-6 text-emerald-500" />,
  code: <Code2 className="size-6 text-orange-600 dark:text-orange-400" />,
  server: <Server className="size-6 text-cyan-500" />,
  layout: <Layout className="size-6 text-rose-500" />,
};

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="bg-background border-border/30 relative border-t py-24"
    >
      <Container className="space-y-16">
        {/* Section Header */}
        <MotionReveal className="mx-auto max-w-2xl space-y-3 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3.5 py-1 text-xs font-bold text-orange-600 dark:text-orange-400">
            <span>Servicios & Soluciones</span>
          </div>
          <h2 className="text-foreground text-3xl font-black tracking-tight sm:text-5xl">
            Especialidades & Servicios
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl text-xs leading-relaxed sm:text-sm">
            Soluciones de ingeniería de software enfocadas en Inteligencia
            Artificial, extracción masiva de datos y aplicaciones web full stack
            de alto rendimiento.
          </p>
        </MotionReveal>

        {/* Clean Open Services Grid (No boxy nested cards) */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <MotionReveal
              key={service.id}
              delay={0.08 * (index + 1)}
              className="group relative flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Header: Icon + Number Index */}
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-orange-500/10 transition-transform duration-300 group-hover:scale-110">
                    {serviceIcons[service.icon]}
                  </div>
                  <span className="text-muted-foreground/40 font-mono text-xs font-black transition-colors group-hover:text-orange-500">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-foreground text-lg font-black transition-colors group-hover:text-orange-500">
                    {service.title}
                  </h3>
                  <p className="mt-0.5 text-xs font-bold text-orange-600 dark:text-orange-400">
                    {service.subtitle}
                  </p>
                </div>

                <p className="text-muted-foreground text-xs leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-1.5 pt-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="text-foreground/90 flex items-start gap-2 text-xs"
                    >
                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-orange-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3">
                <Link
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 transition-all hover:gap-2.5 dark:text-orange-400"
                >
                  Consultar sobre este servicio{" "}
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
