import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AlumniStatsComponent } from './alumni-stats/alumni-stats.component';
import { EventsStatsComponent } from './events-stats/events-stats.component';
import { JobsStatsComponent } from './jobs-stats/jobs-stats.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { LastFewNotificationsComponent } from './last-few-notifications/last-few-notifications.component';



@NgModule({
  declarations: [
    HomeComponent,
    AlumniStatsComponent,
    EventsStatsComponent,
    JobsStatsComponent,
    NavbarComponent,
    TopWidgetsComponent,
    LastFewNotificationsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
