<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <p class="site-footer__brand">L’arbre des voix · Fiona Climent</p>
      <p class="site-footer__meta">Cours de piano et de chant · Toulouse</p>
      <nav class="site-footer__nav" aria-label="Liens utiles">
        <RouterLink to="/contact" class="site-footer__link">Contact</RouterLink>
        <span class="site-footer__sep" aria-hidden="true">·</span>
        <RouterLink to="/mentions-legales" class="site-footer__link">Mentions légales</RouterLink>
      </nav>
      <p class="site-footer__copy">© {{ year }}</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  position: relative;
  z-index: 1;
  margin-top: auto;
  padding: 2.25rem 1.35rem;
  /* Pas de trait net : évite la « ligne » au passage contenu → pied de page */
  border-top: none;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.38) 0%,
    rgba(245, 243, 239, 0.82) 38%,
    #f3efe8 100%
  );
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.site-footer__inner {
  max-width: 1120px;
  margin: 0 auto;
  text-align: center;
}

.site-footer__brand {
  margin: 0 0 0.35rem;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--color-text);
}

.site-footer__meta {
  margin: 0 0 0.65rem;
  font-size: 0.88rem;
  color: var(--color-text-muted);
}

.site-footer__nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.35rem 0.5rem;
  margin: 0 0 0.55rem;
}

.site-footer__link {
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--color-text-muted);
  opacity: 0.88;
  text-decoration: none;
  transition:
    color 0.15s var(--ease-out),
    opacity 0.15s var(--ease-out);
}

.site-footer__link:hover {
  color: var(--color-orange);
  opacity: 1;
}

.site-footer__sep {
  font-size: 0.72rem;
  color: #c4bfb8;
  user-select: none;
}

.site-footer__copy {
  margin: 0;
  font-size: 0.82rem;
  color: var(--color-text-muted);
  opacity: 0.85;
}
</style>
