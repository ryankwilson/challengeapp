import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { ServiceBase } from './servicebase';
import { IEvent, ITeam } from '../models/index';

@Injectable()
export class EventsService extends ServiceBase {

    constructor(private _http: Http) {
        super();
    }

    getEvents(): Observable<IEvent[]> {
        var url = this.buildUrl('/events');
        return this._http.get(url)
            .map(this.mapEvents)
            .catch(this.handleError);
    }

    getRegisteredTeams(eventId: number): Observable<ITeam[]> {
        var url = this.buildUrl(`/events/${eventId}/teams`);
        return this._http.get(url)
            .map(this.mapTeams)
            .catch(this.handleError);
    }

    private mapEvents(response: Response) {
        return response.json();
    }

    private mapTeams(response: Response) {
        return response.json();
    }

    private handleError(error: Response) {
        let errMsg = 'Something is wrong with the server!';
        return Observable.throw(errMsg);
    }
}
