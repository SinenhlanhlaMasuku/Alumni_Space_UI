import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminHomeComponent } from './homepage/Admin-home/admin-home/admin-home.component';
import { TrackAlumniComponent } from './track-alumni/track-alumni.component';
// import { LastFewNotificationsComponent } from './homepage/Admin-home/last-few-notifications/last-few-notifications.component';
import { ViewReportComponent } from './view-report/view-report.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
// import { AllNotificationsComponent } from '../homepage/admin-home/all-notifications/all-notifications.component';
// import { AllNotificationsComponent } from './homepage/admin-home/all-notifications/all-notifications.component';
import { AllNotificationsComponent } from './homepage/Admin-home/all-notifications/all-notifications.component';
import { ViewProfileComponent } from './alumni/profile/view-profile/view-profile.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { UserLandingPageComponent } from './homepage/Posts/user-landing-page/user-landing-page.component';
import { AdminTableComponent } from './homepage/Admin-home/admin-table/admin-table.component';

const routes: Routes = [
  { path: 'ew', component: LoginComponent },
  { path: 'home', component: HomepageComponent },
  // { path: 'userprofile', component: UserProfileComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  //{ path: 'servicesPage', component: ServicesPageComponent},
  { path: 'alumni', loadChildren: () => import('./alumni/alumni.module').then(m => m.AlumniModule) },
  { path: 'adminHome', component: AdminHomeComponent },
  { path: 'trackAlumni', component: TrackAlumniComponent},
  // { path: 'adminNotifications', component: LastFewNotificationsComponent},
  { path: 'ViewReport', component: ViewReportComponent},
  { path: 'adminFooter', component: AdminFooterComponent},
  { path: 'All-Notifications', component: AllNotificationsComponent},
  { path: 'view-alumniProfile', component: ViewProfileComponent},
  { path: 'contactUs', component: ContactsComponent},
  { path: 'Services', component: ServicesComponent},
  { path: 'aboutUs', component: AboutComponent},
  { path: 'LandingPage', component: UserLandingPageComponent},
  { path: 'view/respondQueries', component: AdminTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
