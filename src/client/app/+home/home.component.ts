import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

declare var Countdown: any;

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent {

  timeleft: string;
  eventLive: boolean = false;
  allowLogin: boolean = false;

  constructor() {
    var target_date = new Date(2016, 10, 12, 19, 0, 0);
    var current_date = new Date();
    var count = new Countdown(target_date, current_date);
    var self = this;
    count.countdown(function (t: any) {
      self.timeleft = self.formatTimeString(t);
    });
  }

  trigger() {
    this.allowLogin = !this.allowLogin;
  }

  private formatTimeString(t: any): string {
    return `${t.days} D | ${t.hours} H | ${t.minutes} M | ${t.seconds} S`;
  }

}
