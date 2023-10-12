import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AlumniStatsComponent } from './alumni-stats/alumni-stats.component';
import { EventsStatsComponent } from './events-stats/events-stats.component';
import { JobsStatsComponent } from './jobs-stats/jobs-stats.component';
import { LastFewNotificationsComponent } from './last-few-notifications/last-few-notifications.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {path: 'adminHome', component: AdminHomeComponent},
  {path: 'alumniProfile', component: UserProfileComponent},
  {path: 'alumniStats', component: AlumniStatsComponent},
  {path: 'eventsStats', component: EventsStatsComponent},
  {path: 'jobsStats', component: JobsStatsComponent} ,
  {path: 'lastfewnotifications', component: LastFewNotificationsComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'topWidget', component: TopWidgetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
