import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminHomeComponent } from './homepage/Admin-home/admin-home/admin-home.component';
import { TrackAlumniComponent } from './track-alumni/track-alumni.component';
import { LastFewNotificationsComponent } from './homepage/Admin-home/last-few-notifications/last-few-notifications.component';


//components
import { ServicesComponent } from './services/services.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {SuccessComponent} from './success/success.component';
import {SuccessPasswordChangeComponent} from './success-password-change/success-password-change.component';
import { JobsComponent } from './jobs/jobs.component';
import { AddJobsComponent } from './add-jobs/add-jobs.component';
import { AddPostsComponent } from './add-posts/add-posts.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomepageComponent },
  // { path: 'userprofile', component: UserProfileComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  //{ path: 'servicesPage', component: ServicesPageComponent},
  { path: 'alumni', loadChildren: () => import('./alumni/alumni.module').then(m => m.AlumniModule) },
  { path: 'adminHome', component: AdminHomeComponent },
  { path: 'trackAlumni', component: TrackAlumniComponent},
  { path: 'adminNotifications', component: LastFewNotificationsComponent},


  //
  { path: 'adminLogin', component: AdminLoginComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'success-password-change', component: SuccessPasswordChangeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'add-jobs', component: AddJobsComponent },
  { path: 'add-posts', component: AddPostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
