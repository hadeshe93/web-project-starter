import { RouteRecordRaw } from 'vue-router';
import Home from '../views/home/index.vue'
import User from '../views/user/index.vue'

type RouteRecord = RouteRecordRaw & {
  zhName?: string;
}

export const ROUTES: RouteRecord[] = [{
  path: '/',
  alias: '/home',
  zhName: 'Home',
  component: Home,
}, {
  path: '/user',
  zhName: 'User',
  component: User,
}];