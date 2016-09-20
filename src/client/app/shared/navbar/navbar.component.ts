import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IdentityService } from '../../services/index';

@Component({
  moduleId: module.id,
  selector: 'rpc-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {

  teamName: string;
  dropdown$: any;

  constructor(
    private _identityService: IdentityService,
    private _router: Router) { }

  ngOnInit() {
    this.teamName = this._identityService.identity.teamName;
    this.dropdown$ = $('.dropdown-toggle');
  }

  onDropdown() {
    this.dropdown$.dropdown();
  }

  logout() {
    this._identityService.logout();
    this._router.navigate(['/login']);
  }

}
