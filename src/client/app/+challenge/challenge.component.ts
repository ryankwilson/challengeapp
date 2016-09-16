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
    // Loop through each picture file
    for (var i = 0; i < input.files.length; i++) {

      //this.files.push(input.files[i]);

      // Create an img element and add the image file data to it
      var img = document.createElement('img');
      img.src = window.URL.createObjectURL(input.files[i]);

      // Create a FileReader
      //var reader: any, target: EventTarget;
      var reader = new FileReader();

      // Add an event listener to deal with the file when the reader is complete
      reader.addEventListener('load', (event: any) => {
        // Get the event.target.result from the reader (base64 of the image)
        img.src = event.target.result;

        // Resize the image
        //var resized_img = this.resize(img);

        // Push the img src (base64 string) into our array that we display in our html template
        this.file_srcs.push(img.src);
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
