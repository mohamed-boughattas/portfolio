# Mohamed Boughattas — Portfolio

Personal portfolio website built with Astro, showcasing my experience as a Senior Data Engineer.

## Tech Stack

- **Astro** v6 (static output)
- **TailwindCSS** v4 + **DaisyUI** v5
- **Lucide** icons
- Content collections (YAML/MD) driven by content files

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |

## Project Structure

- `src/content/` — Content collections (hero, about, work, projects, contact, general)
- `src/components/` — Astro components
- `src/layouts/` — Page layout
- `src/pages/` — Routes (index, projects)
- `src/utils/` — Shared utilities (iconMapper, date helpers)
- `src/styles/global.css` — Tailwind + DaisyUI config
- `CV_EN.yaml` — Source CV file (not part of build)

## Customization

1. Edit content files in `src/content/` to update your information
2. Modify `src/content/general/index.yaml` to toggle section visibility
3. Update skills categories in `src/components/Skills.astro`
4. Replace images in `src/assets/`

## Deploy

Push to `main` branch — GitHub Actions auto-deploys to GitHub Pages at [www.mohamedboughattas.com](https://www.mohamedboughattas.com).

## License

MIT
