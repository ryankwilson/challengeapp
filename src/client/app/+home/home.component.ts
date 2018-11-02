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
    var target_date = new Date(2018, 10, 17, 19, 0, 0);
    //var target_date = new Date(2017, 10, 18, 19, 0, 0);
    //var target_date = new Date(2016, 10, 7, 17, 18, 0);
    var current_date = new Date();
    var count = new Countdown(target_date, current_date);
    var self = this;
    count.countdown(function (t: any) {
      self.timeleft = self.formatTimeString(t);
      if (t.days === 0 && t.hours === 0 && t.minutes === 0 && t.seconds === 0) {
        self.allowLogin = true;
      }
      //console.log(t);
    });
  }


  private formatTimeString(t: any): string {
    return `${t.days} D | ${t.hours} H | ${t.minutes} M | ${t.seconds} S`;
  }

}
