import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import individual components
import { IndexComponent } from './components/index/index.component';
import { ServiceComponent } from './components/service/services.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
//

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'',component:ServiceComponent},
  {path:'',component:AboutComponent},
  {path:'',component:ContactComponent},

  //Call Alumni module

  //Call Admni module
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
