import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "books" */ '../views/Home.vue'),
  },
  {
    path: '/books',
    name: 'books',
    component: () => import(/* webpackChunkName: "books" */ '../views/Books.vue'),
  },
  {
    path: '/authors',
    name: 'authors',
    component: () => import(/* webpackChunkName: "authors" */ '../views/Authors.vue'),
  },
  {
    path: '/book/:bookId',
    name: 'book',
    props: true,
    component: () => import(/* webpackChunkName: "book" */ '../views/Book.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
