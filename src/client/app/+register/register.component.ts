import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ITeam, ITeamMember, TeamMember } from '../models/index';
import { RegisterService } from './register.service';
import { IdentityService } from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})
export class RegisterComponent {

    teamName: string;
    memberName: string;
    password: string;
    confirmPassword: string;
    passwordsMatch: boolean;
    error: Boolean = false;
    errorMessage: string;
    submitting: boolean = false;
    loading: boolean = false;
    activeStep: number = 1;
    teamMembers: ITeamMember[] = new Array<TeamMember>();
    @ViewChild('regForm') public registerForm: NgForm;

    constructor(
        private _router: Router,
        private _registerService: RegisterService,
        private _identityService: IdentityService) { }

    nextStep() {
        // adding team members
        if (this.activeStep === 2) {
            this.addTeamMember();
            if (this.teamMembers.length > 0) {
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
        if (this.memberName && this.memberName !== '') {
            this.teamMembers.push(new TeamMember(this.memberName));
            this.memberName = '';
        }
    }

    passwordChanged(value: any) {
        this.passwordsMatch = (this.password === this.confirmPassword);
        if (this.passwordsMatch) {
            this.activeStep = 4;
        }
    }

    onRegister() {
        this.submitting = true;
        this.error = false;

        this._registerService.registerTeam({
            teamName: this.teamName,
            password: this.password,
            confirmPassword: this.confirmPassword,
            eventId: 1,
            members: this.teamMembers
        })
            .subscribe(
            team => this.handleSuccess(team),
            error => this.handleRegistrationError(error));
    }

    handleSuccess(createdTeam: ITeam) {
        this.submitting = false;

        this._identityService.identity = {
            teamId: createdTeam.TeamId,
            teamName: createdTeam.Name
        };

        this._router.navigate(['/challenges/1']);
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
