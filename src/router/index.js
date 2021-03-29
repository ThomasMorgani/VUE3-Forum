import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/Pages/Home'
import ThreadShow from '@/Pages/ThreadShow'
import NotFound from '@/Pages/NotFound'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: ThreadShow,
    props: true,
    beforeEnter: (to, from, next) => {
      // ...
      next()
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
