import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Observable } from 'rxjs/Observable';

import { EventsService } from '../../../services/index';
import { IEvent, ITeam } from '../../../models/index';

@Component({
    moduleId: module.id,
    templateUrl: 'admin-events-teams.component.html',
    styleUrls: ['../../admin-main.css']
})
export class AdminEventsTeamsComponent implements OnInit {

    loading: boolean;
    eventLoading: boolean;
    teamsLoading: boolean;

    eventId: number;
    event: IEvent;
    eventName: string;
    teams: ITeam[];

    constructor(
        private route: ActivatedRoute,
        private eventsService: EventsService) { }

    ngOnInit() {
        this.loading = true;

        this.route.params.subscribe(params => {
            this.eventId = +params['eventId'];
        });

        this.eventLoading = true;
        this.eventsService.getEvents()
            .subscribe(
                events => {
                    this.event = events.find(e => e.EventId === this.eventId);
                    this.eventName = this.event.Name;
                    this.eventLoading = false;
                },
                error => console.log(error)
            );

        this.teamsLoading = true;
        this.eventsService.getRegisteredTeams(this.eventId)
            .subscribe(
                teams => {
                    this.teams = teams;
                    this.teamsLoading = false;
                },
                error => console.log(error)
            );
    }

}
