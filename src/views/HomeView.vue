<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { publicAsset } from '@/utils/publicUrl'

/** Nombre de `.hero__rise-note` dans le DOM — doit rester aligné avec le template */
const RISE_NOTE_COUNT = 10
/** Une seule durée de montée + phases régulièrement réparties → flux sans paquets ni écrans vides */
const RISE_CYCLE_MS = 72_000

const RISE_NOTE_MS = Array.from({ length: RISE_NOTE_COUNT }, (_, i) => [
  RISE_CYCLE_MS,
  -Math.round((i * RISE_CYCLE_MS) / RISE_NOTE_COUNT),
])

const heroRef = ref(null)
const heroFloatingNotesRef = ref(null)
const heroEmblemRef = ref(null)
const prefersReducedMotion = ref(false)
const heroStyle = ref({
  '--note-parallax-x': '0px',
  '--note-parallax-y': '0px',
})

let mediaQuery = null

function updateMotionPreference() {
  prefersReducedMotion.value = Boolean(mediaQuery?.matches)
  if (prefersReducedMotion.value) {
    resetParallax()
  }
}

function updateParallax(event) {
  if (prefersReducedMotion.value || !heroRef.value) return

  const rect = heroRef.value.getBoundingClientRect()
  const relX = (event.clientX - rect.left) / rect.width - 0.5
  const relY = (event.clientY - rect.top) / rect.height - 0.5

  heroStyle.value = {
    '--note-parallax-x': `${(relX * 10).toFixed(2)}px`,
    '--note-parallax-y': `${(relY * 8).toFixed(2)}px`,
  }
}

function resetParallax() {
  heroStyle.value = {
    '--note-parallax-x': '0px',
    '--note-parallax-y': '0px',
  }
}

function riseNoteOpacity(t) {
  const fade = 0.11
  if (t < fade) return (t / fade) * 0.42
  if (t > 1 - fade) return ((1 - t) / fade) * 0.38
  return 0.4
}

function rectsOverlapScreen(a, b) {
  return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top
}

/** Déplacement horizontal minimal (px) pour sortir la note de la zone logo (axes alignés). */
function horizontalClearanceDelta(noteRect, zone, gapPx) {
  const halfW = noteRect.width / 2
  const ncx = noteRect.left + halfW
  const cxLeftOfLogo = zone.left - halfW - gapPx
  const cxRightOfLogo = zone.right + halfW + gapPx
  const dLeft = cxLeftOfLogo - ncx
  const dRight = cxRightOfLogo - ncx
  return Math.abs(dLeft) <= Math.abs(dRight) ? dLeft : dRight
}

let riseRaf = 0
let lastRiseNow = 0
const riseLogoDodge = new WeakMap()
const risePrevU = new WeakMap()

/** Convergence vers la cible quand chevauchement logo (s). Plus grand = plus doux. */
const LOGO_DODGE_TAU_PUSH_S = 0.72
/** Retour vers 0 hors zone (s). */
const LOGO_DODGE_TAU_RELEASE_S = 1.05
/** Vitesses max (px/s). */
const LOGO_DODGE_SPEED_PUSH_PX_S = 28
const LOGO_DODGE_SPEED_RELEASE_PX_S = 22

function tickRisingNotes(now) {
  if (prefersReducedMotion.value) return

  const dtMs = lastRiseNow ? Math.min(72, now - lastRiseNow) : 16.67
  lastRiseNow = now

  const layer = heroFloatingNotesRef.value
  const emblemEl = heroEmblemRef.value
  if (!layer) {
    riseRaf = requestAnimationFrame(tickRisingNotes)
    return
  }

  const notes = layer.querySelectorAll('.hero__rise-note')
  const vhPx = window.innerHeight / 100

  let zone = null
  if (emblemEl) {
    const emb = emblemEl.getBoundingClientRect()
    if (emb.width > 8 && emb.height > 8) {
      const pad = 24
      zone = {
        left: emb.left - pad,
        right: emb.right + pad,
        top: emb.top - pad,
        bottom: emb.bottom + pad,
      }
    }
  }

  const logoGapPx = 12

  for (let i = 0; i < notes.length; i++) {
    const el = notes[i]
    const [duration, delay] = RISE_NOTE_MS[i] ?? [72_000, 0]
    let u = (now + delay) % duration
    if (u < 0) u += duration
    const prevU = risePrevU.get(el)
    if (prevU !== undefined && u < prevU) {
      riseLogoDodge.delete(el)
    }
    risePrevU.set(el, u)
    const t = u / duration

    const tyPx = (22 + t * -150) * vhPx
    const baseDx = -5 + t * 17
    const rot = -8 + t * 15

    el.style.opacity = String(riseNoteOpacity(t))

    let d = riseLogoDodge.get(el) ?? 0

    el.style.transform = `translate3d(${baseDx + d}px, ${tyPx}px, 0) rotate(${rot}deg)`

    let target = d
    let overlaps = false
    if (zone) {
      const nr = el.getBoundingClientRect()
      overlaps = rectsOverlapScreen(nr, zone)
      if (overlaps) {
        target = d + horizontalClearanceDelta(nr, zone, logoGapPx)
      } else {
        target = 0
      }
    }

    const tau = overlaps ? LOGO_DODGE_TAU_PUSH_S : LOGO_DODGE_TAU_RELEASE_S
    const maxSpeed = overlaps ? LOGO_DODGE_SPEED_PUSH_PX_S : LOGO_DODGE_SPEED_RELEASE_PX_S
    const alpha = 1 - Math.exp(-dtMs / 1000 / tau)
    let step = (target - d) * alpha
    const maxStep = (maxSpeed * dtMs) / 1000
    if (Math.abs(step) > maxStep) step = Math.sign(step) * maxStep
    d += step
    riseLogoDodge.set(el, d)

    el.style.transform = `translate3d(${baseDx + d}px, ${tyPx}px, 0) rotate(${rot}deg)`
  }

  riseRaf = requestAnimationFrame(tickRisingNotes)
}

function startRisingNotes() {
  cancelAnimationFrame(riseRaf)
  if (prefersReducedMotion.value) return
  riseRaf = requestAnimationFrame(tickRisingNotes)
}

watch(prefersReducedMotion, () => {
  cancelAnimationFrame(riseRaf)
  if (!prefersReducedMotion.value) {
    nextTick(() => startRisingNotes())
  }
})

onMounted(() => {
  mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  updateMotionPreference()
  mediaQuery.addEventListener('change', updateMotionPreference)
  nextTick(() => startRisingNotes())
})

onBeforeUnmount(() => {
  mediaQuery?.removeEventListener('change', updateMotionPreference)
  cancelAnimationFrame(riseRaf)
})
</script>

<template>
  <section
    ref="heroRef"
    class="hero"
    :style="heroStyle"
    @pointermove="updateParallax"
    @pointerleave="resetParallax"
  >
    <div ref="heroFloatingNotesRef" class="hero__floating-notes" aria-hidden="true">
      <span class="hero__rise-note hero__rise-note--1">
        <svg class="hero__note-svg hero__note-svg--single" viewBox="0 0 24 24" focusable="false">
          <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
        </svg>
      </span>
      <span class="hero__rise-note hero__rise-note--2">
        <svg class="hero__note-svg hero__note-svg--double" viewBox="0 0 24 24" focusable="false">
          <ellipse cx="8.05" cy="17.2" rx="3.08" ry="2.34" transform="rotate(-13 8.05 17.2)" />
          <ellipse cx="15.52" cy="16.05" rx="3.08" ry="2.34" transform="rotate(-13 15.52 16.05)" />
          <rect x="10.05" y="9.45" width="1.48" height="8.05" rx="0.74" />
          <rect x="17.38" y="8.05" width="1.48" height="8.28" rx="0.74" />
          <path d="M11 9.45 18.92 7.22 19.68 10.15 11.74 12.38z" />
        </svg>
      </span>
      <span class="hero__rise-note hero__rise-note--3">
        <svg class="hero__note-svg hero__note-svg--single" viewBox="0 0 24 24" focusable="false">
          <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
        </svg>
      </span>
      <span class="hero__rise-note hero__rise-note--4">
        <svg class="hero__note-svg hero__note-svg--single" viewBox="0 0 24 24" focusable="false">
          <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
        </svg>
      </span>
      <span class="hero__rise-note hero__rise-note--5">
        <svg class="hero__note-svg hero__note-svg--flat hero__note-svg--accidental" viewBox="0 0 24 24" focusable="false">
          <path fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" d="M10.9 4v15.65" />
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="1.85"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.9 12.35c2.85-2.35 6.25-.95 5.85 2.2-.45 3.25-5.15 4.15-5.85 2.55"
          />
        </svg>
      </span>
      <span class="hero__rise-note hero__rise-note--6">
        <svg class="hero__note-svg hero__note-svg--sharp hero__note-svg--accidental" viewBox="0 0 24 24" focusable="false">
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="1.85"
            stroke-linecap="round"
            d="M9.35 4.75v14.5M14.85 4.25v14.5M6.15 9.45l12.7 3.45M6.15 13.15l12.7 3.45"
          />
        </svg>
      </span>
      <span class="hero__rise-note hero__rise-note--7">
        <svg class="hero__note-svg hero__note-svg--single" viewBox="0 0 24 24" focusable="false">
          <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
        </svg>
      </span>
      <span class="hero__rise-note hero__rise-note--8">
        <svg class="hero__note-svg hero__note-svg--flat hero__note-svg--accidental" viewBox="0 0 24 24" focusable="false">
          <path fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" d="M10.9 4v15.65" />
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="1.85"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.9 12.35c2.85-2.35 6.25-.95 5.85 2.2-.45 3.25-5.15 4.15-5.85 2.55"
          />
        </svg>
      </span>
      <span class="hero__rise-note hero__rise-note--9">
        <svg class="hero__note-svg hero__note-svg--sharp hero__note-svg--accidental" viewBox="0 0 24 24" focusable="false">
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="1.85"
            stroke-linecap="round"
            d="M9.35 4.75v14.5M14.85 4.25v14.5M6.15 9.45l12.7 3.45M6.15 13.15l12.7 3.45"
          />
        </svg>
      </span>
      <span class="hero__rise-note hero__rise-note--10">
        <svg class="hero__note-svg hero__note-svg--double" viewBox="0 0 24 24" focusable="false">
          <ellipse cx="8.05" cy="17.2" rx="3.08" ry="2.34" transform="rotate(-13 8.05 17.2)" />
          <ellipse cx="15.52" cy="16.05" rx="3.08" ry="2.34" transform="rotate(-13 15.52 16.05)" />
          <rect x="10.05" y="9.45" width="1.48" height="8.05" rx="0.74" />
          <rect x="17.38" y="8.05" width="1.48" height="8.28" rx="0.74" />
          <path d="M11 9.45 18.92 7.22 19.68 10.15 11.74 12.38z" />
        </svg>
      </span>
    </div>
    <div class="hero__content page-wrap">
      <div class="hero__text">
        <p class="hero__eyebrow">Piano & chant · Toulouse</p>
        <h1 class="hero__title">
          <span class="hero__title-welcome">Bienvenue sur</span>
          <span class="hero__title-brand">
            <span class="hero__title-brand-prefix">L’arbre des</span>
            <span class="hero__accent hero__title-brand-voix">voix</span>
          </span>
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
        <div class="hero__emblem-frame">
          <div class="hero__logo-decor" aria-hidden="true">
            <div class="hero__staff-wrap">
              <svg class="hero__staff" viewBox="0 0 640 108" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="heroStaffFade" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stop-color="#78716c" stop-opacity="0" />
                    <stop offset="14%" stop-color="#78716c" stop-opacity="0.16" />
                    <stop offset="86%" stop-color="#78716c" stop-opacity="0.16" />
                    <stop offset="100%" stop-color="#78716c" stop-opacity="0" />
                  </linearGradient>
                </defs>
                <g fill="none" stroke="url(#heroStaffFade)" stroke-linecap="round" stroke-width="0.52">
                  <line x1="24" y1="26" x2="616" y2="26" />
                  <line x1="24" y1="42" x2="616" y2="42" />
                  <line x1="24" y1="58" x2="616" y2="58" />
                  <line x1="24" y1="74" x2="616" y2="74" />
                  <line x1="24" y1="90" x2="616" y2="90" />
                </g>
              </svg>
            </div>

          </div>

          <img
            ref="heroEmblemRef"
            class="hero__emblem"
            :src="publicAsset('/image/g499.svg')"
            width="250"
            height="494"
            alt="L’arbre des voix"
            title=""
            decoding="async"
            fetchpriority="high"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  isolation: isolate;
  min-height: min(92vh, 900px);
  padding-top: calc(var(--header-height) + 2.5rem);
  padding-bottom: 3.5rem;
  display: flex;
  align-items: center;
  overflow: visible;
}

.hero__content {
  position: relative;
  z-index: 2;
  max-width: 1120px;
  display: grid;
  gap: 2.5rem;
  align-items: center;
}

.hero__floating-notes {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 50%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  transform: translate3d(var(--note-parallax-x, 0px), var(--note-parallax-y, 0px), 0);
  transition: transform 220ms ease-out;
}

.hero__rise-note {
  position: absolute;
  bottom: -4vh;
  left: var(--rise-left, 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform, opacity;
}

.hero__rise-note--1 {
  --rise-left: 14%;
}

.hero__rise-note--2 {
  left: calc(76% - 1.25rem);
}

.hero__rise-note--3 {
  --rise-left: 44%;
}

.hero__rise-note--4 {
  --rise-left: 88%;
}

.hero__rise-note--5 {
  --rise-left: 30%;
}

.hero__rise-note--6 {
  left: calc(58% - 0.35rem);
}

.hero__rise-note--7 {
  --rise-left: 72%;
}

.hero__rise-note--8 {
  --rise-left: 8%;
}

.hero__rise-note--9 {
  left: calc(92% - 0.75rem);
}

.hero__rise-note--10 {
  --rise-left: 50%;
}

.hero__emblem-frame {
  position: relative;
  display: inline-block;
}

.hero__logo-decor {
  position: absolute;
  inset: -14% -18% -18% -18%;
  z-index: 0;
  pointer-events: none;
  transform: translate3d(var(--note-parallax-x, 0px), var(--note-parallax-y, 0px), 0);
  transition: transform 220ms ease-out;
}

.hero__staff-wrap {
  position: absolute;
  left: 50%;
  top: 54%;
  width: 132%;
  max-width: min(340px, 42vw);
  transform-origin: 50% 50%;
  opacity: 0.52;
  animation: heroStaffDrift 52s ease-in-out infinite alternate;
}

.hero__staff {
  display: block;
  width: 100%;
  height: auto;
  transform: rotate(-2.1deg);
}

.hero__note-svg {
  width: clamp(1.85rem, 2.35vw, 2.65rem);
  height: clamp(1.85rem, 2.35vw, 2.65rem);
  user-select: none;
  fill: currentColor;
  filter: saturate(108%) drop-shadow(0 10px 18px rgba(28, 25, 23, 0.07));
  transform-origin: 50% 65%;
}

.hero__note-svg--double {
  width: clamp(2.05rem, 2.65vw, 2.92rem);
  height: clamp(2.05rem, 2.65vw, 2.92rem);
  transform-origin: 48% 66%;
}

.hero__note-svg--accidental {
  width: clamp(1.42rem, 1.95vw, 1.85rem);
  height: clamp(1.42rem, 1.95vw, 1.85rem);
  transform-origin: 50% 55%;
}

.hero__rise-note--1 .hero__note-svg {
  color: rgba(154, 72, 38, 0.42);
}

.hero__rise-note--2 .hero__note-svg {
  color: color-mix(in srgb, var(--color-orange) 39%, transparent);
}

.hero__rise-note--3 .hero__note-svg {
  color: rgba(112, 56, 38, 0.38);
}

.hero__rise-note--4 .hero__note-svg {
  color: rgba(168, 90, 42, 0.36);
}

.hero__rise-note--5 .hero__note-svg,
.hero__rise-note--8 .hero__note-svg {
  color: color-mix(in srgb, var(--color-blue) 38%, transparent);
}

.hero__rise-note--6 .hero__note-svg {
  color: rgba(195, 88, 28, 0.42);
}

.hero__rise-note--9 .hero__note-svg {
  color: color-mix(in srgb, var(--color-orange) 38%, transparent);
}

.hero__rise-note--7 .hero__note-svg {
  color: rgba(148, 78, 44, 0.37);
}

.hero__rise-note--10 .hero__note-svg {
  color: color-mix(in srgb, var(--color-blue) 37%, transparent);
}

@keyframes heroStaffDrift {
  0% {
    transform: translate(calc(-50% - 7px), calc(-50% + 1px)) rotate(-2.1deg);
    opacity: 0.44;
  }
  100% {
    transform: translate(calc(-50% + 9px), calc(-50% - 4px)) rotate(-1.55deg);
    opacity: 0.58;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__staff-wrap {
    animation: none;
    transform: translate(-50%, -50%);
    opacity: 0.34;
  }

  .hero__rise-note {
    opacity: 0;
    visibility: hidden;
    transform: none;
    will-change: auto;
  }

  .hero__note-svg {
    filter: saturate(100%) drop-shadow(0 6px 10px rgba(28, 25, 23, 0.05));
  }
}

@media (min-width: 900px) {
  .hero__content {
    grid-template-columns: 1.05fr 0.95fr;
    gap: 3rem 3.5rem;
    align-items: center;
  }
}

.hero__text {
  position: relative;
  z-index: 1;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.35rem;
  font-weight: 600;
  letter-spacing: -0.035em;
  color: var(--color-text);
}

.hero__title-welcome {
  font-size: clamp(1.35rem, 3.2vw, 1.85rem);
  font-weight: 600;
  line-height: 1.22;
  letter-spacing: -0.03em;
  color: var(--color-text);
}

.hero__title-brand {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.35em;
  font-size: clamp(2rem, 4.5vw, 2.75rem);
  line-height: 1.14;
}

.hero__title-brand-prefix {
  color: var(--color-text);
}

.hero__title-brand-voix {
  flex-shrink: 0;
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
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  isolation: isolate;
  overflow: visible;
}

.hero__emblem {
  position: relative;
  z-index: 1;
  display: block;
  width: auto;
  max-width: 250px;
  height: auto;
  max-height: min(56vh, 494px);
  object-fit: contain;
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
