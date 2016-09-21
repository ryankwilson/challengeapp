import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { ServiceBase } from './servicebase';
import { IEvent } from '../models/index';

@Injectable()
export class EventsService extends ServiceBase {

    getEventsUrl: string;

    constructor(private _http: Http) {
        super();

        this.getEventsUrl = this.buildUrl('/events');
    }

    getEvents(): Observable<IEvent[]> {
        return this._http.get(this.getEventsUrl)
            .map(this.mapEvents)
            .catch(this.handleError);
    }

    private mapEvents(response: Response) {
        return response.json();
    }

    private handleError(error: Response) {
        let errMsg = 'Something is wrong with the server!';
        return Observable.throw(errMsg);
    }
}
