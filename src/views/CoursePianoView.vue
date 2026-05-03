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

    <p class="course-detail__meta-note">
      Durées habituelles : <strong>30 à 60 minutes</strong> selon votre niveau et votre emploi du temps — nous les fixons
      ensemble lors du premier échange.
    </p>

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
      Envie d’explorer le chant ?
      <RouterLink to="/cours/chant" class="course-detail__cross-link">Voir les cours de chant</RouterLink>
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
  padding-inline: 1.35rem;
  padding-bottom: 1.85rem;
  border-radius: var(--radius-md);
  text-align: center;
  background: linear-gradient(165deg, rgba(116, 162, 255, 0.14), rgba(116, 162, 255, 0.04));
  border: 1px solid rgba(116, 162, 255, 0.22);
  box-shadow: 0 8px 28px rgba(116, 162, 255, 0.08);
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

/* Plus spécifique que `.course-detail__block p` pour garder marges, couleur et largeur */
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
  background: var(--color-blue);
  color: #fff;
  text-decoration: none;
  transition:
    transform 0.2s var(--ease-out),
    filter 0.2s var(--ease-out),
    box-shadow 0.2s var(--ease-out),
    gap 0.2s var(--ease-out);
  box-shadow:
    0 4px 14px rgba(116, 162, 255, 0.35),
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
    0 8px 22px rgba(116, 162, 255, 0.38),
    0 2px 8px rgba(28, 25, 23, 0.07);
}

.course-detail__cta:hover .course-detail__cta-arrow {
  transform: translateX(3px);
}

.course-detail__cta:focus-visible {
  outline: 2px solid var(--color-blue);
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
  color: var(--color-orange);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.course-detail__cross-link:hover {
  color: var(--color-orange-deep);
}
</style>
