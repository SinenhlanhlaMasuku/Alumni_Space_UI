import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ServicesComponent } from './services/services.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ContactsComponent } from './contacts/contacts.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'contacts', component: ContactsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
