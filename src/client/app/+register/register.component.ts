import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ITeam } from '../models/index';
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
    passwordsMatch: boolean;
    team: ITeam;
    error: Boolean = false;
    errorMessage: string;
    submitting: boolean = false;
    loading: boolean = false;
    activeStep: number = 1;
    memberNames: Array<string> = new Array<string>();
    @ViewChild('regForm') public registerForm: NgForm;

    constructor(
        private _registerService: RegisterService) { }

    nextStep() {
        // adding team members
        if (this.activeStep === 2) {
            this.addTeamMember();
            if (this.memberNames.length > 0) {
                this.activeStep++;
            } else {
                return;
            }
        } else if (this.activeStep === 3 && this.registerForm.valid && this.passwordsMatch) {
            this.activeStep++;
        } else if (this.registerForm.valid) {
            this.activeStep++;
        }
    }

    addTeamMember() {
        if (this.teamMember && this.teamMember !== '') {
            this.memberNames.push(this.teamMember);
            this.teamMember = '';
        }
    }

    passwordChanged(value: any) {
        this.passwordsMatch = (this.password === this.confirmPassword);
    }

    onRegister() {
        this.submitting = true;
        this.error = false;

        this._registerService.registerTeam({
            teamName: this.teamName,
            password: this.password,
            confirmPassword: this.confirmPassword,
            eventId: 1
        })
            .subscribe(
            team => this.handleSuccess(team),
            error => this.handleRegistrationError(error));
    }

    handleSuccess(createdTeam: any) {
        this.submitting = false;
        this.team = createdTeam;
    }

    handleRegistrationError(error: any) {
        this.submitting = false;
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
