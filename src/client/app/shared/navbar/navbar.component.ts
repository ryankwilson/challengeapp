import { Component, OnInit } from '@angular/core';

import { IdentityService } from '../../services/index';

@Component({
  moduleId: module.id,
  selector: 'rpc-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {

  teamName: string;
  dropdown: any;

  constructor(private _identityService: IdentityService) { }

  ngOnInit() {
    this.teamName = this._identityService.identity.teamName;
    this.dropdown = $('.dropdown-toggle');
    debugger;
  }

  onDropdown() {
    this.dropdown.dropdown();
  }

}
