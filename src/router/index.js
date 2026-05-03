import { createRouter, createWebHistory } from 'vue-router'
import { applyDocumentMeta, absolutePublicUrl } from '@/utils/documentMeta'
import HomeView from '../views/HomeView.vue'
import CoursesView from '../views/CoursesView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ProjetsView from '../views/ProjetsView.vue'
import CoursePianoView from '../views/CoursePianoView.vue'
import CourseChantView from '../views/CourseChantView.vue'
import MentionsLegalesView from '../views/MentionsLegalesView.vue'

const SITE_TITLE_BASE = "Fiona Climent — L'arbre des voix"

/** Meta description par défaut (cohérent avec index.html avant hydratation). */
const DEFAULT_META_DESCRIPTION =
  "Fiona Climent — L'arbre des voix : cours de piano et de chant à Toulouse et en visio. Tous les niveaux, cours sur mesure."

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: HomeView,
      meta: {
        title: 'Accueil',
        description:
          'Cours de piano et de chant avec Fiona Climent à Toulouse et en visio. Parcours bienveillants pour tous les niveaux — L’arbre des voix.',
      },
    },
    {
      path: '/cours',
      name: 'cours',
      component: CoursesView,
      meta: {
        title: 'Cours',
        description:
          'Vue d’ensemble des cours : piano et chant, séances individuelles à Toulouse ou en visio, horaires indicatifs et accès aux pages détaillées.',
      },
    },
    {
      path: '/cours/piano',
      name: 'cours-piano',
      component: CoursePianoView,
      meta: {
        title: 'Cours de piano',
        breadcrumbParent: '/cours',
        description:
          'Cours de piano sur mesure : technique, lecture à vue, répertoire et préparation de concerts. Toulouse ou visio, enfants, adolescents et adultes.',
      },
    },
    {
      path: '/cours/chant',
      name: 'cours-chant',
      component: CourseChantView,
      meta: {
        title: 'Cours de chant',
        breadcrumbParent: '/cours',
        description:
          'Cours de chant individuels : respiration, justesse, timbre et interprétation. Toulouse ou visio — tous les niveaux avec Fiona Climent.',
      },
    },
    {
      path: '/projets',
      name: 'projets',
      component: ProjetsView,
      meta: {
        title: 'Projets',
        description:
          'Auditions, atelier chorale, stages et concerts partagés : des temps collectifs pour jouer ensemble et prendre la scène en douceur.',
      },
    },
    {
      path: '/a-propos',
      name: 'a-propos',
      component: AboutView,
      meta: {
        title: 'À propos',
        description:
          'Pianiste et pédagogue à Toulouse : découvrir le parcours, la pédagogie et la philosophie des cours — L’arbre des voix.',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: 'Contact',
        description:
          'Écrire ou appeler pour les cours de piano et de chant : créneaux, niveaux, visio et premiers échanges avec Fiona Climent.',
      },
    },
    {
      path: '/mentions-legales',
      name: 'mentions-legales',
      component: MentionsLegalesView,
      meta: {
        title: 'Mentions légales',
        description:
          'Mentions légales du site L’arbre des voix : édition, hébergement, propriété intellectuelle et données personnelles.',
      },
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const docTitle = to.meta.title ? `${to.meta.title} — ${SITE_TITLE_BASE}` : SITE_TITLE_BASE
  document.title = docTitle

  const description = typeof to.meta.description === 'string' ? to.meta.description : DEFAULT_META_DESCRIPTION
  const canonicalUrl = typeof window !== 'undefined' ? window.location.href.split('#')[0] : ''
  const imageUrl = absolutePublicUrl('/image/72825.webp')

  applyDocumentMeta({
    title: docTitle,
    description,
    canonicalUrl,
    imageUrl,
  })
})

export default router
