import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    HomepageComponent,
    HeaderComponent,
    ImageSliderComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '',component:  HomepageComponent},
    ]),
  ]
})
export class HomeModule { }
