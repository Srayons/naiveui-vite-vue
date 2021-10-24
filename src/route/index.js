// import VueRouter from 'vue-router'
import { createRouter,createWebHashHistory} from "vue-router";

const home = () => import("../views/index.vue")
const login = () => import("../views/login/index.vue")

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
  }
]

 const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router;