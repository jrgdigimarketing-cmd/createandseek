# Create and Seek

Create and Seek is a SvelteKit brochure website built from the Figma reference in `Create and seek ver_2.0.png` and the linked design file.

## Stack

- SvelteKit
- Tailwind CSS
- Cloudflare Pages adapter

## Local Development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run check
npm run build
```

## Project Notes

- Shared content lives in `src/lib/data/`
- Shared shell and components live in `src/lib/components/` and `src/lib/layouts/`
- Section files live in `src/lib/sections/`
- Local design assets are stored in `static/images/create-and-seek/`
- Project-specific architecture notes live in `docs/`
- Reusable Codex prompting guidance lives in personal skills, not in this project's docs

## Deployment

- Cloudflare Pages is the intended deployment target
- The GitHub remote is connected, but the repository has not been pushed from this workspace yet

## Codex Workflow

Use the reusable SvelteKit/Figma skills for prompting rather than copied prompt files:

- `$sveltekit-figma-handoff` for turning approved Figma references and project docs into an implementation brief
- `$sveltekit-tailwind-build` for building approved Figma designs in the SvelteKit/Tailwind architecture
- `$sveltekit-content-sections` for focused section copy, SEO, and content revisions
- `$sveltekit-qa-launch` for final QA, launch checks, and review punch lists

Keep `docs/` focused on Create and Seek project state: design system, component registry, layout primitives, sitemap, project state, and Codex rules.
