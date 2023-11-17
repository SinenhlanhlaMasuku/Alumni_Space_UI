import { Component, Inject, OnInit } from '@angular/core';
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

  notifyApplicant!: string;
  // constructor(){}
  constructor(public dialogRef: MatDialogRef<JobInterviewSetterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
ngOnInIt(): void{
  // Access job title from data
  console.log(this.data.jobTitle);

}

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
     // Do something with notifyApplicant, e.g., save it or use it
     console.log('Selected Option:', this.notifyApplicant);
  }
}
