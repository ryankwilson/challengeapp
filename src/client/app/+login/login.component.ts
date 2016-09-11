import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { LoginService } from './login.service';
import { LoginRequest, ILoginResponse } from '../models/index';

import { IdentityService } from '../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  viewProviders: [LoginService],
  directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent implements OnInit {

  teamName: string;
  password: string;
  error: Boolean = false;
  errorMessage: string;
  loading: Boolean = true;
  loggingIn: Boolean = false;

  constructor(
    private _loginService: LoginService,
    private _router: Router,
    private _identityService: IdentityService) { }

  ngOnInit() {
    this.loading = false;
  }

  onSubmit(): void {
    this.loggingIn = true;
    this.error = false;
    this._loginService.login(new LoginRequest(this.teamName, this.password))
      .subscribe(
      response => this.loginSuccess(response),
      error => this.loginError(error)
      );
  }

  onTryAgain(): void {
    this.error = false;
    this.errorMessage = '';
  }

  private loginSuccess(response: ILoginResponse) {
    this.loggingIn = false;
    this._identityService.identity = {
      teamId: response.TeamId,
      teamName: response.Name
    };
    this._router.navigate(['/challenges/1']);
  }

  private loginError(error: any) {
    this.loggingIn = false;
    this.error = true;
    this.errorMessage = error;
  }

}
