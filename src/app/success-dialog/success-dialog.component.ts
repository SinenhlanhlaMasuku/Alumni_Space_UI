//success-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
 // import { formatDistanceToNow } from 'date-fns';
  
  @Component({
    selector: 'app-success-modal',
    templateUrl: './success-dialog.component.html',
    styleUrls: ['./success-dialog.component.css'],
  })
  
  export class SuccessDialogComponent {
    currentDate: string = new Date().toLocaleDateString();
    currentTime: string = new Date().toLocaleTimeString();

  
    constructor(
      @Inject(MAT_DIALOG_DATA) public data: { message: string; timestamp: Date },
      private dialogRef: MatDialogRef<SuccessDialogComponent>
    ) 
    {}
    
    formatTime(date: Date): string {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    closeModal(): void {
      this.dialogRef.close();
    }
  }