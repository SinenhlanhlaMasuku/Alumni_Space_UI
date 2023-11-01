import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

//imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatTableModule} from '@angular/material/table';

//Admin-Module Components
import { AuthorsComponent } from './modules/admin/dashboard/authors/authors.component';
import { NavbarComponent } from './modules/admin/dashboard/navbar/navbar.component';
import { AdminHomeComponent } from './modules/admin/dashboard/admin-home/admin-home.component';
import { TopWidgetsComponent } from './modules/admin/dashboard/top-widgets/top-widgets.component';
import { AlumniStatsComponent } from './modules/admin/dashboard/alumni-stats/alumni-stats.component';
import { JobsStatsComponent } from './modules/admin/dashboard/jobs-stats/jobs-stats.component';
import { EventsStatsComponent } from './modules/admin/dashboard/events-stats/events-stats.component';
import { LastFewNotificationsComponent } from './modules/admin/dashboard/last-few-notifications/last-few-notifications.component';
import { TrackAlumniComponent } from './modules/admin/track-alumni/track-alumni.component';

//Alumni-Module Components
import { JobsComponent } from './modules/alumni/jobs/jobs.component';
import { AddJobsComponent } from './modules/admin/add-jobs/add-jobs.component';
import { AddPostsComponent } from './modules/admin/add-posts/add-posts.component';

//import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

// import { ViewProfileComponent } from './alumni/profile/view-profile/view-profile.component';
// import { EditProfileComponent } from './alumni/profile/edit-profile/edit-profile.component';

//COMPONENTS
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ServicesComponent } from './components/services/services.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {SuccessComponent} from './success/success.component';
import {SuccessPasswordChangeComponent} from './success-password-change/success-password-change.component';




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