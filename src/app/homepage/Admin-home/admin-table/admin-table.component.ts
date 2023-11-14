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
  
  }
  

  data = [
    { user: 'User 1', query: 'Hello, I have a question.', status: 'Unanswered', response: '', timeStamp: null as Date | null },
    { user: 'User 2', query: 'Need assistance with an order.', status: 'Unanswered', response: '', timeStamp: null as Date | null }
  ];
  responseForms: boolean[] = new Array(this.data.length).fill(false);

  toggleResponseForm(index: number) {
    this.responseForms[index] = !this.responseForms[index];
  }

  submitResponse(index: number) {
    // this.data[index].status = 'Answered' + ' ' + this.timeReplied;
    // this.responseForms[index] = false;

    const currentTime = new Date();
  

  this.data[index].status = 'Answered';
  this.data[index].timeStamp = new Date();
  this.responseForms[index] = true;
  }
}
