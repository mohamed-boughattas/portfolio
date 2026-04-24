# Astro Portfolio — Mohamed Boughattas

## Tech Stack
- Astro v6 (static output), TailwindCSS v4, DaisyUI v5, Lucide icons, @tailwindcss/typography
- Content collections defined in `src/content.config.ts` (glob loader)
- English only, no i18n

## Commands
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- No lint/typecheck/test commands configured
- Always run `npm run build` after changes to verify compilation

## Deployment
- Push to `main` triggers GitHub Actions (`.github/workflows/deploy.yml`)
- Site: `https://www.mohamedboughattas.com`
- **No `base` path** — do NOT add `base: "/portfolio/"` to astro config; assets are served from root
- GitHub Actions uses Node 22

## Project Structure
- `src/content/` — Content collections (hero, about, work, projects, contact, general)
- `src/components/` — Astro components (Hero, About, Skills, Timeline, Projects, Contact, Navbar, ThemeToggle, Dock, FabFlower, SkillBadge, ProjectCard)
- `src/layouts/` — Layout.astro, ProjectLayout.astro
- `src/pages/` — index.astro, projects/index.astro, projects/[...slug].astro
- `src/utils/` — iconMapper.ts, date.ts (shared formatPeriod/calculateDuration)
- `src/styles/global.css` — Tailwind + DaisyUI config (light/dark themes only)
- `src/assets/` — Images in subdirs (hero/, projects/); referenced via `@assets/` alias
- `CV_EN.yaml`, `CV_FR.yaml` — Source CV files (not part of build)

## Content Architecture
- Hero, contact, general: single-entry YAML (`index.yaml`)
- About: single-entry Markdown (`index.md`)
- Work: multi-entry Markdown (spareka.md, engie.md, sony.md)
- Projects: multi-entry, each with its own subfolder
- General config controls section visibility (showAboutSection, showSkillsSection, etc.)

## Conventions
- Git commits: `type: subject` format (fix:, chore:, refactor:, docs:, feat:)
- DaisyUI utility classes for styling (no custom CSS classes except .fade-up)
- Components accept props from content collections, no locale/i18n
- Skills section uses hardcoded category arrays with shields.io badge URLs
- Timeline component supports "timeline" and "list" variants (currently using "timeline")