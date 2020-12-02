import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

let routes = [
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
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

// Project Pages

routes = [

    {
        component: () => import(
            /* webpackChunkName: "PageIntro" */
                        '../views/PageIntro.vue'),
            name:                'PageIntro',
            path:               '/PageIntro',
            alias:              '/start',
    },
    {
        component: () => import(
            /* webpackChunkName: "PageHome" */
                        '../views/PageHome.vue'),
            name:                'PageHome',
            path:               '/PageHome',
    },
    {
        component: () => import(
            /* webpackChunkName: "PageM0" */
                        '../views/PageM0.vue'),
            name:                'PageM0',
            path:               '/PageM0',
    },
    {
        component: () => import(
            /* webpackChunkName: "PageM0-SetFocus" */
                        '../views/PageM0-SetFocus.vue'),
            name:                'PageM0-SetFocus',
            path:               '/PageM0-SetFocus',
    },

...routes ]

const router = new VueRouter({
  routes
})

export default router
