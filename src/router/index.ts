import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import BaseLayout from '../layouts/BaseLayout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path : '/',
    name : "baseLayout",
    component:BaseLayout,
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        component: About
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
