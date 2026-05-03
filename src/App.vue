<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppBreadcrumb from './components/AppBreadcrumb.vue'
import PageBackdrop from './components/PageBackdrop.vue'
</script>

<template>
  <PageBackdrop />
  <AppHeader />
  <main class="app-main">
    <AppBreadcrumb />
    <RouterView />
  </main>
  <AppFooter />
</template>

<style scoped>
.app-main {
  position: relative;
  z-index: 1;
  flex: 1;
  width: 100%;
}
</style>
