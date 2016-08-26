import { Component, OnInit } from '@angular/core';
import { EventListService } from './event-list.service';

@Component({
    moduleId: module.id,
    selector: 'event-list',
    templateUrl: 'event-list.component.html',
    viewProviders: [EventListService]
})
export class EventListComponent implements OnInit {

    public events: any[];
    public loading: boolean = true;
    private _errorMessage: string;

    constructor(private eventListService: EventListService) { }

    ngOnInit() {
        this.eventListService.get()
            .subscribe(
                events => this.events = events,
                error => this._errorMessage = <any>error,
                () => setTimeout(() => this.loading = false, 700));
    }

}
