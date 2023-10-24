import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChatComponent } from './my-network/chat/chat.component';
import { GroupChatComponent } from './my-network/group-chat/group-chat.component';
import { MyNetworkComponent } from './my-network/my-network.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'userprofile', component: UserProfileComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'my-network/chat', component:ChatComponent},
  { path: 'my-network', component: MyNetworkComponent},
  { path: 'my-network/group-chat',component: GroupChatComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
