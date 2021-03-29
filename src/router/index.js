import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/Pages/Home'
import PageThreadShow from '@/Pages/ThreadShow'
import NotFound from '@/Pages/NotFound'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome,
  },
  {
    path: '/thread/:id',
    name: 'PageThreadShow',
    component: PageThreadShow,
    props: true,
    beforeEnter: (to, from, next) => {
      // ...
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
