import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PeopleYouMayKnowComponent } from './posts/people-you-may-know/people-you-may-know.component';
import { UserLandingPageComponent } from './posts/user-landing-page/user-landing-page.component';
import { UserNavbarComponent } from './posts/user-navbar/user-navbar.component';
import { UserPostComponent } from './posts/user-post/user-post.component';
import { UserProfileInfoComponent } from './posts/user-profile-info/user-profile-info.component';
import { UserStorysComponent } from './posts/user-storys/user-storys.component';
import { WhoToFollowComponent } from './posts/who-to-follow/who-to-follow.component';
import { YourThoughtsComponent } from './posts/your-thoughts/your-thoughts.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
// import {  } from '@fortawesome/fontawesome-free-solid';


// config();

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    ForgotPasswordComponent,
    PeopleYouMayKnowComponent,
    UserLandingPageComponent,
    UserNavbarComponent,
    UserPostComponent,
    UserProfileInfoComponent,
    UserStorysComponent,
    WhoToFollowComponent,
    YourThoughtsComponent,
    ConfirmationDialogComponent
    


  ],
    imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
     HttpClientModule,// Add HttpClientModule
   
     FormsModule,
     MatButtonModule,
    
    //  AuthorsComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }