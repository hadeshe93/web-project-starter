import { RouteRecordRaw } from 'vue-router';

import { getFormattedSetupAppConfig, MICRO_APPS_MAP } from '../configs/micro-apps';
import Home from '../views/home/index.vue';
import User from '../views/user/index.vue';
import renderWujieComponent from '../components/dynamic-wujie-wrapper/index';

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
    path: '/authcms',
    component: renderWujieComponent(getFormattedSetupAppConfig(MICRO_APPS_MAP.authcms)),
  },
];
