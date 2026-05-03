<script setup>

import { computed } from 'vue'

import { useRoute } from 'vue-router'

import { publicAsset } from '@/utils/publicUrl'



const route = useRoute()



const links = [

  { to: '/', label: 'Accueil' },

  { to: '/cours', label: 'Cours' },

  { to: '/projets', label: 'Projets' },

  { to: '/a-propos', label: 'À propos' },

  { to: '/contact', label: 'Contact' },

]



function isActive(path) {

  if (path === '/') return route.path === '/'

  return route.path.startsWith(path)

}



const headerClass = computed(() => ({

  'app-header--home': route.path === '/',

}))

</script>



<template>

  <header class="app-header" :class="headerClass">

    <div class="app-header__inner">

      <RouterLink to="/" class="app-header__brand">

        <img class="app-header__logo" :src="publicAsset('/image/g499.svg')" alt="" width="44" height="44" />

        <span class="app-header__brand-text">

          <span class="app-header__brand-name">Fiona</span>

          <span class="app-header__brand-name app-header__brand-name--accent">Climent</span>

        </span>

      </RouterLink>

      <nav class="app-header__nav" aria-label="Navigation principale">

        <RouterLink

          v-for="link in links"

          :key="link.to"

          :to="link.to"

          class="app-header__link"

          :class="{ 'app-header__link--active': isActive(link.to) }"

        >

          {{ link.label }}

        </RouterLink>

      </nav>

    </div>

  </header>

</template>



<style scoped>

.app-header {

  position: sticky;

  top: 0;

  z-index: 50;

  background: rgba(255, 255, 255, 0.86);

  backdrop-filter: blur(16px) saturate(1.2);

  -webkit-backdrop-filter: blur(16px) saturate(1.2);

  border-bottom: 1px solid var(--color-border);

  box-shadow: var(--shadow-sm);

}



.app-header--home {

  position: absolute;

  left: 0;

  right: 0;

  background: rgba(255, 255, 255, 0.9);

  border-bottom-color: var(--color-border);

}



.app-header__inner {

  max-width: 1120px;

  margin: 0 auto;

  padding: 0.9rem 1.35rem;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 1rem;

  min-height: var(--header-height);

}



.app-header__brand {

  display: inline-flex;

  align-items: center;

  gap: 0.7rem;

  font-weight: 700;

  font-size: 1.18rem;

  letter-spacing: -0.03em;

  line-height: 1.2;

  color: var(--color-text);

  transition: opacity 0.2s var(--ease-out);

}



.app-header__brand:hover {

  opacity: 0.92;

}



.app-header__logo {

  width: 42px;

  height: 42px;

  object-fit: contain;

  flex-shrink: 0;

  opacity: 0.97;

}



.app-header__brand-text {

  display: inline-flex;

  align-items: baseline;

  gap: 0.35rem;

}



.app-header__brand-name {

  color: var(--color-text);

}



.app-header__brand-name--accent {

  color: var(--color-orange);

}



.app-header__nav {

  display: flex;

  flex-wrap: wrap;

  align-items: center;

  justify-content: flex-end;

  gap: 0.25rem;

}



.app-header__link {

  font-size: 0.9rem;

  font-weight: 500;

  color: var(--color-text-muted);

  padding: 0.45rem 0.9rem;

  border-radius: var(--radius-pill);

  border: 1px solid transparent;

  transition:

    color 0.2s var(--ease-out),

    background 0.2s var(--ease-out),

    border-color 0.2s var(--ease-out);

}



.app-header__link:hover {

  color: var(--color-text);

  background: rgba(28, 25, 23, 0.04);

}



.app-header__link--active {

  color: var(--color-orange);

  background: var(--color-orange-soft);

  border-color: rgba(255, 122, 0, 0.2);

  font-weight: 600;

}



@media (max-width: 520px) {

  .app-header__inner {

    flex-direction: column;

    align-items: flex-start;

  }



  .app-header__nav {

    width: 100%;

    justify-content: flex-start;

  }

}

</style>


