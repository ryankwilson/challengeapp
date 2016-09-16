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

  file_srcs: string[] = [];
  photo: string;

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

  onFaceOff(input: any) {
    input.click();
  }

  fileChange(input: any) {
    for (var i = 0; i < input.files.length; i++) {
      // var img = document.createElement('img');
      // img.src = window.URL.createObjectURL(input.files[i]);
      this.photo = window.URL.createObjectURL(input.files[i]);

      var reader = new FileReader();

      reader.addEventListener('load', (event: any) => {
        // img.src = event.target.result;
        // this.file_srcs.push(img.src);
        this.photo = event.target.result;
        var jq: any = $;
        jq('#myModal').modal('show');
      }, false);

      reader.readAsDataURL(input.files[i]);
    }
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
