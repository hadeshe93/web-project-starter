import { lazy } from 'react';
import { RouteInfo } from '../types/route';


const ROUTES: RouteInfo[] = [
  {
    path: '/',
    component: lazy(() => import('../views/index/index')),
    exact: true,
  },
  {
    path: '/text',
    component: lazy(() => import('../views/text/index')),
  },
];

export default ROUTES;
