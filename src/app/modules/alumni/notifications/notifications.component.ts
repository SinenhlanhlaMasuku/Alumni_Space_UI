import { Component } from '@angular/core';

import { Router, RouterLink } from '@angular/router';
import { NotificationsService } from 'src/app/services/notification/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  notificationId: number = 0;
  isReadnotification: boolean = false;
  isHideNotifications: boolean = true;
  timeReplied: string = "";
  queries: any[] = [];
  
  constructor( private router: Router, private notificationService: NotificationsService){}
   
  ngOnInit(){
    //get queries
    const storedEvents = localStorage.getItem('queries');
    if (storedEvents) {
      this.queries = JSON.parse(storedEvents);
      console.log(this.queries);
    }

    this.notificationId = this.notificationService.getNotificationId();
  
    this.notificationService.getNewNotificationReceived().subscribe(() => {
      this.notificationId = this.notificationService.getNotificationId();
      // You can add logic here to trigger the notification bell or update UI
      
      // this.getCurrentTimeWithAMPM();
      
    });



    this.updateTime(),
    setInterval(() => {
      this.updateTime();
    }, 1000)
  }
  


  // ngOnInit() {
  //   // this.setWelcomeMessage();
  //   this.updateTime();

  //   setInterval(() => {
  //     this.updateTime();
  //   }, 1000)

   
  // }

  updateTime() {
    let now = new Date();
    this.timeReplied = this.getCurrentTimeWithAMPM(now);
    // .toTimeString().split(' ')[0];
  } 

  getCurrentTimeWithAMPM(date: Date): string {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const isPM = hours >= 12;
    const AMPM = isPM ? 'PM' : 'AM';

    // Convert to 12-hour format
    const displayHours = hours % 12 || 12;

    return `${displayHours}:${minutes.toString().padStart(2, '0')} ${AMPM}`;
  }

  notifications = [
    {
      id:1,
      sender: "Admin",
      subject: "Career guide",
      message: "you are invited to the annu....",
      //message: this.queries[0].query,
      date: "12/11/2023",//replace with real
      time: this.timeReplied,//replace with real
    },
  ];
  // showNotification(){
    
  //   alert('Notification viewed!');
  //   pop-up dialog to open
 
  // }
  
  readNotification(count: number) {
    this.notificationService.decreaseNotificationId(count);
    this.notificationId = this.notificationService.getNotificationId();
    if(this.isReadnotification = true){
    this.isHideNotifications = false;
    count++;  
  }
    else{
      count = 0;
    }

    //  alert('read notification = ' + count);
  }
  

  returnHome(){
    this.router.navigate(['/alumni/home']);
  }
}
