import VueRouter from 'vue-router'
import index from '../views/index.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  }
]

const router = new VueRouter({
  routes
})

export default router
