<!-- BEGIN:nextjs-agent-rules -->

### 1. Core Stack & Architecture

- Use TypeScript strictly for all files.
- Use App Router exclusively.
- Prefer Server Components (`RSC`) by default. Only use `"use client"` when interactivity or React hooks are required.
- Follow a feature-based folder structure (e.g., group components, hooks, and services by feature rather than type).
- Keep public invitation pages strictly SEO-friendly (prefer Server-Side Rendering or Static Generation for these).

### 2. Naming Conventions

- File names must be in `kebab-case` with specific suffixes based on their role.
  - Components: `[name].component.tsx` (e.g., `home-footer.component.tsx`, `invite-button.component.tsx`)
  - Hooks: `use-[name].hook.ts` (e.g., `use-auth.hook.ts`)
  - Services/API: `[name].service.ts` (e.g., `user.service.ts`)
  - Types/Interfaces: `[name].type.ts` or `[name].interface.ts`
  - Constants/Configs: `[name].constant.ts` or `[name].config.ts`

### 3. Imports & Code Reusability

- Use `@/*` absolute imports for all internal paths.
- **Strict Reusability:** Always check for and utilize existing shared utilities, configuration variables, and constants (e.g., in `src/utils` or `src/config`). Only create new helper functions or configuration variables if a suitable one does not already exist.

### 4. Data Fetching & State Management

- Do NOT put raw API calls (like `fetch` or `axios`) directly inside UI components. Abstract them into service files.
- Use **SWR** (`swr`) for all client-side data fetching and caching. UI components should call custom hooks that wrap SWR, rather than calling SWR directly in the view logic.

<!-- END:nextjs-agent-rules -->
