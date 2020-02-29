import Vue from 'vue'
import VueRouter from 'vue-router'
import TvPlay from '../views/tvplay/TvPlay.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TvPlay',
    component: TvPlay

  },
  {
    path: '/music',
    name: 'music',
    component: () => import( '../views/music/Music.vue')

  },
  {
    path: '/talk',
    name: 'talk',
    component: () => import( '../views/talk/Talk.vue')

  },
  {
    path: '/book',
    name: 'book',
    component: () => import( '../views/book/Book.vue')

  },
  // {
  //   path: '/TvShow',
  //   name: 'TvShow',
    
  //   component: () => import( '../views/tvplay/TvPlay.vue')
  // },
  // {
  //   path: '/TvShow',
  //   name: 'TvShow',
    
  //   component: () => import( '../views/tvplay/TvPlay.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
