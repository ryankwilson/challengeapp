import { RouterConfig } from '@angular/router';

import { AdminEventsTeamsComponent } from './index';

export const AdminEventsTeamsRoutes: RouterConfig = [
  {
    path: 'admin/events/teams/:eventId',
    component: AdminEventsTeamsComponent
  }
];
