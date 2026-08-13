import Link from "next/link";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle,
  Sparkles,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { experienceData } from "@/config";
import { TechBadge } from "../components/tech-badge";
import { buttonVariants } from "@/components/ui/button";

interface ExperienceSectionProps {
  limit?: number;
  showViewAll?: boolean;
}

export function ExperienceSection({
  limit = 3,
  showViewAll = true,
}: ExperienceSectionProps) {
  const displayedExperience = limit
    ? experienceData.slice(0, limit)
    : experienceData;

  return (
    <section id="experiencia" className="bg-muted/20 relative py-24">
      <Container className="space-y-14">
        {/* Section Header */}
        <MotionReveal className="mx-auto max-w-2xl space-y-3 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3.5 py-1 text-xs font-bold text-orange-600 dark:text-orange-400">
            <span>Trayectoria</span>
          </div>
          <h2 className="text-foreground text-3xl font-black tracking-tight sm:text-5xl">
            Experiencia Laboral
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl text-xs leading-relaxed sm:text-sm">
            Mi trayectoria profesional desarrollando productos SaaS, agentes de
            IA, servicios backend y aplicaciones web empresariales.
          </p>
        </MotionReveal>

        {/* Clean Open Editorial Timeline */}
        <div className="relative mx-auto max-w-3xl space-y-12 before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-gradient-to-b before:from-orange-500 before:via-amber-500 before:to-orange-500/10">
          {displayedExperience.map((exp, index) => (
            <MotionReveal
              key={exp.id}
              delay={0.08 * (index + 1)}
              className="relative pl-10 sm:pl-12"
            >
              {/* Glowing Node */}
              <div className="bg-background absolute top-1 left-1 flex size-4 items-center justify-center rounded-full border-2 border-orange-500 shadow-sm">
                <div className="size-1.5 rounded-full bg-orange-500" />
              </div>

              <div className="space-y-3">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-orange-500/10 px-2.5 py-0.5 text-[10px] font-bold text-orange-600 uppercase dark:text-orange-400">
                      {exp.type}
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1 text-xs font-semibold">
                      <Calendar className="size-3 text-orange-500" />{" "}
                      {exp.period}
                    </span>
                  </div>

                  <span className="text-muted-foreground inline-flex items-center gap-1 text-xs font-medium">
                    <MapPin className="size-3 text-orange-500" /> {exp.location}
                  </span>
                </div>

                {/* Role & Company */}
                <div>
                  <h3 className="text-foreground text-lg font-black sm:text-xl">
                    {exp.role}
                  </h3>
                  <div className="mt-0.5 flex items-center gap-2">
                    <span className="flex items-center gap-1 text-xs font-semibold text-orange-600 sm:text-sm dark:text-orange-400">
                      <Briefcase className="size-3.5" />
                      {exp.company}
                    </span>
                    {exp.companyUrl && (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-orange-600 hover:underline dark:text-orange-400"
                      >
                        <ExternalLink className="size-3" /> Ver Empresa / SaaS
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-1.5 pt-1">
                  <h4 className="text-muted-foreground flex items-center gap-1 text-[11px] font-bold tracking-wider uppercase">
                    <Sparkles className="size-3 text-orange-500" /> Logros &
                    Aportes
                  </h4>
                  <div className="text-foreground/90 space-y-1.5 text-xs">
                    {exp.achievements.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 size-3.5 shrink-0 text-emerald-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.skills.map((skill) => (
                    <TechBadge key={skill} name={skill} />
                  ))}
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>

        {/* View All Experiences Button */}
        {showViewAll && limit && experienceData.length > limit && (
          <div className="pt-4 text-center">
            <Link
              href="/experiencia"
              className={buttonVariants({
                size: "default",
                className:
                  "rounded-full bg-orange-500 px-6 text-xs font-bold text-white shadow-sm transition-all hover:scale-105 hover:bg-orange-600 sm:text-sm",
              })}
            >
              Ver Toda la Trayectoria ({experienceData.length} Posiciones){" "}
              <ArrowRight className="ml-1.5 size-4" />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
