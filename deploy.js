// Copies the Vite build from dist/ up to the repo root, which is what GitHub
// Pages serves. Only touches what the build produced — hand-maintained files at
// the root (privacy.html, ads.txt, profile.json, the résumé PDFs) are never
// considered, so they cannot be removed by a deploy.
import { cpSync, rmSync, existsSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const dist = join(root, 'dist')

if (!existsSync(dist)) {
  console.error('no dist/ — run `npm run build` first')
  process.exit(1)
}

// assets/ is fully owned by the build, so replace it rather than merging;
// otherwise old hashed files pile up forever.
const assets = join(root, 'assets')
if (existsSync(assets)) rmSync(assets, { recursive: true, force: true })

for (const entry of readdirSync(dist)) {
  cpSync(join(dist, entry), join(root, entry), { recursive: true })
  console.log('  ->', entry)
}
console.log('deployed dist/ to the repo root')
