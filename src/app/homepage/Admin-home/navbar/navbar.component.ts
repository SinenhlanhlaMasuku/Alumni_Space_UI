import { Component } from '@angular/core';
import { LastFewNotificationsComponent } from '../last-few-notifications/last-few-notifications.component';
import { ThisReceiver } from '@angular/compiler';
import { counter } from '@fortawesome/fontawesome-svg-core';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private snackBar: MatSnackBar) {}

  notificatinId: number=0;
  // notification_Date: string ='23-Oct-2023';
  // getNewNotifaction(){
  //   if(this.notification_Date == '23-Oct-2023'){
  //      this.notificatinId = this.notificatinId + 1;
    // }
  // }
   isAdminProf: boolean = false;
   isEditAdminProf: boolean = false;
 //adminFnLletter: string ='';
 adminFname: string ='Sihle';
 adminLname: string ='Mhlongo';
 adminFnLletter: string = this.adminFname.substring(0,1) + this.adminLname.substring(0,1);
 contact_No: string = '0867867879';
 address: string ='245 burger str, Pretoria';
 email: string ='admin@tutalumni.com';

newName: string ='';
newcontact_No: string='';
newAddress: string='';
newEmail: string ='';
  
 ShowAdminProfile(){
            
    this.isAdminProf = !this.isAdminProf;
    // this.isEditAdminProf = this.isEditAdminProf;
   
  }
  showSnackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000, // Duration the snackbar is shown in milliseconds
      verticalPosition: 'top', // Set the vertical position to 'top'
      horizontalPosition: 'center', // Set the horizontal position to 'center'
      panelClass: ['snackbar'], // Add your custom class for styling
    });
  }

  editAdminProfile(){
    this.isEditAdminProf = !this.isEditAdminProf;
    this.isAdminProf = this.isAdminProf;
    // this.isAdminProf = !this.isEditAdminProf;
  }
   
SaveAdminProfile(){
  const nameSize = this.newName.length;
  if(this.newName.length != 0 && this.newcontact_No.length != 0 && this.newEmail.length != 0 && this.newAddress.length != 0){
     this.adminFname = this.newName.substring(0, this.newName.indexOf(' '));
     this.adminLname = this.newName.substring(this.newName.indexOf(' '), nameSize);
     this.contact_No = this.newcontact_No;
     this.email = this.newEmail;
    this.address = this.newAddress;
    this.adminFnLletter = this.adminFname.substring(0, 1) + this.adminLname.substring(1, 2);

  this.showSnackbar('Admin Profile saved successfully!');
  this.isEditAdminProf = !this.isEditAdminProf;
  }else
  {
     this.showSnackbar('please fill the missing fields!');
  }
  
  
}
 
}
