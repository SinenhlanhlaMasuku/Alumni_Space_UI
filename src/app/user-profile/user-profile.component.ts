/*import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = [{
      //  name: string,
         location: [],
         Qualification: [],
       Skills: [],
        Experience: [],
          Employment_Status: []

  }]
  uploadSuccess(){}
  uploadError(){}
}*/
// userProfileController.ts

class UserProfileController {
  user: any;
  isProfile: boolean;
  isEditing: boolean;
  uploadSuccess: string;
  uploadError: string;

  constructor() {
    this.user = {
      name: "Alumni name",
      email: "alumni@example.com",
      location: "Location",
      Qualification: "Qualification",
      Skills: "Skills",
      Experience: "Experience",
      Employment_Status: "Employed",
      Interest: "Interests",
    };

    this.isProfile = true;
    this.isEditing = false;
    this.uploadSuccess = "";
    this.uploadError = "";
  }

  editProfile() {
    this.isProfile = false;
    this.isEditing = true;
  }

  saveProfile() {
    this.isProfile = true;
    this.isEditing = false;
    // Update user profile data to the server here
  }

  uploadFile() {
    // Handle file uploads here
    // Update this.uploadSuccess or this.uploadError based on the success or error of the upload
  }
}

angular.module("userProfileApp").controller("UserProfileController", UserProfileController);
