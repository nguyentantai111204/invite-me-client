<!-- BEGIN:nextjs-agent-rules -->

### 1. Core Stack & Architecture

- Use TypeScript strictly for all files.
- Use App Router exclusively.
- Prefer Server Components (`RSC`) by default. Only use `"use client"` when interactivity or React hooks are required.
- Follow a feature-based folder structure (e.g., group components, hooks, and services by feature rather than type).
- Keep public invitation pages strictly SEO-friendly (prefer Server-Side Rendering or Static Generation for these).

### 2. Naming Conventions

- File names must be in `kebab-case` with specific suffixes based on their role:
  - Components: `[name].component.tsx` (e.g., `home-footer.component.tsx`, `button.component.tsx`)
  - Hooks: `use-[name].hook.ts` (e.g., `use-auth.hook.ts`, `use-invitation.hook.ts`)
  - Services/API: `[name].service.ts` or `[name].api.ts` (e.g., `invitation.service.ts`, `auth.api.ts`)
  - Types/Interfaces: `[name].type.ts` or `[name].interface.ts`
  - Constants/Configs: `[name].constant.ts` or `[name].config.ts`
  - Styles: `[name].styles.ts`

### 3. Layout System & No-Hardcoded-Flex Rule

- **No Hardcoded Flex Properties:** NEVER write manual inline flex properties (e.g., `display: "flex"`, `flexDirection: ...`, `alignItems: ...`, `justifyContent: ...`) directly in `sx={{ ... }}` or components.
- **Always Use Custom Stacks:** Use custom Stack components in `@/components/ui`:
  - `StackRow`, `StackRowAlignJustCenter` (alias `StackRowCenter`), `StackRowAlignJustBetween` (alias `StackRowBetween`), `StackRowAlignJustStart`, `StackRowAlignJustEnd`, `StackRowWrap`.
  - `StackCol`, `StackColAlignJustCenter` (alias `StackColCenter`), `StackColAlignJustBetween` (alias `StackColBetween`), `StackColAlignJustStart`, `StackColAlignJustEnd`.
  - `StackCenter`.
- **Standalone Layout Styles for Non-Stack Elements:** When styling `TableCell`, `Box`, `Paper`, or custom wrappers, spread standalone layout tokens from `@/theme` (`stackRowAlignJustCenterStyle`, `stackRowAlignJustBetweenStyle`, `centerStyle`, `flex1Style`, `stackColumnStyle`, etc.).

### 4. 4px Grid Rule & Spacing System (Padding, Margin, Gap, BorderRadius)

- All `padding`, `margin`, `gap`, and `borderRadius` MUST strictly follow the **4px Base Grid Rule** (divisible by 4):
  - Values: `4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 80, 96, 112, 128, ...`
  - Spacing Tokens in `@/theme`: `paddings`, `margins`, `gaps`, `spacingTokens`.
  - Border Radius Tokens in `@/theme` (`borderRadius`): `xs: 4`, `sm: 8`, `md: 12`, `lg: 16`, `xl: 20`, `2xl: 24`, `3xl: 32`, `full: 9999`.
  - NEVER hardcode arbitrary values that are not divisible by 4 (e.g., avoid `10px`, `13px`, `15px`, `25px`).

### 5. Typography System & No-Hardcoded-Typo Rule

- **No Hardcoded Typography:** NEVER hardcode arbitrary font weights, font sizes, line heights, or letter spacings.
- **Use Standard Typography Tokens from `@/theme`:**
  - `fontWeights`: `light` (300), `regular` (400), `medium` (500), `semibold` (600), `bold` (700), `extrabold` (800), `black` (900).
  - `fontSizes`: `xs`, `sm`, `base`/`md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`, `8xl`.
  - `lineHeights`: `none`, `tight`, `snug`, `normal`, `relaxed`, `loose`.
  - `letterSpacings`: `tighter`, `tight`, `normal`, `wide`, `wider`, `widest`, `mega`.
  - `fontFamilies`: `sans`, `serif`, `script`, `vietnamese`.
- **Global App Font:** Use `Inter` (`fontSans`) for Dashboard, UI, and Marketing.
- **Template Fonts (Zero-Global-Bloat Rule):** Scoped fonts for invitation templates (`Playfair Display`, `Great Vibes`, `Be Vietnam Pro`, `Cormorant Garamond`, `Cinzel`, etc.) must only be loaded on-demand for specific templates or `/i/[slug]` pages. NEVER import multiple decorative fonts into the root layout.

### 6. Color System, Shadows & Illustrations

- **No Hardcoded Colors or Box-Shadows:** All colors, gradients, and shadows MUST be imported from `@/theme` (`colors`, `shadows`). If a token does not exist yet, declare it centrally in `src/theme/colors.ts` or `src/theme/shadows.ts`.
- Strictly adhere to the Brand & Wedding Theme Color Palette from `@/theme` (`colors.gold`, `colors.rose`, `colors.brand`, `colors.background`, `colors.status`, `colors.divider`, `colors.border`).
- Shadows in `@/theme`: `shadows.card`, `shadows.cardHover`, `shadows.goldSm`, `shadows.goldMd`, `shadows.goldLg`, `shadows.goldXl`, `shadows.modal`, `shadows.avatar`, `shadows.sm`, `shadows.md`, `shadows.lg`, etc.
- Use dedicated royalty illustrations:
  - 404 Not Found: `/images/notfound.png`
  - 500 Server Error: `/images/error.png`
  - Empty State: `/images/empty.png`
  - Brand Logo: `/images/logo.png`

### 7. Comment Conventions

- Always use concise `//` comments (1 to 2 lines maximum, clear and easy to understand).
- Do NOT use redundant multi-line banner comments (`/* ====== */` or long `/** ... */` blocks) unless writing JSDoc for complex library APIs.

### 8. Data Fetching & State Management

- Do NOT put raw API calls (like `fetch` or `axios`) directly inside UI components. Abstract them into service files (`src/services/api/` or feature services).
- Use **SWR** (`swr`) for all client-side data fetching and caching. UI components should call custom hooks that wrap SWR, rather than calling SWR directly in the view logic.

<!-- END:nextjs-agent-rules -->
