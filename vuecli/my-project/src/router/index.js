import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/MyPage',
    name:'MyPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/MyPage.vue')
  },
  {
    path:'/ParentPage',
    name:'ParentPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/text_page/ParentPage.vue'),
    children:[
      {
        path:"/ParentPage/Child1/:username",
        name:"Child1",
        component: () => import(/* webpackChunkName: "about" */ '../views/text_page/Child1.vue'),
      },
      {
        path:"/ParentPage/Child2",
        name:"Child2",
        component: () => import(/* webpackChunkName: "about" */ '../views/text_page/Child2.vue'),
      },
    ]
  },
  {
    path:'/home',
    redirect:'/'
  },
  // {
  //   path:"/goChild1/:username",
  //   redirect:'/'
  // }
  {
    path:"*",
    component:()=>import('../views/Error.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
