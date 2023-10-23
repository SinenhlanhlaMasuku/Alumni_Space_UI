import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';



@NgModule({
  declarations: [
    JobsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
    ]),
  ]
})
export class AlumniModule { }
