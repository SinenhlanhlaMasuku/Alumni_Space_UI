import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './components/register/register.component';
import { ApplyPageComponent } from './modules/alumni/apply-page/apply-page.component';

//imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from './modules/alumni/profile/confirmation-dialog/confirmation-dialog.component';
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
import { AdminFooterComponent } from './modules/admin/dashboard/admin-footer/admin-footer.component';
import { ViewReportComponent } from './modules/admin/view-report/view-report.component';

//Alumni-Module Components
import { JobsComponent } from './modules/alumni/jobs/jobs.component';
import { AddJobsComponent } from './modules/admin/add-jobs/add-jobs.component';
import { AddPostsComponent } from './modules/admin/add-posts/add-posts.component';
import { QueryComponent } from './modules/admin/query/query.component';
import { JobDescriptionComponent } from './modules/alumni/job-description/job-description.component';


//import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

// import { ViewProfileComponent } from './alumni/profile/view-profile/view-profile.component';
// import { EditProfileComponent } from './alumni/profile/edit-profile/edit-profile.component';

//COMPONENTS
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ServicesComponent } from './components/services/services.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import {SuccessComponent} from './components/success/success.component';
import {SuccessPasswordChangeComponent} from './components/auth/success-password-change/success-password-change.component';
import { SuccessModalComponent } from './components/success-modal/success-modal.component';
import { DataServiceService } from './services/dataService/data-service.service';
import { JobTrackComponent } from './modules/admin/job-track/job-track.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
// import { MatTimepickerModule } from 'mat-timepicker';
import { MatRadioModule } from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { JobRejectionDialogComponent } from './modules/admin/job-rejection-dialog/job-rejection-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
//services



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
    AdminFooterComponent,
    ViewReportComponent,
    EventsStatsComponent,
    LastFewNotificationsComponent,
    TrackAlumniComponent,
    QueryComponent,
    RegisterComponent,
    ApplyPageComponent,

    // ViewProfileComponent,
    // EditProfileComponent

    JobsComponent,
    JobDescriptionComponent,
    AddJobsComponent,
    SuccessPasswordChangeComponent,
    SuccessComponent,
    AboutComponent,
    ContactsComponent,
    ResetPasswordComponent,
    ServicesComponent,
    AddPostsComponent,
    SuccessModalComponent,
    JobTrackComponent,
   JobRejectionDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule, // Add FormsModule
    HttpClientModule, BrowserAnimationsModule, // Add HttpClientModule
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    FontAwesomeModule,
    ChartModule,
    //NgxExtendedPdfViewerModule
    PdfViewerModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule, 
    MatInputModule, 
    MatNativeDateModule,
    MatRadioModule ,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,

  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }