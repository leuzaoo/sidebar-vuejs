import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory,
  routes: [
    {
      path: "/",
      component: () => import("@/components/Home.vue"),
    },
    {
      path: "/about",
      component: () => import("@/components/About.vue"),
    },
  ],
});

createApp(App).use(router).mount("#app");
