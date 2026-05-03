<template>
  <div class="page-wrap course-detail course-detail--chant">
    <p class="course-detail__back">
      <RouterLink to="/cours" class="course-detail__back-link">← Retour aux cours</RouterLink>
    </p>

    <header class="course-detail__head">
      <p class="course-detail__kicker">Parcours chant</p>
      <h1 class="course-detail__title">Cours de chant</h1>
      <p class="course-detail__lede">
        Travail de la voix parlée et chantée : corps, souffle, justesse et couleur sonore — pour trouver une émission saine
        et exprimer ce que vous voulez dire musicalement.
      </p>
    </header>

    <p class="course-detail__meta-note">
      Durées habituelles : <strong>30 à 60 minutes</strong> selon votre niveau et votre emploi du temps — nous les fixons
      ensemble lors du premier échange.
    </p>

    <div class="course-detail__card">
      <section class="course-detail__block">
        <h2 class="course-detail__h2">Approche</h2>
        <p>
          Les séances alternent exercices ciblés (posture, appoggio, voyelles, régistres) et travail sur des morceaux choisis
          avec vous — variété française, jazz, musiques actuelles ou classique léger selon vos envies. L’objectif est une voix
          à la fois libre et maîtrisée.
        </p>
      </section>

      <section class="course-detail__block">
        <h2 class="course-detail__h2">Axes possibles</h2>
        <ul class="course-detail__list">
          <li>Respiration et ancrage corporel</li>
          <li>Justesse, audition et intonation</li>
          <li>Timbre, nuances et articulation</li>
          <li>Interprétation et présence scénique légère pour les projets sur scène</li>
        </ul>
      </section>

      <section class="course-detail__block">
        <h2 class="course-detail__h2">Pour qui ?</h2>
        <p>
          Débutants complets, chanteurs amateurs qui veulent gagner en confort, ou personnes déjà expérimentées souhaitant
          affiner leur technique. Cours individuels ; possibilité d’ateliers collectifs sur demande pour la polyphonie.
        </p>
      </section>

      <section class="course-detail__block course-detail__block--cta">
        <p class="course-detail__cta-text">Envie de faire un point sur votre voix ou vos objectifs ?</p>
        <RouterLink
          to="/contact"
          class="course-detail__cta"
          aria-label="Prendre contact pour un premier échange"
        >
          <span class="course-detail__cta-label">Prendre contact</span>
          <span class="course-detail__cta-arrow" aria-hidden="true">→</span>
        </RouterLink>
      </section>
    </div>

    <p class="course-detail__cross">
      Envie d’explorer le piano ?
      <RouterLink to="/cours/piano" class="course-detail__cross-link">Voir les cours de piano</RouterLink>
    </p>
  </div>
</template>

<style scoped>
.course-detail {
  max-width: 720px;
}

.course-detail__back {
  margin: 0 0 1.25rem;
}

.course-detail__back-link {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color 0.2s var(--ease-out);
}

.course-detail__back-link:hover {
  color: var(--color-orange);
}

.course-detail__head {
  margin-bottom: 2rem;
}

.course-detail__kicker {
  margin: 0 0 0.5rem;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.course-detail__title {
  margin: 0 0 0.75rem;
  font-size: clamp(1.85rem, 3vw, 2.25rem);
  font-weight: 600;
  letter-spacing: -0.035em;
  color: var(--color-text);
}

.course-detail__lede {
  margin: 0;
  font-size: 1.06rem;
  line-height: 1.65;
  color: var(--color-text-muted);
}

.course-detail__card {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: 1.75rem 1.45rem 2rem;
}

@media (min-width: 640px) {
  .course-detail__card {
    padding: 2rem 2rem 2.25rem;
  }
}

.course-detail__block + .course-detail__block {
  margin-top: 1.65rem;
  padding-top: 1.65rem;
  border-top: 1px solid var(--color-border);
}

.course-detail__block + .course-detail__block.course-detail__block--cta {
  margin-top: 2.35rem;
  padding-top: 3.35rem;
  border-top: none;
}

.course-detail__h2 {
  margin: 0 0 0.6rem;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--color-orange);
}

.course-detail__block p {
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.72;
  color: var(--color-text);
}

.course-detail__list {
  margin: 0;
  padding-left: 1.15rem;
  font-size: 0.98rem;
  line-height: 1.75;
  color: var(--color-text);
}

.course-detail__block--cta {
  padding-inline: 1.35rem;
  padding-bottom: 1.85rem;
  border-radius: var(--radius-md);
  text-align: center;
  background: linear-gradient(165deg, rgba(255, 122, 0, 0.12), rgba(255, 122, 0, 0.04));
  border: 1px solid rgba(255, 122, 0, 0.28);
  box-shadow: 0 8px 28px rgba(255, 122, 0, 0.09);
}

@media (min-width: 640px) {
  .course-detail__block + .course-detail__block.course-detail__block--cta {
    padding-top: 3.55rem;
  }

  .course-detail__block--cta {
    padding-inline: 1.75rem;
    padding-bottom: 2rem;
  }
}

.course-detail__block--cta .course-detail__cta-text {
  margin: 0 auto 1.45rem;
  max-width: min(100%, 26rem);
  font-size: 0.98rem;
  line-height: 1.6;
  color: var(--color-text-muted);
  text-wrap: balance;
  text-align: center;
}

.course-detail__cta {
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
  background: var(--color-orange);
  color: #fff;
  text-decoration: none;
  transition:
    transform 0.2s var(--ease-out),
    filter 0.2s var(--ease-out),
    box-shadow 0.2s var(--ease-out),
    gap 0.2s var(--ease-out);
  box-shadow:
    0 4px 14px rgba(255, 122, 0, 0.32),
    0 2px 6px rgba(28, 25, 23, 0.06);
}

.course-detail__cta-label {
  line-height: 1.2;
}

.course-detail__cta-arrow {
  font-size: 1.08rem;
  font-weight: 500;
  opacity: 0.92;
  transition: transform 0.2s var(--ease-out);
}

.course-detail__cta:hover {
  filter: brightness(1.05);
  transform: translateY(-1px);
  gap: 0.62rem;
  box-shadow:
    0 8px 22px rgba(255, 122, 0, 0.35),
    0 2px 8px rgba(28, 25, 23, 0.07);
}

.course-detail__cta:hover .course-detail__cta-arrow {
  transform: translateX(3px);
}

.course-detail__cta:focus-visible {
  outline: 2px solid var(--color-orange);
  outline-offset: 3px;
}

.course-detail__meta-note {
  margin: -0.25rem 0 1.55rem;
  max-width: 40rem;
  font-size: 0.93rem;
  line-height: 1.65;
  color: var(--color-text-muted);
}

.course-detail__cross {
  margin: 1.65rem 0 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text-muted);
}

.course-detail__cross-link {
  font-weight: 600;
  color: var(--color-blue);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.course-detail__cross-link:hover {
  color: var(--color-blue-deep);
}
</style>
