import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';

import { IdentityService, ChallengesService } from '../services/index';
import { IChallenge } from '../models/index';

@Component({
  moduleId: module.id,
  templateUrl: 'challenge.component.html',
  styleUrls: ['challenge.component.css']
  //viewProviders: [LoginService]
})
export class ChallengeComponent implements OnInit {

  id: number;
  name: string;
  description: string;
  clipUrl: string;
  embedUrl: SafeResourceUrl;

  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private identityService: IdentityService,
    private challengesService: ChallengesService,
    private sanitizer: DomSanitizationService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.challengesService.getChallenge(this.id)
      .subscribe(
        challenge => this.setChallenge(challenge),
        error => this.getChallengeError(error)
      );
  }

  private setChallenge(challenge: IChallenge) {
    this.name = challenge.Name;
    this.description = challenge.Description;
    this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(challenge.ClipUrl);
  }

  private getChallengeError(error: string) {
    this.errorMessage = error;
  }

}
