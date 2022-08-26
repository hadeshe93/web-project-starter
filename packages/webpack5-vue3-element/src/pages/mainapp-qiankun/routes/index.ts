import { RouteRecordRaw } from 'vue-router';

import Home from '../views/home/index.vue';
import User from '../views/user/index.vue';
import Page from '../views/page/index.vue';

export const ROUTES: RouteRecordRaw[] = [
  {
    path: '/',
    alias: '/home',
    component: Home
  },
  {
    path: '/user',
    component: User,
  },
  // micro apps routes
  {
    path: '/page/:microapp',
    component: Page,
  },
];
