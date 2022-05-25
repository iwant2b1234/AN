import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes:[
    {
      path: '/',
      name: 'About',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/Basketball',
      name: 'Basketball',
      component: () => import('../views/Basketball.vue'),
    },
    {
      path: '/Solitaire',
      name: 'Solitaire',
      component: () => import('../views/Solitaire.vue'),
    },
    {
      path: '/chatroom',
      name: 'Chatroom',
      component: () => import('../views/Chatroom.vue'),
    },
    {
      path: '/table',
      name: 'Table',
      component: () => import('../views/Table.vue'),
    },
    {
      path: '/Banner',
      name: 'Banner',
      component: () => import('../views/Banner.vue'),
    },
    {
      path: '/Ooxx',
      name: 'Ooxx',
      component: () => import('../views/Ooxx.vue'),
    },
    // {
    //   path: '/',
    //   name: 'Lobby',
    //   component: () => import('../views/Lobby.vue'),
    // }
  ]
})
router.beforeEach((to, from, next) => {
  // const path = to.path
  next()
})

export default router
