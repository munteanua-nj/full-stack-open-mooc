<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project notes

- **In-memory data** — `app/services/blogs.ts` uses a hardcoded array. Despite `drizzle-orm` + `@neondatabase/serverless` deps, no DB schema, config, or connection exists.
- **No tests** — no test framework, files, or CI.
- **Commands**: `npm run dev`, `build`, `start`, `lint` (no format script).
- **Path alias**: `@/*` → `./*`
- **Tailwind v4** with `@tailwindcss/postcss`; ESLint flat config (`eslint.config.mjs`).
