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
    meta: { title: '首页' },
    children: [
      { path: '/adminWellcome', name: 'adminWellcome', component: () => import("@/views/admin/wellcome.vue"), meta: { title: '首页' } },
      { path: '/menuManager', name: 'menuManager', component: () => import("@/views/admin/menu/test2.vue"), meta: { title: '测试页面2' } },
      { path: '/test3', name: 'test3', component: () => import("@/views/admin/menu/test3.vue"), meta: { title: '测试页面3' } },
      { path: '/iconManager', name: 'iconManager', component: () => import("@/views/admin/menu/test4.vue"), meta: { title: '测试页面4' } },
      { path: '/test5', name: 'test5', component: () => import("@/views/admin/menu/test5.vue"), meta: { title: '测试页面5' } },
      { path: '/test6', name: 'test6', component: () => import("@/views/admin/menu/test6.vue"), meta: { title: '测试页面6' } },
      { path: '/test7', name: 'test7', component: () => import("@/views/admin/menu/test7.vue"), meta: { title: '测试页面7' } },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes: routes
})


export default router;