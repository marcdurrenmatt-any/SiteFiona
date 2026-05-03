<template>
  <div class="page-backdrop" aria-hidden="true">
    <!-- Base neutre -->
    <div class="page-backdrop__base" />

    <!-- Champ coloré inspiré de Fond-colore 2 (horizontal chaud → bronze, halo crème) -->
    <div class="page-backdrop__field" />

    <!-- Grain procédural (net à toute résolution) -->
    <svg class="page-backdrop__grain-svg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <defs>
        <filter id="page-bd-noise" x="-20%" y="-20%" width="140%" height="140%" color-interpolation-filters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="3" stitchTiles="stitch" result="t" />
          <feColorMatrix
            in="t"
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 0.11 0"
            result="n"
          />
        </filter>
      </defs>
      <rect width="100%" height="100%" filter="url(#page-bd-noise)" opacity="1" />
    </svg>

    <!-- Décor musical + touches « matière » (taches, rayures) dans le même viewBox -->
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

      <!-- Blobs type lavis / éclaboussures (tons rouille, bordeaux, terre) -->
      <g class="page-backdrop__splatter">
        <ellipse
          v-for="(b, i) in splatterBlobs"
          :key="'b' + i"
          :cx="b.cx"
          :cy="b.cy"
          :rx="b.rx"
          :ry="b.ry"
          :fill="b.fill"
          :opacity="b.o"
          :transform="b.rot ? `rotate(${b.rot} ${b.cx} ${b.cy})` : undefined"
        />
      </g>

      <!-- Chaleur rappel chant -->
      <ellipse
        cx="920"
        cy="200"
        rx="420"
        ry="260"
        :fill="palette.warm"
        fill-opacity="0.038"
        transform="rotate(-8 920 200)"
      />
      <!-- Fraîcheur piano (bleu doux pour équilibre avec le rouge du fond) -->
      <ellipse
        cx="220"
        cy="520"
        rx="380"
        ry="300"
        fill="#5b6e8c"
        fill-opacity="0.045"
        transform="rotate(6 220 520)"
      />

      <!-- Rayures fines type papier usé -->
      <g class="page-backdrop__scratches" opacity="0.85">
        <line
          v-for="(s, i) in scratches"
          :key="'s' + i"
          :x1="s.x1"
          :y1="s.y1"
          :x2="s.x2"
          :y2="s.y2"
          stroke="#fdfcfa"
          stroke-width="0.4"
          :opacity="s.o"
          stroke-linecap="round"
        />
      </g>

      <g
        class="page-backdrop__staff"
        fill="none"
        stroke="url(#bdFadeStaff)"
        stroke-width="0.65"
        stroke-linecap="round"
        opacity="0.72"
      >
        <line x1="120" y1="268" x2="640" y2="268" />
        <line x1="120" y1="288" x2="640" y2="288" />
        <line x1="120" y1="308" x2="640" y2="308" />
        <line x1="120" y1="328" x2="640" y2="328" />
        <line x1="120" y1="348" x2="640" y2="348" />
      </g>

      <g class="page-backdrop__keys" :opacity="0.5">
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
const palette = {
  warm: '#9a6b52',
  ink: '#1c1917',
}

const keyStripes = (() => {
  const out = []
  let x = 72
  while (x < 1128) {
    const w = 26 + (out.length % 5) * 0.6
    out.push({ x, w, o: out.length % 2 === 0 ? 0.038 : 0.068 })
    x += w + 2.6
  }
  return out
})()

/** Taches organiques rappelant l’aquarelle / le fond coloré d’origine */
const splatterBlobs = [
  { cx: 180, cy: 320, rx: 220, ry: 140, rot: -8, fill: '#b8434c', o: 0.09 },
  { cx: 420, cy: 260, rx: 160, ry: 110, rot: 14, fill: '#c45a52', o: 0.065 },
  { cx: 620, cy: 380, rx: 200, ry: 130, rot: -18, fill: '#9e4a45', o: 0.055 },
  { cx: 880, cy: 280, rx: 280, ry: 160, rot: 6, fill: '#a67c52', o: 0.08 },
  { cx: 1020, cy: 480, rx: 240, ry: 180, rot: -12, fill: '#7d553f', o: 0.085 },
  { cx: 760, cy: 620, rx: 320, ry: 120, rot: 4, fill: '#6b4a3e', o: 0.06 },
  { cx: 320, cy: 560, rx: 140, ry: 90, rot: 22, fill: '#8b3a42', o: 0.045 },
  { cx: 520, cy: 140, rx: 380, ry: 90, rot: -3, fill: '#faf6ef', o: 0.35 },
]

/** Rayures pseudo-aléatoires mais stables (SSR-friendly) */
const scratches = (() => {
  const out = []
  let seed = 12345
  const rnd = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff
    return seed / 0x7fffffff
  }
  for (let i = 0; i < 56; i++) {
    const x1 = rnd() * 1160 + 20
    const y1 = rnd() * 740 + 20
    const len = 28 + rnd() * 72
    const ang = rnd() * Math.PI * 2
    out.push({
      x1,
      y1,
      x2: x1 + Math.cos(ang) * len,
      y2: y1 + Math.sin(ang) * len,
      o: 0.035 + rnd() * 0.055,
    })
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

.page-backdrop__base {
  position: absolute;
  inset: 0;
  background-color: #f3efe8;
  background-image: linear-gradient(172deg, #faf7f2 0%, #ebe6df 55%, #e5dfd6 100%);
}

.page-backdrop__field {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 52% 42% at 50% 14%, rgba(255, 252, 246, 0.92) 0%, transparent 68%),
    radial-gradient(ellipse 38% 32% at 68% 52%, rgba(166, 124, 82, 0.16) 0%, transparent 72%),
    radial-gradient(ellipse 42% 36% at 22% 58%, rgba(184, 67, 76, 0.13) 0%, transparent 70%),
    radial-gradient(ellipse 78% 58% at 92% 68%, rgba(109, 74, 61, 0.16) 0%, transparent 62%),
    radial-gradient(ellipse 72% 54% at 6% 38%, rgba(196, 86, 82, 0.14) 0%, transparent 58%),
    linear-gradient(
      106deg,
      rgba(200, 72, 78, 0.15) 0%,
      rgba(247, 238, 228, 0.06) 36%,
      rgba(176, 132, 94, 0.11) 68%,
      rgba(98, 62, 52, 0.13) 100%
    );
  opacity: 0.92;
}

.page-backdrop__grain-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: multiply;
  opacity: 0.55;
}

.page-backdrop__art {
  position: absolute;
  left: 50%;
  top: 48%;
  width: 118%;
  min-width: 960px;
  height: 112%;
  transform: translate(-50%, -50%);
  opacity: 0.92;
}

.page-backdrop__splatter {
  filter: blur(1.2px);
}

.page-backdrop__veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    158deg,
    rgba(253, 251, 248, 0.79) 0%,
    rgba(251, 248, 244, 0.52) 38%,
    rgba(248, 244, 239, 0.34) 72%,
    rgba(245, 241, 236, 0.22) 100%
  );
}

@media (max-width: 640px) {
  .page-backdrop__art {
    width: 140%;
    top: 52%;
  }

  .page-backdrop__field {
    opacity: 0.88;
  }

  .page-backdrop__grain-svg {
    opacity: 0.42;
  }
}
</style>
