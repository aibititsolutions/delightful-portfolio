import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { site } from './src/content/site.ts'

// Fills the %TOKENS% in index.html from the content file, so the page
// title and meta description have a single source of truth.
const meta: Record<string, string> = {
  '%SITE_TITLE%': `${site.name} · ${site.title}`,
  '%SITE_DESCRIPTION%': site.description,
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'site-meta',
      transformIndexHtml: (html) =>
        html.replace(/%SITE_[A-Z]+%/g, (token) => meta[token] ?? token),
    },
  ],
})
