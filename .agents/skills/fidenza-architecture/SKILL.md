---
name: fidenza-architecture
description: Enforces the Fidenza website folder architecture (components, layout, features, providers, app). Use when creating pages, sections, headers, footers, shared components, feature modules, or organizing frontend code in this repo.
---

# Fidenza project architecture

Follow this structure for every UI change. Do not dump page sections into `app/` or `components/ui/`.

## Folder map

```
app/                 # Next.js routes only (page.tsx, layout.tsx, loading, etc.)
config/              # Project config: site info, navigation, social
providers/           # App-wide providers (Lenis, theme, toaster, tooltip)
layout/              # Site chrome: Header, Footer, SiteShell, nav shells
features/            # Page/domain modules — one folder per area
components/          # Shared reusable building blocks (Icon, Container, etc.)
components/ui/       # shadcn primitives ONLY (add via `bunx shadcn@latest add`)
lib/                 # Utils, helpers (cn) shared across the whole app — not feature content
public/              # Static assets
```

## Where code goes

| Kind of code                          | Put it in                      | Example                                              |
| ------------------------------------- | ------------------------------ | ---------------------------------------------------- |
| Site name, contact, nav, social       | `config/`                      | `config/site.ts`, `config/navigation.ts`             |
| Route / URL                           | `app/`                         | `app/(site)/contacto/page.tsx`                       |
| Header, footer, page chrome           | `layout/`                      | `layout/header/`, `layout/footer/`                   |
| Page sections (hero, FAQ, CTA…)       | `features/<area>/sections/`    | `features/complaints/sections/hero.tsx`              |
| Feature-only UI (forms, widgets)      | `features/<area>/components/`  | `features/complaints/components/complaint-form.tsx`  |
| Feature copy / provider data          | `features/<area>/config/`      | `features/complaints/config/copy.ts`                 |
| Feature constants / options           | `features/<area>/consts/`      | `features/complaints/consts/form.ts`                 |
| Feature TypeScript types              | `features/<area>/types/`       | `features/complaints/types/index.ts`                 |
| Feature Zod schemas                   | `features/<area>/schema/`      | `features/complaints/schema/complaint-form.ts`       |
| Feature helpers (format, ids…)        | `features/<area>/utils/`       | `features/complaints/utils/file.ts`                  |
| Page composers                        | `features/<area>/`             | `features/complaints/complaints-page.tsx`            |
| Reusable across features              | `components/`                  | `components/icon.tsx`, `components/container.tsx`    |
| Button, Dialog, Input…                | `components/ui/`               | via shadcn CLI                                       |
| Theme / Lenis / Toaster wrap          | `providers/`                   | `providers/index.tsx`                                |

## Rules

1. **English feature folders** — `features/<area>/` and nested folders/files use **English** kebab-case (`success-cases`, `complaints`, `blog`). Do **not** name feature dirs in Spanish (`casos-exito` ✗ → `success-cases` ✓). Public routes under `app/(site)/` **may** stay Spanish for UX/SEO (`/casos-de-exito`, `/libro-de-reclamaciones`) while importing the English feature.
2. **No god files** — do not put everything in one archive. As soon as a feature is non-trivial, split into `consts/`, `utils/`, `schema/`, `types/`, `config/`, `components/`, `sections/`.
3. **`app/` routes stay thin** — compose metadata + import a page from `@/features/<area>`; no large sections in `page.tsx`.
4. **Sections compose; components implement** — `sections/` layout/chrome of a block; heavy forms/widgets live in `features/<area>/components/`.
5. **Do not put page sections in root `components/`** — those belong in `features/`.
6. **Shared ≠ feature-local** — if reused in 2+ features OR is a primitive wrapper (Icon, Container), it goes in `components/`.
7. **Never hand-grow `components/ui/`** — use shadcn CLI; app wrappers go in `components/`.
8. **Icons** — Hugeicons via `components/icon.tsx` for marketing/UI content; Lucide only where shadcn already uses it.
9. **Motion / Lenis** — animations in features/components; smooth scroll already in `providers/`.
10. **Brand tokens** — use CSS vars (`bg-primary`, `text-brand`, `bg-brand-soft`); colors live in `app/globals.css`.
11. **Keep schema lean** — Zod + `defaultValues` in `schema/`; enums/options in `consts/`; inferred/domain types in `types/`; pure helpers in `utils/`; copy in `config/`.

## Feature module pattern

Prefer this layout for non-trivial features (forms, multi-section pages). Omit folders you do not need.

`<area>` is always an **English** kebab-case name.

```
features/<area>/
  index.ts                 # public barrel
  <area>-page.tsx          # composes sections (client or server as needed)
  config/                  # copy, static content, feature-specific site data
    index.ts
  consts/                  # enums, option lists, limits (no Zod)
    index.ts
  types/                   # TypeScript types for the feature
    index.ts
  schema/                  # Zod schemas + defaultValues only
    index.ts
  utils/                   # helpers used only by this feature
    index.ts
  components/              # feature-local UI (forms, widgets) — not page sections
    index.ts
    complaint-form.tsx
  sections/                # page sections (hero, faq, form shell, cta…)
    index.ts
    hero.tsx
    form.tsx               # thin: layout + imports components/
```

### Naming: code vs URL

| Layer | Language | Example |
| ----- | -------- | ------- |
| `features/<area>/` | English | `features/success-cases/` |
| Symbols / files | English | `SuccessCasesPage`, `success-cases-page.tsx` |
| `app/(site)/…` route | Spanish OK | `app/(site)/casos-de-exito/page.tsx` |
| User-facing copy | Spanish | titles, descriptions, nav labels |

### Example: complaints

```
features/complaints/                    # English feature id
  complaints-page.tsx
  complaints-form-page.tsx
  config/copy.ts
  consts/form.ts
  types/index.ts
  schema/complaint-form.ts
  utils/file.ts
  components/complaint-form.tsx
  sections/form.tsx
  sections/hero.tsx
  sections/faq.tsx

app/(site)/libro-de-reclamaciones/      # Spanish public URL
  page.tsx
```

```tsx
// features/complaints/sections/form.tsx — thin section
import { ComplaintForm } from "../components";

export function ComplaintsForm() {
  return (
    <section>
      {/* heading / layout / sidebar */}
      <ComplaintForm />
    </section>
  );
}

// app/(site)/libro-de-reclamaciones/page.tsx — thin route
import { ComplaintsPage } from "@/features/complaints";

export default function Page() {
  return <ComplaintsPage />;
}
```

### Example: success cases

```
features/success-cases/                 # English — not features/casos-exito
  success-cases-page.tsx
  config/cases.ts
  consts/index.ts
  types/index.ts
  utils/index.ts
  components/case-story.tsx
  sections/hero.tsx
  sections/listing.tsx
  sections/cta.tsx

app/(site)/casos-de-exito/page.tsx      # Spanish URL for SEO
```

### Smaller features

Simple areas (e.g. a few marketing sections) can keep files flatter under `sections/` without `consts/` / `utils/` until complexity appears. Grow into the full pattern when you add forms, schemas, or many constants.

## Import aliases

```tsx
import { SiteShell, Header, Footer } from "@/layout";
import { ComplaintsPage } from "@/features/complaints";
import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { Providers } from "@/providers";
import { siteInfo, headerNavigation, social } from "@/config";
import { cn } from "@/lib/utils";
```

Inside a feature, prefer relative imports by concern:

```tsx
import { complaintsCopy } from "../config";
import { claimTypeOptions } from "../consts";
import { complaintFormSchema } from "../schema";
import type { ClaimType } from "../types";
import { formatFileSize } from "../utils";
import { ComplaintForm } from "../components";
```

## Decision checklist

Before creating a file, ask:

0. Is the feature folder name **English** kebab-case? (`success-cases`, not `casos-exito`)
1. Is it site data (name, nav, social, contact)? → `config/`
2. Is it a route? → `app/` (Spanish public path OK; import English `@/features/<area>`)
3. Is it header/footer/shell? → `layout/`
4. Is it a page section? → `features/<area>/sections/`
5. Is it a feature-local form/widget? → `features/<area>/components/`
6. Is it feature copy/content? → `features/<area>/config/`
7. Is it an enum/option/limit? → `features/<area>/consts/`
8. Is it a Zod schema? → `features/<area>/schema/`
9. Is it a feature type? → `features/<area>/types/`
10. Is it a feature helper? → `features/<area>/utils/`
11. Is it reusable across features? → `components/`
12. Is it a shadcn primitive? → `components/ui/` via CLI
13. Is it global app wiring? → `providers/`
