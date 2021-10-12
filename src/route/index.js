// import VueRouter from 'vue-router'
import { createRouter,createWebHashHistory} from "vue-router";

const home = () => import("../views/index.vue")
const login = () => import("../views/login/index.vue")

const routes = [
  { path: "/h", redirect: "/login" },
  {
    path: "/home",
    name: "home",
    component: home
  },
  {
    path: "/login",
    name: "login",
    component: login
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
