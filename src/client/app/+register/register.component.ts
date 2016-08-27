import { Component } from '@angular/core';

import { ITeam } from '../shared/team';
import { RegisterService } from './register.service';
//import { IRegistrationRequest } from './registration-request';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})
export class RegisterComponent {

    teamName: string;
    password: string;
    confirmPassword: string;
    team: ITeam;
    error: Boolean = false;
    errorMessage: string;
    submitting: boolean = false;

    constructor(
        private _registerService: RegisterService) { }

    onRegister() {
        this.submitting = true;
        this.error = false;
        // validate form input

        // try and register
        this._registerService.registerTeam({
            teamName: this.teamName,
            password: this.password,
            confirmPassword: this.confirmPassword
        })
        .subscribe(
            team => this.team = team,
            error => this.handlerRegistrationError(error));

        // problem with registration

        // successful registration
        this.submitting = false;
        console.log(`${this.team}`);
    }

    handlerRegistrationError(error: any) {
        this.error = true;
        this.errorMessage = error;
        this.submitting = false;
     }

     onTryAgain() {
         this.error = false;
     }

}
