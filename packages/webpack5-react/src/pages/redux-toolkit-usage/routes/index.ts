import { lazy } from 'react';
import { RouteInfo } from '../../../types/route';


const ROUTES: RouteInfo[] = [
  {
    path: '/',
    component: lazy(() => import('../views/index/index')),
    exact: true,
  },
  {
    path: '/create',
    component: lazy(() => import('../views/create/index')),
  },
];

export default ROUTES;
