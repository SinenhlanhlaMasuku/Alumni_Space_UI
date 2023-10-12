import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChartModule } from 'angular-highcharts';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { AlumniStatsComponent } from './alumni-stats/alumni-stats.component';
import { JobsStatsComponent } from './jobs-stats/jobs-stats.component';
import { EventsStatsComponent } from './events-stats/events-stats.component';
import { LastFewNotificationsComponent } from './last-few-notifications/last-few-notifications.component';
// import {  } from '@fortawesome/fontawesome-free-solid';


// config();

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    ForgotPasswordComponent,
    UserProfileComponent,
    NavbarComponent,
    AdminHomeComponent,
    TopWidgetsComponent,
    AlumniStatsComponent,
    JobsStatsComponent,
    EventsStatsComponent,
    LastFewNotificationsComponent,
    


  ],
    imports: [
    BrowserModule,
    AppRoutingModule,
     FontAwesomeModule,
     HttpClientModule,// Add HttpClientModule
     FontAwesomeModule,
     FormsModule,
     ChartModule,
    //  AuthorsComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }