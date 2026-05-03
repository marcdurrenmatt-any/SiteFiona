<template>
  <div class="page-wrap course-detail course-detail--piano">
    <p class="course-detail__back">
      <RouterLink to="/cours" class="course-detail__back-link">← Retour aux cours</RouterLink>
    </p>

    <header class="course-detail__head">
      <p class="course-detail__kicker">Parcours piano</p>
      <h1 class="course-detail__title">Cours de piano</h1>
      <p class="course-detail__lede">
        Un accompagnement sur mesure, du premier contact avec l’instrument jusqu’au travail approfondi du répertoire — dans
        un cadre exigeant mais bienveillant.
      </p>
    </header>

    <div class="course-detail__card">
      <section class="course-detail__block">
        <h2 class="course-detail__h2">Approche</h2>
        <p>
          La technique sert la musicalité : posture, son, articulation et lecture à vue sont travaillées en lien avec les
          pièces que vous jouez réellement. Les styles peuvent aller du classique au contemporain, en passant par la musique
          film ou les arrangements qui vous tiennent à cœur.
        </p>
      </section>

      <section class="course-detail__block">
        <h2 class="course-detail__h2">Ce que l’on peut aborder</h2>
        <ul class="course-detail__list">
          <li>Initiation et reprise après une pause</li>
          <li>Lecture à vue et déchiffrage</li>
          <li>Harmonisation, accords, improvisation légère</li>
          <li>Préparation de concerts, examens ou enregistrements personnels</li>
        </ul>
      </section>

      <section class="course-detail__block">
        <h2 class="course-detail__h2">Pour qui ?</h2>
        <p>
          Enfants à partir de l’âge où la concentration le permet, adolescents, adultes débutants ou confirmés. Les séances
          sont individuelles ; la durée et la fréquence s’adaptent à votre emploi du temps (cours à Toulouse ou en visio).
        </p>
      </section>

      <section class="course-detail__block course-detail__block--cta">
        <p class="course-detail__cta-text">Une question sur le niveau, les créneaux ou le matériel ?</p>
        <RouterLink to="/contact" class="course-detail__cta">Écrire pour un premier échange</RouterLink>
      </section>
    </div>
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
  color: var(--color-blue);
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

.course-detail__h2 {
  margin: 0 0 0.6rem;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--color-blue);
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
  margin-top: 1.75rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
  text-align: center;
}

.course-detail__cta-text {
  margin: 0 0 1rem;
  font-size: 0.95rem;
  color: var(--color-text-muted);
}

.course-detail__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.72rem 1.5rem;
  border-radius: var(--radius-pill);
  font-weight: 600;
  font-size: 0.92rem;
  background: var(--color-text);
  color: #fafaf9;
  text-decoration: none;
  transition:
    filter 0.2s var(--ease-out),
    box-shadow 0.2s var(--ease-out);
  box-shadow: 0 2px 10px rgba(28, 25, 23, 0.1);
}

.course-detail__cta:hover {
  filter: brightness(1.06);
}
</style>
