import { createWebHistory, createRouter } from "vue-router"
import Home from "../components/Home.vue"
import Create from "../components/Create.vue"
import Send from "../components/Send.vue"
import Read from "../components/Read.vue"
import Preview from "../components/Preview.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/create",
    name: "Create",
    component: Create
  },
  {
    path: "/send/:url",
    name: "Send",
    component: Send
  },
  {
    path: "/read",
    name: "Read",
    component: Read
  },
  {
      path: "/preview",
      name: "preview",
      component: Preview
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;