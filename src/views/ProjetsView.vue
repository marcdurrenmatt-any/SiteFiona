<template>
  <div class="page-wrap projets-page">
    <header class="projets-page__intro">
      <p class="projets-page__kicker">Musique vivante</p>
      <h1 class="projets-page__title">Projets</h1>
      <p class="projets-page__lede">
        Autour des cours, je propose des temps collectifs et des moments sur scène pour jouer ensemble, se présenter au
        public et faire vivre la musique hors du cadre strict du cours individuel — toujours dans un esprit bienveillant et
        ouvert à tous les niveaux.
      </p>
    </header>

    <ul class="projets-grid">
      <li v-for="(item, index) in projets" :key="item.title" class="projet-card">
        <figure class="projet-card__figure">
          <img
            class="projet-card__img"
            :src="item.image"
            :alt="item.imageAlt"
            width="400"
            height="220"
            loading="lazy"
            decoding="async"
            :style="item.imagePosition ? { objectPosition: item.imagePosition } : undefined"
          />
        </figure>
        <div class="projet-card__body">
          <span class="projet-card__num" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
          <h2 class="projet-card__title">{{ item.title }}</h2>
          <p class="projet-card__tag">{{ item.tag }}</p>
          <p class="projet-card__text">{{ item.description }}</p>
          <p class="projet-card__cta">
            <RouterLink to="/contact" class="projet-card__cta-link">M’écrire pour en parler</RouterLink>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { publicAsset } from '@/utils/publicUrl'

const projetsRaw = [
  {
    tag: 'Scène',
    title: 'Premières auditions',
    image: '/image/projets/premiere-audition.svg',
    imageAlt:
      'Illustration stylisée : petite scène et pupitre devant un public, pour évoquer une première audition devant les proches',
    description:
      'Micro-concerts réguliers où chaque élève présente une ou deux pièces devant un petit public : travail de la présence, du geste et du plaisir de partager sans pression de concours.',
  },
  {
    tag: 'Collectif',
    title: 'Atelier chorale ouverte',
    image: '/image/projets/chorale.svg',
    imageAlt: 'Illustration : silhouettes de chanteurs et pupitre, ambiance chœur ouvert à tous',
    description:
      'Travail de répertoire polyphonique accessible aux débutants comme aux confirmés : respiration d’ensemble, timbres mélangés et préparation d’un programme commun.',
  },
  {
    tag: 'Création',
    title: 'Voix & piano — mise en espace',
    image: '/image/projets/voix-piano.svg',
    imageAlt:
      'Illustration : piano vu du dessus et ligne de mélodie qui se prolonge vers une note, pour évoquer voix et piano',
    description:
      'Sessions où voix et piano explorent des textes contemporains ou poésie : mise en forme, improvisation guidée et petite restitution en fin de cycle.',
  },
  {
    tag: 'Stage',
    title: 'Intensif d’été',
    image: '/image/projets/stage-ete.svg',
    imageAlt: 'Illustration : paysage d’été (soleil, nature) pour évoquer un stage musical en saison estivale',
    description:
      'Une semaine concentrée mêlant cours individuels, ateliers de corps et de répertoire, avec temps de jeu ensemble et échange entre participants.',
  },
  {
    tag: 'Pratique',
    title: 'Lecture à vue — groupe adultes',
    image: '/image/projets/lecture-vue.svg',
    imageAlt:
      'Illustration : partition avec portée et notes, crayon à côté, pour évoquer la lecture à vue en groupe',
    description:
      'Rencontres mensuelles pour déchiffrer ensemble partitions variées : généraliser la lecture, gagner en fluidité et partager des astuces entre pianistes.',
  },
  {
    tag: 'Convivialité',
    title: 'Soirée concert partagé',
    image: '/image/projets/concert-partage.svg',
    imageAlt: 'Illustration : salle conviviale et musiciens réunis pour un concert partagé',
    description:
      'Une fois par saison, une soirée informelle mêlant élèves, familles et morceaux du répertoire chanté ou pianistique — entrée libre et ambiance chaleureuse.',
  },
]

const projets = projetsRaw.map((item) => ({
  ...item,
  image: publicAsset(item.image),
  imagePosition: item.imagePosition ?? null,
}))
</script>

<style scoped>
.projets-page__intro {
  margin-bottom: 2.25rem;
}

.projets-page__kicker {
  margin: 0 0 0.5rem;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.projets-page__title {
  margin: 0 0 0.75rem;
  font-size: clamp(1.85rem, 3.2vw, 2.35rem);
  font-weight: 600;
  letter-spacing: -0.035em;
  color: var(--color-text);
}

.projets-page__lede {
  margin: 0;
  max-width: 58ch;
  font-size: 1.05rem;
  line-height: 1.68;
  color: var(--color-text-muted);
}

.projets-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1.25rem;
}

@media (min-width: 640px) {
  .projets-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.35rem;
  }
}

@media (min-width: 980px) {
  .projets-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}

.projet-card {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(28, 25, 23, 0.07);
  box-shadow: var(--shadow-md);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition:
    transform 0.25s var(--ease-out),
    box-shadow 0.25s var(--ease-out),
    border-color 0.25s var(--ease-out);
}

@media (hover: hover) {
  .projet-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: rgba(28, 25, 23, 0.1);
  }

  .projet-card:hover .projet-card__img {
    transform: scale(1.04);
  }
}

.projet-card__figure {
  margin: 0;
  aspect-ratio: 400 / 220;
  overflow: hidden;
  background: rgba(28, 25, 23, 0.04);
}

.projet-card__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.45s cubic-bezier(0.33, 1, 0.68, 1);
}

.projet-card__body {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  padding: 1.15rem 1.25rem 1.35rem;
}

.projet-card__num {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--color-orange);
  opacity: 0.85;
}

.projet-card__title {
  margin: 0;
  font-size: 1.12rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.3;
  color: var(--color-text);
}

.projet-card__tag {
  margin: 0;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-blue);
}

.projet-card__text {
  margin: 0.25rem 0 0;
  font-size: 0.93rem;
  line-height: 1.65;
  color: var(--color-text-muted);
}

.projet-card__cta {
  margin: 0.85rem 0 0;
}

.projet-card__cta-link {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--color-orange);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.projet-card__cta-link:hover {
  color: var(--color-orange-deep);
}

@media (prefers-reduced-motion: reduce) {
  .projet-card__img {
    transition: none;
  }

  .projet-card:hover .projet-card__img {
    transform: none;
  }
}
</style>
