export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: "Tiempo Completo" | "Freelance" | "Remoto" | "Híbrido";
  description: string;
  achievements: string[];
  skills: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "jlh-corredores",
    role: "Desarrollador Full Stack",
    company: "JLH Corredores de Seguros",
    location: "Perú",
    period: "Marzo 2025 - Actualidad",
    type: "Tiempo Completo",
    description:
      "Desarrollo y mantenimiento de aplicaciones web corporativas utilizando Angular y NestJS, mejorando la experiencia del usuario y la eficiencia operativa. Integración de Supabase en tiempo real e Inteligencia Artificial para automatización de procesos.",
    achievements: [
      "Implementación de integraciones con Supabase para sincronización de datos en tiempo real y autenticación de usuarios.",
      "Integración de servicios de Inteligencia Artificial para automatización de flujos y procesos del sistema.",
      "Desarrollo de APIs RESTful seguras, modulares y de alto rendimiento con NestJS.",
      "Uso de metodologías ágiles Scrum y control de versiones profesional con Git/GitHub.",
    ],
    skills: [
      "Angular",
      "NestJS",
      "Supabase",
      "TypeScript",
      "PostgreSQL",
      "Inteligencia Artificial",
      "Docker",
      "Scrum",
    ],
  },
  {
    id: "wavys-technologies",
    role: "Full Stack & AI Engineer",
    company: "Wavys Technologies",
    companyUrl: "https://www.wavys-technologies.com/es/calendario",
    location: "Remoto",
    period: "2024 - 2025",
    type: "Remoto",
    description:
      "Desarrollo del SaaS de Agentes de IA Omnicanal y Calendario Inteligente. Creación de flujos de agendamiento conversacional, atención automatizada en múltiples canales e integraciones con modelos LLM y CRMs.",
    achievements: [
      "Desarrollo del módulo de Calendario Inteligente y reserva automatizada de citas en tiempo real.",
      "Implementación de flujos conversacionales con agentes de IA para captura de leads y atención omnicanal.",
      "Arquitectura de servicios backend escalables con NestJS, TypeScript, webhooks y bases de datos relacionales.",
    ],
    skills: [
      "Agentes de IA",
      "NestJS",
      "Next.js",
      "Angular",
      "TypeScript",
      "LLMs",
      "PostgreSQL",
      "Webhooks",
      "Tailwind CSS",
    ],
  },
  {
    id: "freelancer",
    role: "Full Stack Developer & AI Solutions",
    company: "Freelancer / Independiente",
    location: "Remoto",
    period: "Septiembre 2023 - Enero 2025",
    type: "Freelance",
    description:
      "Creación de aplicaciones web a medida adaptadas a las necesidades del cliente: clínicas, instituciones educativas, sistemas de agendamiento y plataformas fintech con Next.js, NestJS y automatizaciones.",
    achievements: [
      "Desarrollo de página web dinámica con sistema de agendamiento de citas médicas en línea para clínica, reduciendo tiempos de espera en un 30%.",
      "Desarrollo de Intranet y Sistema de Gestión Académica institucional utilizando Angular, NestJS, PostgreSQL y MongoDB.",
      "Construcción de aplicaciones en Next.js con renderizado SSR, optimización SEO y arquitectura de componentes desacoplada.",
    ],
    skills: [
      "Next.js",
      "React",
      "NestJS",
      "Angular",
      "Tailwind CSS",
      "PostgreSQL",
      "MongoDB",
      "Playwright",
      "Python",
    ],
  },
  {
    id: "jhuno-sac",
    role: "Frontend Developer",
    company: "JHUNO SAC",
    location: "Perú",
    period: "Junio 2022 - Julio 2023",
    type: "Tiempo Completo",
    description:
      "Desarrollo de aplicaciones web responsivas en Angular y desarrollo de módulos para ERP empresarial. Creación de sitios web atractivos, funcionales y optimizados.",
    achievements: [
      "Desarrollo de aplicaciones web en Angular, optimizando la experiencia de usuario y reduciendo tiempos de carga en un 15%.",
      "Implementación de módulos de facturación electrónica en Odoo ERP con Python, reduciendo discrepancias en un 20%.",
      "Diseño e integración de interfaces limpias y responsivas con Tailwind CSS y Material UI.",
    ],
    skills: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "Python",
      "Odoo ERP",
      "Tailwind CSS",
      "HTML/CSS",
    ],
  },
];
