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
  message: string='';
  fullMessage?: string;
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

    this.setTruncatedMessages();
  
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
    // shortMessage = message;
    // this.message: "you are invited to the annu....",

  notifications = [
    {
      id:1,
      sender: "Admin",
      subject: "Career guide",
      message: "you are invited to the annu....",
      date: "12/11/2023",//replace with real
      time: this.timeReplied,//replace with real
      isRead: false,
      truncatedMessage: '',
    },
    {
      id:2,
      sender: "Admin",
      subject: "Enquiry response",
      message: "We have received your enquiry, we will get back to you shortly...",
      date: "10/11/2023",//replace with real
      time: this.timeReplied,//replace with real
      isRead: false,
      truncatedMessage: '',
    },
    
  ];
  selectedNotification: any = null;

  //new Functions to truncate a message to a specific length starts here
  truncateMessage(message: string, maxLength: number): string {
    return message.length > maxLength
      ? message.substring(0, maxLength / 2) + '...'
      : message;
  }
  setTruncatedMessages(): void {
    for (const notification of this.notifications) {
      notification.truncatedMessage = this.truncateMessage(
        notification.message,
        50
      );
    }
  }
  
  onNotificationClick(index: number): void {
    this.selectedNotificationIndex = index;
    this.notifications[index].isRead = true;
    // this.UnreadNotificationCount();
    this.unreadNotificationCount = this.calculateUnreadNotificationCount()

  }
  

  selectedNotificationIndex: number | null = null;
  isReadNotification(index: number): boolean {
    return this.notifications[index].isRead;
    
}
isSelectedNotification(index: number): boolean {
  return this.selectedNotificationIndex === index;
}

//new functions ends here!
readNotification(index: number): void {
  if (!this.notifications[index].isRead) {
    this.notifications[index].isRead = true;
    this.selectedNotificationIndex = index;
  }
}

private calculateUnreadNotificationCount(): number {
  // Logic to calculate unread notification count
  return this.notifications.filter(notification => !notification.isRead).length;
}

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
