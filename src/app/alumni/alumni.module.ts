import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
      { path: 'home', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) },
    ]),
  ]
})
export class AlumniModule { }
