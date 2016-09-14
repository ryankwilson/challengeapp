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
    loading: boolean;

    constructor(
        private route: ActivatedRoute,
        private challengesService: ChallengesService) { }

    ngOnInit() {
        this.loading = true;
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
        this.loading = false;
        this.challenges = challenges;
    }

    private getEventchallengesFailure(error: string) {
        this.loading = false;
    }

}
