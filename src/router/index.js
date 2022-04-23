import { createRouter, createWebHistory } from "vue-router"
import HOME from "@/views/Home.vue"
import Japan_top50 from "@/views/Japan_Top50.vue"
import World_top50 from "@/views/World_Top50.vue"
import happy from "@/components/happy.vue"
import energy from "@/components/liveness.vue"
import liveness from "@/components/energy.vue"

const routes = [
  {
    path: "/",
    name: "HOME",
    component: HOME,
  },
  {
    path: "/Japan_top50",
    name: "Japan_top50",
    component: Japan_top50,
    children: [
      { path: "happy", component: happy },
      { path: "energy", component: energy },
      { path: "liveness", component: liveness },
    ],
  },
  {
    path: "/World_top50",
    name: "World_top50",
    component: World_top50,
    children: [
      { path: "happy", component: happy },
      { path: "energy", component: energy },
      { path: "liveness", component: liveness },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
