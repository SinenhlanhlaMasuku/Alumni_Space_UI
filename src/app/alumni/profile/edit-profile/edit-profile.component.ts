import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  /*constructor(@Inject(UserProfileService) private service : UserProfileService){

  }
  viewProfile(view: HTMLButtonElement){
    this.service.viewProfile();
  }*/

  

  //variables
  alumni = {
          Name: "",
          Location: "",
          Qualification:"" ,
          Skills: "",
          Experience: "",
          Employment_Status: "",
          Academic_Transcript: "",
          Interest: "",
          Bio : "",
  }
 message: string ='';
 
 isButtonSaveAR: boolean = false;
 isBtnSaveProfPic: boolean = false;
 isBtnSaveCertificate: boolean = false;
 AcademicRChosen: boolean = false;
 profilePicChosen: boolean = false;
 certificateChosen: boolean = false;

  ngOnInit() {
    const storedName = localStorage.getItem('Name');
    
    if (storedName) {
      // Update the 'name' property if 'name' is found in localStorage
      this.alumni.Name = storedName;
    }
  }

  constructor(private http: HttpClient, private router: Router, public dialog: MatDialog) {}
  //using confirmation dialog to confirm user saving profile
  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
     width: '400px',
     
     data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.saveProfile(); // Call the saveProfile function when the dialog is confirmed
      }
    });
  }
  saveProfile(){
    //get user_id
    const user_id = localStorage.getItem('account_id');
      
    const formData = {user_id,skills: this.alumni.Skills,experience: this.alumni.Experience, interest:this.alumni.Interest, bio:this.alumni.Bio, location:this.alumni.Location,qualification: this.alumni.Qualification,employment_status: this.alumni.Employment_Status};
      
      

      //pass data into the server
      this.http.put('http://localhost:3000/api/userprofile/:user_id', formData).subscribe((response: any) => {
      console.log('Data sent to server:', response);
     // console.log('.......saving..')
      
     
    });

    this.openDialog();
      
      console.log(formData);
      console.log(user_id);
      this.message = 'profile saved!';
      // this.message += `\nFull Name: ${this.alumni.Name}`;
      // this.message += `\nLocation: ${this.alumni.Location}`;


        

      // dialogRef.afterClosed().subscribe(result => {
      //   if (result) {
      //     // Call the save profile function here
      //     //this.confirmSave();
      //     this.saveProfile();
      //   }
      // });

     }
  
   //function to handle academic record selection
   onAcademicRecChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.AcademicRChosen = true;
    } else {
      this.AcademicRChosen = false;
    }
  }

  //function to handle profile picture selection
  onProfilePicChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.profilePicChosen = true;
    } else {
      this.profilePicChosen = false;
    }
  }
  //function to handle certificate selection
  onCertificateChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.certificateChosen = true;
    } else {
      this.certificateChosen = false;
    }
  }

  cancelEdit(){
    console.log('Are you sure you want to cancel editing profile?')
    
  }
  saveAcademicRecord(){
     console.log('academic record saved successfully!')
     this.isButtonSaveAR = true;

  }

  saveProfilePic(){
    console.log('profile picture saved successfully!')
    this.isBtnSaveProfPic = true;
  }
   
 saveCertificate(){
    console.log('certificate saved successfully!')
    this.isBtnSaveCertificate = true;
 }


}