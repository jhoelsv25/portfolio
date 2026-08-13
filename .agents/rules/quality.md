# Quality / Husky

El trabajo no está listo si no pasa los checks del repo. Husky es la puerta de entrada al commit.

## Hard rules

- **Never skip hooks** — no uses `--no-verify`, `--no-gpg-sign`, ni bypass de Husky/lint-staged.
- **Fix, don't bypass** — si el pre-commit falla, corrige ESLint/Prettier (o el error que reporte) y vuelve a intentar.
- **Before commit (when asked)** — el staged code debe pasar Husky. Preferible validar antes con:

```bash
bun run check   # typecheck + lint + format:check
```

## Qué corre Husky

Pre-commit (`.husky/pre-commit`) → **lint-staged**:

- `*.{js,jsx,ts,tsx,mjs,cjs}` → `eslint --fix --max-warnings=0` + `prettier --write`
- `*.{json,md,css,scss,yml,yaml}` → `prettier --write`
- `.agents/**` skills se omiten del lint/format de app

## Expectativa del agente

1. Tras cambios de app, si el usuario pide commit (o el trabajo debe quedar mergeable), asegúrate de que lint/format/typecheck pasen.
2. Si un hook falla en el commit: arregla y crea un **nuevo** commit (no amend salvo las reglas de git del usuario).
3. No dejes el árbol en un estado que Husky rechazaría.
