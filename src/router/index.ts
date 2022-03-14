import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateUser from "../views/CreateUserView.vue";
import ChatView from "../views/ChatView.vue";
import MyPageView from "../views/MyPageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/myPage",
      name: "MyPage",
      component: MyPageView,
    },
    {
      path: "/chat",
      name: "Chat",
      component: ChatView,
    },
    {
      path: "/createUser",
      name: "CreateUser",
      component: CreateUser,
    },
  ],
});

export default router;
