import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'challenges.component.html',
    styleUrls: [],
    viewProviders: []
})
export class ChallengesComponent implements OnInit {

    eventId: number;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.eventId = +params['id'];
            //this.service.getHero(id).then(hero => this.hero = hero);
        });
        console.log(this.eventId);
    }

}
