<script setup>
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppBreadcrumb from './components/AppBreadcrumb.vue'
import PageBackdrop from './components/PageBackdrop.vue'

const mainRef = ref(null)

function focusMainContent() {
  requestAnimationFrame(() => {
    mainRef.value?.focus({ preventScroll: true })
  })
}
</script>

<template>
  <a href="#contenu-principal" class="skip-link" @click="focusMainContent">Aller au contenu</a>
  <PageBackdrop />
  <AppHeader />
  <main id="contenu-principal" ref="mainRef" class="app-main" tabindex="-1">
    <AppBreadcrumb />
    <RouterView />
  </main>
  <AppFooter />
</template>

<style scoped>
.skip-link {
  position: absolute;
  left: 0.85rem;
  top: 0.65rem;
  z-index: 100;
  padding: 0.55rem 1rem;
  border-radius: var(--radius-pill);
  font-weight: 600;
  font-size: 0.86rem;
  color: var(--color-text);
  background: #fff;
  border: 1px solid var(--color-border-strong);
  box-shadow: var(--shadow-md);
  transform: translateY(-160%);
  transition:
    transform 0.2s var(--ease-out),
    opacity 0.2s var(--ease-out);
  opacity: 0;
  pointer-events: none;
}

.skip-link:focus {
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
  outline: none;
  box-shadow:
    var(--shadow-md),
    0 0 0 3px var(--color-orange-soft);
}

.app-main {
  position: relative;
  z-index: 1;
  flex: 1;
  width: 100%;
}

.app-main:focus {
  outline: none;
}
</style>
