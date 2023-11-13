import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
// import { NotificationsService } from './notifications.service';
import { NotificationService } from 'src/app/Shared_services/notification.service';

@Component({
  selector: 'app-all-notifications',
  templateUrl: './all-notifications.component.html',
  styleUrls: ['./all-notifications.component.css']
})
export class AllNotificationsComponent {
  notificationId: number = 0;
  isReadnotification: boolean = false;
  isHideNotifications: boolean = true;
  timeReplied: string = "";
  adminFnLletter ="A";
  isRead?: boolean; // Add the isRead property
  unreadNotificationCount?: number;
  // unreadNotificationCount = this.notifications.length;

  // interface: Notification {
  //   id: number,
  //   sender: string,
  //   subject: string;
  //   message: string;
  //   date: string;
  //   time: string;
    // isRead: boolean; // Add the isRead property
// }

  
  constructor( private router: Router, private notificationService: NotificationService){}
   
  ngOnInit(){
    // this.notificationId = this.notificationService.getNotificationId();
  
    // this.notificationService.getNewNotificationReceived().subscribe(() => {
      // this.notificationId = this.notificationService.getNotificationId();
      // You can add logic here to trigger the notification bell or update UI
      
      // this.getCurrentTimeWithAMPM();
     

    // });
    // this.unreadNotificationCount = this.notifications.length;
     // Initialize the count from the service
    this.notificationService.unreadNotificationCount$.subscribe(count => {
      this.unreadNotificationCount = count;
    }); 
    // Set the initial count based on unread notifications
    this.unreadNotificationCount = this.calculateUnreadNotificationCount();
    this.updateTime(),
    setInterval(() => {
      this.updateTime();
    }, 1000)
    this.unreadNotificationCount = this.notifications.length;
  }
  


  // ngOnInit() {
  //   // this.setWelcomeMessage();
  //   this.updateTime();

  //   setInterval(() => {
  //     this.updateTime();
  //   }, 1000)

   
  // }

  // updateTime() {
  //   let now = new Date();
  //   this.timeReplied = this.getCurrentTimeWithAMPM(now);
  //   // .toTimeString().split(' ')[0];
  // } 

  // getCurrentTimeWithAMPM(date: Date): string {
  //   const hours = date.getHours();
  //   const minutes = date.getMinutes();
  //   const isPM = hours >= 12;
  //   const AMPM = isPM ? 'PM' : 'AM';

    // Convert to 12-hour format
    // const displayHours = hours % 12 || 12;

    // return `${displayHours}:${minutes.toString().padStart(2, '0')} ${AMPM}`;
  // }

  updateTime() {
    const now = new Date();
    const timeReplied = this.calculateTimeDifference(now);
    this.timeReplied = timeReplied;
  }
  
  calculateTimeDifference(date: Date): string {
    const currentTime = new Date();
    const timeDifference = currentTime.getTime() - date.getTime();
  
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));
    const hoursDifference = Math.floor(minutesDifference / 60);
  
    if (hoursDifference >= 1) {
      return `${hoursDifference} hr ago`;
    } else {
      return `${minutesDifference} min ago`;
    }
  }

  notifications = [
    {
      id:1,
      sender: "Admin",
      subject: "Career guide",
      message: "you are invited to the annu....",
      date: "12/11/2023",//replace with real
      time: this.timeReplied,//replace with real
      isRead: false,
    },
    {
      id:2,
      sender: "Admin",
      subject: "Enquiry response",
      message: "We have received your enquiry, we will get back to you shortly...",
      date: "10/11/2023",//replace with real
      time: this.timeReplied,//replace with real
      isRead: false,
    },
    
  ];

  //  unreadNotificationCount = this.notifications.length;
  // showNotification(){
    
  //   alert('Notification viewed!');
  //   pop-up dialog to open
 
  // }
  
  // readNotification(count: number) {
  //   this.notificationService.decreaseNotificationId(count);
  //   this.notificationId = this.notificationService.getNotificationId();
  //   if(this.isReadnotification = true){
  //   this.isHideNotifications = false;
  //   count++;  
  // }
  //   else{
  //     count = 0;
  //   }

    
  // }
  selectedNotificationIndex: number | null = null;
  isReadNotification(index: number): boolean {
    return this.notifications[index].isRead;
    // this.unreadNotificationCount =  this.notifications.length - 1 ;
}
// this.unreadNotificationCount = this.notifications.length;
// readNotification(index: number): void {
//   this.notifications[index].isRead = true;
//     this.selectedNotificationIndex = index;
//     this.unreadNotificationCount =  this.notifications.length - index;
//     // index--;
  
//   }
readNotification(index: number): void {
  if (!this.notifications[index].isRead) {
    this.notifications[index].isRead = true;
    this.selectedNotificationIndex = index;
    this.unreadNotificationCount = this.calculateUnreadNotificationCount();
  }
}

private calculateUnreadNotificationCount(): number {
  // Logic to calculate unread notification count
  return this.notifications.filter(notification => !notification.isRead).length;
}



// markAllAsRead(){
  
  // this.notifications.forEach(notification => {
    // notification.isRead = true;
    // this.unreadNotificationCount =  this.notifications.length - this.notifications.length;
     
    //new
  //   if (!notification.isRead) {
  //     notification.isRead = true;
  //     if(this.unreadNotificationCount !== undefined){
  //       this.unreadNotificationCount--;
  //     }
    
  //   }
  
  // });
  // this.notificationService.updateUnreadNotificationCount(this.unreadNotificationCount);
  // Update the service with the new count
  // this.notificationService.updateUnreadNotificationCount(this.unreadNotificationCount);
//   if (this.unreadNotificationCount !== undefined) {
//     this.notificationService.updateUnreadNotificationCount(this.unreadNotificationCount);
//   }

// }
markAllAsRead() {
  this.notifications.forEach(notification => {
    if (!notification.isRead) {
      notification.isRead = true;
    }
  });

  // Update the service with the new count
  this.unreadNotificationCount = this.notifications.filter(notification => !notification.isRead).length;
  this.notificationService.updateUnreadNotificationCount(this.unreadNotificationCount);
}

  returnHome(){
    this.router.navigate(['/LandingPage']);
  }
  // backtoNot(){
  //   this.isHideNotifications = true;
  //   this.isReadnotification = false

  // }
  backtoNot(): void {
    this.selectedNotificationIndex = null;
}

}
