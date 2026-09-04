import { defineConfig } from 'vite'
import { resolve } from 'path'

// Deployment shape, and why it is like this:
//
// GitHub Pages serves this repo from `main` at the ROOT, behind Cloudflare, so
// whatever sits at the repo root IS the live site. Vite's default `dist/` would
// never be served.
//
// The obvious shortcut - pointing outDir straight at the repo root - works but
// Vite warns about it, and the warning is correct: outDir would be a parent of
// root (`src/`), so a build could overwrite its own sources.
//
// So: build to `dist/` normally, then `npm run deploy` copies the built files
// up to the root. Sources in `src/`, output in `dist/`, published at the root,
// and nothing can clobber anything.
// Cloudflare Workers Builds runs `npx wrangler deploy`, and wrangler publishes
// `dist/` - not the repo root. So dist/ has to be the COMPLETE site, or the
// files that only ever lived at the root vanish the moment that deploy lands:
// ads.txt (fetched by Google's ad crawlers at the domain root) and privacy.html
// (the privacy-policy URL on the Play listings) among them. `public/` is the
// single source for those pass-through files; Vite copies it into dist/ verbatim.
export default defineConfig({
  root: 'src',
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        apps: resolve(__dirname, 'src/apps.html'),
        // radar: parked 2026-09-04 - the page lives in AiInstructer at
        // .ai-context/portfolio-radar/ with a README on putting it back
      },
    },
  },
  server: { port: 5173, open: false },
})
