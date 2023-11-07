import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-last-few-notifications',
  templateUrl: './last-few-notifications.component.html',
  styleUrls: ['./last-few-notifications.component.css']
})
export class LastFewNotificationsComponent {
  
  // MatDialog: DialogRef;
  totalAlumnRegistered: number=0;
  Total_jobs_posted: number=0;
  Total_events_posted: number=0;
  reportdate = new Date();
 formattedDate = this.reportdate.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'short',
  day: '2-digit'
});

  constructor( private router: Router){}

  StatsSummary = [
    {
      // id:1,
      subject: "Alumni registered:",
      message: this.totalAlumnRegistered +" registered recently",
      date: this.formattedDate,
    },
    {
      // id:2,
      subject: "Events posted",
      message: this.Total_events_posted + " posted this month",
      date: this.formattedDate,
    },
    {
      // id:2,
      subject: "Jobs Posted",
      message: this.Total_jobs_posted + " posted this month",
      date: this.formattedDate,
    }
    
  ];
  showNotification(){
    
    // alert('Notification viewed!');
    //pop-up dialog to open
 
  }
  returnHome(){
    this.router.navigate(['/adminHome']);
  }
}
