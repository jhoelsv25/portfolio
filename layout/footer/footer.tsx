import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { Logo } from "@/components/logo";
import { Container } from "@/components/container";
import { siteConfig, headerNavigation } from "@/config";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";

export function Footer() {
  return (
    <footer className="border-border/40 bg-card/30 border-t py-12 backdrop-blur-xs">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="space-y-2 text-center md:text-left">
            <Logo compact />
            <p className="text-muted-foreground max-w-sm text-xs">
              Ingeniero de Sistemas • Full Stack & AI Solutions Developer.
              Construyendo software de alto impacto y arquitecturas escalables.
            </p>
          </div>

          {/* Quick Nav */}
          <nav
            aria-label="Navegación pie de página"
            className="text-muted-foreground flex flex-wrap items-center justify-center gap-4 text-xs"
          >
            {headerNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Socials & Top */}
          <div className="flex items-center gap-2">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Jhoel"
              className={buttonVariants({
                variant: "outline",
                size: "icon-sm",
                className: "size-8 rounded-full",
              })}
            >
              <GithubIcon className="size-3.5" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Jhoel"
              className={buttonVariants({
                variant: "outline",
                size: "icon-sm",
                className: "size-8 rounded-full",
              })}
            >
              <LinkedinIcon className="size-3.5" />
            </a>
            <a
              href={siteConfig.links.email}
              aria-label="Enviar email a Jhoel"
              className={buttonVariants({
                variant: "outline",
                size: "icon-sm",
                className: "size-8 rounded-full",
              })}
            >
              <Mail className="size-3.5" />
            </a>
            <Link
              href="#inicio"
              aria-label="Volver arriba"
              className={buttonVariants({
                variant: "ghost",
                size: "icon-sm",
                className:
                  "text-muted-foreground hover:text-foreground size-8 rounded-full",
              })}
            >
              <ArrowUp className="size-3.5" />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-border/30 text-muted-foreground flex flex-col items-center justify-between gap-3 border-t pt-6 text-center text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
            reservados.
          </p>
          <p>
            Diseñado y desarrollado por{" "}
            <Link
              href="https://jhoelsv25.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline-offset-4 hover:underline"
            >
              Jhoel Silvestre
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
