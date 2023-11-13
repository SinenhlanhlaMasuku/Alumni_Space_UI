import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// import {  } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import{ NgStyle}  from '@angular/common';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent {
  timeReplied: string = '';
  Repliedtime?: Date;

  constructor(private changeDetectorRef: ChangeDetectorRef){}
  ngOnInit(){
    this.updateTime();
    // setInterval(() => {
    //   this.updateTime();
    // }, 1000)

    // setInterval(() => {
    //   this.calculateAndSetTimeDifference();
    // }, 60000); // 60000 milliseconds = 1 minute
  }
  //replied time implementation
  updateTime() {
    // const now = new Date();
    // const timeReplied = this.calculateTimeDifference(now);
    // this.timeReplied = timeReplied;
    // this.calculateAndSetTimeDifference();
    setInterval(() => {
      this.calculateAndSetTimeDifference();
    }, 60000);
  }
  calculateAndSetTimeDifference(): void {
    const now = new Date();
    const timeReplied = this.calculateTimeDifference(now);
    this.timeReplied = timeReplied;
      // console.log("time function works! " + timeReplied)
    this.changeDetectorRef.detectChanges();
  }
  // calculateTimeDifference(date: Date): string {
  //   const currentTime = new Date();
  //   const timeDifference = currentTime.getTime() - date.getTime();
  
  //   const minutesDifference = Math.floor(timeDifference / (1000 * 60));
  //   const hoursDifference = Math.floor(minutesDifference / 60);
  
  //   if (hoursDifference >= 1) {
  //     return `${hoursDifference} hr ago`;
  //   } else {
  //     return `${minutesDifference} min ago`;
  //   }
  // }
  
  // calculateAndSetTimeDifference(): void {
  //   const now = new Date();
  //   const timeReplied = this.calculateTimeDifference(now);
  //   this.timeReplied = timeReplied;

  //   // Trigger change detection manually to update the view
  //   this.changeDetectorRef.detectChanges();
  // }

  calculateTimeDifference(currentTime: Date): string {
    const timeDifference = Math.floor((currentTime.getTime() - currentTime.getTime()) / (1000 * 60));

    if (timeDifference >= 60) {
      const hoursDifference = Math.floor(timeDifference / 60);
      return `${hoursDifference} hr ago`;
    } else {
      return `${timeDifference} min ago`;
    }
  }


  data = [
    { user: 'User 1', query: 'Hello, I have a question.', status: 'Unanswered', response: '' },
    { user: 'User 2', query: 'Need assistance with an order.', status: 'Unanswered', response: '' }
  ];
  responseForms: boolean[] = new Array(this.data.length).fill(false);

  toggleResponseForm(index: number) {
    this.responseForms[index] = !this.responseForms[index];
  }

  submitResponse(index: number) {
    // this.data[index].status = 'Answered' + ' ' + this.timeReplied;
    // this.responseForms[index] = false;

    const currentTime = new Date();
  this.timeReplied = this.calculateTimeDifference(currentTime);

  this.data[index].status = 'Answered' + ' ' + this.timeReplied;
  this.responseForms[index] = true;
  }
}
