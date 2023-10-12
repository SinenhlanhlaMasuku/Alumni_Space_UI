import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//components
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';



@NgModule({
  declarations: [
    ViewProfileComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'view-profile',component: ViewProfileComponent },
      { path: 'edit-profile',component: EditProfileComponent },
    ]),
  ]
})
export class ProfileModule { }
