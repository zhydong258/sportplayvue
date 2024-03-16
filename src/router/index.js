import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import Home from "../components/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/Login",
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问
  // from 从哪访问
  // next 接着干 next(url) 重定向到url上 next() 继续访问 to 路径
  if (to.path == "/login") return next();
  // 获取 user
  const userFlag = window.sessionStorage.getItem("user");
  if (!userFlag) return next("/login");
  next();
});

export default router;
