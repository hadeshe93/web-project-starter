import React, { Suspense } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { RouteInfo } from '../types/route';

interface RouterProps {
  routes: RouteInfo[];
}

export default function Router(props: RouterProps) {
  const { routes } = props;
  return (
    <HashRouter>
      <Suspense fallback={<div>Loading ...</div>}>
        <Switch>
          {
            routes.map((route, index) => <Route key={route.path} path={route.path} exact={route.exact || false} component={route.component} />)
          }
        </Switch>
      </Suspense>
    </HashRouter>
  );
}
