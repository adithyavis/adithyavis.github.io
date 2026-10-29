// Bakes the rendered page into dist/index.html.
//
// Runs as the last step of `npm run build`, after the client build (dist/) and
// the server build of src/entry-server.tsx (dist-ssr/). Without it the shipped
// HTML is an empty <div id="root">, which crawlers that don't run JavaScript —
// and every link-preview bot — read as a blank page.
//
// Usage: node scripts/prerender.mjs

import { readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const TEMPLATE = resolve(ROOT, 'dist/index.html')
const SERVER_DIR = resolve(ROOT, 'dist-ssr')
const PLACEHOLDER = '<div id="root"></div>'

const { render } = await import(pathToFileURL(resolve(SERVER_DIR, 'entry-server.js')).href)

const template = readFileSync(TEMPLATE, 'utf8')
if (!template.includes(PLACEHOLDER)) {
  throw new Error(`${PLACEHOLDER} not found in ${TEMPLATE} — was it already prerendered?`)
}

const html = render()
// A replacer function, so any "$" in the markup is never read as a pattern.
writeFileSync(TEMPLATE, template.replace(PLACEHOLDER, () => `<div id="root">${html}</div>`))
rmSync(SERVER_DIR, { recursive: true, force: true })

console.log(`Prerendered ${TEMPLATE} (${(html.length / 1024).toFixed(1)} KB of markup)`)
