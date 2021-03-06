import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';

import { IChallengeByTeam } from '../models/index';
import { ChallengesService, IdentityService } from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'challenges.component.html',
    styleUrls: ['challenges.component.css'],
    viewProviders: []
})
export class ChallengesComponent implements OnInit {

    eventId: number;
    challenges: IChallengeByTeam[];
    anyChallengesCompleted: boolean;
    allChallengesCompleted: boolean;
    loading: boolean;
    introUrl: SafeResourceUrl;
    outroUrl: SafeResourceUrl;

    constructor(
        private route: ActivatedRoute,
        private challengesService: ChallengesService,
        private identityService: IdentityService,
        private sanitizer: DomSanitizationService) {
            //this.introUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/C-yYyvmjqfY?autoplay=1');
            this.introUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/301290028');
            this.outroUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/301290822');
        }

    ngOnInit() {
        this.loading = true;
        this.route.params.subscribe(params => {
            this.eventId = +params['id'];
        });
        var teamId = this.identityService.identity.teamId;
        this.challengesService.getEventChallengesByTeam(this.eventId, teamId)
            .subscribe(
            challenges => this.getEventChallengesByTeamSuccess(challenges),
            error => this.getEventchallengesByTeamFailure(error)
            );
    }

    private getEventChallengesByTeamSuccess(challenges: IChallengeByTeam[]) {
        this.loading = false;

        // at least 1 challenge complete
        var challengesCompleted = challenges.find(x => x.Completed);
        if (challengesCompleted) {
            this.anyChallengesCompleted = true;
        }

        // are all challenges complete?
        var notCompleted = challenges.find(x => !x.Completed);
        if (!notCompleted) {
            this.allChallengesCompleted = true;
        }

        if (!this.allChallengesCompleted) {
            let foundNext: boolean = false;
            for (let i = 0; i < challenges.length - 1; i++) {
                if (challenges[i].Completed && !challenges[i + 1].Completed) {
                    challenges[i + 1].NextChallenge = true;
                    foundNext = true;
                    break;
                }
            }

            if (!foundNext) {
                challenges[0].NextChallenge = true;
            }
        }

        this.challenges = challenges;
    }

    private getEventchallengesByTeamFailure(error: string) {
        this.loading = false;
    }

}
