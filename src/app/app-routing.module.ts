import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminHomeComponent } from './admin/dashboard/admin-home/admin-home.component';
import { TrackAlumniComponent } from './admin/track-alumni/track-alumni.component';
import { LastFewNotificationsComponent } from './admin/dashboard/last-few-notifications/last-few-notifications.component';


//components
import { ServicesComponent } from './components/services/services.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {SuccessComponent} from './success/success.component';
import {SuccessPasswordChangeComponent} from './success-password-change/success-password-change.component';
import { JobsComponent } from './alumni/jobs/jobs.component';
import { AddJobsComponent } from './admin/add-jobs/add-jobs.component';
import { AddPostsComponent } from './admin/add-posts/add-posts.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: 'userprofile', component: UserProfileComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  //{ path: 'servicesPage', component: ServicesPageComponent},
  
  //Component
  { path: 'contacts', component: ContactsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },

  //Alumni-module Components
  { path: 'alumni', loadChildren: () => import('./alumni/alumni.module').then(m => m.AlumniModule) },

  //Admni-module Components
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  

  


  //
  { path: 'adminLogin', component: AdminLoginComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'success-password-change', component: SuccessPasswordChangeComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  
  { path: 'jobs', component: JobsComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
