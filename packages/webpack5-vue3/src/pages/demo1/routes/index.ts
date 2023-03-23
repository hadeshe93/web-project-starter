import { RouteRecordRaw } from 'vue-router';
import User from '../views/user/index.vue';
import About from '../views/about/index.vue';

export const ROUTES: RouteRecordRaw[] = [
  {
    path: '/user',
    component: User,
  },
  {
    path: '/about',
    component: About,
  },
];
