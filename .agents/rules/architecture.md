# Architecture rule

Place new UI code in the correct folder.

## Top-level

- `config/` — site info, navigation, social (shared by header/footer)
- `app/` — routes only (compose pages; keep thin)
- `layout/` — Header, Footer, SiteShell
- `features/<area>/` — domain modules (see internal shape below)
- `components/` — shared blocks (Icon, Container…)
- `components/ui/` — shadcn CLI only
- `providers/` — Lenis, theme, toaster
- `lib/` — app-wide utils (`cn`) — not feature content

## Feature module (when needed)

```
features/<area>/
  sections/      # page sections (hero, faq, cta shells)
  components/    # feature forms/widgets — keep sections thin
  config/        # copy / content
  consts/        # enums, options, limits
  types/         # TypeScript types
  schema/        # Zod + defaultValues only
  utils/         # feature helpers
```

## Hard rules

- **English feature folders** — `features/<area>/` in English kebab-case (`success-cases`, `complaints`). Never Spanish feature dirs (`casos-exito` ✗). Public `app/(site)/…` URLs may stay Spanish (`/casos-de-exito`).
- **No god files** — do not put schema + consts + utils + copy + UI in one archive. Split by concern into the folders above as soon as a feature is non-trivial.
- **Split by concern** (feature-local):
  - enums / options / limits → `consts/`
  - pure helpers (format, ids, guards) → `utils/`
  - Zod + `defaultValues` only → `schema/`
  - TS types → `types/`
  - marketing/copy text → `config/`
  - heavy forms/widgets → `components/`
  - page blocks (hero, faq…) → `sections/` (thin: compose, don't own all logic)
- Nav/contact/social live in `@/config` — do not hardcode routes in header/footer.
- Pages import from `@/layout` + `@/features/*` — no large sections in `app/page.tsx`.
- Do not put page sections in root `components/`.
- Heavy forms live in `features/<area>/components/`; section files compose and import them.
- Do not hand-grow `components/ui/`.
- Brand tokens: `app/globals.css` (`primary`, `brand`, `brand-soft`…).
- Icons: Hugeicons via `@/components/icon`; Lucide only inside shadcn UI.

Full patterns: `.agents/skills/fidenza-architecture/SKILL.md`.
