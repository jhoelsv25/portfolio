"use client";

import * as React from "react";
import Link from "next/link";
import { Mail, Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";
import { headerNavigation, siteConfig } from "@/config";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [activeSection, setActiveSection] = React.useState("inicio");
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = headerNavigation.map((item) =>
        item.href.replace("#", ""),
      );
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 border-b border-orange-200/50 py-3 shadow-xs backdrop-blur-md dark:border-orange-500/15"
          : "bg-transparent py-5"
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Brand / Logo */}
        <Logo />

        {/* Desktop Navigation Pill */}
        <nav
          aria-label="Navegación principal"
          className="bg-card/80 hidden items-center gap-1 rounded-full border border-orange-200/60 px-3.5 py-1.5 shadow-xs backdrop-blur-md md:flex dark:border-orange-500/20"
        >
          {headerNavigation.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                  isActive
                    ? "font-bold text-orange-600 dark:text-orange-400"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-orange-500/15 transition-all duration-300 dark:bg-orange-500/20" />
                )}
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Actions (Socials + Theme Toggle + Contact CTA) */}
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 sm:flex">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de GitHub"
              className={buttonVariants({
                variant: "ghost",
                size: "icon-sm",
                className:
                  "text-muted-foreground size-8 rounded-full hover:text-orange-500",
              })}
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de LinkedIn"
              className={buttonVariants({
                variant: "ghost",
                size: "icon-sm",
                className:
                  "text-muted-foreground size-8 rounded-full hover:text-orange-500",
              })}
            >
              <LinkedinIcon className="size-4" />
            </a>
          </div>

          <ThemeToggle />

          <Link
            href="#contacto"
            className={buttonVariants({
              size: "sm",
              className:
                "hidden rounded-full bg-orange-500 text-xs font-bold text-white shadow-xs hover:bg-orange-600 sm:inline-flex",
            })}
          >
            <Mail className="mr-1.5 size-3.5" />
            Contacto
          </Link>

          {/* Mobile Menu Trigger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className={buttonVariants({
                variant: "outline",
                size: "icon-sm",
                className:
                  "size-9 rounded-full border-orange-200 md:hidden dark:border-orange-500/20",
              })}
              aria-label="Abrir menú de navegación"
            >
              <Menu className="size-4" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 pt-10">
              <SheetHeader className="border-border/40 border-b pb-4 text-left">
                <SheetTitle className="font-mono text-sm">
                  jhoel<span className="text-orange-500">.dev</span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 py-6">
                {headerNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-muted-foreground flex items-center py-2 text-sm font-semibold transition-colors hover:text-orange-500"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="border-border/40 flex items-center gap-3 border-t pt-4">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: "outline",
                    size: "sm",
                    className:
                      "w-full border-orange-200 dark:border-orange-500/20",
                  })}
                >
                  <GithubIcon className="mr-1.5 size-4 text-orange-500" />{" "}
                  GitHub
                </a>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: "outline",
                    size: "sm",
                    className:
                      "w-full border-orange-200 dark:border-orange-500/20",
                  })}
                >
                  <LinkedinIcon className="mr-1.5 size-4 text-orange-500" />{" "}
                  LinkedIn
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
