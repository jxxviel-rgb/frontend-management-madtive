import axios from "axios";
import NProgress from "nprogress";
import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../components/Dashboard.vue";
import Login from "../components/pages/auth/Login.vue";
import EmailVerification from "../components/pages/EmailVerification.vue";
import LogMessage from "../components/pages/admin/LogMessage.vue";
import { store } from "../stores/";
const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { requiresVisitor: true },
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token")) {
        next({ name: "admin" });
      } else next();
    },
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
    path: "/admin/reminder",
    name: "reminder",
    component: () => import("../components/pages/admin/Reminder.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/configurations/positions",
    name: "position",
    component: () => import("../components/pages/admin/Position.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/configurations/messages",
    name: "sender",
    component: () => import("../components/pages/admin/Message.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/configurations/projectCost",
    name: "projectCost",
    component: () => import("../components/pages/admin/ProjectCost.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/projects",
    name: "project",
    component: () => import("../components/pages/admin/Project.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/messages/logs",
    name: "log",
    component: () => import("../components/pages/admin/LogMessage.vue"),
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
        else next();
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

router.beforeEach((transition) => {
  NProgress.start();
});
router.afterEach((transition) => {
  NProgress.done();
});
axios.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});
axios.interceptors.response.use((response) => {
  NProgress.done();
  return response;
});

export default router;
