import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EventListService {

    private _getEventsUrl: string = 'http://rpc-challenge-teams.azurewebsites.net/events';

    constructor(private http: Http) { }

    get(): Observable<string[]> {
        return this.http.get(this._getEventsUrl)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}