import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { AuthorsComponent } from './admin/dashboard/authors/authors.component';
import { NavbarComponent } from './admin/dashboard/navbar/navbar.component';
import { AdminHomeComponent } from './admin/dashboard/admin-home/admin-home.component';
import { TopWidgetsComponent } from './admin/dashboard/top-widgets/top-widgets.component';
import { AlumniStatsComponent } from './admin/dashboard/alumni-stats/alumni-stats.component';
import { JobsStatsComponent } from './admin/dashboard/jobs-stats/jobs-stats.component';
import { EventsStatsComponent } from './admin/dashboard/events-stats/events-stats.component';
import { LastFewNotificationsComponent } from './admin/dashboard/last-few-notifications/last-few-notifications.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';
//import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';
// import { ViewProfileComponent } from './alumni/profile/view-profile/view-profile.component';
// import { EditProfileComponent } from './alumni/profile/edit-profile/edit-profile.component';
import { TrackAlumniComponent } from './admin/track-alumni/track-alumni.component';
import { MatTableModule} from '@angular/material/table';

//COMPONENTS
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
//Alumni-module Components

//Admni-module Components

//components
import { ServicesComponent } from './components/services/services.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


import {AdminLoginComponent} from './admin-login/admin-login.component';
import {SuccessComponent} from './success/success.component';
import {SuccessPasswordChangeComponent} from './success-password-change/success-password-change.component';
import { JobsComponent } from './alumni/jobs/jobs.component';
import { AddJobsComponent } from './admin/add-jobs/add-jobs.component';
import { AddPostsComponent } from './admin/add-posts/add-posts.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ConfirmationDialogComponent,
    AuthorsComponent,
    NavbarComponent,
    AdminHomeComponent,
    TopWidgetsComponent,
    AlumniStatsComponent,
    JobsStatsComponent,
    EventsStatsComponent,
    LastFewNotificationsComponent,
    TrackAlumniComponent,
    // ViewProfileComponent,
    // EditProfileComponent

    JobsComponent,
    AddJobsComponent,
    SuccessPasswordChangeComponent,
    SuccessComponent,
    AdminLoginComponent,
    AboutComponent,
    ContactsComponent,
    ResetPasswordComponent,
    ServicesComponent,
    AddPostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add FormsModule
    HttpClientModule, BrowserAnimationsModule, // Add HttpClientModule
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    FontAwesomeModule,
    ChartModule,
    //NgxExtendedPdfViewerModule
    PdfViewerModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }