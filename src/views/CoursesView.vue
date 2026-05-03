<script setup>
import CoursesCenterTree from '../components/CoursesCenterTree.vue'
</script>

<template>
  <div class="courses-page">
    <div class="courses-page__inner page-wrap">
      <header class="courses-page__intro">
        <p class="courses-page__kicker">Offre pédagogique</p>
        <h1 class="courses-page__title">Les cours</h1>
        <p class="courses-page__lede">
          Technique, répertoire et plaisir — du loisir au projet sur scène. Parcours individualisés à Toulouse ou en visio.
        </p>
      </header>

      <div class="courses-layout">
        <RouterLink
          to="/cours/piano"
          class="course-panel course-panel--piano course-panel--link"
        >
          <div class="course-panel__accent" aria-hidden="true" />
          <div class="course-panel__inner">
            <div class="course-panel__top">
              <span class="course-panel__icon course-panel__icon--piano" aria-hidden="true">
                <svg class="course-panel__icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <path
                    stroke="currentColor"
                    stroke-width="1.65"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 19V10a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v9"
                  />
                  <path stroke="currentColor" stroke-width="1.45" stroke-linecap="round" opacity="0.32" d="M4 13h16" />
                  <path stroke="currentColor" stroke-width="1.45" stroke-linecap="round" opacity="0.45" d="M8 7v12M12 7v12M16 7v12" />
                </svg>
              </span>
              <h2 class="course-panel__heading">Cours de piano</h2>
            </div>
            <p class="course-panel__text">
              Initiation, lecture à vue, harmonisation et travail du répertoire classique ou contemporain. Les séances
              s’adaptent à votre niveau et à vos envies musicales.
            </p>
            <div class="course-panel__schedule course-panel__schedule--piano" aria-label="Disponibilités cours de piano">
              <p class="course-panel__schedule-title">Disponibilités</p>
              <ul class="course-panel__schedule-list">
                <li class="course-panel__schedule-row">
                  <span class="course-panel__schedule-days">Mar · Jeu</span>
                  <span class="course-panel__schedule-hours">14h – 19h</span>
                </li>
                <li class="course-panel__schedule-row">
                  <span class="course-panel__schedule-days">Sam</span>
                  <span class="course-panel__schedule-hours">10h – 13h</span>
                </li>
                <li class="course-panel__schedule-row">
                  <span class="course-panel__schedule-days">Visio</span>
                  <span class="course-panel__schedule-hours">Selon agenda</span>
                </li>
              </ul>
              <p class="course-panel__schedule-note">Sous réserve de places · autres créneaux sur demande</p>
            </div>
            <span class="course-panel__cta course-panel__cta--blue">
              En savoir plus
              <span class="course-panel__cta-arrow" aria-hidden="true">→</span>
            </span>
          </div>
        </RouterLink>

        <div class="courses-layout__axis">
          <CoursesCenterTree />
        </div>

        <RouterLink
          to="/cours/chant"
          class="course-panel course-panel--chant course-panel--link"
        >
          <div class="course-panel__accent" aria-hidden="true" />
          <div class="course-panel__inner">
            <div class="course-panel__top course-panel__top--chant">
              <h2 class="course-panel__heading">Cours de chant</h2>
              <span class="course-panel__icon course-panel__icon--chant" aria-hidden="true">
                <svg class="course-panel__icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <ellipse cx="9.15" cy="16.85" rx="3.25" ry="2.55" fill="currentColor" />
                  <path stroke="currentColor" stroke-width="1.65" stroke-linecap="round" d="M12.5 5.5v8.45" />
                  <path
                    stroke="currentColor"
                    stroke-width="1.45"
                    stroke-linecap="round"
                    d="M12.5 5.5c2.3 1.05 3.2 2.45 3.2 4.1s-1.1 3.25-3.2 4"
                  />
                </svg>
              </span>
            </div>
            <p class="course-panel__text">
              Posture, respiration, justesse et interprétation — pour débutants comme pour chanteurs confirmés qui
              souhaitent affiner leur technique.
            </p>
            <div class="course-panel__schedule course-panel__schedule--chant" aria-label="Disponibilités cours de chant">
              <p class="course-panel__schedule-title">Disponibilités</p>
              <ul class="course-panel__schedule-list">
                <li class="course-panel__schedule-row">
                  <span class="course-panel__schedule-days">Lun · Mer</span>
                  <span class="course-panel__schedule-hours">16h – 20h</span>
                </li>
                <li class="course-panel__schedule-row">
                  <span class="course-panel__schedule-days">Ven</span>
                  <span class="course-panel__schedule-hours">10h – 12h</span>
                </li>
                <li class="course-panel__schedule-row">
                  <span class="course-panel__schedule-days">Visio</span>
                  <span class="course-panel__schedule-hours">Selon agenda</span>
                </li>
              </ul>
              <p class="course-panel__schedule-note">Sous réserve de places · autres créneaux sur demande</p>
            </div>
            <span class="course-panel__cta course-panel__cta--orange">
              <span class="course-panel__cta-arrow" aria-hidden="true">←</span>
              En savoir plus
            </span>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.courses-page {
  position: relative;
  z-index: 1;
  padding-bottom: 3rem;
}

.courses-page__intro {
  margin-bottom: 2rem;
  padding-top: 0.15rem;
}

@media (min-width: 768px) {
  .courses-page__intro {
    margin-bottom: 2.75rem;
  }
}

.courses-page__kicker {
  margin: 0 0 0.5rem;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.courses-page__title {
  margin: 0 0 0.85rem;
  font-size: clamp(1.85rem, 3.4vw, 2.35rem);
  font-weight: 600;
  letter-spacing: -0.038em;
  color: var(--color-text);
}

.courses-page__lede {
  margin: 0;
  max-width: 52ch;
  font-size: 1.05rem;
  line-height: 1.68;
  color: var(--color-text-muted);
}

.courses-layout {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: stretch;
}

.courses-layout__axis {
  order: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 0;
}

@media (min-width: 920px) {
  .courses-layout {
    display: grid;
    grid-template-columns: 1fr minmax(220px, 26%) 1fr;
    gap: 1.5rem 2rem;
    align-items: stretch;
  }

  .course-panel--piano {
    grid-column: 1;
    grid-row: 1;
  }

  .courses-layout__axis {
    order: 0;
    grid-column: 2;
    grid-row: 1;
    align-self: stretch;
  }

  .course-panel--chant {
    grid-column: 3;
    grid-row: 1;
  }
}

.course-panel--link {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.course-panel--piano.course-panel--link:focus-visible {
  outline: 2px solid rgba(116, 162, 255, 0.55);
  outline-offset: 3px;
}

.course-panel--chant.course-panel--link:focus-visible {
  outline: 2px solid rgba(255, 122, 0, 0.65);
  outline-offset: 3px;
}

.course-panel {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 0;
  height: 100%;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(28, 25, 23, 0.07);
  box-shadow: 0 2px 16px rgba(28, 25, 23, 0.04);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  overflow: hidden;
  isolation: isolate;
}

/* Voile coloré directionnel au survol */
.course-panel::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  pointer-events: none;
  z-index: 0;
  transition: opacity 0.45s cubic-bezier(0.33, 1, 0.68, 1);
}

.course-panel--piano::before {
  background: radial-gradient(125% 85% at 0% 48%, rgba(116, 162, 255, 0.11), transparent 52%);
}

.course-panel--chant::before {
  background: radial-gradient(125% 85% at 100% 48%, rgba(255, 122, 0, 0.09), transparent 52%);
}

@media (hover: hover) and (prefers-reduced-motion: no-preference) {
  .course-panel {
    transition:
      transform 0.35s var(--ease-out),
      box-shadow 0.35s var(--ease-out),
      border-color 0.3s var(--ease-out);
  }

  .course-panel--piano:hover {
    transform: translateY(-3px);
    border-color: rgba(116, 162, 255, 0.22);
    box-shadow:
      0 12px 32px rgba(116, 162, 255, 0.07),
      0 4px 14px rgba(28, 25, 23, 0.05);
  }

  .course-panel--piano:hover::before {
    opacity: 1;
  }

  .course-panel--chant:hover {
    transform: translateY(-3px);
    border-color: rgba(255, 122, 0, 0.22);
    box-shadow:
      0 12px 32px rgba(255, 122, 0, 0.06),
      0 4px 14px rgba(28, 25, 23, 0.05);
  }

  .course-panel--chant:hover::before {
    opacity: 1;
  }

  .courses-layout:has(.course-panel--piano:hover) :deep(.center-tree) {
    --center-tree-stroke-a: var(--color-blue);
    --center-tree-stroke-b: color-mix(in srgb, var(--color-blue) 72%, #ffffff);
  }

  .courses-layout:has(.course-panel--chant:hover) :deep(.center-tree) {
    --center-tree-stroke-a: color-mix(in srgb, var(--color-orange) 62%, #ffffff);
    --center-tree-stroke-b: var(--color-orange);
  }

  .courses-layout:has(.course-panel--piano:hover) :deep(.center-tree__svg) {
    transform: translateX(-10px) rotate(-3deg) scale(1.045);
  }

  .courses-layout:has(.course-panel--chant:hover) :deep(.center-tree__svg) {
    transform: translateX(10px) rotate(3deg) scale(1.045);
  }

  .course-panel--piano:hover .course-panel__accent {
    box-shadow: 0 0 12px rgba(116, 162, 255, 0.22);
  }

  .course-panel--chant:hover .course-panel__accent {
    box-shadow: 0 0 12px rgba(255, 122, 0, 0.2);
  }
}

.course-panel__accent {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  z-index: 1;
  transition: box-shadow 0.45s ease;
}

.course-panel--piano .course-panel__accent {
  background: linear-gradient(180deg, var(--color-blue), rgba(116, 162, 255, 0.35));
}

.course-panel--chant .course-panel__accent {
  left: auto;
  right: 0;
  background: linear-gradient(180deg, var(--color-orange), rgba(255, 122, 0, 0.35));
}

.course-panel__inner {
  position: relative;
  flex: 1;
  padding: 1.5rem 1.4rem 1.45rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-height: 100%;
  overflow: hidden;
  z-index: 1;
}

.course-panel__inner > * {
  position: relative;
  z-index: 1;
}

.course-panel__top {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  width: 100%;
}

.course-panel__top .course-panel__heading {
  flex: 1;
  min-width: 0;
}

.course-panel__top--chant {
  justify-content: space-between;
  gap: 1rem;
}

.course-panel__top--chant .course-panel__heading {
  text-align: right;
}

.course-panel__icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
  background: var(--color-white);
  border: 1px solid var(--color-border-strong);
  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.04);
}

.course-panel__icon--piano {
  color: var(--color-blue);
}

.course-panel__icon--chant {
  color: var(--color-orange);
}

.course-panel__icon-svg {
  display: block;
  width: 1.28rem;
  height: 1.28rem;
}

.course-panel--chant .course-panel__inner {
  padding-left: 1.55rem;
  padding-right: 1.65rem;
  text-align: right;
  align-items: flex-end;
}

@media (min-width: 920px) {
  .course-panel__inner {
    padding: 1.65rem 1.55rem 1.6rem 1.65rem;
  }

  .course-panel--chant .course-panel__inner {
    padding-left: 1.65rem;
    padding-right: 1.65rem;
  }
}

.course-panel__heading {
  margin: 0;
  font-size: 1.22rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  color: var(--color-text);
}

.course-panel__text {
  margin: 0;
  flex: 1;
  font-size: 0.98rem;
  line-height: 1.72;
  color: var(--color-text-muted);
}

.course-panel__schedule {
  align-self: stretch;
  width: 100%;
  flex-shrink: 0;
  margin-top: 0.35rem;
  padding: 0.78rem 0.85rem 0.82rem;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(28, 25, 23, 0.06);
}

.course-panel__schedule--piano {
  background: var(--color-blue-soft);
  border-color: rgba(116, 162, 255, 0.18);
}

.course-panel__schedule--chant {
  background: var(--color-orange-soft);
  border-color: rgba(255, 122, 0, 0.2);
}

.course-panel__schedule-title {
  margin: 0 0 0.55rem;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.course-panel__schedule-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.38rem;
}

.course-panel__schedule-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.65rem;
  font-size: 0.84rem;
  line-height: 1.35;
  color: var(--color-text);
}

.course-panel__schedule-days {
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--color-text);
}

.course-panel__schedule-hours {
  font-variant-numeric: tabular-nums;
  color: var(--color-text-muted);
  white-space: nowrap;
}

.course-panel__schedule--piano .course-panel__schedule-hours {
  color: color-mix(in srgb, var(--color-blue) 52%, var(--color-text));
}

.course-panel__schedule--chant .course-panel__schedule-hours {
  color: color-mix(in srgb, var(--color-orange) 48%, var(--color-text));
}

.course-panel__schedule-note {
  margin: 0.62rem 0 0;
  padding-top: 0.55rem;
  border-top: 1px solid rgba(28, 25, 23, 0.06);
  font-size: 0.72rem;
  line-height: 1.45;
  color: var(--color-text-muted);
}

@media (min-width: 920px) {
  .course-panel--chant .course-panel__schedule-row {
    flex-direction: row-reverse;
  }
}

.course-panel__cta {
  margin-top: 0.35rem;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  align-self: flex-start;
  padding: 0.58rem 0;
  font-size: 0.93rem;
  font-weight: 600;
  color: var(--color-text);
  border-bottom: 1px solid rgba(28, 25, 23, 0.14);
  transition:
    color 0.2s var(--ease-out),
    border-color 0.2s var(--ease-out),
    gap 0.2s var(--ease-out);
}

@media (hover: hover) {
  .course-panel--link:hover .course-panel__cta {
    gap: 0.55rem;
  }
}

.course-panel__cta-arrow {
  font-size: 1.05rem;
  opacity: 0.65;
  transition:
    opacity 0.2s var(--ease-out),
    transform 0.2s var(--ease-out);
}

@media (hover: hover) {
  .course-panel--link:hover .course-panel__cta--blue .course-panel__cta-arrow {
    opacity: 1;
    transform: translateX(3px);
  }

  .course-panel--link:hover .course-panel__cta--orange .course-panel__cta-arrow {
    opacity: 1;
    transform: translateX(-3px);
  }
}

.course-panel__cta--blue {
  border-bottom-color: rgba(116, 162, 255, 0.45);
}

@media (hover: hover) {
  .course-panel--link:hover .course-panel__cta--blue {
    color: var(--color-blue);
    border-bottom-color: var(--color-blue);
  }
}

.course-panel__cta--orange {
  align-self: flex-end;
  border-bottom-color: rgba(255, 122, 0, 0.45);
}

@media (hover: hover) {
  .course-panel--link:hover .course-panel__cta--orange {
    color: var(--color-orange);
    border-bottom-color: var(--color-orange);
  }
}

@media (max-width: 919px) {
  .course-panel--chant .course-panel__inner {
    text-align: left;
    align-items: flex-start;
  }

  .course-panel__top--chant .course-panel__heading {
    text-align: left;
  }

  .course-panel__cta--orange {
    align-self: flex-start;
  }
}
</style>
