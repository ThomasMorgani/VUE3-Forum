import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/Pages/Home'
import Forum from '@/Pages/Forum'
import ThreadShow from '@/Pages/ThreadShow'
import NotFound from '@/Pages/NotFound'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/forum/:id',
    name: 'Forum',
    component: Forum,
    props: true,
    beforeEnter: (to, from, next) => {
      // ...
      next()
    },
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
