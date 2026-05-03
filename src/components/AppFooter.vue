<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <p class="site-footer__brand">L’arbre des voix · Fiona Climent</p>
      <p class="site-footer__meta">Cours de piano et de chant · Toulouse</p>
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
  border-top: 1px solid var(--color-border);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.72) 0%, rgba(244, 242, 239, 0.92) 100%);
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
  margin: 0 0 0.5rem;
  font-size: 0.88rem;
  color: var(--color-text-muted);
}

.site-footer__copy {
  margin: 0;
  font-size: 0.82rem;
  color: var(--color-text-muted);
  opacity: 0.85;
}
</style>
