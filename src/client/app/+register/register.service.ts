import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { ServiceBase } from '../services/servicebase';
import { ITeam } from '../shared/team';
import { IRegistrationRequest } from './registration-request';

@Injectable()
export class RegisterService extends ServiceBase {

    registerTeamUri: string;

    constructor(private _http: Http) {
        super();

        this.registerTeamUri = this.buildUrl('/teams');
     }

    registerTeam(request: IRegistrationRequest): Observable<ITeam> {
        return this._http.post(
            this.registerTeamUri,
            {
                Name: request.teamName,
                Password: request.password
            })
            .map(this.handleSuccess)
            .catch(this.handleError);
    }

    private handleSuccess(response: Response) {
        console.log(response);
        return response.json();
    }

    private handleError(error: Response) {
        let errMsg = 'Something is wrong with the server!';
        switch (error.status) {
            case 400:
                errMsg = 'Team Name or Password is invalid';
                break;
            case 409:
                errMsg = 'Team Name is already taken!  Please try a different name.';
                break;
            default:
                break;
        }
        console.error(error);
        return Observable.throw(errMsg || 'Server error');
    }
}
