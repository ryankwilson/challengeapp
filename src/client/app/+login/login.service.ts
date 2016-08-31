import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// (above) Response from http
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/throw';

import { ServiceBase } from '../services/servicebase';
// import { ILoginResponse, ILoginRequest } from '../shared/login';

@Injectable()
export class LoginService extends ServiceBase {

    loginUrl: string;

    constructor(private _http: Http) {
        super();

        this.loginUrl = this.buildUrl('teams/login');
    }

    // login(request: ILoginRequest): Observable<ILoginResponse> {
    // }

}
