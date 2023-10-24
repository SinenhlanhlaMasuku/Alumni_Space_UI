import { Component } from '@angular/core';
import { LastFewNotificationsComponent } from '../last-few-notifications/last-few-notifications.component';
import { ThisReceiver } from '@angular/compiler';
import { counter } from '@fortawesome/fontawesome-svg-core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  notificatinId: number=0;
  // notification_Date: string ='23-Oct-2023';
  // getNewNotifaction(){
  //   if(this.notification_Date == '23-Oct-2023'){
  //      this.notificatinId = this.notificatinId + 1;
    // }
  // }
   isAdminProf: boolean = false;
 //adminFnLletter: string ='';
 adminFname: string ='Sihle';
 adminLname: string ='Mhlongo';
 adminFnLletter: string = this.adminFname.substring(0,1) + this.adminLname.substring(0,1);
 contact_No: string = '0867867879';
 address: string ='245 burger str, Pretoria';
 email: string ='admin@tutalumni.com';
  ShowAdminProfile(){
            
    this.isAdminProf = !this.isAdminProf;
   
  }
 
}
