import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import {
  Config,
  NavbarComponent,
  ToolbarComponent,
  EventListService,
  EventListComponent,
  LoaderComponent,
  MessageFlyoverComponent
} from './shared/index';
import { RegisterService } from './+register/index';
import {
  IdentityService,
  ChallengesService,
  PhotosService,
  ChallengeResponsesService,
  EventsService
} from './services/index';

@Component({
  moduleId: module.id,
  selector: 'sd-app',
  viewProviders: [
    FormsModule,
    RegisterService,
    EventListService,
    HTTP_PROVIDERS,
    CookieService,
    IdentityService,
    ChallengesService,
    PhotosService,
    ChallengeResponsesService,
    EventsService
  ],
  templateUrl: 'app.component.html',
  directives: [
    ROUTER_DIRECTIVES,
    NavbarComponent,
    ToolbarComponent,
    EventListComponent,
    LoaderComponent,
    MessageFlyoverComponent
  ]
})
export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}
