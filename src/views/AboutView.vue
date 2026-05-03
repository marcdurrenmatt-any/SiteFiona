<template>
  <div class="about-page page-wrap">
    <header class="about__hero">
      <div class="about__hero-text">
        <p class="about__kicker">L’enseignement</p>
        <h1 class="about__title">À propos</h1>
        <p class="about__intro">
          Pianiste et pédagogue, j’accompagne élèves et chanteurs avec une approche bienveillante, centrée sur l’écoute et la
          musicalité.
        </p>
        <ul class="about__facts" aria-label="Informations rapides">
          <li>Toulouse & visio</li>
          <li>Tous niveaux</li>
          <li>Cours sur mesure</li>
        </ul>
      </div>
      <figure class="about__figure about__figure--hero">
        <div class="about__photo-frame about__photo-frame--portrait">
          <img
            class="about__photo-img about__photo-img--profile"
            :src="aboutPortraitUrl"
            alt="Portrait de Fiona Climent"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
        </div>
      </figure>
    </header>

    <section class="about__pillars" aria-labelledby="about-pillars-heading">
      <h2 id="about-pillars-heading" class="about__section-title">Ce qui compte en cours</h2>
      <ul class="about__pillar-list">
        <li class="about__pillar">
          <span class="about__pillar-icon" aria-hidden="true">◇</span>
          <h3 class="about__pillar-title">Écoute</h3>
          <p class="about__pillar-text">Adapter le tempo, le répertoire et les objectifs à votre rapport au son et au corps.</p>
        </li>
        <li class="about__pillar">
          <span class="about__pillar-icon about__pillar-icon--blue" aria-hidden="true">◇</span>
          <h3 class="about__pillar-title">Clarté</h3>
          <p class="about__pillar-text">Des repères techniques simples pour progresser sans vous perdre dans le jargon.</p>
        </li>
        <li class="about__pillar">
          <span class="about__pillar-icon" aria-hidden="true">◇</span>
          <h3 class="about__pillar-title">Plaisir</h3>
          <p class="about__pillar-text">La régularité naît du jeu : on travaille sérieusement, sans oublier pourquoi on est là.</p>
        </li>
      </ul>
    </section>

    <div class="about__split">
      <figure class="about__figure about__figure--inline">
        <div class="about__photo-frame about__photo-frame--landscape">
          <img
            class="about__photo-img about__photo-img--ambiance"
            :src="aboutAmbianceUrl"
            alt="Ambiance musicale : piano et partitions, évoquant le conservatoire et le travail du répertoire"
            loading="lazy"
            decoding="async"
          />
        </div>
      </figure>
      <div class="about__split-copy">
        <h2 class="about__h2">Mon parcours</h2>
        <p class="about__split-lead">
          Formée au conservatoire, je relie au quotidien piano, chant et culture musicale — avec une pratique scénique et
          d’accompagnement qui continue de nourrir mon enseignement.
        </p>
        <ul class="about__parcours-list">
          <li>Cursus au conservatoire et présence régulière sur scène</li>
          <li>Pianiste accompagnatrice — répertoire classique, contemporain et musiques actuelles</li>
          <li>Contextes variés : concerts, auditions, duo voix-piano et travail avec chanteurs ou petites formations</li>
        </ul>
      </div>
    </div>

    <div class="about__card">
      <div class="about__block">
        <h2 class="about__h2">Ma manière d’enseigner</h2>
        <p>
          Il n’y a pas de « bon » cursus unique : chaque séance part de votre niveau, du temps dont vous disposez et de ce qui
          vous anime — piano, chant, ou les deux.
        </p>
        <p>
          J’alterne exercices courts et travail sur le répertoire pour que la technique serve toujours le son et la phrase
          musicale. On fixe des objectifs réalistes, on revoit ce qui coince sans dramatiser, et on garde de la marge pour vos
          envies : une pièce à préparer, une audition, ou simplement jouer et chanter pour le plaisir.
        </p>
        <p>
          <RouterLink to="/cours" class="about__inline-link">Voir les cours</RouterLink>
        </p>
      </div>

      <div class="about__block">
        <h2 class="about__h2">Mes projets</h2>
        <p>
          Autour des cours, je propose aussi des temps collectifs et des moments sur scène — pour jouer ensemble, se présenter
          au public et faire vivre la musique hors du cadre strict du cours individuel, toujours dans un esprit ouvert à tous
          les niveaux.
        </p>
        <p>
          <RouterLink to="/projets" class="about__inline-link">Voir les projets</RouterLink>
        </p>
      </div>

      <div class="about__cta-row">
        <RouterLink
          to="/contact"
          class="about__cta"
          aria-label="Prendre contact pour un premier échange"
        >
          <span class="about__cta-label">Prendre contact</span>
          <span class="about__cta-arrow" aria-hidden="true">→</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { publicAsset } from '@/utils/publicUrl'

const aboutPortraitUrl = publicAsset('/image/72825.webp')
const aboutAmbianceUrl = publicAsset('/image/about-ambiance-conservatoire.jpg')
</script>

<style scoped>
.about-page {
  padding-bottom: 4rem;
}

.about__hero {
  display: grid;
  gap: 2rem;
  align-items: start;
  margin-bottom: 2.75rem;
}

@media (min-width: 880px) {
  .about__hero {
    grid-template-columns: minmax(0, 1fr) minmax(260px, 38%);
    gap: 2.75rem 3rem;
    align-items: center;
    margin-bottom: 3.25rem;
  }
}

.about__kicker {
  margin: 0 0 0.5rem;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.about__title {
  margin: 0 0 0.75rem;
  font-size: clamp(1.85rem, 3vw, 2.35rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  color: var(--color-text);
}

.about__intro {
  margin: 0 0 1.25rem;
  max-width: 52ch;
  font-size: 1.08rem;
  line-height: 1.65;
  color: var(--color-text-muted);
}

.about__facts {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem 0;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-orange);
}

.about__facts li {
  display: inline-flex;
  align-items: center;
}

.about__facts li + li::before {
  content: '·';
  margin: 0 0.65rem;
  color: rgba(87, 83, 78, 0.45);
  font-weight: 500;
}

.about__figure {
  margin: 0;
}

.about__photo-frame {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(28, 25, 23, 0.09);
  box-shadow: var(--shadow-md);
  background: rgba(255, 255, 255, 0.5);
}

.about__photo-frame--portrait {
  aspect-ratio: 3 / 4;
  max-height: min(520px, 70vh);
  border-color: var(--color-border-strong);
  box-shadow:
    var(--shadow-md),
    0 24px 48px rgba(28, 25, 23, 0.08);
}

.about__photo-frame--portrait::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  border-radius: inherit;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22);
  background:
    radial-gradient(ellipse 90% 85% at 50% 38%, transparent 32%, rgba(28, 25, 23, 0.14) 100%),
    linear-gradient(
      165deg,
      rgba(244, 242, 239, 0.25) 0%,
      transparent 42%,
      rgba(255, 122, 0, 0.04) 100%
    );
}

.about__photo-img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center 22%;
}

.about__photo-img--profile {
  position: relative;
  z-index: 0;
  filter: contrast(1.06) saturate(0.9) brightness(1.02);
}

@media (prefers-contrast: more) {
  .about__photo-img--profile {
    filter: contrast(1.08) brightness(1.02);
  }

  .about__photo-frame--portrait::after {
    background: radial-gradient(ellipse 95% 90% at 50% 42%, transparent 40%, rgba(28, 25, 23, 0.22) 100%);
  }
}

@media (max-width: 879px) {
  .about__photo-frame--portrait {
    max-height: none;
    aspect-ratio: 16 / 11;
  }
}

.about__photo-frame--landscape {
  aspect-ratio: 16 / 10;
  min-height: 180px;
}

.about__photo-img--ambiance {
  object-position: center center;
}

.about__photo-slot {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-lg);
  border: 1px dashed rgba(28, 25, 23, 0.14);
  background:
    linear-gradient(145deg, rgba(116, 162, 255, 0.06), rgba(255, 122, 0, 0.05)),
    repeating-linear-gradient(
      -12deg,
      transparent,
      transparent 12px,
      rgba(28, 25, 23, 0.03) 12px,
      rgba(28, 25, 23, 0.03) 13px
    );
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  padding: 1.5rem 1.25rem;
  text-align: center;
  min-height: 220px;
}

.about__photo-slot--portrait {
  aspect-ratio: 3 / 4;
  max-height: min(520px, 70vh);
}

.about__photo-slot--landscape {
  aspect-ratio: 16 / 10;
  min-height: 200px;
}

.about__photo-slot--wide {
  aspect-ratio: 21 / 9;
  min-height: 140px;
}

@media (max-width: 879px) {
  .about__photo-slot--portrait {
    max-height: none;
    aspect-ratio: 16 / 11;
  }
}

.about__photo-hint {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(87, 83, 78, 0.55);
}

.about__photo-caption {
  max-width: 26ch;
  font-size: 0.82rem;
  line-height: 1.45;
  color: var(--color-text-muted);
}

.about__section-title {
  margin: 0 0 1.25rem;
  font-size: 1.02rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--color-text);
}

.about__pillars {
  margin-bottom: 2.85rem;
}

.about__pillar-list {
  display: grid;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

@media (min-width: 720px) {
  .about__pillar-list {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.15rem;
  }
}

.about__pillar {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1.25rem 1.35rem;
  box-shadow: var(--shadow-sm);
}

.about__pillar-icon {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
  color: var(--color-orange);
  line-height: 1;
}

.about__pillar-icon--blue {
  color: var(--color-blue);
}

.about__pillar-title {
  margin: 0 0 0.4rem;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--color-text);
}

.about__pillar-text {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.62;
  color: var(--color-text-muted);
}

.about__split {
  display: grid;
  gap: 1.75rem;
  align-items: center;
  margin-bottom: 2.5rem;
}

@media (min-width: 800px) {
  .about__split {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
    gap: 2.25rem;
    margin-bottom: 2.85rem;
  }
}

.about__split-copy .about__h2 {
  margin-top: 0;
}

.about__split-copy p {
  margin: 0;
  color: var(--color-text);
  line-height: 1.72;
  font-size: 0.98rem;
}

.about__split-copy p + p {
  margin-top: 1rem;
}

.about__split-lead {
  margin: 0;
}

.about__parcours-list {
  margin: 0.85rem 0 0;
  padding-left: 1.15rem;
  font-size: 0.98rem;
  line-height: 1.72;
  color: var(--color-text);
}

.about__parcours-list li + li {
  margin-top: 0.45rem;
}

.about__card {
  width: 100%;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 2rem 1.5rem 2rem;
}

@media (min-width: 640px) {
  .about__card {
    padding: 2.5rem 2.5rem 2.35rem;
  }
}

.about__h2 {
  margin: 0 0 0.55rem;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--color-orange);
}

.about__block p {
  margin: 0;
  color: var(--color-text);
  line-height: 1.7;
  font-size: 0.98rem;
}

.about__block p + p {
  margin-top: 1rem;
}

.about__block + .about__block {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}

.about__inline-link {
  font-weight: 600;
  color: var(--color-orange);
  border-bottom: 1px solid rgba(255, 122, 0, 0.35);
  text-decoration: none;
  transition:
    color 0.2s var(--ease-out),
    border-color 0.2s var(--ease-out);
}

.about__inline-link:hover {
  color: var(--color-text);
  border-bottom-color: var(--color-text);
}

.about__cta-row {
  margin-top: 1.85rem;
  display: flex;
  justify-content: center;
}

.about__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.88rem 1.65rem 0.88rem 1.85rem;
  min-height: 2.75rem;
  border-radius: var(--radius-pill);
  font-weight: 600;
  font-size: 0.94rem;
  letter-spacing: 0.01em;
  color: #fff;
  background: var(--color-orange);
  text-decoration: none;
  box-shadow:
    0 4px 14px rgba(255, 122, 0, 0.32),
    0 2px 6px rgba(28, 25, 23, 0.06);
  transition:
    transform 0.2s var(--ease-out),
    filter 0.2s var(--ease-out),
    box-shadow 0.2s var(--ease-out),
    gap 0.2s var(--ease-out);
}

.about__cta-label {
  line-height: 1.2;
}

.about__cta-arrow {
  font-size: 1.08rem;
  font-weight: 500;
  opacity: 0.92;
  transition: transform 0.2s var(--ease-out);
}

.about__cta:hover {
  filter: brightness(1.05);
  transform: translateY(-1px);
  gap: 0.62rem;
  box-shadow:
    0 8px 22px rgba(255, 122, 0, 0.35),
    0 2px 8px rgba(28, 25, 23, 0.07);
}

.about__cta:hover .about__cta-arrow {
  transform: translateX(3px);
}

.about__cta:focus-visible {
  outline: 2px solid var(--color-orange);
  outline-offset: 3px;
}
</style>
