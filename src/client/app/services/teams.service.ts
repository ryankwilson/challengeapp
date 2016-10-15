import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { ServiceBase } from './servicebase';
import { ITeam } from '../models/index';

@Injectable()
export class TeamsService extends ServiceBase {

    constructor(private _http: Http) {
        super();
    }

    getTeamsByEvent(eventId: number): Observable<ITeam[]> {
        var url = this.buildUrl('/teams/event/' + eventId);
        return this._http.get(url)
            .map(this.mapTeams)
            .catch(this.handleError);
    }

    private mapTeams(response: Response) {
        return response.json();
    }

    private handleError(error: Response) {
        let errMsg = 'Something is wrong with the server!';
        return Observable.throw(errMsg);
    }
}
