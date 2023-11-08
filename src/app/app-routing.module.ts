import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { ServicesComponent } from './components/services/services.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';
import {SuccessComponent} from './components/success/success.component';
import {SuccessPasswordChangeComponent} from './components/auth/success-password-change/success-password-change.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  
  
  //Alumni-module Components
  { path: 'alumni', loadChildren: () => import('./modules/alumni/alumni.module').then(m => m.AlumniModule) },

  //Admni-module Components
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  

  //Components
  { path: 'contacts', component: ContactsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  //
  { path: 'success', component: SuccessComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'success-password-change', component: SuccessPasswordChangeComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
