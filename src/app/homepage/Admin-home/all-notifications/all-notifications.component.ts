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
  timeReplied: string = "";
  adminFnLletter ="A";
  isRead?: boolean; // Add the isRead property
  // interface: Notification {
  //   id: number,
  //   sender: string,
  //   subject: string;
  //   message: string;
  //   date: string;
  //   time: string;
    // isRead: boolean; // Add the isRead property
// }

  
  constructor( private router: Router, private notificationService: NotificationsService){}
   
  ngOnInit(){
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
      date: "12/11/2023",//replace with real
      time: this.timeReplied,//replace with real
      isRead: false,
    },
    {
      id:1,
      sender: "Admin",
      subject: "Enquiry response",
      message: "We have received your enquiry, we will get back to you shortly...",
      date: "10/11/2023",//replace with real
      time: this.timeReplied,//replace with real
      isRead: false,
    },
    
  ];
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
}

readNotification(index: number): void {
  this.notifications[index].isRead = true;
    this.selectedNotificationIndex = index;
  
}
markAllAsRead(){
  this.notifications.forEach(notification => {
    notification.isRead = true;
  });
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
