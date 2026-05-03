import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

/** Sur GitHub Actions, GITHUB_REPOSITORY=owner/nom-du-repo → base /nom-du-repo/ */
const repoSlug = process.env.GITHUB_REPOSITORY?.split('/')?.[1]
const base = repoSlug ? `/${repoSlug}/` : '/'
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
