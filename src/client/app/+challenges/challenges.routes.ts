import { RouterConfig } from '@angular/router';

import { ChallengesComponent } from './index';

export const ChallengesRoutes: RouterConfig = [
    {
        path: 'challenges/:id',
        component: ChallengesComponent
    }
];
