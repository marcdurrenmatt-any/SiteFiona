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
            <div class="course-panel__glyph-row" aria-hidden="true">
              <span class="course-panel__glyph course-panel__glyph--piano">
                <svg
                  class="course-panel__glyph-svg course-panel__glyph-svg--piano"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    fill-opacity="0.14"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                    d="M 3.65 18.85 V 10.05 H 7.9 C 10.35 6 14.55 5.45 17.95 7.15 C 19.55 7.95 20.35 10 20.35 11.65 V 18.85 H 3.65 Z"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-opacity="0.42"
                    d="M 7.9 10.05 C 11.55 6.95 16.35 6.85 19.15 9.35"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-opacity="0.28"
                    d="M 4.75 12.35 H 6.95 M 4.75 14.55 H 6.95 M 4.75 16.65 H 6.95"
                  />
                </svg>
              </span>
            </div>
            <h2 class="course-panel__heading">Cours de piano</h2>
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
            <div class="course-panel__glyph-row" aria-hidden="true">
              <span class="course-panel__glyph course-panel__glyph--chant">
                <svg
                  class="course-panel__glyph-svg course-panel__glyph-svg--chant"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    fill-opacity="0.14"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                    d="M12 4.25a3.35 3.35 0 0 0-3.35 3.35v4.4a3.35 3.35 0 0 0 6.7 0v-4.4A3.35 3.35 0 0 0 12 4.25Z"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 15.35v2.15M9.15 19.75h5.7"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-opacity="0.42"
                    d="M5.4 10.4c-.85 1.35-.85 3.25 0 4.55M18.6 10.4c.85 1.35.85 3.25 0 4.55"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-opacity="0.28"
                    d="M3.35 8.65c-1.25 2.05-1.25 5.05 0 7M20.65 8.65c1.25 2.05 1.25 5.05 0 7"
                  />
                </svg>
              </span>
            </div>
            <h2 class="course-panel__heading">Cours de chant</h2>
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
  margin-bottom: 2.35rem;
  padding-top: 0.25rem;
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
  gap: 1.75rem;
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

/* Reflet animé (shimmer) — masqué au survol via opacity + clip */
.course-panel__inner::after {
  content: '';
  position: absolute;
  inset: -40% -60%;
  background: linear-gradient(
    115deg,
    transparent 0%,
    rgba(255, 255, 255, 0) 42%,
    rgba(255, 255, 255, 0.38) 50%,
    rgba(255, 255, 255, 0) 58%,
    transparent 100%
  );
  transform: translateX(-100%) rotate(6deg);
  opacity: 0;
  pointer-events: none;
  z-index: 0;
}

@media (hover: hover) and (prefers-reduced-motion: no-preference) {
  .course-panel {
    transition:
      transform 0.5s cubic-bezier(0.34, 1.2, 0.64, 1),
      box-shadow 0.5s cubic-bezier(0.33, 1, 0.68, 1),
      border-color 0.4s ease;
  }

  .course-panel--piano:hover {
    transform: translateY(-5px);
    border-color: rgba(116, 162, 255, 0.26);
    box-shadow:
      0 18px 42px rgba(116, 162, 255, 0.09),
      0 8px 24px rgba(28, 25, 23, 0.07);
  }

  .course-panel--piano:hover::before {
    opacity: 1;
  }

  .course-panel--chant:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 122, 0, 0.24);
    box-shadow:
      0 18px 42px rgba(255, 122, 0, 0.08),
      0 8px 24px rgba(28, 25, 23, 0.07);
  }

  .course-panel--chant:hover::before {
    opacity: 1;
  }

  .course-panel:hover .course-panel__inner::after {
    opacity: 1;
    animation: course-shimmer 0.95s cubic-bezier(0.33, 1, 0.68, 1) forwards;
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

  /* Bandeau latéral qui « pulse » visuellement au survol */
  .course-panel--piano:hover .course-panel__accent {
    box-shadow: 0 0 18px rgba(116, 162, 255, 0.28);
  }

  .course-panel--chant:hover .course-panel__accent {
    box-shadow: 0 0 18px rgba(255, 122, 0, 0.26);
  }
}

@keyframes course-shimmer {
  0% {
    transform: translateX(-100%) rotate(6deg);
  }
  100% {
    transform: translateX(120%) rotate(6deg);
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
  padding: 1.65rem 1.45rem 1.55rem 1.65rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  min-height: 100%;
  overflow: hidden;
  z-index: 1;
}

.course-panel__inner > * {
  position: relative;
  z-index: 1;
}

.course-panel__glyph-row {
  display: flex;
  width: 100%;
}

.course-panel--chant .course-panel__glyph-row {
  justify-content: flex-end;
}

.course-panel__glyph {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.55rem;
  height: 3.55rem;
  border-radius: 14px;
}

.course-panel__glyph--piano {
  color: var(--color-blue);
  background: linear-gradient(160deg, rgba(116, 162, 255, 0.14), rgba(116, 162, 255, 0.04));
  border: 1px solid rgba(116, 162, 255, 0.22);
  box-shadow:
    0 5px 14px rgba(116, 162, 255, 0.07),
    inset 0 1px 0 rgba(255, 255, 255, 0.45);
}

.course-panel__glyph--chant {
  color: var(--color-orange);
  background: linear-gradient(160deg, rgba(255, 122, 0, 0.13), rgba(255, 122, 0, 0.035));
  border: 1px solid rgba(255, 122, 0, 0.22);
  box-shadow:
    0 5px 14px rgba(255, 122, 0, 0.07),
    inset 0 1px 0 rgba(255, 255, 255, 0.42);
}

.course-panel__glyph-svg {
  display: block;
}

.course-panel__glyph-svg--piano,
.course-panel__glyph-svg--chant {
  width: 1.95rem;
  height: 1.95rem;
}

.course-panel--chant .course-panel__inner {
  padding-left: 1.55rem;
  padding-right: 1.65rem;
  text-align: right;
  align-items: flex-end;
}

@media (min-width: 920px) {
  .course-panel__inner {
    padding: 1.85rem 1.65rem 1.75rem 1.85rem;
  }

  .course-panel--chant .course-panel__inner {
    padding-left: 1.75rem;
    padding-right: 1.85rem;
  }
}

.course-panel__heading {
  margin: 0;
  font-size: 1.28rem;
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
  background: linear-gradient(135deg, rgba(116, 162, 255, 0.06), rgba(116, 162, 255, 0.025));
  border-color: rgba(116, 162, 255, 0.14);
}

.course-panel__schedule--chant {
  background: linear-gradient(225deg, rgba(255, 122, 0, 0.055), rgba(255, 122, 0, 0.022));
  border-color: rgba(255, 122, 0, 0.15);
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

  .course-panel__cta--orange {
    align-self: flex-start;
  }
}
</style>
