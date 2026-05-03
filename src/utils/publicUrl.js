/**
 * Préfixe les chemins du dossier `public/` avec `import.meta.env.BASE_URL`.
 * Nécessaire lorsque le site est servi sous un sous-chemin (ex. GitHub Pages : /<nom-du-repo>/).
 */
export function publicAsset(path) {
  const base = import.meta.env.BASE_URL
  const normalized = path.startsWith('/') ? path.slice(1) : path
  return `${base}${normalized}`
}
