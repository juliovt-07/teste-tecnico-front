import { createRouter, createWebHistory } from 'vue-router'
import UsersList from '@/views/UsersList.vue'
import CreateUser from '@/views/CreateUser.vue'
import InfoUsers from '@/views/InfoUsers.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: UsersList
    },
    {
      path: '/create',
      name: 'create',
      component: CreateUser
    },
    {
      path: '/info',
      name: 'info',
      component: InfoUsers
    }
  ]
})

export default router
