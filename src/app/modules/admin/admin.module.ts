import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//import components
import { TrackAlumniComponent } from './track-alumni/track-alumni.component';
import { AddJobsComponent } from './add-jobs/add-jobs.component';
import { AddPostsComponent } from './add-posts/add-posts.component';

import { EventService } from '../../services/events/event.service';
import { ViewReportComponent } from './view-report/view-report.component';
import { QueryComponent } from './query/query.component';
import { AlumniResumeComponent } from './alumni-resume/alumni-resume.component';
//import { JobTrackComponent } from './job-track/job-track.component';
//import { JobInterviewSetterDialogComponent } from './job-interview-setter-dialog/job-interview-setter-dialog.component';
//import { JobRejectionDialogComponent } from './job-rejection-dialog/job-rejection-dialog.component';
//import { JobInterviewStatusDialogComponent } from './job-interview-status-dialog/job-interview-status-dialog.component';

@NgModule({
  declarations: [
  
    //JobTrackComponent,
     //  JobInterviewSetterDialogComponent,
      // JobRejectionDialogComponent,
      // JobInterviewStatusDialogComponent
  
    AlumniResumeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      //direct to module-child
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },

      //components pages
      { path: 'trackAlumni', component: TrackAlumniComponent},
      { path: 'post-jobs', component: AddJobsComponent },
      { path: 'post-events', component: AddPostsComponent },
      { path: 'view-report', component: ViewReportComponent},
      { path: 'query', component: QueryComponent}
    ]),
  ],
  providers: [EventService],
})
export class AdminModule { }
