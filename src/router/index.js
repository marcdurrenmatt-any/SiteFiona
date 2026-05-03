import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoursesView from '../views/CoursesView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ProjetsView from '../views/ProjetsView.vue'
import CoursePianoView from '../views/CoursePianoView.vue'
import CourseChantView from '../views/CourseChantView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'accueil', component: HomeView, meta: { title: 'Accueil' } },
    { path: '/cours', name: 'cours', component: CoursesView, meta: { title: 'Cours' } },
    {
      path: '/cours/piano',
      name: 'cours-piano',
      component: CoursePianoView,
      meta: { title: 'Cours de piano', breadcrumbParent: '/cours' },
    },
    {
      path: '/cours/chant',
      name: 'cours-chant',
      component: CourseChantView,
      meta: { title: 'Cours de chant', breadcrumbParent: '/cours' },
    },
    { path: '/projets', name: 'projets', component: ProjetsView, meta: { title: 'Projets' } },
    { path: '/a-propos', name: 'a-propos', component: AboutView, meta: { title: 'À propos' } },
    { path: '/contact', name: 'contact', component: ContactView, meta: { title: 'Contact' } },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const base = "Fiona Climent — L'arbre des voix"
  document.title = to.meta.title ? `${to.meta.title} — ${base}` : base
})

export default router
