import { RouterConfig } from '@angular/router';

import { AdminEventsComponent } from './index';

export const AdminEventsRoutes: RouterConfig = [
  {
    path: 'admin/events/:id',
    component: AdminEventsComponent
  }
];
