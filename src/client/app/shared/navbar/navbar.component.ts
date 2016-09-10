import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { IdentityService } from '../../services/index';

@Component({
  moduleId: module.id,
  selector: 'rpc-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent implements OnInit {

  teamName: string;

  constructor(private _identityService: IdentityService) { }

  ngOnInit() {
    this.teamName = this._identityService.identity.teamName;
  }

}
