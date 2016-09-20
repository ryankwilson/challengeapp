import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';

import { IdentityService, ChallengesService, ChallengeResponsesService, PhotosService } from '../services/index';
import { IChallenge, IChallengeResponse } from '../models/index';

@Component({
  moduleId: module.id,
  templateUrl: 'challenge.component.html',
  styleUrls: ['challenge.component.css']
})
export class ChallengeComponent implements OnInit {

  id: number;
  name: string;
  description: string;
  clipUrl: string;
  embedUrl: SafeResourceUrl;
  videoLoaded: boolean = true;
  submittingPhoto: boolean;
  error: boolean;

  file_srcs: string[] = [];
  photo: string;
  photoGuid: string;
  file: File;

  errorMessage: string;

  modal: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private identityService: IdentityService,
    private challengesService: ChallengesService,
    private challengeResponsesService: ChallengeResponsesService,
    private photosService: PhotosService,
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
      this.file = input.files[i];

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

    this.photosService.uploadFile(this.file).then((result) => {
      this.photoGuid = <string>result;
      this.makeChallengeResponse({
        Id: null,
        ChallengeId: this.id,
        TeamId: this.identityService.identity.teamId,
        Photo: this.photoGuid
      });
    }, (error) => {
      this.submittingPhoto = false;
      this.error = true;
      this.errorMessage = 'Photo could not be uploaded, please try again!';
    });
  }

  private makeChallengeResponse(challengeResponse: IChallengeResponse) {
    this.challengeResponsesService.createChallengeResponse(challengeResponse)
      .subscribe(
        challengeResponse => this.getChallengeResponseSuccess(challengeResponse),
        error => this.getChallengeResponseFailure(error)
      );
  }

  private getChallengeResponseSuccess(challengeResponse: Number) {
    this.gotoChallenges();
  }

  private getChallengeResponseFailure(error: string) {
    this.error = true;
    this.errorMessage = 'There was a problem submitting your photo, please try again!';
  }

  private gotoChallenges() {
    this.modal.modal('hide');
    this.router.navigate(['/challenges/1']);
  }

  private setChallenge(challenge: IChallenge) {
    this.name = challenge.Name;
    this.description = challenge.Description;
    this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(challenge.ClipUrl);
  }

  private getChallengeError(error: string) {
    this.errorMessage = error;
    this.error = true;
  }

}
