<template>
  <section class="hero">
    <div class="hero__content page-wrap">
      <div class="hero__text">
        <p class="hero__eyebrow">Piano & chant · Toulouse</p>
        <h1 class="hero__title">
          Bienvenue sur <span class="hero__accent">L’arbre des voix</span>
        </h1>
        <p class="hero__lead">
          Plongez dans un univers musical où chant et piano se rencontrent. Ateliers et cours ouverts à tous les niveaux,
          à Toulouse et en visio.
        </p>
        <div class="hero__actions">
          <RouterLink to="/cours" class="btn btn--primary">Découvrir les cours</RouterLink>
          <RouterLink to="/contact" class="btn btn--ghost">Prendre contact</RouterLink>
        </div>
      </div>
      <div class="hero__visual">
        <img
          class="hero__emblem"
          src="/image/g499.svg"
          width="250"
          height="494"
          alt="L’arbre des voix"
          title=""
          decoding="async"
          fetchpriority="high"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: min(92vh, 900px);
  padding-top: calc(var(--header-height) + 2.5rem);
  padding-bottom: 3.5rem;
  display: flex;
  align-items: center;
}

.hero__content {
  position: relative;
  z-index: 1;
  max-width: 1120px;
  display: grid;
  gap: 2.5rem;
  align-items: center;
}

@media (min-width: 900px) {
  .hero__content {
    grid-template-columns: 1.05fr 0.95fr;
    gap: 3rem 3.5rem;
    align-items: center;
  }
}

.hero__eyebrow {
  margin: 0 0 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.hero__title {
  margin: 0 0 1.1rem;
  font-size: clamp(2rem, 4.5vw, 2.75rem);
  font-weight: 600;
  line-height: 1.18;
  letter-spacing: -0.035em;
  color: var(--color-text);
}

.hero__accent {
  color: var(--color-orange);
}

.hero__lead {
  margin: 0 0 2rem;
  font-size: 1.07rem;
  color: var(--color-text-muted);
  max-width: 38ch;
  line-height: 1.7;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem 1rem;
}

.hero__visual {
  display: flex;
  justify-content: center;
  align-items: center;
  isolation: isolate;
}

.hero__emblem {
  display: block;
  width: auto;
  max-width: 250px;
  height: auto;
  max-height: min(56vh, 494px);
  object-fit: contain;
  filter: drop-shadow(0 12px 28px rgba(28, 25, 23, 0.07));
}

@media (min-width: 900px) {
  .hero__visual {
    justify-content: flex-end;
  }

  .hero__emblem {
    max-height: min(70vh, 494px);
  }
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.82rem 1.5rem;
  border-radius: var(--radius-pill);
  font-weight: 600;
  font-size: 0.94rem;
  border: 1px solid transparent;
  transition:
    transform 0.2s var(--ease-out),
    box-shadow 0.2s var(--ease-out),
    background 0.2s var(--ease-out),
    border-color 0.2s var(--ease-out),
    color 0.2s var(--ease-out);
}

.btn--primary {
  background: var(--color-orange);
  color: #fff;
  box-shadow: 0 4px 14px rgba(255, 122, 0, 0.35);
}

.btn--primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 22px rgba(255, 122, 0, 0.4);
}

.btn--ghost {
  background: rgba(255, 255, 255, 0.85);
  color: var(--color-text);
  border-color: var(--color-border-strong);
  backdrop-filter: blur(8px);
}

.btn--ghost:hover {
  border-color: rgba(255, 122, 0, 0.45);
  color: var(--color-orange);
  background: #fff;
}
</style>
