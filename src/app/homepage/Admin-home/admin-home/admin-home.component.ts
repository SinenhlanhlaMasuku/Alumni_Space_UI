import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { 
//   faCoffee,
//   faPerson,
//   faSuitcase,
//   faClock,
  // faCalendarWeek } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{
  // faCoffee = faCoffee;
  welcomeMessage: string ='';
  constructor(private router: Router){}
  adminName: string = '';
   currDate: Date = new Date();
   time: string='';
  
  ngOnInit() {
    this.setWelcomeMessage();
    this.updateTime();

    setInterval(() => {
      this.updateTime();
    }, 1000)
  }
  
  updateTime() {
    let now = new Date();
    this.time = now.toTimeString().split(' ')[0];
  }

  setWelcomeMessage() {
    const currentTime = new Date().getHours();

    if (currentTime < 12) {
      this.welcomeMessage = 'Good Morning, Admin!';
    } else if (currentTime >= 12 && currentTime < 17) {
      this.welcomeMessage = 'Good Afternoon, Admin!';
    } else {
      this.welcomeMessage = 'Good Evening, Admin!';
    }
  }
  
}
