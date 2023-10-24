import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminHomeComponent } from './homepage/Admin-home/admin-home/admin-home.component';
import { TrackAlumniComponent } from './track-alumni/track-alumni.component';
import { LastFewNotificationsComponent } from './homepage/Admin-home/last-few-notifications/last-few-notifications.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomepageComponent },
  // { path: 'userprofile', component: UserProfileComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  //{ path: 'servicesPage', component: ServicesPageComponent},
  { path: 'alumni', loadChildren: () => import('./alumni/alumni.module').then(m => m.AlumniModule) },
  { path: 'adminHome', component: AdminHomeComponent },
  { path: 'trackAlumni', component: TrackAlumniComponent},
  { path: 'adminNotifications', component: LastFewNotificationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
