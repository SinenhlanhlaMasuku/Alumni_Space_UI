import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsComponent } from './applications/applications.component';
import { AcceptApplicationComponent } from './accept-application/accept-application.component';
import { RejectApplicationComponent } from './reject-application/reject-application.component';
import { ApplicationStatusComponent } from './application-status/application-status.component';
import { AlumniResumeComponent } from './alumni-resume/alumni-resume.component';



@NgModule({
  declarations: [
    ApplicationsComponent,
    AcceptApplicationComponent,
    RejectApplicationComponent,
    ApplicationStatusComponent,
    AlumniResumeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class JobApplicationsModule { }
