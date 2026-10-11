# The Cute Coding Atelier ✿

A pastel, hand-crafted portfolio for a full-stack developer — React + TypeScript + Vite,
prerendered to static HTML. No animation or UI libraries; motion is CSS + one IntersectionObserver.

## Run it

```bash
npm install
npm run dev        # local dev server
npm run build      # type-check, build, and prerender to dist/
npm run preview    # serve the production build
```

Deploy the `dist/` folder to any static host.

## Make it yours

Everything personal lives in **`src/content/site.ts`** — name, intro, links, projects, skills,
journey, process. It currently holds **fictional sample data** (person, projects, employers,
school) written for a class presentation.

1. Replace the sample values (the types in that file document every field).
2. Put images / your résumé in `public/` and reference them as `/file-name.ext`.
3. `isPlaceholder: true` brings back the yellow ribbon and "sample" labels if you ever want them.

Optional fields (`resumeUrl`, `email`, project `liveUrl` / `sourceUrl` / `image` / `outcome`,
`about.portrait`, …) hide their UI when left out — nothing fake is ever shown in their place.
Only add outcomes and metrics you can verify.

## Where things are

| Path | What |
| --- | --- |
| `src/content/site.ts` | All content + its types |
| `src/styles/tokens.css` | Design tokens: colour (light + dark), type, shape, motion |
| `src/styles/base.css` | Reset, shared primitives (buttons, chips…), motion system |
| `src/components/` | One component + co-located CSS per section |
| `src/hooks.ts` | Scroll reveal + active-section tracking |
| `scripts/prerender.mjs` | Writes the rendered HTML into `dist/index.html` |

## Not included (add when needed)

- **Social preview image / canonical URL** — add `og:image` and `<link rel="canonical">` to
  `index.html` once you have a real image and production URL.
- **Contact form** — there is no backend, so contact is an honest `mailto:` + copy button.
- **Linting / unit tests** — `npm run typecheck` (strict TypeScript) is the configured check.
