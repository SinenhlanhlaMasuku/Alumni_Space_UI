import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//import components
import { TrackAlumniComponent } from './track-alumni/track-alumni.component';
import { AddJobsComponent } from './add-jobs/add-jobs.component';
import { AddPostsComponent } from './add-posts/add-posts.component';

import { EventService } from '../../services/event.service';
import { ViewReportComponent } from './view-report/view-report.component';
import { QueryComponent } from './query/query.component';

@NgModule({
  declarations: [
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
