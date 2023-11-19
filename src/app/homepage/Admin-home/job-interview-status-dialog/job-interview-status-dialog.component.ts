// import { Component } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
// Define the interface for the Alumni object
interface Alumni {
  fullNames: string;
  lastName: string;
  skills: string[];
  email: string;
  experience: string;
  qualification: string;
  certificateNames: string[];
  certificates: string[];
  Bio: string;
  address: string;
   interests: string[];
   alumnipic: string;
   jobAppliedFor: string;
   applicationStatus?: string;
  shortlisted?: boolean;
  interviewDate?: string;
  interviewTime?: string;
}

@Component({
  selector: 'app-job-interview-status-dialog',
  templateUrl: './job-interview-status-dialog.component.html',
  styleUrls: ['./job-interview-status-dialog.component.css']
})
export class JobInterviewStatusDialogComponent {
  dialogType: boolean;
  applicationStatus: string ='';
  constructor(public dialogRef: MatDialogRef<JobInterviewStatusDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackbar: MatSnackBar
  ) {
    this.dialogType = data.dialogType;
    
  }
   
  ngOnInit(): void{
    // Access job title and other attributes from data
    console.log(this.data.jobTitle);
    console.log(this.data.firstname);
    console.log(this.data.surname);
    
  
   }
   showSnackbar(message: string) {
    this.snackbar.open(message, 'Close', {
      duration: 2000, // Duration the snackbar is shown in milliseconds
      verticalPosition: 'top', // Set the vertical position to 'top'
      horizontalPosition: 'center', // Set the horizontal position to 'center'
      panelClass: ['snackbar'], // Add your custom class for styling
    });
  }
  onCancelClick(){
    this.dialogRef.close();
    this.showSnackbar('Cancelled!')
  }

  onConfirmClick(){
    const interviewDetails = {
         applicationStatus: this.applicationStatus,
      // interviewLink: this.meetingLink,
    };
    // if(this.interviewDate.toString.length !== 0 || this.interviewTime.toString.length !== 0 || this.buildingNumber.length !== 0){
    // this.interviewConfirmed.emit(interviewDetails);
    this.dialogRef.close(interviewDetails);
     // Do something with notifyApplicant, e.g., save it or use it
     if(this.applicationStatus == 'Hired'){
      console.log('Job Status:', this.applicationStatus);
      this.showSnackbar('Applicant have been hired,  interview went well!');
     }
     
  }
}
