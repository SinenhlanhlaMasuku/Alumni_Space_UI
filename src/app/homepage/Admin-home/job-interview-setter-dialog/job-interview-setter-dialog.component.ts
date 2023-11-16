import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  // constructor(){}
  constructor(public dialogRef: MatDialogRef<JobInterviewSetterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancelClick(){
    this.dialogRef.close();
  }
  onConfirmClick(){
    const interviewDetails = {
      interviewDate: this.interviewDate,
      interviewTime: this.interviewTime,
      interviewAddress: this.interviewAddress,
      buildingNumber: this.buildingNumber
    };
    this.dialogRef.close(interviewDetails);
  
  }
}
