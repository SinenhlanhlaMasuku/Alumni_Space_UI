import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ServicesComponent } from './services/services.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {SuccessComponent} from './success/success.component';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {SuccessPasswordChangeComponent} from './success-password-change/success-password-change.component';

//adminLogin
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'adminHome', component: AdminHomeComponent },
  { path: 'adminLogin', component: AdminLoginComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'success-password-change', component: SuccessPasswordChangeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
