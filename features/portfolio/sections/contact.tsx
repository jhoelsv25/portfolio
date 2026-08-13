import { MessageSquare, MapPin } from "lucide-react";
import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import { CopyEmailButton } from "@/components/copy-email-button";
import { ContactForm } from "../components/contact-form";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config";

export function ContactSection() {
  return (
    <section id="contacto" className="bg-muted/30 relative py-20">
      <Container className="space-y-12">
        {/* Section Header */}
        <MotionReveal className="mx-auto max-w-2xl space-y-3 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3.5 py-1 text-xs font-bold text-orange-600 dark:text-orange-400">
            <span>Contacto</span>
          </div>
          <h2 className="text-foreground text-2xl font-black tracking-tight sm:text-4xl">
            ¿Tienes un Proyecto o Propuesta?
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm">
            Estoy disponible para roles full-time, consultorías o proyectos a
            medida. ¡Hablemos de cómo podemos colaborar!
          </p>
        </MotionReveal>

        {/* 2-Column Contact Info + Form */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left: Contact Info */}
          <MotionReveal delay={0.1} className="space-y-6 lg:col-span-5">
            <div className="bg-card space-y-6 rounded-3xl border-0 p-6 shadow-xs sm:p-8">
              <h3 className="text-foreground flex items-center gap-2 text-base font-bold">
                <MessageSquare className="size-4 text-orange-500" />
                Información Directa
              </h3>

              <div className="space-y-5 text-xs">
                {/* Email Item */}
                <div className="space-y-2">
                  <span className="text-muted-foreground block font-medium">
                    Correo Electrónico
                  </span>
                  <div className="bg-muted/40 flex items-center justify-between gap-2 rounded-xl p-2.5">
                    <a
                      href={siteConfig.links.email}
                      className="text-foreground truncate font-sans text-xs font-bold transition-colors hover:text-orange-500 sm:text-sm"
                    >
                      {siteConfig.author.email}
                    </a>
                    <CopyEmailButton
                      variant="ghost"
                      size="icon-sm"
                      showLabel={false}
                      className="size-7 shrink-0"
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="border-border/40 space-y-1 border-t pt-3">
                  <span className="text-muted-foreground block font-medium">
                    Ubicación
                  </span>
                  <p className="text-foreground flex items-center gap-1.5 text-xs font-semibold sm:text-sm">
                    <MapPin className="size-4 text-orange-500" />
                    {siteConfig.author.location}
                  </p>
                </div>

                {/* Social Networks */}
                <div className="border-border/40 space-y-2 border-t pt-3">
                  <span className="text-muted-foreground block font-medium">
                    Redes Profesionales
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={siteConfig.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({
                        variant: "secondary",
                        size: "sm",
                        className: "rounded-xl px-3.5 text-xs font-semibold",
                      })}
                    >
                      <GithubIcon className="mr-1.5 size-3.5 text-orange-500" />{" "}
                      GitHub
                    </a>
                    <a
                      href={siteConfig.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({
                        variant: "secondary",
                        size: "sm",
                        className: "rounded-xl px-3.5 text-xs font-semibold",
                      })}
                    >
                      <LinkedinIcon className="mr-1.5 size-3.5 text-orange-500" />{" "}
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>

          {/* Right: Contact Form */}
          <MotionReveal delay={0.2} className="lg:col-span-7">
            <ContactForm />
          </MotionReveal>
        </div>
      </Container>
    </section>
  );
}
