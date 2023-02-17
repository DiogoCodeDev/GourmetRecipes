import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LastNews from '../views/LastNews.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/LastNews',
    name: 'LastNews',
    component: LastNews
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
