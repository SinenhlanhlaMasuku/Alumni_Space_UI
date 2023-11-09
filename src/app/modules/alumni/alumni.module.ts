import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//import components
import { JobsComponent } from './jobs/jobs.component';
import { EventsComponent } from './events/events.component';
import { NotificationsComponent } from './notifications/notifications.component';




@NgModule({
  declarations: [
    EventsComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
      { path: 'home', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) },
      { path: 'queries', loadChildren: () => import('./queries/queries.module').then(m => m.QueriesModule) },
      
    
      //components
      { path: 'jobs', component: JobsComponent },
      { path: 'events', component: EventsComponent},
      { path: 'notifications', component: NotificationsComponent},
    ]),
  ]
})
export class AlumniModule { }
