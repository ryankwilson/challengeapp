import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  viewProviders: [LoginService],
  directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent {

  constructor(private _loginService: LoginService) { }

  onSubmit(): void {
    console.log('Logging in...');
  }

}
