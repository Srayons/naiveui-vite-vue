// import VueRouter from 'vue-router'
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/admin/index",
    name: "adminIndex",
    component: () => import("@/views/admin/index.vue"),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router;