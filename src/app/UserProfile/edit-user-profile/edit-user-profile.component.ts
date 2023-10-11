import { Component, Inject } from '@angular/core';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent {
  constructor(@Inject(UserProfileService) private service : UserProfileService){

  }
  viewProfile(view: HTMLButtonElement){
    this.service.viewProfile();
  }
 
}
