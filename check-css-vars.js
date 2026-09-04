// Catches the bug that shipped in the footer and looked perfectly fine:
//
//   <span style="color:var(--dim2)">
//
// --dim2 is a radar-only alias. On the home page it was declared nowhere, so the
// declaration was invalid at computed-value time, the colour fell back to
// inherited, and the line that was meant to be dim simply was not. Nothing
// errors, nothing logs, and the page looks plausible - which is exactly why it
// survived a redesign.
//
// So: for every page, resolve the stylesheets it actually links, and check that
// every var(--x) it references is declared in one of them. A var() with a
// fallback is fine by definition and is not reported.
import { readFileSync, readdirSync } from 'fs'

const strip = t => t.replace(/\/\*[\s\S]*?\*\//g, ' ')   // a var() named in a
                                                          // comment is prose
let bad = 0
for (const page of readdirSync('src').filter(f => f.endsWith('.html'))) {
  const html = readFileSync(`src/${page}`, 'utf8')
  const sheets = [...html.matchAll(/<link rel="stylesheet" href="\/styles\/([^"]+)"/g)].map(m => m[1])
  const css = strip(sheets.map(f => readFileSync(`src/styles/${f}`, 'utf8')).join('\n'))

  const declared = new Set([...css.matchAll(/(--[\w-]+)\s*:/g)].map(m => m[1]))
  const inline = [...html.matchAll(/style="([^"]*)"/g)].map(m => m[1]).join(';')
  const refs = [...(css + ';' + inline).matchAll(/var\((--[\w-]+)\s*(,)?/g)]

  const missing = [...new Set(refs.filter(m => !m[2] && !declared.has(m[1])).map(m => m[1]))]
  if (missing.length) {
    bad++
    console.error(`  ${page}  ->  undeclared: ${missing.join(', ')}`)
    console.error(`     (loads: ${sheets.join(', ')})`)
  } else {
    console.log(`  ${page}  ok  (${declared.size} vars declared across ${sheets.length} sheets)`)
  }
}
if (bad) { console.error(`\n${bad} page(s) reference variables that do not exist on them.`); process.exit(1) }
console.log('\nno dangling CSS variables')
