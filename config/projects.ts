export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category:
    "Enterprise" | "Fintech" | "Full Stack" | "Frontend" | "AI & Scraping";
  featured: boolean;
  image: string;
  images: string[];
  tags: string[];
  highlights: string[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  metrics?: {
    label: string;
    value: string;
  };
}

export const projectsData: Project[] = [
  {
    id: "sisae",
    title: "SISAE - Sistema de Administración Escolar",
    tagline:
      "Plataforma integral de gestión institucional con backend NestJS y frontend Angular",
    description:
      "Sistema empresarial modular para la administración escolar integral: gestión de matrícula, control de asistencia en tiempo real, horarios dinámicos, reportes financieros y mensajería automatizada.",
    category: "Enterprise",
    featured: true,
    image: "/projects/sisae.jpg",
    images: ["/projects/sisae.jpg", "/projects/sisae-2.jpg"],
    tags: [
      "NestJS",
      "Angular",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "Supabase",
      "Tailwind CSS",
      "Playwright",
    ],
    highlights: [
      "Backend modular en NestJS con procedimientos almacenados optimizados en PostgreSQL",
      "Autenticación robusta con Supabase y paginación por cursores para millones de registros",
      "Exportación automatizada de reportes a PDF y Excel para directores y docentes",
      "Suite de pruebas end-to-end con Playwright para flujos críticos de asistencia",
    ],
    links: {
      github: "https://github.com/jhoelsv25",
      live: "https://jhoel-silvestre.web.app",
    },
    metrics: {
      label: "Usuarios / Registros",
      value: "+1,200 activos",
    },
  },
  {
    id: "mijunta",
    title: "Mi Junta - Fintech de Ahorro y Crédito",
    tagline:
      "Plataforma financiera de juntas y círculos de ahorro colaborativo",
    description:
      "Plataforma fintech moderna que digitaliza el modelo de ahorro comunitario ('panderos' o 'juntas'). Incluye cálculo automatizado de cuotas, trazabilidad de pagos y proxy de sesión seguro.",
    category: "Fintech",
    featured: true,
    image: "/projects/mijunta.jpg",
    images: ["/projects/mijunta.jpg", "/projects/mijunta-2.jpg"],
    tags: [
      "Next.js 15",
      "React 19",
      "Prisma ORM",
      "PostgreSQL",
      "Tailwind CSS v4",
      "TypeScript",
      "shadcn/ui",
    ],
    highlights: [
      "Arquitectura moderna con Next.js 15 Server Components y Tailwind v4",
      "Proxy middleware de sesión para validación segura de tokens y autenticación",
      "Modelado relacional con Prisma ORM y migraciones automatizadas",
      "Dashboard analítico interactivo para seguimiento de cuotas y fechas de cobro",
    ],
    links: {
      github: "https://github.com/jhoelsv25",
      live: "https://jhoel-silvestre.web.app",
    },
    metrics: {
      label: "Optimización SSR",
      value: "99/100 Core Web Vitals",
    },
  },
  {
    id: "ascendia",
    title: "Ascendia - Portal Web Corporativo",
    tagline: "Sitio web corporativo de alta gama para supervisión e ingeniería",
    description:
      "Plataforma web moderna con arquitectura modular Fidenza, animaciones avanzadas con Motion, scroll cinético con Lenis y optimización SEO integral para máxima captación de clientes.",
    category: "Frontend",
    featured: true,
    image: "/projects/ascendia.jpg",
    images: ["/projects/ascendia.jpg"],
    tags: [
      "Next.js 15",
      "Motion",
      "Lenis",
      "Tailwind CSS",
      "TypeScript",
      "SEO Técnico",
    ],
    highlights: [
      "Arquitectura por características desacopladas (Fidenza Website Architecture)",
      "Animaciones cinéticas e interactividad con Motion y Lenis Smooth Scroll",
      "Optimización de metadatos, OpenGraph y JSON-LD Schema.org para indexación",
      "Diseño responsivo de alta fidelidad adaptado para dispositivos móviles",
    ],
    links: {
      github: "https://github.com/jhoelsv25",
      live: "https://ascendia.pe",
    },
    metrics: {
      label: "Performance",
      value: "100% SEO Score",
    },
  },
  {
    id: "clinic-appointments",
    title: "Sistema de Citas Médicas & Gestión Clínica",
    tagline:
      "Plataforma de agendamiento y gestión médica con reducción del 30% en tiempos de espera",
    description:
      "Aplicación web integral para clínicas con calendario interactivo de disponibilidad médica, reserva de citas en línea para pacientes y panel de control para especialistas.",
    category: "Full Stack",
    featured: false,
    image: "/projects/clinic.jpg",
    images: ["/projects/clinic.jpg"],
    tags: [
      "Angular",
      "NestJS",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "TypeScript",
    ],
    highlights: [
      "Sistema de agendamiento en línea que redujo el tiempo de espera de pacientes en 30%",
      "Sincronización en tiempo real de disponibilidad médica con Supabase Realtime",
      "Historial de citas médicas y notificaciones automáticas",
    ],
    links: {
      github: "https://github.com/jhoelsv25",
      live: "https://jhoel-silvestre.web.app",
    },
    metrics: {
      label: "Impacto",
      value: "-30% tiempo de espera",
    },
  },
];
