import { Injectable } from '@angular/core';

import { IIdentity } from '../interfaces/index';
import { Identity } from '../classes/index';
import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class IdentityService {

    private _identity: IIdentity;
    private _key = 'team_identity';

    constructor(private _cookieService: CookieService) { }

    get identity(): IIdentity {
        var team = this._cookieService.get(this._key);
        var o = JSON.parse(team);
        if (!this._identity) {
            this._identity = new Identity(o.teamId, o.teamName);
        } else {
            this._identity.teamId = o.teamId;
            this._identity.teamName = o.teamName;
        }
        return this._identity;
    }

    set identity(identity: IIdentity) {
        this._identity = identity;
        this._cookieService.putObject(this._key, identity);
    }

}
