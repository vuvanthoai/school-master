import { Route } from '@angular/router';
import { clientFeatureRoutes } from './client-feature/client-feature.routes';
import { HttpStatusCode } from '@angular/common/http';

export const appRoutes: Route[] = [
  ...clientFeatureRoutes,
  {
    path: '404-not-found',
    loadComponent: () =>
      import('../libs/common-ui/page-not-found/src/index').then(
        (m) => m.PageNotFoundComponent
      ),
    data: {
      status: HttpStatusCode.NotFound,
    },
  },
  {
    path: '403-forbidden',
    loadComponent: () =>
      import('../libs/common-ui/page-not-found/src/index').then(
        (m) => m.PageNotFoundComponent
      ),
    data: {
      status: HttpStatusCode.Forbidden,
    },
  },
  {
    path: '**',
    loadComponent: () =>
      import('../libs/common-ui/page-not-found/src/index').then(
        (m) => m.PageNotFoundComponent
      ),
    data: {
      status: HttpStatusCode.NotFound,
    },
  },
];
