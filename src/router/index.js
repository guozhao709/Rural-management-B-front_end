import { createRouter, createWebHashHistory } from "vue-router";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/pages/login/index.vue"),
    },
    {
      path: "/login",
      component: () => import("@/pages/login/index.vue"),
    },
    {
      path: "/home",
      component: () => import("@/pages/home/index.vue"),
      children: [
        {
          path: "/dashboard",
          component: () => import("@/pages/function/dashboard.vue"),
        },
        {
          path: "/admin",
          component: () => import("@/pages/function/administrator.vue"),
        },
        {
          path: "/villagers",
          component: () => import("@/pages/function/villagers.vue"),
        },
        {
          path: "/settings",
          component: () => import("@/pages/function/settings.vue"),
        },
      ],
    },
  ],
});
