import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "*",
    component: () => import("../views/404.vue")
  },
  {
    path: "/jadwal",
    name: "Jadwal",
    component: () => import("../views/Jadwal.vue")
  },
  {
    path: "/siswa",
    name: "Siswa",
    component: () => import("../views/Siswa.vue")
  },
  {
    path: "/piket",
    name: "Piket",
    component: () => import("../views/Piket.vue")
  },
  {
    path: "/struktur",
    name: "Struktur",
    component: () => import("../views/Struktur.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
