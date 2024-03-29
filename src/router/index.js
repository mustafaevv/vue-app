import { createRouter, createWebHistory } from "vue-router";
import { HomeView, RegisterView, LoginView, ArticleView,CreateArticle,EditArticle } from "@/views";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/article/:slug",
      name: "article",
      component: ArticleView,
    },
    {
      path: "/create-article/",
      name: "create-article",
      component: CreateArticle,
    },
    {
      path: "/edit-article/:slug",
      name: "edit-article",
      component: EditArticle,
    },
  ],
});

export default router;
