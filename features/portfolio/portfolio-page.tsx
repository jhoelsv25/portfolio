import { HeroSection } from "./sections/hero";
import { ProjectsSection } from "./sections/projects";
import { ExperienceSection } from "./sections/experience";
import { SkillsSection } from "./sections/skills";
import { ServicesSection } from "./sections/services";
import { AboutSection } from "./sections/about";
import { ContactSection } from "./sections/contact";

export function PortfolioPage() {
  return (
    <div className="flex flex-col gap-6">
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
