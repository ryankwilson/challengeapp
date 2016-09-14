import { provideRouter, RouterConfig } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { HomeRoutes } from './+home/index';
import { LoginRoutes } from './+login/index';
import { RegisterRoutes } from './+register/index';
import { ChallengesRoutes } from './+challenges/index';
import { ChallengeRoutes } from './+challenge/index';

const routes: RouterConfig = [
  ...AboutRoutes,
  ...HomeRoutes,
  ...LoginRoutes,
  ...RegisterRoutes,
  ...ChallengesRoutes,
  ...ChallengeRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
