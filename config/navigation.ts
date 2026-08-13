export interface NavItem {
  name: string;
  href: string;
  badge?: string;
}

export const headerNavigation: NavItem[] = [
  { name: "Inicio", href: "#inicio" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Experiencia", href: "#experiencia" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Servicios", href: "#servicios" },
  { name: "Sobre Mí", href: "#sobre-mi" },
  { name: "Contacto", href: "#contacto" },
];
