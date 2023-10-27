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
   images: string[] =[
    'assets/AWS-Logo.png',
    'assets/AWS-Logo.png',
    'assets/AWS-Logo.png'
   ];
   slideIndex = 0;
  
  ngOnInit() {
    this.setWelcomeMessage();
    this.updateTime();

    setInterval(() => {
      this.updateTime();
    }, 1000),

    this.showSlides();
  }
  showSlides() {
    let i;
    const slides = document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    this.slideIndex++;
    if (this.slideIndex > slides.length) {
      this.slideIndex = 1;
    }
    slides[this.slideIndex - 1].style.display = 'block';
    setTimeout(() => this.showSlides(), 2000); // Change image every 2 seconds
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
