import { Component, Inject, OnInit, } from '@angular/core';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  isView = true;

  constructor(@Inject(UserProfileService) private service : UserProfileService){
  }

  ngOnInit(): void {
    this.service.isView$.subscribe((isView) => {
        this.isView = isView;
    });
  }
  // viewProfile(view: HTMLButtonElement){
  //   this.service.viewProfile();
  //   this.isView = this.service.getIsView();
  // }
  // editProfile(edit: HTMLButtonElement){
  //   this.service.editProfile();
  //   this.isView = this.service.getIsView();
  // }

}
