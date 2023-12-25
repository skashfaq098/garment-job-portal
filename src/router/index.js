import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegistrationView from "../views/Registration/RegistrationView.vue"
import LoginView from "../views/Registration/LoginView.vue"
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/registration",
    name: "registration",
    component: RegistrationView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
