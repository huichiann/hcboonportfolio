import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
{ path: '/', 
    name: 'Home', 
    component: Home,
    meta: {
        title: 'Boon Hui Chiann',
        metaTags: [
          {
            name: 'description',
            content: "Boon Hui Chiann's Web Portfolio"
          },
          {
            property: 'og:description',
            content: 'Boon Hui Chiann'
          },
          {
            property: 'og:title',
            content: 'Boon Hui Chiann'
          },
          {
            property: 'og:site_name',
            content: 'Boon Hui Chiann'
          },
          {
            property: 'og:type',
            content: 'website'
          },
        ]
      } 
},
  { path: '/resume', name: 'Resume', component: () => import('../views/resume.vue')},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
