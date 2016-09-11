import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IChallenge } from '../models/index';
import { ChallengesService } from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'challenges.component.html',
    styleUrls: [],
    viewProviders: []
})
export class ChallengesComponent implements OnInit {

    eventId: number;
    challenges: IChallenge[];

    constructor(
        private route: ActivatedRoute,
        private challengesService: ChallengesService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.eventId = +params['id'];
        });
        this.challengesService.getEventChallenges(this.eventId)
            .subscribe(
            challenges => this.getEventChallengesSuccess(challenges),
            error => this.getEventchallengesFailure(error)
            );
    }

    private getEventChallengesSuccess(challenges: IChallenge[]) {
        this.challenges = challenges;
    }

    private getEventchallengesFailure(error: string) {
        debugger;
    }

}
