import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  submittingPhoto: boolean;

  file_srcs: string[] = [];
  photo: string;

  errorMessage: string;

  modal: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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

    var jq: any = $;
    this.modal = jq('#myModal');
  }

  onFaceOff(input: any) {
    input.click();
  }

  fileChange(input: any) {
    for (var i = 0; i < input.files.length; i++) {
      this.photo = window.URL.createObjectURL(input.files[i]);

      var reader = new FileReader();

      reader.addEventListener('load', (event: any) => {
        this.photo = event.target.result;
        this.modal.modal({
          backdrop: 'static',
          keyboard: false
        });
        this.modal.modal('show');
        input.value = null;
      }, false);

      reader.readAsDataURL(input.files[i]);
    }
  }

  submitPhoto() {
    this.submittingPhoto = true;
    var self = this;
    setTimeout(() => {
      self.modal.modal('hide');
      self.router.navigate(['/challenges/1']);
    }, 2500);
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
