import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { ServiceBase } from './servicebase';
import { IChallengeResponse } from '../models/index';

@Injectable()
export class ChallengeResponsesService extends ServiceBase {

    constructor(private _http: Http) {
        super();
    }

    createChallengeResponse(challengeResponse: IChallengeResponse) {
        var url = this.buildUrl(`/challengeresponses/`);
        return this._http.post(url, challengeResponse)
            .map(this.mapChallengeResponseSuccess)
            .catch(this.handleChallengeResponseError);
    }

    getChallengeResponsesByChallenge(challengeId: number) : Observable<IChallengeResponse[]> {
        var url = this.buildUrl(`/challengeresponses/challenge/${challengeId}`);
        return this._http.get(url)
            .map(this.mapByChallengeSuccess)
            .catch(this.handleMapByChallengeError);
    }

    private mapChallengeResponseSuccess(response: Response) {
        return response.json();
    }

    private handleChallengeResponseError(error: Response) {
        let errMsg = 'Something is wrong with the server!';
        return Observable.throw(errMsg || 'Server error');
   }

   private mapByChallengeSuccess(response: Response) {
       return response.json();
   }

   private handleMapByChallengeError(error: Response) {
       let errMsg = 'Something is wrong with the server!';
       return Observable.throw(errMsg || 'Server error');
   }

}
