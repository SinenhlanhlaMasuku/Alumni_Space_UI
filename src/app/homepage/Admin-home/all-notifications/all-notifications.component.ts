import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-notifications',
  templateUrl: './all-notifications.component.html',
  styleUrls: ['./all-notifications.component.css']
})
export class AllNotificationsComponent {

  constructor( private router: Router){}

  notifications = [
    {
      id:1,
      subject: "Career guide",
      message: "you are invited to the annu....",
      date: "12-oct-2023",
    },
    {
      id:1,
      subject: "Secure your future",
      message: "you are invited to the annu....",
      date: "23-oct-2023",
    },
    {
      id:1,
      subject: "Live good today",
      message: "you are invited to the annu....",
      date: "5-nov-2023",
    },
    {
      id:1,
      subject: "Career guide",
      message: "you are invited to the annu....",
      date: "01-dec-2023",
    },
    {
      id:1,
      subject: "Career guide",
      message: "you are invited to the annu....",
      date: "12-oct-2023",
    },
  ];
  showNotification(){
    
    // alert('Notification viewed!');
    //pop-up dialog to open
 
  }
  returnHome(){
    this.router.navigate(['/adminHome']);
  }
}
