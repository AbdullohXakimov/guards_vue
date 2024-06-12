import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../layouts/AdminLayout.vue"),
      children: [
        {
          path: "",
          name: "admin-home",
          component: () => import("../views/admin/HomeView.vue"),
        },
        {
          path: "students",
          name: "admin-student",
          component: () => import("../views/admin/StudentsView.vue"),
        },
        {
          path: "about",
          name: "admin-about",
          component: () => import("../views/admin/AboutView.vue"),
        },
      ],
    },
    {
      path: "/auth",
      component: () => import("../layouts/AuthLayout.vue"),
      children: [
        {
          path: "login",
          name: "admin-login",
          component: () => import("../views/auth/LoginView.vue"),
        },
        {
          path: "register",
          name: "admin-register",
          component: () => import("../views/auth/RegisterView.vue"),
        },
      ],
    },
  ],
});


router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("user");

  if (
    !isAuthenticated &&
    to.path !== "/auth/login"
  ) {
    next({ name: "admin-login" });
  } else {
    next();
  }
});

export default router;
