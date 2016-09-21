import { Component, OnInit } from '@angular/core';

import { EventsService } from '../../services/index';
import { IEvent } from '../../models/index';

@Component({
    moduleId: module.id,
    templateUrl: 'admin.component.html',
    styleUrls: ['../admin-main.css']
})
export class AdminComponent implements OnInit {

    events: IEvent[];

    constructor(private eventsService: EventsService) { }

    ngOnInit() {
        this.eventsService.getEvents()
            .subscribe(
                events => { this.events = events; }
            );
    }

}
