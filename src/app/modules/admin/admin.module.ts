import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//import components
import { TrackAlumniComponent } from './track-alumni/track-alumni.component';
import { AddJobsComponent } from './add-jobs/add-jobs.component';
import { AddPostsComponent } from './add-posts/add-posts.component';

import { EventService } from '../../services/event.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      //direct to module-child
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },

      //components pages
      { path: 'trackAlumni', component: TrackAlumniComponent},
      { path: 'add-jobs', component: AddJobsComponent },
      { path: 'add-posts', component: AddPostsComponent },
    ]),
  ],
  providers: [EventService],
})
export class AdminModule { }
