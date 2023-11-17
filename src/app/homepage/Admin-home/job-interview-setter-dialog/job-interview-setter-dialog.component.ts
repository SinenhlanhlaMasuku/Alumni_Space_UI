import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-job-interview-setter-dialog',
  templateUrl: './job-interview-setter-dialog.component.html',
  styleUrls: ['./job-interview-setter-dialog.component.css']
})
export class JobInterviewSetterDialogComponent {
  interviewDate!: Date;
  interviewTime!: Date;
  interviewAddress!: string;
  buildingNumber!: string;
 
  rejectionReason: string = '';
  notifyApplicant: boolean = false;
  dialogType: boolean; // Add this line to declare the property
  isAcceptDialog: boolean = false;
  isRejectDialog: boolean = false;

  // notifyApplicant!: string;
  // constructor(){}
  constructor(public dialogRef: MatDialogRef<JobInterviewSetterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackbar: MatSnackBar
  ) {
    this.dialogType = data.dialogType;

  }
 ngOnInIt(): void{
  // Access job title from data
  console.log(this.data.jobTitle);

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
      interviewDate: this.interviewDate,
      interviewTime: this.interviewTime,
      // interviewAddress: this.interviewAddress,
      buildingNumber: this.buildingNumber
    };
    this.dialogRef.close(interviewDetails);
     // Do something with notifyApplicant, e.g., save it or use it
     console.log('Selected Option:', this.notifyApplicant);
     this.showSnackbar('Applicant have been shortlisted, waiting for interview');
  }

  // New method for handling rejection
  handleRejection(): void {
    // Your rejection logic here...

    // Close the dialog after handling rejection
    this.dialogRef.close();
  }

}
