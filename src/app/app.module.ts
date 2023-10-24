import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {ChatComponent} from'./my-network/chat/chat.component';
import { MyNetworkComponent } from './my-network/my-network.component';
import { GroupChatComponent } from './my-network/group-chat/group-chat.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    UserProfileComponent,
    ForgotPasswordComponent,
    ChatComponent,
    MyNetworkComponent,
    GroupChatComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add FormsModule
    HttpClientModule,
     // Add HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }