import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { ServiceBase } from './servicebase';
import { IChallenge } from '../models/index';

@Injectable()
export class ChallengesService extends ServiceBase {

    constructor(private _http: Http) {
        super();
    }

    getEventChallenges(eventId: number): Observable<IChallenge[]> {
        // todo
        //var challengesUrl = this.buildUrl(`/events/${eventId}/challenges`);
        var challengesUrl = '../../api/challenges.json';
        return this._http.get(
            challengesUrl)
            .map(this.getEventChallengesSuccess)
            .catch(this.getEventChallengesFailure);
    }

    private getEventChallengesSuccess(response: Response) {
        return response.json();
    }

    private getEventChallengesFailure(error: Response) {
        let errMsg = 'Something is wrong with the server!';
        return Observable.throw(errMsg || 'Server error');
    }

}
