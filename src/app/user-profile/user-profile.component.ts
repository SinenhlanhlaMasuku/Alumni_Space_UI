import { Component } from '@angular/core';

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
}
