# Agent workspace (`.agents`)

Fuente de verdad de cómo deben trabajar los agentes en este repo.

```
.agents/
  rules/     # reglas del proyecto (siempre relevantes)
  skills/    # skills por dominio (arquitectura, Next, Zod, RHF…)
  memory/    # notas opcionales / contexto durable del equipo
  tools/     # scripts o helpers usados por agentes
```

## Cómo se relaciona con Cursor

| Carpeta | Rol |
| -------- | --- |
| `.agents/` | Canon del proyecto (rules + skills + notas) |
| `.cursor/rules/` | Reglas nativas de Cursor (`.mdc`, `alwaysApply` / globs) |
| `.cursor/skills/` | Enlace a `.agents/skills` (misma fuente, sin duplicar) |

Entrada humana/agente: `AGENTS.md` en la raíz del repo.

## Rules vs skills

- **Rules** — convenciones cortas que siempre (o casi siempre) aplican. Ejemplo: dónde poner archivos.
- **Skills** — guías profundas por tema. Se leen cuando la tarea lo necesita.

## Mantener sync

1. Edita skills solo en `.agents/skills/`.
2. Edita reglas en `.agents/rules/*.md` **y** refleja el resumen en el `.mdc` correspondiente bajo `.cursor/rules/`.
3. Detalle completo del feature module: `.agents/skills/fidenza-architecture/SKILL.md`.
