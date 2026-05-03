<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const crumbs = computed(() => {
  if (route.path === '/') return []

  const items = [{ to: '/', label: 'Accueil' }]

  if (route.meta?.breadcrumbParent) {
    const parentPath = route.meta.breadcrumbParent
    const parent = router.getRoutes().find((r) => r.path === parentPath)
    const parentLabel = parent?.meta?.title || 'Section'
    items.push({ to: parentPath, label: parentLabel })
  }

  const label = route.meta?.title
  if (!label) return []

  items.push({ label, current: true })
  return items
})
</script>

<template>
  <nav v-if="crumbs.length" class="breadcrumb" aria-label="Fil d’Ariane">
    <ol class="breadcrumb__list">
      <li v-for="(item, index) in crumbs" :key="index" class="breadcrumb__item">
        <RouterLink v-if="item.to" class="breadcrumb__link" :to="item.to">{{ item.label }}</RouterLink>
        <span v-else class="breadcrumb__current" aria-current="page">{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumb {
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0.5rem 1.35rem 0.35rem;
}

@media (min-width: 768px) {
  .breadcrumb {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.breadcrumb__list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
  line-height: 1.4;
  color: var(--color-text-muted);
}

.breadcrumb__item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.breadcrumb__item:not(:last-child)::after {
  content: '/';
  color: #a8a29e;
  font-weight: 400;
  user-select: none;
}

.breadcrumb__link {
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color 0.15s var(--ease-out);
}

.breadcrumb__link:hover {
  color: var(--color-text);
}

.breadcrumb__current {
  color: var(--color-text);
  font-weight: 500;
}
</style>
