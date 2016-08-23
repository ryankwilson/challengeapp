import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ITeam } from '../shared/team';
import { IRegistrationRequest } from './registration-request';

@Injectable()
export class RegisterService {

    registerTeamUri: string = 'http://rpc-challenge-teams.azurewebsites.net/teams';

    constructor(private _http: Http) {

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
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
