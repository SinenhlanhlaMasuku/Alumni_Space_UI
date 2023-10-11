import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { AlumniStatsComponent } from './alumni-stats/alumni-stats.component';
import { JobsStatsComponent } from './jobs-stats/jobs-stats.component';
import { EventsStatsComponent } from './events-stats/events-stats.component';
import { LastFewNotificationsComponent } from './last-few-notifications/last-few-notifications.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { ViewUserProfileComponent } from './view-user-profile/view-user-profile.component';
import { UserProfileService } from './user-profile.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    NavbarComponent,
    AdminHomeComponent,
    TopWidgetsComponent,
    AlumniStatsComponent,
    JobsStatsComponent,
    EventsStatsComponent,
    LastFewNotificationsComponent,
    UserProfileComponent,
    EditUserProfileComponent,
    ViewUserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ChartModule,
  ],
  providers: [
    UserProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
