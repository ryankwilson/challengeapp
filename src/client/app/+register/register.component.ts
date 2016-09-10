import { Component } from '@angular/core';

import { ITeam } from '../shared/team';
import { RegisterService } from './register.service';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})
export class RegisterComponent {

    teamName: string;
    teamMember: string;
    password: string;
    confirmPassword: string;
    team: ITeam;
    error: Boolean = false;
    errorMessage: string;
    submitting: boolean = false;
    loading: boolean = false;
    activeStep: number = 1;
    memberNames: Array<string> = new Array<string>();

    constructor(
        private _registerService: RegisterService) { }

    nextStep() {
        this.activeStep++;
    }

    addTeamMember() {
        this.memberNames.push(this.teamMember);
        this.teamMember = '';
    }

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
            team => this.handleSuccess(team),
            error => this.handleRegistrationError(error));

        // successful registration
        this.submitting = false;
    }

    handleSuccess(createdTeam: any) {
        this.team = createdTeam;
    }

    handleRegistrationError(error: any) {
        this.error = true;
        this.errorMessage = error;
     }

     onTryAgain() {
         this.error = false;
     }

     eventListLoadingChange(loadingState: any) {
         this.loading = loadingState;
     }

}
