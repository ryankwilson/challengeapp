import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventListService } from './event-list.service';

@Component({
    moduleId: module.id,
    selector: 'event-list',
    templateUrl: 'event-list.component.html',
    viewProviders: [EventListService]
})
export class EventListComponent implements OnInit {

    events: any[];
    @Output() loadingChange = new EventEmitter();

    private _loading: boolean = true;
    private _errorMessage: string;

    constructor(private eventListService: EventListService) { }

    ngOnInit() {
        this._loading = true;
        this.loadingChange.emit(this._loading);
        this.eventListService.get()
            .subscribe(
                events => this.events = events,
                error => this._errorMessage = <any>error,
                () => this.serviceDone());
    }

    serviceDone() {
        this._loading = false;
        this.loadingChange.emit(this._loading);
    }

}
