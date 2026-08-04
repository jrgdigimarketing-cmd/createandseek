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

## Deployment

- Cloudflare Pages is the intended deployment target
- The GitHub remote is connected, but the repository has not been pushed from this workspace yet
