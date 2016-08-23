import { Component } from '@angular/core';

import { ITeam } from '../shared/team';
import { RegisterService } from './register.service';
//import { IRegistrationRequest } from './registration-request';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})
export class RegisterComponent {

    teamName: string;
    password: string;
    confirmPassword: string;
    team: ITeam;
    errorMessage: string;
    submitted: boolean = false;

    constructor(
        private _registerService: RegisterService) { }

    onRegister() {
        // validate form input

        // try and register
        this._registerService.registerTeam({
            teamName: this.teamName,
            password: this.password,
            confirmPassword: this.confirmPassword
        })
        .subscribe(
            team => this.team = team,
            error => this.errorMessage = <any>error);

        // problem with registration

        // successful registration
        this.submitted = true;
        console.log(`${this.team}`);
    }

}
