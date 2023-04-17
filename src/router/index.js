import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import ArticleView from "../views/Article.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    // articles
    {
      path: "/articles",
      name: "articles",
      component: () => import("../views/Articles.vue"),
    },
    // article
    {
      path: "/articles/:id",
      name: "article",
      component: ArticleView,
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
