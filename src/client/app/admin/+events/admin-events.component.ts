import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IEvent } from '../../models/index';

@Component({
    moduleId: module.id,
    templateUrl: 'admin-events.component.html',
    styleUrls: ['../admin-main.css']
})
export class AdminEventsComponent implements OnInit {

    id: number;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
    }

}
