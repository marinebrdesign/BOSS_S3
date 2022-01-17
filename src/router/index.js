import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../pages/accueil'
import Biographie from '../pages/biographie'
import Discographie from '../pages/discographie'
import Filmographie from '../pages/filmographie'
import Formulaire from '../pages/formulaire'

Vue.use(VueRouter)

const routes = [
  {
    path: '/biographie',
    name: 'biographie',
    component: Biographie,
  },
  {
    path: '/discographie',
    name: 'discographie',
    component: Discographie,
  },

  {
    path: '/filmographie',
    name: 'filmograhpie',
    component: Filmographie,
  },

  {
    path: '/formulaire',
    name: 'formulaire',
    component: Formulaire,
  },

  {
    path: '/',
    name: 'Accueil',
    component: Accueil,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
})
export default router
