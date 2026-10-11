// Renders the app to static HTML after `vite build`, so the portfolio is
// readable (and indexable) even before — or without — JavaScript.
import { readFileSync, rmSync, writeFileSync } from 'node:fs'

const { render } = await import('../dist-ssr/entry-server.js')
const file = 'dist/index.html'
const html = readFileSync(file, 'utf8')
const marker = '<div id="root"></div>'
if (!html.includes(marker)) throw new Error(`prerender: "${marker}" not found in ${file}`)
writeFileSync(file, html.replace(marker, `<div id="root">${render()}</div>`))
rmSync('dist-ssr', { recursive: true })
console.log('✓ prerendered dist/index.html')
