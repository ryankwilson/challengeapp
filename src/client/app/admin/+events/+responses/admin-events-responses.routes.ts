import { RouterConfig } from '@angular/router';

import { AdminEventsResponsesComponent } from './index';

export const AdminEventsResponsesRoutes: RouterConfig = [
  {
    path: 'admin/events/responses/:eventId',
    component: AdminEventsResponsesComponent
  }
];
