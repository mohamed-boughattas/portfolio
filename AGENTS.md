# Astro Portfolio — Mohamed Boughattas

## Tech Stack
- Astro v6 (static output), TailwindCSS v4, DaisyUI v5, Lucide icons
- Content collections defined in `src/content.config.ts` (glob loader)
- English only, no i18n

## Commands
- Build: `npm run build`
- Dev: `npm run dev`
- No dedicated lint/typecheck/test commands configured

## Project Structure
- `src/content/` — YAML/MD content collections (hero, about, work, projects, contact, general)
- `src/components/` — Astro components (Hero, About, Skills, Timeline, Projects, Contact, Navbar, ThemeToggle)
- `src/layouts/` — Layout.astro, ProjectLayout.astro
- `src/pages/` — index.astro, projects/index.astro, projects/[...slug].astro
- `src/utils/` — iconMapper.ts, date.ts (shared formatPeriod/calculateDuration)
- `src/styles/global.css` — Tailwind + DaisyUI config (light/dark themes only)
- `CV_EN.yaml`, `CV_FR.yaml` — Source CV files (not part of build)

## Content Architecture
- Hero, about, contact, general: single-entry collections (`index.yaml`/`index.md`)
- Work: multi-entry (spareka.md, engie.md, sony.md)
- Projects: multi-entry, each with its own subfolder
- General config controls section visibility (showAboutSection, showSkillsSection, etc.)

## Conventions
- DaisyUI utility classes for styling (no custom CSS classes except .fade-up)
- Components accept props from content collections, no locale/i18n
- Skills section uses hardcoded category arrays with shields.io badge URLs
- Timeline component supports "timeline" and "list" variants (currently using "timeline")
- Always run `npm run build` after making changes to verify everything compiles
