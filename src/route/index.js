// import VueRouter from 'vue-router'
import { createRouter,createWebHistory,createWebHashHistory } from "vue-router";

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
    redirect: '/adminWellcome',
    meta: { title: '首页1' },
    children: [
      { path: '/adminWellcome', name: 'adminWellcome', component: () => import("@/views/admin/adminWellcome.vue"),redirect: '',},
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes: routes
})


export default router;