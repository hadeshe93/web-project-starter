import { ExoticComponent } from 'react';

export interface RouteInfo{
  path: string;
  component: ExoticComponent;
  exact?: boolean;
}