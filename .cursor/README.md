# Cursor project config (`.cursor`)

Config nativa de Cursor para este repo. La fuente de verdad de skills y reglas largas está en `.agents/`.

```
.cursor/
  rules/     # reglas .mdc (alwaysApply / globs)
  skills/    # symlink → ../.agents/skills
```

## Rules

| File                             | alwaysApply | Purpose                            |
| -------------------------------- | ----------- | ---------------------------------- |
| `rules/project-architecture.mdc` | yes         | Dónde poner código (resumen)       |
| `rules/project-quality.mdc`      | yes         | Pasar Husky / no saltar pre-commit |
| `rules/project-seo.mdc`          | yes         | Metadata, sitemap, noindex         |

Detalle: `.agents/rules/architecture.md`, `quality.md`, `seo.md`, skill `fidenza-architecture` / `seo`.

## Skills

`.cursor/skills` apunta a `.agents/skills` para no duplicar. Edita skills solo bajo `.agents/skills/`.

## Entry

Lee primero `AGENTS.md` en la raíz del repo.
