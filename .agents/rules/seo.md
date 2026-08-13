# SEO rule

Defaults live in `config/metadata.ts`. Every public route must set page metadata in its thin `app/**/page.tsx`. Deep guide: `.agents/skills/seo/SKILL.md`.

## Hard rules

- **Every route exports metadata** — `export const metadata` or `generateMetadata`. Never ship a public page with only the site default title/description.
- **Locale** — Spanish Peru: Open Graph `locale: "es_PE"` (site default). Copy in Spanish.
- **Titles** — unique, useful; use the template `%s | Fidenza` from `siteMetadata` when possible (page title segment, not a duplicated full brand string unless intentional).
- **Descriptions** — one clear sentence; no keyword stuffing.
- **Canonical / URLs** — absolute site URL from `siteInfo.url`; set `openGraph.url` (and `alternates.canonical` when needed) to the real path.
- **Index policy**
  - Public marketing pages → `index: true`, `follow: true`
  - Forms, private portals, thank-you / ephemeral flows → `robots: { index: false }` (follow as appropriate)
- **Sitemap** — add new indexable routes to `app/sitemap.ts`. Do **not** list `noindex` form/private URLs.
- **robots.txt** — keep via `app/robots.ts`; do not block assets needed to render.
- **OG image** — site default from `app/opengraph-image.tsx` / `twitter-image.tsx`. Per-route OG only when it materially helps.
- **Structured data** — add JSON-LD when the page type benefits (Organization, Article, FAQ, Service); keep it in the feature/page that owns the content.

## Where it lives

| Concern | Place |
| -------- | ----- |
| Site-wide defaults | `config/metadata.ts` + `config/site.ts` |
| Per-route title/description/robots | `app/(site)/…/page.tsx` |
| Crawl rules | `app/robots.ts` |
| URL list | `app/sitemap.ts` |
| Default social image | `app/opengraph-image.tsx` |

## Expectativa del agente

Al crear o exponer una ruta nueva: metadata en la page + actualizar sitemap si es indexable + `noindex` si es formulario/privado.
