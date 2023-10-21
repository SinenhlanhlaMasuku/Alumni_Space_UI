import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { AuthorsComponent } from './homepage/Admin-home/authors/authors.component';
import { NavbarComponent } from './homepage/Admin-home/navbar/navbar.component';
import { AdminHomeComponent } from './homepage/Admin-home/admin-home/admin-home.component';
import { TopWidgetsComponent } from './homepage/Admin-home/top-widgets/top-widgets.component';
import { AlumniStatsComponent } from './homepage/Admin-home/alumni-stats/alumni-stats.component';
import { JobsStatsComponent } from './homepage/Admin-home/jobs-stats/jobs-stats.component';
import { EventsStatsComponent } from './homepage/Admin-home/events-stats/events-stats.component';
import { LastFewNotificationsComponent } from './homepage/Admin-home/last-few-notifications/last-few-notifications.component';
//import { FontAwesomeModule } from '.@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ServicesPageComponent,
    ConfirmationDialogComponent,
    AuthorsComponent,
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
    FormsModule, // Add FormsModule
    HttpClientModule, BrowserAnimationsModule, // Add HttpClientModule
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    FontAwesomeModule,
    ChartModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }