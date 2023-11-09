import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NotificationsService } from './notifications.service';

@Component({
  selector: 'app-all-notifications',
  templateUrl: './all-notifications.component.html',
  styleUrls: ['./all-notifications.component.css']
})
export class AllNotificationsComponent {
  notificationId: number = 0;
  isReadnotification: boolean = false;
  isHideNotifications: boolean = true;
  constructor( private router: Router, private notificationService: NotificationsService){}
   
  ngOnInit(){
    this.notificationId = this.notificationService.getNotificationId();
  
    this.notificationService.getNewNotificationReceived().subscribe(() => {
      this.notificationId = this.notificationService.getNotificationId();
      // You can add logic here to trigger the notification bell or update UI
    });
  }


  notifications = [
    {
      id:1,
      sender: "Admin",
      subject: "Career guide",
      message: "you are invited to the annu....",
      date: "12-oct-2023",
    },
    // {
    //   id:1,
    //   subject: "Secure your future",
    //   message: "you are invited to the annu....",
    //   date: "23-oct-2023",
    // },
    // {
    //   id:1,
    //   subject: "Live good today",
    //   message: "you are invited to the annu....",
    //   date: "5-nov-2023",
    // },
    // {
    //   id:1,
    //   subject: "Career guide",
    //   message: "you are invited to the annu....",
    //   date: "01-dec-2023",
    // },
    // {
    //   id:1,
    //   subject: "Career guide",
    //   message: "you are invited to the annu....",
    //   date: "12-oct-2023",
    // },
  ];
  // showNotification(){
    
  //   alert('Notification viewed!');
  //   pop-up dialog to open
 
  // }
  
  readNotification(count: number) {
    this.notificationService.decreaseNotificationId(count);
    this.notificationId = this.notificationService.getNotificationId();
    this.isReadnotification = true;
    this.isHideNotifications = false;
  }
  

  returnHome(){
    this.router.navigate(['/LandingPage']);
  }
}
