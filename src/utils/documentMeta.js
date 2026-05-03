/** Met à jour les balises SEO / partage social pour la SPA (après navigation). */

function setNamedMeta(name, content) {
  if (!content && content !== '') return
  let el = document.head.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setPropertyMeta(property, content) {
  if (!content && content !== '') return
  let el = document.head.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  if (!href) return
  let link = document.head.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

/**
 * @param {{ title: string; description: string; canonicalUrl: string; imageUrl: string }} opts
 */
export function applyDocumentMeta({ title, description, canonicalUrl, imageUrl }) {
  setNamedMeta('description', description)

  setPropertyMeta('og:title', title)
  setPropertyMeta('og:description', description)
  setPropertyMeta('og:url', canonicalUrl)
  setPropertyMeta('og:type', 'website')
  setPropertyMeta('og:image', imageUrl)
  setPropertyMeta('og:locale', 'fr_FR')

  setNamedMeta('twitter:card', 'summary_large_image')
  setNamedMeta('twitter:title', title)
  setNamedMeta('twitter:description', description)
  setNamedMeta('twitter:image', imageUrl)

  setCanonical(canonicalUrl)
}

export function absolutePublicUrl(path) {
  if (typeof window === 'undefined') return ''
  const origin = window.location.origin
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const p = path.startsWith('/') ? path : `/${path}`
  return `${origin}${base}${p}`
}
