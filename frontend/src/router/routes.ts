import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layouts/HomeLayout.vue'),
    children: [{ path: '', component: () => import('pages/HomePage.vue') }],
  },
  {
    path: '/login',
    component: () => import('../layouts/LoginLayout.vue'),
    children: [{path: '', component: () => import('pages/LoginPage.vue')}],
  },
  {
    path: '/createAccount',
    component: () => import('../layouts/CreateAccountLayout.vue'),
    children: [{path: '', component: () => import('pages/CreateAccountPage.vue')}]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
