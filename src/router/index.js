import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '../views/Login.vue';

import Layout from '../components/Layout';
import Newsfeed from '../views/Newsfeed';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Newsfeed',
        component: Newsfeed,
      }
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
