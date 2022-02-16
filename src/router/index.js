import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Category from "../views/Category.vue"
import Post from "../views/Post.vue"
import Login from "../views/Login.vue"
import Register  from "../views/Register.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/category',
    name: "category",
    component: Category
  },
  {
    path: '/post',
    name: "post",
    component: Post
  },
  {
    path: '/login',
    name: "login",
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;