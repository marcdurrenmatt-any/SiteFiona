<template>
  <div class="center-tree">
    <span class="center-tree__glow center-tree__glow--piano" aria-hidden="true" />
    <span class="center-tree__glow center-tree__glow--chant" aria-hidden="true" />
    <div class="center-tree__figure">
      <img
        class="center-tree__img"
        src="/image/g499.svg"
        alt=""
        width="250"
        height="494"
        decoding="async"
      />
    </div>
  </div>
</template>

<style scoped>
.center-tree {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: min(38vh, 320px);
  padding: 0.75rem 0.35rem;
}

.center-tree__glow {
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
  filter: blur(42px);
  opacity: 0;
  transition:
    opacity 0.65s cubic-bezier(0.33, 1, 0.68, 1),
    transform 0.75s cubic-bezier(0.34, 1.25, 0.64, 1);
  z-index: 0;
  will-change: opacity, transform;
}

.center-tree__glow--piano {
  width: min(190%, 340px);
  height: min(70%, 280px);
  left: -42%;
  top: 18%;
  background: radial-gradient(
    ellipse at 35% 45%,
    rgba(116, 153, 241, 0.55) 0%,
    rgba(116, 153, 241, 0.15) 45%,
    transparent 72%
  );
  transform: scale(0.92) translateX(4px);
}

.center-tree__glow--chant {
  width: min(190%, 340px);
  height: min(70%, 280px);
  right: -42%;
  top: 18%;
  background: radial-gradient(
    ellipse at 65% 45%,
    rgba(245, 130, 22, 0.5) 0%,
    rgba(245, 130, 22, 0.14) 45%,
    transparent 72%
  );
  transform: scale(0.92) translateX(-4px);
}

.center-tree__figure {
  position: relative;
  z-index: 1;
  padding: 0;
  background: transparent;
  border: none;
  box-shadow: none;
}

.center-tree__img {
  display: block;
  width: auto;
  max-width: min(168px, 38vw);
  height: auto;
  max-height: min(42vh, 340px);
  object-fit: contain;
  filter: drop-shadow(0 10px 28px rgba(28, 25, 23, 0.07));
  transform-origin: 50% 55%;
  transition:
    transform 0.75s cubic-bezier(0.34, 1.25, 0.64, 1),
    filter 0.65s cubic-bezier(0.33, 1, 0.68, 1);
  will-change: transform, filter;
}

@media (min-width: 920px) {
  .center-tree {
    min-height: 0;
    padding: 0.5rem;
  }

  .center-tree__img {
    max-width: min(200px, 22vw);
    max-height: min(58vh, 460px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .center-tree__glow,
  .center-tree__img {
    transition-duration: 0.01ms;
  }

  .center-tree__glow {
    will-change: auto;
  }

  .center-tree__img {
    will-change: auto;
  }
}
</style>
