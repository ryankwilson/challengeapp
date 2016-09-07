import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { ServiceBase } from '../services/servicebase';
import { ILoginResponse, ILoginRequest } from '../shared/login';

@Injectable()
export class LoginService extends ServiceBase {

    loginUrl: string;

    constructor(private _http: Http) {
        super();

        this.loginUrl = this.buildUrl('/teams/login');
    }

    login(request: ILoginRequest): Observable<ILoginResponse> {
        return this._http.post(
            this.loginUrl,
            {
                TeamName: request.teamName,
                Password: request.password
            })
            .map(this.loginSuccess)
            .catch(this.loginError);
    }

    private loginSuccess(response: Response) {
        console.log(response);
        return response.json();
    }

    private loginError(error: Response) {
        let errMsg = 'Something is wrong with the server!';
        switch (error.status) {
            case 404:
                errMsg = 'Team Name or Password is incorrect';
                break;
            default:
                break;
        }
        console.error(error);
        return Observable.throw(errMsg || 'Server error');
    }

}
