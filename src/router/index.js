// import VueRouter from 'vue-router'
import { createRouter,createWebHashHistory} from "vue-router";

const home = () => import("../views/index.vue")
const login = () => import("../login")

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: home
  },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: login
  // }
]



export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
