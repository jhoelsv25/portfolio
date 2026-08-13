export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: "bot" | "sparkles" | "database" | "code" | "server" | "layout";
  badge?: string;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "ai-agents",
    title: "Agentes de IA & Automatización",
    subtitle: "Flujos de trabajo autónomos y ejecución inteligente",
    description:
      "Desarrollo de agentes inteligentes con llamadas a funciones (tool-calling), automatización de procesos repetitivos e integración con modelos LLM líderes (OpenAI, Claude, Gemini).",
    icon: "bot",
    badge: "Alta Demanda",
    features: [
      "Agentes autónomos con ejecución de herramientas y APIs",
      "Automatización de workflows y procesamiento de documentos",
      "Integración de modelos LLM (OpenAI, Anthropic Claude, Google Gemini)",
      "Monitoreo, control de costos de tokens y pipelines seguros",
    ],
  },
  {
    id: "chatbots-rag",
    title: "Chatbots Inteligentes & RAG",
    subtitle: "Asistentes conversacionales con conocimiento personalizado",
    description:
      "Construcción de chatbots contextuales potenciados con Retrieval-Augmented Generation (RAG), bases de datos vectoriales (pgvector, Pinecone) y respuestas precisas con tus datos.",
    icon: "sparkles",
    badge: "Trending",
    features: [
      "Búsqueda semántica con Embeddings y Vector Stores",
      "RAG sobre bases de conocimiento, PDFs, manuales o bases de datos",
      "Interfaces de chat modernas con streaming en tiempo real",
      "Control de alucinaciones y respuestas contextualizadas",
    ],
  },
  {
    id: "web-scraping",
    title: "Web Scraping & Extracción de Datos",
    subtitle: "Crawlers rápidos, resilientes y estructurados",
    description:
      "Extracción automatizada de datos a gran escala desde plataformas web, superando protecciones complejas (Cloudflare, captchas) con Playwright, Puppeteer y proxies rotativos.",
    icon: "database",
    badge: "Especialidad",
    features: [
      "Scrapers headless de alto rendimiento con Playwright y Cheerio",
      "Bypass de bloqueos con rotación de proxies y emulación de huella digital",
      "Pipelines de limpieza, transformación y exportación (PostgreSQL, JSON, CSV)",
      "Tareas programadas (Cron jobs) y monitoreo en tiempo real",
    ],
  },
  {
    id: "fullstack-dev",
    title: "Desarrollo Web Full Stack",
    subtitle: "Aplicaciones completas de punta a punta",
    description:
      "Creación de aplicaciones web dinámicas de alto rendimiento combinando frontend moderno (Next.js, React, Angular) con backend estructurado (NestJS, Node.js, PostgreSQL).",
    icon: "code",
    features: [
      "Arquitecturas modernas (SSR, SPA, Server Components)",
      "Código fuertemente tipado de inicio a fin con TypeScript",
      "Sistemas de autenticación seguros y control de accesos RBAC",
      "Optimización de rendimiento (Core Web Vitals) y SEO",
    ],
  },
  {
    id: "backend-apis",
    title: "Arquitectura Backend & APIs RESTful",
    subtitle: "Servidores modulares, escalables y seguros",
    description:
      "Diseño de servicios backend basados en NestJS y PostgreSQL/TypeORM/Prisma, con validaciones estrictas mediante DTOs y pruebas automatizadas.",
    icon: "server",
    features: [
      "Arquitectura modular orientada a dominio (Clean / Hexagonal)",
      "Validación de esquemas con Zod y class-validator",
      "Modelado de base de datos relacional y migraciones seguras",
      "Manejo centralizado de excepciones y logging estructurado",
    ],
  },
  {
    id: "dashboards-ui",
    title: "Dashboards & Interfaces de Usuario",
    subtitle: "Experiencia visual interactiva y accesible",
    description:
      "Desarrollo de paneles administrativos y plataformas interactivas con Tailwind CSS v4, shadcn/ui, micro-animaciones Motion y soporte total para modo oscuro/claro.",
    icon: "layout",
    features: [
      "Diseño 100% responsivo para móviles, tablets y monitores",
      "Micro-interacciones fluidas a 60 FPS con Motion",
      "Accesibilidad garantizada bajo lineamientos WCAG 2.2",
      "Sistemas de diseño consistentes con tokens reutilizables",
    ],
  },
];
