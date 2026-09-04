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
export default defineConfig({
  root: 'src',
  publicDir: false,
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
