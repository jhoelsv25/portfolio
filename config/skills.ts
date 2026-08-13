export interface SkillCategory {
  title: string;
  description: string;
  iconName:
    | "bot"
    | "database-search"
    | "server"
    | "layout"
    | "database"
    | "shield-check";
  skills: {
    name: string;
    level: "Avanzado" | "Intermedio - Avanzado" | "Intermedio";
    featured?: boolean;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "IA, Agentes & Chatbots",
    description: "Modelos LLMs, flujos autónomos, RAG y búsqueda vectorial",
    iconName: "bot",
    skills: [
      {
        name: "Agentes de IA & Tool Calling",
        level: "Avanzado",
        featured: true,
      },
      {
        name: "OpenAI / Claude / Gemini APIs",
        level: "Avanzado",
        featured: true,
      },
      {
        name: "Chatbots Contextuales & RAG",
        level: "Avanzado",
        featured: true,
      },
      {
        name: "Embeddings & Vector Stores (pgvector)",
        level: "Intermedio - Avanzado",
        featured: true,
      },
      { name: "LangChain / LlamaIndex Basics", level: "Intermedio - Avanzado" },
      { name: "Prompt Engineering & Guardrails", level: "Avanzado" },
    ],
  },
  {
    title: "Web Scraping & Extracción",
    description:
      "Crawlers headless de alta velocidad, proxies y estructuración",
    iconName: "database-search",
    skills: [
      {
        name: "Playwright / Puppeteer Automation",
        level: "Avanzado",
        featured: true,
      },
      { name: "Cheerio / HTML Parsers", level: "Avanzado", featured: true },
      {
        name: "Rotación de Proxies & Anti-bot",
        level: "Intermedio - Avanzado",
        featured: true,
      },
      { name: "Pipelines de Limpieza & ETL", level: "Avanzado" },
      { name: "Extracción Masiva de E-commerce & Leads", level: "Avanzado" },
    ],
  },
  {
    title: "Backend & APIs",
    description: "Servidores modulares, arquitecturas limpias y APIs RESTful",
    iconName: "server",
    skills: [
      { name: "NestJS", level: "Avanzado", featured: true },
      { name: "Node.js", level: "Avanzado", featured: true },
      { name: "TypeScript", level: "Avanzado", featured: true },
      { name: "REST APIs & DTOs Validados", level: "Avanzado", featured: true },
      { name: "Autenticación JWT / Proxies de Sesión", level: "Avanzado" },
      {
        name: "Arquitectura Hexagonal / Modular",
        level: "Intermedio - Avanzado",
      },
    ],
  },
  {
    title: "Frontend & UI",
    description: "Interfaces interactivas, fluidas, accesibles y responsivas",
    iconName: "layout",
    skills: [
      { name: "Next.js (App Router)", level: "Avanzado", featured: true },
      { name: "Angular", level: "Avanzado", featured: true },
      { name: "React 19", level: "Avanzado", featured: true },
      { name: "Tailwind CSS v4", level: "Avanzado", featured: true },
      { name: "shadcn/ui & Radix/Base-UI", level: "Avanzado", featured: true },
      { name: "Motion / Framer Motion", level: "Intermedio - Avanzado" },
    ],
  },
  {
    title: "Bases de Datos & ORMs",
    description: "Modelado relacional, vector search y optimización de queries",
    iconName: "database",
    skills: [
      { name: "PostgreSQL & pgvector", level: "Avanzado", featured: true },
      { name: "Prisma ORM", level: "Avanzado", featured: true },
      { name: "TypeORM", level: "Avanzado", featured: true },
      { name: "MongoDB", level: "Intermedio - Avanzado" },
      { name: "SQL & Migraciones Estrictas", level: "Avanzado" },
    ],
  },
  {
    title: "Testing, Calidad & DevOps",
    description: "Pruebas automatizadas, linters y estándares de ingeniería",
    iconName: "shield-check",
    skills: [
      { name: "Playwright E2E Testing", level: "Avanzado", featured: true },
      { name: "Jest Unit Tests", level: "Intermedio - Avanzado" },
      { name: "Git / GitHub Actions", level: "Avanzado", featured: true },
      { name: "Docker", level: "Intermedio" },
      { name: "Zod Schema Validation", level: "Avanzado", featured: true },
      { name: "Prettier / ESLint Quality Pipelines", level: "Avanzado" },
    ],
  },
];
