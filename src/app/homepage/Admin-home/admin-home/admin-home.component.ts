import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminFooterComponent } from 'src/app/admin-footer/admin-footer.component';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{
  // faCoffee = faCoffee;
  welcomeMessage: string ='';
  badgeCount: number=0;
  adminName: string = 'Admin Name';
   currDate: Date = new Date();
   time: string='';
   
  //  private notificationService: NotificationService
   constructor(private router: Router){}

  ngOnInit() {
    this.setWelcomeMessage();
    this.updateTime();

    setInterval(() => {
      this.updateTime();
    }, 1000)

   
  }
  

  updateTime() {
    let now = new Date();
    this.time = this.getCurrentTimeWithAMPM(now);
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

  setWelcomeMessage() {
    const currentTime = new Date().getHours();

    if (currentTime < 12) {
      this.welcomeMessage = 'Good Morning, ';
      
    } else if (currentTime >= 12 && currentTime < 17) {
      this.welcomeMessage = 'Good Afternoon, ';
    } else {
      this.welcomeMessage = 'Good Evening, ';

      
    }
  }
  
}