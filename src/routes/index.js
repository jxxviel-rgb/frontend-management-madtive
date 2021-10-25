import axios from "axios";
import nprogress from "nprogress";
import nProgress from "nprogress";
import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../components/Dashboard.vue";
import Login from "../components/pages/auth/Login.vue";
import EmailVerification from "../components/pages/EmailVerification.vue";
import { store } from "../stores/";
const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { requiresVisitor: true },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../components/pages/auth/Register.vue"),
    children: [
      {
        path: "/email/verification",
        name: "verification",
        component: EmailVerification,
      },
    ],
  },
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/admin/dashboard",
    name: "admin",
    component: () => import("../components/pages/admin/Admin.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/clients",
    name: "clients",
    component: () => import("../components/pages/admin/Client.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/employees",
    name: "employees",
    component: () => import("../components/pages/admin/Employees.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/positions",
    name: "position",
    component: () => import("../components/pages/admin/Position.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/projects",
    name: "project",
    component: () => import("../components/pages/admin/Project.vue"),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (localStorage.getItem("token")) {
      store.dispatch("auth/checkingToken").then((res) => {
        if (res.status === 200) next();
        else if (res.status === 401) next({ name: "login" });
      });

      return;
    } else {
      next({
        name: "login",
      });
    }
  } else {
    next(); // make sure to always call next()!
  }
});

router.beforeResolve((to, from, next) => {
  if (to.path) {
    nProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  nProgress.done();
});
axios.interceptors.request.use((config) => {
  nProgress.start();
  return config;
});
axios.interceptors.response.use((response) => {
  nProgress.done();
  return response;
});

export default router;
