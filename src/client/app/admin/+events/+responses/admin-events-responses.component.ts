import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IEvent, IChallenge, IChallengeResponse } from '../../../models/index';
import { EventsService, ChallengesService, ChallengeResponsesService } from '../../../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'admin-events-responses.component.html',
    styleUrls: ['../../admin-main.css']
})
export class AdminEventsResponsesComponent implements OnInit {

    eventId: number;
    event: IEvent;
    eventName: string;

    challenges: IChallenge[];
    challengeResponses: IChallengeResponse[];

    constructor(
        private route: ActivatedRoute,
        private eventsService: EventsService,
        private challengesService: ChallengesService,
        private challengeResponsesService: ChallengeResponsesService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.eventId = +params['eventId'];
        });

        this.eventsService.getEvents()
            .subscribe(
                events => {
                    this.event = events.find(e => e.EventId === this.eventId);
                    this.eventName = this.event.Name;
                },
                error => this.handleError(error)
            );

        this.challengesService.getEventChallenges(this.eventId)
            .subscribe(
                challenges => {
                    this.challenges = challenges;
                },
                error => this.handleError(error)
            );
    }

    handleError(error: string) {
        console.log(error);
    }

    downloadPhotos(challengeId: number) {
        window.open(`https://faceoffstorage.blob.core.windows.net/images/challenge-${challengeId}.zip`, '_blank');
    }

    showChallengeResponses(challengeId: number) {
        this.challengeResponsesService.getChallengeResponsesByChallenge(challengeId)
            .subscribe(
                responses => {
                    this.challengeResponses = responses;
                },
                error => this.handleError(error)
            );
    }

}
