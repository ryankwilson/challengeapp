import { RouterConfig } from '@angular/router';

import { ChallengeComponent } from './index';

export const ChallengeRoutes: RouterConfig = [
  {
    path: 'challenge/:id',
    component: ChallengeComponent
  }
];
