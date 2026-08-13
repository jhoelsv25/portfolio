<div align="center">

# Jhoel Silvestre Vargas | Portfolio

**Ingeniero de Sistemas & Desarrollador Full Stack**  
Especializado en Arquitecturas Web de Alto Rendimiento, Backend con NestJS, Frontend con Angular/Next.js y Soluciones con Inteligencia Artificial.

[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-React-ea580c?style=flat-square)](https://motion.dev/)
[![Bun](https://img.shields.io/badge/Bun-Runtime-fbf0df?style=flat-square&logo=bun)](https://bun.sh/)

[🌐 **Ver Portafolio en Vivo**](https://jhoel-silvestre.web.app) • [💼 **LinkedIn**](https://www.linkedin.com/in/jhoel-silvestre-vargas-09737525b/) • [✉️ **Contacto**](mailto:jhoelsv.25@gmail.com)

</div>

---

## 🌟 Características Principales

- **Arquitectura Modular Fidenza**: Código desacoplado por características (`features/`, `components/`, `config/`, `layout/`, `providers/`).
- **Showcase Interactivo de Proyectos**:
  - Galería de capturas en alta resolución con controles interactivos.
  - Vistas de ventana de navegador macOS y enlaces directos a casos de estudio dedicados (`/proyectos/[id]`).
- **Línea de Tiempo Profesional**: Trayectoria completa en empresas líderes (JLH Corredores, Wavys Technologies, Freelance, JHUNO SAC).
- **Rendimiento & Core Web Vitals**: Optimización de imágenes (`next/image`), fuentes del sistema y SSR fluido.
- **Micro-interactividad & Animaciones**: Animaciones cinéticas con Motion y scroll suave con Lenis.
- **Tema Claro / Oscuro**: Sistema de tokens de diseño moderno con Tailwind CSS v4.
- **SEO & Metadatos Técnicos**: OpenGraph dinámico, Sitemap XML, robots.txt y datos estructurados JSON-LD Schema.org.

---

## 🛠️ Stack Tecnológico

| Capa                        | Tecnologías                                                                          |
| :-------------------------- | :----------------------------------------------------------------------------------- |
| **Frontend**                | Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Motion, Lucide Icons |
| **Backend & APIs**          | NestJS, Node.js, RESTful APIs, Supabase, Webhooks                                    |
| **Bases de Datos**          | PostgreSQL, Prisma ORM, TypeORM, MongoDB                                             |
| **Inteligencia Artificial** | Agentes de IA, Modelos LLM (OpenAI API), Automatización de flujos                    |
| **Herramientas & Tooling**  | Bun, Biome/ESLint, Prettier, Git, Playwright                                         |

---

## 📁 Estructura del Proyecto

```text
├── app/                        # Rutas y páginas de Next.js App Router
│   ├── layout.tsx              # Layout raíz con providers, fuentes y SEO
│   ├── page.tsx                # Portada principal del portafolio
│   ├── experiencia/page.tsx    # Página de trayectoria laboral completa
│   ├── proyectos/page.tsx      # Catálogo completo de proyectos
│   ├── proyectos/[id]/page.tsx # Casos de estudio individuales
│   ├── not-found.tsx           # Página 404 personalizada
│   ├── error.tsx               # Error boundary para clientes
│   ├── global-error.tsx        # Error boundary para la raíz
│   └── loading.tsx             # Skeleton de carga suspense
├── components/                 # Componentes UI compartidos (Logo, Container, etc.)
├── config/                     # Datos tipados (proyectos, experiencia, skills, navegación)
├── features/portfolio/         # Módulo principal del portafolio
│   ├── components/             # Componentes específicos (HeroTerminal, ProjectCard, ContactForm)
│   └── sections/               # Secciones de la página (Hero, Projects, Experience, Skills, Contact)
├── layout/                     # Header con navegación y Footer
├── providers/                  # Providers de tema y animaciones
└── public/                     # Assets estáticos, capturas de proyectos y favicon
```

---

## 🚀 Inicio Rápido

### Prerrequisitos

Se recomienda tener instalado **[Bun](https://bun.sh/)** (o Node.js 20+).

### Instalación

1. Clona el repositorio:

   ```bash
   git clone git@github.com:jhoelsv25/portfolio.git
   cd portfolio
   ```

2. Instala las dependencias:

   ```bash
   bun install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   bun dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 🧪 Calidad de Código & Validación

```bash
# Formateo automático de código
bun run format

# Validación de TypeScript, ESLint y Prettier
bun run check

# Compilación para producción
bun run build
```

---

## 📬 Contacto

- **Nombre**: Jhoel Silvestre Vargas
- **Email**: [jhoelsv.25@gmail.com](mailto:jhoelsv.25@gmail.com)
- **LinkedIn**: [linkedin.com/in/jhoel-silvestre-vargas-09737525b](https://www.linkedin.com/in/jhoel-silvestre-vargas-09737525b/)
- **GitHub**: [github.com/jhoelsv25](https://github.com/jhoelsv25)

---

<div align="center">
Desarrollado con ❤️ y código limpio por <strong>Jhoel Silvestre</strong>.
</div>
