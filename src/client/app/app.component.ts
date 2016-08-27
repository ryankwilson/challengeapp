import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import {
  Config,
  NavbarComponent,
  ToolbarComponent,
  EventListService,
  EventListComponent,
  LoaderComponent
 } from './shared/index';
import { RegisterService } from './+register/index';

@Component({
  moduleId: module.id,
  selector: 'sd-app',
  viewProviders: [RegisterService, EventListService, HTTP_PROVIDERS],
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent, EventListComponent, LoaderComponent]
})
export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}
