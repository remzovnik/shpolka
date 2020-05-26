import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/books',
    name: 'books',
    component: () => import(/* webpackChunkName: "books" */ '../views/Books.vue'),
  },
  {
    path: '/authors',
    name: 'authors',
    component: () => import(/* webpackChunkName: "books" */ '../views/Authors.vue'),
  },
  {
    path: '/author/:authorId',
    name: 'author',
    component: () => import(/* webpackChunkName: "author" */ '../views/Author.vue'),
  },
  {
    path: '/book/:bookId',
    name: 'book',
    component: () => import(/* webpackChunkName: "book" */ '../views/Book.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
