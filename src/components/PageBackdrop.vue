<template>
  <div class="page-backdrop" aria-hidden="true">
    <div class="page-backdrop__wash" />
    <svg
      class="page-backdrop__art"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 780"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <defs>
        <linearGradient id="bdFadeStaff" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stop-color="#a8a29e" stop-opacity="0" />
          <stop offset="12%" stop-color="#a8a29e" stop-opacity="0.5" />
          <stop offset="88%" stop-color="#a8a29e" stop-opacity="0.5" />
          <stop offset="100%" stop-color="#a8a29e" stop-opacity="0" />
        </linearGradient>
      </defs>

      <!-- Chaleur discrète (chant / présence) -->
      <ellipse
        cx="920"
        cy="200"
        rx="420"
        ry="260"
        :fill="palette.warm"
        fill-opacity="0.045"
        transform="rotate(-8 920 200)"
      />
      <!-- Fraîcheur discrète (piano / structure) -->
      <ellipse
        cx="220"
        cy="520"
        rx="380"
        ry="300"
        :fill="palette.slate"
        fill-opacity="0.055"
        transform="rotate(6 220 520)"
      />

      <!-- Portée : surtout à gauche pour laisser respirer le logo à droite / au centre -->
      <g
        class="page-backdrop__staff"
        fill="none"
        stroke="url(#bdFadeStaff)"
        stroke-width="0.65"
        stroke-linecap="round"
        opacity="0.78"
      >
        <line x1="120" y1="268" x2="640" y2="268" />
        <line x1="120" y1="288" x2="640" y2="288" />
        <line x1="120" y1="308" x2="640" y2="308" />
        <line x1="120" y1="328" x2="640" y2="328" />
        <line x1="120" y1="348" x2="640" y2="348" />
      </g>

      <!-- Clavier abstrait : bande basse, alternance touche — piano sans cliché -->
      <g class="page-backdrop__keys" :opacity="0.55">
        <rect
          v-for="(k, i) in keyStripes"
          :key="i"
          :x="k.x"
          y="628"
          :width="k.w"
          height="152"
          rx="1.5"
          :fill="palette.ink"
          :fill-opacity="k.o"
        />
      </g>
    </svg>
    <div class="page-backdrop__veil" />
  </div>
</template>

<script setup>
/** Palette alignée sur le thème sobre du site (piano / voix) */
const palette = {
  slate: '#6e7c91',
  warm: '#9a6b52',
  ink: '#1c1917',
}

/** Bande type clavier : alternance très légère, calée sur la largeur utile */
const keyStripes = (() => {
  const out = []
  let x = 72
  while (x < 1128) {
    const w = 26 + (out.length % 5) * 0.6
    out.push({ x, w, o: out.length % 2 === 0 ? 0.042 : 0.074 })
    x += w + 2.6
  }
  return out
})()
</script>

<style scoped>
.page-backdrop {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.page-backdrop__wash {
  position: absolute;
  inset: 0;
  background-color: #f7f6f5;
  background-image:
    radial-gradient(ellipse 72% 58% at 12% 88%, rgba(154, 107, 82, 0.06), transparent 58%),
    radial-gradient(ellipse 68% 52% at 92% 8%, rgba(110, 124, 145, 0.07), transparent 55%),
    linear-gradient(172deg, #fafafa 0%, #f2f0ee 48%, #ebe9e6 100%);
}

.page-backdrop__art {
  position: absolute;
  left: 50%;
  top: 48%;
  width: 118%;
  min-width: 960px;
  height: 112%;
  transform: translate(-50%, -50%);
}

.page-backdrop__veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    118deg,
    rgba(252, 251, 250, 0.97) 0%,
    rgba(250, 249, 248, 0.78) 38%,
    rgba(247, 246, 245, 0.42) 72%,
    rgba(245, 244, 242, 0.18) 100%
  );
}

@media (max-width: 640px) {
  .page-backdrop__art {
    width: 140%;
    top: 52%;
  }
}
</style>
