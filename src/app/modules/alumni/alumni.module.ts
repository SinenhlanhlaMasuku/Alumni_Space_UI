import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//import components
import { JobsComponent } from './jobs/jobs.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
      { path: 'home', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) },
    
      //components
      { path: 'jobs', component: JobsComponent },
    ]),
  ]
})
export class AlumniModule { }
