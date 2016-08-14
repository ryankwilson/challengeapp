import { provideRouter, RouterConfig } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { HomeRoutes } from './+home/index';
import { LoginRoutes } from './+login/index';

const routes: RouterConfig = [
  ...AboutRoutes,
  ...HomeRoutes,
  ...LoginRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
