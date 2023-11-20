//app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueryEntryComponent } from './query-entry/query-entry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NetworkComponent } from './network/network.component';
import { JobsComponent } from './jobs/jobs.component';
import { EventsComponent } from './events/events.component';
import { LogoutComponent } from './logout/logout.component';
import { FAQsComponent } from './faqs/faqs.component';
import { QueryService } from './query.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { FormsModule } from '@angular/forms';
import { AdminService } from './admin.service';
@NgModule({
  declarations: [
    AppComponent,
    QueryEntryComponent,
    SuccessDialogComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    NetworkComponent,
    JobsComponent,
    EventsComponent,
    LogoutComponent,
    FAQsComponent,
    AdminTableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
