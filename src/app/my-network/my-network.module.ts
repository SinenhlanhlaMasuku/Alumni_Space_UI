import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyNetworkComponent } from './my-network.component';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { ChatComponent } from './chat/chat.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],

  })

export class MyNetworkModule { }
