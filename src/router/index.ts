import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "board",
    component: () => import("../views/Board/BoardView.vue"),
  },
  {
    path: "/my-tasks",
    name: "my-tasks",
    component: () => import("../views/MyTasks/MyTasksView.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/Search/SearchView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
