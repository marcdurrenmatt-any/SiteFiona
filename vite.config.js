import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

/**
 * Sur GitHub Actions :
 * - Dépôt projet classique (ex: owner/mon-site)  -> base /mon-site/
 * - Dépôt user/org pages (ex: owner/owner.github.io) -> base /
 */
const repoSlug = process.env.GITHUB_REPOSITORY?.split('/')?.[1]
const isUserOrOrgPagesRepo = Boolean(repoSlug && repoSlug.endsWith('.github.io'))
const base = repoSlug && !isUserOrOrgPagesRepo ? `/${repoSlug}/` : '/'
const faviconHref = `${base}favicon.svg`

export default defineConfig({
  base,
  plugins: [
    vue(),
    {
      name: 'html-favicon-base',
      transformIndexHtml(html) {
        return html.replaceAll('__FAVICON_HREF__', faviconHref)
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
