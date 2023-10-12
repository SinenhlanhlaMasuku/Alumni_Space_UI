import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { edituserProfileComponent } from 'edit-user-Profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ViewUserProfileComponent } from './view-user-profile/view-user-profile.component';
import { UserProfileService } from './user-profile/user-profile.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent },
  // { path: 'userprofile', component: UserProfileComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'edituserProfileComponent', component: edituserProfileComponent},
  { path: 'UserProfileComponent', component: UserProfileComponent},
  { path: 'ViewUserProfilecomponent', component: ViewUserProfileComponent},
  { path: 'UserProfileService', component: UserProfileService}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
