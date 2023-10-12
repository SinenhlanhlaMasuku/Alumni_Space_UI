import { Component } from '@angular/core';
//import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {
  alumni = {
    Name: "name placeholder",
          Location: "location placeholder",
          Qualification:"Qualification placeholder" ,
          Skills: "Skills placeholder",
          Experience: " Experience placeholder",
          Employment_Status: "Employment_Status placeholder",
          Academic_Transcript: "Academic_Transcript placeholder",
          Interest: "Interest placeholder",
          Bio : "Bio placeholder",
  }
  /*constructor(@Inject(UserProfileService) private service : UserProfileService){
  }
  editProfile(view: HTMLButtonElement){
    this.service.editProfile();
  }*/
}
