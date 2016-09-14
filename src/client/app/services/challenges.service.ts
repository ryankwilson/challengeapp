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
        var challengesUrl = this.buildUrl(`/challenges/event/${eventId}`);
        //var challengesUrl = '../../api/challenges.json';
        return this._http.get(
            challengesUrl)
            .map(this.getEventChallengesSuccess)
            .catch(this.handleServerError);
    }

    getChallenge(challengeId: number): Observable<IChallenge> {
        var challengeUrl = this.buildUrl(`/challenges/${challengeId}`);
        return this._http.get(challengeUrl)
            .map(this.getChallengeSuccess)
            .catch(this.handleServerError);
    }

    private getEventChallengesSuccess(response: Response) {
        return response.json();
    }

    private getChallengeSuccess(response: Response) {
        return response.json();
    }

    private handleServerError(error: Response) {
        let errMsg = 'Something is wrong with the server!';
        return Observable.throw(errMsg || 'Server error');
    }

}
